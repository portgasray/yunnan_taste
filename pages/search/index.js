"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[53],{9840:function(t,s,a){var e=a(8870),r=a(4705),i=a(6540),o=a(118),n=a(7581),c=a(3443),l=a(2471),h=a(5853),d=a(8119),p=a(3146),g=a(317),m=a(1672),v=a(4848),x=a(892)["document"],u=a(892)["window"],f=a(892)["requestAnimationFrame"];const y=(0,n.I4)(o.Ss)`
  min-height: 100vh;
  background-color: var(--color-background);
  padding-bottom: 98px; /* Space for tab bar */
`,b=(0,n.I4)(o.Ss)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-backgroundAlt);
  position: sticky;
  top: 0;
  z-index: 10;
`,w=(0,n.I4)(o.Ss)`
  padding: var(--spacing-md) var(--spacing-lg);
`,j=(0,n.I4)(o.Ss)`
  margin-bottom: var(--spacing-lg);
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-md);
    
    .section-title {
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-medium);
      color: var(--color-textPrimary);
    }
    
    .clear-button {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
    }
  }
  
  .history-tags {
    display: flex;
    flex-wrap: wrap;
    
    .history-tag {
      margin-right: var(--spacing-sm);
      margin-bottom: var(--spacing-sm);
      padding: var(--spacing-xs) var(--spacing-md);
      background-color: var(--color-backgroundAlt);
      border-radius: var(--radius-lg);
      font-size: var(--font-size-sm);
      color: var(--color-textPrimary);
      border: 1px solid var(--color-border);
    }
  }
`,z=(0,n.I4)(o.Ss)`
  margin-bottom: var(--spacing-lg);
  
  .section-header {
    margin-bottom: var(--spacing-md);
    
    .section-title {
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-medium);
      color: var(--color-textPrimary);
    }
  }
  
  .popular-tags {
    display: flex;
    flex-wrap: wrap;
    
    .popular-tag {
      margin-right: var(--spacing-sm);
      margin-bottom: var(--spacing-sm);
      padding: var(--spacing-xs) var(--spacing-md);
      background-color: var(--color-backgroundDark);
      border-radius: var(--radius-lg);
      font-size: var(--font-size-sm);
      color: var(--color-accent1);
      
      &:nth-child(2n) {
        color: var(--color-accent2);
      }
      
      &:nth-child(3n) {
        color: var(--color-accent3);
      }
    }
  }
`,S=(0,n.I4)(o.Ss)`
  .results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-md);
    
    .results-title {
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-medium);
      color: var(--color-textPrimary);
    }
    
    .results-count {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
    }
  }
  
  .filter-bar {
    display: flex;
    margin-bottom: var(--spacing-md);
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: var(--spacing-xs);
    
    .filter-option {
      padding: var(--spacing-xs) var(--spacing-md);
      margin-right: var(--spacing-sm);
      border-radius: var(--radius-lg);
      font-size: var(--font-size-sm);
      
      &.active {
        background-color: var(--color-primary);
        color: var(--color-textInverse);
      }
      
      &:not(.active) {
        background-color: var(--color-backgroundAlt);
        color: var(--color-textPrimary);
      }
    }
  }
`,k=(0,n.I4)(o.Ss)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl) 0;
  
  .empty-icon {
    width: 80px;
    height: 80px;
    margin-bottom: var(--spacing-md);
    opacity: 0.5;
  }
  
  .empty-text {
    font-size: var(--font-size-md);
    color: var(--color-textSecondary);
    margin-bottom: var(--spacing-lg);
  }
`,E=["\u666e\u6d31\u8336","\u677e\u8338","\u91ce\u751f\u83cc","\u6ec7\u7ea2\u8336","\u4e91\u5357\u5496\u5561","\u575a\u679c","\u8702\u871c","\u624b\u5de5\u827a\u54c1","\u6c11\u65cf\u670d\u9970","\u94f6\u9970"],N=(0,c.PA)((()=>{const t=(0,l.Ke)(),[s,a]=((0,l.j_)(),(0,i.useState)("")),[e,r]=(0,i.useState)(!1),[n,c]=(0,i.useState)("popularity"),x=t=>{a(t)},u=async()=>{s.trim()&&(await t.searchProducts(s),r(!0))},f=async s=>{a(s),await t.searchProducts(s),r(!0)},N=async s=>{a(s),await t.searchProducts(s),r(!0)},A=()=>{t.clearSearchHistory()},Y=s=>{c(s),t.setSortBy(s)},C=t.searchResults.map((s=>t.getProduct(s))).filter(Boolean);return(0,v.jsxs)(y,{children:[(0,v.jsx)(b,{children:(0,v.jsx)(h.I,{value:s,onChange:x,onSearch:u,placeholder:"\u641c\u7d22\u4e91\u5357\u7279\u4ea7...",showVoice:!0,autoFocus:!0})}),e?(0,v.jsx)(w,{children:(0,v.jsxs)(S,{children:[(0,v.jsxs)(o.Ss,{className:"results-header",children:[(0,v.jsx)(o.EY,{className:"results-title",children:"\u641c\u7d22\u7ed3\u679c"}),(0,v.jsxs)(o.EY,{className:"results-count",children:["\u627e\u5230 ",C.length," \u4e2a\u5546\u54c1"]})]}),(0,v.jsxs)(o.BM,{className:"filter-bar",scrollX:!0,children:[(0,v.jsx)(o.EY,{className:"filter-option "+("popularity"===n?"active":""),onClick:()=>Y("popularity"),children:"\u70ed\u95e8"}),(0,v.jsx)(o.EY,{className:"filter-option "+("newest"===n?"active":""),onClick:()=>Y("newest"),children:"\u6700\u65b0"}),(0,v.jsx)(o.EY,{className:"filter-option "+("price-asc"===n?"active":""),onClick:()=>Y("price-asc"),children:"\u4ef7\u683c\u2191"}),(0,v.jsx)(o.EY,{className:"filter-option "+("price-desc"===n?"active":""),onClick:()=>Y("price-desc"),children:"\u4ef7\u683c\u2193"})]}),t.isSearching?(0,v.jsx)(p.R,{size:"lg",text:"\u641c\u7d22\u4e2d..."}):C.length>0?(0,v.jsx)(d.q,{products:C,columns:2,spacing:"md"}):(0,v.jsxs)(k,{children:[(0,v.jsx)(o.Ss,{className:"empty-icon",children:"\ud83d\udd0d"}),(0,v.jsxs)(o.EY,{className:"empty-text",children:['\u6ca1\u6709\u627e\u5230\u4e0e"',s,'"\u76f8\u5173\u7684\u5546\u54c1']}),(0,v.jsx)(m.$,{variant:"secondary",size:"md",onClick:()=>r(!1),children:"\u8fd4\u56de\u641c\u7d22"})]})]})}):(0,v.jsxs)(w,{children:[t.searchHistory.length>0&&(0,v.jsxs)(j,{children:[(0,v.jsxs)(o.Ss,{className:"section-header",children:[(0,v.jsx)(o.EY,{className:"section-title",children:"\u641c\u7d22\u5386\u53f2"}),(0,v.jsx)(o.EY,{className:"clear-button",onClick:A,children:"\u6e05\u9664"})]}),(0,v.jsx)(o.Ss,{className:"history-tags",children:t.searchHistory.map(((t,s)=>(0,v.jsx)(o.EY,{className:"history-tag",onClick:()=>f(t),children:t},s)))})]}),(0,v.jsx)(g.c,{}),(0,v.jsxs)(z,{children:[(0,v.jsx)(o.Ss,{className:"section-header",children:(0,v.jsx)(o.EY,{className:"section-title",children:"\u70ed\u95e8\u641c\u7d22"})}),(0,v.jsx)(o.Ss,{className:"popular-tags",children:E.map(((t,s)=>(0,v.jsx)(o.EY,{className:"popular-tag",onClick:()=>N(t),children:t},s)))})]}),(0,v.jsxs)(o.Ss,{style:{height:"200px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden",borderRadius:"var(--radius-lg)",backgroundColor:"var(--color-backgroundDark)",marginTop:"var(--spacing-xl)"},children:[(0,v.jsx)("canvas",{id:"search-particles",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),(0,v.jsx)(o.EY,{style:{fontSize:"var(--font-size-lg)",color:"var(--color-textInverse)",textAlign:"center",position:"relative",zIndex:1,textShadow:"var(--shadow-text)"},children:"\u63a2\u7d22\u4e91\u5357\u539f\u751f\u6001\u7f8e\u98df\u4e0e\u6587\u5316"})]})]})]})}));i.useEffect((()=>{const t=x.getElementById("search-particles");return t&&A(t),()=>{}}),[]);const A=t=>{const s=t.getContext("2d");if(!s)return;const a=()=>{t.width=t.offsetWidth,t.height=t.offsetHeight};a(),u.addEventListener("resize",a);class e{constructor(){(0,r.A)(this,"x",void 0),(0,r.A)(this,"y",void 0),(0,r.A)(this,"size",void 0),(0,r.A)(this,"speedX",void 0),(0,r.A)(this,"speedY",void 0),(0,r.A)(this,"color",void 0),(0,r.A)(this,"alpha",void 0),this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.size=3*Math.random()+1,this.speedX=.5*Math.random()-.25,this.speedY=.5*Math.random()-.25,this.color=i(),this.alpha=.5*Math.random()+.5}update(){this.x+=this.speedX,this.y+=this.speedY,this.size>.2&&(this.size-=.01),this.alpha>0&&(this.alpha-=.005),(this.size<=.2||this.alpha<=0)&&(this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.size=3*Math.random()+1,this.alpha=.5*Math.random()+.5,this.color=i()),this.x<0&&(this.x=t.width),this.x>t.width&&(this.x=0),this.y<0&&(this.y=t.height),this.y>t.height&&(this.y=0)}draw(){s.beginPath(),s.arc(this.x,this.y,this.size,0,2*Math.PI),s.fillStyle=this.color,s.globalAlpha=this.alpha,s.fill();const t=s.createRadialGradient(this.x,this.y,0,this.x,this.y,2*this.size);t.addColorStop(0,this.color),t.addColorStop(1,"transparent"),s.beginPath(),s.arc(this.x,this.y,2*this.size,0,2*Math.PI),s.fillStyle=t,s.globalAlpha=.5*this.alpha,s.fill(),s.globalAlpha=1}}const i=()=>{const t=["#5CE0B8","#3D88F2","#A45EE5","#00E5FF"];return t[Math.floor(Math.random()*t.length)]},o=[];for(let t=0;t<30;t++)o.push(new e);const n=()=>{s.clearRect(0,0,t.width,t.height);for(const t of o)t.update(),t.draw();f(n)};return n(),()=>{u.removeEventListener("resize",a)}};var Y=N,C={},I=(0,e.eU)(Y,"pages/search/index",{root:{cn:[]}},C||{});Y&&Y.behaviors&&(I.behaviors=(I.behaviors||[]).concat(Y.behaviors));Page(I)}},function(t){var s=function(s){return t(t.s=s)};t.O(0,[96,179,76],(function(){return s(9840)}));t.O()}]);