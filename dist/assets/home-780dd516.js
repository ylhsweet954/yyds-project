import{d as i,u as h,r as v,a,o as m,c as p,b as t,w as e,e as n}from"./index-4d719e27.js";const b={class:"header"},w=i({__name:"Header",setup(s){const d=h(),l=v(1),c=o=>{switch(console.log("e",o),o){case"2-1":d.push("/drag");break;case"1":d.push("/");break;default:console.log("error")}};return(o,u)=>{const _=a("el-menu-item"),r=a("el-sub-menu"),x=a("el-menu");return m(),p("div",b,[t(x,{"default-active":l.value,class:"el-menu-demo",mode:"horizontal",onSelect:c},{default:e(()=>[t(_,{index:"1"},{default:e(()=>[n("开始")]),_:1}),t(r,{index:"2"},{title:e(()=>[n("测试")]),default:e(()=>[t(_,{index:"2-1"},{default:e(()=>[n("拖拽")]),_:1}),t(_,{index:"2-2"},{default:e(()=>[n("item two")]),_:1}),t(_,{index:"2-3"},{default:e(()=>[n("item three")]),_:1}),t(r,{index:"2-4"},{title:e(()=>[n("更多")]),default:e(()=>[t(_,{index:"2-4-1"},{default:e(()=>[n("item one")]),_:1}),t(_,{index:"2-4-2"},{default:e(()=>[n("item two")]),_:1}),t(_,{index:"2-4-3"},{default:e(()=>[n("item three")]),_:1})]),_:1})]),_:1}),t(_,{index:"3"},{default:e(()=>[n("Info")]),_:1}),t(_,{index:"4"},{default:e(()=>[n("Orders")]),_:1})]),_:1},8,["default-active"])])}}});const f=(s,d)=>{const l=s.__vccOpts||s;for(const[c,o]of d)l[c]=o;return l},y=f(w,[["__scopeId","data-v-f58c13a5"]]),g={class:"container"},k=i({__name:"home",setup(s){return(d,l)=>{const c=a("el-button"),o=a("el-dropdown-item"),u=a("el-dropdown-menu"),_=a("el-dropdown");return m(),p("div",g,[t(y),t(_,null,{dropdown:e(()=>[t(u,null,{default:e(()=>[t(o,null,{default:e(()=>[n("Action 1")]),_:1}),t(o,null,{default:e(()=>[n("Action 2")]),_:1}),t(o,null,{default:e(()=>[n("Action 3")]),_:1}),t(o,null,{default:e(()=>[n("Action 4")]),_:1}),t(o,null,{default:e(()=>[n("Action 5")]),_:1})]),_:1})]),default:e(()=>[t(c,{type:"primary"},{default:e(()=>[n(" Dropdown List ")]),_:1})]),_:1})])}}});const I=f(k,[["__scopeId","data-v-0bb61b0a"]]);export{I as default};