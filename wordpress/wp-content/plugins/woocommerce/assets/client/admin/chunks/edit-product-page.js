"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[3307],{90185:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var o=r(69307),n=r(51393),c=r(14599),a=r(46530),i=r(98817),d=r(85597),l=r(55609),u=r(65736),m=r(5771),p=r(9818),_=r(36018);function s(){const{productId:e,variationId:t}=(0,d.UO)(),r=function(e){const[t,r]=(0,o.useState)(void 0);return(0,o.useEffect)((()=>{(0,p.resolveSelect)("core").getEntityRecord("postType","product_variation",Number.parseInt(e,10)).then((e=>{r(e)})).catch((e=>{throw r(void 0),e}))}),[e]),t}(t);return(0,o.useEffect)((()=>{(0,i.registerPlugin)("wc-admin-more-menu",{scope:"woocommerce-product-block-editor",render:()=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)(n.__experimentalWooProductMoreMenuItem,null,(({onClose:e})=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)(_.XG,{onClose:e}),(0,o.createElement)(m.e,{productType:"product_variation",onClose:e})))))});const e=(0,n.__experimentalInitBlocks)();return()=>{(0,i.unregisterPlugin)("wc-admin-more-menu"),e()}}),[]),(0,o.useEffect)((function(){e?(0,c.recordEvent)("product_edit_view",{source:n.TRACKS_SOURCE,product_id:e}):(0,c.recordEvent)("product_add_view",{source:n.TRACKS_SOURCE})}),[e]),r?(0,o.createElement)(o.Fragment,null,(0,o.createElement)(n.__experimentalEditor,{productId:r.id,postType:"product_variation"}),(0,o.createElement)(a.WooFooterItem,{order:0},(0,o.createElement)(o.Fragment,null,(0,o.createElement)(n.__experimentalVariationSwitcherFooter,{parentId:r?.parent_id,variationId:r?.id}),(0,o.createElement)(n.__experimentalProductMVPFeedbackModalContainer,{productId:r?.parent_id})))):(0,o.createElement)("div",{className:"woocommerce-layout__loading"},(0,o.createElement)(l.Spinner,{"aria-label":(0,u.__)("Creating the product","woocommerce")}))}(0,n.productEditorHeaderApiFetchMiddleware)(),(0,n.productApiFetchMiddleware)()}}]);