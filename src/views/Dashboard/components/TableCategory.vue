<script setup>
    // ------------------------- IMPORTS -------------------------
    import { useCategoryStore } from "@/stores/category";
    import { ref, computed, onMounted } from "vue";

    // ------------------------- PROPS -------------------------
    // Instead of using defineStore (which is wrong here), use defineProps
    // because this is a component, not a store.
    const props = defineProps({
        searchTerm: { type: String, default: "" }, // Search input from parent
    });

    // ------------------------- STATE -------------------------
    const perPage = 5;                // Items per page
    const currentPage = ref(1);       // Current active page
    const categoryStore = useCategoryStore(); // Access Pinia store

    // ------------------------- FILTER & PAGINATION -------------------------
    const filterCategory = computed(() => {
        if (!props.searchTerm) return categoryStore.categories;
        
        return categoryStore.categories.filter((cat) =>
            cat.category.toLowerCase().includes(props.searchTerm.toLowerCase())
        );
    });

    const totalPages = computed(() => Math.ceil(filterCategory.value.length / perPage));

    const pageItems = computed(() => {
    const start = (currentPage.value - 1) * perPage;
        return filterCategory.value.slice(start, start + perPage);
    });

    function goToPage(page) {
        currentPage.value = page;
    }

    // ------------------------- DELETE MODAL -------------------------
    const showDeleteCategoryModal = ref(false);
    const deleteId = ref(null);

    function openModalDelete(id) {
        deleteId.value = id;
        showDeleteCategoryModal.value = true;
    }

    function closeModalDelete() {
        deleteId.value = null;
        showDeleteCategoryModal.value = false;
    }

    async function confirmDelete() {
    console.log("Delete category with ID:", deleteId.value);
    // TODO: replace with real delete function: await categoryStore.deleteCategory(deleteId.value);
    closeModalDelete();
    }

    // ------------------------- UPDATE MODAL -------------------------
    const showUpdateCategoryModal = ref(false);
    const updateCategory = ref({});

    function openModalUpdate(cat) {
        updateCategory.value = { ...cat }; // clone category object
        showUpdateCategoryModal.value = true;
    }

    function closeModalUpdate() {
        showUpdateCategoryModal.value = false;
        updateCategory.value = {};
    }

    async function saveUpdate() {
        console.log("Update category:", updateCategory.value);
        // TODO: replace with real update call: await categoryStore.updateCategory(updateCategory.value);
        showUpdateCategoryModal.value = false;
    }

    // ------------------------- FETCH CATEGORIES -------------------------
    onMounted(async () => {
        try {
            await categoryStore.fetchallcategory();
        } catch (e) {
            console.log("Error fetching categories:", e);
        }
    });
</script>

<template>
  <!-- ------------------------- TABLE ------------------------- -->
  <div class="mt-3 h-[45vh] overflow-hidden">
    <table class="w-full border border-blue-900">
      <thead>
        <tr class="bg-white">
          <td class="text-gray-500 p-2 border text-center">#</td>
          <td class="text-gray-500 p-2 border">ប្រភេទការងារ</td>
          <td class="text-gray-500 p-2 border text-center">បានផុស</td>
          <td class="text-gray-500 p-2 border text-center">បានកែប្រែ</td>
          <td class="text-gray-500 p-2 border text-center">Action</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(cat, index) in pageItems" :key="cat.id">
          <td class="p-2 border text-blue-900 text-center">
            {{ index + 1 + (currentPage - 1) * perPage }}
          </td>
          <td class="p-2 border text-blue-900">{{ cat.category }}</td>
          <td class="p-2 border text-blue-900 text-center">
            <span class="bg-gray-200 text-gray-700 px-1 rounded-lg">{{ cat.created_at }}</span>
          </td>
          <td class="p-2 border text-blue-900 text-center">
            <span class="bg-gray-200 text-gray-700 px-1 rounded-lg">{{ cat.updated_at }}</span>
          </td>
          <td class="p-2 border text-blue-900">
            <div class="flex justify-center">
              <button @click="openModalUpdate(cat)" class="mx-1 border p-1 rounded-lg border-amber-600 text-amber-600">
                <v-icon name="bi-pen-fill" />
              </button>
              <button @click="openModalDelete(cat.id)" class="mx-1 border p-1 rounded-lg border-red-600 text-red-600">
                <v-icon name="bi-trash" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ------------------------- PAGINATION ------------------------- -->
  <div class="flex justify-end mt-3 gap-2">
    <button class="px-3 py-1 border rounded" :disabled="currentPage === 1" @click="currentPage--">Prev</button>

    <button v-for="page in totalPages" :key="page" class="px-3 py-1 border rounded" :class="{ 'bg-blue-900 text-white': currentPage === page }" @click="goToPage(page)">
      {{ page }}
    </button>

    <button class="px-3 py-1 border rounded" :disabled="currentPage === totalPages" @click="currentPage++">Next</button>
  </div>

  <!-- ------------------------- DELETE MODAL ------------------------- -->
  <div v-if="showDeleteCategoryModal" class="fixed inset-0 flex items-center justify-center bg-[#00000034]">
    <div class="bg-white p-5 rounded-lg shadow-lg w-96">
      <h2 class="text-lg font-bold mb-3 text-red-600 border-b border-gray-200 pb-2">លុប</h2>
      <p class="mb-4">តើអ្នកប្រាកដថាលុបមែនឬទេ?</p>
      <div class="flex justify-end gap-2">
        <button @click="closeModalDelete" class="px-3 py-1 border rounded">អត់ទេ</button>
        <button @click="confirmDelete" class="px-3 py-1 border rounded bg-red-600 text-white">បាទ</button>
      </div>
    </div>
  </div>

  <!-- ------------------------- UPDATE MODAL ------------------------- -->
  <div v-if="showUpdateCategoryModal" class="fixed inset-0 bg-[#00000034] flex items-center justify-center z-50">
    <div class="bg-white rounded-lg w-auto p-8">
      <h2 class="text-xl font-bold mb-4 border-b pb-2 border-gray-400">កែប្រែប្រភេទការងារ</h2>

      <form @submit.prevent="saveUpdate">
        <div class="flex justify-between">
          <div class="mb-2 w-[400px] me-2">
            <label class="text-gray-500">ប្រភេទការងារ</label>
            <input v-model="updateCategory.category" type="text" class="w-full border mt-1 p-2 rounded outline-0" placeholder="បញ្ចូលប្រភេទការងាររបស់ក្រុមហ៊ុន" />
          </div>
        </div>

        <div class="flex justify-end gap-2 mt-4">
          <button type="button" @click="closeModalUpdate" class="px-3 py-1 border rounded">Cancel</button>
          <button type="submit" class="px-3 py-1 border rounded bg-blue-900 text-white">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
