import {
  internals
} from "./chunk-PUT4DK6M.js";
import {
  o2 as o
} from "./chunk-3GODI6ZW.js";

// ../internal/controller/form-submitter.js
function setupFormSubmitter(ctor) {
  if (o) {
    return;
  }
  ctor.addInitializer((instance) => {
    const submitter = instance;
    submitter.addEventListener("click", async (event) => {
      const { type, [internals]: elementInternals } = submitter;
      const { form } = elementInternals;
      if (!form || type === "button") {
        return;
      }
      await new Promise((resolve) => {
        setTimeout(resolve);
      });
      if (event.defaultPrevented) {
        return;
      }
      if (type === "reset") {
        form.reset();
        return;
      }
      form.addEventListener("submit", (submitEvent) => {
        Object.defineProperty(submitEvent, "submitter", {
          configurable: true,
          enumerable: true,
          get: () => submitter
        });
      }, { capture: true, once: true });
      elementInternals.setFormValue(submitter.value);
      form.requestSubmit();
    });
  });
}

export {
  setupFormSubmitter
};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
//# sourceMappingURL=chunk-V2HRB6XE.js.map
