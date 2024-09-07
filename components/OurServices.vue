<template>
    <div class="min-h-screen bg-slate-700">
        <div class="w-full md:w-120 text-white mx-auto py-12 text-center prose space-y-4">
            <template v-if="pageType">
                <h1 class="text-3xl md:text-5xl">Our Solutions</h1>
            </template>
            <template v-else>
                <h1 class="text-3xl md:text-5xl">Our Service</h1>
                <h2 class="text-2xl md:text-4xl">Innovation in Every Steps.</h2>
            </template>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 py-12 w-11/12 mx-auto">
            <div v-for="service in serviceList" class="card bg-slate-100 flex-1 w-full shadow-xl service-card">
                <div class="card-body text-center">
                    <h2 class="card-title justify-center py-4">{{ service.title }}</h2>
                    <p>Expert analysis and strategic advocacy to navigate complex policies.</p>
                    <div class="card-actions justify-center pt-4">
                        <!-- 
                        z-10 bg-transparent border border-black min-h-12 px-4 rounded-lg
                        <button class="btn btn-outline hover:text-white">Book an appointment</button> -->
                        <button class="z-10 relative border-2 min-h-12 rounded-lg border-gray-800 bg-transparent py-2.5 px-5 uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">Book an appointment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    pageType?: string
}>()
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
        title: "Government Relations", description: "Build strong relationships with government entities. We assist in managing interactions and navigating regulatory environments.",
        img: "/img/government_relations_unsplash.webp"
    },
    {
        title: "Risk Management and Crisis", description: "Be prepared for the unexpected. We help you identify potential risks and develop strategies to mitigate them.",
        img: "/img/Risk_management.webp"
    },
    {
        title: "PR Campaigning", description: "Elevate your brand’s presence with targeted PR campaigns. We craft compelling messages that resonate with your audience.",
        img: "/img/PR_Campaigning.webp"
    },
    {
        title: "International Development", description: "Grow your business on a global scale. Our consultants offer expertise in international market expansion and development.",
        img: "/img/international_relationship.webp"
    },
    {
        title: "Media Relation Management", description: "Manage your media presence effectively. We handle media relations to ensure your brand is represented positively.",
        img: "/img/Media_management.webp"
    },
    {
        title: "Brand Positioning", description: "Define your brand’s unique identity. We help you articulate your vision, mission, and values to stand out in the market.",
        img: "/img/Brand_Positioning.webp"
    },
]
</script>