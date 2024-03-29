import {
  setupFormSubmitter
} from "./chunk-V2HRB6XE.js";
import {
  internals,
  mixinElementInternals
} from "./chunk-PUT4DK6M.js";
import {
  i as i2,
  n as n2
} from "./chunk-YO4MC4HF.js";
import {
  requestUpdateOnAriaChange
} from "./chunk-TFFEGNXB.js";
import {
  __decorate,
  i2 as i,
  n,
  o3 as o,
  s,
  t
} from "./chunk-3GODI6ZW.js";
import {
  A,
  x
} from "./chunk-D4ACSUP4.js";

// ../internal/controller/is-rtl.js
function isRtl(el, shouldCheck = true) {
  return shouldCheck && getComputedStyle(el).getPropertyValue("direction").trim() === "rtl";
}

// ../iconbutton/internal/icon-button.js
var iconButtonBaseClass = mixinElementInternals(s);
var IconButton = class extends iconButtonBaseClass {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.flipIconInRtl = false;
    this.href = "";
    this.target = "";
    this.ariaLabelSelected = "";
    this.toggle = false;
    this.selected = false;
    this.type = "submit";
    this.value = "";
    this.flipIcon = isRtl(this, this.flipIconInRtl);
  }
  get name() {
    return this.getAttribute("name") ?? "";
  }
  set name(name) {
    this.setAttribute("name", name);
  }
  /**
   * The associated form element with which this element's value will submit.
   */
  get form() {
    return this[internals].form;
  }
  /**
   * The labels this element is associated with.
   */
  get labels() {
    return this[internals].labels;
  }
  /**
   * Link buttons cannot be disabled.
   */
  willUpdate() {
    if (this.href) {
      this.disabled = false;
    }
  }
  render() {
    const tag = this.href ? i2`div` : i2`button`;
    const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
    const hasToggledAriaLabel = ariaLabel && this.ariaLabelSelected;
    const ariaPressedValue = !this.toggle ? A : this.selected;
    let ariaLabelValue = A;
    if (!this.href) {
      ariaLabelValue = hasToggledAriaLabel && this.selected ? this.ariaLabelSelected : ariaLabel;
    }
    return n2`<${tag}
        class="icon-button ${o(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || A}"
        aria-haspopup="${!this.href && ariaHasPopup || A}"
        aria-expanded="${!this.href && ariaExpanded || A}"
        aria-pressed="${ariaPressedValue}"
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : A}
        ${this.selected ? this.renderSelectedIcon() : A}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${tag}>`;
  }
  renderLink() {
    const { ariaLabel } = this;
    return x`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target || A}"
        aria-label="${ariaLabel || A}"></a>
    `;
  }
  getRenderClasses() {
    return {
      "flip-icon": this.flipIcon,
      "selected": this.toggle && this.selected
    };
  }
  renderIcon() {
    return x`<span class="icon"><slot></slot></span>`;
  }
  renderSelectedIcon() {
    return x`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`;
  }
  renderTouchTarget() {
    return x`<span class="touch"></span>`;
  }
  renderFocusRing() {
    return x`<md-focus-ring
      part="focus-ring"
      for=${this.href ? "link" : "button"}></md-focus-ring>`;
  }
  renderRipple() {
    return x`<md-ripple
      for=${this.href ? "link" : A}
      ?disabled="${!this.href && this.disabled}"></md-ripple>`;
  }
  connectedCallback() {
    this.flipIcon = isRtl(this, this.flipIconInRtl);
    super.connectedCallback();
  }
  async handleClick(event) {
    await 0;
    if (!this.toggle || this.disabled || event.defaultPrevented) {
      return;
    }
    this.selected = !this.selected;
    this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
    this.dispatchEvent(new Event("change", { bubbles: true }));
  }
};
(() => {
  requestUpdateOnAriaChange(IconButton);
  setupFormSubmitter(IconButton);
})();
IconButton.formAssociated = true;
IconButton.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
__decorate([
  n({ type: Boolean, reflect: true })
], IconButton.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, attribute: "flip-icon-in-rtl" })
], IconButton.prototype, "flipIconInRtl", void 0);
__decorate([
  n()
], IconButton.prototype, "href", void 0);
__decorate([
  n()
], IconButton.prototype, "target", void 0);
__decorate([
  n({ attribute: "aria-label-selected" })
], IconButton.prototype, "ariaLabelSelected", void 0);
__decorate([
  n({ type: Boolean })
], IconButton.prototype, "toggle", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], IconButton.prototype, "selected", void 0);
__decorate([
  n()
], IconButton.prototype, "type", void 0);
__decorate([
  n({ reflect: true })
], IconButton.prototype, "value", void 0);
__decorate([
  t()
], IconButton.prototype, "flipIcon", void 0);

// ../iconbutton/internal/shared-styles.js
var styles = i`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}
`;

export {
  IconButton,
  styles
};
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
//# sourceMappingURL=chunk-HCE4JLEB.js.map
