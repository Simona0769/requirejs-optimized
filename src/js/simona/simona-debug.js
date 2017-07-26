/*! piece.js 1.0.1 | piecejs.org/LICENSE.md
 */
 
var CS;
//pieceDefaultConfig
var csDefaultConfig = {
	module:'home'
};

var csConfig;

if (typeof(csConfig) === "undefined") {
	csConfig = csDefaultConfig;
}
console.info(csConfig);

require.config({
	waitSeconds: 30
});


require.config({
	paths: {
		//plugin
		zepto: '../js/simona/vendor/zepto',
		fastclick: '../js/simona/vendor/fastclick'
	},

	shim: {
		zepto: {
			exports: '$'
		},
		fastclick: {
			exports: 'FastClick'
		}
	}
});


(function() {

	require(['zepto', 'fastclick',csConfig.module],
		function($,  FastClick, module) {
			FastClick.attach(document.body);			
		});
})();