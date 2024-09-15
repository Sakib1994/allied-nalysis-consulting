<template>
    <div class="w-full md:w-11/12 mx-auto">
        <ul class="steps min-w-full">
            <li v-for="(stepText, index) in props.steps" class="step" :class="index <= step ? 'step-primary' : ''">
                {{ stepText }}
            </li>
        </ul>
        <div class="py-3"></div>
        <form @submit.prevent="formAction" class="min-w-full px-6">
            <Transition>
                <component :is="props.forms[step]"></component>
            </Transition>
            <div class="py-4"></div>
            <div class="flex justify-between">
                <button class="btn btn-outlined" type="button" v-if="step !== 0" @click="step--">Back</button>
                <button class="btn btn-primary ml-auto" type="submit"
                    v-if="step !== props.steps.length - 1">Next</button>
                <button class="btn btn-primary" type="submit" v-if="step == props.steps.length - 1">Book an
                    Appointment</button>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import Step1 from "./Step1.vue"

let step = ref(0);
const props = defineProps<{
    forms: typeof Step1[],
    steps: string[],
    submitAction: () => void
}>()

const formAction = () => {
    if (step.value !== props.steps.length - 1) return step.value++
    props.submitAction()
}
</script>