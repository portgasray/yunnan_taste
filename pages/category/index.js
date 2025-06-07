"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[545],{7017:function(e,r,t){var a=t(8870),s=t(6540),o=t(118),i=t(7581),n=t(3443),c=t(758),l=t.n(c),d=t(2471),g=t(1672),p=t(8119),x=t(6661),h=t(4848);const v=(0,i.I4)(o.Ss)`
  min-height: 100vh;
  background-color: var(--color-background);
  padding-bottom: 98px; /* Space for tab bar */
`,m=(0,i.I4)(o.Ss)`
  position: relative;
  height: ${e=>e.hasImage?"200px":"120px"};
  width: 100%;
  overflow: hidden;
  
  .category-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .category-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.hasImage?"linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7))":"var(--color-backgroundDark)"};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: var(--spacing-xl);
  }
  
  .category-title {
    color: var(--color-textInverse);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-xs);
    text-shadow: var(--shadow-text);
  }
  
  .category-description {
    color: var(--color-textInverse);
    font-size: var(--font-size-sm);
    opacity: 0.9;
    text-shadow: var(--shadow-text);
  }
  
  .back-button {
    position: absolute;
    top: var(--spacing-md);
    left: var(--spacing-md);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  
  .back-icon {
    width: 20px;
    height: 20px;
  }
`,b=(0,i.I4)(o.BM)`
  white-space: nowrap;
  background-color: var(--color-backgroundAlt);
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border);
`,u=(0,i.I4)(o.Ss)`
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-md);
  margin: 0 var(--spacing-xs);
  border-radius: var(--radius-lg);
  background-color: ${e=>e.active?"var(--color-primary)":"transparent"};
  
  .subcategory-text {
    color: ${e=>e.active?"var(--color-textInverse)":"var(--color-textPrimary)"};
    font-size: var(--font-size-sm);
  }
  
  &:first-child {
    margin-left: var(--spacing-md);
  }
  
  &:last-child {
    margin-right: var(--spacing-md);
  }
`,f=(0,i.I4)(o.Ss)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-backgroundAlt);
  
  .filter-button, .sort-button {
    display: flex;
    align-items: center;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
    background-color: var(--color-backgroundDark);
    
    .button-icon {
      width: 16px;
      height: 16px;
      margin-right: var(--spacing-xs);
    }
    
    .button-text {
      font-size: var(--font-size-sm);
      color: var(--color-textPrimary);
    }
  }
  
  .sort-options {
    display: flex;
    
    .sort-option {
      padding: var(--spacing-xs) var(--spacing-sm);
      margin-left: var(--spacing-xs);
      border-radius: var(--radius-sm);
      font-size: var(--font-size-sm);
      
      &.active {
        background-color: var(--color-backgroundDark);
        color: var(--color-accent1);
      }
      
      &:not(.active) {
        color: var(--color-textSecondary);
      }
    }
  }
`,y=(0,i.I4)(o.Ss)`
  padding: var(--spacing-md);
`,j=(0,i.I4)(o.Ss)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  background-color: var(--color-backgroundAlt);
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transform: translateX(${e=>e.visible?"0":"100%"});
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  
  .drawer-header {
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .header-title {
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-medium);
      color: var(--color-textPrimary);
    }
    
    .close-button {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  
  .drawer-content {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-md);
  }
  
  .drawer-footer {
    padding: var(--spacing-md);
    border-top: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
  }
`,k=(0,i.I4)(o.Ss)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${e=>e.visible?1:0};
  visibility: ${e=>e.visible?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`,w=(0,n.PA)((()=>{const e=(0,c.useRouter)(),r=(0,d.Ke)(),[t,a]=((0,d.j_)(),(0,s.useState)(null)),[i,n]=(0,s.useState)(null),[w,S]=(0,s.useState)(!1),[N,C]=(0,s.useState)("popularity");(0,s.useEffect)((()=>{const{id:t}=e.params;t&&(a(t),r.setCurrentCategory(t)),0===Object.keys(r.categories).length&&r.fetchCategories()}),[e.params]);const z=t?r.getCategory(t):null,I=t?r.getChildCategories(t):[],E=e=>{n(e),r.setCurrentCategory(e||t)},Y=e=>{C(e),r.setSortBy(e)},P=()=>{S(!w)},$=e=>{r.setFilters(e),S(!1)},A=()=>{r.setFilters({})},M=()=>{l().navigateBack()},_=()=>{r.loadMoreProducts()};return(0,h.jsxs)(v,{children:[(0,h.jsxs)(m,{hasImage:!!z?.image,children:[z?.image&&(0,h.jsx)(o._V,{className:"category-image",src:z.image,mode:"aspectFill"}),(0,h.jsxs)(o.Ss,{className:"category-overlay",children:[(0,h.jsx)(o.EY,{className:"category-title",children:z?.title||"\u5206\u7c7b\u6d4f\u89c8"}),z?.description&&(0,h.jsx)(o.EY,{className:"category-description",children:z.description})]}),(0,h.jsx)(o.Ss,{className:"back-button",onClick:M,children:(0,h.jsx)(o._V,{className:"back-icon",src:"/assets/icons/back.png"})})]}),I.length>0&&(0,h.jsxs)(b,{scrollX:!0,scrollWithAnimation:!0,children:[(0,h.jsx)(u,{active:null===i,onClick:()=>E(null),children:(0,h.jsx)(o.EY,{className:"subcategory-text",children:"\u5168\u90e8"})}),I.map((e=>(0,h.jsx)(u,{active:i===e.id,onClick:()=>E(e.id),children:(0,h.jsx)(o.EY,{className:"subcategory-text",children:e.title})},e.id)))]}),(0,h.jsxs)(f,{children:[(0,h.jsxs)(o.Ss,{className:"filter-button",onClick:P,children:[(0,h.jsx)(o._V,{className:"button-icon",src:"/assets/icons/filter.png"}),(0,h.jsx)(o.EY,{className:"button-text",children:"\u7b5b\u9009"})]}),(0,h.jsxs)(o.Ss,{className:"sort-options",children:[(0,h.jsx)(o.EY,{className:"sort-option "+("popularity"===N?"active":""),onClick:()=>Y("popularity"),children:"\u70ed\u95e8"}),(0,h.jsx)(o.EY,{className:"sort-option "+("newest"===N?"active":""),onClick:()=>Y("newest"),children:"\u6700\u65b0"}),(0,h.jsx)(o.EY,{className:"sort-option "+("price-asc"===N?"active":""),onClick:()=>Y("price-asc"),children:"\u4ef7\u683c\u2191"}),(0,h.jsx)(o.EY,{className:"sort-option "+("price-desc"===N?"active":""),onClick:()=>Y("price-desc"),children:"\u4ef7\u683c\u2193"})]})]}),(0,h.jsx)(y,{children:(0,h.jsx)(p.q,{products:r.filteredProducts,loading:r.isLoadingProducts,columns:2,onLoadMore:_,hasMore:r.hasMoreProducts})}),(0,h.jsxs)(j,{visible:w,children:[(0,h.jsxs)(o.Ss,{className:"drawer-header",children:[(0,h.jsx)(o.EY,{className:"header-title",children:"\u7b5b\u9009"}),(0,h.jsx)(o.Ss,{className:"close-button",onClick:P,children:(0,h.jsx)(o._V,{src:"/assets/icons/close.png",style:"width: 16px; height: 16px;"})})]}),(0,h.jsx)(o.Ss,{className:"drawer-content",children:(0,h.jsx)(x.m,{filters:r.currentFilters,onApply:$,onReset:A})}),(0,h.jsxs)(o.Ss,{className:"drawer-footer",children:[(0,h.jsx)(g.$,{variant:"secondary",size:"md",onClick:A,children:"\u91cd\u7f6e"}),(0,h.jsx)(g.$,{variant:"primary",size:"md",onClick:()=>S(!1),children:"\u786e\u5b9a"})]})]}),(0,h.jsx)(k,{visible:w,onClick:P})]})}));var S=w,N={},C=(0,a.eU)(S,"pages/category/index",{root:{cn:[]}},N||{});S&&S.behaviors&&(C.behaviors=(C.behaviors||[]).concat(S.behaviors));Page(C)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[96,179,76],(function(){return r(7017)}));e.O()}]);