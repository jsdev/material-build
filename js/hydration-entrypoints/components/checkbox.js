import {
  dispatchActivationClick,
  isActivationClick
} from "../../chunk-5E7Z4HSH.js";
import {
  Validator,
  createValidator,
  getValidityAnchor,
  mixinConstraintValidation
} from "../../chunk-A45JYRVG.js";
import {
  getFormState,
  getFormValue,
  mixinFormAssociated,
  redispatchEvent
} from "../../chunk-JBFEPHWY.js";
import {
  mixinElementInternals
} from "../../chunk-PUT4DK6M.js";
import {
  requestUpdateOnAriaChange
} from "../../chunk-TFFEGNXB.js";
import {
  __decorate,
  e,
  i,
  i2,
  n,
  o2 as o,
  o3 as o2,
  s,
  t
} from "../../chunk-3GODI6ZW.js";
import {
  A,
  x
} from "../../chunk-D4ACSUP4.js";
import "../../chunk-IIR4N7W3.js";

// ../labs/behaviors/validators/checkbox-validator.js
var CheckboxValidator = class extends Validator {
  computeValidity(state) {
    if (!this.checkboxControl) {
      this.checkboxControl = document.createElement("input");
      this.checkboxControl.type = "checkbox";
    }
    this.checkboxControl.checked = state.checked;
    this.checkboxControl.required = state.required;
    return {
      validity: this.checkboxControl.validity,
      validationMessage: this.checkboxControl.validationMessage
    };
  }
  equals(prev, next) {
    return prev.checked === next.checked && prev.required === next.required;
  }
  copy({ checked, required }) {
    return { checked, required };
  }
};

// ../checkbox/internal/checkbox.js
var checkboxBaseClass = mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(s)));
var Checkbox = class extends checkboxBaseClass {
  constructor() {
    super();
    this.checked = false;
    this.indeterminate = false;
    this.required = false;
    this.value = "on";
    this.prevChecked = false;
    this.prevDisabled = false;
    this.prevIndeterminate = false;
    if (!o) {
      this.addEventListener("click", (event) => {
        if (!isActivationClick(event) || !this.input) {
          return;
        }
        this.focus();
        dispatchActivationClick(this.input);
      });
    }
  }
  update(changed) {
    if (changed.has("checked") || changed.has("disabled") || changed.has("indeterminate")) {
      this.prevChecked = changed.get("checked") ?? this.checked;
      this.prevDisabled = changed.get("disabled") ?? this.disabled;
      this.prevIndeterminate = changed.get("indeterminate") ?? this.indeterminate;
    }
    super.update(changed);
  }
  render() {
    const prevNone = !this.prevChecked && !this.prevIndeterminate;
    const prevChecked = this.prevChecked && !this.prevIndeterminate;
    const prevIndeterminate = this.prevIndeterminate;
    const isChecked = this.checked && !this.indeterminate;
    const isIndeterminate = this.indeterminate;
    const containerClasses = o2({
      "disabled": this.disabled,
      "selected": isChecked || isIndeterminate,
      "unselected": !isChecked && !isIndeterminate,
      "checked": isChecked,
      "indeterminate": isIndeterminate,
      "prev-unselected": prevNone,
      "prev-checked": prevChecked,
      "prev-indeterminate": prevIndeterminate,
      "prev-disabled": this.prevDisabled
    });
    const { ariaLabel, ariaInvalid } = this;
    return x`
      <div class="container ${containerClasses}">
        <input
          type="checkbox"
          id="input"
          aria-checked=${isIndeterminate ? "mixed" : A}
          aria-label=${ariaLabel || A}
          aria-invalid=${ariaInvalid || A}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `;
  }
  handleInput(event) {
    const target = event.target;
    this.checked = target.checked;
    this.indeterminate = target.indeterminate;
  }
  handleChange(event) {
    redispatchEvent(this, event);
  }
  [getFormValue]() {
    if (!this.checked || this.indeterminate) {
      return null;
    }
    return this.value;
  }
  [getFormState]() {
    return String(this.checked);
  }
  formResetCallback() {
    this.checked = this.hasAttribute("checked");
  }
  formStateRestoreCallback(state) {
    this.checked = state === "true";
  }
  [createValidator]() {
    return new CheckboxValidator(() => this);
  }
  [getValidityAnchor]() {
    return this.input;
  }
};
(() => {
  requestUpdateOnAriaChange(Checkbox);
})();
Checkbox.shadowRootOptions = {
  ...s.shadowRootOptions,
  delegatesFocus: true
};
__decorate([
  n({ type: Boolean })
], Checkbox.prototype, "checked", void 0);
__decorate([
  n({ type: Boolean })
], Checkbox.prototype, "indeterminate", void 0);
__decorate([
  n({ type: Boolean })
], Checkbox.prototype, "required", void 0);
__decorate([
  n()
], Checkbox.prototype, "value", void 0);
__decorate([
  t()
], Checkbox.prototype, "prevChecked", void 0);
__decorate([
  t()
], Checkbox.prototype, "prevDisabled", void 0);
__decorate([
  t()
], Checkbox.prototype, "prevIndeterminate", void 0);
__decorate([
  i("input")
], Checkbox.prototype, "input", void 0);

// ../checkbox/internal/checkbox-styles.js
var styles = i2`:host{border-start-start-radius:var(--md-checkbox-container-shape-start-start, var(--md-checkbox-container-shape, 2px));border-start-end-radius:var(--md-checkbox-container-shape-start-end, var(--md-checkbox-container-shape, 2px));border-end-end-radius:var(--md-checkbox-container-shape-end-end, var(--md-checkbox-container-shape, 2px));border-end-start-radius:var(--md-checkbox-container-shape-end-start, var(--md-checkbox-container-shape, 2px));display:inline-flex;height:var(--md-checkbox-container-size, 18px);position:relative;vertical-align:top;width:var(--md-checkbox-container-size, 18px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-checkbox-container-size, 18px))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));border-style:solid;border-width:var(--md-checkbox-outline-width, 2px);box-sizing:border-box}.background{background-color:var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4))}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--md-checkbox-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-checkbox-state-layer-size, 40px);inset:unset;width:var(--md-checkbox-state-layer-size, 40px);--md-ripple-hover-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12)}.selected md-ripple{--md-ripple-hover-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12)}.icon{fill:var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));height:var(--md-checkbox-icon-size, 18px);width:var(--md-checkbox-icon-size, 18px)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-hover-outline-width, 2px)}:where(:hover) .background{background:var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4))}:where(:hover) .icon{fill:var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:focus-within) .outline{border-color:var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-focus-outline-width, 2px)}:where(:focus-within) .background{background:var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4))}:where(:focus-within) .icon{fill:var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:active) .outline{border-color:var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-pressed-outline-width, 2px)}:where(:active) .background{background:var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4))}:where(:active) .icon{fill:var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff))}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-disabled-outline-width, 2px);opacity:var(--md-checkbox-disabled-container-opacity, 0.38)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-checkbox-selected-disabled-container-opacity, 0.38)}:where(.disabled) .icon{fill:var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff))}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}
`;

// ../checkbox/checkbox.js
var MdCheckbox = class MdCheckbox2 extends Checkbox {
};
MdCheckbox.styles = [styles];
MdCheckbox = __decorate([
  e("md-checkbox")
], MdCheckbox);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
//# sourceMappingURL=checkbox.js.map
