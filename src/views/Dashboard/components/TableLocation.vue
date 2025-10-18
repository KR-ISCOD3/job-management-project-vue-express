<script setup>
    import { ref, computed, onMounted } from "vue";
    import { useLocationStore } from "@/stores/location";
    import { useToast } from "vue-toastification";

    const locationStore = useLocationStore()
    const isloading = ref(false)
    const toast = useToast();

    // Total fake items and pagination settings
    const perPage = 5;
    const currentPage = ref(1);

    // Total pages (computed dynamically based on fetched data)
    const totalPages = computed(() =>
        Math.ceil((locationStore.locations?.length || 0) / perPage)
    );

    // Generate rows for the current page
    const pageItems = computed(() => {
        const data = locationStore.locations || []; // ensure array
        const start = (currentPage.value - 1) * perPage;
        const end = start + perPage;
        return data.slice(start, end); // slice is safe now
    });

    function goToPage(page) {
        currentPage.value = page;
    }

    // for modal delete
    const showDeleteLocationModal = ref(false);
    const deleteId = ref(null);

    function openModalDelete(id) {
        deleteId.value = id;
        showDeleteLocationModal.value = true;
    }

    function closeModalDelete() {
        deleteId.value = null;
        showDeleteLocationModal.value = false;
    }

    async function confirmDelete() {
        // console.log("Delete job with ID:", deleteId.value);
        try{
            isloading.value = true
            await locationStore.deleteLocation(deleteId.value);
            await locationStore.fetchLocation();
            toast.success("Location delete successfully!");
        }catch(e){
            console.log('Message:',e)
        }finally{
            isloading.value = false
            closeModalDelete();
        }
    }


    // --- Modal Update ---
    const showUpLocationModal = ref(false);
    const updateLocation = ref({
        id:null,
        name:"",
        poscode:""
    })


    function openModalUpdate(loc) {
        updateLocation.value = {...loc}; // clone object so editing won't affect original
        showUpLocationModal.value = true;
    }

    function closeModalUpdate() {
        showUpLocationModal.value = false;
        updateJob.value = {};
    }

    async function saveUpdate() {
        // console.log('Your update data: ',updateLocation.value);
        try{
            isloading.value = true
            await locationStore.updateLocation(updateLocation.value);
            await locationStore.fetchLocation();
            toast.success("Location updated successfully!");
            closeModalUpdate();
        }catch(e){
            console.error("Update failed:", e);
        }finally{
            isloading.value = false
        }
    }

    onMounted(async () => {
        await locationStore.fetchLocation();       // wait for data to be fetched
        console.log(locationStore.locations);     // log the reactive state
    });

</script>

<template>

    <!-- Table-Data -->
    <div class="mt-3 h-[45vh] overflow-hidden">
        <table class="w-full border border-blue-900">

            <thead>
                <tr class="bg-white">
                <td class="text-gray-500 p-2 border text-center">#</td>
                <td class="text-gray-500 p-2 border ">ទីតាំង</td>
                <td class="text-gray-500 p-2 border text-center">Postcode</td>
                <td class="text-gray-500 p-2 border text-center">បានផុស</td>
                <td class="text-gray-500 p-2 border text-center">បានកែប្រែ</td>
                <td class="text-gray-500 p-2 border text-center">Action</td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(loc, index) in pageItems" :key="loc.id || index">
                    <td class="p-2 border border-gray-500 text-blue-900 text-center">
                        {{ index + 1 + (currentPage - 1) * perPage }}
                    </td>
                    <td class="p-2 border border-gray-500 text-blue-900">
                        <p>{{ loc.name }}</p>
                    </td>
                    <td class="p-2 border border-gray-500 text-blue-900 text-center">
                        <p>{{ loc.poscode }}</p>
                    </td>
                    <td class="p-2 border border-gray-500 text-blue-900 text-center">
                        <span class="bg-gray-200 text-gray-700 px-1 rounded-lg">{{ loc.created_at }}</span>
                    </td>
                    <td class="p-2 border border-gray-500 text-blue-900 text-center">
                        <span class="bg-gray-200 text-gray-700 px-1 rounded-lg">{{ loc.updated_at }}</span>
                    </td>
                    <td class="p-2 border border-gray-500 text-blue-900">
                        <div class="flex justify-center">
                            <button @click="openModalUpdate(loc)" class="mx-1 border p-1 rounded-lg border-amber-600 text-amber-600">
                                <v-icon name="bi-pen-fill" />
                            </button>
                            <button @click="openModalDelete(loc.id)" class="mx-1 border p-1 rounded-lg border-red-600 text-red-600">
                                <v-icon name="bi-trash" />
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>


        </table>
    </div> 
    <!-- Table-Data -->

    <!-- Pagination -->
    <div class="flex justify-end mt-3 gap-2">
        <button class="px-3 py-1 border rounded" :disabled="currentPage === 1" @click="currentPage--">
          Prev
        </button>

        <button v-for="page in totalPages" :key="page" class="px-3 py-1 border rounded" :class="{ 'bg-blue-900 text-white': currentPage === page }" @click="goToPage(page)">
          {{ page }}
        </button>
        <button class="px-3 py-1 border rounded" :disabled="currentPage === totalPages" @click="currentPage++">
           Next
        </button>
    </div>
    <!-- Pagination -->

    <!-- Modal delete -->
    <div v-if="showDeleteLocationModal" class="fixed inset-0 flex items-center justify-center bg-[#00000034]">
        <div class="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 class="text-lg font-bold mb-3 text-red-600 border-b border-gray-200 pb-2">លុប</h2>
            <form>
                <div>
                    <p class="mb-4">តើអ្នកប្រាកដថាលុបមែនឬទេ?</p>
                </div>

                <div class="flex justify-end gap-2 mb-4">
                    <button type="button" @click="closeModalDelete" class="px-3 py-1 border rounded">អត់ទេ</button>
                    <button :disabled="isloading"  type="button" @click="confirmDelete" :class="isloading ? 'px-3 py-1 border rounded bg-gray-400 text-white': 'px-3 py-1 border rounded bg-red-600 text-white'">
                        {{ isloading ? 'ចាំតិចបងដូចបងចាំគេ...' : 'យល់ព្រមណាបងសុំលាញ់' }}
                    </button>
                </div>
            </form>      
        </div>
    </div>
    <!-- Modal delete -->


    <!-- Modal Update -->
    <div v-if="showUpLocationModal" class="fixed inset-0 bg-[#00000034] flex items-center justify-center z-50">
        <div class="bg-white rounded-lg w-auto p-8">
            <h2 class="text-xl font-bold mb-4 border-b pb-2 border-gray-400">កែប្រែទីតាំង</h2>

            <form @submit.prevent="saveUpdate">
                <!-- location company -->
                <div class="flex justify-between mb-2">
                    <div class="mb-2 w-[400px] ">
                        <label class="text-gray-500">ទីតាំង</label>
                        <input  v-model="updateLocation.name" type="text" class="w-full border mt-1 p-2 rounded outline-0" placeholder="បញូលប្រភេទការងាររបស់ក្រុមហ៊ុន"/>
                    </div>
                </div>
                <!-- location company -->

                <!-- Post Code -->
                <div class="flex justify-between mb-2">
                    <div class="mb-2 w-[400px] ">
                        <label class="text-gray-500">PostCode</label>
                        <input v-model="updateLocation.poscode" type="text" class="w-full border mt-1 p-2 rounded outline-0" placeholder="00000"/>
                    </div>
                </div>
                <!-- Post Code -->

        
                <!-- button group -->
                <div class="flex justify-end gap-2 mt-4">
                    <button type="button" @click="closeModalUpdate" class="px-3 py-1 border rounded">Cancel</button>
                    <button :disabled="isloading" type="submit" @click="saveUpdate" :class="isloading ? `px-3 py-1 border rounded bg-gray-400 text-white`: 'px-3 py-1 border rounded bg-blue-900 text-white'">
                        {{ isloading ? 'ចាំតិចបងដូចបងចាំគេ...' : 'យល់ព្រមណាបងសុំលាញ់' }}
                    </button>
                </div>
                <!-- button group -->
            </form>
        </div>
    </div>
    <!-- Modal Update -->

</template>
