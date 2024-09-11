<template>
    <div class="bg-slate-100 pb-12">
        <div class="w-full md:w-120 text-slate-800 mx-auto py-12 pt-20 text-center prose space-y-4">
            <h2 class="text-3xl md:text-5xl">We help bussiness to grow</h2>
            <h3 class="text-2xl md:text-3xl">faster and bigger</h3>
        </div>
        <div class="max-w-screen-xl grid pt-8 pb-12 grid-cols-1 lg:grid-cols-3 gap-4 p-2 w-11/12 mx-auto">
            <div v-for="rec in reccomendations" :key="rec.title" class="card w-full bg-neutral-700 text-neutral-content service-card">
                <div class="card-body items-center text-neutral-50">
                    <div class="card-title justify-center items-center text-5xl pb-4">
                        {{ rec.rating }}
                    </div>
                    <Rating :size="'md'" :rating="rec.rating" />
                    <h2 class="text-2xl text-center">
                        {{ rec.title }}
                    </h2>
                    <p class="text-lg text-center">
                        {{ rec.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
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
])
</script>