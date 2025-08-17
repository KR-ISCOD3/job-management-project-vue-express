<script setup>
import SideBar from './components/SideBar.vue';
import Header from './components/Header.vue';
</script>

<template>
    <div class="flex">
        <SideBar />

        <main class="lg:w-[85%] px-12 py-4">
            <Header />
            <router-view></router-view>
        </main>
    </div>
</template>