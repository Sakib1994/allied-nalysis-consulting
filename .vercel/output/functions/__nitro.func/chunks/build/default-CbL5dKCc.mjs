import { _ as __nuxt_component_0$1 } from './nuxt-link-CJBupVzo.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';

const _imports_0$1 = publicAssetsURL("/allied_logo.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "drawer" }, _attrs))}><input id="my-drawer-3" type="checkbox" class="drawer-toggle"><div class="drawer-content flex flex-col"><div class="navbar bg-base-300 w-full"><div class="flex-none lg:hidden"><label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex-1",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Company Logo" width="50"${_scopeId}><h1 class="mx-2 px-2 text-xl"${_scopeId}>Allied Analysis Consulting</h1>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "Company Logo",
            width: "50"
          }),
          createVNode("h1", { class: "mx-2 px-2 text-xl" }, "Allied Analysis Consulting")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="hidden flex-1 lg:block"><ul class="menu menu-horizontal text-lg space-x-4"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/service" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Service`);
      } else {
        return [
          createTextVNode("Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/faq" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ`);
      } else {
        return [
          createTextVNode("FAQ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="flex-none">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/appointment",
    class: "btn mr-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Consultation`);
      } else {
        return [
          createTextVNode("Consultation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="drawer-side z-50"><label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label><ul class="menu bg-base-200 min-h-full w-80 p-4 space-y-2 text-lg"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/service" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Service`);
      } else {
        return [
          createTextVNode("Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/faq" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ`);
      } else {
        return [
          createTextVNode("FAQ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = publicAssetsURL("/allied_logo_large.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[--><footer class="footer bg-slate-700 text-base-content p-10 grid-cols-3 lg:grid-cols-4 border-b-2 border-slate-400"><aside class="text-neutral-100 space-y-4 hidden lg:block"><img${ssrRenderAttr("src", _imports_0)} alt="Large company logo" width="150"><div class="flex space-x-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg><p> Customer Support Mail <br> aacwebsite2024@gmail.com </p></div></aside><nav class="text-neutral-100 transition-colors grid grid-cols-1"><h6 class="footer-title text-xl opacity-100">Services</h6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/service",
    class: "link link-hover text-emerald-300 hover:text-gray-100 text-lg transition ease-in-out delay-75"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Policy Analysis `);
      } else {
        return [
          createTextVNode(" Policy Analysis ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/service",
    class: "link link-hover text-emerald-300 hover:text-gray-100 text-lg transition ease-in-out delay-75"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Market Entry Strategy `);
      } else {
        return [
          createTextVNode(" Market Entry Strategy ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/service",
    class: "link link-hover text-emerald-300 hover:text-gray-100 text-lg transition ease-in-out delay-75"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Brand Positioning`);
      } else {
        return [
          createTextVNode(" Brand Positioning")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/service",
    class: "link link-hover text-emerald-300 hover:text-gray-100 text-lg transition ease-in-out delay-75"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Media Management`);
      } else {
        return [
          createTextVNode(" Media Management")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><nav class="text-neutral-100 grid grid-cols-1"><h6 class="footer-title text-xl opacity-100">Company</h6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "link link-hover text-emerald-300 hover:text-gray-100 text-lg transition ease-in-out delay-75"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home`);
      } else {
        return [
          createTextVNode(" Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/service",
    class: "link link-hover text-emerald-300 hover:text-gray-100 text-lg transition ease-in-out delay-75"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Service`);
      } else {
        return [
          createTextVNode(" Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/faq",
    class: "link link-hover text-emerald-300 hover:text-gray-100 text-lg transition ease-in-out delay-75"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ `);
      } else {
        return [
          createTextVNode("FAQ ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "link link-hover text-emerald-300 hover:text-gray-100 text-lg transition ease-in-out delay-75"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact`);
      } else {
        return [
          createTextVNode(" Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><nav class="text-neutral-100 grid grid-cols-1"><h6 class="footer-title text-xl opacity-100">Address</h6><a class="link link-hover text-emerald-300 hover:text-gray-100 text-lg transition ease-in-out delay-75">1130 16th St NW</a><a class="link link-hover text-emerald-300 hover:text-gray-100 text-lg transition ease-in-out delay-75">Washington DC</a></nav></footer><footer class="footer bg-slate-700 text-base-content place-items-center px-10 py-4"><aside class="grid-flow-col items-center text-neutral-100"><p> Copyright \xA9 2024 Allied Analysis Consulting, All rights reserved. </p></aside></footer><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "default" }, _attrs))}><header>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`</header><main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CbL5dKCc.mjs.map
