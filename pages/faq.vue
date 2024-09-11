<template>
    <div>
        <PageHeader>
            <h1 class="text-5xl text-blue-800">FAQ</h1>
            <h2 class="text-5xl font-medium">Frequently Ask Questions</h2>
            <h3 class="text-xl">Explore our FAQ section to find answers to common questions about Allied Analysis
                Consulting.</h3>
        </PageHeader>
        <!--<div class="w-full max-w-xl mx-auto py-12 text-center space-y-6">
             <h1 class="text-5xl text-blue-800">FAQ</h1>
            <h2 class="text-5xl font-medium">Frequently Ask Questions</h2> -->
        <!-- <h3 class="text-xl">Explore our FAQ section to find answers to common questions about Allied Analysis
                Consulting.</h3> 
        </div>-->
        <div class="w-full max-w-xl mx-auto flex flex-col gap-2 min-h-[30rem] justify-center">
            <div class="bg-base-200 collapse collapse-arrow" v-for="faq in faqList">
                <input type="checkbox" class="peer" />
                <div class="collapse-title text-xl">
                    {{ faq.name }}
                </div>
                <div class="collapse-content bg-primary peer-checked:bg-slate-200">
                    <p>{{ faq.name }}</p>
                </div>
            </div>
            <!-- <div class="bg-base-200 collapse collapse-arrow">
                <input type="checkbox" class="peer" />
                <div class="collapse-title text-xl">
                    How long does a typical engagement with Allied Analysis Consulting last?
                </div>
                <div class="collapse-content">
                    <p>The duration of our engagements varies based on the complexity of the project. We offer both
                        short-term and long-term consulting services tailored to your specific needs.</p>
                </div>
            </div>
            <div class="bg-base-200 collapse collapse-arrow">
                <input type="checkbox" class="peer" />
                <div class="collapse-title text-xl">
                    What makes Allied Analysis Consulting different from other consulting firms?
                </div>
                <div class="collapse-content">
                    <p>We stand out due to our focus on data-driven solutions and our unwavering commitment to
                        delivering measurable results. Our approach is highly personalized, ensuring that every solution
                        we provide is aligned with our clients' goals.</p>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
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
    },
]
</script>