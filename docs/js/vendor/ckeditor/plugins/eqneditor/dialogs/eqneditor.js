/* 
 Equation Editor Plugin for CKEditor v4
 Version 2.1

 This plugin allows equations to be created and edited from within CKEditor.
 For more information goto: http://www.codecogs.com/latex/integration/ckeditor_v4/install.php
 
 Copyright CodeCogs 2006-2013
 Written by Will Bateman.
 
 Special Thanks to:
  - Kyle Jones for a fix to allow multiple editor to load on one page
*/

window.CCounter=0,CKEDITOR.dialog.add("eqneditorDialog",function(t){var e="https:"==document.location.protocol?"https://":"http://";return window.CCounter++,{title:t.lang.eqneditor.title,minWidth:550,minHeight:380,resizable:CKEDITOR.DIALOG_RESIZE_NONE,contents:[{id:"CCEquationEditor",label:"EqnEditor",elements:[{type:"html",html:'<div id="CCtoolbar'+window.CCounter+'"></div>',style:"margin-top:-9px"},{type:"html",html:'<label for="CClatex'+window.CCounter+'">Equation (LaTeX):</label>'},{type:"html",html:'<textarea id="CClatex'+window.CCounter+'" rows="5"></textarea>',style:"border:1px solid #8fb6bd; width:540px; font-size:16px; padding:5px; background-color:#ffc"},{type:"html",html:'<label for="CCequation'+window.CCounter+'">Preview:</label>'},{type:"html",html:'<div style="position:absolute; left:5px; bottom:0; z-index:999"><a href="http://www.codecogs.com" target="_blank"><img src="'+e+'latex.codecogs.com/images/poweredbycc.gif" alt="Powered by CodeCogs" style="vertical-align:-4px; border:none"/></a> &nbsp; <a href="http://www.codecogs.com/latex/about.php" target="_blank">About</a> | <a href="http://www.codecogs.com/latex/popup.php" target="_blank">Install</a> | <a href="http://www.codecogs.com/pages/forums/forum_view.php?f=28" target="_blank">Forum</a> | <a href="http://www.codecogs.com" target="_blank">CodeCogs</a> &copy; 2007-2014</div><img id="CCequation'+window.CCounter+'" src="'+e+'www.codecogs.com/images/spacer.gif" />'}]}],onLoad:function(){EqEditor.embed("CCtoolbar"+window.CCounter,"","efull"),EqEditor.add(new EqTextArea("CCequation"+window.CCounter,"CClatex"+window.CCounter),!1)},onShow:function(){var e=this,o=t.getSelection(),a=o.getStartElement().getAscendant("img",!0);if(a){var i=a.getAttribute("src").match(/(gif|svg)\.latex\?(.*)/);null!=i&&EqEditor.getTextArea().setText(i[2]),e.insertMode=!0}e.setupContent(e.image)},onOk:function(){var e=t.document.createElement("img");e.setAttribute("alt",EqEditor.getTextArea().getLaTeX()),e.setAttribute("src",EqEditor.getTextArea().exportEquation("urlencoded")),t.insertElement(e),EqEditor.Example.add_history(EqEditor.getTextArea().getLaTeX())}}});