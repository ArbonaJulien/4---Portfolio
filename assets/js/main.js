
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

emailjs.init('4zEFxkuoi7_XtW3PS');

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
