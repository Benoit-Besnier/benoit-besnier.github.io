/**
 * Created by Benoit on 05/08/2017.
 */

var App = angular.module('App', [
    "ngAnimate",
    "ngAria",
    "ngMessages",
    "ngMaterial",
    "AppController"
]);

App.config(["$mdThemingProvider",
    function ($mdThemingProvider) {

        // ngMaterial theme provider -> Change secondary color to light-blue (pink by default)
        // $mdThemingProvider.theme('default').accentPalette('light-blue');

        // $mdThemingProvider.theme('custom', 'default')
        //     .primaryPalette('yellow')
        //     .dark();

    }
]);

App.run(function () {
    // May be useful someday.
});