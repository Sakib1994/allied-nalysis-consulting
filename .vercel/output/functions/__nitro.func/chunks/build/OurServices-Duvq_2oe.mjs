import { _ as __nuxt_component_0 } from './nuxt-link-CJBupVzo.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OurServices",
  __ssrInlineRender: true,
  props: {
    pageType: {}
  },
  setup(__props) {
    const serviceList = [
      {
        title: "Policy Analysis and Advocacy",
        description: "Expert analysis and strategic advocacy to navigate complex policies.",
        img: "/img/policy_analysis.webp"
      },
      {
        title: "Market Entry Strategy",
        description: "Expand into new markets with confidence. Our team provides strategic insights to ensure successful market entry and growth.",
        img: "/img/Market_entry_strategy.webp"
      },
      {
        title: "Government Relations",
        description: "Build strong relationships with government entities. We assist in managing interactions and navigating regulatory environments.",
        img: "/img/government_relations_unsplash.webp"
      },
      {
        title: "Risk Management and Crisis",
        description: "Be prepared for the unexpected. We help you identify potential risks and develop strategies to mitigate them.",
        img: "/img/Risk_management.webp"
      },
      {
        title: "PR Campaigning",
        description: "Elevate your brand\u2019s presence with targeted PR campaigns. We craft compelling messages that resonate with your audience.",
        img: "/img/PR_Campaigning.webp"
      },
      {
        title: "International Development",
        description: "Grow your business on a global scale. Our consultants offer expertise in international market expansion and development.",
        img: "/img/international_relationship.webp"
      },
      {
        title: "Media Relation Management",
        description: "Manage your media presence effectively. We handle media relations to ensure your brand is represented positively.",
        img: "/img/Media_management.webp"
      },
      {
        title: "Brand Positioning",
        description: "Define your brand\u2019s unique identity. We help you articulate your vision, mission, and values to stand out in the market.",
        img: "/img/Brand_Positioning.webp"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-700" }, _attrs))}><div class="w-full md:w-120 text-white mx-auto py-12 text-center prose space-y-4">`);
      if (_ctx.pageType) {
        _push(`<h1 class="text-3xl md:text-5xl">Our Solutions</h1>`);
      } else {
        _push(`<!--[--><h1 class="text-3xl md:text-5xl">Our Service</h1><h2 class="text-2xl md:text-4xl">Innovation in Every Steps.</h2><!--]-->`);
      }
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 py-12 w-11/12 mx-auto max-w-screen-xl"><!--[-->`);
      ssrRenderList(serviceList, (service) => {
        _push(`<div class="card bg-slate-100 flex-1 w-full shadow-xl service-card"><div class="card-body text-center"><h2 class="card-title justify-center py-4">${ssrInterpolate(service.title)}</h2><p>Expert analysis and strategic advocacy to navigate complex policies.</p><div class="card-actions justify-center pt-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/appointment" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="z-10 relative border-2 min-h-12 rounded-lg border-gray-800 bg-transparent py-2.5 px-5 uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[&#39;&#39;] hover:text-white before:hover:scale-y-100"${_scopeId}>Book an appointment</button>`);
            } else {
              return [
                createVNode("button", { class: "z-10 relative border-2 min-h-12 rounded-lg border-gray-800 bg-transparent py-2.5 px-5 uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100" }, "Book an appointment")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OurServices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=OurServices-Duvq_2oe.mjs.map
