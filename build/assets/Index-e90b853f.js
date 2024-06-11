import{_ as y}from"./AuthenticatedLayout-22fd5482.js";import{D as x}from"./DangerButton-5dded5e3.js";import{_ as w,T as C,Z as D,a,o as r,c as i,b as c,w as n,d as e,g as l,e as d,F as _,f as v,t as m}from"./app-b847fc4e.js";import{S as B}from"./sweetalert2.all-e938a770.js";import{M as k}from"./MainNav-e236d4a5.js";import"./ApplicationLogo-17150bae.js";import"./ResponsiveNavLink-9de50868.js";import"./NavLink-61b1fc92.js";import"./chevron-down-5630ab5c.js";const A={data(){return{form:C({id:""})}},props:{class_categories:{type:Object}},created(){console.log(this.class_categories)},methods:{deleteDepartment(t){B.fire({title:"¿Seguro que desea eliminar "+this.class_categories.name+"?",icon:"question",showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i>Si, eliminar',cancelButtonText:'<i class="fa-solid fa-ban"></i>Cancelar'}).then(o=>{o.isConfirmed&&this.form.delete(route("class_categories.destroy",t))})},confirmDelete(t,o){console.log(t),this.class_categories.id=t,this.class_categories.name=o,this.deleteDepartment(t)}},components:{Head:D,MainNav:k,DangerButton:x,AuthenticatedLayout:y}},S=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Dashboard",-1),T={class:"py-12"},L={class:"bg-white grid v-screen place-items-center ml-24 mr-24 rounded-md"},N={class:"mt-8 mb-3 flex"},$=["href"],E=e("i",{class:"fa fa-solid fa-plus-circle"},null,-1),H={class:"bg-white grid place-items-center ml-24 mr-24 pb-8"},O={class:"table-auto border border-gray-400"},V=e("thead",null,[e("tr",{class:"bg-gray-100"},[e("th",{class:"px-4 py-4"},"#"),e("th",{class:"px-4 py-4"},"CATEGORIA"),e("th",{class:"px-4 py-4",colspan:"2"},"Opciones"),e("th",{class:"px-4 py-4"})])],-1),q={class:"border border-gray-400 px-4 py-4"},F={class:"border border-gray-400 px-4 py-4"},I={class:"border border-gray-400 px-4 py-4"},M=["href"],j=e("i",{class:"fa-solid fa-edit text-white"},null,-1),z={class:"border border-gray-400 px-4 py-4"},G=e("i",{class:"fa-solid fa-trash text-white"},null,-1);function R(t,o,h,Z,J,p){const u=a("Head"),f=a("DangerButton"),g=a("AuthenticatedLayout");return r(),i(_,null,[c(u,{title:"Categorias Superiores"}),c(g,null,{header:n(()=>[S]),default:n(()=>[e("div",T,[e("div",L,[e("div",N,[e("a",{href:t.route("class_categories.create"),class:l("px-4 py-2 bg-gray-800 text-white border rounded-md font-semibold text-xs")},[E,d("Agregar ")],8,$)])]),e("div",H,[e("table",O,[V,e("tbody",null,[(r(!0),i(_,null,v(h.class_categories,(s,b)=>(r(),i("tr",{key:s.id},[e("td",q,m(b+1),1),e("td",F,m(s.name),1),e("td",I,[e("a",{href:t.route("class_categories.edit",s.id),class:l("px-4 py-2 bg-yellow-400 text-white border rounded-md font-semibold text-xs hover:bg-yellow-600")},[j,d("Editar ")],8,M)]),e("td",z,[c(f,{onClick:K=>p.confirmDelete(s.id,s.name)},{default:n(()=>[G]),_:2},1032,["onClick"])])]))),128))])])])])]),_:1})],64)}const oe=w(A,[["render",R]]);export{oe as default};