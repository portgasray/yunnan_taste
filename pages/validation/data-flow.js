"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[269],{3365:function(s,e,t){var a=t(8870),r=t(6540),c=t(118),o=t(7581),i=t(3443),n=t(2471),l=t(4848);const d=(0,o.I4)(c.Ss)`
  padding: var(--spacing-lg);
  background-color: var(--color-background);
  
  .validation-section {
    margin-bottom: var(--spacing-xl);
    
    .section-title {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-textPrimary);
      margin-bottom: var(--spacing-md);
      padding-bottom: var(--spacing-xs);
      border-bottom: 1px solid var(--color-border);
    }
    
    .section-description {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
      margin-bottom: var(--spacing-md);
    }
    
    .test-container {
      margin-bottom: var(--spacing-lg);
      padding: var(--spacing-md);
      border-radius: var(--radius-md);
      background-color: var(--color-backgroundAlt);
      
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
        margin-top: var(--spacing-md);
        padding: var(--spacing-md);
        border-radius: var(--radius-sm);
        background-color: var(--color-backgroundDark);
        font-family: monospace;
        font-size: var(--font-size-sm);
        white-space: pre-wrap;
        overflow-x: auto;
        
        &.success {
          border-left: 4px solid var(--color-success);
        }
        
        &.error {
          border-left: 4px solid var(--color-error);
        }
        
        &.info {
          border-left: 4px solid var(--color-primary);
        }
      }
    }
  }
`,u=(0,i.PA)((()=>{(0,n.Pj)();const s=(0,n.Ke)(),e=(0,n.kH)(),t=(0,n.x3)(),a=(0,n.j_)(),[o,i]=(0,r.useState)({status:"idle",message:"\u672a\u6267\u884c\u6d4b\u8bd5"}),[u,g]=(0,r.useState)({status:"idle",message:"\u672a\u6267\u884c\u6d4b\u8bd5"}),[m,h]=(0,r.useState)({status:"idle",message:"\u672a\u6267\u884c\u6d4b\u8bd5"}),[f,p]=(0,r.useState)({status:"idle",message:"\u672a\u6267\u884c\u6d4b\u8bd5"}),x=async()=>{i({status:"loading",message:"\u6b63\u5728\u6d4b\u8bd5\u4ea7\u54c1\u6570\u636e\u6d41..."});try{if(await s.fetchCategories(),await s.fetchFeaturedProducts(),await s.searchProducts("\u8336"),s.rootCategories.length>0){const e=s.rootCategories[0];s.setCurrentCategory(e),await s.fetchProductsByCategory()}i({status:"success",message:JSON.stringify({categories:Object.keys(s.categories).length,featuredProducts:s.featuredProducts.length,searchResults:s.searchResults.length,filteredProducts:s.filteredProducts.length},null,2)})}catch(s){i({status:"error",message:`\u6d4b\u8bd5\u5931\u8d25: ${s.message}`})}},v=async()=>{g({status:"loading",message:"\u6b63\u5728\u6d4b\u8bd5\u7528\u6237\u6570\u636e\u6d41..."});try{const s=await e.login("test_user","password123");let t=!1;s&&e.profile&&(t=await e.updateProfile({nickname:`\u6d4b\u8bd5\u7528\u6237_${Date.now()}`}));let a=!1;s&&(a=await e.addAddress({name:"\u6d4b\u8bd5\u7528\u6237",phone:"13800138000",province:"\u4e91\u5357\u7701",city:"\u6606\u660e\u5e02",district:"\u4e94\u534e\u533a",address:"\u6d4b\u8bd5\u5730\u5740123\u53f7",isDefault:!0})),e.logout(),g({status:s?"success":"error",message:JSON.stringify({loginSuccess:s,profileUpdateSuccess:t,addressSuccess:a,logoutSuccess:!e.isLoggedIn},null,2)})}catch(s){g({status:"error",message:`\u6d4b\u8bd5\u5931\u8d25: ${s.message}`})}},S=async()=>{h({status:"loading",message:"\u6b63\u5728\u6d4b\u8bd5\u8d2d\u7269\u8f66\u6570\u636e\u6d41..."});try{await t.clearCart();let e=!1;if(s.featuredProducts.length>0){const a=s.featuredProducts[0];e=await t.addItem(a,2)}let a=!1;if(e&&t.items.length>0){const s=t.items[0].id;a=await t.updateItemQuantity(s,3)}let r=!1;if(t.items.length>0){const s=t.items[0].id;r=await t.removeItem(s)}h({status:"success",message:JSON.stringify({addSuccess:e,updateSuccess:a,removeSuccess:r,finalCartItems:t.items.length},null,2)})}catch(s){h({status:"error",message:`\u6d4b\u8bd5\u5931\u8d25: ${s.message}`})}},j=()=>{p({status:"loading",message:"\u6b63\u5728\u6d4b\u8bd5\u4e3b\u9898\u96c6\u6210..."});try{const s=a.currentTheme;a.showToast("\u6d4b\u8bd5\u6d88\u606f","info",2e3);const e={colors:{primary:s.colors.primary,accent1:s.colors.accent1,accent2:s.colors.accent2,background:s.colors.background},typography:{fontSizes:s.typography.fontSizes,fontWeights:s.typography.fontWeights},spacing:s.spacing,effects:{glow:s.effects.glow}};p({status:"success",message:JSON.stringify(e,null,2)})}catch(s){p({status:"error",message:`\u6d4b\u8bd5\u5931\u8d25: ${s.message}`})}};return(0,l.jsxs)(d,{children:[(0,l.jsxs)(c.Ss,{className:"validation-section",children:[(0,l.jsx)(c.EY,{className:"section-title",children:"\u6570\u636e\u6d41\u9a8c\u8bc1"}),(0,l.jsx)(c.EY,{className:"section-description",children:"\u672c\u9875\u9762\u7528\u4e8e\u9a8c\u8bc1\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u7cfb\u7edf\u4e0e\u540e\u7aefAPI\u7684\u96c6\u6210\uff0c\u6d4b\u8bd5\u6570\u636e\u6d41\u7684\u4e00\u81f4\u6027\u548c\u53ef\u9760\u6027\u3002"})]}),(0,l.jsxs)(c.Ss,{className:"validation-section",children:[(0,l.jsx)(c.EY,{className:"section-title",children:"\u4ea7\u54c1\u6570\u636e\u6d41\u6d4b\u8bd5"}),(0,l.jsxs)(c.Ss,{className:"test-container",children:[(0,l.jsx)(c.EY,{className:"test-title",children:"\u4ea7\u54c1\u6570\u636e\u6d41\u6d4b\u8bd5"}),(0,l.jsx)(c.EY,{className:"test-description",children:"\u6d4b\u8bd5\u4ea7\u54c1\u6570\u636e\u7684\u83b7\u53d6\u3001\u641c\u7d22\u548c\u8fc7\u6ee4\u529f\u80fd\uff0c\u9a8c\u8bc1ProductStore\u4e0eAPI\u7684\u96c6\u6210\u3002"}),(0,l.jsx)(c.Ss,{className:"test-actions",children:(0,l.jsx)(c.$n,{onClick:x,disabled:"loading"===o.status,children:"\u6267\u884c\u6d4b\u8bd5"})}),(0,l.jsx)(c.Ss,{className:"test-result "+("success"===o.status?"success":"error"===o.status?"error":"info"),children:o.message})]})]}),(0,l.jsxs)(c.Ss,{className:"validation-section",children:[(0,l.jsx)(c.EY,{className:"section-title",children:"\u7528\u6237\u6570\u636e\u6d41\u6d4b\u8bd5"}),(0,l.jsxs)(c.Ss,{className:"test-container",children:[(0,l.jsx)(c.EY,{className:"test-title",children:"\u7528\u6237\u6570\u636e\u6d41\u6d4b\u8bd5"}),(0,l.jsx)(c.EY,{className:"test-description",children:"\u6d4b\u8bd5\u7528\u6237\u767b\u5f55\u3001\u8d44\u6599\u66f4\u65b0\u548c\u5730\u5740\u7ba1\u7406\u529f\u80fd\uff0c\u9a8c\u8bc1UserStore\u4e0eAPI\u7684\u96c6\u6210\u3002"}),(0,l.jsx)(c.Ss,{className:"test-actions",children:(0,l.jsx)(c.$n,{onClick:v,disabled:"loading"===u.status,children:"\u6267\u884c\u6d4b\u8bd5"})}),(0,l.jsx)(c.Ss,{className:"test-result "+("success"===u.status?"success":"error"===u.status?"error":"info"),children:u.message})]})]}),(0,l.jsxs)(c.Ss,{className:"validation-section",children:[(0,l.jsx)(c.EY,{className:"section-title",children:"\u8d2d\u7269\u8f66\u6570\u636e\u6d41\u6d4b\u8bd5"}),(0,l.jsxs)(c.Ss,{className:"test-container",children:[(0,l.jsx)(c.EY,{className:"test-title",children:"\u8d2d\u7269\u8f66\u6570\u636e\u6d41\u6d4b\u8bd5"}),(0,l.jsx)(c.EY,{className:"test-description",children:"\u6d4b\u8bd5\u8d2d\u7269\u8f66\u7684\u6dfb\u52a0\u3001\u66f4\u65b0\u548c\u5220\u9664\u529f\u80fd\uff0c\u9a8c\u8bc1CartStore\u4e0eAPI\u7684\u96c6\u6210\u3002"}),(0,l.jsx)(c.Ss,{className:"test-actions",children:(0,l.jsx)(c.$n,{onClick:S,disabled:"loading"===m.status,children:"\u6267\u884c\u6d4b\u8bd5"})}),(0,l.jsx)(c.Ss,{className:"test-result "+("success"===m.status?"success":"error"===m.status?"error":"info"),children:m.message})]})]}),(0,l.jsxs)(c.Ss,{className:"validation-section",children:[(0,l.jsx)(c.EY,{className:"section-title",children:"\u4e3b\u9898\u96c6\u6210\u6d4b\u8bd5"}),(0,l.jsxs)(c.Ss,{className:"test-container",children:[(0,l.jsx)(c.EY,{className:"test-title",children:"\u4e3b\u9898\u96c6\u6210\u6d4b\u8bd5"}),(0,l.jsx)(c.EY,{className:"test-description",children:"\u6d4b\u8bd5\u751f\u7269\u53d1\u5149\u68ee\u6797\u4e3b\u9898\u4e0e\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u7cfb\u7edf\u7684\u96c6\u6210\u3002"}),(0,l.jsx)(c.Ss,{className:"test-actions",children:(0,l.jsx)(c.$n,{onClick:j,disabled:"loading"===f.status,children:"\u6267\u884c\u6d4b\u8bd5"})}),(0,l.jsx)(c.Ss,{className:"test-result "+("success"===f.status?"success":"error"===f.status?"error":"info"),children:f.message})]})]})]})}));var g=u,m={},h=(0,a.eU)(g,"pages/validation/data-flow",{root:{cn:[]}},m||{});g&&g.behaviors&&(h.behaviors=(h.behaviors||[]).concat(g.behaviors));Page(h)}},function(s){var e=function(e){return s(s.s=e)};s.O(0,[96,179,76],(function(){return e(3365)}));s.O()}]);