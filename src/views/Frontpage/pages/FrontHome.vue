<script setup>
    import { ref } from 'vue';
    import { useAuthStore } from '@/stores/auth';
    import { useRouter } from 'vue-router';

    const authStore = useAuthStore();
    const router = useRouter();
    const Logout = async () =>{
        try{
            const res = await authStore.logout();
            console.log(res.data);
            router.push('login')
        }catch(e){

        }
    }
</script>
<template>
    <div>
        <h1>Welcome User</h1>
        <button
            @click="Logout"
            class="px-3 py-1 border rounded bg-red-600 text-white"
        >
            logout
        </button>
    </div>
</template>

<style lang="scss" scoped>

</style>