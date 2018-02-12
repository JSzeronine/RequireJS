requirejs([
    "App",
    "main/Main.visual",
    "main/Main.gnb",
], function( App, Visual, Gnb ){
    'use strict';
    
    function init()
    {
        addEvent();

        Visual.Init();
        Gnb.Init();
    }

    function addEvent()
    {
        $( App ).on( App.Events.GNB_CLICK, gnbClick );
    }

    function gnbClick( $e, $color )
    {
        Visual.Show( $color );
    }

    $( document ).ready( function(){
        init();
    });
});