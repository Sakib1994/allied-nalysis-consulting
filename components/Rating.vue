<template>
    <div id="rating" class="relative w-60 flex justify-center">
        <div :class="{'rating': true, 'rating-md': size === 'md', 'rating-half': true, 'rating-lg': size === 'lg' }">
            <input type="radio" name="rating-10" class="rating-hidden" title="rating show" />
            <input type="radio" name="rating-10" class="mask mask-star-2 mask-half-1 bg-yellow-500" title="rating half" />
            <input type="radio" name="rating-10" class="mask mask-star-2 mask-half-2 bg-yellow-500" title="rating one" />
            <input type="radio" name="rating-10" class="mask mask-star-2 mask-half-1 bg-yellow-500" title="rating one & half"/>
            <input type="radio" name="rating-10" class="mask mask-star-2 mask-half-2 bg-yellow-500" title="rating 2"/>
            <input type="radio" name="rating-10" class="mask mask-star-2 mask-half-1 bg-yellow-500" title="rating 2 & half"/>
            <input type="radio" name="rating-10" class="mask mask-star-2 mask-half-2 bg-yellow-500" title="rating 3"/>
            <input type="radio" name="rating-10" class="mask mask-star-2 mask-half-1 bg-yellow-500" title="rating 3 & half"/>
            <input type="radio" name="rating-10" class="mask mask-star-2 mask-half-2 bg-yellow-500" title="rating 4" />
            <input type="radio" name="rating-10" class="mask mask-star-2 mask-half-1 bg-yellow-500" :checked="true" title="rating 4 & half"/>
            <input type="radio" name="rating-10" class="mask mask-star-2 mask-half-2 bg-slate-200" title="perfect rating" />
        </div>
        <div class="overlay w-full absolute h-20 top-0 left-0 z-10"></div>
    </div>
</template>
<script setup>
defineProps({
  size: String,
  rating: Number
})
</script>