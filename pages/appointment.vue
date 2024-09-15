<template>
    <div class="min-h-screen">
        <PageHeader>
            <h1 class="text-5xl text-blue-800">Book an Appointment</h1>
        </PageHeader>
        <section class="appintment-container py-12 bg-slate-700 text-slate-50">
            <div class="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 mx-auto">
                <div class="text-area px-4 md:px-8 flex flex-col justify-center">
                    <h1 class="text-4xl py-4">Ready to take the next step?</h1>
                    <p>
                        Schedule an appointment with Allied Analysis Consulting to discuss your business needs and
                        explore
                        how our tailored solutions can drive your success. Choose a time that works best for you, and
                        our
                        team will be ready to assist.
                    </p class="text-lg">
                    <h2 class="text-3xl pt-8 pb-6">
                        What can I expect?
                    </h2>
                    <ul class="text-lg">
                        <li>Customized strategies designed to meet your specific business needs.</li>
                        <li>Access to a team of industry experts with extensive experience.</li>
                        <li>Decisions informed by advanced analytics and thorough research.</li>
                        <li>A partnership built on transparency, communication, and mutual goals.</li>
                        <li>Focused on delivering outcomes that drive your business forward.</li>
                    </ul>
                </div>
                <div class="form-container">
                    <MultiStepForm :forms="forms" :steps="['Date', 'Time-slot', 'Contact info']"
                        :submit-action="submitAction" />
                </div>
            </div>
        </section>
        <Reccomendation />
        <dialog ref="my_modal_1" class="modal">
            <div class="modal-box">
                <h3 class="text-lg font-bold">Thanks for your Time</h3>
                <p class="py-4">We will contact with you soon.</p>
                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
</template>
<script setup lang="ts">
import Step1 from "../components/Multi/Step1.vue";
import Step2 from "../components/Multi/Step2.vue";
import Step3 from "../components/Multi/Step3.vue";

const forms = [Step1, Step2, Step3];
const my_modal_1 = ref(null);

const submitAction = () => {
    console.log("submitting form...");
    alert("We will contact with sou soon!")
};
</script>