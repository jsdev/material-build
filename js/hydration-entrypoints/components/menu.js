import"../../chunk-5MDDY5OX.js";import"../../chunk-KEVGMDHC.js";import{a as P,b as H}from"../../chunk-Z45LMOQF.js";import{b as D,c as v,d as l,e as E,f as L,g as C,l as T}from"../../chunk-W5FTBOST.js";import"../../chunk-VXTFZZ7O.js";import"../../chunk-I2I2ZCJZ.js";import{a as O,c as M,e as h,f as K}from"../../chunk-CXCOGLII.js";import"../../chunk-75PIWSVV.js";import"../../chunk-D5TRXHQI.js";import"../../chunk-ZTSP2PIJ.js";import{a as y,b as A}from"../../chunk-PG6OKG6X.js";import{c as $}from"../../chunk-ATUU4EJH.js";import{c as t,e as f,f as r,i as S,l as p,m as I,n as R,o as d,p as k}from"../../chunk-TXMQCKG7.js";import{a as m,d as u}from"../../chunk-F2UFI3JK.js";import"../../chunk-32HEDUCQ.js";var s=class extends d{constructor(){super(...arguments),this.disabled=!1,this.type="menuitem",this.href="",this.target="",this.keepOpen=!1,this.selected=!1,this.menuItemController=new P(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(e){this.menuItemController.setTypeaheadText(e)}render(){return this.renderListItem(m`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){let i=this.type==="link",o;switch(this.menuItemController.tagName){case"a":o=y`a`;break;case"button":o=y`button`;break;default:case"li":o=y`li`;break}let a=i&&this.target?this.target:u;return A`
      <${o}
        id="item"
        tabindex=${this.disabled&&!i?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||u}
        aria-selected=${this.ariaSelected||u}
        aria-checked=${this.ariaChecked||u}
        aria-expanded=${this.ariaExpanded||u}
        aria-haspopup=${this.ariaHasPopup||u}
        class="list-item ${k(this.getRenderClasses())}"
        href=${this.href||u}
        target=${a}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${e}</${o}>
    `}renderRipple(){return m` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return m` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return m`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}};$(s);s.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0};t([r({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0);t([r()],s.prototype,"type",void 0);t([r()],s.prototype,"href",void 0);t([r()],s.prototype,"target",void 0);t([r({type:Boolean,attribute:"keep-open"})],s.prototype,"keepOpen",void 0);t([r({type:Boolean})],s.prototype,"selected",void 0);t([S(".list-item")],s.prototype,"listItemRoot",void 0);t([p({slot:"headline"})],s.prototype,"headlineElements",void 0);t([p({slot:"supporting-text"})],s.prototype,"supportingTextElements",void 0);t([I({slot:""})],s.prototype,"defaultElements",void 0);t([r({attribute:"typeahead-text"})],s.prototype,"typeaheadText",null);var x=class extends s{};x.styles=[H];x=t([f("md-menu-item")],x);var n=class extends d{get item(){return this.items[0]??null}get menu(){return this.menus[0]??null}constructor(){super(),this.anchorCorner=T.START_END,this.menuCorner=T.START_START,this.hoverOpenDelay=400,this.hoverCloseDelay=400,this.isSubMenu=!0,this.previousOpenTimeout=0,this.previousCloseTimeout=0,this.onMouseenter=()=>{clearTimeout(this.previousOpenTimeout),clearTimeout(this.previousCloseTimeout),!this.menu?.open&&(this.hoverOpenDelay?this.previousOpenTimeout=setTimeout(()=>{this.show()},this.hoverOpenDelay):this.show())},this.onMouseleave=()=>{clearTimeout(this.previousCloseTimeout),clearTimeout(this.previousOpenTimeout),this.hoverCloseDelay?this.previousCloseTimeout=setTimeout(()=>{this.close()},this.hoverCloseDelay):this.close()},!1||(this.addEventListener("mouseenter",this.onMouseenter),this.addEventListener("mouseleave",this.onMouseleave))}render(){return m`
      <slot
        name="item"
        @click=${this.onClick}
        @keydown=${this.onKeydown}
        @slotchange=${this.onSlotchange}>
      </slot>
      <slot
        name="menu"
        @keydown=${this.onSubMenuKeydown}
        @close-menu=${this.onCloseSubmenu}
        @slotchange=${this.onSlotchange}>
      </slot>
    `}firstUpdated(){this.onSlotchange()}async show(){let e=this.menu;if(!e||e.open)return;e.addEventListener("closed",()=>{this.item.ariaExpanded="false",this.dispatchEvent(v()),this.dispatchEvent(h()),e.ariaHidden="true"},{once:!0}),e.positioning==="document"&&(e.positioning="absolute"),e.quick=!0,e.hasOverflow=!0,e.anchorCorner=this.anchorCorner,e.menuCorner=this.menuCorner,e.anchorElement=this.item,e.defaultFocus="first-item",e.removeAttribute("aria-hidden"),e.skipRestoreFocus=!1;let i=e.open;if(e.show(),this.item.ariaExpanded="true",this.item.ariaHasPopup="menu",e.id&&this.item.setAttribute("aria-controls",e.id),this.dispatchEvent(h()),this.dispatchEvent(D()),this.item.selected=!0,!i){let o=c=>{},a=new Promise(c=>{o=c});e.addEventListener("opened",o,{once:!0}),await a}}async close(){let e=this.menu;if(!e||!e.open)return;this.dispatchEvent(v()),e.quick=!0,e.close(),this.dispatchEvent(h());let i=a=>{},o=new Promise(a=>{i=a});e.addEventListener("closed",i,{once:!0}),await o}onSlotchange(){if(!this.item)return;this.item.ariaExpanded="false",this.item.ariaHasPopup="menu",this.menu?.id&&this.item.setAttribute("aria-controls",this.menu.id),this.item.keepOpen=!0;let e=this.menu;e&&(e.isSubmenu=!0,e.ariaHidden="true")}onClick(){this.show()}async onKeydown(e){let i=this.isSubmenuOpenKey(e.code);if(e.defaultPrevented)return;let o=i&&(l.LEFT===e.code||l.RIGHT===e.code);if((e.code===E.SPACE||o)&&(e.preventDefault(),o&&e.stopPropagation()),!i)return;let a=this.menu;if(!a)return;let c=a.items,b=M(c);if(b){await this.show(),b.tabIndex=0,b.focus();return}}onCloseSubmenu(e){let{itemPath:i,reason:o}=e.detail;if(i.push(this.item),this.dispatchEvent(v()),o.kind===L.KEYDOWN&&o.key===C.ESCAPE){e.stopPropagation(),this.item.dispatchEvent(K());return}this.dispatchEvent(h())}async onSubMenuKeydown(e){if(e.defaultPrevented)return;let{close:i,keyCode:o}=this.isSubmenuCloseKey(e.code);i&&(e.preventDefault(),(o===l.LEFT||o===l.RIGHT)&&e.stopPropagation(),await this.close(),O(this.menu.items),this.item?.focus(),this.item.tabIndex=0,this.item.focus())}isSubmenuOpenKey(e){let o=getComputedStyle(this).direction==="rtl"?l.LEFT:l.RIGHT;switch(e){case o:case E.SPACE:case E.ENTER:return!0;default:return!1}}isSubmenuCloseKey(e){let o=getComputedStyle(this).direction==="rtl"?l.RIGHT:l.LEFT;switch(e){case o:case C.ESCAPE:return{close:!0,keyCode:e};default:return{close:!1}}}};t([r({attribute:"anchor-corner"})],n.prototype,"anchorCorner",void 0);t([r({attribute:"menu-corner"})],n.prototype,"menuCorner",void 0);t([r({type:Number,attribute:"hover-open-delay"})],n.prototype,"hoverOpenDelay",void 0);t([r({type:Number,attribute:"hover-close-delay"})],n.prototype,"hoverCloseDelay",void 0);t([r({type:Boolean,reflect:!0,attribute:"md-sub-menu"})],n.prototype,"isSubMenu",void 0);t([p({slot:"item",flatten:!0})],n.prototype,"items",void 0);t([p({slot:"menu",flatten:!0})],n.prototype,"menus",void 0);var F=R`:host{position:relative;display:flex;flex-direction:column}
`;var w=class extends n{};w.styles=[F];w=t([f("md-sub-menu")],w);
