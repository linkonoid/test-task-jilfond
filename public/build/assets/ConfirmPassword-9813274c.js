import{T as m,r as d,d as c,b as o,u as a,w as r,F as u,o as p,Z as f,a as e,n as _,f as w,h as b}from"./app-3f247b1f.js";import{A as h}from"./AuthenticationCard-32f8aa5c.js";import{_ as g}from"./AuthenticationCardLogo-bd4ddac1.js";import{_ as x,a as v}from"./TextInput-e034693e.js";import{_ as y}from"./InputLabel-201645cb.js";import{_ as V}from"./PrimaryButton-ebbdcb64.js";import"./_plugin-vue_export-helper-c27b6911.js";const C=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$=["onSubmit"],k={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup(A){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(B,i)=>(p(),c(u,null,[o(a(f),{title:"Secure Area"}),o(h,null,{logo:r(()=>[o(g)]),default:r(()=>[C,e("form",{onSubmit:b(n,["prevent"])},[e("div",null,[o(y,{for:"password",value:"Password"}),o(x,{id:"password",ref_key:"passwordInput",ref:t,modelValue:a(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>a(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(v,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",k,[o(V,{class:_(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{q as default};
