require.config({
	// baseUrl: '../',
	paths: {
		//plugin
		zepto: 'src/js/simona/vendor/zepto',
		fastclick: 'src/js/simona/vendor/fastclick'
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