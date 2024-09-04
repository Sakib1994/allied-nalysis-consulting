<template>
    <!-- <footer class="footer bg-slate-700 text-base-content p-10 grid-cols-1 md:grid-cols-4"> -->
    
    <footer class="footer bg-slate-700 text-base-content p-10 grid-cols-3 lg:grid-cols-4 border-b-2 border-slate-400">
        <aside class="text-neutral-100 space-y-4 hidden lg:block">
            <img src="/allied_logo_large.png" alt="Large company logo" width="200">
            <div class="flex space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-12">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <p>
                    Customer Support Mail
                    <br />
                    aacwebsite2024@gmail.com
                </p>
            </div>
        </aside>
        <!-- <div class="links-group col-span-1 md:col-span-3 grid-flow-col"> -->
        <nav class="text-neutral-100 transition-colors grid grid-cols-1">
            <h6 class="footer-title text-xl text-[#F1C963] opacity-100">Services</h6>
            <NuxtLink to="/service" class="link link-hover hover:text-yellow-300 text-lg">
                Policy Analysis
            </NuxtLink>
            <NuxtLink to="/service" class="link link-hover hover:text-yellow-300 text-lg">Market Entry Strategy
            </NuxtLink>
            <NuxtLink to="/service" class="link link-hover hover:text-yellow-300 text-lg">Brand Positioning</NuxtLink>
            <NuxtLink to="/service" class="link link-hover hover:text-yellow-300 text-lg">Media Management</NuxtLink>
        </nav>
        <nav class="text-neutral-100 grid grid-cols-1">
            <h6 class="footer-title text-xl text-[#F1C963] opacity-100">Company</h6>
            <NuxtLink to="/" class="link link-hover hover:text-yellow-300 text-lg">Home</NuxtLink>
            <NuxtLink to="/service" class="link link-hover hover:text-yellow-300 text-lg">Service</NuxtLink>
            <NuxtLink to="/faq" class="link link-hover hover:text-yellow-300 text-lg">FAQ</NuxtLink>
            <NuxtLink to="/contact" class="link link-hover hover:text-yellow-300 text-lg">Contact</NuxtLink>
        </nav>
        <nav class="text-neutral-100 grid grid-cols-1">
            <h6 class="footer-title text-xl text-[#F1C963] opacity-100">Address</h6>
            <a class="link link-hover hover:text-yellow-300 text-lg">1130 16th St NW</a>
            <a class="link link-hover hover:text-yellow-300 text-lg">Washington DC</a>
        </nav>
        <!-- </div> -->
    </footer>
    <footer class="footer bg-slate-700 text-base-content place-items-center px-10 py-4">
        <aside class="grid-flow-col items-center text-neutral-100">
            <p>
                Copyright © 2024 Allied Analysis Consulting, All rights reserved.
            </p>
        </aside>
    </footer>
</template>