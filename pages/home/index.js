"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[404],{9904:function(e,t,i){var a=i(8870),s=i(4705),r=i(6540),o=i(118),n=i(7581),c=i(3443),l=i(2471),d=i(1672),h=i(7908),m=i(4848);const g=(0,n.I4)(o.Ss)`
  display: block;
  width: 100%;
  padding: ${e=>e.padding};
  border-radius: ${e=>e.radius};
  overflow: hidden;
  transition: all var(--transition-default);
  
  /* Variant styles */
  background-color: ${e=>{switch(e.variant){case"default":return"var(--color-backgroundAlt)";case"elevated":return"var(--color-backgroundAlt)";case"outlined":return"transparent";case"glowing":return"var(--color-backgroundAlt)";default:return"var(--color-backgroundAlt)"}}};
  
  border: ${e=>{switch(e.variant){case"outlined":return"var(--border-width-normal) solid var(--color-border)";default:return"none"}}};
  
  box-shadow: ${e=>{switch(e.variant){case"elevated":return"var(--shadow-md)";case"glowing":return"var(--glow-md)";default:return"none"}}};
  
  /* Active state */
  &:active {
    transform: ${e=>e.onClick?"scale(0.99)":"none"};
    opacity: ${e=>e.onClick?"0.95":"1"};
  }
`,p=({children:e,variant:t="default",padding:i="var(--spacing-md)",radius:a="var(--radius-lg)",className:s,onClick:r})=>{const{theme:o}=(0,h.DP)();return(0,m.jsx)(g,{variant:t,padding:i,radius:a,className:s,onClick:r,children:e})};var u=i(3146),x=i(9217),v=i(9070),j=i(6773),f=i(8502),b=i(317),w=i(892)["document"],y=i(892)["window"],N=i(892)["requestAnimationFrame"];const z=(0,n.I4)(o.BM)`
  min-height: 100vh;
  background-color: var(--color-background);
`,A=(0,n.I4)(o.Ss)`
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;
  
  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.7)
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: var(--spacing-xl);
  }
  
  .hero-title {
    color: var(--color-textInverse);
    font-size: var(--font-size-xxl);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-sm);
    text-shadow: var(--shadow-text);
  }
  
  .hero-subtitle {
    color: var(--color-textInverse);
    font-size: var(--font-size-md);
    margin-bottom: var(--spacing-lg);
    text-shadow: var(--shadow-text);
    opacity: 0.9;
  }
  
  .hero-button {
    align-self: flex-start;
  }
  
  .bioluminescent-particles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }
`,E=(0,n.I4)(o.Ss)`
  padding: var(--spacing-xl);
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-lg);
    
    .section-title {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-textPrimary);
    }
    
    .section-action {
      font-size: var(--font-size-sm);
      color: var(--color-primary);
    }
  }
`,Y=(0,n.I4)(o.BM)`
  white-space: nowrap;
  margin: 0 calc(-1 * var(--spacing-md));
  padding: 0 var(--spacing-md);
  
  .carousel-item {
    display: inline-block;
    width: 200px;
    margin-right: var(--spacing-md);
    vertical-align: top;
  }
`,P=(0,n.I4)(o.Ss)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
`,S=(0,n.I4)(o.Ss)`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
`,k=()=>(0,m.jsx)("canvas",{className:"bioluminescent-particles",id:"particles-canvas"}),M=(0,c.PA)((()=>{const e=(0,l.Ke)(),t=(0,l.j_)();(0,r.useEffect)((()=>{const t=w.getElementById("particles-canvas");return t&&i(t),e.fetchFeaturedProducts(),e.fetchNewProducts(),e.fetchCategories(),()=>{}}),[]);const i=e=>{const i=e.getContext("2d");if(!i)return;const a=()=>{e.width=y.innerWidth,e.height=400};a(),y.addEventListener("resize",a);class r{constructor(){(0,s.A)(this,"x",void 0),(0,s.A)(this,"y",void 0),(0,s.A)(this,"size",void 0),(0,s.A)(this,"speedX",void 0),(0,s.A)(this,"speedY",void 0),(0,s.A)(this,"color",void 0),(0,s.A)(this,"alpha",void 0),this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.size=3*Math.random()+1,this.speedX=.5*Math.random()-.25,this.speedY=.5*Math.random()-.25,this.color=o(),this.alpha=.5*Math.random()+.5}update(){this.x+=this.speedX,this.y+=this.speedY,this.size>.2&&(this.size-=.01),this.alpha>0&&(this.alpha-=.005),(this.size<=.2||this.alpha<=0)&&(this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.size=3*Math.random()+1,this.alpha=.5*Math.random()+.5,this.color=o()),this.x<0&&(this.x=e.width),this.x>e.width&&(this.x=0),this.y<0&&(this.y=e.height),this.y>e.height&&(this.y=0)}draw(){i.beginPath(),i.arc(this.x,this.y,this.size,0,2*Math.PI),i.fillStyle=this.color,i.globalAlpha=this.alpha,i.fill();const e=i.createRadialGradient(this.x,this.y,0,this.x,this.y,2*this.size);e.addColorStop(0,this.color),e.addColorStop(1,"transparent"),i.beginPath(),i.arc(this.x,this.y,2*this.size,0,2*Math.PI),i.fillStyle=e,i.globalAlpha=.5*this.alpha,i.fill(),i.globalAlpha=1}}const o=()=>{const e=[t.currentTheme.colors.accent1,t.currentTheme.colors.accent2,t.currentTheme.colors.accent3,t.currentTheme.colors.primary];return e[Math.floor(Math.random()*e.length)]},n=[];for(let e=0;e<50;e++)n.push(new r);const c=()=>{i.clearRect(0,0,e.width,e.height);for(const e of n)e.update(),e.draw();N(c)};return c(),()=>{y.removeEventListener("resize",a)}},a=()=>{if(e.isLoadingFeatured)return(0,m.jsx)(u.R,{size:"md"});const t=e.featuredProducts.map((t=>e.getProduct(t))).filter(Boolean);return 0===t.length?(0,m.jsx)(p,{children:(0,m.jsx)(o.EY,{children:"\u6682\u65e0\u7cbe\u9009\u5546\u54c1"})}):(0,m.jsx)(Y,{scrollX:!0,scrollWithAnimation:!0,children:t.map((e=>(0,m.jsx)(o.Ss,{className:"carousel-item",children:(0,m.jsx)(x.A,{id:e.id,title:e.title,price:e.price,originalPrice:e.originalPrice,image:e.image,tags:e.tags,rating:e.rating})},e.id)))})},n=()=>{if(e.isLoadingNew)return(0,m.jsx)(u.R,{size:"md"});const t=e.newProducts.map((t=>e.getProduct(t))).filter(Boolean);return 0===t.length?(0,m.jsx)(p,{children:(0,m.jsx)(o.EY,{children:"\u6682\u65e0\u65b0\u54c1\u4e0a\u5e02"})}):(0,m.jsx)(Y,{scrollX:!0,scrollWithAnimation:!0,children:t.map((e=>(0,m.jsx)(o.Ss,{className:"carousel-item",children:(0,m.jsx)(x.A,{id:e.id,title:e.title,price:e.price,originalPrice:e.originalPrice,image:e.image,tags:e.tags,rating:e.rating,isNew:!0})},e.id)))})},c=()=>{if(e.isLoadingCategories)return(0,m.jsx)(u.R,{size:"md"});const t=e.rootCategories.map((t=>e.getCategory(t))).filter(Boolean);return 0===t.length?(0,m.jsx)(p,{children:(0,m.jsx)(o.EY,{children:"\u6682\u65e0\u5206\u7c7b"})}):(0,m.jsx)(P,{children:t.map((e=>(0,m.jsx)(v.r,{id:e.id,title:e.title,image:e.image,productCount:e.productCount},e.id)))})},h=[{id:"h1",title:"\u666e\u6d31\u8336\u5236\u4f5c\u5de5\u827a",image:"https://example.com/heritage1.jpg",location:"\u4e91\u5357\u7701\u897f\u53cc\u7248\u7eb3",description:"\u5343\u5e74\u4f20\u627f\u7684\u666e\u6d31\u8336\u5236\u4f5c\u6280\u827a\uff0c\u878d\u5408\u4e86\u4e91\u5357\u5c11\u6570\u6c11\u65cf\u7684\u667a\u6167"},{id:"h2",title:"\u50a3\u65cf\u7ec7\u9526\u6280\u827a",image:"https://example.com/heritage2.jpg",location:"\u4e91\u5357\u7701\u5fb7\u5b8f\u5dde",description:"\u8272\u5f69\u7eda\u4e3d\u7684\u50a3\u65cf\u7ec7\u9526\uff0c\u8bb0\u5f55\u7740\u50a3\u65cf\u4eba\u6c11\u7684\u5386\u53f2\u4e0e\u6587\u5316"}],g=[{id:"a1",title:"\u4e91\u5357\u9ad8\u5c71\u8336\u7684\u56db\u5b63\u91c7\u6458\u6307\u5357",image:"https://example.com/article1.jpg",author:"\u8336\u9053\u4e13\u5bb6",date:"2025-05-15",category:"\u8336\u6587\u5316",summary:"\u4e0d\u540c\u5b63\u8282\u91c7\u6458\u7684\u9ad8\u5c71\u8336\uff0c\u98ce\u5473\u5404\u5f02\uff0c\u672c\u6587\u4e3a\u60a8\u8be6\u89e3\u56db\u5b63\u8336\u53f6\u7684\u7279\u70b9",readTime:5},{id:"a2",title:"\u63a2\u8bbf\u4e91\u5357\u91ce\u751f\u83cc\u7684\u79d8\u5bc6\u68ee\u6797",image:"https://example.com/article2.jpg",author:"\u7f8e\u98df\u63a2\u9669\u5bb6",date:"2025-05-10",category:"\u7f8e\u98df\u63a2\u7d22",summary:"\u6df1\u5165\u4e91\u5357\u539f\u59cb\u68ee\u6797\uff0c\u5bfb\u627e\u73cd\u7a00\u91ce\u751f\u83cc\u7684\u751f\u957f\u73af\u5883\u4e0e\u91c7\u6458\u6280\u5de7",readTime:8}];return(0,m.jsxs)(z,{scrollY:!0,children:[(0,m.jsxs)(A,{children:[(0,m.jsx)(o._V,{className:"hero-image",src:"https://example.com/yunnan-hero.jpg",mode:"aspectFill"}),(0,m.jsxs)(o.Ss,{className:"hero-overlay",children:[(0,m.jsx)(o.EY,{className:"hero-title",children:"\u4e91\u5357\u5473\u9053"}),(0,m.jsx)(o.EY,{className:"hero-subtitle",children:"\u63a2\u7d22\u4e91\u5357\u539f\u751f\u6001\u7f8e\u98df\u4e0e\u6587\u5316"}),(0,m.jsx)(d.$,{className:"hero-button",variant:"primary",size:"lg",glow:!0,children:"\u7acb\u5373\u63a2\u7d22"})]}),(0,m.jsx)(k,{})]}),(0,m.jsxs)(E,{children:[(0,m.jsxs)(o.Ss,{className:"section-header",children:[(0,m.jsx)(o.EY,{className:"section-title",children:"\u7cbe\u9009\u597d\u7269"}),(0,m.jsx)(o.EY,{className:"section-action",children:"\u67e5\u770b\u5168\u90e8"})]}),a()]}),(0,m.jsx)(b.c,{}),(0,m.jsxs)(E,{children:[(0,m.jsxs)(o.Ss,{className:"section-header",children:[(0,m.jsx)(o.EY,{className:"section-title",children:"\u7279\u8272\u5206\u7c7b"}),(0,m.jsx)(o.EY,{className:"section-action",children:"\u5168\u90e8\u5206\u7c7b"})]}),c()]}),(0,m.jsx)(b.c,{}),(0,m.jsxs)(E,{children:[(0,m.jsxs)(o.Ss,{className:"section-header",children:[(0,m.jsx)(o.EY,{className:"section-title",children:"\u65b0\u54c1\u4e0a\u5e02"}),(0,m.jsx)(o.EY,{className:"section-action",children:"\u67e5\u770b\u5168\u90e8"})]}),n()]}),(0,m.jsx)(b.c,{}),(0,m.jsxs)(E,{children:[(0,m.jsxs)(o.Ss,{className:"section-header",children:[(0,m.jsx)(o.EY,{className:"section-title",children:"\u4e91\u5357\u975e\u9057"}),(0,m.jsx)(o.EY,{className:"section-action",children:"\u63a2\u7d22\u66f4\u591a"})]}),(0,m.jsx)(S,{children:h.map((e=>(0,m.jsx)(j.a,{id:e.id,title:e.title,image:e.image,location:e.location,description:e.description},e.id)))})]}),(0,m.jsx)(b.c,{}),(0,m.jsxs)(E,{children:[(0,m.jsxs)(o.Ss,{className:"section-header",children:[(0,m.jsx)(o.EY,{className:"section-title",children:"\u4e91\u5357\u98ce\u60c5"}),(0,m.jsx)(o.EY,{className:"section-action",children:"\u66f4\u591a\u6587\u7ae0"})]}),(0,m.jsx)(S,{children:g.map((e=>(0,m.jsx)(f.d,{id:e.id,title:e.title,image:e.image,author:e.author,date:e.date,category:e.category,summary:e.summary,readTime:e.readTime},e.id)))})]})]})}));var C=M,I={},T=(0,a.eU)(C,"pages/home/index",{root:{cn:[]}},I||{});C&&C.behaviors&&(T.behaviors=(T.behaviors||[]).concat(C.behaviors));Page(T)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[96,179,76],(function(){return t(9904)}));e.O()}]);