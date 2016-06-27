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
	    titleView:"../view/title",
	    paraView:"../view/paras",
	    hrView:"../view/hr",
	    followView:"../view/follow",
	    cardView:"../view/card",
	    articleView:"../view/article",
	},
	shim:{
		mixitup:{
			deps:["jquery"]
		},
		nicescroll:{
			deps:["jquery"]
		},
	}
  });
require(['../app', 'ractive', 'titleView','paraView','hrView','cardView','followView','articleView','jquery',"mixitup","nicescroll","spectrum"],
	function (App, Ractive,titleView,paraView,hrView,cardView,followView,articleView, $) {
		'use strict';
		var config = {};
		App.init(config);
		var title = titleView.init(config);
		var para = paraView.init(config);
		var hr = hrView.init(config);
		var card = cardView.init(config);
		var follow = followView.init(config);
		var article = articleView.init(config);
		App.colorPicker(function(color){
			title.fire("changeColor",{color:color});
			para.fire("changeColor",{color:color});
			hr.fire("changeColor",{color:color});
			card.fire("changeColor",{color:color});
			follow.fire("changeColor",{color:color});
			article.fire("changeColor",{color:color});
		});
		$('#tabs').mixItUp();
		$(".sandbox").niceScroll({
	        cursorcolor: "#ccc",//#CC0071 光标颜色 
		    cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0 
		    touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备 
		    cursorwidth: "5px", //像素光标的宽度 
		    cursorborder: "0", //     游标边框css定义 
		    cursorborderradius: "5px",//以像素为光标边界半径 
		    autohidemode: false //是否隐藏滚动条 
		});
		Ractive.DEBUG = false;
	});