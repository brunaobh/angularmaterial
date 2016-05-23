(function ()
{
    'use strict';

    angular
        .module('appBruno')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource)
    {
        var api = {};

        // Base Url
        api.baseUrl = 'app/data/';

        return api;
    }

})();