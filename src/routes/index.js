import HomeView from '../views/HomeView.vue'
import MusicasView from "@/views/MusicasView";
import FestivaisView from "@/views/FestivaisView";
import TeatrosView from "@/views/TeatrosView";
import LocalizacoesView from "@/views/LocalizacoesView";
import QuemSomosView from "@/views/QuemSomosView";
import buyTicketView from "@/views/buyTicketView";
import checkout from "@/components/checkout";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/',
        redirect: { name: 'Home' }
    },
    {
        path: '/INFNETS-FOR-FUN/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/INFNETS-FOR-FUN/musicas',
        name: 'musicas',
        component: MusicasView
    },
    {
        path: '/INFNETS-FOR-FUN/festivais',
        name: 'festivais',
        component: FestivaisView
    },
    {
        path: '/INFNETS-FOR-FUN/teatros',
        name: 'teatros',
        component: TeatrosView
    },
    {
        path: '/INFNETS-FOR-FUN/localizacoes',
        name: 'localizacoes',
        component: LocalizacoesView
    },
    {
        path: '/INFNETS-FOR-FUN/quemsomos',
        name: 'quemsomos',
        component: QuemSomosView
    },
    {
        path: '/INFNETS-FOR-FUN/comprar/:id',
        name:'comprar',
        component: buyTicketView,
        props:true
    }, {
        path: "/INFNETS-FOR-FUN/checkout",
        name:'checkout',
        component: checkout
    }
    ]

export default routes
