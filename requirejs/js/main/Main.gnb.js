
define([
    "App",
    "jquery"
], function( App, $ ) {
    'use strict';

    function Init()
    {
        create();
        dispatchEvent( "red" );
    }

    var _gnb;
    function create()
    {
        _gnb = $( ".gnb" );
        _gnb.find( "li" ).on( "click", gnbClick );
    }

    function gnbClick( $e )
    {
        var color = $( this ).text();
        dispatchEvent( color );
    }

    function dispatchEvent( $color )
    {
        $( App ).trigger( App.Events.GNB_CLICK, $color );
    }

    return{
        Init : Init
    }
});