<template>
    <div class="min-h-screen">
        <PageHeader>
            <h1 class="text-5xl text-blue-800">Book an Appointment</h1>
        </PageHeader>
        <div class="divider"></div>
        <section class="grid grid-cols-1 md:grid-cols-2">
            <div class="text-area">
                <h1>Ready to take the next step?</h1>
                <p>
                    Schedule an appointment with Allied Analysis Consulting to discuss your business needs and explore
                    how our tailored solutions can drive your success. Choose a time that works best for you, and our
                    team will be ready to assist.
                </p>
                <h2>
                    What can I expect?
                </h2>
                <ul>
                <li>Customized strategies designed to meet your specific business needs.</li>
                <li>Access to a team of industry experts with extensive experience.</li>
                <li>Decisions informed by advanced analytics and thorough research.</li>
                <li>A partnership built on transparency, communication, and mutual goals.</li>
                <li>Focused on delivering outcomes that drive your business forward.</li>
                </ul>
            </div>
            <div class="form-container">
                <MultiStepForm :forms="forms" :steps="['Date','Time-slot','Contact info']" :submit-action="submitAction"/>
            </div>
        </section>
        <Reccomendation />
    </div>
</template>
<script setup lang="ts">
import Step1 from "../components/Multi/Step1.vue";
import Step2 from "../components/Multi/Step2.vue";
import Step3 from "../components/Multi/Step3.vue";

const forms = [Step1, Step2, Step3];

const submitAction = () => {
  console.log("submitting form...");
};
</script>