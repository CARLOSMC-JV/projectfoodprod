import{_ as f}from"./AuthenticatedLayout-22fd5482.js";import{_ as g,T as x,Z as y,a as t,o as b,c as h,b as e,w as n,d as s,i as v,e as w,F as I}from"./app-b847fc4e.js";import{H as L}from"./HeroSlider-77e40f92.js";import{M as B}from"./MainNav-e236d4a5.js";import{L as E}from"./ListProductsMain-a28b863b.js";import{_ as V,a as H,b as P}from"./TextInput-efc03dea.js";import{P as T}from"./PrimaryButton-7b8a4adb.js";import"./ApplicationLogo-17150bae.js";import"./ResponsiveNavLink-9de50868.js";import"./NavLink-61b1fc92.js";import"./06-8c4fbade.js";import"./chevron-down-5630ab5c.js";const C={data(){return{form:x({name:this.class_category.name})}},props:{class_category:{type:Object}},components:{Head:y,AuthenticatedLayout:f,HeroSlider:L,MainNav:B,ListProductsMain:E,InputError:V,PrimaryButton:T,InputLabel:H,TextInput:P},created(){console.log(this.class_category)}},M={class:"py-12"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},S={class:"p-4 bg-white overflow-hidden shadow-sm sm:rounded-lg"},k=s("i",{class:"fa fa-solid fa-save"},null,-1);function A(m,a,i,$,o,F){const c=t("Head"),l=t("InputLabel"),p=t("TextInput"),u=t("InputError"),d=t("PrimaryButton"),_=t("AuthenticatedLayout");return b(),h(I,null,[e(c,{title:"Editar Categoria Superior"}),e(_,null,{default:n(()=>[s("div",M,[s("div",N,[s("div",S,[s("form",{onSubmit:a[1]||(a[1]=v(r=>o.form.put(m.route("class_categories.update",i.class_category)),["prevent"])),class:"mt-2 space-y-6 max-w-sm"},[e(l,{for:"name",value:"Categoria Superior"}),e(p,{id:"name",type:"text",modelValue:o.form.name,"onUpdate:modelValue":a[0]||(a[0]=r=>o.form.name=r),autofocus:"",required:"",class:"mt-1 block w-full"},null,8,["modelValue"]),e(u,{message:o.form.errors.name,class:"mt-2"},null,8,["message"]),e(d,{disbled:o.form.processing},{default:n(()=>[k,w("Guardar ")]),_:1},8,["disbled"])],32)])])])]),_:1})],64)}const W=g(C,[["render",A]]);export{W as default};