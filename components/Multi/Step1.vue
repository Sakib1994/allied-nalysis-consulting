<template>
  <div class="form-control max-w-sm mx-auto pt-4 min-h-[22rem]">
    <h2>Select a date</h2>
    <div >
      <client-only>
        <VDatePicker v-model="date" :disabledDates="disabledDates" expanded />
      </client-only>
    </div>
  </div>
</template>
<script setup lang="ts">
const date = ref(new Date())
const disabledDates = ref([
  {
    repeat: {
      weekdays: [1, 7],
    },
  },
]);
</script>