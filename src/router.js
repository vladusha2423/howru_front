import Vue from 'vue';
import Router from 'vue-router';
import Home from ''

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior,
    routes: [
        {
            path: '/',
            name: Routes.Home,
            component: Home,
        }
    ],
});
