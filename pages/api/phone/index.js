import dbConnect from "../../../lib/mongodb";
import Phone from "../../../models/Phone";
import fs from "fs";
import convert from "xml-js";
import moment from "moment";
import axios from "axios";

const key = require("../indexing.json");
const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ["https://www.googleapis.com/auth/indexing"],
  null
);

const updateSitemap = (number) => {
  console.log("sitemap add number: ", number);
  const p = process.env.NODE_ENV === "production" ? "/opt" : ".";
  const f = process.env.NODE_ENV === "production" ? "/phonebookup/public" : "";
  var json = fs.readFileSync(`${p}/sitemap.json`, "utf8");
  const d = JSON.parse(json);

  d.urlset.url.push({
    loc: {
      _text: `https://realcup.co.kr/number/${number}`,
    },
    lastmod: { _text: moment().format("YYYY-MM-DD") },
    priority: { _text: "1.0" },
  });

  var options = { compact: true, ignoreComment: true, spaces: 2 };
  var result = convert.json2xml(JSON.stringify(d), options);
  fs.writeFile(`${p}/sitemap.json`, JSON.stringify(d), function (err) {
    if (err !== null) {
      console.log("sitemap fail");
    }
  });
  fs.writeFile(`${p}${f}/sitemap.xml`, result, function (err) {
    if (err !== null) {
      console.log("sitemap fail");
    }
  });
};

const googleIndexingApi = (number) => {
  jwtClient.authorize(function (err, tokens) {
    if (err) {
      console.log(err);
      return;
    }
    let params = {
      auth: { bearer: tokens.access_token },
      json: {
        url: `https://realcup.co.kr/number/${number}`,
        type: "URL_UPDATED",
      },
    };

    axios
      .post(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        params,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        console.log(`number indexing success!`);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const handler = async (req, res) => {
  const { method } = req;
  let { number, ip } = req.body;

  if (!number) {
    throw "no number";
  }
  try {
    switch (method) {
      case "POST":
        // 숫자만 들어가게끔 함.
        number = number.replace(/[^0-9]/g, "");
        const params = {
          number,
          ip,
        };

        const newPhone = new Phone(params);
        const item = await newPhone.save();

        // sitemap 등록
        updateSitemap(item.number);

        // googleindexing 등록
        googleIndexingApi(item.number);

        res.status(200).json(item || {});
        break;
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

export default dbConnect(handler);
