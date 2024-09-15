import { _ as __nuxt_component_0$1 } from './PageHeader-CalVkG0n.mjs';
import { useSSRContext, defineComponent, ref, provide, createElementBlock, mergeProps, withCtx, createVNode, unref, resolveDynamicComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _sfc_main$5 } from './Reccomendation-BDGr2ke9.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StepForm",
  __ssrInlineRender: true,
  props: {
    forms: {},
    steps: {},
    submitAction: { type: Function }
  },
  setup(__props) {
    let step = ref(0);
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full md:w-11/12 mx-auto" }, _attrs))}><ul class="steps min-w-full"><!--[-->`);
      ssrRenderList(props.steps, (stepText, index) => {
        _push(`<li class="${ssrRenderClass([index <= unref(step) ? "step-primary" : "", "step"])}">${ssrInterpolate(stepText)}</li>`);
      });
      _push(`<!--]--></ul><div class="py-3"></div><form class="min-w-full px-6">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.forms[unref(step)]), null, null), _parent);
      _push(`<div class="py-4"></div><div class="flex justify-between">`);
      if (unref(step) !== 0) {
        _push(`<button class="btn btn-outlined" type="button">Back</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(step) !== props.steps.length - 1) {
        _push(`<button class="btn btn-primary ml-auto" type="submit">Next</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(step) == props.steps.length - 1) {
        _push(`<button class="btn btn-primary" type="submit">Book an Appointment</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Multi/StepForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Step1",
  __ssrInlineRender: true,
  setup(__props) {
    ref(/* @__PURE__ */ new Date());
    ref([
      {
        repeat: {
          weekdays: [1, 7]
        }
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-control max-w-sm mx-auto pt-4 min-h-[22rem]" }, _attrs))}><h2>Select a date</h2><div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Multi/Step1.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full min-h-[22rem]" }, _attrs))}><h2>Select a time on ${ssrInterpolate((/* @__PURE__ */ new Date()).toLocaleString())}</h2><div class="grid grid-cols-2 gap-4"><div class="join join-vertical"><button class="btn join-item">09:00 AM - 10:00 AM</button><button class="btn join-item">09:30 AM - 10:30 AM</button><button class="btn join-item">10:00 AM - 11:00 AM</button><button class="btn join-item">10:30 AM - 11:30 AM</button><button class="btn join-item">11:00 AM - 12:00 PM</button><button class="btn join-item">11:30 AM - 12:30 PM</button></div><div class="join join-vertical"><button class="btn join-item">01:00 PM - 02:00 PM</button><button class="btn join-item">01:30 PM - 02:30 PM</button><button class="btn join-item">02:00 PM - 03:00 PM</button><button class="btn join-item">02:30 PM - 03:30 PM</button><button class="btn join-item">03:00 PM - 04:00 PM</button><button class="btn join-item">04:00 PM - 05:30 PM</button></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Multi/Step2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Step2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-control w-full flex items-center justify-center gap-4 min-h-[22rem]" }, _attrs))}><label class="input input-bordered flex items-center gap-2 text-slate-800 w-full md:w-4/5 mx-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-80 text-slate-800"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path></svg><input type="text" class="grow" placeholder="Name" name="name"></label><label class="input input-bordered flex items-center gap-2 text-slate-800 w-full md:w-4/5 mx-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-80"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path></svg><input type="email" class="grow" placeholder="Email" name="email"></label><label class="input input-bordered flex items-center gap-2 text-slate-800 w-full md:w-4/5 mx-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path></svg><input type="text" class="grow" placeholder="Phone" name="phone"></label><label class="input input-bordered flex items-center gap-2 text-slate-800 w-full md:w-4/5 mx-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path></svg><input type="text" class="grow" placeholder="Address" name="address"></label><label class="input input-bordered flex items-center gap-2 text-slate-800 w-full md:w-4/5 mx-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path></svg><input type="text" class="grow" placeholder="City" name="city"></label><label class="input input-bordered flex items-center gap-2 text-slate-800 w-full md:w-4/5 mx-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path></svg><input type="text" class="grow" placeholder="State" name="state"></label></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Multi/Step3.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Step3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "appointment",
  __ssrInlineRender: true,
  setup(__props) {
    const forms = [_sfc_main$3, Step2, Step3];
    ref(null);
    const submitAction = () => {
      console.log("submitting form...");
      alert("We will contact with sou soon!");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = __nuxt_component_0$1;
      const _component_MultiStepForm = _sfc_main$4;
      const _component_Reccomendation = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_PageHeader, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-5xl text-blue-800"${_scopeId}>Book an Appointment</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-5xl text-blue-800" }, "Book an Appointment")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="appintment-container py-12 bg-slate-700 text-slate-50"><div class="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 mx-auto"><div class="text-area px-4 md:px-8 flex flex-col justify-center"><h1 class="text-4xl py-4">Ready to take the next step?</h1><p> Schedule an appointment with Allied Analysis Consulting to discuss your business needs and explore how our tailored solutions can drive your success. Choose a time that works best for you, and our team will be ready to assist. </p><h2 class="text-3xl pt-8 pb-6"> What can I expect? </h2><ul class="text-lg"><li>Customized strategies designed to meet your specific business needs.</li><li>Access to a team of industry experts with extensive experience.</li><li>Decisions informed by advanced analytics and thorough research.</li><li>A partnership built on transparency, communication, and mutual goals.</li><li>Focused on delivering outcomes that drive your business forward.</li></ul></div><div class="form-container">`);
      _push(ssrRenderComponent(_component_MultiStepForm, {
        forms,
        steps: ["Date", "Time-slot", "Contact info"],
        "submit-action": submitAction
      }, null, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_component_Reccomendation, null, null, _parent));
      _push(`<dialog class="modal"><div class="modal-box"><h3 class="text-lg font-bold">Thanks for your Time</h3><p class="py-4">We will contact with you soon.</p><div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div></div></dialog></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/appointment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=appointment-DIXF6pX3.mjs.map
