requirejs.config({
    baseUrl : "js",

    paths: {
        "jquery" : "lib/jquery-1.11.2.min",
        "TweenMax" : "lib/TweenMax.min",
        "App" : "App"
    },

    shim:{
        "App" : {
            deps : [ "jquery", "TweenMax" ],
            exports : "App"
        }
    }
});