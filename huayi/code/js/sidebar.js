
Vue.component('common-sidebar',{
	template:`<div class="sidebar" style="background: #e6e6e6">
                <ul class="side-item">
                    <li class="list" v-for="(item, index) in menuList" @click="openUrl(index)">
                        <a :class="{'activeSide': index == currentIndex}" :href="item.url"><i>·</i> {{item.text}}</a>
                    </li>
                </ul>
              </div>`,
    props: {
        index: {
            type: Number,
            default: 0
        }
    },
    created() {
        this.currentIndex = this.index;
    },
    data () {
        return {
            currentIndex: 0,
            menuList: [
                {
                    text: 'BORNE TACTILE INTERACTIVE ',
                    url: ''
                },
                {
                    text: 'TOTEM ',
                    url: ''
                },
                {
                    text: 'ÉCRAN MURAL ',
                    url: ''
                },
                {
                    text: 'L.E.D ',
                    url: ''
                },
                {
                    text: 'BORNE ',
                    url: ''
                },
                {
                    text: 'COMMANDE INTELLIGENTE ',
                    url: ''
                },
                {
                    text: 'MACHINES SUR MESURE ',
                    url: ''
                },
                {
                    text: 'DEMANDER UN DEVIS ',
                    url: '../html/demander.html'
                },
                {
                    text: 'A PROPOS DE HUA YI ',
                    url: '../html/decouvrez.html'
                },
                {
                    text: 'CONTACTEZ NOUS ',
                    url: '../html/contactez.html'
                },
                {
                    text: 'MORE ',
                    url: ''
                }
               
            ]
        }
    },          
    methods: {
        openUrl (index) {
            this.currentIndex = index;
        }
    }
});