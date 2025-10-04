    import { defineStore } from "pinia";
    import api from "@/api/axios";

    export const useAuthStore = defineStore('auth',{
        // for create state
        state: () => ({
            user: null,
            isAuth: false,
            errorMessage: null,
        }),

        // for create function
        actions:{
            // function register
            async register(name,email,password){
                try{
                    // fetch api from route register 
                    const res = await api.post('/register',{name,email,password});
                    this.isAuth = true;
                    this.errorMessage = null;
                    return res.data
                }catch(err){
                    console.error(err);    
                }
            },
            async getProfile(){
                try{
                    const res = await api.get('/getProfile');
                    this.user = res.data.user;
                    this.isAuth = true;
                    this.errorMessage = null;
                    return res.data.user;
                }catch(e){
                    console.error(err);
                    this.user = null;
                    this.isAuth = false;

                    if (err.response && err.response.status === 401) {
                        this.errorMessage = "Not authenticated";
                    } else {
                        this.errorMessage = "Failed to fetch profile";
                    }
                }
            },
            async login(identifier,password){
                try{
                    // fetch api from route register 
                    const res = await api.post('/login',{identifier,password});
                    this.isAuth = true;
                    this.errorMessage = null;
                    return res.data
                }catch(err){
                    if (err.response && err.response.status === 400) {
                        this.errorMessage = err.response.data.message;
                    } else {
                        this.errorMessage = "Something went wrong, please try again.";
                    }
                }
            }
            
        }
    })
