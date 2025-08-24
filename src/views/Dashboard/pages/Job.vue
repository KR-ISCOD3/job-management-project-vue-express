<script setup>

  import { ref } from 'vue';
  import TableJobs from '../components/TableJobs.vue';

  const showAddJobModal = ref(false);


  function openModal() {
    showAddJobModal.value = true;
  }
  function closeModal() {
    showAddJobModal.value = false;
  }


</script>
<template>
  <div class="py-4">
      <h1 class="text-2xl text-blue-900 font-bold my-2">ទំព័រការងារ</h1>
      <p class="text-gray-500">អ្នកអាចបង្កើត និងគ្រប់គ្រងឱកាសការងារសម្រាប់ប្រជាជនខ្មែរ</p>
      <div class="w-full mt-4">

        <div class="flex items-center justify-between w-full">
          <form action="" class="border border-gray-500 rounded-lg  pe-3">
            <input type="text" name="" id="" class="p-2 outline-0" placeholder="ស្វែងរក...">
            <button :tabindex="-1">
              <v-icon name="bi-search" />
            </button>
          </form>
          <div>
            <button @click="openModal" class="border p-2 rounded-lg border-blue-900 text-blue-900 hover:bg-blue-800 hover:text-white transition">
              បន្ថែមការងារ
            </button>
          </div>
        </div>
        
        <TableJobs/>

        <!-- Add Job Modal -->
        <div
          v-if="showAddJobModal"
          class="fixed inset-0 bg-[#00000034] flex items-center justify-center z-50"
        >
          <div class="bg-white rounded-lg w-auto p-8">
            <h2 class="text-xl font-bold mb-4">បន្ថែមការងារ</h2>

            <form>

              <!-- name / salary-range -->
              <div class="flex justify-between ">
                <div class="mb-2 w-1/2 me-2">
                  <label class="text-gray-500">ឈ្មោះការងារ</label>
                  <input type="text" class="w-full border mt-1 p-2 rounded outline-0" placeholder="បញូលឈ្មោះការងារ"/>
                </div>
                <div class="mb-2 w-1/2">
                  <label class="text-gray-500">ប្រាក់ខែ</label>
                  <input type="text" class="w-full border mt-1 p-2 rounded outline-0" placeholder="e.g: 400$ - 500$"/>
                </div>
              </div>
              <!-- name / salary-range -->

              
              <!-- description -->
              <div class="mb-2">
                <label class="text-gray-500">Description</label>
                <textarea rows="5" class="w-full border mt-1 rounded resize-none p-2 outline-0" placeholder="Job Descriptions"></textarea>
              </div>
              <!-- description -->

              <!-- job type -->
              <div class="mb-2 border-t border-gray-400 pt-2">
                <label class="text-gray-500">ប្រភេទការងារ</label>
                <select name="" id="" class="w-full border mt-1 rounded resize-none p-2 outline-0 appearance-none">
                  <option value="" selected disabled class="">ជ្រើសប្រភេទការងារ</option>
                  <option value="">Junior</option>
                  <option value="">Senior</option>
                  <option value="">Employee</option>
                </select>
              </div>
              <!-- job type -->

              <!-- company and location -->
              <div class="flex justify-between ">
                <div class="mb-2 w-1/2 me-2">
                  <label class="text-gray-500">ក្រុមហ៊ុន</label>
                  <select name="" id="" class="w-full border mt-1 rounded resize-none p-2 outline-0 appearance-none">
                    <option value="" selected disabled class="">ជ្រើសរើសក្រុមហ៊ុន</option>
                    <option value="">Jing Hub</option>
                    <option value="">Jab Hing</option>
                    <option value="">Jab Tea</option>
                  </select>
                </div>
                <div class="mb-2 w-1/2">
                  <label class="text-gray-500">ទីតាំង</label>
                  <select name="" id="" class="w-full border mt-1 rounded resize-none p-2 outline-0 appearance-none">
                    <option value="" selected disabled class="">ជ្រើសរើសទីតាំង</option>
                    <option value="">Phnom Penh</option>
                    <option value="">Kandal</option>
                    <option value="">Kompong Cham</option>
                  </select>
                </div>
              </div>
              <!-- company and location -->

              <!-- apply link -->
              <div class="mb-2">
                <label class="text-gray-500">ដំណរលីង</label>
                <input rows="5" class="w-full border mt-1 rounded p-2 outline-0" placeholder="Apply Link" />
              </div>
              <!-- apply link -->
              
              <!-- button group -->
              <div class="flex justify-end gap-2 mt-4">
                <button type="button" @click="closeModal" class="px-3 py-1 border rounded">Cancel</button>
                <button type="submit" class="px-3 py-1 border rounded bg-blue-900 text-white">Save</button>
              </div>
              <!-- button group -->
            </form>
          </div>
        </div>

      </div>
  </div>
</template>
