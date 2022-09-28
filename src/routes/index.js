import HomeView from '../views/HomeView.vue'
import MusicasView from "@/views/MusicasView";
import FestivaisView from "@/views/FestivaisView";
import TeatrosView from "@/views/TeatrosView";
import LocalizacoesView from "@/views/LocalizacoesView";
import QuemSomosView from "@/views/QuemSomosView";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/musicas',
        name: 'musicas',
        component: MusicasView
    },
    {
        path: '/festivais',
        name: 'festivais',
        component: FestivaisView
    },
    {
        path: '/teatros',
        name: 'teatros',
        component: TeatrosView
    },
    {
        path: '/localizacoes',
        name: 'localizacoes',
        component: LocalizacoesView
    },
    {
        path: '/quemsomos',
        name: 'quemsomos',
        component: QuemSomosView
    }
    ]


export default routes
