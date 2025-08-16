<script setup>
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
                <router-link>
                    <li class="hover:bg-blue-950 transition p-2 text-white rounded-lg flex items-center">
                        <v-icon name="md-dashboard-round" /> 
                        <p class="ms-1 mt-1">ទំព័រដើម</p>
                    </li>
                </router-link>
                <router-link>
                    <li class="hover:bg-blue-950 transition p-2 text-white rounded-lg flex items-center">
                        <v-icon name="md-workhistory" /> 
                        <p class="ms-1 mt-1">ការងារ</p>
                    </li>
                </router-link>
                 <router-link>
                    <li class="hover:bg-blue-950 transition p-2 text-white rounded-lg flex items-center">
                        <v-icon name="md-workspacesfilled" />
                        <p class="ms-1 mt-1">ប្រភេទ</p>
                    </li>
                </router-link>
                <router-link>
                    <li class="hover:bg-blue-950 transition p-2 text-white rounded-lg flex items-center">
                        <v-icon name="hi-solid-office-building" /> 
                        <p class="ms-1 mt-1">ក្រុមហ៊ុន</p>
                    </li>
                </router-link>
                <router-link>
                    <li class="hover:bg-blue-950 transition p-2 text-white rounded-lg flex items-center">
                        <v-icon name="bi-pin-map-fill"/> 
                        <p class="ms-1 mt-1">ទីតាំង</p>
                    </li>
                </router-link>
            </ul>
            <!-- Menu -->

            <!-- botton logout -->
            <div class="absolute bottom-0 w-full">
                <button class="bg-red-600 w-full rounded-sm py-1 text-white hover:bg-red-700 transition">
                    <v-icon name="hi-logout" /> ចាក់ចេញ
                </button>
            </div>
            <!-- botton logout -->

        </div>
        <!-- Content Sidebar -->

    </div>
</template>
