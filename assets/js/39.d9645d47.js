(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{571:function(t,e,o){},626:function(t,e,o){"use strict";o(571)},668:function(t,e,o){"use strict";o.r(e);var i=o(74),r=(o(38),o(9),o(58),o(21),o(274),o(78),o(153),o(113),o(275),o(276),o(529),{props:["value","tree","compact"],data:function(){return{search:{query:null},products:[{label:"sdk",name:"Cosmos<br>SDK",url:"https://docs.cosmos.network/",color:"#5064FB"},{label:"hub",name:"Cosmos<br>Hub",url:"https://hub.cosmos.network/",color:"#BA3FD9"},{label:"ibc",name:"IBC<br>Protocol",url:"https://ibcprotocol.org",color:"#E6900A"},{label:"core",name:"Tendermint<br>Core",url:"https://docs.tendermint.com/",color:"#00BB00"}]}},computed:{searchResults:function(){var t=this;return this.$site.pages.filter((function(e){var o=e.headers?e.headers.map((function(t){return t.title})):[],r=e.title;return r&&[r].concat(Object(i.a)(o)).join(" ").toLowerCase().match(t.search.query.toLowerCase())}))},logo:function(){return this.$themeConfig.logo},sidebar:function(){return this.value}},methods:{isVisible:function(t){if("undefined"!=typeof window){var e=window.location.origin.includes("deploy-preview")||window.location.origin.includes("preview-5bxuue6kafu5ocp5")||window.location.origin.includes("localhost:")||window.location.origin.includes("127.0.0.1");return t.includes("B9lab")?e:!(0==this.$themeConfig.sidebar.auto&&""===t)}return!0}}}),s=(o(626),o(0)),n=Object(s.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{position:"relative"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"items",class:["footer__compact__"+!(!0!==t.compact)]},[t._l(t.value,(function(e){return o("div",{staticClass:"sidebar",style:{display:t.isVisible(e.title)?"block":"none"}},[o("div",{staticClass:"tm-overline tm-rf-1 tm-lh-title tm-medium tm-muted title mb-4"},[t._v(t._s(e.title))]),o("client-only",[e.children?o("tm-sidebar-tree",{staticClass:"section",attrs:{value:e.children,tree:t.tree,level:0}}):t._e()],1)],1)})),o("div",{staticClass:"sidebar version"},[o("tm-select-version")],1)],2),t.$themeConfig.custom||t.$themeConfig.sidebar.hideProducts?t._e():o("div",{staticClass:"footer",class:["footer__compact__"+!(!0!==t.compact)]},t._l(t.products,(function(e){return t.$themeConfig.label!=e.label?o("a",{staticClass:"footer__item",style:{"--color":e.color},attrs:{href:e.url,target:"_blank",rel:"noreferrer noopener"}},[o("tm-logo-"+e.label,{tag:"component",staticClass:"footer__item__icon"}),o("div",{staticClass:"footer__item__title",domProps:{innerHTML:t._s(t.md(e.name))}})],1):t._e()})),0)])])}),[],!1,null,"55b44af8",null);e.default=n.exports}}]);