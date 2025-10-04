<script setup>
import { onMounted, ref } from 'vue';
import NotFoundPage from './components/NotFoundPage.vue';
import LoadingPage from './components/LoadingPage.vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const identifier = ref("");
const password = ref("");

const isLoading = ref(false)

const handelLogin = async () =>{
    try{
        isLoading.value = true
        await authStore.login(identifier.value,password.value);
        const user = await authStore.getProfile();
        console.log(user);
        
        if(authStore.user?.role == 'user'){
            router.push('/')
        }else{
            router.push('/dashboard')
        } 

    }catch(e){
        console.error("message: ",e);   
    }finally{
        isLoading.value = false
        // if(authStore.isLogin){
        //     alert("✅ Login Success");
        // }
    }
}

onMounted(async () =>{
    await authStore.getProfile();
    // If already logged in, redirect to dashboard
    console.log(authStore.user);

    // if(authStore.user?.role === 'user'){
    //     router.push('/')
    // }else{
    //     router.push('/dashboard')
    // }   
    
})

</script>
<template>
    <div class="w-full h-[100vh] flex items-center justify-center">

        <LoadingPage :class="isLoading ? 'block': 'hidden'"/>
        
        <div class="w-[30%] hidden lg:block border border-blue-900  rounded-sm p-10 text-center">
            <h2 class="text-4xl font-bold text-blue-900">ចូលប្រព័ន្ធ</h2>
            
            <p class="mt-3 text-gray-500">បញ្ចូលព័ត៍មានរបស់អ្នក</p>

            <!-- prevent = e.preventDefault() prevent reload -->
            <form @submit.prevent="handelLogin" class="mt-5">

                 <!-- Error message -->
                <p v-if="authStore.errorMessage" class="text-red-500 bg-red-200 py-2 rounded-sm mb-2">
                    {{ authStore.errorMessage }}
                </p>

                <input v-model="identifier" required type="text" name="" id="" placeholder="ឈ្មោះក៏បាន អ៊ីមែលក៏បាន តែហាមឈ្មោះសង្សារចាស់" class="w-full border-b border-blue-900 py-2 outline-0 mb-3">
                <input v-model="password" required type="password" name="" id="" placeholder="សង្ស័យភ្លេចលេខសម្ងាត់ហើយ" class="w-full border-b border-blue-900 py-2 outline-0 mb-3">

                
                <button class="w-full border p-2 border-blue-900 text-blue-900 hover:bg-blue-800 hover:text-white transition mt-2">
                    ចូលបានហាមចេញ
                </button>

                <p class="mt-6 text-gray-500">
                    អត់ទាន់មានគណនីផងប្រូ មក
                    <router-link to="/register" class="text-blue-500 underline hover:text-blue-700 transition">
                        បង្កើតគណនី
                    </router-link>
                    សិន​មក
                </p>
            </form>
        </div>

        <NotFoundPage/>
    </div>
</template>
