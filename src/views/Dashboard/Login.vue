<script setup lang="ts">
import NotFoundPage from './components/NotFoundPage.vue';

</script>


<template>
    <div class="w-full h-[100vh] items-center justify-center">
        <div class="w-[30%] hidden lg:block border border-blue-900  rounded-sm p-10 text-center">
            <h2 class="text-4xl font-bold text-blue-900">ចូលប្រព័ន្ធ</h2>
            
            <p class="mt-3 text-gray-500">បញ្ចូលព័ត៍មានរបស់អ្នក</p>

            <form action="" class="mt-5">

                <!-- <p class="text-red-500 bg-red-200 py-2 rounded-sm mb-2">Invalid some filde</p> -->

                <input required type="text" name="" id="" placeholder="ឈ្មោះឬអីម៉ែល" class="w-full border-b border-blue-900 py-2 outline-0 mb-3">
                <input required type="password" name="" id="" placeholder="លេខសម្ងាត់" class="w-full border-b border-blue-900 py-2 outline-0 mb-3">

                
                <button class="w-full border p-2 border-blue-900 text-blue-900 hover:bg-blue-800 hover:text-white transition mt-2">
                    តោះចូល
                </button>

                <p class="mt-6 text-gray-500">
                    បើអត់ទាន់មានគនណីសូមបង្កើតសិនមក ប្រូ
                    <router-link to="/register" class="text-blue-500 underline hover:text-blue-700 transition">
                        បង្កើតគនណី
                    </router-link>
                </p>
            </form>
        </div>
        <NotFoundPage/>
    </div>
</template>
