"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[107],{9654:function(a,i,s){var r=s(8870),t=s(6540),e=s(118),o=s(7581),n=s(3443),c=s(758),l=s.n(c),d=s(2471),g=s(1672),m=s(3146),p=s(9217),x=s(317),h=s(4848);const v=(0,o.I4)(e.BM)`
  min-height: 100vh;
  background-color: var(--color-background);
  padding-bottom: 80px; /* Space for action bar */
`,u=(0,o.I4)(e.RC)`
  width: 100%;
  height: 400px;
  
  .swiper-item {
    width: 100%;
    height: 100%;
  }
  
  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,f=(0,o.I4)(e.Ss)`
  position: absolute;
  bottom: var(--spacing-md);
  right: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xs) var(--spacing-sm);
  z-index: 10;
  
  .indicator-text {
    color: var(--color-textInverse);
    font-size: var(--font-size-sm);
  }
`,b=(0,o.I4)(e.Ss)`
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
  
  .back-icon {
    width: 20px;
    height: 20px;
  }
`,j=(0,o.I4)(e.Ss)`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  
  .share-icon {
    width: 20px;
    height: 20px;
  }
`,y=(0,o.I4)(e.Ss)`
  padding: var(--spacing-lg);
  background-color: var(--color-backgroundAlt);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  margin-top: -20px;
  position: relative;
  z-index: 5;
  
  .price-container {
    display: flex;
    align-items: baseline;
    margin-bottom: var(--spacing-sm);
    
    .current-price {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-accent1);
      margin-right: var(--spacing-sm);
    }
    
    .original-price {
      font-size: var(--font-size-md);
      color: var(--color-textSecondary);
      text-decoration: line-through;
    }
    
    .discount-tag {
      margin-left: var(--spacing-sm);
      padding: var(--spacing-xs) var(--spacing-sm);
      background-color: var(--color-accent1);
      border-radius: var(--radius-sm);
      font-size: var(--font-size-xs);
      color: var(--color-textInverse);
    }
  }
  
  .title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-textPrimary);
    margin-bottom: var(--spacing-sm);
  }
  
  .stats-container {
    display: flex;
    margin-bottom: var(--spacing-md);
    
    .stat {
      margin-right: var(--spacing-lg);
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
      
      .stat-value {
        color: var(--color-textPrimary);
        font-weight: var(--font-weight-medium);
      }
    }
  }
  
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: var(--spacing-md);
    
    .tag {
      margin-right: var(--spacing-sm);
      margin-bottom: var(--spacing-sm);
      padding: var(--spacing-xs) var(--spacing-sm);
      background-color: var(--color-backgroundDark);
      border-radius: var(--radius-sm);
      font-size: var(--font-size-xs);
      color: var(--color-textSecondary);
    }
  }
`,w=(0,o.I4)(e.Ss)`
  padding: var(--spacing-lg);
  background-color: var(--color-background);
  
  .section-title {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    color: var(--color-textPrimary);
    margin-bottom: var(--spacing-md);
  }
  
  .spec-group {
    margin-bottom: var(--spacing-lg);
    
    .spec-name {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
      margin-bottom: var(--spacing-sm);
    }
    
    .spec-options {
      display: flex;
      flex-wrap: wrap;
      
      .spec-option {
        margin-right: var(--spacing-sm);
        margin-bottom: var(--spacing-sm);
        padding: var(--spacing-sm) var(--spacing-md);
        border-radius: var(--radius-md);
        font-size: var(--font-size-sm);
        border: 1px solid var(--color-border);
        
        &.selected {
          background-color: var(--color-primary);
          color: var(--color-textInverse);
          border-color: var(--color-primary);
          box-shadow: var(--shadow-glow);
        }
        
        &:not(.selected) {
          color: var(--color-textPrimary);
          background-color: var(--color-backgroundAlt);
        }
      }
    }
  }
  
  .quantity-selector {
    display: flex;
    align-items: center;
    margin-top: var(--spacing-md);
    
    .quantity-label {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
      margin-right: var(--spacing-md);
    }
    
    .quantity-controls {
      display: flex;
      align-items: center;
      
      .quantity-button {
        width: 32px;
        height: 32px;
        border-radius: var(--radius-sm);
        background-color: var(--color-backgroundAlt);
        display: flex;
        justify-content: center;
        align-items: center;
        
        &.disabled {
          opacity: 0.5;
        }
      }
      
      .quantity-value {
        width: 50px;
        text-align: center;
        font-size: var(--font-size-md);
        color: var(--color-textPrimary);
      }
    }
  }
`,k=(0,o.I4)(e.Ss)`
  padding: var(--spacing-lg);
  background-color: var(--color-background);
  
  .section-title {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    color: var(--color-textPrimary);
    margin-bottom: var(--spacing-md);
  }
  
  .description-content {
    font-size: var(--font-size-sm);
    color: var(--color-textSecondary);
    line-height: 1.6;
  }
`,N=(0,o.I4)(e.Ss)`
  padding: var(--spacing-lg);
  background-color: var(--color-background);
  
  .section-title {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    color: var(--color-textPrimary);
    margin-bottom: var(--spacing-md);
  }
`,z=(0,o.I4)(e.BM)`
  white-space: nowrap;
  
  .carousel-item {
    display: inline-block;
    width: 160px;
    margin-right: var(--spacing-md);
    vertical-align: top;
  }
`,S=(0,o.I4)(e.Ss)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: var(--color-backgroundAlt);
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-md);
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  
  .action-buttons {
    display: flex;
    flex: 1;
    
    .action-button {
      flex: 1;
      margin-left: var(--spacing-sm);
    }
  }
  
  .icon-buttons {
    display: flex;
    
    .icon-button {
      width: 50px;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: var(--spacing-md);
      
      .icon {
        width: 24px;
        height: 24px;
        margin-bottom: 4px;
      }
      
      .icon-text {
        font-size: var(--font-size-xs);
        color: var(--color-textSecondary);
      }
    }
  }
`,E=(0,n.PA)((()=>{const a=(0,c.useRouter)(),i=(0,d.Ke)(),s=(0,d.x3)(),r=(0,d.kH)(),o=(0,d.j_)(),[n,E]=(0,t.useState)(null),[Y,P]=(0,t.useState)(0),[I,C]=(0,t.useState)(1),[q,A]=(0,t.useState)({});(0,t.useEffect)((()=>{const{id:i}=a.params;i&&(E(i),F(i))}),[a.params]);const F=async a=>{const s=await i.fetchProduct(a);if(s&&(r.addToViewHistory(a),s.specifications)){const a={};s.specifications.forEach((i=>{i.options.length>0&&(a[i.name]=i.options[0])})),A(a)}},T=n?i.getProduct(n):null,V=!!n&&r.isFavorite(n),_=a=>{P(a.detail.current)},B=()=>{l().navigateBack()},M=()=>{l().showShareMenu({withShareTicket:!0})},O=(a,i)=>{A({...q,[a]:i})},R=a=>{const i=I+a;i>=1&&i<=99&&C(i)},D=async()=>{if(!T)return;const a=await s.addItem(T.id,I,q);a&&o.showToast("\u5df2\u6dfb\u52a0\u5230\u8d2d\u7269\u8f66","success")},H=async()=>{if(!T)return;const a=await s.addItem(T.id,I,q);a&&(s.startCheckout(),l().navigateTo({url:"/pages/order/checkout"}))},J=()=>{n&&(r.toggleFavorite(n),V||o.showToast("\u5df2\u6dfb\u52a0\u5230\u6536\u85cf","success"))};if(!T)return(0,h.jsx)(e.Ss,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,h.jsx)(m.R,{size:"lg",variant:"dots",text:"\u52a0\u8f7d\u5546\u54c1\u4fe1\u606f..."})});const $=T.originalPrice?Math.round(100*(1-T.price/T.originalPrice)):0;return(0,h.jsxs)(e.Ss,{children:[(0,h.jsxs)(v,{scrollY:!0,children:[(0,h.jsx)(u,{indicatorDots:!0,autoplay:!0,interval:5e3,duration:500,circular:!0,onChange:_,children:(T.images||[T.image]).map(((a,i)=>(0,h.jsx)(e.wu,{className:"swiper-item",children:(0,h.jsx)(e._V,{className:"product-image",src:a,mode:"aspectFill"})},i)))}),(0,h.jsx)(f,{children:(0,h.jsxs)(e.EY,{className:"indicator-text",children:[Y+1,"/",(T.images||[T.image]).length]})}),(0,h.jsx)(b,{onClick:B,children:(0,h.jsx)(e._V,{className:"back-icon",src:"/assets/icons/back.png"})}),(0,h.jsx)(j,{onClick:M,children:(0,h.jsx)(e._V,{className:"share-icon",src:"/assets/icons/share.png"})}),(0,h.jsxs)(y,{children:[(0,h.jsxs)(e.Ss,{className:"price-container",children:[(0,h.jsxs)(e.EY,{className:"current-price",children:["\xa5",T.price.toFixed(2)]}),T.originalPrice&&(0,h.jsxs)(e.EY,{className:"original-price",children:["\xa5",T.originalPrice.toFixed(2)]}),$>0&&(0,h.jsxs)(e.EY,{className:"discount-tag",children:[$,"% OFF"]})]}),(0,h.jsx)(e.EY,{className:"title",children:T.title}),(0,h.jsxs)(e.Ss,{className:"stats-container",children:[void 0!==T.sold&&(0,h.jsxs)(e.Ss,{className:"stat",children:["\u5df2\u552e ",(0,h.jsx)(e.EY,{className:"stat-value",children:T.sold})]}),void 0!==T.rating&&(0,h.jsxs)(e.Ss,{className:"stat",children:["\u8bc4\u5206 ",(0,h.jsx)(e.EY,{className:"stat-value",children:T.rating})]})]}),T.tags&&T.tags.length>0&&(0,h.jsx)(e.Ss,{className:"tags-container",children:T.tags.map(((a,i)=>(0,h.jsx)(e.EY,{className:"tag",children:a},i)))})]}),(0,h.jsx)(x.c,{}),T.specifications&&T.specifications.length>0&&(0,h.jsxs)(w,{children:[(0,h.jsx)(e.EY,{className:"section-title",children:"\u89c4\u683c\u9009\u62e9"}),T.specifications.map(((a,i)=>(0,h.jsxs)(e.Ss,{className:"spec-group",children:[(0,h.jsx)(e.EY,{className:"spec-name",children:a.name}),(0,h.jsx)(e.Ss,{className:"spec-options",children:a.options.map(((i,s)=>(0,h.jsx)(e.EY,{className:"spec-option "+(q[a.name]===i?"selected":""),onClick:()=>O(a.name,i),children:i},s)))})]},i))),(0,h.jsxs)(e.Ss,{className:"quantity-selector",children:[(0,h.jsx)(e.EY,{className:"quantity-label",children:"\u6570\u91cf"}),(0,h.jsxs)(e.Ss,{className:"quantity-controls",children:[(0,h.jsx)(e.Ss,{className:"quantity-button "+(I<=1?"disabled":""),onClick:()=>R(-1),children:(0,h.jsx)(e.EY,{children:"-"})}),(0,h.jsx)(e.EY,{className:"quantity-value",children:I}),(0,h.jsx)(e.Ss,{className:"quantity-button",onClick:()=>R(1),children:(0,h.jsx)(e.EY,{children:"+"})})]})]})]}),(0,h.jsx)(x.c,{}),T.description&&(0,h.jsxs)(k,{children:[(0,h.jsx)(e.EY,{className:"section-title",children:"\u5546\u54c1\u8be6\u60c5"}),(0,h.jsx)(e.EY,{className:"description-content",children:T.description})]}),(0,h.jsx)(x.c,{}),(0,h.jsxs)(N,{children:[(0,h.jsx)(e.EY,{className:"section-title",children:"\u76f8\u5173\u63a8\u8350"}),(0,h.jsx)(z,{scrollX:!0,scrollWithAnimation:!0,children:i.featuredProducts.filter((a=>a!==n)).map((a=>i.getProduct(a))).filter(Boolean).slice(0,6).map((a=>(0,h.jsx)(e.Ss,{className:"carousel-item",children:(0,h.jsx)(p.A,{id:a.id,title:a.title,price:a.price,originalPrice:a.originalPrice,image:a.image,variant:"compact"})},a.id)))})]})]}),(0,h.jsxs)(S,{children:[(0,h.jsxs)(e.Ss,{className:"icon-buttons",children:[(0,h.jsxs)(e.Ss,{className:"icon-button",onClick:J,children:[(0,h.jsx)(e._V,{className:"icon",src:V?"/assets/icons/favorite-filled.png":"/assets/icons/favorite.png"}),(0,h.jsx)(e.EY,{className:"icon-text",children:"\u6536\u85cf"})]}),(0,h.jsxs)(e.Ss,{className:"icon-button",onClick:()=>l().switchTab({url:"/pages/cart/index"}),children:[(0,h.jsx)(e._V,{className:"icon",src:"/assets/icons/cart.png"}),(0,h.jsx)(e.EY,{className:"icon-text",children:"\u8d2d\u7269\u8f66"})]})]}),(0,h.jsxs)(e.Ss,{className:"action-buttons",children:[(0,h.jsx)(g.$,{className:"action-button",variant:"secondary",size:"lg",onClick:D,children:"\u52a0\u5165\u8d2d\u7269\u8f66"}),(0,h.jsx)(g.$,{className:"action-button",variant:"primary",size:"lg",glow:!0,onClick:H,children:"\u7acb\u5373\u8d2d\u4e70"})]})]})]})}));var Y=E,P={},I=(0,r.eU)(Y,"pages/product/detail",{root:{cn:[]}},P||{});Y&&Y.behaviors&&(I.behaviors=(I.behaviors||[]).concat(Y.behaviors));Page(I)}},function(a){var i=function(i){return a(a.s=i)};a.O(0,[96,179,76],(function(){return i(9654)}));a.O()}]);