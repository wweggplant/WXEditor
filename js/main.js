 require.config({
    baseUrl: "js/vendor",
    waitSeconds: 15,
    paths: {
	    jquery: 'jquery.min',
	    ckeditor: 'ckeditor/ckeditor',
	    ractive: 'ractive.min',
	    mixitup:"jquery.mixitup.min",
	    nicescroll:"jquery.nicescroll.min",
	    spectrum: 'spectrum/spectrum',
	}
  });
require(['../app', 'ractive', 'jquery',"spectrum"],function (App, Ractive, $) {
	'use strict';
	App.init();
	App.colorPicker();
	Ractive.DEBUG = false;
});