import{d as e,r as t,o as a,a as n,c as o,k as s,a3 as c,w as l,a2 as r,ai as i,f as u,ad as d,a6 as h,aW as f,an as v,ao as p}from"./index-fc1fece1.js";import{u as m}from"./index-16f9c399.js";import{_ as g}from"./_plugin-vue_export-helper-1b428a4d.js";const w={class:"canvas-dom"},_=(e=>(v("data-v-d1ec2ee9"),e=e(),p(),e))((()=>s("h3",null,"基于canvas实现的签名组件",-1))),y=["src"],k=g(e({__name:"signature",setup(e){const v=t(""),p=t();let g,k=!1;const C=e=>{let t;if(e.offsetX){const{offsetX:a,offsetY:n}=e;t=[a,n]}else{const{top:a,left:n}=p.value.getBoundingClientRect();t=[e.touches[0].clientX-n,e.touches[0].clientY-a]}return t};let R=0,x=0;const T=e=>{[R,x]=C(e),k=!0},U=e=>{if(k){const[t,a]=C(e);!function(e,t,a,n,o){o.beginPath(),o.globalAlpha=1,o.lineWidth=2,o.strokeStyle="#000",o.moveTo(e,t),o.lineTo(a,n),o.closePath(),o.stroke()}(R,x,t,a,g),R=t,x=a}},D=()=>{k&&(k=!1)};a((()=>{g=p.value.getContext("2d")}));const E=async()=>{if(M(p.value))return void h({type:"warning",message:"当前签名文件为空"});const e=j(p.value.toDataURL(),"签名.png");if(!e)return;const{data:t}=await m(e);L(),v.value=t.url},L=()=>{g.clearRect(0,0,p.value.width,p.value.height)},M=e=>{const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.toDataURL()==t.toDataURL()},b=()=>{if(M(p.value))return void h({type:"warning",message:"当前签名文件为空"});const e=document.createElement("a");e.href=p.value.toDataURL(),e.download="签名";const t=new MouseEvent("click");e.dispatchEvent(t)},j=(e,t)=>{const a=e.split(",");if(!a.length)return;const n=a[0].match(/:(.*?);/);if(n){const e=atob(a[1]);let o=e.length;const s=new Uint8Array(o);for(;o--;)s[o]=e.charCodeAt(o);return new File([s],t,{type:n[1]})}};return(e,t)=>{const a=f;return n(),o("div",w,[_,s("header",null,[c(a,{type:"primary",onClick:b},{default:l((()=>[r("保存为图片")])),_:1}),c(a,{onClick:E},{default:l((()=>[r(" 保存到后端 ")])),_:1}),c(a,{onClick:L},{default:l((()=>[r(" 清空签名 ")])),_:1})]),s("canvas",{ref_key:"canvas",ref:p,height:"200",width:"500",onMousedown:T,onMousemove:i(U,["stop","prevent"]),onMouseup:D,onTouchstart:T,onTouchmove:i(U,["stop","prevent"]),onTouchend:D},null,544),u(v)?(n(),o("img",{key:0,src:u(v),alt:"签名"},null,8,y)):d("",!0)])}}}),[["__scopeId","data-v-d1ec2ee9"]]);export{k as default};
