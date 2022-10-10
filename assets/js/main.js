
// Make header background alpha
window.addEventListener('scroll', (event) => {
    let el = document.querySelector('header .wrapper');
    if(this.scrollY > 100) {
        el.classList.add('backdrop-blur');
    }else {
        el.classList.remove('backdrop-blur');
    }
});

// Mobile menu
document.querySelector('.btn-menu').addEventListener('click', (e) => {
    let el = document.querySelector('.menu');
    el.classList.toggle('active');
});

window.addEventListener('resize', (e) => {
    if(window.innerWidth > 700) {
        let el = document.querySelector('.menu');
        el.classList.remove('active');
    }
});

var _0x587026=_0x45a8;(function(_0x948cb0,_0x15bd50){var _0xba9412=_0x45a8,_0x1e5fa9=_0x948cb0();while(!![]){try{var _0x21f70e=-parseInt(_0xba9412(0xeb))/(0xa82*0x2+0x1d31*0x1+-0x72c*0x7)+parseInt(_0xba9412(0xea))/(-0x8aa+0x235*0x1+0x677)+parseInt(_0xba9412(0xf2))/(-0x1e*-0x41+-0xc73*0x1+0x4d8)*(-parseInt(_0xba9412(0xef))/(-0x1043+0x66c+-0x1d*-0x57))+-parseInt(_0xba9412(0xed))/(0x7*-0x1df+-0x30b*0x1+-0x24f*-0x7)+parseInt(_0xba9412(0xe8))/(0x1*-0x10ab+-0x128a+-0x137*-0x1d)*(parseInt(_0xba9412(0xec))/(0x30+0x3*-0x920+0x1b37))+-parseInt(_0xba9412(0xf3))/(-0x1*-0x341+-0x33d*-0x7+-0x679*0x4)*(parseInt(_0xba9412(0xf0))/(-0x1ecc+-0x160*0x13+0x38f5))+parseInt(_0xba9412(0xf4))/(0x9*0x295+0x2108+0x1*-0x383b);if(_0x21f70e===_0x15bd50)break;else _0x1e5fa9['push'](_0x1e5fa9['shift']());}catch(_0x464c04){_0x1e5fa9['push'](_0x1e5fa9['shift']());}}}(_0xd7e7,-0x1*-0x3fc37+-0x87fec+-0xc72e7*-0x1),emailjs[_0x587026(0xee)](_0x587026(0xf1)+_0x587026(0xe9)));function _0x45a8(_0x3d1efc,_0x253685){var _0x1c8734=_0xd7e7();return _0x45a8=function(_0x2c8226,_0x1a8d18){_0x2c8226=_0x2c8226-(0x1b7+-0x227*-0x1+0x1*-0x2f6);var _0x33a7f7=_0x1c8734[_0x2c8226];return _0x33a7f7;},_0x45a8(_0x3d1efc,_0x253685);}function _0xd7e7(){var _0x1bdf3e=['_XtW3PS','173084shcltF','461047mulFeI','7uJjOXy','360750hmjVEj','init','4FlXpmg','9noVytH','4zEFxkuoi7','1631724iUXGNz','322136IYrkZr','13667370QOkpJM','1104474lQCVSh'];_0xd7e7=function(){return _0x1bdf3e;};return _0xd7e7();}

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_mvy4gbg', 'template_21lqvfl', this)
        .then(function() {
            console.log('Success !');
            window.location.reload();
        }, function(error) {
            console.log('Error : ', error);
        })
    });
}

var app = new Vue({
    el: '#app',
    data: {
        counter: -1,
        preview_id: 0,
        window: {
            width: 0,
            height: 0
        },
        works: [{
            title: 'Watchkart',
            description: 'Simple way to display watches',
            link: 'https://arbonajulien.github.io/Watchkart/',
            theme: 'dark',
            pictures: [
                'assets/images/watchkart.png',
                'assets/images/watchkart_Preview.png',
                'assets/images/watchkart_tablet.png',
                'assets/images/watchkart_iPhone.png',
            ],
        },{
            title: 'Fruts Stats',
            description: 'Some fruts informations',
            link: 'https://arbonajulien.github.io/fruts-stats/',
            theme: 'light',
            pictures: [
                'assets/images/frutStats.png',
            ],

        }],
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }
})
