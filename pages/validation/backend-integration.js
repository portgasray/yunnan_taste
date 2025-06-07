"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[81],{2991:function(s,e,t){var a=t(8870),c=t(6540),i=t(118),r=t(7581),n=t(3443),o=t(758),l=t.n(o),d=t(2471),g=t(3),u=t(1672),m=t(317),h=t(4848);const v=(0,r.I4)(i.BM)`
  min-height: 100vh;
  background-color: var(--color-background);
  padding: var(--spacing-lg);
`,f=(0,r.I4)(i.Ss)`
  margin-bottom: var(--spacing-md);
  
  .section-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-textPrimary);
    margin-bottom: var(--spacing-xs);
  }
  
  .section-description {
    font-size: var(--font-size-sm);
    color: var(--color-textSecondary);
  }
`,x=(0,r.I4)(i.Ss)`
  margin-bottom: var(--spacing-xl);
  
  .test-title {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    color: var(--color-textPrimary);
    margin-bottom: var(--spacing-sm);
  }
  
  .test-description {
    font-size: var(--font-size-sm);
    color: var(--color-textSecondary);
    margin-bottom: var(--spacing-md);
  }
  
  .test-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
  }
  
  .test-result {
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    margin-top: var(--spacing-sm);
    
    &.success {
      background-color: rgba(92, 224, 184, 0.1);
      color: var(--color-accent1);
      border: 1px solid var(--color-accent1);
    }
    
    &.error {
      background-color: rgba(255, 76, 76, 0.1);
      color: #ff4c4c;
      border: 1px solid #ff4c4c;
    }
    
    &.info {
      background-color: rgba(61, 136, 242, 0.1);
      color: var(--color-accent2);
      border: 1px solid var(--color-accent2);
    }
  }
`,p=(0,r.I4)(i.Ss)`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-xs);
  
  .result-icon {
    margin-right: var(--spacing-xs);
    font-size: var(--font-size-md);
  }
  
  .result-text {
    font-size: var(--font-size-sm);
  }
`,j=(0,r.I4)(i.Ss)`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  
  .env-button {
    flex: 1;
    padding: var(--spacing-sm);
    border-radius: var(--radius-md);
    text-align: center;
    font-size: var(--font-size-sm);
    
    &.active {
      background-color: var(--color-primary);
      color: var(--color-textInverse);
    }
    
    &.inactive {
      background-color: var(--color-backgroundAlt);
      color: var(--color-textSecondary);
    }
  }
`,y=(0,n.PA)((()=>{const s=(0,d.Ke)(),e=(0,d.kH)(),t=(0,d.x3)(),a=(0,d.j_)(),[r,n]=(0,c.useState)([]),[o,y]=(0,c.useState)([]),[P,w]=(0,c.useState)([]),[b,N]=(0,c.useState)([]),[I,S]=(0,c.useState)(!1),[k,E]=(0,c.useState)(!1),[z,A]=(0,c.useState)(!1),[Y,$]=(0,c.useState)(!1),O=(0,g.Lr)(),C=s=>{(0,g.kN)(s),a.setEnvironment(s)},H=async()=>{S(!0),n([]);try{await s.fetchFeaturedProducts(),n((e=>[...e,{success:s.featuredProducts.length>0,message:`\u6210\u529f\u83b7\u53d6\u7cbe\u9009\u5546\u54c1: ${s.featuredProducts.length}\u4e2a`}])),await s.fetchNewProducts(),n((e=>[...e,{success:s.newProducts.length>0,message:`\u6210\u529f\u83b7\u53d6\u65b0\u54c1: ${s.newProducts.length}\u4e2a`}])),await s.fetchCategories();const e=Object.keys(s.categories).length;if(n((s=>[...s,{success:e>0,message:`\u6210\u529f\u83b7\u53d6\u5206\u7c7b: ${e}\u4e2a`}])),s.featuredProducts.length>0){const e=s.featuredProducts[0],t=await s.fetchProduct(e);n((s=>[...s,{success:!!t,message:t?`\u6210\u529f\u83b7\u53d6\u5546\u54c1\u8be6\u60c5: ${t.title}`:"\u83b7\u53d6\u5546\u54c1\u8be6\u60c5\u5931\u8d25"}]))}if(await s.searchProducts("\u8336"),n((e=>[...e,{success:s.searchResults.length>0,message:`\u6210\u529f\u641c\u7d22\u5546\u54c1: ${s.searchResults.length}\u4e2a\u7ed3\u679c`}])),Object.keys(s.categories).length>0){const e=Object.keys(s.categories)[0];await s.filterProducts({categoryId:e}),n((e=>[...e,{success:s.filteredProducts.length>0,message:`\u6210\u529f\u7b5b\u9009\u5206\u7c7b\u5546\u54c1: ${s.filteredProducts.length}\u4e2a\u7ed3\u679c`}]))}}catch(s){n((e=>[...e,{success:!1,message:`\u6d4b\u8bd5\u4ea7\u54c1API\u5931\u8d25: ${s.message}`}]))}finally{S(!1)}},T=async()=>{E(!0),y([]);try{const t=await e.login("test_user","password123");if(y((s=>[...s,{success:t,message:t?"\u6210\u529f\u767b\u5f55\u6d4b\u8bd5\u8d26\u6237":"\u767b\u5f55\u6d4b\u8bd5\u8d26\u6237\u5931\u8d25"}])),t){if(await e.fetchProfile(),y((s=>[...s,{success:!!e.profile,message:e.profile?`\u6210\u529f\u83b7\u53d6\u7528\u6237\u8d44\u6599: ${e.profile.nickname}`:"\u83b7\u53d6\u7528\u6237\u8d44\u6599\u5931\u8d25"}])),await e.fetchAddresses(),y((s=>[...s,{success:e.addresses.length>0,message:`\u6210\u529f\u83b7\u53d6\u5730\u5740: ${e.addresses.length}\u4e2a`}])),s.featuredProducts.length>0){const t=s.featuredProducts[0],a=[...e.favorites];e.toggleFavorite(t);const c=!a.includes(t)&&e.favorites.includes(t);a.includes(t)&&e.favorites.includes(t);y((s=>[...s,{success:!0,message:c?"\u6210\u529f\u6dfb\u52a0\u5546\u54c1\u5230\u6536\u85cf":"\u6210\u529f\u4ece\u6536\u85cf\u4e2d\u79fb\u9664\u5546\u54c1"}]))}if(s.featuredProducts.length>0){const t=s.featuredProducts[0];e.viewHistory;e.addToViewHistory(t),y((s=>[...s,{success:e.viewHistory.includes(t),message:e.viewHistory.includes(t)?"\u6210\u529f\u6dfb\u52a0\u5546\u54c1\u5230\u6d4f\u89c8\u5386\u53f2":"\u6dfb\u52a0\u5546\u54c1\u5230\u6d4f\u89c8\u5386\u53f2\u5931\u8d25"}]))}await e.logout(),y((s=>[...s,{success:!e.isAuthenticated,message:e.isAuthenticated?"\u9000\u51fa\u767b\u5f55\u5931\u8d25":"\u6210\u529f\u9000\u51fa\u767b\u5f55"}]))}}catch(s){y((e=>[...e,{success:!1,message:`\u6d4b\u8bd5\u7528\u6237API\u5931\u8d25: ${s.message}`}]))}finally{E(!1)}},L=async()=>{A(!0),w([]);try{const a=await e.login("test_user","password123");if(!a)return w((s=>[...s,{success:!1,message:"\u767b\u5f55\u5931\u8d25\uff0c\u65e0\u6cd5\u6d4b\u8bd5\u8d2d\u7269\u8f66API"}])),void A(!1);if(await t.fetchCart(),w((s=>[...s,{success:!0,message:`\u6210\u529f\u83b7\u53d6\u8d2d\u7269\u8f66: ${t.items.length}\u4e2a\u5546\u54c1`}])),s.featuredProducts.length>0){const e=s.featuredProducts[0],a=t.items.length;if(await t.addItem(e,1,{}),w((s=>[...s,{success:t.items.length>a,message:t.items.length>a?"\u6210\u529f\u6dfb\u52a0\u5546\u54c1\u5230\u8d2d\u7269\u8f66":"\u6dfb\u52a0\u5546\u54c1\u5230\u8d2d\u7269\u8f66\u5931\u8d25"}])),t.items.length>0){const s=t.items[0].id,e=t.items[0].quantity;await t.updateItemQuantity(s,e+1);const a=t.items.find((e=>e.id===s));w((s=>[...s,{success:a&&a.quantity===e+1,message:a&&a.quantity===e+1?"\u6210\u529f\u66f4\u65b0\u8d2d\u7269\u8f66\u5546\u54c1\u6570\u91cf":"\u66f4\u65b0\u8d2d\u7269\u8f66\u5546\u54c1\u6570\u91cf\u5931\u8d25"}]))}if(t.items.length>0){const s=t.items[0].id,e=t.items.length;await t.removeItem(s),w((s=>[...s,{success:t.items.length<e,message:t.items.length<e?"\u6210\u529f\u4ece\u8d2d\u7269\u8f66\u79fb\u9664\u5546\u54c1":"\u4ece\u8d2d\u7269\u8f66\u79fb\u9664\u5546\u54c1\u5931\u8d25"}]))}await t.clearCart(),w((s=>[...s,{success:0===t.items.length,message:0===t.items.length?"\u6210\u529f\u6e05\u7a7a\u8d2d\u7269\u8f66":"\u6e05\u7a7a\u8d2d\u7269\u8f66\u5931\u8d25"}]))}await e.logout()}catch(s){w((e=>[...e,{success:!1,message:`\u6d4b\u8bd5\u8d2d\u7269\u8f66API\u5931\u8d25: ${s.message}`}]))}finally{A(!1)}},D=async()=>{$(!0),N([]);try{N((s=>[...s,{success:!0,message:"\u6d4b\u8bd5\u7f51\u7edc\u9519\u8bef\u5904\u7406..."}]));try{await s.fetchProduct("non-existent-id")}catch(s){}if(N((s=>[...s,{success:!0,message:"\u6d4b\u8bd5\u8ba4\u8bc1\u9519\u8bef\u5904\u7406..."}])),!e.isAuthenticated)try{await t.checkout("address-id","wechat")}catch(s){}N((s=>[...s,{success:!0,message:"\u6d4b\u8bd5\u9a8c\u8bc1\u9519\u8bef\u5904\u7406..."}]));try{if(s.featuredProducts.length>0){s.featuredProducts[0];await t.updateItemQuantity("some-id",-1)}}catch(s){}N((s=>[...s,{success:!0,message:"\u6d4b\u8bd5\u52a0\u8f7d\u72b6\u6001\u7ba1\u7406..."}])),N((a=>[...a,{success:!s.isLoadingProduct&&!e.isLoadingProfile&&!t.isLoadingCart,message:s.isLoadingProduct||e.isLoadingProfile||t.isLoadingCart?"\u52a0\u8f7d\u72b6\u6001\u672a\u6b63\u786e\u91cd\u7f6e":"\u52a0\u8f7d\u72b6\u6001\u6b63\u786e\u91cd\u7f6e"}])),a.showToast("\u8fd9\u662f\u4e00\u6761\u6d4b\u8bd5\u6d88\u606f","info"),N((s=>[...s,{success:!0,message:"\u6210\u529f\u663e\u793aToast\u901a\u77e5"}]))}catch(s){N((e=>[...e,{success:!1,message:`\u6d4b\u8bd5\u9519\u8bef\u5904\u7406\u5931\u8d25: ${s.message}`}]))}finally{$(!1)}},G=async()=>{await H(),await T(),await L(),await D()};return(0,h.jsxs)(v,{scrollY:!0,children:[(0,h.jsxs)(f,{children:[(0,h.jsx)(i.EY,{className:"section-title",children:"\u540e\u7aef\u96c6\u6210\u9a8c\u8bc1"}),(0,h.jsx)(i.EY,{className:"section-description",children:"\u6d4b\u8bd5API\u96c6\u6210\u3001\u6570\u636e\u6d41\u548c\u9519\u8bef\u5904\u7406"})]}),(0,h.jsxs)(j,{children:[(0,h.jsx)(i.Ss,{className:"env-button "+(O===g.OH.DEVELOPMENT?"active":"inactive"),onClick:()=>C(g.OH.DEVELOPMENT),children:"\u5f00\u53d1\u73af\u5883"}),(0,h.jsx)(i.Ss,{className:"env-button "+(O===g.OH.STAGING?"active":"inactive"),onClick:()=>C(g.OH.STAGING),children:"\u6d4b\u8bd5\u73af\u5883"}),(0,h.jsx)(i.Ss,{className:"env-button "+(O===g.OH.PRODUCTION?"active":"inactive"),onClick:()=>C(g.OH.PRODUCTION),children:"\u751f\u4ea7\u73af\u5883"})]}),(0,h.jsx)(u.$,{variant:"primary",size:"lg",glow:!0,onClick:G,style:{marginBottom:"var(--spacing-lg)"},children:"\u8fd0\u884c\u6240\u6709\u6d4b\u8bd5"}),(0,h.jsx)(m.c,{}),(0,h.jsxs)(x,{children:[(0,h.jsx)(i.EY,{className:"test-title",children:"\u5546\u54c1API\u6d4b\u8bd5"}),(0,h.jsx)(i.EY,{className:"test-description",children:"\u9a8c\u8bc1\u5546\u54c1\u3001\u5206\u7c7b\u3001\u641c\u7d22\u548c\u7b5b\u9009API"}),(0,h.jsx)(i.Ss,{className:"test-actions",children:(0,h.jsx)(u.$,{variant:"secondary",size:"md",onClick:H,loading:I,children:"\u6d4b\u8bd5\u5546\u54c1API"})}),r.length>0&&(0,h.jsx)(i.Ss,{className:"test-result "+(r.every((s=>s.success))?"success":"error"),children:r.map(((s,e)=>(0,h.jsxs)(p,{children:[(0,h.jsx)(i.EY,{className:"result-icon",children:s.success?"\u2713":"\u2717"}),(0,h.jsx)(i.EY,{className:"result-text",children:s.message})]},e)))})]}),(0,h.jsxs)(x,{children:[(0,h.jsx)(i.EY,{className:"test-title",children:"\u7528\u6237API\u6d4b\u8bd5"}),(0,h.jsx)(i.EY,{className:"test-description",children:"\u9a8c\u8bc1\u7528\u6237\u8ba4\u8bc1\u3001\u8d44\u6599\u548c\u6536\u85cfAPI"}),(0,h.jsx)(i.Ss,{className:"test-actions",children:(0,h.jsx)(u.$,{variant:"secondary",size:"md",onClick:T,loading:k,children:"\u6d4b\u8bd5\u7528\u6237API"})}),o.length>0&&(0,h.jsx)(i.Ss,{className:"test-result "+(o.every((s=>s.success))?"success":"error"),children:o.map(((s,e)=>(0,h.jsxs)(p,{children:[(0,h.jsx)(i.EY,{className:"result-icon",children:s.success?"\u2713":"\u2717"}),(0,h.jsx)(i.EY,{className:"result-text",children:s.message})]},e)))})]}),(0,h.jsxs)(x,{children:[(0,h.jsx)(i.EY,{className:"test-title",children:"\u8d2d\u7269\u8f66API\u6d4b\u8bd5"}),(0,h.jsx)(i.EY,{className:"test-description",children:"\u9a8c\u8bc1\u8d2d\u7269\u8f66\u64cd\u4f5c\u548c\u7ed3\u7b97API"}),(0,h.jsx)(i.Ss,{className:"test-actions",children:(0,h.jsx)(u.$,{variant:"secondary",size:"md",onClick:L,loading:z,children:"\u6d4b\u8bd5\u8d2d\u7269\u8f66API"})}),P.length>0&&(0,h.jsx)(i.Ss,{className:"test-result "+(P.every((s=>s.success))?"success":"error"),children:P.map(((s,e)=>(0,h.jsxs)(p,{children:[(0,h.jsx)(i.EY,{className:"result-icon",children:s.success?"\u2713":"\u2717"}),(0,h.jsx)(i.EY,{className:"result-text",children:s.message})]},e)))})]}),(0,h.jsxs)(x,{children:[(0,h.jsx)(i.EY,{className:"test-title",children:"\u9519\u8bef\u5904\u7406\u6d4b\u8bd5"}),(0,h.jsx)(i.EY,{className:"test-description",children:"\u9a8c\u8bc1\u9519\u8bef\u5904\u7406\u3001\u52a0\u8f7d\u72b6\u6001\u548c\u901a\u77e5"}),(0,h.jsx)(i.Ss,{className:"test-actions",children:(0,h.jsx)(u.$,{variant:"secondary",size:"md",onClick:D,loading:Y,children:"\u6d4b\u8bd5\u9519\u8bef\u5904\u7406"})}),b.length>0&&(0,h.jsx)(i.Ss,{className:"test-result "+(b.every((s=>s.success))?"success":"error"),children:b.map(((s,e)=>(0,h.jsxs)(p,{children:[(0,h.jsx)(i.EY,{className:"result-icon",children:s.success?"\u2713":"\u2717"}),(0,h.jsx)(i.EY,{className:"result-text",children:s.message})]},e)))})]}),(0,h.jsx)(m.c,{}),(0,h.jsx)(i.Ss,{style:{marginTop:"var(--spacing-lg)"},children:(0,h.jsx)(u.$,{variant:"secondary",size:"md",onClick:()=>l().navigateBack(),children:"\u8fd4\u56de"})})]})}));var P=y,w={},b=(0,a.eU)(P,"pages/validation/backend-integration",{root:{cn:[]}},w||{});P&&P.behaviors&&(b.behaviors=(b.behaviors||[]).concat(P.behaviors));Page(b)}},function(s){var e=function(e){return s(s.s=e)};s.O(0,[96,179,76],(function(){return e(2991)}));s.O()}]);