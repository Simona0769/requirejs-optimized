define(['zepto'], function($) {
	console.info('123adfsdf');
    $(".module").on('click',function(e) {
		var $target = $(e.currentTarget);
		if($target.hasClass('contract')) {
			alert('contract.html');
		} else if ($target.hasClass('manage')) {
			alert('manage.html');
		} else {
			alert('approval.html');
		}
	});
});