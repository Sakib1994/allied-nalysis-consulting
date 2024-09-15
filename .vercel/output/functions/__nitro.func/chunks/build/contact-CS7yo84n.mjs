import { _ as __nuxt_component_0 } from './PageHeader-CalVkG0n.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageHeader = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_PageHeader, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-5xl text-blue-800"${_scopeId}>Contact</h1>`);
      } else {
        return [
          createVNode("h1", { class: "text-5xl text-blue-800" }, "Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="max-w-5xl mx-auto py-12"><div class="grid grid-cols-1 md:grid-cols-2"><div class="w-full"><div class="card"><div class="card-body"><h1 class="card-title text-blue-900 text-3xl"> Get in touch </h1><h2 class="card-title text-3xl"> Don&#39;t hesitate to contact us for more information. </h2><div class="divider"></div><div class="flex flex-col gap-4"><div class="flex space-x-2 gap-4 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path></svg><div class="flex flex-col items-start"><h3 class="text-2xl pb-2"> Head Office </h3><p class="text-left"> 1130 16th St NW </p><p class="text-left"> Washington DC </p></div></div><div class="flex space-x-2 gap-4 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg><div class="flex flex-col items-start"><h3 class="text-2xl pb-2"> Email us </h3><p class="text-left"> aacwebsite2024@gmail.com </p></div></div><div class="flex space-x-2 gap-4 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path></svg><div class="flex flex-col items-start"><h3 class="text-2xl pb-2"> Call us </h3><p class="text-left"> Phone : 202-394-2949 </p></div></div></div></div></div></div><div class="card bg-base-100 w-full shrink-0 shadow-2xl"><form class="card-body"><h1 class="card-title text-4xl">Get In Touch With Us</h1><h2 class="text-lg">Reach out to Allied Analysis Consulting for any inquiries or to discuss your project. We\u2019re here to help and look forward to connecting with you.</h2><div class="card-title">Drop Your Query</div><div class="flex gap-4"><div class="form-control w-full"><label class="label relative"><span class="label-text">First Name <span class="text-3xl text-amber-400 absolute top-0">*</span></span></label><input name="firstname" placeholder="First name here" class="input input-bordered" required></div><div class="form-control w-full"><label class="label relative"><span class="label-text">Last Name <span class="text-3xl text-amber-400 absolute top-0">*</span></span></label><input name="lastname" placeholder="Last name here" class="input input-bordered" required></div></div><div class="flex gap-4"><div class="form-control w-full"><label class="label relative"><span class="label-text">Email Address<span class="text-3xl text-amber-400 absolute top-0">*</span></span></label><input name="firstname" placeholder="Add email" class="input input-bordered" required></div><div class="form-control w-full"><label class="label relative"><span class="label-text">Subject<span class="text-3xl text-amber-400 absolute top-0">*</span></span></label><input name="subject" placeholder="How can we help you?" class="input input-bordered" required></div></div><div class="form-control"><label class="label relative"><span class="label-text">Comments / Questions<span class="text-3xl text-amber-400 absolute top-0">*</span></span></label><textarea placeholder="Comments" class="textarea textarea-bordered textarea-md w-full"></textarea></div><div class="form-control mt-6"><button class="z-10 relative border-2 min-h-12 rounded-lg border-gray-800 bg-transparent py-2.5 px-5 uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[&#39;&#39;] hover:text-white before:hover:scale-y-100">Send Message</button></div></form></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-CS7yo84n.mjs.map
