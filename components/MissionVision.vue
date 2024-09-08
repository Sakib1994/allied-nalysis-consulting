<template>
    <div class="min-h-screen bg-slate-50">
        <div class="w-full bg-slate-700 text-slate-100 flex flex-col items-center">
            <div class="py-12 w-11/12 md:w-1/2 text-center space-y-4">
                <h2 class="text-2xl md:text-4xl">Mission - Driven, Vision - Focused</h2>
                <p class="text-lg md:text-xl">At Allied Analysis Consulting, our mission is to deliver personalized,
                    results-driven solutions that empower businesses to thrive. Guided by a vision to be the industry
                    leader, we are committed to continuous innovation and exceeding client expectations</p>
            </div>
        </div>
        <!-- Mission section -->
        <section class="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center p-4">
            <article class="service-card">
                <div class="card w-full lg:w-128 shadow-xl text-blue-900">
                    <div class="card-body">
                        <h2 class="card-title text-3xl">Our Expertise</h2>
                        <ul class="list-disc space-y-4 list-inside">
                            <li>
                                Mapping customer/consumer needs
                            </li>
                            <li>
                                Assessing AI opportunities and capabilities
                            </li>
                            <li>
                                Assessing market competitiveness
                            </li>
                            <li>
                                Developing innovation strategies
                            </li>
                            <li>Generating ideas and brainstorming</li>
                        </ul>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </article>
            <aside class="hidden lg:block py-12 -translate-x-8">
                <img src="/mission.webp" class="object-contain rounded-lg">
            </aside>
        </section>
        <!-- Approch section -->
        <section class="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
            <aside class="hidden lg:block py-12 translate-x-8">
                <img src="/approch.webp" class="object-contain rounded-lg">
            </aside>
            <article class="service-card">
                <div class="card w-full lg:w-128 bg-white shadow-xl text-blue-900">
                    <div class="card-body">
                        <h2 class="card-title text-3xl">Our Approach</h2>
                        <ul class="list-disc space-y-4 list-inside">
                            <li>
                                Research (quantitative & qualitative)
                            </li>
                            <li>
                                Data analysis and mining
                            </li>
                            <li>
                                Storytelling through synthesized insights
                            </li>
                            <li>
                                Mapping research and insights roadmaps
                            </li>
                            <li>Identifying cultural and market trends</li>
                        </ul>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </article>
        </section>
        <div class="w-full flex flex-col md:flex-row">
            <div class="w-2/3"></div>
            <div class="w-1/3"></div>
        </div>
    </div>
</template>