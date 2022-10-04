import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '../App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
import { defineStore } from 'pinia'

export const useDados = defineStore('dados', {

    state: () => {
        return { items:[
                {id:0,nome:"Angra" ,imagem:"ANGRA-2.jpeg", descricao:'Angra é uma banda brasileira de power metal, formada na ' +
                        'cidade de São Paulo em 1991, pelo vocalista, tecladista e multi-instrumentista Andre Matos e os guitarristas ' +
                        'Rafael Bittencourt e André Linhares, após se conhecerem na Faculdade Santa Marcelina, onde cursavam composição ' +
                        'e regência.'},
                {id:1,nome:"Europe" ,imagem:"Europe-3.jpg", descricao:'Europe é uma banda de rock, formada em Upplands Väsby, S' +
                        'uécia, em 1979 sob o nome Force pelo vocalista Joey Tempest e guitarrista John Norum. Apesar de largament' +
                        'e associada ao hard rock, o som da banda incorpora elementos de sinfonia e heavy metal, apesar de seus ' +
                        'integrantes classificarem a banda como rock clássico.'},
                {id:2,nome:"Iron Maidem" ,imagem:"814qxGP5HWL._AC_SL1500_.jpg", descricao:'Iron Maiden é uma banda inglesa de ' +
                        'heavy metal formada em Leyton, East London, em 1975 pelo baixista e compositor Steve Harris.'},
                {id:3,nome:"Band Maid" ,imagem:"3431c4914a7c66e5c66399f24cc5d41c.jpg", descricao:'Band-Maid é uma banda de rock japonesa formada em 2013 ' +
                        'assinada pela Gump Records mas atualmente está sob os cuidados da Crown Stones desde 2016. A banda combina' +
                        ' o som de rock com o visual Cosplay de Maid.'},
                {id:4,nome:"Encontro das Tribos" ,imagem:"f6c52bd4e0ec193110bc6d5c0553e5b9.jpg", descricao:'Do fundo do mar ressurge uma nova era. ' +
                        'O que aconteceu no passado virou história para que o novo pudesse vir e contar o que ' +
                        'só o futuro sabe. Assim, os tempos distintos se fundem em uma combinação perfeita para a criação de OCEANIX.'},
                {id:5,nome:"Black Label Society" ,imagem:"black-label-society-e1654537943175.jpeg", descricao:'A banda liderada pela entidade sagrada das ' +
                        'guitarras, Zakk Wylde,' +
                        ' promoverá o seu brilhante décimo primeiro álbum, "Doom Crew Inc.",' +
                        ' em oito cidades brasileiras em outubro de 2022. Serão noites de exaltação dos aspectos mais poderosos e ' +
                        'apaixonantes do heavy metal / hard rock,'},
                {id:6,nome:" Prime Rock Brasil" ,imagem:"278288444_1902752853246413_9201458277261402297_n_0.jpg", descricao:'O palco do @mineirao vai receber a poesia' +
                        ' e a musicalidade atemporal do Legião Urbana, ' +
                        'juntamente com a qualidade do repertório dos @titasoficial, mostrando que ninguém completa 40 anos de carreira em vão.'},
                {id:7,nome:"João Rock" ,imagem:"joao-rock-2019.png", descricao:'A edição comemorativa dos 18 anos do Festival ' +
                        'João Rock contará com 21 grandes shows, distribuídos em quatro palcos, somando mais de 12 horas de música. '},
                {id:8,nome:"Amadeus" ,imagem:"amadeus-quadro-com-poster-de-peca-teatral-sobre-mozart-televisao.jpg", descricao:'Dentro de um manicômio, ' +
                        'Amadeus lembra os fatos de três décadas antes, quando o jovem Mozart ganhou a confiança da corte do imperador austríaco Joseph II. ' +
                        'Uma lenda urbana se forma sobre a morte de Amadeus Mozart.'},
                {id:9,nome:"O Jardim do Inimigo" ,imagem:"37822424_1780481418654221_5630968249819594752_n.jpg", descricao:'O espetáculo aborda ' +
                        'situações que acontecem nas relações humanas, como violência doméstica, uso de drogas, prostituição, miséria, além do ' +
                        'descompromisso com Deus e a igreja.'},
                {id:10,nome:"Quatro Metades" ,imagem:"15d4d4f5f9ae42.jpg", descricao:'O encenador promete uma viagem pelo imaginário do escritor através' +
                        ' das suas personagens e a forma como estas questionam o mundo à sua volta. “Na Berma de Nenhuma Estrada”, “Entrada no Céu”, “Meia culpa, ' +
                        'meia própria culpa” e “O nome gordo de Isadorangela” são os quatro contos que servem de inspiração'},
                {id:11,nome:"Roleta" ,imagem:"15d4d4f60a2e64.jpg", descricao:'Thriller escrito por Raphael Montes e lançado em 2012, Suicidas projetou o nome do romancista' +
                        ' carioca dentro do cenário literário brasileiro. O livro ganhou tamanho alcance que chamou a atenção do diretor César Baptista,' +
                        ' que assinou a primeira adaptação do título para os palcos.'},
            ],
        }
    },
})

