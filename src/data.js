import {createStore} from "vuex";

const store = createStore({
    state: {
        carrousel: [
            {
                id: 1,
                title: 'Band Maid',
                text: 'Banda de hard rock feminino do Japão',
                img: '@/assets/bandmaid.jpg'
            },
            {
                id: 2,
                title: 'Rock in Rio 2022',
                text: 'O maior festival de rock do mundo',
                img: '@/assets/rock-in-rio-2022.jpg'
            },
            {
                id: 3,
                title: 'Hamilton',
                text: 'Um fenomeno do teatro musical',
                img: '@/assets/hamilton.jpg'
            }
        ]
    },
    getters: {
        getCarrousel(state) {
            return state.carrousel
        }
    }
})

export default store