/**
 * Created by Jitendra on 7/12/2016.
 */
(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>My First Angular 2 App</h1>'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));