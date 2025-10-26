<script setup>
  // ------------------------- IMPORTS -------------------------
  import { useCategoryStore } from '@/stores/category'        // Pinia store for managing categories
  import TableCategory from '../components/TableCategory.vue' // Component to render category list
  import { ref } from 'vue'                                   // Vue reactivity
  import { useToast } from 'vue-toastification'               // Toast notifications

  // ------------------------- STATE -------------------------
  const showAddCategoryModal = ref(false)  // Modal visibility
  const category = ref('')                 // Input field for category
  const categoryStore = useCategoryStore() // Pinia store instance
  const toast = useToast()                 // Toast instance
  const isloading = ref(false)             // Loading state indicator
  const searchTerm = ref('')             // Loading state indicator

  // ------------------------- MODAL HANDLERS -------------------------
  function openModal() {
    showAddCategoryModal.value = true  // Show modal
  }
  function closeModal() {
    showAddCategoryModal.value = false // Hide modal
  }
  // ------------------------- FORM SUBMIT -------------------------
  const handleSubmit = async () => {
    try {
      isloading.value = true
      await categoryStore.createCategory(category.value) // Call Pinia action
      await categoryStore.fetchallcategory();
      closeModal()
      category.value = ''
      toast.success("Category added successfully") // Success message
    } catch (e) {
      toast.error(e.response?.data?.message || "Something went wrong") // Error message
    } finally {
      isloading.value = false
    }
  }
</script>

<template>
  <div class="py-4">
    <!-- ---------TITLE---------- -->
    <h1 class="text-2xl text-blue-900 font-bold my-2">ប្រភេទការងារ</h1>
    <p class="text-gray-500">អ្នកអាចបង្កើត និងគ្រប់គ្រងប្រភេទការងាររបស់ក្រុមហ៊ុន</p>
    <!-- ---------TITLE---------- -->

    <div class="w-full mt-4">
      <!-- ---------SEARCH & ADD BUTTON ROW---------- -->
      <div class="flex items-center justify-between w-full">
        <!-- Search Form -->
        <form class="border border-gray-500 rounded-lg pe-3">
          <input v-model="searchTerm" type="text" class="p-2 outline-0" placeholder="ស្វែងរក..." />
          <button :tabindex="-1"><v-icon name="bi-search" /></button>
        </form>

        <!-- Add Category Button -->
        <div>
          <button @click="openModal" class="border p-2 rounded-lg border-blue-900 text-blue-900 hover:bg-blue-800 hover:text-white transition">បន្ថែមប្រភេទការងារ</button>
        </div>
      </div>
      <!-- ---------SEARCH & ADD BUTTON ROW---------- -->

      <!-- Category Table -->
      <TableCategory :searchTerm="searchTerm" />

      <!-- ---------ADD CATEGORY MODAL---------- -->
      <div v-if="showAddCategoryModal" class="fixed inset-0 bg-[#00000034] flex items-center justify-center z-50">
        <div class="bg-white rounded-lg w-auto p-8">
          <h2 class="text-xl font-bold mb-4 border-b pb-2 border-gray-400">បន្ថែមប្រភេទការងារ</h2>

          <!-- Category Form -->
          <form @submit.prevent="handleSubmit()">
            <!-- Input Field -->
            <div class="flex justify-between">
              <div class="mb-2 w-[400px]">
                <label class="text-gray-500">ប្រភេទការងារ</label>
                <input v-model="category" type="text" class="w-full border mt-1 p-2 rounded outline-0" placeholder="បញូលប្រភេទការងាររបស់ក្រុមហ៊ុន" />
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex justify-end gap-2 mt-4">
              <!-- Cancel Button -->
              <button type="button" @click="closeModal" class="px-3 py-1 border rounded">Cancel</button>

              <!-- Save Button (Inline style + disable state) -->
              <button type="submit" :disabled="isloading" :class="isloading ? 'px-3 py-1 border rounded text-white transition bg-gray-400 cursor-not-allowed' : 'px-3 py-1 border rounded text-white transition bg-blue-900 hover:bg-blue-800'">
                {{ isloading ? 'ចាំតិចប្រូកំពុង Send ហើយ' : 'Save' }}
              </button>
            </div>
          </form>
          <!-- End Category Form -->
        </div>
      </div>
      <!-- ---------ADD CATEGORY MODAL---------- -->
    </div>
  </div>
</template>
