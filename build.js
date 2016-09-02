({
  appDir: './',   //项目根目录
  dir: './docs',  //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）

  baseUrl: "./js/vendor",  //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的
  name:'../main',
  exclude: ["ckeditor"],
  fileExclusionRegExp: /^(r|build)\.js|.*\.less$/,	//过滤，匹配到的文件将不会被输出到输出目录去

  optimizeCss: 'standard',

  removeCombined: true,   //如果为true，将从输出目录中删除已合并的文件
  waitSeconds: 15,
  paths: {
      jquery: 'jquery.min',
      text: 'text',
      app:"../app",
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
  //	 ,shim:{ .....}	  //其实JQ和avalon都不是严格AMD模式，能shim一下最好了，不过这里咱省略
})