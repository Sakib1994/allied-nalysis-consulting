<template>
  <div class="w-full min-h-[22rem]">
    <h2>Select a time on {{ (new Date()).toLocaleString() }}</h2>
    <FormKit name="time-slot" type="radio" label="Preferred Time slot" :options="{
      t0900: '09:00 AM',
      t1000: '10:00 AM',
      t1100: '11:00 AM',
      t1200: '12:00 PM',
      t1300: '01:00 PM',
      t1400: '02:00 PM',
      t1500: '03:00 PM',
      t1600: '04:00 PM',
      t1700: '05:00 PM',
    }" help="Select a time slot" validation="required" validation-visibility="dirty" />
  </div>
</template>