import{r as s,j as e,L as m,a as y,N as k}from"./index-DuXFu7fm.js";import{F as S}from"./Footer-Cyo53zLp.js";function D(c){const{key:d,id_product:h,nama:r,type:a,price:x,ket:p,url:f}=c;console.log(c);const[l,u]=s.useState(!1),[i,b]=s.useState();s.useState({}),s.useState();const t=n=>{const w=(n.currentTarget||n.target).getAttribute("data-id");v(w,i,2)},v=async(n,j,w)=>{const g={id_product:n,id_user:j,paid:w};console.log(g);try{const o=await y.post("http://www.tech-in-dynamic.site:3000/api/v1/cart/add",g);o.status==200&&(console.log(o.data),document.querySelectorAll(`[data-id='${n}']`).forEach(N=>{N.disabled=!0}),alert("Berhasil ditambahkan"))}catch(o){o.response&&o.response.status==300&&setshowAlertWar(!0),o.response?(console.error("Response errora:",o.response.status),console.error("Response data:",o.response.data)):console.error("Error:",o.message)}};return s.useEffect(()=>{const n=localStorage.getItem("id_user");b(n||0),console.log(i)},[]),s.useEffect(()=>{console.log(l)},[l]),e.jsx("section",{className:l?"hidden bg-red-500":"fixed h-screen w-full bg-gray-500/70 top-0 left-0 right-0 bottom-0 overflow-hidden",style:{zIndex:100},children:e.jsx("main",{className:"p-10 grid place-items-center h-full relative",children:e.jsxs("div",{className:" w-[50%] relative h-[70%] bg-white rounded-sm bg-[url('http://www.tech-in-dynamic.site:81/media/connect/images/bg_paper.png')] bg-content bg-fill bg-no-repeat shadow ",children:[e.jsx("div",{className:"closeSection text-2xl font-semibold flex justify-end mr-3",children:e.jsx("button",{onClick:()=>u(!l),className:"cursor-pointer",children:"X"})}),e.jsxs("div",{className:"grid p-3 pb-4 grid-flow-col-dense gap-3 place-items-center h-full w-full",children:[e.jsxs("div",{className:"content relative items-center w-full rounded-sm h-full p-2",children:[e.jsx("iframe",{src:f,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0,className:"w-full h-[55%] rounded-md"}),e.jsx("div",{className:"h-[50%] flex justify-center -mt-10 w-full",children:e.jsx("img",{src:"http://www.tech-in-dynamic.site:81/media/connect/images/woman.png",alt:"",className:"h-full"})})]}),e.jsxs("div",{className:"textContent col w-full text-white col-span-1 p-2 font-bold text-black grid items-between h-full",children:[e.jsxs("div",{className:"pt-20",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-slate-700 text-white text-stroke font-bold",children:"Title"}),e.jsx("h2",{className:"font-bold text-xl text-stroke font-bold",children:r})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-slate-700 text-white text-stroke font-bold",children:"Type"}),e.jsx("h2",{className:"text-md text-stroke font-bold",children:a})]}),e.jsxs("div",{className:"",children:[e.jsx("label",{className:"text-slate-700 text-white text-stroke font-bold",children:"Summary"}),e.jsxs("h2",{className:"text-stroke font-bold",children:[" ",p]})]})]}),e.jsx("div",{className:" flex gap-3",children:i!=0?e.jsxs("button",{onClick:t,"data-id":h,className:"rounded bg-blue-300 h-10 shadow-md font-semibold p-1 w-full ",children:[e.jsx("i",{class:"fa-solid fa-cart-shopping"}),"Add To Cart"]}):e.jsx("div",{className:"flex md:justify-center mr-7 w-full h-10 border bg-[#df5ac1] border-none rounded-md shadow-md text-center",children:e.jsx(m,{to:"/login",children:e.jsx("button",{className:"py-1 px-10 text-center",children:"Login"})})})}),e.jsxs("div",{className:"sosmed flex justify-evenly mt-3",children:[e.jsx("div",{children:e.jsx("i",{class:"fa-brands fa-square-instagram"})}),e.jsx("div",{children:e.jsx("i",{class:"fa-brands fa-square-facebook"})}),e.jsx("div",{children:e.jsx("i",{class:"fa-brands fa-youtube"})}),e.jsx("div",{children:e.jsx("i",{class:"fa-brands fa-whatsapp"})})]})]})]})]})})})}function E(c){const{key:d,id_product:h,nama:r,type:a,price:x,ket:p,url:f,thumbnail:l}=c,[u,i]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"shadow w-72 h-72 pt-10 hover:border-2 object-cover rounded-md shadow-md hover:border-blue-300 grid place-center transition-all duration-300 ease-linear",onClick:()=>i(!u),children:[e.jsx("img",{src:"http://www.tech-in-dynamic.site:81/media/connect/images/products/"+l,alt:"Thumbnail",className:"h-[200px] w-full object-cover rounded-tr-md rounded-tl-md"}),e.jsx("h2",{className:"text-center text-xl m-auto font-olive",children:r})]}),u&&e.jsx(D,{nama:r,type:a,id_product:h,price:x,ket:p,url:f},d)]})}function T(c){const[d,h]=s.useState([]),r=c.type;let a="";s.useState(a);const x=async()=>{console.log(r),r==="allProduk"?a="http://www.tech-in-dynamic.site:3000/api/v1/products":r==="videoFacebook"?a="http://www.tech-in-dynamic.site:3000/api/v1/products/filter/Fac":r==="tiktok"?a="http://www.tech-in-dynamic.site:3000/api/v1/products/filter/tiktok":r==="instaStory"?a="http://www.tech-in-dynamic.site:3000/api/v1/products/filter/Inst":a="http://www.tech-in-dynamic.site:3000/api/v1/products/filter/You";try{const t=await y.get(a);h(t.data),console.log("Data:",typeof t.data)}catch(t){t.response?(console.error("Response error:",t.response.status),console.error("Response data:",t.response.data)):t.request?console.error("Request error:",t.request):console.error("Error:",t.message)}};let[p,f]=s.useState(!1);const l=c.type;l=="allProduk"&&(f=!0);let[u,i]=s.useState([]);s.useEffect(()=>{x(),(l=="allProduk"||l=="videoFacebook")&&i(d),console.log(u)},[l]);const b=d.map(t=>e.jsx(E,{id_product:t.id_product,nama:t.title,type:t.type,price:t.price,ket:t.description,url:t.url,thumbnail:t.file},t.key));return e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsxs("div",{className:"my-5 pt-20 h-full w-full bg-[url('images/bgAbout.png')] bg-no-repeat bg-top-4 ",children:[e.jsxs("div",{className:"px-2",children:[e.jsx("h1",{className:"text-3xl font-semibold underline underline-offset-8 decoration-wavy decoration-[#1a4f5c] text-[#1a4f5c]",children:"Gallery Ads Video"}),e.jsxs("nav",{className:"mt-5 grid grid-cols-3 md:grid-flow-col gap-2 w-full md:w-[40%] text-sm font-semibold",children:[e.jsx(m,{to:"/Gallery",className:p?"border p-1 bg-blue-500 text-center rounded shadow w-full active":"border p-1 bg-blue-500 text-center rounded shadow w-full",children:"All Video"}),e.jsx(m,{to:"/videoFacebook",className:"border p-1 bg-blue-500 text-center rounded shadow w-full",children:"Video Facebook"}),e.jsx(m,{to:"/instaStory",className:"border p-1 bg-blue-500 text-center rounded shadow w-full",children:" InstaStory"}),e.jsx(m,{to:"/videoYoutube",className:"border p-1 bg-blue-500 text-center rounded shadow w-full",children:"Video Youtube"}),e.jsx(m,{to:"/tiktok",className:"border p-1 bg-blue-500 text-center rounded shadow w-full px-3",children:"Video Tiktok"})]})]}),e.jsx("div",{className:"flex flex-row flex-wrap justify-stretch mt-5 gap-4 px-10",children:b})]}),e.jsx(S,{})]})}export{T as default};
