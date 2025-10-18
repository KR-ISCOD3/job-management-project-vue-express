<script setup>
    import SideBar from './components/SideBar.vue';
    import Header from './components/Header.vue';
    import NotFoundPage from './components/NotFoundPage.vue';

    
    import { useAuthStore } from '@/stores/auth';
    import { useRouter } from 'vue-router';
    import { onMounted } from 'vue';


    const authStore = useAuthStore();
    const router = useRouter()

    onMounted(() => {
      // ✅ If no user or role is not 'admin', redirect to login
      if (!authStore.user || authStore.user.role !== 'admin') {
        router.push('/login');
      }
    });

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