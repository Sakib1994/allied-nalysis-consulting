<template>
    <div class="w-full md:w-11/12 mx-auto">
        <FormKit type="form" :actions="false">
            <FormKit type="multi-step" tab-style="tab">
                <FormKit type="step" name="Date">
                    <Step1 />
                </FormKit>

                <FormKit type="step" name="Time slot">
                    <Step2 />
                </FormKit>

                <FormKit type="step" name="Contact Info">
                    <!-- component for example brevity. -->
                    <Step3 />

                    <!-- using step slot for submit button-->
                    <template #stepNext>
                        <FormKit type="submit" />
                    </template>
                </FormKit>
            </FormKit>
        </FormKit>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
import Step3 from "./Step3.vue";

let step = ref(0);
// const props = defineProps<{
//     forms: typeof Step1[],
//     steps: string[],
//     submitAction: () => void
// }>()

// const formAction = () => {
//     if (step.value !== props.steps.length - 1) return step.value++
//     props.submitAction()
// }
</script>
<style scoped>

</style>