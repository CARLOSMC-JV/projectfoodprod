import{_ as D}from"./AuthenticatedLayout-22fd5482.js";import{D as T}from"./DangerButton-5dded5e3.js";import{_ as N,T as g,Z as P,n as L,r as A,a as n,o as _,c as f,b as t,w as i,d as e,e as b,F as x,f as H,t as m}from"./app-b847fc4e.js";import{S as v}from"./sweetalert2.all-e938a770.js";import{M as O}from"./MainNav-e236d4a5.js";import{_ as U,a as W,b as j}from"./TextInput-efc03dea.js";import{P as q}from"./PrimaryButton-7b8a4adb.js";import{_ as F}from"./SelectInput-115ca0f1.js";import{W as z}from"./WarningButton-7e72505f.js";import{_ as G,a as R}from"./Modal-4239b41b.js";import"./ApplicationLogo-17150bae.js";import"./ResponsiveNavLink-9de50868.js";import"./NavLink-61b1fc92.js";import"./chevron-down-5630ab5c.js";const Z={data(){return{form:g({department_id:"",name:"",email:"",phone:""}),formPage:g({}),nameInput:null,modal:!1,title:"",operation:1,id_value:""}},props:{employees:{type:Object},departments:{type:Object}},created(){this.employees_data=this.employees.data},methods:{pageClick(){this.form.get(route("employees.destroy",id))},openModal(l,s,p,h,a,r){this.modal=!0,this.operation=l,this.employee_id=r,l==1?this.title="Crear":(this.title="Editar",this.form.name=s,this.form.email=p,this.form.phone=h,this.form.department_id=a)},closeModal(){this.modal=!1,this.form.reset(),this.form.name="",this.form.email="",this.form.phone="",this.form.department_id=""},save(){this.operation==1?this.form.post(route("employees.store"),{onSuccess:()=>{this.ok("Empleado guardado")}}):this.form.put(route("employees.update",this.employee_id),{onSuccess:()=>{this.ok("Empleado actualizado")}})},ok(l){this.form.reset(),this.closeModal(),v.fire({title:l,icon:"success"})},deleteEmployees(l){v.fire({title:"¿Seguro que desea eliminar "+this.employees.name+"?",icon:"question",showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i>Si, eliminar',cancelButtonText:'<i class="fa-solid fa-ban"></i>Cancelar'}).then(s=>{s.isConfirmed&&this.form.delete(route("employees.destroy",l,{onSuccess:()=>{this.ok("Empleado eliminado")}}))})},confirmDelete(l,s){console.log(l),this.employees.id=l,this.employees.name=s,this.deleteEmployees(l)}},components:{Head:P,MainNav:O,DangerButton:T,InputError:U,InputLabel:W,PrimaryButton:q,TextInput:j,SelectInput:F,WarningButton:z,SecondaryButton:G,Modal:R,nextTick:L,ref:A,AuthenticatedLayout:D}},J={class:"py-12"},K={class:"bg-white grid v-screen place-items-center ml-24 mr-24 rounded-md"},Q={class:"mt-8 mb-3 flex"},X=e("i",{class:"fa-solid fa-plus-circle"},null,-1),Y={class:"bg-white grid place-items-center ml-24 mr-24 pb-8"},$={class:"table-auto border border-gray-400"},ee=e("thead",null,[e("tr",{class:"bg-gray-100"},[e("th",{class:"px-2 py-2"},"#"),e("th",{class:"px-2 py-2"},"NAME"),e("th",{class:"px-2 py-2"},"EMAIL"),e("th",{class:"px-2 py-2"},"PHONE"),e("th",{class:"px-2 py-2"},"DEPARTMENT"),e("th",{class:"px-2 py-2",colspan:"2"},"Opciones"),e("th",{class:"px-2 py-2"})])],-1),te={class:"border border-gray-400 px-2 py-2"},oe={class:"border border-gray-400 px-2 py-2"},se={class:"border border-gray-400 px-2 py-2"},ae={class:"border border-gray-400 px-2 py-2"},le={class:"border border-gray-400 px-2 py-2"},ne={class:"border border-gray-400 px-2 py-2"},re=e("i",{class:"fa-solid fa-edit text-white"},null,-1),ie={class:"border border-gray-400 px-2 py-2"},me=e("i",{class:"fa-solid fa-trash text-white"},null,-1),de={class:"p-3 text-lg font-medium text-gray-900"},ce={class:"p-3"},pe={class:"p-3"},ue={class:"p-3"},_e={class:"p-3"},fe={class:"p-3"},he=e("i",{class:"fa-solid fa-save text-white"},"Guardar",-1),ye={class:"p-3 mt-6 flex justify-end"};function ge(l,s,p,h,a,r){const k=n("Head"),y=n("PrimaryButton"),B=n("WarningButton"),C=n("DangerButton"),d=n("InputLabel"),u=n("TextInput"),c=n("InputError"),E=n("SelectInput"),I=n("SecondaryButton"),w=n("Modal"),M=n("AuthenticatedLayout");return _(),f(x,null,[t(k,{title:"Employees"}),t(M,null,{default:i(()=>[e("div",J,[e("div",K,[e("div",Q,[t(y,{onClick:s[0]||(s[0]=o=>r.openModal(1))},{default:i(()=>[X,b(" Agregar ")]),_:1})])]),e("div",Y,[e("table",$,[ee,e("tbody",null,[(_(!0),f(x,null,H(l.employees_data,(o,V)=>(_(),f("tr",{key:o.id},[e("td",te,m(V+1),1),e("td",oe,m(o.name),1),e("td",se,m(o.email),1),e("td",ae,m(o.phone),1),e("td",le,m(o.department),1),e("td",ne,[t(B,{onClick:S=>r.openModal(2,o.name,o.email,o.phone,o.department_id,o.id)},{default:i(()=>[re]),_:2},1032,["onClick"])]),e("td",ie,[t(C,{onClick:s[1]||(s[1]=S=>r.confirmDelete(l.dep.id,l.dep.name))},{default:i(()=>[me]),_:1})])]))),128))])])]),t(w,{show:a.modal,onClose:r.closeModal},{default:i(()=>[e("h2",de,m(a.title),1),e("div",ce,[t(d,{for:"name",value:"Name: "}),t(u,{id:"name",ref:"nameInput",modelValue:a.form.name,"onUpdate:modelValue":s[2]||(s[2]=o=>a.form.name=o),type:"text",class:"mt-1 block w-3/4",placeholder:"Name"},null,8,["modelValue"]),t(c,{message:a.form.errors.name,class:"mt-2"},null,8,["message"])]),e("div",pe,[t(d,{for:"email",value:"Email: "}),t(u,{id:"email",modelValue:a.form.email,"onUpdate:modelValue":s[3]||(s[3]=o=>a.form.email=o),type:"email",class:"mt-1 block w-3/4",placeholder:"Email"},null,8,["modelValue"]),t(c,{message:a.form.errors.email,class:"mt-2"},null,8,["message"])]),e("div",ue,[t(d,{for:"phone",value:"Phone: "}),t(u,{id:"phone",modelValue:a.form.phone,"onUpdate:modelValue":s[4]||(s[4]=o=>a.form.phone=o),type:"text",class:"mt-1 block w-3/4",placeholder:"Phone"},null,8,["modelValue"]),t(c,{message:a.form.errors.phone,class:"mt-2"},null,8,["message"])]),e("div",_e,[t(d,{for:"department_id",value:"Department: "}),t(E,{options:p.departments,id:"department_id",modelValue:a.form.department_id,"onUpdate:modelValue":s[5]||(s[5]=o=>a.form.department_id=o),class:"mt-1 block w-3/4",placeholder:"Department"},null,8,["options","modelValue"]),t(c,{message:a.form.errors.department_id,class:"mt-2"},null,8,["message"])]),e("div",fe,[t(y,{disable:a.form.processing,onClick:r.save},{default:i(()=>[he]),_:1},8,["disable","onClick"])]),e("div",ye,[t(I,{class:"ml-3",disabled:a.form.processing,onClick:r.closeModal},{default:i(()=>[b(" Cancel ")]),_:1},8,["disabled","onClick"])])]),_:1},8,["show","onClose"])])]),_:1})],64)}const Ne=N(Z,[["render",ge]]);export{Ne as default};
