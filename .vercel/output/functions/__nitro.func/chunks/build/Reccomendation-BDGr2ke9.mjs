import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';

const _sfc_main$1 = {
  __name: "Rating",
  __ssrInlineRender: true,
  props: {
    size: String,
    rating: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "rating",
        class: "relative w-60 flex justify-center"
      }, _attrs))}><div class="${ssrRenderClass({ "rating": true, "rating-md": __props.size === "md", "rating-half": true, "rating-lg": __props.size === "lg" })}"><input type="radio" name="rating-10" class="rating-hidden" title="rating show"><input type="radio" name="rating-10" class="mask mask-star-2 mask-half-1 bg-yellow-500" title="rating half"><input type="radio" name="rating-10" class="mask mask-star-2 mask-half-2 bg-yellow-500" title="rating one"><input type="radio" name="rating-10" class="mask mask-star-2 mask-half-1 bg-yellow-500" title="rating one &amp; half"><input type="radio" name="rating-10" class="mask mask-star-2 mask-half-2 bg-yellow-500" title="rating 2"><input type="radio" name="rating-10" class="mask mask-star-2 mask-half-1 bg-yellow-500" title="rating 2 &amp; half"><input type="radio" name="rating-10" class="mask mask-star-2 mask-half-2 bg-yellow-500" title="rating 3"><input type="radio" name="rating-10" class="mask mask-star-2 mask-half-1 bg-yellow-500" title="rating 3 &amp; half"><input type="radio" name="rating-10" class="mask mask-star-2 mask-half-2 bg-yellow-500" title="rating 4"><input type="radio" name="rating-10" class="mask mask-star-2 mask-half-1 bg-yellow-500"${ssrIncludeBooleanAttr(true) ? " checked" : ""} title="rating 4 &amp; half"><input type="radio" name="rating-10" class="mask mask-star-2 mask-half-2 bg-slate-200" title="perfect rating"></div><div class="overlay w-full absolute h-20 top-0 left-0 z-10"></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Rating.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Reccomendation",
  __ssrInlineRender: true,
  setup(__props) {
    const reccomendations = ref([
      {
        title: "Business Class",
        description: "Premium consulting services tailored for excellence.",
        rating: 4.6
      },
      {
        title: "Satisfied Customer",
        description: "Delivering results that exceed client expectations.",
        rating: 4.5
      },
      {
        title: "Business Rating",
        description: "Highly rated for consistent quality and success.",
        rating: 4.8
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rating = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-100 pb-12" }, _attrs))}><div class="w-full md:w-120 text-slate-800 mx-auto py-12 pt-20 text-center prose space-y-4"><h2 class="text-3xl md:text-5xl">We help bussiness to grow</h2><h3 class="text-2xl md:text-3xl">faster and bigger</h3></div><div class="max-w-screen-xl grid pt-8 pb-12 grid-cols-1 lg:grid-cols-3 gap-4 p-2 w-11/12 mx-auto"><!--[-->`);
      ssrRenderList(unref(reccomendations), (rec) => {
        _push(`<div class="card w-full bg-neutral-700 text-neutral-content service-card"><div class="card-body items-center text-neutral-50"><div class="card-title justify-center items-center text-5xl pb-4">${ssrInterpolate(rec.rating)}</div>`);
        _push(ssrRenderComponent(_component_Rating, {
          size: "md",
          rating: rec.rating
        }, null, _parent));
        _push(`<h2 class="text-2xl text-center">${ssrInterpolate(rec.title)}</h2><p class="text-lg text-center">${ssrInterpolate(rec.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Reccomendation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=Reccomendation-BDGr2ke9.mjs.map
