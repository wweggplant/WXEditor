CKEDITOR.plugins.add("music",{requires:"dialog",icons:"music",init:function(i){i.addCommand("music",new CKEDITOR.dialogCommand("music",{allowedContent:"iframe[align,longdesc,frameborder,height,name,scrolling,src,title,width]",requiredContent:"iframe"})),i.ui.addButton&&i.ui.addButton("Music",{label:"QQ音乐",command:"music",toolbar:"insert,50"}),CKEDITOR.dialog.add("music",this.path+"dialogs/music.js")}});