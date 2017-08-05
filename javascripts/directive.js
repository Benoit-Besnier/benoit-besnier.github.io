/**
 * Created by Benoit on 05/08/2017.
 */

App.directive('keyBind', function() {
    return function(scope, element, attrs) {
        element.bind("keydown, keypress", function(event) {
            if(event.which === Number(attrs.key)) {
                scope.$apply(function(){
                    scope.$eval(attrs.keyBind, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});