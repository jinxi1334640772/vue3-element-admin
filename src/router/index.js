import vue from 'vue';
import vueRouter from 'vue-router';
import routes from './routes.js';
vue.use(vueRouter)
const router = new vueRouter({
    mode:'history',
    routes,
})
export default router;