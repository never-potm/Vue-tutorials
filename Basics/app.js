
// Control whole or some part of the application
new Vue({

    // which elements should it control ?
    el: '#vue-app',
    data: {
        name: 'Suraj',
        age: 25,
        job: 'Ninja',
        website: 'https://www.google.in',
        websiteTag: '<a href=https://www.google.in>Generated Link</a>',
        x:0,
        y:0,
        loggedName: "",
        loggedAge: "",
        a:0,
        b:0
    },
    methods: {
        greet: function() {
            return 'GM ' + this.name
        },
        add: function () {
            this.age++
        },
        subtract: function () {
            --this.age
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        help: function () {
            alert("You asked for help");
        },
        logName: function () {
            console.log("You entered you name")
        },
        logAge: function () {
            console.log("You entered you age")
        }
    },
    computed: {
        addToA: function () {
            return this.a + this.age;
        },
        addToB: function () {
            return this.b + this.age;
        }
    }

});