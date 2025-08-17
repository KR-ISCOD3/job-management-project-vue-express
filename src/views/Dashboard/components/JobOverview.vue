<template>
    <div class="p-2 text-blue-900">
        <p class="font-bold text-lg pb-5">តម្រូវការការងាររបស់ក្រុមហ៊ុន</p>

        <div class="w-full h-[300px] overflow-y-auto pt-2 border-t border-gray-300">
            <table class="w-full">
                <tr v-for="i in 10" :key="i" class="border-b border-gray-300">
                <td class="w-[60px] pb-2">
                    <div class="h-[60px] bg-gray-500">
                    <img src="" alt="" class="w-full h-full object-cover" />
                    </div>
                </td>
                <td class="font-fira pl-2 pb-2">
                    <p class="font-bold">Frontend Developer</p>
                    <p class="text-gray-400">Chipmong Land</p>
                </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>

</script>

