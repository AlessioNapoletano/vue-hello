const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Introduzione a VUE',
            myTitleClass: 'py-2',
            myPClass: 'd-inline pe-5',
            myLabelClass: "pe-3",
            mySrc: './imgs/Logo.png',
            myAlt: "logo boolean",
        }
    },
    methods: {
        saluta: function() {
            return alert("Hello");
        }
    }
}).mount('#app')