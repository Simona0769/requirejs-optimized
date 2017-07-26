
var CS;
var csDefaultConfig = {
    module: 'home'
};

var csConfig;

if (typeof(csConfig) === "undefined") {
    csConfig = csDefaultConfig;
}

require.config({
    waitSeconds: 30
});

(function() {

    require(['zepto', 'fastclick', csConfig.module],
        function($, FastClick, module) {
            FastClick.attach(document.body);
        });
})();
