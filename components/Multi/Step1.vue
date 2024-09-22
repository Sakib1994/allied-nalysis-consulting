<template>
  <FormKit type="select" label="Select a Service" placeholder="Select a Service" name="service"
    :options="serviceList" validation="required" validation-visibility="dirty" />
  <FormKit type="date" value="2024-09-20" label="Select date" help="Enter your convinient date"
    validation="required|date_after:2024-09-19" validation-visibility="live" />
</template>
<script setup lang="ts">
const date = ref(new Date())
const serviceList = {
  policy_analysis: "Policy Analysis and Advocacy",
  market_entry_strategy: "Market Entry Strategy",
  government_relations: "Government Relations",
  risk_management: "Risk Management and Crisis",
  PR_campaigning: "PR Campaigning",
  international_relationship: "International Development",
  media_management: "Media Relation Management",
  brand_positioning: "Brand Positioning",
}
</script>