import{M as A,C as M}from"./MainNavCustom-5c609825.js";import{B as H}from"./BaseSelectGeneric-5e726074.js";import{_ as F,a as u,o as c,c as l,b as g,w as P,F as h,f as y,l as L,d as t,t as d,E as q,Z as D,H as O,i as k,g as v}from"./app-b847fc4e.js";import{_ as j}from"./SelectInput-115ca0f1.js";import{F as E}from"./Footer-071d1705.js";import{i as C,a as x,b as S,c as T,d as w,e as N,C as B,S as G,P as R,N as V}from"./06-8c4fbade.js";import{P as z}from"./PrimaryButton-7b8a4adb.js";import{i as W,u as Z}from"./ListProductsMain-a28b863b.js";import"./splide.min-02fca822.js";import"./NavLink-61b1fc92.js";const J={props:{products:{type:Array,required:!0}},data(){return{currentPage:0,img01:C,img02:x,img03:S,img04:T,img05:w,img06:N,settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:1,snapAlign:"center"},1024:{itemsToShow:5,snapAlign:"start"}},slides:[C,x,S,T,w,N]}},components:{Carousel:B,Slide:G,Pagination:R,Navigation:V},computed:{groupedProducts(){const e=this.groupProductsByName(this.products),s=this.settings.itemsToShow;return this.chunkArray(e,s)}},methods:{groupProductsByName(e){const s={};return e.forEach(r=>{const n=r.name;s[n]||(s[n]=[]),s[n].push(r)}),Object.values(s)},chunkArray(e,s){const r=[];for(let n=0;n<e.length;n+=s)r.push(e.slice(n,n+s));return r}},created(){console.log(this.products)},setup(){}},K={class:"carousel__item"},Q=["src"],U={class:"product-name"},X={class:"product-price"};function Y(e,s,r,n,a,i){const m=u("Slide"),f=u("Navigation"),b=u("Carousel");return c(),l("div",null,[g(b,q(a.settings,{breakpoints:a.breakpoints,wrapAround:!0}),{addons:P(()=>[g(f)]),default:P(()=>[(c(!0),l(h,null,y(r.products,(_,o)=>(c(),L(m,{key:_},{default:P(()=>[t("div",K,[t("img",{class:"img-product",src:_.image},null,8,Q),t("p",null,d(o+1),1),t("p",U,d(_.name),1),t("p",X,"S/. "+d(_.price),1)])]),_:2},1024))),128))]),_:1},16,["breakpoints"])])}const $=F(J,[["render",Y]]);const I={data(){return{currentPage:1,totalProductsForCategory:0,perPage:12,filter_category:{search_category:0},filter:{search_name_product:""},currentPage:1,number_pages:void 0,subcategoryOptions:void 0,subCategoryId:void 0,iconMore:W}},components:{MainNavCustom:A,BaseSelectGeneric:H,Head:D,SelectInput:j,Footer:E,CarouselProductsName:$,CarouselSplide:M,PrimaryButton:z},props:{products:{type:Object},category:{type:String},class_category:{type:String},cart:{type:Object,required:!0,default:()=>[]}},created(){console.log(this.products),console.log(this.category_list),console.log(this.class_category),this.number_pages=Math.ceil(this.products.length/this.perPage)},computed:{formatPrice:function(e){return console.log(typeof e),e.toFixed(2)},totalPages(){return Math.ceil(this.totalProductsForCategory/this.perPage)},filteredProducByCategory:function(){if(this.products){const e=this.perPage*(this.currentPage-1),s=e+this.perPage;let r=this.products;const n=Number(this.filter_category.search_category);return n!==0?r=r.filter(i=>i.subcategory_id===n):this.totalProductsForCategory=0,this.filter.search_name_product&&(n!==0?r=r.filter(i=>i.name.toLowerCase().includes(this.filter.search_name_product.toLowerCase())):r=this.products.filter(i=>i.name.toLowerCase().includes(this.filter.search_name_product.toLowerCase()))),this.totalProductsForCategory=r.length,r.slice(e,s)}else return[]}},methods:{async addToCart(e){try{const s=await this.$inertia.post("/cart/add",{product_id:e,quantity:1});this.toast.success("Producto agregado correctamente")}catch(s){console.error(s),this.toast.error("Hubo un problema al agregar el producto")}},redirectToProductDetails(e,s){console.log(e),this.$inertia.visit(route("product.details",{categoria2:e,id:s.id}))},getProductsBySubcategory(e){return this.subCategoryId=e,e==null?this.products.filter(s=>s.subcategory_id===null||s.subcategory_id===void 0):(console.log("filtro ",this.products.filter(s=>s.subcategory_id==e)),this.products.filter(s=>s.subcategory_id==e))},prevPage(){this.currentPage>1&&this.currentPage--},nextPage(){this.currentPage<this.number_pages&&this.currentPage++},goToPageNumber(e){e>=1&&e<=this.number_pages&&(setTimeout(()=>{this.scrollToTop()},100),this.currentPage=e)},scrollToTop(){window.scrollTo(0,0)}},setup(e){const s=O(),r=Z();return r.initializeCart(e.cart),{toast:s,cart:r.cart}}},tt={id:"category_product"},et={class:"section-product"},st={class:"list-documents"},ot={class:"title-category"},rt={class:"box-documents"},it={class:"box-data-document"},nt=["onClick"],at=["src"],ct={class:"data-product"},lt={class:"box-data-general"},dt=["onClick"],ut={class:"title-desription"},_t={class:"title-price"},ht={class:"box-button-general"},gt={class:"box-button-more"},pt=["onClick"],mt=["src"],ft={class:"box-price"},bt={class:"title-price"},Pt=["onClick"],vt={class:"pt-1 ml-auto","aria-label":"Pagination"},yt={class:"pagination mb-0"},kt=t("li",{class:"page-item d-sm-none"},[t("span",{class:"page-link page-link-static"},"1 / 5")],-1),Ct={class:"contain-number"},xt=["disabled"],St=t("i",{class:"fa-solid fa-angle-left",style:{color:"#17696a"}},null,-1),Tt=[St],wt=["onClick"],Nt={class:"page-link"},Ft=["disabled"],At=t("i",{class:"fa-solid fa-angle-right",style:{color:"#17696a"}},null,-1),Mt=[At],Ht={key:0,class:"document-list-searched"},Lt=t("div",{class:"box-document-empty"}," No se encontraron productos con relación a su busqueda ",-1),qt=[Lt],Dt={key:1,class:"document-list-searched"},Ot=t("div",{class:"box-document-empty"}," Aun no se ha subido ningún producto ",-1),jt=[Ot];function Et(e,s,r,n,a,i){const m=u("Head"),f=u("MainNavCustom"),b=u("AsistanChef"),_=u("Footer");return c(),l(h,null,[g(m,{title:r.class_category},null,8,["title"]),g(f,{"category-active":r.class_category,cart:n.cart},null,8,["category-active","cart"]),t("div",tt,[t("div",et,[t("div",st,[t("h2",ot,d(r.class_category),1),i.filteredProducByCategory.length?(c(),l(h,{key:0},[t("div",rt,[(c(!0),l(h,null,y(i.filteredProducByCategory,o=>(c(),l("div",{class:"document-item",key:o.id},[t("div",it,[t("div",{class:"box-img-data",onClick:p=>i.redirectToProductDetails(o.class_categories_id,o)},[t("img",{src:o.images.length>0?o.images[0].image_path:o.image,alt:"",class:"img-preview"},null,8,at)],8,nt),t("div",ct,[t("div",lt,[t("h2",{class:"title-item",onClick:p=>i.redirectToProductDetails(o.class_categories_id,o)},d(o.name),9,dt),t("h2",ut,d(o.description),1),t("h2",_t,"S/. "+d(o.price.toFixed(2)),1)]),t("div",ht,[t("div",gt,[t("button",{class:"button-show",onClick:k(p=>i.addToCart(o.id),["stop"])},[t("img",{src:a.iconMore},null,8,mt)],8,pt)])])]),t("div",ft,[t("h2",bt,"S/. "+d(o.price.toFixed(2)),1),t("button",{class:"button-buy",onClick:k(p=>e.openGetInfoByWhatsapp(o),["stop"])},"Comprar",8,Pt)])])]))),128))]),t("nav",vt,[t("ul",yt,[kt,t("div",Ct,[t("button",{class:v(["button-left",[a.currentPage===1?"disabled-button":""]]),onClick:s[0]||(s[0]=(...o)=>i.prevPage&&i.prevPage(...o)),disabled:a.currentPage===1},Tt,10,xt),(c(!0),l(h,null,y(i.totalPages,o=>(c(),l("li",{class:v(["page-item d-none d-sm-block number-page",{"active-div":o===a.currentPage}]),style:{cursor:"pointer"},"aria-current":"page",onClick:p=>i.goToPageNumber(o),key:o},[t("span",Nt,d(o),1)],10,wt))),128)),t("button",{class:v(["button-rigth",[a.number_pages===a.currentPage?"disabled-button":""]]),onClick:s[1]||(s[1]=(...o)=>i.nextPage&&i.nextPage(...o)),disabled:a.number_pages===a.currentPage},Mt,10,Ft)])])])],64)):(c(),l(h,{key:1},[r.products?(c(),l("div",Ht,qt)):(c(),l("div",Dt,jt))],64))])])]),g(b),g(_)],64)}const Ut=F(I,[["render",Et]]);export{Ut as default};