<script setup>
import JobLineChart from '../components/JobLineChart.vue';
import CardDashboard from '../components/CardDashboard.vue';
import JobOverview from '../components/JobOverview.vue';
</script>

<template>
  <div class="py-4">
    <!-- Dashboard Title -->
    <p class="text-2xl my-2 font-bold  text-blue-900">ប្រព័ន្ធគ្រប់គ្រងការងារ</p>
    <p class="text-gray-500">ខាងក្រោមនេះគឺជាការវិភាគទៅលើប្រព័ន្ធ</p>

    <!-- Dashboard Cards -->
    <CardDashboard/>

    <div class="flex mt-5 justify-between">
      <div class="w-[50%]">
        <JobLineChart/>
      </div>
      <div class="w-[48%]">
        <JobOverview/>
      </div>
    </div>
  </div>
</template>
