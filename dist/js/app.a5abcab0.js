(function(e){function t(t){for(var s,a,l=t[0],r=t[1],c=t[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,l=1;l<n.length;l++){var r=n[l];0!==o[r]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},o={app:0},i=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=r;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1591:function(e,t,n){"use strict";var s=n("964c"),o=n.n(s);o.a},1982:function(e,t,n){},3226:function(e,t,n){},"3b03":function(e,t,n){"use strict";var s=n("3226"),o=n.n(s);o.a},5220:function(e,t,n){"use strict";var s=n("5785"),o=n.n(s);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav-bar"},[n("app-navigation",{on:{toggleInitFileDialog:function(t){return e.toggleInitFileDialog()}}})],1),n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("app-header",{on:{onReportGen:function(t){return e.onReportGen()}}})],1),n("div",{staticClass:"content"},[n("app-content",{attrs:{serverError:e.showServerError,showInitFileDialog:e.showInitFileDialog,documentText:e.documentHTML,showDocumentText:e.showDocumentText},on:{onFileSelect:e.onFileSelect,sendStruct:e.onSendStruct}})],1)])])},i=[],a=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"user user-name"},[e._v(" UserName ")]),n("div",{staticClass:"btn btn-new",on:{click:function(t){return e.btn_new_click()}}},[e._v(" Новый документ ")]),n("div",{staticClass:"btn btn-load"},[e._v(" Загрузить документ ")]),n("div",{staticClass:"btn btn-template"},[e._v(" Загрузить шаблон ")]),n("div",{staticClass:"btn btn-sign"},[e._v(" Настроить подпись ")])])}),l=[],r={name:"Navigation",props:["showInitFileDialog"],methods:{btn_new_click:function(){console.log("div clicked"),this.$emit("toggleInitFileDialog")}}},c=r,d=(n("3b03"),n("2877")),u=Object(d["a"])(c,a,l,!1,null,"35659abe",null),p=u.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("div",{staticClass:"document"},[n("div",{staticClass:"btn btn-report",on:{click:function(t){return e.btn_report_click()}}},[e._v(" Отчет ")])])])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth"},[n("div",{staticClass:"btn btn-login"},[e._v(" Войти ")]),n("div",{staticClass:"btn btn-register"},[e._v(" Регистрация ")]),n("div",{staticClass:"btn btn-logout"},[e._v(" Выход ")])])}],_={name:"Header",methods:{btn_report_click:function(){console.log("report gen btn pressed"),this.$emit("onReportGen")}}},m=_,g=(n("5742"),Object(d["a"])(m,h,f,!1,null,"5a2e8a84",null)),v=g.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e.serverError?n("div",{staticClass:"content serverError"},[e._v(" Нет связи с сервером. Повторите попытку позже. ")]):e._e(),e.showInitFileDialog?n("p",[e._v("Выберите файл"),n("file-select",{on:{input:e.onFileSelect},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1):e._e(),e.showInitFileDialog||e.showDocumentText||e.canShowHello()?e._e():n("div",{staticClass:"spinner"},[e._m(0),n("Spinner")],1),e.showDocumentText?n("MainDocComp",{attrs:{docJSON:e.documentText,canCreateSpan:e.canCreateSpan},on:{addedSpan:e.onAddedSpan,textSelected:e.onTextSelected,textHighlighted:function(t){return e.$emit("textHighlighted")}}}):e._e(),n("TextEditModal",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],attrs:{text:e.textModalEdit},on:{save:e.saveModal,close:e.closeModal}}),e.canShowHello()?n("div",{staticClass:"text-hello"},[e._m(1)]):e._e()],1)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Идет загрузка документа."),n("br"),n("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Добро пожаловать! "),n("br"),e._v(' Для начала работы нажмите на кнопку "Новый документ" для загрузки нового документа. '),n("br"),e._v(' Или нажмите кнопку "Загрузить документ" для выбора одного из старых документов. '),n("br")])}],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"file-select"},[e._m(0),n("input",{attrs:{type:"file"},on:{change:e.handleFileChange}})])},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-button"},[n("span",[e._v("Выберите файл")])])}],w=(n("b0c0"),n("ac1f"),n("466d"),n("b85c")),C={props:{value:File},methods:{handleFileChange:function(e){var t,n=e.target.files[0].name.match(/\.([0-9A-Za-z_]+)$/),s=Object(w["a"])(n);try{for(s.s();!(t=s.n()).done;){var o=t.value;if(".docx"===o)return void this.$emit("input",e.target.files[0])}}catch(i){s.e(i)}finally{s.f()}alert("Выбран не верный файл. Допускаются только файлы в формате .docx")}}},T=C,E=(n("1591"),Object(d["a"])(T,b,S,!1,null,"54675970",null)),I=E.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"text"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.editedText,expression:"editedText"}],staticClass:"text",domProps:{value:e.editedText},on:{input:function(t){t.target.composing||(e.editedText=t.target.value)}}})]),n("div",{staticClass:"btn-panel"},[n("button",{staticClass:"btn btn-close",on:{click:e.close}},[e._v("Закрыть")]),n("button",{staticClass:"btn btn-save",on:{click:e.save}},[e._v("Применить")])])])])])},F=[],D={name:"TextEditModal",props:["text"],data:function(){return{editedText:""}},methods:{close:function(){this.$emit("close")},save:function(){this.$emit("save",this.editedText)}},watch:{text:function(){this.editedText=this.text}}},M=D,H=(n("5ad0"),Object(d["a"])(M,$,F,!1,null,"30b26098",null)),O=H.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-document"},e._l(e.docJSON.data,(function(t){return n("div",{key:t.ref},[n("div",{ref:t.ref,refInFor:!0,class:t.class,style:t.style},e._l(t.children,(function(t){return n("div",{key:t.ref},["br"==t.type?n("br"):e._e(),"p"==t.type?n("ParagraphComp",{attrs:{text_:t.text,ref_:t.ref,id_:t.id,style_:t.style,class_:t.class},on:{addedSpan:e.onAddedSpan,textSelected:e.onTextSelected,textHighlighted:function(t){return e.$emit("textHighlighted")}}}):e._e(),"ul"==t.type?n("ListComp",{attrs:{children_:t.children,ref_:t.ref,id_:t.id,style_:t.style,class_:t.class},on:{addedSpan:e.onAddedSpan,textSelected:e.onTextSelected,textHighlighted:function(t){return e.$emit("textHighlighted")}}}):e._e(),"table"==t.type?n("TableComp",{attrs:{children_:t.children,ref_:t.ref,id_:t.id,style_:t.style,class_:t.class},on:{addedSpan:e.onAddedSpan,textSelected:e.onTextSelected,textHighlighted:function(t){return e.$emit("textHighlighted")}}}):e._e(),t.type.startsWith("h")?n("HeaderComp",{attrs:{type:t.type,text_:t.text,ref_:t.ref,id_:t.id,style_:t.style,class_:t.class},on:{addedSpan:e.onAddedSpan,textSelected:e.onTextSelected,textHighlighted:function(t){return e.$emit("textHighlighted")}}}):e._e(),"img"==t.type?n("ImageComp",{attrs:{src_:t.image,ref_:t.ref,style_:t.style,class_:t.class}}):e._e()],1)})),0)])})),0)},j=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{id:e.id_},on:{mousedown:e.onmousedown,mouseup:e.onmouseup}},[e._v(" "+e._s(e.text_)+" ")])},R=[],P=(n("25f0"),{data:function(){return{firstEl:"",secondEl:"",selectedRange:null,range:null,spanNum:0,selectedId:""}},methods:{onmousedown:function(e){this.firstEl=e.target.className,this.selectedId=e.target.id},onmouseup:function(e){this.secondEl=e.target.className,this.highlight(),this.$emit("textSelected",window.getSelection().toString(),!0)},getSelectedRange:function(){if(window.getSelection){var e=window.getSelection();e.getRangeAt&&e.rangeCount&&(this.selectedRange=e.getRangeAt(0))}else document.selection&&(this.selectedRange=document.selection.createRange())},surroundSelection:function(){var e=document.createElement("span");e.className="highlight";var t=this.selectedId+" span-"+this.spanNum;if(e.setAttribute("id",t),e.style.backgroundColor="#D05555",this.$emit("addedSpan",t),this.spanNum+=1,window.getSelection){var n=window.getSelection();if(n.rangeCount){var s=this.selectedRange.cloneRange();s.surroundContents(e),n.removeAllRanges(),n.addRange(s)}}},highlight:function(){this.getSelectedRange(),this.selectedRange&&(this.surroundSelection(),this.$emit("textHighlighted"))}}}),N={name:"ParagraphComp",mixins:[P],props:["text_","ref_","id_","style_","class_"],data:function(){return{}}},L=N,J=Object(d["a"])(L,k,R,!1,null,"73905835",null),V=J.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["h1"==e.type?n("h1",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{id:e.id_},on:{mousedown:e.onmousedown,mouseup:e.onmouseup}},[e._v(" "+e._s(e.text_)+" ")]):e._e(),"h2"==e.type?n("h2",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{id:e.id_},on:{mousedown:e.onmousedown,mouseup:e.onmouseup}},[e._v(" "+e._s(e.text_)+" ")]):e._e(),"h3"==e.type?n("h3",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{id:e.id_},on:{mousedown:e.onmousedown,mouseup:e.onmouseup}},[e._v(" "+e._s(e.text_)+" ")]):e._e(),"h4"==e.type?n("h4",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{id:e.id_},on:{mousedown:e.onmousedown,mouseup:e.onmouseup}},[e._v(" "+e._s(e.text_)+" ")]):e._e(),"h5"==e.type?n("h5",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{id:e.id_},on:{mousedown:e.onmousedown,mouseup:e.onmouseup}},[e._v(" "+e._s(e.text_)+" ")]):e._e(),"h6"==e.type?n("h6",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{id:e.id_},on:{mousedown:e.onmousedown,mouseup:e.onmouseup}},[e._v(" "+e._s(e.text_)+" ")]):e._e(),"h7"==e.type?n("h7",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{id:e.id_},on:{mousedown:e.onmousedown,mouseup:e.onmouseup}},[e._v(" "+e._s(e.text_)+" ")]):e._e(),"h8"==e.type?n("h8",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{id:e.id_},on:{mousedown:e.onmousedown,mouseup:e.onmouseup}},[e._v(" "+e._s(e.text_)+" ")]):e._e()],1)},U=[],B={name:"HeaderComp",mixins:[P],props:["text_","ref_","id_","style_","class_","highlightAllow","type"],data:function(){return{}}},W=B,z=Object(d["a"])(W,G,U,!1,null,"d29b4fa0",null),Z=z.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{src:"data:image/png;base64,"+e.src_,alt:""}})},K=[],Q={name:"ImageComp",mixins:[],props:["src_","ref_","style_","class_"],data:function(){return{}}},X=Q,Y=Object(d["a"])(X,q,K,!1,null,"0c7245d5",null),ee=Y.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{id:e.id_}},e._l(e.children_,(function(t){return n("li",{key:t.id,ref:t.ref,refInFor:!0,class:t.class,style:t.style,attrs:{id:t.id},on:{mousedown:e.onmousedown,mouseup:e.onmouseup}},[e._v(" "+e._s(t.text)+" ")])})),0)},ne=[],se={name:"ListComp",mixins:[P],props:["children_","ref_","id_","style_","class_"],data:function(){return{}}},oe=se,ie=Object(d["a"])(oe,te,ne,!1,null,"0168cb68",null),ae=ie.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{ref:e.ref_,class:e.class_,style:e.style_,attrs:{id:e.id_}},e._l(e.children_,(function(t){return n("tr",{key:t.id},e._l(t.children,(function(t){return n("td",{key:t.id,ref:t.ref,refInFor:!0,class:t.class,style:t.style,attrs:{id:t.id},on:{mousedown:e.onmousedown,mouseup:e.onmouseup}},e._l(t.children,(function(t){return n("div",{key:t.ref},["p"==t.type?n("ParagraphComp",{attrs:{text_:t.text,ref_:t.ref,id_:t.id,style_:t.style,class_:t.class},on:{addedSpan:e.onAddedSpan,textSelected:e.onTextSelected,textHighlighted:function(t){return e.$emit("textHighlighted")}}}):e._e(),"ul"==t.type?n("ListComp",{attrs:{children_:t.children,ref_:t.ref,id_:t.id,style_:t.style,class_:t.class},on:{addedSpan:e.onAddedSpan,textSelected:e.onTextSelected,textHighlighted:function(t){return e.$emit("textHighlighted")}}}):e._e(),"table"==t.type?n("TableComp",{attrs:{children_:t.children,ref_:t.ref,id_:t.id,style_:t.style,class_:t.class},on:{addedSpan:e.onAddedSpan,textSelected:e.onTextSelected,textHighlighted:function(t){return e.$emit("textHighlighted")}}}):e._e(),t.type.startsWith("h")?n("HeaderComp",{attrs:{type:t.type,text_:t.text,ref_:t.ref,id_:t.id,style_:t.style,class_:t.class},on:{addedSpan:e.onAddedSpan,textSelected:e.onTextSelected,textHighlighted:function(t){return e.$emit("textHighlighted")}}}):e._e(),"img"==t.type?n("ImageComp",{attrs:{src_:t.image,ref_:t.ref,style_:t.style,class_:t.class}}):e._e()],1)})),0)})),0)})),0)},re=[],ce={name:"TableComp",mixins:[P],components:{ParagraphComp:V,ImageComp:ee,HeaderComp:Z,ListComp:ae,TableComp:pe},props:["children_","ref_","id_","style_","class_"],data:function(){return{}},methods:{onTextSelected:function(e,t){this.$emit("textSelected",e,t)},onAddedSpan:function(e){this.$emit("addedSpan",e)}}},de=ce,ue=Object(d["a"])(de,le,re,!1,null,"2de00e12",null),pe=ue.exports,he={name:"MainDocComp",props:["docJSON"],mixins:[],components:{ParagraphComp:V,ImageComp:ee,HeaderComp:Z,ListComp:ae,TableComp:pe},data:function(){return{sel:null,selectedRange:null}},methods:{onTextSelected:function(e,t){this.$emit("textSelected",e,t)},onAddedSpan:function(e){this.$emit("addedSpan",e)}},mounted:function(){},computed:{}},fe=he,_e=(n("5220"),Object(d["a"])(fe,A,j,!1,null,"af0cf1f8",null)),me=_e.exports,ge=n("5b7e"),ve=n.n(ge),xe={name:"Content",props:["showInitFileDialog","documentText","showDocumentText","serverError"],components:{FileSelect:I,TextEditModal:O,MainDocComp:me,Spinner:ve.a},data:function(){return{isModalVisible:!1,textModalInit:"",textModalEdit:"",file:null,firstEl:"",secondEl:"",editedTextStruct:{},selectedRange:null,canCreateSpan:!1,lastSpanId:""}},methods:{onFileSelect:function(){this.canShowSpinner=!0,this.$emit("onFileSelect",this.file)},canShowHello:function(){return!this.showInitFileDialog&&!this.documentText&&!this.file},canShowFileDialog:function(){return this.showInitFileDialog},onTextSelected:function(e,t){t&&""!==e&&(this.isModalVisible=t),this.textModalInit=e,this.textModalEdit=e},showModal:function(){this.isModalVisible=!0},saveModal:function(e){this.isModalVisible=!1,this.editedTextStruct={document_id:this.documentText.document_id,fistEl:this.firstEl,secondEl:this.secondEl,initText:this.textModalInit,editText:e},this.textModalInit!==e?this.$emit("sendStruct",this.editedTextStruct):this.deleteSpan()},closeModal:function(){this.isModalVisible=!1,this.deleteSpan()},textHighlighted:function(){},onAddedSpan:function(e){this.lastSpanId=e},deleteSpan:function(){document.getElementById(this.lastSpanId).replaceWith(document.getElementById(this.lastSpanId).innerText)}},mounted:function(){},watch:{}},ye=xe,be=(n("fae9"),Object(d["a"])(ye,x,y,!1,null,"c0de10b8",null)),Se=be.exports,we=n("bc3a"),Ce=n.n(we),Te={name:"App",components:{"app-navigation":p,"app-header":v,"app-content":Se},data:function(){return{showInitFileDialog:!1,selectedFile:null,API:"https://ghost2112.pythonanywhere.com",documentHTML:"",showDocumentText:!1,documentID:0,showServerError:!1}},methods:{getJson:function(){var e=this;return fetch(this.API+"/healthcheck").then((function(){e.showServerError=!1})).catch((function(t){e.showServerError=!0,console.log(t)}))},toggleInitFileDialog:function(){this.showInitFileDialog=!0,this.showDocumentText=!1},onFileSelect:function(e){this.showInitFileDialog=!1,this.selectedFile=e,this.submitFile()},onSendStruct:function(e){var t=this,n=new FormData;n.append("data",JSON.stringify(e)),Ce.a.post(this.API+"/text-edited",n).then((function(){t.showServerError=!1})).catch((function(e){t.showServerError=!0,console.log(e)}))},submitFile:function(){var e=this,t=this,n=new FormData;n.append("file",this.selectedFile),Ce.a.post(this.API+"/file-upload",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(n){e.showDocumentText=!0,e.documentHTML=n.data,e.documentID=n.data.document_id,t.showServerError=!1})).catch((function(e){t.showServerError=!0,console.log(e)}))},onReportGen:function(){var e=this,t=JSON.stringify({data:{document_id:this.documentID}}),n={method:"post",url:this.API+"/report-gen",headers:{"Content-Type":"multipart/form-data;, application/json",Accept:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"},data:t,responseType:"blob"};Ce()(n).then((function(t){var n=new Blob([t.data],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",encoding:"UTF-8"}),s=document.createElement("a");s.href=window.URL.createObjectURL(n),s.download="Report.docx",s.click(),e.showServerError=!1})).catch((function(t){e.showServerError=!0,console.log(t)}))}},beforeMount:function(){this.getJson()},mounted:function(){var e=document.createElement("script");e.setAttribute("crossorigin","anonymous"),document.head.appendChild(e)}},Ee=Te,Ie=(n("5c0b"),Object(d["a"])(Ee,o,i,!1,null,null,null)),$e=Ie.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e($e)}}).$mount("#app")},5742:function(e,t,n){"use strict";var s=n("a484"),o=n.n(s);o.a},5785:function(e,t,n){},"5ad0":function(e,t,n){"use strict";var s=n("f995"),o=n.n(s);o.a},"5c0b":function(e,t,n){"use strict";var s=n("9c0c"),o=n.n(s);o.a},"964c":function(e,t,n){},"9c0c":function(e,t,n){},a484:function(e,t,n){},f995:function(e,t,n){},fae9:function(e,t,n){"use strict";var s=n("1982"),o=n.n(s);o.a}});
//# sourceMappingURL=app.a5abcab0.js.map