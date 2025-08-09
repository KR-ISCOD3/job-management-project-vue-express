<script setup>

</script>

<template>
    <div class="w-[15%] h-[100vh] bg-blue-900 sticky top-0 p-5">

        <!-- Content Sidebar -->
        <div class="w-full h-full ">
            <!-- Logo Website -->
            <div class="w-full text-center border-b-1 border-gray-400 py-2">
                <img src="../../../assets/image/logo.png" alt="" class="w-[100px] mx-auto">
                <h1 class="text-xl text-white font-medium mt-2">ETEC-JOB</h1>
                <p class="text-sm text-gray-400">Work with Us not <br> with Thai</p>
            </div>
            <!-- Logo Website -->

            <!-- Menu -->
            <ul class="mt-3">
                <router-link>
                    <li class="hover:bg-blue-950 transition p-2 text-white rounded-lg">
                        Dashboard
                    </li>
                </router-link>
            </ul>
            <!-- Menu -->

        </div>
        <!-- Content Sidebar -->

    </div>
</template>