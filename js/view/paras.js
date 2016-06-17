define(["ractive",'text!../../templates/paras/tpl.html'],function(Ractive, paraTemplate){
	var app  = {
		init:function(config){
			var Grid = Ractive.extend({
				template:paraTemplate,
			});
			var color = config.defaultColor||"green";
			var Para = Ractive({
				el:"sandboxParas",
				template:'<Grid Style="{{styles}}" />',
				components:{Grid: Grid},
				data:{
					styles:[
						{color:color}
					]
				}
			});
			console.log(Para);
			Para.on('changeColor', function(args) {
				Para.findComponent("Grid").set("Style.*.color",args.color);
			});
			return Para;
		}
	}
	return app;
});