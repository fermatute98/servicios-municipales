import{n as V,r as c,B as x,q as a,y as C,w as t,o as w,b as o,d as i,u as r,V as h,G as T,K as S,_ as g}from"./entry.ee28b950.js";import{u as k}from"./fetch.23709f3e.js";const q=V({__name:"recovery",setup(B){const d=c(null),s=x({email:""}),l=c(!1),_={email:[e=>!!e||"El correo es requerido",e=>/.+@.+\..+/.test(e)||"El correo debe ser válido"]},u=async()=>{l.value=!0;const{data:e,error:n}=await k("/api/user/recovery",{method:"POST",body:s},"$3wxDyfUQIw");e.value?(alert("Las credenciales se enviaron a su email"),S("/")):alert("El email no existe!"),l.value=!1};return(e,n)=>{const m=a("VCardTitle"),f=a("v-text-field"),p=a("v-btn"),v=a("VCard"),b=a("VContainer");return w(),C(b,{class:"centerDiv"},{default:t(()=>[o(v,{elevation:"5",class:"pa-5"},{default:t(()=>[o(m,{class:"text-center text-h4"},{default:t(()=>[i("Recuperar contraseña")]),_:1}),o(r(h),{ref_key:"form",ref:d,onSubmit:T(u,["prevent"]),"fast-fail":""},{default:t(()=>[o(f,{class:"mt-3",variant:"outlined",modelValue:r(s).email,"onUpdate:modelValue":n[0]||(n[0]=y=>r(s).email=y),type:"email",label:"Correo",rules:_.email,required:""},null,8,["modelValue","rules"]),o(p,{type:"submit",variant:"tonal",class:"mt-4",color:"primary",width:"400",disabled:r(l)},{default:t(()=>[i("Restablecer")]),_:1},8,["disabled"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}}});const D=g(q,[["__scopeId","data-v-4aee07bc"]]);export{D as default};