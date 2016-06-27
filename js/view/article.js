define(["ractive",'text!../../templates/article/tpl.html'],function(Ractive, paraTemplate){
	var app  = {
		init:function(config){
			var Grid = Ractive.extend({
				template:paraTemplate,
			});
			var color = config.defaultColor||"green";
			var Model = Ractive({
				el:"sandboxArticle",
				template:'<Grid Style="{{styles}}" />',
				components:{Grid: Grid},
				data:{
					styles:[
						{color:color}
					]
				}
			});
			console.log(Model);
			Model.on('changeColor', function(args) {
				Model.findComponent("Grid").set("Style.*.color",args.color);
			});
			return Model;
		}
	}
	return app;
});