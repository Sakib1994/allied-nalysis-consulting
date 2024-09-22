<template>
  <FormKit type="text" label="Name" prefix-icon="avatarMan" validation="required" />
  <FormKit type="email" label="Email" prefix-icon="email" validation="required|email" />
  <FormKit type="text" name="phone" label="Phone" prefix-icon="telephone" validation="required" />
  <FormKit type="text" name="address" label="Address" :prefix-icon="locationIcon" validation="required" />
  <FormKit type="text" name="city" label="City" :prefix-icon="locationIcon" validation="required" />
  <FormKit type="text" name="state" label="State" :prefix-icon="locationIcon" validation="required" />
  <FormKit type="textarea" name="notes" label="Notes" prefix-icon="fileDoc" placeholder="Remember to write in complete sentences."
    validation="length:0,120" validation-visibility="live" :validation-messages="{
      length: 'Instructions cannot be more than 120 characters.',
    }" />
  <!-- :help="`${value.instructions ? value.instructions.length : 0} / 120`" -->
</template>
<script lang="ts" setup>
const locationIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>
`
</script>