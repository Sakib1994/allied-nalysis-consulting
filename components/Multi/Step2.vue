<template>
  <div class="w-full min-h-[22rem]">
    <h2>Select a time on {{ (new Date()).toLocaleString() }}</h2>
    <div class="grid grid-cols-2 gap-4">
      <div class="join join-vertical">
        <button class="btn join-item">09:00 AM - 10:00 AM</button>
        <button class="btn join-item">09:30 AM - 10:30 AM</button>
        <button class="btn join-item">10:00 AM - 11:00 AM</button>
        <button class="btn join-item">10:30 AM - 11:30 AM</button>
        <button class="btn join-item">11:00 AM - 12:00 PM</button>
        <button class="btn join-item">11:30 AM - 12:30 PM</button>
      </div>
      <div class="join join-vertical">
        <button class="btn join-item">01:00 PM - 02:00 PM</button>
        <button class="btn join-item">01:30 PM - 02:30 PM</button>
        <button class="btn join-item">02:00 PM - 03:00 PM</button>
        <button class="btn join-item">02:30 PM - 03:30 PM</button>
        <button class="btn join-item">03:00 PM - 04:00 PM</button>
        <button class="btn join-item">04:00 PM - 05:30 PM</button>
      </div>
    </div>
  </div>
</template>