

const { createApp } = Vue

createApp({
    data() {
        return {
            
            
            chtatsSentFromUser: "",
            scrollWindowChatVar: false,
            

            attivaNotifiche: true,
            activeIndex: 0,

            contacts: [
                {
                    name: 'Will Smith',
                    avatar: 'https://www.ivanlarusca.it/wp-content/uploads/2020/01/1.jpg',
                    visible: true,
                    wStato: "",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Albert E.',
                    avatar: 'https://www.repstatic.it/content/nazionale/img/2013/12/15/173502931-f75338ee-26b2-49b7-95fd-3bc7d7222d52.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Cristiano R.',
                    avatar: 'https://www.adnkronos.com/resources/028c-1aad26f2e767-bc91f0a68060-1000/format/big/cristianoronaldo_ipa_fg.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Leonardo di C.',
                    avatar: 'https://www.attorifamosi.it/img/common/leonardo-dicaprio-profilo.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Shakira M.',
                    avatar: 'https://www.105.net/resizer/1000/683/true/43_insta_shakira-1700228159787.jpg--shakira___com_e_cambiata_la_mia_vita_dopo_l_addio_a_pique_.jpg?1700228159817',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Emily R.',
                    avatar: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-854255966-1519991885.jpg?resize=2048:*',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Charles L.',
                    avatar: 'https://variety.com/wp-content/uploads/2023/10/wme-client.jpg?w=1000',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Charlotte de W.',
                    avatar: 'https://www.papido.it/gallery/image.php?src=italia/upload/dj454/945472charlotte-de-witte-dj-foto6.jpg&w=640',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
        
    },
    computed: {
        newArray() {
            return {
                date: '10/01/2020 17:15:22',
                message: this.chtatsSentFromUser,  // Questo si aggiornerà ora dinamicamente
                status: 'received'
            };
        }
    },
    
    methods: {
        changeChats: function (index) {
            this.activeIndex = index;
        },
        
        snedMessage: function () {
            this.contacts[this.activeIndex].messages.push(this.newArray);
            chtatsSentFromUser = "";
        },
        removeInitialBanner: function() {
            const initialBanner = document.getElementById("nothingOnPage").classList.add("none");
        },
        InfoHiddenFunc: function() {
            const InfoHidden = document.getElementById("InfoHidden").classList.toggle("none");
            
        },
        smileWindowFunc: function() {
            const smileWindow = document.getElementById("smileWindow").classList.toggle("none");
            let scrollWindowChat = document.getElementById("scrollWindowChat").classList.toggle("scroll-chats-openedSmile");
        },
        modalProfile: function() {
            const modalOn = document.getElementById("ModalIdProfile").classList.toggle("none");
        }
        
        
    },

}).mount('#app')