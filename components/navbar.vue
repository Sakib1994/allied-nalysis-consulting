<template>
    <!-- <div class="navbar bg-base-100">
        <div class="navbar-start">
            <img src="/allied_logo.png" alt="Company Logo" width="50">
            <a class="btn btn-ghost text-xl">Allied Analysis Consulting</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><a>Service</a></li>
                <li><a>FAQ</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn">Make An Appointment</a>
        </div>
    </div> -->
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="navbar bg-base-300 w-full">
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-6 w-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <img src="/allied_logo.png" alt="Company Logo" width="50">
                <div class="mx-2 flex-1 px-2">Allied Analysis Consulting</div>
                <div class="hidden flex-1 lg:block">
                    <ul class="menu menu-horizontal">
                        <li><a>Service</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div class="flex-none">
                    <a class="btn">Make An Appointment</a>
                </div>
            </div>
        </div>
        <div class="drawer-side z-50">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 min-h-full w-80 p-4">
                <li><a>Service</a></li>
                <li><a>FAQ</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    </div>
</template>