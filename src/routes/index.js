import HomeView from '../views/HomeView.vue'
import TestView from "../views/TestView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/test',
        name: 'test',
        component: TestView
    }
    ]


export default routes
