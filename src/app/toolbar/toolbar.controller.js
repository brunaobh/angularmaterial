(function ()
{
    'use strict';

    angular
        .module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($translate, appTheming)
    {
        var vm = this;

        vm.bodyEl = angular.element('body');
        vm.languages = {
            en: {
                'title'      : 'English',
                'translation': 'TOOLBAR.ENGLISH',
                'code'       : 'en',
                'flag'       : 'us'
            },
            'pt-br': {
                'title'      : 'Portuguese',
                'translation': 'TOOLBAR.PORTUGUESE',
                'code'       : 'pt-br',
                'flag'       : 'pt-br'
            }
        };

        // Methods
        vm.changeLanguage = changeLanguage;
        vm.setActiveTheme = setActiveTheme;
        //////////

        init();

        /**
         * Initialize
         */
        function init()
        {
            // Get the selected language directly from angular-translate module setting
            vm.selectedLanguage = vm.languages[$translate.preferredLanguage()];
        }

        /**
         * Change Language
         */
        function changeLanguage(lang)
        {
            vm.selectedLanguage = lang;

            // Change the language
            $translate.use(lang.code);
        }

        /**
         * Set active theme
         *
         * @param themeName
         */
        function setActiveTheme(themeName)
        {
            // Set active theme
            appTheming.setActiveTheme(themeName);
        }
    }

})();