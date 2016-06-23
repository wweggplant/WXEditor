define(["jquery","ractive","ckeditor","mixitup","nicescroll"],function () {
  'use strict';
  var init = function () {
   CKEDITOR.editorConfig = function (config) {
      config.language = 'zh-cn';
      //config.skin = 'minimalist';
      config.pasteFilter = null;
      config.forcePasteAsPlainText = false;
      config.allowedContent = true;
      config.pasteFromWordRemoveFontStyles = false;
      config.pasteFromWordRemoveStyles = false;
      config.extraPlugins = 'autosave,notification,floating-tools,wordcount,' +
        'clipboard,pastefromword,smiley,dialog,preview,selectall';
      config.height = 637;
      config.enterMode = CKEDITOR.ENTER_DIV;

      config.wordcount = {
        showParagraphs: true,
        showWordCount: true,
        showCharCount: true,
        countSpacesAsChars: true,
        countHTML: true
      };

      config.toolbar = [
        {name: 'document', items: [ 'Copy', 'SelectAll', 'Preview']},
        {name: 'super', items: ['Smiley', 'RemoveFormat']},
        {
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'CreateDiv']
        },
        {
          name: 'paragraph',
          items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote',
            '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
        },
        '/',
        {name: 'clipboard', items: ['Undo', 'Redo']},
        {name: 'styles', items: ['Format', 'Font', 'FontSize']},
        {name: 'colors', items: ['TextColor', 'BGColor']},
        {name: 'tools', items: ['Maximize', 'ShowBlocks', 'Source',"about"]}
      ];
    };
//     CKEDITOR.editorConfig = function( config ) {
//   // Define changes to default configuration here.
//   // For complete reference see:
//   // http://docs.ckeditor.com/#!/api/CKEDITOR.config
//       config.language = 'zh-cn';
//       //config.skin = 'minimalist';
//       config.pasteFilter = null;
//       config.forcePasteAsPlainText = false;
//       config.allowedContent = true;
//       config.pasteFromWordRemoveFontStyles = false;
//       config.pasteFromWordRemoveStyles = false;
//       config.extraPlugins = 'floating-tools,notification,autosave,templates,wordcount,' +
//         'clipboard,pastefromword,smiley,dialog,preview,selectall';
//       config.height = 637;
//       config.enterMode = CKEDITOR.ENTER_DIV;

//       config.wordcount = {
//         showParagraphs: true,
//         showWordCount: true,
//         showCharCount: true,
//         countSpacesAsChars: true,
//         countHTML: true
//       };
//   config.allowedContent = true;
//   config.height = 637;
//   // The toolbar groups arrangement, optimized for two toolbar rows.
//   config.toolbar = [
//         {name: 'document', items: ['Copy', 'SelectAll', 'ClearAll', 'Preview']},
//         {name: 'super', items: ['Smiley', 'RemoveFormat']},
//         {
//           name: 'basicstyles',
//           items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'CreateDiv']
//         },
//         {
//           name: 'paragraph',
//           items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote',
//             '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
//         },
//         '/',
//         {name: 'clipboard', items: ['Undo', 'Redo']},
//         {name: 'styles', items: ['Format', 'Font', 'FontSize']},
//         {name: 'colors', items: ['TextColor', 'BGColor']},
//         {name: 'tools', items: ['Maximize', 'ShowBlocks', 'Source']}
//       ];
//   // Remove some buttons provided by the standard plugins, which are
//   // not needed in the Standard(s) toolbar.
//   config.removeButtons = 'Underline,Subscript,Superscript';

//   // Set the most common block elements.
//   config.format_tags = 'p;h1;h2;h3;pre';

//   // Simplify the dialog windows.
//   config.removeDialogTabs = 'image:advanced;link:advanced';
// };
    var congee = CKEDITOR.replace('congee', {
      uiColor: '#fafafa'
    });
    congee.on('change', function (evt) {

    });
    congee.on('instanceReady', function(event) {
      $(".sandbox").on('click', '>section', function(event) {
        var html  = $(this).html(); 
      // congee.insertElement(CKEDITOR.dom.element.createFromHtml(html));
        var template = $(event.currentTarget).html();
        congee.insertHtml(template);
      });
    });
  };



 
  
  var colorPicker = function (changeCB) {
    $('#colorpicker').spectrum({
      showPaletteOnly: true,
      togglePaletteOnly: true,
      togglePaletteMoreText: 'more',
      togglePaletteLessText: 'less',
      color: '#4caf50',
      palette: [
        ['#1abc9c', '#16a085', '#2ecc71', '#27ae60', '#4caf50', '#8bc34a', '#cddc39'],
        ['#3498db', '#2980b9', '#34495e', '#2c3e50', '#2196f3', '#03a9f4', '#00bcd4', '#009688'],
        ['#e74c3c', '#c0392b', '#f44336'],
        ['#e67e22', '#d35400', '#f39c12', '#ff9800', '#ff5722', '#ffc107'],
        ['#f1c40f', '#ffeb3b'],
        ['#9b59b6', '#8e44ad', '#9c27b0', '#673ab7', '#e91e63', '#3f51b5'],
        ['#795548'],
        ['#9e9e9e', '#607d8b', '#7f8c8d', '#95a5a6', '#bdc3c7'],
        ['#ecf0f1', 'efefef']
      ],
      change: changeCB
    });
  };
  return {
    init: init,
    colorPicker:colorPicker
  };
});