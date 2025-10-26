import { defineStore } from "pinia";
import api from "@/api/axios";

export const useCategoryStore = defineStore('category',{
    // initailize state
    state: () => ({
        categories: [],
        category: null,
        errorMessage: null
    }),

    // function 
    actions:{
        // fetch route create category
        async createCategory(category){
            try{
                const res = await api.post('/category',{category});
                this.categories.push(res.data);
                return res.data;
            }catch(e){
                this.errorMessage = err.response?.data?.message || "Failed to create location.";
            }
        },
        
        // fetch route get category
        async fetchallcategory(){
            try{
                const res = await api.get('/category');
                this.categories = res.data?.data;
                return res.data;
            }catch(e){
                this.errorMessage = err.response?.data?.message || "Failed to create location.";
            }
        },
        // 
        async updatecategory(categoryData){
            try{
                const {id,category} = categoryData
                const res = await api.put(`/category/${id}`,{category});
                this.categories.push(res.data);
                return res.data;
            }catch(e){
                this.errorMessage = err.response?.data?.message || "Failed to create location.";
            }
        },

        async deleteCategory(id) {
            try{
                const res = await api.delete(`/category/${id}`);
                return res.data;
            }catch(e){
                this.errorMessage = err.response?.data?.message || "Failed to create location.";
            }
        }
       
    }
})