import { _ as __nuxt_component_0 } from './PageHeader-CalVkG0n.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const faqList = [
      {
        name: "What kind of clients does Allied Analysis Consulting work with?",
        description: "We work with a diverse range of clients, from small businesses to large corporations, as well as non-profit organizations and government agencies."
      },
      {
        name: "How long does a typical engagement with Allied Analysis Consulting last?",
        description: "The duration of our engagements varies based on the complexity of the project. We offer both short-term and long-term consulting services tailored to your specific needs."
      },
      {
        name: "What makes Allied Analysis Consulting different from other consulting firms?",
        description: "e stand out due to our focus on data-driven solutions and our unwavering commitment to delivering measurable results. Our approach is highly personalized, ensuring that every solution we provide is aligned with our clients' goals."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHeader, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-5xl text-blue-800"${_scopeId}>FAQ</h1><h2 class="text-5xl font-medium"${_scopeId}>Frequently Ask Questions</h2><h3 class="text-xl"${_scopeId}>Explore our FAQ section to find answers to common questions about Allied Analysis Consulting.</h3>`);
          } else {
            return [
              createVNode("h1", { class: "text-5xl text-blue-800" }, "FAQ"),
              createVNode("h2", { class: "text-5xl font-medium" }, "Frequently Ask Questions"),
              createVNode("h3", { class: "text-xl" }, "Explore our FAQ section to find answers to common questions about Allied Analysis Consulting.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full max-w-xl mx-auto flex flex-col gap-2 min-h-[30rem] justify-center"><!--[-->`);
      ssrRenderList(faqList, (faq) => {
        _push(`<div class="bg-base-200 collapse collapse-arrow"><input type="checkbox" class="peer"><div class="collapse-title text-xl">${ssrInterpolate(faq.name)}</div><div class="collapse-content bg-primary peer-checked:bg-slate-200"><p>${ssrInterpolate(faq.name)}</p></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faq-D_nLXuNp.mjs.map
