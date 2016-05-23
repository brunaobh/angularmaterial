(function ()
{
    'use strict';

    angular
        .module('app.sample')
        .controller('SampleController', SampleController)
        .controller('MoviesController', MoviesController);

    /** @ngInject */
    function SampleController($translate)
    {
        var vm = this;

        // Data
        vm.sent = false;
        vm.title = 'SAMPLE.TITLE';
        vm.hello = 'SAMPLE.HELLO';
        vm.review = 'SAMPLE.REVIEW';
        vm.thanks = 'SAMPLE.THANKS';
        vm.wish = 'SAMPLE.WISH';
        vm.questions = {
            personal_info: {
                'title': 'SAMPLE.QUESTION.INFO.TITLE',
                'a': 'SAMPLE.QUESTION.INFO.START_WARS_MOVIE',
                'b': 'SAMPLE.QUESTION.INFO.TV_SERIES',
                'c': 'SAMPLE.QUESTION.INFO.BOLACHA',
                'd': 'SAMPLE.QUESTION.INFO.BEST_QUOTE'
            },
            food: {
                'title': 'SAMPLE.QUESTION.FOOD.TITLE',
                'question': 'SAMPLE.QUESTION.FOOD.QUESTION',
                'insect': 'SAMPLE.QUESTION.FOOD.INSECT',
                'pasta': 'SAMPLE.QUESTION.FOOD.PASTA',
                'meat': 'SAMPLE.QUESTION.FOOD.MEAT',
                'allin': 'SAMPLE.QUESTION.FOOD.ALLIN'
            }
        };
        vm.validation = {
            'empty': 'SAMPLE.QUESTION.VALIDATION.EMPTY',
            'maxlength': 'SAMPLE.QUESTION.VALIDATION.MAXLENGTH',
            'requiredmovie': 'SAMPLE.QUESTION.VALIDATION.REQUIREDMOVIE'
        };
        vm.buttons = {
            'next': 'SAMPLE.QUESTION.BUTTONS.NEXT',
            'previous': 'SAMPLE.QUESTION.BUTTONS.PREVIOUS',
            'save': 'SAMPLE.QUESTION.BUTTONS.SAVE'
        };
        vm.biscoito = ('Biscoito Bolacha').split(' ').map(function(desc) {
            return {desc: desc};
        });
    }

    function MoviesController () {
        var self = this;

        // list of `state` value/display objects
        self.movies        = loadAll();
        self.selectedItem  = null;
        self.searchText    = null;
        self.querySearch   = querySearch;

        // ******************************
        // Internal methods
        // ******************************

        // Methods
        /**
         * Search for star war movies
         */
        function querySearch (query) {
          var results = query ? self.movies.filter( createFilterFor(query) ) : [];
          return results;
        }
        /**
         * Build `star war movies` list of key/value pairs
         */
        function loadAll() {
          var allMovies = 'Ep. IV - A New Hope, Ep. V - The Empire Strikes Back, Ep. VI - Return of the Jedi,\
                  Ep. I - The Phantom Menace, Ep. II - Attack of the Clones, Ep. III - Revenge of the Sith,\
                  Ep. VII - The Force Awakens';
          return allMovies.split(/, +/g).map( function (movie) {
            return {
              value: movie.toLowerCase(),
              display: movie
            };
          });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
          var lowercaseQuery = angular.lowercase(query);
          return function filterFn(movie) {
            return (movie.value.indexOf(lowercaseQuery) > -1);    
          };
        }
    }
})();
