import{r as t,j as e,L as x,a as v,N as k}from"./index-XPj7ypr-.js";import{F as S}from"./Footer-Z6Pa5GSE.js";function D(n){const{key:i,id_product:p,nama:l,type:a,price:h,ket:m,url:f}=n,[r,u]=t.useState(!1),[d,b]=t.useState();t.useState({}),t.useState();const s=c=>{const w=(c.currentTarget||c.target).getAttribute("data-id");y(w,d,2)},y=async(c,g,w)=>{const j={id_product:c,id_user:g,paid:w};console.log(j);try{const o=await v.post("http://www.tempat-transit.cloud:3000/api/v1/cart/add",j);o.status==200&&(console.log(o),document.querySelectorAll(`[data-id='${c}']`).forEach(N=>{N.disabled=!0}),alert("Berhasil ditambahkan"))}catch(o){o.response&&o.response.status==300&&setshowAlertWar(!0),o.response?(console.error("Response errora:",o.response.status),console.error("Response data:",o.response.data)):console.error("Error:",o.message)}};return t.useEffect(()=>{const c=localStorage.getItem("id_user");b(c||0),console.log(d)},[]),t.useEffect(()=>{console.log(r)},[r]),e.jsx("section",{className:r?"hidden bg-red-500":"fixed h-screen w-full bg-gray-500/70 top-0 left-0 right-0 bottom-0 overflow-hidden",style:{zIndex:100},children:e.jsx("main",{className:"p-10 grid place-items-center h-full",children:e.jsxs("div",{className:"borde w-2/3 h-full p-5 bg-white rounded-sm shadow",children:[e.jsx("div",{className:"closeSection text-2xl font-semibold flex justify-end mr-3",children:e.jsx("button",{onClick:()=>u(!r),className:"cursor-pointer",children:"X"})}),e.jsxs("div",{className:"grid grid-flow-col-dense gap-3 place-items-center h-full w-full",children:[e.jsx("div",{className:"content w-full h-2/4 rounded-sm",children:e.jsx("iframe",{src:f,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0,className:"md:w-96 md:h-full"})}),e.jsxs("div",{className:"textContent col w-full h-2/3 col-span-1",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-slate-400",children:"Title"}),e.jsx("h2",{className:"font-bold text-xl",children:l})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-slate-400",children:"Type"}),e.jsx("h2",{className:"text-md",children:a})]}),e.jsxs("div",{className:"",children:[e.jsx("label",{className:"text-slate-400",children:"Summary"}),e.jsxs("h2",{className:"",children:[" ",m]})]}),e.jsx("div",{className:"mt-3 flex gap-3",children:d!=0?e.jsxs("button",{onClick:s,"data-id":p,className:"border border-blue-400 rounded shadow-md font-semibold p-1 w-full",children:[e.jsx("i",{class:"fa-solid fa-cart-shopping"}),"Add To Cart"]}):e.jsx("div",{className:"flex md:justify-center mr-7 w-full border bg-[#df5ac1] border-none rounded-md shadow-md text-center",children:e.jsx(x,{to:"/login",children:e.jsx("button",{className:"py-1 px-10 text-center",children:"Login"})})})}),e.jsxs("div",{className:"sosmed flex justify-evenly mt-3",children:[e.jsx("div",{children:e.jsx("i",{class:"fa-brands fa-square-instagram"})}),e.jsx("div",{children:e.jsx("i",{class:"fa-brands fa-square-facebook"})}),e.jsx("div",{children:e.jsx("i",{class:"fa-brands fa-youtube"})}),e.jsx("div",{children:e.jsx("i",{class:"fa-brands fa-whatsapp"})})]})]})]})]})})})}function E(n){const{key:i,id_product:p,nama:l,type:a,price:h,ket:m,url:f,thumbnail:r}=n,[u,d]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"shadow w-72 h-72 pt-10 hover:border-2 object-cover hover:border-blue-300 transition-all duration-300 ease-linear",onClick:()=>d(!u),children:[e.jsx("img",{src:"images/products/"+r,alt:"Thumbnail"}),e.jsx("h2",{className:"text-center text-xl m-auto",children:l})]}),u&&e.jsx(D,{nama:l,type:a,id_product:p,price:h,ket:m,url:f},i)]})}function q(n){const[i,p]=t.useState([]),l=n.type;let a="";t.useState(a);const h=async()=>{console.log(l),l==="allProduk"?a="http://www.tempat-transit.cloud:3000/api/v1/products":l==="videoFacebook"?a="http://www.tempat-transit.cloud:3000/api/v1/products/filter/Fac":l==="instaStory"?a="http://www.tempat-transit.cloud:3000/api/v1/products/filter/Inst":a="http://www.tempat-transit.cloud:3000/api/v1/products/filter/You";try{const s=await v.get(a);p(s.data),console.log("Data:",typeof s.data)}catch(s){s.response?(console.error("Response error:",s.response.status),console.error("Response data:",s.response.data)):s.request?console.error("Request error:",s.request):console.error("Error:",s.message)}};let[m,f]=t.useState(!1);const r=n.type;r=="allProduk"&&(f=!0);let[u,d]=t.useState([]);t.useEffect(()=>{h(),(r=="allProduk"||r=="videoFacebook")&&d(i),console.log(u)},[r]);const b=i.map(s=>e.jsx(E,{id_product:s.id_product,nama:s.title,type:s.type,price:s.price,ket:s.descriptionx,url:s.url,thumbnail:s.file},s.key));return e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsxs("div",{className:"my-5 pt-20 h-full w-full bg-[url('images/bgAbout.png')] bg-no-repeat bg-top-4 ",children:[e.jsxs("div",{className:"px-2",children:[e.jsx("h1",{className:"text-3xl font-semibold underline underline-offset-8 decoration-wavy decoration-[#1a4f5c] text-[#1a4f5c]",children:"Gallery Ads Video"}),e.jsxs("nav",{className:"mt-5 grid grid-cols-3 md:grid-flow-col gap-2 w-full md:w-[40%] text-sm font-semibold",children:[e.jsx(x,{to:"/Gallery",className:m?"border p-1 bg-blue-500 text-center rounded shadow w-full active":"border p-1 bg-blue-500 text-center rounded shadow w-full",children:"All Video"}),e.jsx(x,{to:"/videoFacebook",className:"border p-1 bg-blue-500 text-center rounded shadow w-full",children:"Video Facebook"}),e.jsx(x,{to:"/instaStory",className:"border p-1 bg-blue-500 text-center rounded shadow w-full",children:" InstaStory"}),e.jsx(x,{to:"/videoYoutube",className:"border p-1 bg-blue-500 text-center rounded shadow w-full",children:"Video Youtube"})]})]}),e.jsx("div",{className:"flex flex-row flex-wrap justify-stretch mt-5 gap-4 px-10",children:b})]}),e.jsx(S,{})]})}export{q as default};
