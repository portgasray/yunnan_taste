"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[777],{653:function(t,e,a){var i=a(8870),n=a(6540),o=a(118),r=a(7581),c=a(3443),s=a(758),l=a.n(s),p=a(2471),d=a(4848);const x=(0,r.I4)(o.Ss)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 98px;
  background-color: var(--color-backgroundDark);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
  z-index: 100;
`,u=(0,r.I4)(o.Ss)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  position: relative;
  
  .tab-icon {
    width: 28px;
    height: 28px;
    margin-bottom: 4px;
    position: relative;
    z-index: 2;
  }
  
  .tab-text {
    font-size: 12px;
    color: ${t=>t.active?"var(--color-accent1)":"var(--color-textSecondary)"};
    position: relative;
    z-index: 2;
  }
  
  .glow-effect {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${t=>t.active?"var(--color-accent1)":"transparent"} 0%,
      transparent 70%
    );
    opacity: ${t=>t.active?.3:0};
    filter: blur(8px);
    transition: all 0.3s ease;
    z-index: 1;
  }
  
  &:active .glow-effect {
    opacity: 0.5;
    transform: scale(1.2);
  }
`,g=(0,c.PA)((()=>{const[t,e]=(0,n.useState)(0),[a,i]=(0,n.useState)([]),r=(0,p.Pj)();r.uiStore;(0,n.useEffect)((()=>{const t=l().getApp().config.tabBar;t&&t.list&&i(t.list);const a=l().getCurrentPages(),n=a[a.length-1],o=n?n.route:"",r=t.list.findIndex((t=>o.includes(t.pagePath.replace("pages/",""))));-1!==r&&e(r)}),[]);const c=(a,i)=>{t!==a&&(e(a),l().switchTab({url:`/${i}`}))};return(0,d.jsx)(x,{children:a.map(((e,a)=>(0,d.jsxs)(u,{active:t===a,onClick:()=>c(a,e.pagePath),children:[(0,d.jsx)(o.Ss,{className:"glow-effect"}),(0,d.jsx)(o._V,{className:"tab-icon",src:t===a?e.selectedIconPath:e.iconPath}),(0,d.jsx)(o.EY,{className:"tab-text",children:e.text})]},a)))})}));var f=g;Component((0,i.sq)(f,"custom-tab-bar/index"))}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[96,179,76],(function(){return e(653)}));t.O()}]);