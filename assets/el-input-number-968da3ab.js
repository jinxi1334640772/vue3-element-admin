import{b as e,cB as a,au as l,a_ as n,a$ as t,Z as r,aY as u,d as s,ay as i,u as o,r as m,J as c,b0 as d,C as b,bj as p,b1 as v,b3 as f,K as N,o as y,bh as h,a as V,c as g,O as I,f as x,n as S,aU as w,a3 as E,w as A,l as F,H as k,cV as _,E as B,ad as K,cJ as O,bi as C,ai as M,aV as T,_ as $,G as j,N as z,b5 as P,q as Y}from"./index-fc1fece1.js";import{v as G}from"./refresh-b04a06d0.js";const J=e({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:a,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||l(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),q={[n]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[t]:e=>l(e)||r(e),[u]:e=>l(e)||r(e)},D=["aria-label","onKeydown"],H=["aria-label","onKeydown"],U=s({name:"ElInputNumber"});const W=Y($(s({...U,props:J,emits:q,setup(e,{expose:a,emit:s}){const $=e,{t:Y}=i(),J=o("input-number"),q=m(),U=c({currentValue:$.modelValue,userInput:null}),{formItem:W}=d(),Z=b((()=>l($.modelValue)&&$.modelValue<=$.min)),L=b((()=>l($.modelValue)&&$.modelValue>=$.max)),Q=b((()=>{const e=ne($.step);return p($.precision)?Math.max(ne($.modelValue),e):($.precision,$.precision)})),R=b((()=>$.controls&&"right"===$.controlsPosition)),X=v(),ee=f(),ae=b((()=>{if(null!==U.userInput)return U.userInput;let e=U.currentValue;if(r(e))return"";if(l(e)){if(Number.isNaN(e))return"";p($.precision)||(e=e.toFixed($.precision))}return e})),le=(e,a)=>{if(p(a)&&(a=Q.value),0===a)return Math.round(e);let l=String(e);const n=l.indexOf(".");if(-1===n)return e;if(!l.replace(".","").split("")[n+a])return e;const t=l.length;return"5"===l.charAt(t-1)&&(l=`${l.slice(0,Math.max(0,t-1))}6`),Number.parseFloat(Number(l).toFixed(a))},ne=e=>{if(r(e))return 0;const a=e.toString(),l=a.indexOf(".");let n=0;return-1!==l&&(n=a.length-l-1),n},te=(e,a=1)=>l(e)?le(e+$.step*a):U.currentValue,re=()=>{if($.readonly||ee.value||L.value)return;const e=Number(ae.value)||0,a=te(e);ie(a),s(t,U.currentValue)},ue=()=>{if($.readonly||ee.value||Z.value)return;const e=Number(ae.value)||0,a=te(e,-1);ie(a),s(t,U.currentValue)},se=(e,a)=>{const{max:l,min:n,step:t,precision:i,stepStrictly:o,valueOnClear:m}=$;l<n&&j("InputNumber","min should not be greater than max.");let c=Number(e);if(r(e)||Number.isNaN(c))return null;if(""===e){if(null===m)return null;c=z(m)?{min:n,max:l}[m]:m}return o&&(c=le(Math.round(c/t)*t,i)),p(i)||(c=le(c,i)),(c>l||c<n)&&(c=c>l?l:n,a&&s(u,c)),c},ie=(e,a=!0)=>{var l;const t=U.currentValue,r=se(e);a?t!==r&&(U.userInput=null,s(u,r),s(n,r,t),$.validateEvent&&(null==(l=null==W?void 0:W.validate)||l.call(W,"change").catch((e=>P()))),U.currentValue=r):s(u,r)},oe=e=>{U.userInput=e;const a=""===e?null:Number(e);s(t,a),ie(a,!1)},me=e=>{const a=""!==e?Number(e):"";(l(a)&&!Number.isNaN(a)||""===e)&&ie(a),U.userInput=null},ce=e=>{s("focus",e)},de=e=>{var a;s("blur",e),$.validateEvent&&(null==(a=null==W?void 0:W.validate)||a.call(W,"blur").catch((e=>P())))};return N((()=>$.modelValue),(e=>{const a=se(U.userInput),n=se(e,!0);l(a)||a&&a===n||(U.currentValue=n,U.userInput=null)}),{immediate:!0}),y((()=>{var e;const{min:a,max:n,modelValue:t}=$,r=null==(e=q.value)?void 0:e.input;if(r.setAttribute("role","spinbutton"),Number.isFinite(n)?r.setAttribute("aria-valuemax",String(n)):r.removeAttribute("aria-valuemax"),Number.isFinite(a)?r.setAttribute("aria-valuemin",String(a)):r.removeAttribute("aria-valuemin"),r.setAttribute("aria-valuenow",U.currentValue||0===U.currentValue?String(U.currentValue):""),r.setAttribute("aria-disabled",String(ee.value)),!l(t)&&null!=t){let e=Number(t);Number.isNaN(e)&&(e=null),s(u,e)}})),h((()=>{var e,a;const l=null==(e=q.value)?void 0:e.input;null==l||l.setAttribute("aria-valuenow",`${null!=(a=U.currentValue)?a:""}`)})),a({focus:()=>{var e,a;null==(a=null==(e=q.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=q.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(V(),g("div",{class:S([x(J).b(),x(J).m(x(X)),x(J).is("disabled",x(ee)),x(J).is("without-controls",!e.controls),x(J).is("controls-right",x(R))]),onDragstart:a[1]||(a[1]=M((()=>{}),["prevent"]))},[e.controls?I((V(),g("span",{key:0,role:"button","aria-label":x(Y)("el.inputNumber.decrease"),class:S([x(J).e("decrease"),x(J).is("disabled",x(Z))]),onKeydown:w(ue,["enter"])},[E(x(B),null,{default:A((()=>[x(R)?(V(),F(x(k),{key:0})):(V(),F(x(_),{key:1}))])),_:1})],42,D)),[[x(G),ue]]):K("v-if",!0),e.controls?I((V(),g("span",{key:1,role:"button","aria-label":x(Y)("el.inputNumber.increase"),class:S([x(J).e("increase"),x(J).is("disabled",x(L))]),onKeydown:w(re,["enter"])},[E(x(B),null,{default:A((()=>[x(R)?(V(),F(x(O),{key:0})):(V(),F(x(C),{key:1}))])),_:1})],42,H)),[[x(G),re]]):K("v-if",!0),E(x(T),{id:e.id,ref_key:"input",ref:q,type:"number",step:e.step,"model-value":x(ae),placeholder:e.placeholder,readonly:e.readonly,disabled:x(ee),size:x(X),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=M((()=>{}),["prevent"])),onKeydown:[w(M(re,["prevent"]),["up"]),w(M(ue,["prevent"]),["down"])],onBlur:de,onFocus:ce,onInput:oe,onChange:me},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{W as E};
