import{r as l,$ as i,o as t,c as a,F as d,f as c,t as m}from"./app-b847fc4e.js";const f=["value"],p=["value"],v={__name:"SelectInput",props:["modelValue","options"],emits:["update:modelValue"],setup(s,{expose:n}){const o=l(null);return i(()=>{o.value.hasAttribute("autofocus")&&o.value.focus()}),n({focus:()=>o.value.focus()}),(r,u)=>(t(),a("select",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:s.modelValue,onChange:u[0]||(u[0]=e=>r.$emit("update:modelValue",e.target.value)),ref_key:"input",ref:o},[(t(!0),a(d,null,c(s.options,e=>(t(),a("option",{key:e.i,value:e.id},m(e.name),9,p))),128))],40,f))}};export{v as _};
