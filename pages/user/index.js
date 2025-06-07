"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[648],{3137:function(e,s,a){var i=a(8870),t=a(6540),r=a(118),n=a(7581),o=a(3443),c=a(758),l=a.n(c),m=a(2471),d=a(1672),g=a(317),p=a(9217),x=a(4848);const h=(0,n.I4)(r.BM)`
  min-height: 100vh;
  background-color: var(--color-background);
  padding-bottom: 98px; /* Space for tab bar */
`,v=(0,n.I4)(r.Ss)`
  position: relative;
  padding: var(--spacing-xl) var(--spacing-lg);
  background: linear-gradient(to bottom, var(--color-backgroundDark), var(--color-background));
  display: flex;
  align-items: center;
  
  .avatar-container {
    position: relative;
    margin-right: var(--spacing-lg);
    
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px solid var(--color-accent1);
      box-shadow: 0 0 10px var(--color-accent1);
    }
    
    .glow-effect {
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border-radius: 50%;
      background: radial-gradient(
        circle,
        var(--color-accent1) 0%,
        transparent 70%
      );
      opacity: 0.3;
      filter: blur(8px);
      z-index: 0;
    }
  }
  
  .user-info {
    flex: 1;
    
    .username {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-textPrimary);
      margin-bottom: var(--spacing-xs);
    }
    
    .member-info {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
      margin-bottom: var(--spacing-xs);
    }
    
    .points-container {
      display: flex;
      align-items: center;
      
      .points-label {
        font-size: var(--font-size-sm);
        color: var(--color-textSecondary);
        margin-right: var(--spacing-xs);
      }
      
      .points-value {
        font-size: var(--font-size-md);
        color: var(--color-accent1);
        font-weight: var(--font-weight-medium);
      }
    }
  }
  
  .settings-button {
    position: absolute;
    top: var(--spacing-lg);
    right: var(--spacing-lg);
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .settings-icon {
      width: 24px;
      height: 24px;
    }
  }
`,u=(0,n.I4)(r.Ss)`
  padding: var(--spacing-xl) var(--spacing-lg);
  background: linear-gradient(to bottom, var(--color-backgroundDark), var(--color-background));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .login-icon {
    width: 80px;
    height: 80px;
    margin-bottom: var(--spacing-lg);
    opacity: 0.7;
  }
  
  .login-text {
    font-size: var(--font-size-md);
    color: var(--color-textSecondary);
    margin-bottom: var(--spacing-lg);
    text-align: center;
  }
`,j=(0,n.I4)(r.Ss)`
  display: flex;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-backgroundAlt);
  
  .stat-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .stat-value {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-textPrimary);
      margin-bottom: var(--spacing-xs);
    }
    
    .stat-label {
      font-size: var(--font-size-xs);
      color: var(--color-textSecondary);
    }
  }
`,f=(0,n.I4)(r.Ss)`
  padding: var(--spacing-md) var(--spacing-lg);
  
  .section-title {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    color: var(--color-textPrimary);
    margin-bottom: var(--spacing-md);
  }
`,b=(0,n.I4)(r.Ss)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  
  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .menu-icon {
      width: 32px;
      height: 32px;
      margin-bottom: var(--spacing-xs);
    }
    
    .menu-label {
      font-size: var(--font-size-xs);
      color: var(--color-textSecondary);
      text-align: center;
    }
  }
`,N=(0,n.I4)(r.Ss)`
  padding: var(--spacing-md) var(--spacing-lg);
  
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
    
    .view-all {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
    }
  }
`,y=(0,n.I4)(r.Ss)`
  background-color: var(--color-backgroundAlt);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  .order-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing-sm);
    
    .order-id {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
    }
    
    .order-status {
      font-size: var(--font-size-sm);
      color: var(--color-accent1);
      font-weight: var(--font-weight-medium);
    }
  }
  
  .order-items {
    display: flex;
    margin-bottom: var(--spacing-md);
    
    .order-image {
      width: 60px;
      height: 60px;
      border-radius: var(--radius-sm);
      margin-right: var(--spacing-sm);
      object-fit: cover;
    }
    
    .more-items {
      width: 60px;
      height: 60px;
      border-radius: var(--radius-sm);
      background-color: var(--color-backgroundDark);
      display: flex;
      justify-content: center;
      align-items: center;
      
      .more-text {
        font-size: var(--font-size-sm);
        color: var(--color-textSecondary);
      }
    }
  }
  
  .order-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .order-total {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
      
      .total-value {
        font-weight: var(--font-weight-medium);
        color: var(--color-textPrimary);
      }
    }
  }
`,w=(0,n.I4)(r.Ss)`
  padding: var(--spacing-md) var(--spacing-lg);
  
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
    
    .view-all {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
    }
  }
`,S=(0,n.I4)(r.BM)`
  white-space: nowrap;
  
  .product-item {
    display: inline-block;
    width: 140px;
    margin-right: var(--spacing-md);
    vertical-align: top;
  }
`,z=(0,n.I4)(r.Ss)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl) 0;
  
  .empty-icon {
    width: 60px;
    height: 60px;
    margin-bottom: var(--spacing-md);
    opacity: 0.5;
  }
  
  .empty-text {
    font-size: var(--font-size-sm);
    color: var(--color-textSecondary);
    margin-bottom: var(--spacing-md);
  }
`,k=[{id:"ORD123456",status:"\u5f85\u53d1\u8d27",date:"2025-05-20",total:328,items:[{id:"p1",image:"https://example.com/product1.jpg"},{id:"p2",image:"https://example.com/product2.jpg"}]},{id:"ORD123455",status:"\u5df2\u5b8c\u6210",date:"2025-05-15",total:199,items:[{id:"p3",image:"https://example.com/product3.jpg"}]}],Y=(0,o.PA)((()=>{const e=(0,m.kH)(),s=(0,m.x3)(),a=(0,m.Ke)(),i=(0,m.j_)(),[n,o]=(0,t.useState)("favorites"),c=async()=>{const s=await e.login("test_user","password123");s&&i.showToast("\u767b\u5f55\u6210\u529f","success")},Y=()=>{e.logout(),i.showToast("\u5df2\u9000\u51fa\u767b\u5f55","info")},E=()=>{l().navigateTo({url:"/pages/user/settings"})},C=()=>{l().navigateTo({url:"/pages/user/orders"})},T=()=>{l().navigateTo({url:"/pages/user/favorites"})},I=()=>{l().navigateTo({url:"/pages/user/history"})},P=e=>{l().navigateTo({url:`/pages/order/detail?id=${e}`})},_=e.favorites.map((e=>a.getProduct(e))).filter(Boolean),V=e.viewHistory.map((e=>a.getProduct(e))).filter(Boolean);return(0,x.jsxs)(h,{scrollY:!0,children:[e.isLoggedIn&&e.profile?(0,x.jsxs)(v,{children:[(0,x.jsxs)(r.Ss,{className:"avatar-container",children:[(0,x.jsx)(r.Ss,{className:"glow-effect"}),(0,x.jsx)(r._V,{className:"avatar",src:e.profile.avatar||"/assets/images/default-avatar.png"})]}),(0,x.jsxs)(r.Ss,{className:"user-info",children:[(0,x.jsx)(r.EY,{className:"username",children:e.profile.nickname}),(0,x.jsxs)(r.EY,{className:"member-info",children:[e.profile.level||"\u666e\u901a\u4f1a\u5458"," \xb7",e.profile.memberSince?`\u4f1a\u5458${(new Date).getFullYear()-new Date(e.profile.memberSince).getFullYear()}\u5e74`:"\u65b0\u4f1a\u5458"]}),(0,x.jsxs)(r.Ss,{className:"points-container",children:[(0,x.jsx)(r.EY,{className:"points-label",children:"\u79ef\u5206"}),(0,x.jsx)(r.EY,{className:"points-value",children:e.profile.points||0})]})]}),(0,x.jsx)(r.Ss,{className:"settings-button",onClick:E,children:(0,x.jsx)(r._V,{className:"settings-icon",src:"/assets/icons/settings.png"})})]}):(0,x.jsxs)(u,{children:[(0,x.jsx)(r._V,{className:"login-icon",src:"/assets/icons/user-large.png"}),(0,x.jsx)(r.EY,{className:"login-text",children:"\u767b\u5f55\u8d26\u53f7\u4ee5\u83b7\u53d6\u66f4\u591a\u529f\u80fd"}),(0,x.jsx)(d.$,{variant:"primary",size:"lg",glow:!0,onClick:c,children:"\u7acb\u5373\u767b\u5f55"})]}),e.isLoggedIn&&(0,x.jsxs)(j,{children:[(0,x.jsxs)(r.Ss,{className:"stat-item",children:[(0,x.jsx)(r.EY,{className:"stat-value",children:e.favorites.length}),(0,x.jsx)(r.EY,{className:"stat-label",children:"\u6536\u85cf"})]}),(0,x.jsxs)(r.Ss,{className:"stat-item",children:[(0,x.jsx)(r.EY,{className:"stat-value",children:e.viewHistory.length}),(0,x.jsx)(r.EY,{className:"stat-label",children:"\u6d4f\u89c8"})]}),(0,x.jsxs)(r.Ss,{className:"stat-item",children:[(0,x.jsx)(r.EY,{className:"stat-value",children:k.length}),(0,x.jsx)(r.EY,{className:"stat-label",children:"\u8ba2\u5355"})]}),(0,x.jsxs)(r.Ss,{className:"stat-item",children:[(0,x.jsx)(r.EY,{className:"stat-value",children:s.items.length}),(0,x.jsx)(r.EY,{className:"stat-label",children:"\u8d2d\u7269\u8f66"})]})]}),(0,x.jsxs)(f,{children:[(0,x.jsx)(r.EY,{className:"section-title",children:"\u6211\u7684\u670d\u52a1"}),(0,x.jsxs)(b,{children:[(0,x.jsxs)(r.Ss,{className:"menu-item",onClick:()=>l().navigateTo({url:"/pages/user/orders?status=pending"}),children:[(0,x.jsx)(r._V,{className:"menu-icon",src:"/assets/icons/pending.png"}),(0,x.jsx)(r.EY,{className:"menu-label",children:"\u5f85\u4ed8\u6b3e"})]}),(0,x.jsxs)(r.Ss,{className:"menu-item",onClick:()=>l().navigateTo({url:"/pages/user/orders?status=shipping"}),children:[(0,x.jsx)(r._V,{className:"menu-icon",src:"/assets/icons/shipping.png"}),(0,x.jsx)(r.EY,{className:"menu-label",children:"\u5f85\u53d1\u8d27"})]}),(0,x.jsxs)(r.Ss,{className:"menu-item",onClick:()=>l().navigateTo({url:"/pages/user/orders?status=delivered"}),children:[(0,x.jsx)(r._V,{className:"menu-icon",src:"/assets/icons/delivered.png"}),(0,x.jsx)(r.EY,{className:"menu-label",children:"\u5f85\u6536\u8d27"})]}),(0,x.jsxs)(r.Ss,{className:"menu-item",onClick:()=>l().navigateTo({url:"/pages/user/orders?status=review"}),children:[(0,x.jsx)(r._V,{className:"menu-icon",src:"/assets/icons/review.png"}),(0,x.jsx)(r.EY,{className:"menu-label",children:"\u5f85\u8bc4\u4ef7"})]}),(0,x.jsxs)(r.Ss,{className:"menu-item",onClick:()=>l().navigateTo({url:"/pages/user/address"}),children:[(0,x.jsx)(r._V,{className:"menu-icon",src:"/assets/icons/address.png"}),(0,x.jsx)(r.EY,{className:"menu-label",children:"\u5730\u5740\u7ba1\u7406"})]}),(0,x.jsxs)(r.Ss,{className:"menu-item",onClick:()=>l().navigateTo({url:"/pages/user/customer-service"}),children:[(0,x.jsx)(r._V,{className:"menu-icon",src:"/assets/icons/service.png"}),(0,x.jsx)(r.EY,{className:"menu-label",children:"\u5ba2\u6237\u670d\u52a1"})]}),(0,x.jsxs)(r.Ss,{className:"menu-item",onClick:()=>l().navigateTo({url:"/pages/user/coupons"}),children:[(0,x.jsx)(r._V,{className:"menu-icon",src:"/assets/icons/coupon.png"}),(0,x.jsx)(r.EY,{className:"menu-label",children:"\u4f18\u60e0\u5238"})]}),(0,x.jsxs)(r.Ss,{className:"menu-item",onClick:E,children:[(0,x.jsx)(r._V,{className:"menu-icon",src:"/assets/icons/settings-menu.png"}),(0,x.jsx)(r.EY,{className:"menu-label",children:"\u8bbe\u7f6e"})]})]})]}),(0,x.jsx)(g.c,{}),e.isLoggedIn&&(0,x.jsxs)(N,{children:[(0,x.jsxs)(r.Ss,{className:"section-header",children:[(0,x.jsx)(r.EY,{className:"section-title",children:"\u6211\u7684\u8ba2\u5355"}),(0,x.jsx)(r.EY,{className:"view-all",onClick:C,children:"\u67e5\u770b\u5168\u90e8"})]}),k.length>0?k.map((e=>(0,x.jsxs)(y,{onClick:()=>P(e.id),children:[(0,x.jsxs)(r.Ss,{className:"order-header",children:[(0,x.jsxs)(r.EY,{className:"order-id",children:["\u8ba2\u5355\u53f7: ",e.id]}),(0,x.jsx)(r.EY,{className:"order-status",children:e.status})]}),(0,x.jsxs)(r.Ss,{className:"order-items",children:[e.items.slice(0,3).map(((e,s)=>(0,x.jsx)(r._V,{className:"order-image",src:e.image},s))),e.items.length>3&&(0,x.jsx)(r.Ss,{className:"more-items",children:(0,x.jsxs)(r.EY,{className:"more-text",children:["+",e.items.length-3]})})]}),(0,x.jsxs)(r.Ss,{className:"order-footer",children:[(0,x.jsxs)(r.EY,{className:"order-total",children:["\u5171",e.items.length,"\u4ef6\u5546\u54c1 \u5408\u8ba1: ",(0,x.jsxs)(r.EY,{className:"total-value",children:["\xa5",e.total.toFixed(2)]})]}),(0,x.jsx)(d.$,{variant:"secondary",size:"sm",children:"\u67e5\u770b\u8be6\u60c5"})]})]},e.id))):(0,x.jsxs)(z,{children:[(0,x.jsx)(r.Ss,{className:"empty-icon",children:"\ud83d\udce6"}),(0,x.jsx)(r.EY,{className:"empty-text",children:"\u6682\u65e0\u8ba2\u5355"}),(0,x.jsx)(d.$,{variant:"secondary",size:"sm",onClick:()=>l().switchTab({url:"/pages/home/index"}),children:"\u53bb\u8d2d\u7269"})]})]}),(0,x.jsx)(g.c,{}),(0,x.jsxs)(w,{children:[(0,x.jsxs)(r.Ss,{className:"section-header",children:[(0,x.jsx)(r.EY,{className:"section-title",children:"\u6211\u7684\u6536\u85cf"}),(0,x.jsx)(r.EY,{className:"view-all",onClick:T,children:"\u67e5\u770b\u5168\u90e8"})]}),_.length>0?(0,x.jsx)(S,{scrollX:!0,scrollWithAnimation:!0,children:_.map((e=>(0,x.jsx)(r.Ss,{className:"product-item",children:(0,x.jsx)(p.A,{id:e.id,title:e.title,price:e.price,originalPrice:e.originalPrice,image:e.image,variant:"compact"})},e.id)))}):(0,x.jsxs)(z,{children:[(0,x.jsx)(r.Ss,{className:"empty-icon",children:"\u2764\ufe0f"}),(0,x.jsx)(r.EY,{className:"empty-text",children:"\u6682\u65e0\u6536\u85cf\u5546\u54c1"}),(0,x.jsx)(d.$,{variant:"secondary",size:"sm",onClick:()=>l().switchTab({url:"/pages/home/index"}),children:"\u53bb\u6536\u85cf"})]})]}),(0,x.jsx)(g.c,{}),(0,x.jsxs)(w,{children:[(0,x.jsxs)(r.Ss,{className:"section-header",children:[(0,x.jsx)(r.EY,{className:"section-title",children:"\u6700\u8fd1\u6d4f\u89c8"}),(0,x.jsx)(r.EY,{className:"view-all",onClick:I,children:"\u67e5\u770b\u5168\u90e8"})]}),V.length>0?(0,x.jsx)(S,{scrollX:!0,scrollWithAnimation:!0,children:V.map((e=>(0,x.jsx)(r.Ss,{className:"product-item",children:(0,x.jsx)(p.A,{id:e.id,title:e.title,price:e.price,originalPrice:e.originalPrice,image:e.image,variant:"compact"})},e.id)))}):(0,x.jsxs)(z,{children:[(0,x.jsx)(r.Ss,{className:"empty-icon",children:"\ud83d\udc41\ufe0f"}),(0,x.jsx)(r.EY,{className:"empty-text",children:"\u6682\u65e0\u6d4f\u89c8\u8bb0\u5f55"}),(0,x.jsx)(d.$,{variant:"secondary",size:"sm",onClick:()=>l().switchTab({url:"/pages/home/index"}),children:"\u53bb\u6d4f\u89c8"})]})]}),e.isLoggedIn&&(0,x.jsx)(r.Ss,{style:{padding:"var(--spacing-xl) var(--spacing-lg)"},children:(0,x.jsx)(d.$,{variant:"secondary",size:"lg",onClick:Y,style:{width:"100%"},children:"\u9000\u51fa\u767b\u5f55"})})]})}));var E=Y,C={},T=(0,i.eU)(E,"pages/user/index",{root:{cn:[]}},C||{});E&&E.behaviors&&(T.behaviors=(T.behaviors||[]).concat(E.behaviors));Page(T)}},function(e){var s=function(s){return e(e.s=s)};e.O(0,[96,179,76],(function(){return s(3137)}));e.O()}]);