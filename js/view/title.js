define(["ractive",'text!../../templates/titles/tpl.html'],function(Ractive, titleTemplate){
	var app  = {
		init:function(config){
			var Grid = Ractive.extend({
				template:titleTemplate,
			});
			var color = config.defaultColor||"green";
			var Title = Ractive({
				el:"sandboxTitle",
				template:'<Grid Style="{{styles}}" />',
				components:{Grid: Grid},
				data:{
					wxName:"标题",
					styles:[
						{color:color,fontSize:18}
					]
				}
			});
			console.log(Title);
			Title.on('changeColor', function(args) {
				Title.findComponent("Grid").set("Style.*.color",args.color);
			});
			Title.on('changeName', function(args) {
				// alert(args.name)
				Title.findComponent("Grid").set("wxName",args.wxName);
			});
			return Title;
		}
	}
	return app;
});