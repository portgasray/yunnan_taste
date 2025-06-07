"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[179],{8502:function(e,a,r){r.d(a,{d:function(){return l}});r(6540);var t=r(118),o=r(7581),n=r(7908),i=r(8595),s=r(4848);const c=(0,o.I4)(t.Ss)`
  position: relative;
  width: 100%;
  border-radius: var(--radius-lg);
  background-color: var(--color-backgroundAlt);
  overflow: hidden;
  transition: all var(--transition-default);
  
  /* Layout based on variant */
  display: flex;
  flex-direction: ${e=>"horizontal"===e.variant?"row":"column"};
  
  /* Box shadow and glow effect */
  box-shadow: ${e=>e.glowEffect?"var(--glow-sm)":"var(--shadow-sm)"};
  
  /* Hover effect */
  &:active {
    transform: scale(0.98);
    box-shadow: ${e=>e.glowEffect?"var(--glow-md)":"var(--shadow-md)"};
  }
  
  /* Image container */
  .article-image-container {
    position: relative;
    width: ${e=>"horizontal"===e.variant?"120px":"100%"};
    height: ${e=>{switch(e.variant){case"horizontal":return"120px";case"featured":return"200px";default:return"160px"}}};
    overflow: hidden;
    
    .article-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    /* Category badge */
    .article-category {
      position: absolute;
      top: var(--spacing-xs);
      left: var(--spacing-xs);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--radius-sm);
      background-color: var(--color-accent2);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      color: var(--color-textInverse);
      z-index: 2;
      
      /* Glow effect for category badge */
      ${e=>e.glowEffect&&"\n        box-shadow: 0 0 8px var(--color-accent2);\n      "}
    }
    
    /* Bioluminescent overlay */
    ${e=>e.glowEffect&&"\n      &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: radial-gradient(\n          circle at 50% 50%,\n          rgba(var(--color-accent2-rgb), 0.1) 0%,\n          rgba(var(--color-accent2-rgb), 0) 70%\n        );\n        mix-blend-mode: overlay;\n        z-index: 1;\n      }\n    "}
  }
  
  /* Content */
  .article-content {
    flex: 1;
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
    
    .article-title {
      font-size: ${e=>"featured"===e.variant?"var(--font-size-lg)":"var(--font-size-md)"};
      font-weight: var(--font-weight-medium);
      color: var(--color-textPrimary);
      margin-bottom: var(--spacing-xs);
      
      /* Limit to 2 lines */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      
      /* Glow effect for title */
      ${e=>e.glowEffect&&"\n        text-shadow: 0 0 4px rgba(var(--color-accent2-rgb), 0.3);\n      "}
    }
    
    /* Meta information */
    .article-meta {
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-sm);
      flex-wrap: wrap;
      
      .meta-item {
        display: flex;
        align-items: center;
        margin-right: var(--spacing-md);
        margin-bottom: var(--spacing-xs);
        
        .meta-icon {
          margin-right: var(--spacing-xs);
        }
        
        .meta-text {
          font-size: var(--font-size-xs);
          color: var(--color-textSecondary);
        }
      }
    }
    
    /* Summary */
    .article-summary {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
      margin-top: ${e=>"featured"===e.variant?"var(--spacing-sm)":"var(--spacing-xs)"};
      
      /* Limit to 2 or 3 lines based on variant */
      display: -webkit-box;
      -webkit-line-clamp: ${e=>"featured"===e.variant?3:2};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      
      /* Hide summary in horizontal variant */
      display: ${e=>"horizontal"===e.variant?"none":"-webkit-box"};
    }
    
    /* Read more link - only for featured variant */
    .read-more {
      display: ${e=>"featured"===e.variant?"flex":"none"};
      align-items: center;
      margin-top: var(--spacing-sm);
      font-size: var(--font-size-sm);
      color: var(--color-accent2);
      font-weight: var(--font-weight-medium);
      
      .read-more-icon {
        margin-left: var(--spacing-xs);
      }
      
      /* Glow effect for read more link */
      ${e=>e.glowEffect&&"\n        text-shadow: 0 0 4px rgba(var(--color-accent2-rgb), 0.5);\n      "}
    }
  }
`,l=({id:e,title:a,image:r,author:o,date:l,category:d,summary:m,readTime:g,variant:f="default",glowEffect:p=!0,onClick:u,className:v})=>{const{theme:x}=(0,n.DP)(),h=()=>{u&&u(e)},w=l?new Date(l).toLocaleDateString("zh-CN"):void 0;return(0,s.jsxs)(c,{variant:f,glowEffect:p,className:v,onClick:h,children:[(0,s.jsxs)(t.Ss,{className:"article-image-container",children:[(0,s.jsx)(t._V,{className:"article-image",src:r,mode:"aspectFill"}),d&&(0,s.jsx)(t.Ss,{className:"article-category",children:d})]}),(0,s.jsxs)(t.Ss,{className:"article-content",children:[(0,s.jsx)(t.EY,{className:"article-title",children:a}),(0,s.jsxs)(t.Ss,{className:"article-meta",children:[o&&(0,s.jsxs)(t.Ss,{className:"meta-item",children:[(0,s.jsx)(i.A,{name:"user",size:"xs",color:"textSecondary",className:"meta-icon"}),(0,s.jsx)(t.EY,{className:"meta-text",children:o})]}),w&&(0,s.jsxs)(t.Ss,{className:"meta-item",children:[(0,s.jsx)(i.A,{name:"calendar",size:"xs",color:"textSecondary",className:"meta-icon"}),(0,s.jsx)(t.EY,{className:"meta-text",children:w})]}),void 0!==g&&(0,s.jsxs)(t.Ss,{className:"meta-item",children:[(0,s.jsx)(i.A,{name:"clock",size:"xs",color:"textSecondary",className:"meta-icon"}),(0,s.jsxs)(t.EY,{className:"meta-text",children:[g," \u5206\u949f\u9605\u8bfb"]})]})]}),m&&(0,s.jsx)(t.EY,{className:"article-summary",children:m}),"featured"===f&&(0,s.jsxs)(t.Ss,{className:"read-more",children:[(0,s.jsx)(t.EY,{children:"\u9605\u8bfb\u5168\u6587"}),(0,s.jsx)(i.A,{name:"arrow-right",size:"xs",color:"accent2",className:"read-more-icon"})]})]})]})};a.A=l},1672:function(e,a,r){r.d(a,{$:function(){return c}});r(6540);var t=r(118),o=r(7908),n=r(7581),i=r(4848);const s=(0,n.I4)(t.Ss)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-default);
  cursor: pointer;
  width: ${e=>e.block?"100%":"auto"};
  
  /* Size styles */
  padding: ${e=>{switch(e.size){case"small":return"var(--spacing-xs) var(--spacing-sm)";case"large":return"var(--spacing-md) var(--spacing-lg)";default:return"var(--spacing-sm) var(--spacing-md)"}}};
  
  font-size: ${e=>{switch(e.size){case"small":return"var(--font-size-sm)";case"large":return"var(--font-size-lg)";default:return"var(--font-size-md)"}}};
  
  /* Variant styles */
  background-color: ${e=>{switch(e.variant){case"primary":return"var(--color-primary)";case"secondary":return"var(--color-secondary)";case"outline":case"text":return"transparent";default:return"var(--color-primary)"}}};
  
  color: ${e=>{switch(e.variant){case"primary":return"var(--color-textInverse)";case"secondary":return"var(--color-textInverse)";case"outline":return"var(--color-primary)";case"text":return"var(--color-secondary)";default:return"var(--color-textInverse)"}}};
  
  border: ${e=>{switch(e.variant){case"outline":return"var(--border-width-normal) solid var(--color-primary)";default:return"none"}}};
  
  /* Disabled state */
  opacity: ${e=>e.disabled?"0.5":"1"};
  pointer-events: ${e=>e.disabled?"none":"auto"};
  
  /* Glow effect */
  box-shadow: ${e=>e.glow?"var(--glow-md)":"none"};
  
  /* Active state */
  &:active {
    transform: scale(0.98);
    opacity: 0.9;
  }
`,c=({children:e,variant:a="primary",size:r="medium",disabled:t=!1,block:n=!1,glow:c=!1,onClick:l,className:d})=>{const{theme:m}=(0,o.DP)();return(0,i.jsx)(s,{variant:a,size:r,disabled:t,block:n,glow:c,onClick:l,className:d,children:e})}},9070:function(e,a,r){r.d(a,{r:function(){return l}});r(6540);var t=r(118),o=r(7581),n=r(7908),i=r(8595),s=r(4848);const c=(0,o.I4)(t.Ss)`
  position: relative;
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-default);
  
  /* Featured variant has a different height and layout */
  height: ${e=>"featured"===e.variant?"180px":"120px"};
  
  /* Box shadow and glow effect */
  box-shadow: ${e=>e.glowEffect?"var(--glow-sm)":"var(--shadow-sm)"};
  
  /* Hover effect */
  &:active {
    transform: scale(0.98);
    box-shadow: ${e=>e.glowEffect?"var(--glow-md)":"var(--shadow-md)"};
  }
  
  /* Background image */
  .category-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  
  /* Overlay gradient */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 2;
  }
  
  /* Content container */
  .category-content {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding: var(--spacing-md);
    
    /* Title */
    .category-title {
      font-size: ${e=>"compact"===e.variant?"var(--font-size-md)":"var(--font-size-lg)"};
      font-weight: var(--font-weight-bold);
      color: var(--color-textInverse);
      margin-bottom: ${e=>"featured"===e.variant?"var(--spacing-xs)":"0"};
      
      /* Text shadow for better readability */
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      
      /* Glow effect for title */
      ${e=>e.glowEffect&&"\n        text-shadow: 0 0 8px var(--color-accent1), 0 2px 4px rgba(0, 0, 0, 0.5);\n      "}
    }
    
    /* Description - only for featured variant */
    .category-description {
      display: ${e=>"featured"===e.variant?"block":"none"};
      font-size: var(--font-size-sm);
      color: var(--color-textInverse);
      margin-bottom: var(--spacing-xs);
      opacity: 0.9;
      
      /* Limit to 2 lines */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    /* Product count */
    .category-product-count {
      display: flex;
      align-items: center;
      font-size: var(--font-size-xs);
      color: var(--color-textInverse);
      opacity: 0.8;
      
      .count-icon {
        margin-right: var(--spacing-xs);
      }
    }
  }
  
  /* Bioluminescent particles effect - only when glowEffect is true */
  ${e=>e.glowEffect&&"\n    .bioluminescent-particles {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 2;\n      overflow: hidden;\n      \n      .particle {\n        position: absolute;\n        width: 4px;\n        height: 4px;\n        border-radius: 50%;\n        background-color: var(--color-accent1);\n        opacity: 0;\n        z-index: 2;\n        \n        &:nth-child(1) {\n          top: 20%;\n          left: 10%;\n          animation: glow 3s infinite 0.2s;\n        }\n        \n        &:nth-child(2) {\n          top: 30%;\n          left: 20%;\n          animation: glow 2.5s infinite 0.7s;\n        }\n        \n        &:nth-child(3) {\n          top: 70%;\n          left: 30%;\n          animation: glow 3.5s infinite 1.1s;\n        }\n        \n        &:nth-child(4) {\n          top: 40%;\n          left: 70%;\n          animation: glow 3s infinite 0.5s;\n        }\n        \n        &:nth-child(5) {\n          top: 60%;\n          left: 80%;\n          animation: glow 2.8s infinite 1.3s;\n        }\n        \n        @keyframes glow {\n          0% {\n            opacity: 0;\n            transform: scale(1);\n          }\n          50% {\n            opacity: 0.8;\n            transform: scale(1.5);\n          }\n          100% {\n            opacity: 0;\n            transform: scale(1);\n          }\n        }\n      }\n    }\n  "}
`,l=({id:e,title:a,image:r,productCount:o,description:l,variant:d="default",glowEffect:m=!0,onClick:g,className:f})=>{const{theme:p}=(0,n.DP)(),u=()=>{g&&g(e)};return(0,s.jsxs)(c,{variant:d,glowEffect:m,className:f,onClick:u,children:[(0,s.jsx)(t._V,{className:"category-image",src:r,mode:"aspectFill"}),m&&(0,s.jsxs)(t.Ss,{className:"bioluminescent-particles",children:[(0,s.jsx)(t.Ss,{className:"particle"}),(0,s.jsx)(t.Ss,{className:"particle"}),(0,s.jsx)(t.Ss,{className:"particle"}),(0,s.jsx)(t.Ss,{className:"particle"}),(0,s.jsx)(t.Ss,{className:"particle"})]}),(0,s.jsxs)(t.Ss,{className:"category-content",children:[(0,s.jsx)(t.EY,{className:"category-title",children:a}),l&&"featured"===d&&(0,s.jsx)(t.EY,{className:"category-description",children:l}),void 0!==o&&(0,s.jsxs)(t.Ss,{className:"category-product-count",children:[(0,s.jsx)(i.A,{name:"package",size:"xs",color:"textInverse",className:"count-icon"}),(0,s.jsxs)(t.EY,{children:[o," \u4ef6\u5546\u54c1"]})]})]})]})};a.A=l},317:function(e,a,r){r.d(a,{c:function(){return c}});r(6540);var t=r(118),o=r(7908),n=r(7581),i=r(4848);const s=(0,n.I4)(t.Ss)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>"horizontal"===e.orientation?"100%":e.thickness};
  height: ${e=>"vertical"===e.orientation?"100%":e.thickness};
  margin: ${e=>"horizontal"===e.orientation?`${e.spacing} 0`:`0 ${e.spacing}`};
  
  /* Variant styles */
  background-color: ${e=>e.hasText||"glowing"===e.variant?"transparent":e.color};
  
  border-style: ${e=>{switch(e.variant){case"dashed":return"dashed";case"dotted":return"dotted";default:return"solid"}}};
  
  border-width: ${e=>e.hasText?"horizontal"===e.orientation?`0 0 ${e.thickness} 0`:`0 ${e.thickness} 0 0`:(e.variant,"0")};
  
  border-color: ${e=>e.color};
  
  box-shadow: ${e=>"glowing"===e.variant?`0 0 6px ${e.color}`:"none"};
  
  /* Text styles */
  .divider-text {
    position: relative;
    padding: 0 var(--spacing-md);
    background-color: var(--color-background);
    color: ${e=>e.color};
    font-size: var(--font-size-sm);
    z-index: 1;
  }
  
  /* Line with text */
  &.with-text {
    background-color: transparent;
    border: none;
    
    &:before, &:after {
      content: '';
      flex: 1;
      height: ${e=>e.thickness};
      background-color: ${e=>e.color};
      box-shadow: ${e=>"glowing"===e.variant?`0 0 6px ${e.color}`:"none"};
      border-style: ${e=>{switch(e.variant){case"dashed":return"dashed";case"dotted":return"dotted";default:return"solid"}}};
      border-width: 0;
    }
  }
`,c=({variant:e="solid",orientation:a="horizontal",color:r="var(--color-divider)",thickness:n="1px",spacing:c="var(--spacing-md)",text:l,className:d})=>{const{theme:m}=(0,o.DP)(),g=Boolean(l)&&"horizontal"===a;return(0,i.jsx)(s,{variant:e,orientation:a,color:r,thickness:n,spacing:c,hasText:g,className:`${d||""} ${g?"with-text":""}`,children:g&&(0,i.jsx)(t.Ss,{className:"divider-text",children:l})})}},6773:function(e,a,r){r.d(a,{a:function(){return l}});r(6540);var t=r(118),o=r(7581),n=r(7908),i=r(8595),s=r(4848);const c=(0,o.I4)(t.Ss)`
  position: relative;
  width: 100%;
  border-radius: var(--radius-lg);
  background-color: var(--color-backgroundAlt);
  overflow: hidden;
  transition: all var(--transition-default);
  
  /* Layout based on variant */
  display: flex;
  flex-direction: ${e=>"compact"===e.variant?"row":"column"};
  
  /* Box shadow and glow effect */
  box-shadow: ${e=>e.glowEffect?"var(--glow-sm)":"var(--shadow-sm)"};
  
  /* Hover effect */
  &:active {
    transform: scale(0.98);
    box-shadow: ${e=>e.glowEffect?"var(--glow-md)":"var(--shadow-md)"};
  }
  
  /* Image container */
  .heritage-image-container {
    position: relative;
    width: ${e=>"compact"===e.variant?"120px":"100%"};
    height: ${e=>{switch(e.variant){case"compact":return"120px";case"featured":return"200px";default:return"160px"}}};
    overflow: hidden;
    
    .heritage-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    /* Category badge */
    .heritage-category {
      position: absolute;
      top: var(--spacing-xs);
      left: var(--spacing-xs);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--radius-sm);
      background-color: var(--color-accent1);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      color: var(--color-textInverse);
      z-index: 2;
      
      /* Glow effect for category badge */
      ${e=>e.glowEffect&&"\n        box-shadow: 0 0 8px var(--color-accent1);\n      "}
    }
    
    /* Bioluminescent overlay */
    ${e=>e.glowEffect&&"\n      &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: radial-gradient(\n          circle at 50% 50%,\n          rgba(var(--color-accent1-rgb), 0.1) 0%,\n          rgba(var(--color-accent1-rgb), 0) 70%\n        );\n        mix-blend-mode: overlay;\n        z-index: 1;\n      }\n    "}
  }
  
  /* Content */
  .heritage-content {
    flex: 1;
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
    
    .heritage-title {
      font-size: ${e=>"compact"===e.variant?"var(--font-size-sm)":"var(--font-size-md)"};
      font-weight: var(--font-weight-medium);
      color: var(--color-textPrimary);
      margin-bottom: var(--spacing-xs);
      
      /* Limit to 2 lines */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      
      /* Glow effect for title */
      ${e=>e.glowEffect&&"\n        text-shadow: 0 0 4px rgba(var(--color-accent1-rgb), 0.3);\n      "}
    }
    
    /* Location */
    .heritage-location {
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-xs);
      
      .location-icon {
        margin-right: var(--spacing-xs);
      }
      
      .location-text {
        font-size: var(--font-size-xs);
        color: var(--color-textSecondary);
      }
    }
    
    /* Description */
    .heritage-description {
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
      margin-top: ${e=>"featured"===e.variant?"var(--spacing-sm)":"var(--spacing-xs)"};
      
      /* Limit to 2 or 3 lines based on variant */
      display: -webkit-box;
      -webkit-line-clamp: ${e=>"featured"===e.variant?3:2};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      
      /* Hide description in compact variant */
      display: ${e=>"compact"===e.variant?"none":"-webkit-box"};
    }
    
    /* Read more link - only for featured variant */
    .read-more {
      display: ${e=>"featured"===e.variant?"flex":"none"};
      align-items: center;
      margin-top: var(--spacing-sm);
      font-size: var(--font-size-sm);
      color: var(--color-accent1);
      font-weight: var(--font-weight-medium);
      
      .read-more-icon {
        margin-left: var(--spacing-xs);
      }
      
      /* Glow effect for read more link */
      ${e=>e.glowEffect&&"\n        text-shadow: 0 0 4px rgba(var(--color-accent1-rgb), 0.5);\n      "}
    }
  }
`,l=({id:e,title:a,image:r,location:o,category:l,description:d,variant:m="default",glowEffect:g=!0,onClick:f,className:p})=>{const{theme:u}=(0,n.DP)(),v=()=>{f&&f(e)};return(0,s.jsxs)(c,{variant:m,glowEffect:g,className:p,onClick:v,children:[(0,s.jsxs)(t.Ss,{className:"heritage-image-container",children:[(0,s.jsx)(t._V,{className:"heritage-image",src:r,mode:"aspectFill"}),l&&(0,s.jsx)(t.Ss,{className:"heritage-category",children:l})]}),(0,s.jsxs)(t.Ss,{className:"heritage-content",children:[(0,s.jsx)(t.EY,{className:"heritage-title",children:a}),o&&(0,s.jsxs)(t.Ss,{className:"heritage-location",children:[(0,s.jsx)(i.A,{name:"map-pin",size:"xs",color:"textSecondary",className:"location-icon"}),(0,s.jsx)(t.EY,{className:"location-text",children:o})]}),d&&(0,s.jsx)(t.EY,{className:"heritage-description",children:d}),"featured"===m&&(0,s.jsxs)(t.Ss,{className:"read-more",children:[(0,s.jsx)(t.EY,{children:"\u4e86\u89e3\u66f4\u591a"}),(0,s.jsx)(i.A,{name:"arrow-right",size:"xs",color:"accent1",className:"read-more-icon"})]})]})]})};a.A=l},8595:function(e,a,r){r(6540);var t=r(118),o=r(7908),n=r(7581),i=r(4848);const s=(0,n.I4)(t.Ss)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-default);
  
  /* Size styles */
  width: ${e=>{switch(e.size){case"xs":return"16px";case"sm":return"20px";case"lg":return"32px";case"xl":return"40px";default:return"24px"}}};
  
  height: ${e=>{switch(e.size){case"xs":return"16px";case"sm":return"20px";case"lg":return"32px";case"xl":return"40px";default:return"24px"}}};
  
  /* Color styles */
  color: ${e=>`var(--color-${e.color})`};
  
  /* Glow effect */
  filter: ${e=>e.glow?"drop-shadow(0 0 4px var(--color-accent1))":"none"};
  
  /* Active state */
  &:active {
    transform: ${e=>e.onClick?"scale(0.9)":"none"};
    opacity: ${e=>e.onClick?"0.8":"1"};
  }
  
  img {
    width: 100%;
    height: 100%;
  }
`,c=({name:e,size:a="md",color:r="textPrimary",glow:n=!1,className:c,onClick:l})=>{const{theme:d}=(0,o.DP)(),m=`/assets/icons/${e}.png`;return(0,i.jsx)(s,{size:a,color:r,glow:n,className:c,onClick:l,children:(0,i.jsx)(t._V,{src:m,mode:"aspectFit"})})};a.A=c},3146:function(e,a,r){r.d(a,{R:function(){return u}});r(6540);var t=r(118),o=r(7908),n=r(7581),i=r(4848);const s=n.i7`
  0% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.3;
  }
`,c=n.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,l=n.i7`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,d=(0,n.I4)(t.Ss)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* Fullscreen styles */
  position: ${e=>e.fullscreen?"fixed":"relative"};
  top: ${e=>e.fullscreen?"0":"auto"};
  left: ${e=>e.fullscreen?"0":"auto"};
  right: ${e=>e.fullscreen?"0":"auto"};
  bottom: ${e=>e.fullscreen?"0":"auto"};
  z-index: ${e=>e.fullscreen?"9999":"1"};
  background-color: ${e=>e.fullscreen?"rgba(4, 31, 32, 0.8)":"transparent"};
  
  .loading-text {
    margin-top: var(--spacing-md);
    color: ${e=>e.color};
    font-size: var(--font-size-sm);
    animation: ${l} 2s infinite ease-in-out;
  }
`,m=(0,n.I4)(t.Ss)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>{switch(e.size){case"small":return"var(--spacing-xs)";case"large":return"var(--spacing-md)";default:return"var(--spacing-sm)"}}};
`,g=(0,n.I4)(t.Ss)`
  width: ${e=>{switch(e.size){case"small":return"8px";case"large":return"16px";default:return"12px"}}};
  
  height: ${e=>{switch(e.size){case"small":return"8px";case"large":return"16px";default:return"12px"}}};
  
  border-radius: 50%;
  background-color: ${e=>e.color};
  animation: ${s} 1.5s infinite ease-in-out;
  animation-delay: ${e=>.2*e.index}s;
  box-shadow: 0 0 10px ${e=>e.color};
`,f=(0,n.I4)(t.Ss)`
  width: ${e=>{switch(e.size){case"small":return"24px";case"large":return"48px";default:return"36px"}}};
  
  height: ${e=>{switch(e.size){case"small":return"24px";case"large":return"48px";default:return"36px"}}};
  
  border: 3px solid rgba(38, 247, 199, 0.1);
  border-top: 3px solid ${e=>e.color};
  border-radius: 50%;
  animation: ${c} 1s infinite linear;
  box-shadow: 0 0 15px rgba(38, 247, 199, 0.3);
`,p=(0,n.I4)(t.Ss)`
  width: ${e=>{switch(e.size){case"small":return"30px";case"large":return"60px";default:return"45px"}}};
  
  height: ${e=>{switch(e.size){case"small":return"30px";case"large":return"60px";default:return"45px"}}};
  
  border-radius: 50%;
  background-color: ${e=>e.color};
  opacity: 0.6;
  animation: ${s} 2s infinite ease-in-out;
  box-shadow: 0 0 20px ${e=>e.color};
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background-color: rgba(38, 247, 199, 0.8);
    box-shadow: 0 0 15px rgba(38, 247, 199, 0.8);
  }
`,u=({size:e="medium",variant:a="dots",color:r="var(--color-accent1)",fullscreen:n=!1,text:s,className:c})=>{const{theme:l}=(0,o.DP)(),u=()=>{switch(a){case"dots":return(0,i.jsxs)(m,{size:e,color:r,children:[(0,i.jsx)(g,{size:e,color:r,index:0}),(0,i.jsx)(g,{size:e,color:r,index:1}),(0,i.jsx)(g,{size:e,color:r,index:2})]});case"spinner":return(0,i.jsx)(f,{size:e,color:r});case"pulse":return(0,i.jsx)(p,{size:e,color:r});default:return null}};return(0,i.jsxs)(d,{size:e,variant:a,color:r,fullscreen:n,className:c,children:[u(),s&&(0,i.jsx)(t.Ss,{className:"loading-text",children:s})]})}},9217:function(e,a,r){r.d(a,{A:function(){return l}});r(6540);var t=r(118),o=r(7908),n=r(7581),i=r(8595),s=r(4848);const c=(0,n.I4)(t.Ss)`
  position: relative;
  width: 100%;
  border-radius: var(--radius-lg);
  background-color: var(--color-backgroundAlt);
  overflow: hidden;
  transition: all var(--transition-default);
  box-shadow: ${e=>e.glowEffect?"var(--glow-sm)":"var(--shadow-sm)"};
  
  /* Layout based on variant */
  display: flex;
  flex-direction: ${e=>"horizontal"===e.variant?"row":"column"};
  
  /* Hover effect */
  &:active {
    transform: scale(0.98);
    box-shadow: ${e=>e.glowEffect?"var(--glow-md)":"var(--shadow-md)"};
  }
  
  /* Image container */
  .product-image-container {
    position: relative;
    width: ${e=>"horizontal"===e.variant?"120px":"100%"};
    height: ${e=>{switch(e.variant){case"horizontal":return"120px";case"compact":return"120px";default:return"180px"}}};
    overflow: hidden;
    
    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    /* Badges */
    .product-badges {
      position: absolute;
      top: var(--spacing-xs);
      left: var(--spacing-xs);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs);
      
      .product-badge {
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--radius-sm);
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-medium);
        color: var(--color-textInverse);
        
        &.new {
          background-color: var(--color-accent1);
          box-shadow: ${e=>e.glowEffect?"var(--glow-sm) var(--color-accent1)":"none"};
        }
        
        &.discount {
          background-color: var(--color-accent2);
          box-shadow: ${e=>e.glowEffect?"var(--glow-sm) var(--color-accent2)":"none"};
        }
      }
    }
  }
  
  /* Content */
  .product-content {
    flex: 1;
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
    
    .product-title {
      font-size: ${e=>"compact"===e.variant?"var(--font-size-sm)":"var(--font-size-md)"};
      font-weight: var(--font-weight-medium);
      color: var(--color-textPrimary);
      margin-bottom: var(--spacing-xs);
      
      /* Limit to 2 lines */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    /* Tags */
    .product-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-xs);
      margin-bottom: var(--spacing-xs);
      
      .product-tag {
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--radius-sm);
        background-color: var(--color-backgroundDark);
        font-size: var(--font-size-xs);
        color: var(--color-textSecondary);
      }
    }
    
    /* Price */
    .product-price-container {
      display: flex;
      align-items: baseline;
      margin-top: auto;
      
      .product-price {
        font-size: ${e=>"compact"===e.variant?"var(--font-size-md)":"var(--font-size-lg)"};
        font-weight: var(--font-weight-bold);
        color: var(--color-primary);
        margin-right: var(--spacing-xs);
      }
      
      .product-original-price {
        font-size: var(--font-size-sm);
        color: var(--color-textDisabled);
        text-decoration: line-through;
      }
    }
    
    /* Rating and sold */
    .product-stats {
      display: flex;
      align-items: center;
      margin-top: var(--spacing-xs);
      
      .product-rating {
        display: flex;
        align-items: center;
        margin-right: var(--spacing-md);
        
        .rating-value {
          font-size: var(--font-size-xs);
          color: var(--color-textSecondary);
          margin-left: var(--spacing-xs);
        }
      }
      
      .product-sold {
        font-size: var(--font-size-xs);
        color: var(--color-textSecondary);
      }
    }
  }
`,l=({id:e,title:a,price:r,originalPrice:n,image:l,tags:d=[],rating:m,sold:g,isNew:f=!1,discount:p=0,variant:u="default",glowEffect:v=!0,onClick:x,className:h})=>{const{theme:w}=(0,o.DP)(),b=()=>{x&&x(e)},y=e=>`\xa5${e.toFixed(2)}`,z=p>0?p:n?Math.round(100*(1-r/n)):0;return(0,s.jsxs)(c,{variant:u,glowEffect:v,className:h,onClick:b,children:[(0,s.jsxs)(t.Ss,{className:"product-image-container",children:[(0,s.jsx)(t._V,{className:"product-image",src:l,mode:"aspectFill"}),(0,s.jsxs)(t.Ss,{className:"product-badges",children:[f&&(0,s.jsx)(t.Ss,{className:"product-badge new",children:"\u65b0\u54c1"}),z>0&&(0,s.jsxs)(t.Ss,{className:"product-badge discount",children:[z,"% \u6298\u6263"]})]})]}),(0,s.jsxs)(t.Ss,{className:"product-content",children:[(0,s.jsx)(t.EY,{className:"product-title",children:a}),d.length>0&&"compact"!==u&&(0,s.jsx)(t.Ss,{className:"product-tags",children:d.map(((e,a)=>(0,s.jsx)(t.Ss,{className:"product-tag",children:e},a)))}),(0,s.jsxs)(t.Ss,{className:"product-price-container",children:[(0,s.jsx)(t.EY,{className:"product-price",children:y(r)}),n&&n>r&&(0,s.jsx)(t.EY,{className:"product-original-price",children:y(n)})]}),(void 0!==m||void 0!==g)&&"compact"!==u&&(0,s.jsxs)(t.Ss,{className:"product-stats",children:[void 0!==m&&(0,s.jsxs)(t.Ss,{className:"product-rating",children:[(0,s.jsx)(i.A,{name:"star",size:"xs",color:"accent2",glow:v}),(0,s.jsx)(t.EY,{className:"rating-value",children:m.toFixed(1)})]}),void 0!==g&&(0,s.jsxs)(t.EY,{className:"product-sold",children:["\u5df2\u552e ",g]})]})]})]})};a.h=l},6661:function(e,a,r){r.d(a,{m:function(){return l}});r(6540);var t=r(118),o=r(7581),n=r(7908),i=r(8595),s=r(4848);const c=(0,o.I4)(t.Ss)`
  width: 100%;
  border-radius: var(--radius-lg);
  background-color: var(--color-backgroundAlt);
  overflow: hidden;
  transition: all var(--transition-default);
  
  /* Box shadow and glow effect */
  box-shadow: ${e=>e.glowEffect?"var(--glow-sm)":"var(--shadow-sm)"};
  
  /* Header */
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-md);
    border-bottom: 1px solid var(--color-border);
    
    .filter-title {
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-medium);
      color: var(--color-textPrimary);
      
      /* Glow effect for title */
      ${e=>e.glowEffect&&"\n        text-shadow: 0 0 4px rgba(var(--color-primary-rgb), 0.3);\n      "}
    }
    
    .filter-reset {
      display: flex;
      align-items: center;
      font-size: var(--font-size-sm);
      color: var(--color-textSecondary);
      
      .reset-icon {
        margin-right: var(--spacing-xs);
      }
      
      &:active {
        opacity: 0.8;
      }
    }
  }
  
  /* Filter groups */
  .filter-groups {
    padding: var(--spacing-md);
    
    .filter-group {
      margin-bottom: var(--spacing-lg);
      
      &:last-child {
        margin-bottom: 0;
      }
      
      .group-title {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        color: var(--color-textPrimary);
        margin-bottom: var(--spacing-sm);
      }
      
      .group-options {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm);
        
        .option-item {
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--radius-md);
          background-color: var(--color-backgroundDark);
          font-size: var(--font-size-sm);
          color: var(--color-textSecondary);
          transition: all var(--transition-default);
          display: flex;
          align-items: center;
          
          &.selected {
            background-color: var(--color-primary);
            color: var(--color-textInverse);
            
            /* Glow effect for selected options */
            ${e=>e.glowEffect&&"\n              box-shadow: 0 0 8px rgba(var(--color-primary-rgb), 0.5);\n            "}
            
            .option-count {
              background-color: rgba(255, 255, 255, 0.2);
            }
          }
          
          &:active {
            transform: scale(0.98);
          }
          
          .option-label {
            margin-right: ${e=>e.glowEffect?"var(--spacing-xs)":"0"};
          }
          
          .option-count {
            margin-left: var(--spacing-xs);
            padding: 0 var(--spacing-xs);
            border-radius: var(--radius-sm);
            background-color: var(--color-backgroundAlt);
            font-size: var(--font-size-xs);
            min-width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
  
  /* Bioluminescent particles effect - only when glowEffect is true */
  ${e=>e.glowEffect&&"\n    position: relative;\n    overflow: hidden;\n    \n    &::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: radial-gradient(\n        circle at 70% 30%,\n        rgba(var(--color-primary-rgb), 0.05) 0%,\n        rgba(var(--color-primary-rgb), 0) 70%\n      );\n      pointer-events: none;\n    }\n  "}
`,l=({filters:e,selectedFilters:a,onFilterChange:r,onReset:o,glowEffect:l=!0,className:d})=>{const{theme:m}=(0,n.DP)(),g=(e,t,o)=>{const n=a[e]||[];let i;i=o?n.includes(t)?n.filter((e=>e!==t)):[...n,t]:n.includes(t)&&1===n.length?[]:[t],r(e,i)},f=()=>{o&&o()},p=(e,r)=>(a[e]||[]).includes(r),u=()=>Object.values(a).reduce(((e,a)=>e+a.length),0);return(0,s.jsxs)(c,{glowEffect:l,className:d,children:[(0,s.jsxs)(t.Ss,{className:"filter-header",children:[(0,s.jsx)(t.EY,{className:"filter-title",children:"\u7b5b\u9009"}),u()>0&&(0,s.jsxs)(t.Ss,{className:"filter-reset",onClick:f,children:[(0,s.jsx)(i.A,{name:"refresh-cw",size:"xs",color:"textSecondary",className:"reset-icon"}),(0,s.jsx)(t.EY,{children:"\u91cd\u7f6e"})]})]}),(0,s.jsx)(t.Ss,{className:"filter-groups",children:e.map((e=>(0,s.jsxs)(t.Ss,{className:"filter-group",children:[(0,s.jsx)(t.EY,{className:"group-title",children:e.title}),(0,s.jsx)(t.Ss,{className:"group-options",children:e.options.map((a=>(0,s.jsxs)(t.Ss,{className:"option-item "+(p(e.id,a.id)?"selected":""),onClick:()=>g(e.id,a.id,!!e.multiSelect),children:[(0,s.jsx)(t.EY,{className:"option-label",children:a.label}),void 0!==a.count&&(0,s.jsx)(t.EY,{className:"option-count",children:a.count})]},a.id)))})]},e.id)))})]})};a.A=l},8119:function(e,a,r){r.d(a,{q:function(){return l}});r(6540);var t=r(118),o=r(7581),n=r(9217),i=r(7908),s=r(4848);const c=(0,o.I4)(t.Ss)`
  display: grid;
  grid-template-columns: repeat(${e=>e.columns}, 1fr);
  gap: var(--spacing-${e=>e.gap});
  width: 100%;
  
  /* Empty state */
  .empty-state {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-xl) 0;
    color: var(--color-textSecondary);
    font-size: var(--font-size-md);
    text-align: center;
    
    /* Subtle glow effect for empty state */
    ${e=>e.glowEffect&&"\n      text-shadow: 0 0 8px var(--color-textSecondary);\n    "}
  }
  
  /* Load more button */
  .load-more {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-md) 0;
    margin-top: var(--spacing-md);
    
    .load-more-button {
      padding: var(--spacing-sm) var(--spacing-lg);
      border-radius: var(--radius-md);
      background-color: var(--color-backgroundDark);
      color: var(--color-textSecondary);
      font-size: var(--font-size-sm);
      transition: all var(--transition-default);
      
      /* Glow effect for load more button */
      ${e=>e.glowEffect&&"\n        box-shadow: var(--glow-sm);\n      "}
      
      &:active {
        transform: scale(0.98);
        ${e=>e.glowEffect&&"\n          box-shadow: var(--glow-md);\n        "}
      }
    }
  }
  
  /* Loading skeleton */
  .product-skeleton {
    height: ${e=>1===e.columns?"120px":"240px"};
    border-radius: var(--radius-lg);
    background-color: var(--color-backgroundAlt);
    overflow: hidden;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.05) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.05) 100%
      );
      animation: shimmer 1.5s infinite;
      
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    }
    
    /* Glow effect for skeleton */
    ${e=>e.glowEffect&&"\n      box-shadow: var(--glow-sm);\n    "}
  }
`,l=({products:e=[],columns:a=2,gap:r="md",cardVariant:o="default",glowEffect:l=!0,onProductClick:d,className:m,loading:g=!1,emptyText:f="\u6682\u65e0\u5546\u54c1",showLoadMore:p=!1,onLoadMore:u})=>{const{theme:v}=(0,i.DP)(),x=e=>{d&&d(e)},h=()=>{u&&u()},w=()=>Array(2*a).fill(0).map(((e,a)=>(0,s.jsx)(t.Ss,{className:"product-skeleton"},`skeleton-${a}`)));return(0,s.jsxs)(c,{columns:a,gap:r,glowEffect:l,className:m,children:[g?w():e.length>0?e.map((e=>(0,s.jsx)(n.h,{...e,variant:o,glowEffect:l,onClick:x},e.id))):(0,s.jsx)(t.Ss,{className:"empty-state",children:f}),p&&e.length>0&&(0,s.jsx)(t.Ss,{className:"load-more",children:(0,s.jsx)(t.Ss,{className:"load-more-button",onClick:h,children:"\u52a0\u8f7d\u66f4\u591a"})})]})};a.A=l},5853:function(e,a,r){r.d(a,{I:function(){return d}});var t=r(6540),o=r(118),n=r(7581),i=r(7908),s=r(8595),c=r(4848);const l=(0,n.I4)(o.Ss)`
  width: 100%;
  
  /* Search input container */
  .search-input-container {
    display: flex;
    align-items: center;
    padding: ${e=>"minimal"===e.variant?"var(--spacing-xs) 0":"var(--spacing-sm) var(--spacing-md)"};
    border-radius: ${e=>{switch(e.variant){case"rounded":return"var(--radius-full)";case"minimal":return"0";default:return"var(--radius-lg)"}}};
    background-color: ${e=>"minimal"===e.variant?"transparent":"var(--color-backgroundAlt)"};
    border-bottom: ${e=>"minimal"===e.variant?"1px solid var(--color-border)":"none"};
    transition: all var(--transition-default);
    
    /* Box shadow and glow effect */
    box-shadow: ${e=>"minimal"===e.variant?"none":e.glowEffect?e.focused?"var(--glow-md)":"var(--glow-sm)":e.focused?"var(--shadow-md)":"var(--shadow-sm)"};
    
    /* Search icon */
    .search-icon {
      margin-right: var(--spacing-sm);
    }
    
    /* Input field */
    .search-input {
      flex: 1;
      height: 36px;
      font-size: var(--font-size-md);
      color: var(--color-textPrimary);
      background-color: transparent;
      border: none;
      outline: none;
      
      &::placeholder {
        color: var(--color-textDisabled);
      }
    }
    
    /* Clear button */
    .clear-button {
      margin-left: var(--spacing-sm);
      opacity: 0.7;
      
      &:active {
        opacity: 1;
      }
    }
    
    /* Search button - only for default and rounded variants */
    .search-button {
      display: ${e=>"minimal"===e.variant?"none":"flex"};
      align-items: center;
      justify-content: center;
      margin-left: var(--spacing-sm);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--radius-md);
      background-color: var(--color-primary);
      color: var(--color-textInverse);
      font-size: var(--font-size-sm);
      
      /* Glow effect for search button */
      ${e=>e.glowEffect&&"\n        box-shadow: 0 0 8px rgba(var(--color-primary-rgb), 0.5);\n      "}
      
      &:active {
        transform: scale(0.95);
      }
    }
  }
  
  /* Search history */
  .search-history {
    margin-top: var(--spacing-md);
    display: ${e=>e.focused?"block":"none"};
    
    .history-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-sm);
      
      .history-title {
        font-size: var(--font-size-sm);
        color: var(--color-textSecondary);
      }
      
      .history-clear {
        font-size: var(--font-size-xs);
        color: var(--color-textDisabled);
        
        &:active {
          opacity: 0.8;
        }
      }
    }
    
    .history-items {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-sm);
      
      .history-item {
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--radius-md);
        background-color: var(--color-backgroundDark);
        font-size: var(--font-size-sm);
        color: var(--color-textSecondary);
        transition: all var(--transition-default);
        
        /* Glow effect for history items */
        ${e=>e.glowEffect&&"\n          &:active {\n            box-shadow: 0 0 8px rgba(var(--color-accent1-rgb), 0.3);\n          }\n        "}
        
        &:active {
          transform: scale(0.98);
          background-color: var(--color-backgroundAlt);
        }
      }
    }
  }
  
  /* Bioluminescent glow effect - only when glowEffect is true and focused */
  ${e=>e.glowEffect&&e.focused&&`\n    .search-input-container {\n      position: relative;\n      \n      &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: ${"rounded"===e.variant?"var(--radius-full)":"var(--radius-lg)"};\n        box-shadow: 0 0 15px rgba(var(--color-primary-rgb), 0.3);\n        opacity: 0.5;\n        pointer-events: none;\n        animation: pulse 2s infinite;\n      }\n      \n      @keyframes pulse {\n        0% {\n          opacity: 0.3;\n        }\n        50% {\n          opacity: 0.5;\n        }\n        100% {\n          opacity: 0.3;\n        }\n      }\n    }\n  `}
`,d=({placeholder:e="\u641c\u7d22\u4e91\u5357\u7279\u4ea7...",value:a="",onChange:r,onSearch:n,onClear:d,variant:m="default",glowEffect:g=!0,showHistory:f=!1,historyItems:p=[],onHistoryItemClick:u,onHistoryClear:v,className:x})=>{const{theme:h}=(0,i.DP)(),[w,b]=(0,t.useState)(a),[y,z]=(0,t.useState)(!1),$=e=>{const a=e.detail.value;b(a),r&&r(a)},j=()=>{w.trim()&&n&&n(w.trim())},k=()=>{b(""),d&&d()},N=()=>{z(!0)},S=()=>{setTimeout((()=>{z(!1)}),200)},E=e=>{b(e),u&&u(e)},C=()=>{v&&v()};return(0,c.jsxs)(l,{variant:m,glowEffect:g,focused:y,className:x,children:[(0,c.jsxs)(o.Ss,{className:"search-input-container",children:[(0,c.jsx)(s.A,{name:"search",size:"sm",color:y?"primary":"textSecondary",className:"search-icon",glow:g&&y}),(0,c.jsx)(o.pd,{className:"search-input",type:"text",placeholder:e,value:w,onInput:$,onConfirm:j,onFocus:N,onBlur:S,confirmType:"search"}),w&&(0,c.jsx)(o.Ss,{className:"clear-button",onClick:k,children:(0,c.jsx)(s.A,{name:"x-circle",size:"sm",color:"textDisabled"})}),"minimal"!==m&&(0,c.jsx)(o.Ss,{className:"search-button",onClick:j,children:(0,c.jsx)(o.EY,{children:"\u641c\u7d22"})})]}),f&&p.length>0&&(0,c.jsxs)(o.Ss,{className:"search-history",children:[(0,c.jsxs)(o.Ss,{className:"history-header",children:[(0,c.jsx)(o.EY,{className:"history-title",children:"\u641c\u7d22\u5386\u53f2"}),(0,c.jsx)(o.EY,{className:"history-clear",onClick:C,children:"\u6e05\u9664"})]}),(0,c.jsx)(o.Ss,{className:"history-items",children:p.map(((e,a)=>(0,c.jsx)(o.Ss,{className:"history-item",onClick:()=>E(e),children:(0,c.jsx)(o.EY,{children:e})},a)))})]})]})};a.A=d}}]);