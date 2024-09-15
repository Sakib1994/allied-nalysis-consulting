import { _ as __nuxt_component_0$1 } from './nuxt-link-CJBupVzo.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { a as useRoute$1, _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$6 } from './OurServices-Duvq_2oe.mjs';
import { _ as _sfc_main$7, a as _sfc_main$1$1 } from './Reccomendation-BDGr2ke9.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import '../runtime.mjs';
import 'fs';
import 'path';
import 'unhead';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import '@unhead/shared';

const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero min-h-screen overflow-hidden" }, _attrs))}><div class="hero-overlay bg-opacity-10 bg-transparent"><div class="gradient-bg"><div class="gradients-container"><div class="g1"></div><div class="g2"></div><div class="g3"></div><div class="g4"></div><div class="g5"></div></div></div></div><div class="hero-content text-neutral-content text-center"><div class="max-w-md"><h1 class="mb-5 text-5xl font-bold">Your Business Consultant</h1><h2 class="mb-5 text-3xl font-bold">Boost Your Success.</h2><p class="mb-5"> Empowering businesses with expert consulting solutions tailored to drive success and innovation. </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/appointment" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="z-10 relative border-2 min-h-12 rounded-lg border-gray-800 bg-sky-100 py-2.5 px-5 uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[&#39;&#39;] hover:text-white before:hover:scale-y-100"${_scopeId}>Book An Appointment</button>`);
      } else {
        return [
          createVNode("button", { class: "z-10 relative border-2 min-h-12 rounded-lg border-gray-800 bg-sky-100 py-2.5 px-5 uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100" }, "Book An Appointment")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-base-100" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2"><div class="bg-[url(&#39;/image-aboutus.jpeg&#39;)] bg-cover bg-fixed"></div><div class="my-8 py-8 pl-4"><div class="w-full md:w-11/12 mx-auto text-center lg:text-left"><h1 class="text-2xl font-bold uppercase">About us</h1><div class="divider"></div><p class="py-4 text-2xl md:text-3xl text-indigo-900"> Today\u2019s a better time to Connect with </p><p class="py-4 text-2xl md:text-3xl text-indigo-900"> Allied Analysis Consulting </p><div class="flex flex-col"><div class="flex space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"></path></svg><div class="flex flex-col items-start"><h3 class="text-xl"> Business Idea </h3><p class="text-left"> Turn your vision into a viable business with expert guidance and innovative thinking </p></div></div><div class="flex space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg><div class="flex flex-col items-start"><h3 class="text-xl"> Sales Strategy </h3><p class="text-left"> Boost revenue with a targeted sales strategy that drives results and maximizes opportunities </p></div></div><div class="flex space-x-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"></path></svg><div class="flex flex-col items-start"><h3 class="text-xl"> Marketing Strategy </h3><p class="text-left"> Elevate your brand with a customized marketing strategy designed to engage and convert your audience </p></div></div></div></div><div class="w-full md:w-11/12 shrink-0 p-4 md:p-2 mx-auto"><div class="stats shadow -translate-x-2"><div class="stat w-48"><div class="stat-value text-primary">100k+</div><div class="stat-title w-full text-wrap">Companies/Clients Work With</div></div><div class="stat w-48"><div class="stat-value text-primary">500k+</div><div class="stat-title">Consultations</div></div><div class="stat w-48"><div class="stat-value text-primary">100+</div><div class="stat-title">Expert Consultants </div></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = publicAssetsURL("/mission.webp");
const _imports_1 = publicAssetsURL("/approch.webp");
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50" }, _attrs))}><div class="w-full bg-slate-700 text-slate-100 flex flex-col items-center"><div class="py-12 w-11/12 md:w-1/2 text-center space-y-4"><h2 class="text-2xl md:text-4xl">Mission - Driven, Vision - Focused</h2><p class="text-lg md:text-xl">At Allied Analysis Consulting, our mission is to deliver personalized, results-driven solutions that empower businesses to thrive. Guided by a vision to be the industry leader, we are committed to continuous innovation and exceeding client expectations</p></div></div><section class="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center p-4"><div class="w-full h-full grid justify-items-center items-center bg-[url(&#39;/image-aboutus.jpeg&#39;)] md:bg-slate-50 md:bg-none bg-cover bg-fixed"><article class="service-card rounded-lg"><div class="card w-full lg:w-128 bg-slate-50 shadow-xl text-blue-900 my-12 md:my-4"><div class="card-body"><h2 class="card-title text-3xl">Our Expertise</h2><ul class="list-disc space-y-4 list-inside"><li> Mapping customer/consumer needs </li><li> Assessing AI opportunities and capabilities </li><li> Assessing market competitiveness </li><li> Developing innovation strategies </li><li>Generating ideas and brainstorming</li></ul><p>If a dog chews shoes whose shoes does he choose?</p></div></div></article></div><aside class="hidden lg:block py-12 -translate-x-8"><img${ssrRenderAttr("src", _imports_0)} class="object-contain rounded-lg"></aside></section><section class="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center"><aside class="hidden lg:block py-12 translate-x-8"><img${ssrRenderAttr("src", _imports_1)} class="object-contain rounded-lg"></aside><article class="service-card"><div class="card w-full lg:w-128 bg-white shadow-xl text-blue-900"><div class="card-body"><h2 class="card-title text-3xl">Our Approach</h2><ul class="list-disc space-y-4 list-inside"><li> Research (quantitative &amp; qualitative) </li><li> Data analysis and mining </li><li> Storytelling through synthesized insights </li><li> Mapping research and insights roadmaps </li><li>Identifying cultural and market trends</li></ul><p>If a dog chews shoes whose shoes does he choose?</p></div></div></article></section><div class="w-full flex flex-col md:flex-row"><div class="w-2/3"></div><div class="w-1/3"></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MissionVision.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Feedback",
  __ssrInlineRender: true,
  setup(__props) {
    const feedbacks = [
      {
        name: "Emily Turner",
        location: "Medan",
        feedback: "From start to finish, Allied Analysis Consulting delivered exceptional service. Their attention to detail and commitment to our success were evident in every step of the process.",
        imgSrc: "https://randomuser.me/api/portraits/women/10.jpg"
      },
      {
        name: "Michael Roberts",
        location: "Bandung",
        feedback: "The team at Allied Analysis Consulting exceeded our expectations. Their personalized solutions and deep industry insights helped us navigate a challenging market with confidence.",
        imgSrc: "https://randomuser.me/api/portraits/men/10.jpg"
      },
      {
        name: "Sarah Johnson",
        location: "Jakarta",
        feedback: "Allied Analysis Consulting transformed our business strategy. Their expert guidance and data-driven approach led to remarkable growth. We couldn't be happier!",
        imgSrc: "https://randomuser.me/api/portraits/women/12.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rating = _sfc_main$1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "testimonials",
        "aria-label": "What our customers are saying",
        class: "bg-slate-700 py-18 sm:py-24"
      }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-2xl md:text-center"><h2 class="font-display text-3xl tracking-tight sm:text-4xl text-slate-50">Client Feedback &amp; Reviews</h2><div class="flex justify-center pt-4">`);
      _push(ssrRenderComponent(_component_Rating, {
        size: "lg",
        rating: 4
      }, null, _parent));
      _push(`</div></div><ul role="list" class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"><!--[-->`);
      ssrRenderList(feedbacks, (feedbackObj) => {
        _push(`<li><ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8"><li><figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true" width="105" height="78" class="absolute left-6 top-6 fill-slate-100"><path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path></svg><blockquote class="relative"><p class="text-lg tracking-tight text-slate-900 text-center">${ssrInterpolate(feedbackObj.feedback)}</p></blockquote><figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"><div><div class="font-display text-base text-slate-900">${ssrInterpolate(feedbackObj.name)}</div></div><div class="overflow-hidden rounded-full bg-slate-50"><img alt="" class="h-14 w-14 object-cover" style="${ssrRenderStyle({ "color": "transparent" })}"${ssrRenderAttr("src", feedbackObj.imgSrc)}></div></figcaption></figure></li></ul></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Feedback.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-base-100" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2"><div class="my-8 py-8 pl-4"><div class="w-full md:w-11/12 mx-auto text-center lg:text-left"><h1 class="text-2xl font-bold uppercase">Our Value</h1><h2 class="text-3xl font-bold">The right decision for your marketing strategy.</h2><div class="divider"></div><p class="py-4 text-2xl md:text-3xl text-indigo-900"> Today\u2019s a better time to Connect with </p><p class="py-4 text-2xl md:text-3xl text-indigo-900"> Allied Analysis Consulting </p><div class="flex flex-col"><div class="flex space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"></path></svg><div class="flex flex-col items-start"><h3 class="text-xl"> Our Vision </h3><p class="text-left"> Our vision is to be the leading consulting firm recognized for excellence, innovation, and impact. We strive to set the standard in the industry by continuously evolving our services, embracing new technologies, and exceeding our clients\u2019 expectations, fostering long-term partnerships based on trust and results. </p></div></div><div class="flex space-x-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path></svg><div class="flex flex-col items-start"><h3 class="text-xl"> Our Mission </h3><p class="text-left"> At Allied Analysis Consulting, our mission is to empower businesses with innovative, data-driven solutions that drive measurable success. We are committed to delivering personalized consulting services that address the unique challenges of each client, helping them achieve their goals and build sustainable growth. </p></div></div></div></div><div class="w-full md:w-11/12 shrink-0 p-4 md:p-2 mx-auto grid justify-items-center"><div class="stats shadow w-48"><div class="stat"><div class="stat-title">Increase Traffic</div><div class="stat-value">62%</div></div></div></div></div><div class="bg-[url(&#39;/OurValues.webp&#39;)] bg-cover bg-fixed"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OurValues.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute$1();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = __nuxt_component_0;
      const _component_AboutUs = __nuxt_component_1;
      const _component_OurServices = _sfc_main$6;
      const _component_Reccomendation = _sfc_main$7;
      const _component_MissionVision = __nuxt_component_4;
      const _component_Feedback = _sfc_main$2;
      const _component_OurValues = __nuxt_component_6;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutUs, null, null, _parent));
      _push(ssrRenderComponent(_component_OurServices, null, null, _parent));
      _push(ssrRenderComponent(_component_Reccomendation, null, null, _parent));
      _push(ssrRenderComponent(_component_MissionVision, null, null, _parent));
      _push(ssrRenderComponent(_component_Feedback, null, null, _parent));
      _push(ssrRenderComponent(_component_OurValues, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D3v9uFa5.mjs.map
