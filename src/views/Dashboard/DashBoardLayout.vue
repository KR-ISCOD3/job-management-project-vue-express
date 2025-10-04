<script setup>
    import SideBar from './components/SideBar.vue';
    import Header from './components/Header.vue';
    import NotFoundPage from './components/NotFoundPage.vue';
</script>

<template>
    <div class="hidden lg:flex">
        <SideBar />

        <main class="lg:w-[85%] px-12 py-4">
            <Header />
            <router-view></router-view>
        </main>
    </div>
    <NotFoundPage/>
</template>