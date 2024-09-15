import { _ as __nuxt_component_0 } from './PageHeader-CalVkG0n.mjs';
import { _ as _sfc_main$1 } from './OurServices-Duvq_2oe.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-CJBupVzo.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_OurServices = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_PageHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-5xl text-blue-800"${_scopeId}>SERVICE</h1>`);
      } else {
        return [
          createVNode("h1", { class: "text-5xl text-blue-800" }, "SERVICE")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="min-h-screen bg-gradient-to-tr from-blue-200 flex flex-col justify-center items-center"><div class="max-w-xl text-center space-y-4"><h1 class="text-5xl">Our services</h1><h2 class="text-2xl font-medium">Empower Your Business Strategy with Allied Analysis Consulting</h2><h3 class="text-lg">At Allied Analysis Consulting, we offer a comprehensive range of consulting services designed to meet your business needs. From strategic planning and market entry strategies to risk management and brand positioning, our team of experts delivers tailored solutions that drive growth and innovation. We are committed to helping you achieve measurable results, no matter the challenge.</h3></div></div>`);
  _push(ssrRenderComponent(_component_OurServices, { "page-type": "service" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const service = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { service as default };
//# sourceMappingURL=service-BYLM74GG.mjs.map
