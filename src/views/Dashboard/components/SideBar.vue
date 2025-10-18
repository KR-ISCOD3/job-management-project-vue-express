<script setup>
    import { ref } from 'vue';
    import { useAuthStore } from '@/stores/auth';

    const logoutModal = ref(false);
    const authStore = useAuthStore();

    function openModal(){
        logoutModal.value = true
    }
    function closeModal(){
        logoutModal.value = false
    }

    const Logout = async () =>{
        try{
            const res = await authStore.logout();
            console.log(res.data);
        }catch(e){

        }
    }

</script>

<template>
    <div class="w-[15%] h-[100vh] bg-blue-900 sticky top-0 p-5">

        <!-- Content Sidebar -->
        <div class="w-full h-full relative">
            <!-- Logo Website -->
            <div class="w-full text-center border-b-1 border-gray-400 py-2">
                <img src="../../../assets/image/logo.png" alt="" class="w-[100px] mx-auto">
                <h1 class="text-xl text-white font-medium mt-2 font-fira">ETEC-JOB</h1>
                <p class="text-sm text-gray-300 mt-1 leading-6">ធ្វើការជាមួយពួកយើង<br> មិនមែនជាមួយថៃ</p>
            </div>
            <!-- Logo Website -->

            <!-- Menu -->
            <ul class="mt-3">
                <router-link to="/dashboard">
                    <li class="hover:bg-blue-950 transition p-2 text-white rounded-lg flex items-center">
                        <v-icon name="md-dashboard-round" /> 
                        <p class="ms-1 mt-1">ទំព័រដើម</p>
                    </li>
                </router-link>
                <router-link to="/dashboard/job">
                    <li class="hover:bg-blue-950 transition p-2 text-white rounded-lg flex items-center">
                        <v-icon name="md-workhistory" /> 
                        <p class="ms-1 mt-1">ការងារ</p>
                    </li>
                </router-link>
                 <router-link to="/dashboard/category">
                    <li class="hover:bg-blue-950 transition p-2 text-white rounded-lg flex items-center">
                        <v-icon name="md-workspacesfilled" />
                        <p class="ms-1 mt-1">ប្រភេទ</p>
                    </li>
                </router-link>
                <router-link to="/dashboard/company">
                    <li class="hover:bg-blue-950 transition p-2 text-white rounded-lg flex items-center">
                        <v-icon name="hi-solid-office-building" /> 
                        <p class="ms-1 mt-1">ក្រុមហ៊ុន</p>
                    </li>
                </router-link>
                <router-link to="/dashboard/location">
                    <li class="hover:bg-blue-950 transition p-2 text-white rounded-lg flex items-center">
                        <v-icon name="bi-pin-map-fill"/> 
                        <p class="ms-1 mt-1">ទីតាំង</p>
                    </li>
                </router-link>
            </ul>
            <!-- Menu -->

            <!-- botton logout -->
            <div class="absolute bottom-0 w-full">
                <button @click="openModal" class="bg-red-600 w-full rounded-sm py-1 text-white hover:bg-red-700 transition">
                    <v-icon name="hi-logout" /> ចាកចេញ
                </button>
            </div>
            <!-- botton logout -->

        </div>
        <!-- Content Sidebar -->


        <!-- Modal Logout -->
        <div
            v-if="logoutModal"
            class="fixed inset-0 flex items-center justify-center bg-[#00000034]"
        >
            <div class="bg-white p-5 rounded-lg shadow-lg w-[400px]">

            <h2 class="text-lg font-bold mb-3 text-red-600 border-b border-gray-200 pb-2">ចាកចេញ</h2>
            <form action="" class="flex items-center justify-between">
                <div>
                <p class="mb-4">តើអ្នកប្រាកដថាចាកចេញមែនឬទេ?</p>
                </div>

                <div class="flex justify-end gap-2 mb-4">
                <button @click="closeModal" class="px-3 py-1 border rounded">អត់ទេ</button>
                <button
                    @click="Logout"
                    class="px-3 py-1 border rounded bg-red-600 text-white"
                >
                    បាទ
                </button>
                </div>
            </form>
            
            </div>
        </div>
        <!-- Modal Logout -->

    </div>

</template>
