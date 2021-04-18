import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/Content.vue'
import CardDetails from '../components/CardDetails.vue'

Vue.use(Router);

export default new Router({
    mode:"history",
    routes:[
        {path:'/home',name:'home',component:Content},
        {path:'/cardDetails/:id',name:'cardDetails',component:CardDetails},
        {path:'/',redirect:'/home'}
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
      }
})