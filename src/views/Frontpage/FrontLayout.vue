
<script setup>
    import { useAuthStore } from '@/stores/auth';
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    const authStore = useAuthStore();
    const roruter = useRouter();
    
    onMounted(()=>{
        console.log(authStore.isAuth);
        
        if(!authStore.isAuth){
            roruter.push('/register')
        }
    })

</script>

<template>
    <div>
        <router-view></router-view>
    </div>
</template>



<style lang="scss" scoped>

</style>