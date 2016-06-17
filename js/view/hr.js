define(["ractive",'text!../../templates/hr/tpl.html'],function(Ractive, paraTemplate){
	var app  = {
		init:function(config){
			var Grid = Ractive.extend({
				template:paraTemplate,
			});
			var color = config.defaultColor||"green";
			var Hr = Ractive({
				el:"sandboxHr",
				template:'<Grid Style="{{styles}}" />',
				components:{Grid: Grid},
				data:{
					styles:[
						{color:color}
					]
				}
			});
			console.log(Hr);
			Hr.on('changeColor', function(args) {
				Hr.findComponent("Grid").set("Style.*.color",args.color);
			});
			return Hr;
		}
	}
	return app;
});