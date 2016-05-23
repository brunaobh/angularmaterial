(function ()
{
    'use strict';

    angular
        .module('appBruno')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController(appTheming)
    {
        var vm = this;

        // Data
        vm.themes = appTheming.themes;

        //////////
    }
})();