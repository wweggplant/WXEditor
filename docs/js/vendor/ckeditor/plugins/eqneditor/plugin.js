/* 
 Equation Editor Plugin for CKEditor v4
 Version 2.1

 This plugin allows equations to be created and edited from within CKEditor.
 For more information goto: http://www.codecogs.com/latex/integration/ckeditor_v4/install.php
 
 Copyright CodeCogs 2006-2013
 Written by Will Bateman.
*/

CKEDITOR.plugins.add("eqneditor",{availableLangs:{en:1},lang:"en",requires:["dialog"],icons:"eqneditor",init:function(e){var t="latex.codecogs.com",n="https:"==document.location.protocol?"https://":"http://";CKEDITOR.scriptLoader.load([n+t+"/js/eq_config.js",n+t+"/js/eq_editor-lite-18.js"]);var i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",n+t+"/eqneditor/css/equation-embed.css"),document.getElementsByTagName("head")[0].appendChild(i);var a="eqneditorDialog";e.addCommand(a,new CKEDITOR.dialogCommand(a,{allowedContent:"img[src,alt]",requiredContent:"img[src,alt]"})),CKEDITOR.dialog.add(a,this.path+"dialogs/eqneditor.js"),e.ui.addButton("EqnEditor",{label:e.lang.eqneditor.toolbar,command:a,icon:this.path+"icons/eqneditor.png",toolbar:"insert"}),e.contextMenu&&(e.addMenuGroup(e.lang.eqneditor.menu),e.addMenuItem("eqneditor",{label:e.lang.eqneditor.edit,icon:this.path+"icons/eqneditor.png",command:a,group:e.lang.eqneditor.menu}),e.contextMenu.addListener(function(e){var t={};if(e.getAscendant("img",!0)){var n=e.getAttribute("src").match(/(gif|svg)\.latex\?(.*)/);if(null!=n)return t.eqneditor=CKEDITOR.TRISTATE_OFF,t}})),e.on("doubleclick",function(e){var t=e.data.element;if(t&&t.is("img")){var n=t.getAttribute("src").match(/(gif|svg)\.latex\?(.*)/);null!=n&&(e.data.dialog=a,e.cancelBubble=!0,e.returnValue=!1,e.stop())}},null,null,1)}});