 require.config({
    baseUrl: "js/vendor",
    waitSeconds: 15,
    paths: {
	    jquery: 'jquery.min',
	    text: 'text',
	    ckeditor: 'ckeditor/ckeditor',
	    ractive: 'ractive.min',
	    mixitup:"jquery.mixitup.min",
	    nicescroll:"jquery.nicescroll.min",
	    spectrum: 'spectrum/spectrum',
	    titleView:"../view/title"
	}
  });
require(['../app', 'ractive', 'titleView','jquery',"spectrum"],
	function (App, Ractive,titleView, $) {
		'use strict';
		var config = {};
		App.init(config);
		var title = titleView.init(config);
		App.colorPicker(function(color){
			title.fire("changeColor",{color:color});
		});
		Ractive.DEBUG = false;
	});