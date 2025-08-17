// this file is for setup route that can navigate to other page

// call library to create route from vue-router
import { createRouter, createWebHistory } from "vue-router";

// DashboardLayput + Page
import DashBoardLayout from "@/views/Dashboard/DashBoardLayout.vue";
import Home from "@/views/Dashboard/pages/Home.vue";
import Job from "@/views/Dashboard/pages/Job.vue";
import Category from "@/views/Dashboard/pages/Category.vue";
import Company from "@/views/Dashboard/pages/Company.vue";
import Location from "@/views/Dashboard/pages/Location.vue";


// make route for project
const routes = [
    {   
        path:'/dashboard', // slash dashboard navigate to DashBoardLayout
        component: DashBoardLayout, // is a layout that control all dashboard page and component
        children:[
            { path:'',component:Home }, // auto go to Home Page
            { path:'job',component:Job }, // slash job navigate Jobpage
            { path:'category',component:Category },  // slash category navigate categorypage
            { path:'location',component:Location }, // slash location navigate locationpage
            { path:'company',component:Company }, // slash company navigate companypage
            
        ]
    },
    {

    }
]

// create router for project
const router = createRouter({
    history: createWebHistory(), // preventer refresh page
    routes // take all routes to page
})

// export it for main.js
export default router;