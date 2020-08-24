
Vue.component('common-head',{
	template:`<div class="nav" style="background: #f2f2f2">
                <div class="menu" @click="switchHandle">
                    <img class="menu-icon" src="../img/menu.png" >
                </div>
                <div class="logo">
                    <div class="logo-icon"></div>
                    
                </div>
                <div class="nav-item">
                    <div :class="['item', currentIndex == 1 ? 'active': '']" @click="switchNav(1)">
                        <span>ÉCRANS INTELLIGENTS</span>
                    </div>
                    <div :class="['item', currentIndex == 2 ? 'active': '']" @click="switchNav(2)">
                        <span>LOGICIELS ET APPS</span>
                    </div>
                    <div :class="['item', currentIndex == 3 ? 'active': '']" @click="switchNav(3)">
                        <span>ASSISTANCE</span>
                    </div>
                    <div :class="['item', currentIndex == 4 ? 'active': '']" @click="switchNav(4)">
                        <span>CONTACTEZ NOUS</span>
                    </div>
                    <div :class="['item', currentIndex == 5 ? 'active': '']" @click="switchNav(5)">
                        <span>A PROPOS DE HUAYI</span>
                    </div>
                    <div :class="['item', currentIndex == 6 ? 'active': '']" @click="switchNav(6)">
                        <span>DEMANDE DE DEVIS</span>
                    </div>
                </div>
              </div>`,
    props: {
        index: {
            type: Number,
            default: 0
        }
    },
    created() {
        this.currentIndex = this.index
    },
    data() {
        return {
            currentIndex: 0
        }
    },         
    methods: {
        
        switchHandle () {
            this.$emit('switch', 'ttttt')
        },
        switchNav (index) {
            this.currentIndex = index
        }
    }
});