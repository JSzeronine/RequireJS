
define([
    "App",
    "jquery",
    "TweenMax"
], function( App, $, TweenMax ) {
    'use strict';

    function Init()
    {
        create();
    }

    var _visual;
    function create()
    {
        _visual = $( ".visual" );
    }

    function Show( $color )
    {
        TweenMax.to( _visual, 1, { backgroundColor : $color, ease:Cubic.easeInOut });
    }

    return{
        Init : Init,
        Show : Show
    }
});