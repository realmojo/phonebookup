(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[696],{1422:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/number/[number]",function(){return t(6850)}])},292:function(e,n,t){"use strict";t.d(n,{h:function(){return f}});var r=t(5893),c=t(7294),s=t(1163),a=t(1664),o=t.n(a),i=t(3122),u=t(6713),l=t(6871),m=t(8863),p=t(8795),d=(0,r.jsx)(p.Z,{style:{fontSize:16,color:"#1890ff"}}),f=function(){var e=(0,s.useRouter)(),n=(0,c.useState)(""),t=n[0],a=n[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Z,{style:{background:"#1890ff"},className:"site-page-header",title:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)(l.C,{style:{cursor:"pointer",width:50,height:50},src:"https://phonebookup.s3.ap-northeast-2.amazonaws.com/logo.png"})}),(0,r.jsx)(m.Z.Group,{compact:!0,style:{minWidth:"400px"},children:(0,r.jsx)(m.Z,{size:"large",value:t,onChange:function(e){var n=e.target.value.replace(/[^0-9-]/g,"");a(n)},placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uac80\uc0c9\ud558\uc138\uc694",onPressEnter:function(){e.push("/number/".concat(t))},suffix:d})})]})})})}},6850:function(e,n,t){"use strict";t.r(n),t.d(n,{NumberPage:function(){return A},__N_SSP:function(){return P},default:function(){return T}});var r=t(5893),c=t(7294),s=t(9008),a=t.n(s),o=t(9669),i=t.n(o),u=t(381),l=t.n(u),m=t(7306),p=t(1230),d=t(5746),f=t(7049),h=t(5883),x=t(8863),j=t(1889),g=(t(3730),t(1990)),y=t(6871),b=t(6790),v=t(2937),Z=c.memo((function(e){var n=e.item,t=e.index;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{author:(0,r.jsxs)("a",{children:["(",(0,v.kY)(n.ip),")"]}),avatar:(0,r.jsx)(y.C,{src:(0,v.zY)(),alt:"Image ".concat(t)}),content:(0,r.jsx)("p",{children:n.message}),datetime:(0,r.jsx)(b.Z,{title:n.created,children:(0,r.jsx)("span",{children:l()(n.created).fromNow()})})}),(0,r.jsx)(f.Z,{style:{margin:"4px 0"}})]})}));Z.displayName="comments";var N=t(1664),w=t.n(N),S=t(7783),_=t(8548),k=function(e){var n=e.number,t=(0,c.useState)([]),s=t[0],a=t[1];return(0,c.useEffect)((function(){i().get("/api/phone/comments/recently").then((function(e){a(e.data.recentlyItems||[])}))}),[n]),(0,r.jsx)(S.ZP,{itemLayout:"horizontal",dataSource:s,renderItem:function(e){return(0,r.jsx)(S.ZP.Item,{children:(0,r.jsx)(S.ZP.Item.Meta,{avatar:(0,r.jsx)("a",{href:"tel: ".concat(e.number),children:(0,r.jsx)(j.Z,{shape:"circle",icon:(0,r.jsx)(_.Z,{}),size:"middle"})}),title:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w(),{href:"/number/".concat(e.number),children:(0,r.jsx)("span",{style:{cursor:"pointer",color:"#1890ff"},children:e.number})}),(0,r.jsx)(b.Z,{title:e.created,children:(0,r.jsx)("span",{className:"ml-2",style:{fontSize:12,color:"#bbb"},children:l()(e.created).fromNow()})})]}),description:(0,r.jsx)("div",{style:{color:"#000"},children:e.message})})})}})},I=t(292);function Y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function z(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return Y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Y(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=m.Z.Title,E=m.Z.Paragraph,P=!0,A=function(e){var n=e.item,t=n.number,s=(n.content,n.ip,n.created),o=(n.updated,(0,c.useState)("")),u=o[0],m=o[1],g=(0,c.useState)(!1),y=g[0],b=g[1],N=(0,c.useState)(!1),w=N[0],S=N[1],_=(0,c.useState)(!1),Y=_[0],P=_[1],A=(0,c.useState)([]),T=A[0],M=A[1],F=function(e,n){if(!n)return b(!0),void setTimeout((function(){b(!1)}),2200);S(!0);var t={created:l()().format("YYYY-MM-DD HH:mm:ss"),number:e,message:n,ip:localStorage.getItem("ip")};i().post("/api/phone/comment",t).then((function(e){M(z(T).concat([e.data.item])),S(!1),m(""),P(!0),setTimeout((function(){P(!1)}),2e3)}))};return(0,c.useEffect)((function(){i().get("/api/phone/comments?number=".concat(t)).then((function(e){M(e.data.commentItems||[])}))}),[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsxs)("title",{children:[(0,v.YQ)(t)," - \uc774 \ubc88\ud638 \uc54c\ub824\uc918 - \ud3f0\ubd81"]})}),(0,r.jsx)(I.h,{}),(0,r.jsxs)(p.Z,{className:"pt-4 container-wrap",children:[(0,r.jsxs)(d.Z,{xs:{span:24},sm:{span:24},lg:{span:16},className:"px-4",children:[(0,r.jsx)(C,{children:(0,v.YQ)(t)}),(0,r.jsx)(f.Z,{style:{margin:"4px 0"}}),(0,r.jsx)(E,{className:"text-right text-gray-400",children:s}),(0,r.jsx)("p",{className:"content-wrap",children:void 0!==T[0]?T[0].message:"\uc544\uc9c1 \ub4f1\ub85d\ub418\uc9c0 \uc54a\uc740 \ubc88\ud638 \uc785\ub2c8\ub2e4. \uccab \ub313\uae00\uc774 \ub0b4\uc6a9\uc73c\ub85c \ub4e4\uc5b4\uac11\ub2c8\ub2e4."}),(0,r.jsx)(f.Z,{style:{margin:"8px 0"}}),(0,r.jsxs)(h.Z.Item,{children:[(0,r.jsxs)("div",{className:"mb-2 text-xs",children:[(0,r.jsx)("span",{className:"mr-2",children:"\ud83d\udc49"})," \ub2f9\uc2e0\uc758 \ub3c4\uc6c0\uc73c\ub85c \ud070 \ud53c\ud574\ub97c \ub9c9\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,r.jsxs)(x.Z.Group,{compact:!0,children:[(0,r.jsx)(x.Z,{style:{width:"calc(100% - 80px)"},value:u,status:y?"error":"",onChange:function(e){var n=e.target.value;m(n)},placeholder:"\uc774 \ubc88\ud638\uc5d0 \ub300\ud574\uc11c \uc54c\ub824\uc8fc\uc138\uc694.",onKeyDown:function(e){!function(e){13===e.keyCode&&F(t,u)}(e)}}),(0,r.jsx)(j.Z,{htmlType:"submit",loading:w,onClick:function(e){F(t,u)},type:"primary",children:"\ub4f1\ub85d"})]})]}),Y&&(0,r.jsx)("div",{className:"ml-2",children:"\ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),T.map((function(e,n){return(0,r.jsx)(Z,{index:n,item:e},n)}))]}),(0,r.jsx)(d.Z,{className:"px-4",xs:{span:24},sm:{span:24},lg:{span:8},children:(0,r.jsx)(k,{number:t})})]})]})},T=A},2937:function(e,n,t){"use strict";t.d(n,{kY:function(){return a},zY:function(){return s},YQ:function(){return o}});var r=["010","011","016","017","018","019","050","070","080"],c=["02","031","032","033","041","042","043","044","051","052","053","054","055","061","062","063","064"],s=function(){var e=Math.floor(7*Math.random())+1;return"https://phonebookup.s3.ap-northeast-2.amazonaws.com/user_".concat(e,".jpeg")},a=function(e){var n=e.split(".");return"".concat(n[0],".x.x.").concat(n[3])},o=function(e){var n=e.length,t="",s=e.split("");return 8===n?(s.splice(4,0,"-"),t=s.join("")):11===n&&r.includes("".concat(e[0]).concat(e[1]).concat(e[2]))?(s.splice(3,0,"-"),s.splice(8,0,"-"),t=s.join("")):12===n&&r.includes("".concat(e[0]).concat(e[1]).concat(e[2]))?(s.splice(4,0,"-"),s.splice(9,0,"-"),t=s.join("")):9===n&&c.includes("".concat(e[0]).concat(e[1]))?(s.splice(2,0,"-"),s.splice(6,0,"-"),t=s.join("")):10===n&&c.includes("".concat(e[0]).concat(e[1]))?(s.splice(2,0,"-"),s.splice(7,0,"-"),t=s.join("")):10===n&&c.includes("".concat(e[0]).concat(e[1]).concat(e[1]))?(s.splice(3,0,"-"),s.splice(7,0,"-"),t=s.join("")):t=e,"".concat(e," / ").concat(t)}}},function(e){e.O(0,[885,938,116,774,888,179],(function(){return n=1422,e(e.s=n);var n}));var n=e.O();_N_E=n}]);