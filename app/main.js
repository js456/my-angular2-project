/**
 * Created by Jitendra on 7/12/2016.
 */
(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));