
Vue.component('common-footer',{
    template:`<div class="footer" style="background: #f2f2f2">
                <div class="wrap">
                    <div class="footer-wrap" v-for="item in footerList">
                        <h3 class="footer-title">{{item.title}}</h3>
                        <ul class="footer-list-wrap">
                            <li class="footer-list" v-for="itemJ in item.list">
                                <a :href="itemJ.url"><i>·</i> {{itemJ.text}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
               <div class="img-list">
                    <div class="logo">
                        <div class="logo-icon" ></div>
                    </div> 
                    <div class="img-list-wrap">
                        <img class="img-icon first-icon" src="../img/A.png" @click="openUrl('https://www.youtube.com/channel/UC4FmztXvalGKQtTyIUVeuYg')">
                        <img class="img-icon" src="../img/B.png"  @click="openUrl('https://www.facebook.com/Huayitechfr/')">
                        <img class="img-icon" src="../img/C.png"  @click="openUrl('https://www.linkedin.com/company/hua-yi-technologie-sas')">
                        <img class="img-icon" src="../img/Cdiscount-logo-carre.jpg"  @click="openUrl('https://www.cdiscount.com/mpv-106319-Huayi-Tech.html')">
                        <img class="img-icon" src="../img/D.png"  @click="openUrl('https://www.instagram.com/accounts/login/?next=/huayitechnologiefr/')">
                        
                        <img class="img-icon" src="../img/E.png"  @click="openUrl('https://twitter.com/hua_tech')">
                        <img class="img-icon" src="../img/F.png"  @click="openUrl('https://www.amazon.fr/s?me=AWIR5QFTYT69E&marketplaceID=A13V1IB3VIYZZH')">
                        
                        <img class="img-icon" src="../img/H.png"  @click="openUrl('https://www.darty.com/')">
                        <img class="img-icon" src="../img/I.png"  @click="openUrl('https://www.ebay.fr/str/huayitech')">
                        <img class="img-icon" src="../img/J.png"  @click="openUrl('https://www.fnac.com/')">
                    </div>
               </div>
                
              </div>`,
    data () {
        return {
            footerList: [
                {
                    title: 'PRODUITS ÉLECTRONIQUES',
                    list: [
                        {
                            text: 'LED ',
                            url: ''
                        },
                        {
                            text: 'Totem ',
                            url: ''
                        },
                        {
                            text: 'Borne tactile ',
                            url: ''
                        },
                        {
                            text: 'Borne de commande ',
                            url: ''
                        },
                        {
                            text: 'Écran mural ',
                            url: ''
                        },
                        {
                            text: 'Écran interactif pour vos réunions & formations ',
                            url: ''
                        },
                        {
                            text: 'Écran sur mesure ',
                            url: ''
                        }
                    ]
                },
                {
                    title: 'LOGICIELS ET APPLICATIONS',
                    list: [
                        {
                            text: 'Logiciel de simulation 2D/3D et navigation',
                            url: '../html/simulation.html'
                        },
                        {
                            text: "Logiciel de recherche d'informations",
                            url: '../html/logiciel.html'
                        },
                        {
                            text: 'Système / Logiciel de prise de commande',
                            url: '../html/system.html'
                        },
                        {
                            text: "Logiciels de conférence et d’enseignement",
                            url: '../html/logiciels.html'
                        },
                        {
                            text: 'Logiciels multimédia "intelligent"',
                            url: '../html/serveur.html'
                        },
                        {
                            text: 'Application & logiciel sur mesure',
                            url: '../html/application.html'
                        },
                        {
                            text: 'Conseils et sous-traitance en technologie informatique',
                            url: '../html/conseils.html'
                        }
                    ]
                },
                {
                    title: 'ASSISTANCE',
                    list: [
                        {
                            text: 'Conditions générales de vente',
                            url: '../html/condition.html'
                        },
                        // {
                        //     text: 'Politique de réparation',
                        //     url: ''
                        // },
                        {
                            text: 'Politique de garantie',
                            url: '../html/garantie.html'
                        },
                        {
                            text: 'Politique de livraison',
                            url: '../html/notry.html'
                        },
                        {
                            text: 'FAQ',
                            url: '../html/faq.html'
                        }
                    ]
                },
                {
                    title: 'À PROPOS DE HUA YI',
                    list: [
                        {
                            text: 'Qui sommes-nous ?',
                            url: '../html/qui.html'
                        },
                        {
                            text: 'Notre fournisseur',
                            url: '../html/multiples.html'
                        },
                        {
                            text: 'Notre valeur',
                            url: '../html/rapport.html'
                        },
                        {
                            text: 'Contactez-nous',
                            url: '../html/contactez.html'
                        },
                        {
                            text: 'Demande de devis',
                            url: '../html/demander.html'
                        }
                    ]
                },
            ],
        }
    },          
    methods: {
        openUrl (url) {
            window.location.href=url
        }
    }
});