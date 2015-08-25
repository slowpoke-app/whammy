// $(document).ready(function() {
//     $('.popupBasic').click(function() {
//         $('.popupBasic').click('button')fadeIn('slow');
//     });
// });
//      $(function() {
//         var moveLeft = 20;
//         var moveDown = 10;
        
//         $('a#trigger').click(function(e) {
//           $('div#pop-up').show();
//           //.css('top', e.pageY + moveDown)
//           //.css('left', e.pageX + moveLeft)
//           //.appendTo('body');
//         }, function() {
//           $('div#pop-up').hide();
//         });
        
//         $('a#trigger').mousemove(function(e) {
//           $("div#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
//         });
        
//       });




function getSelected() { 
    if (window.getSelection) {
        return window.getSelection();
    }
    else if (document.getSelection) {
        return document.getSelection();
    }
    else {
        var selection = document.selection && document.selection.createRange();
        if (selection.text) {
            return selection.text;
        }
        return false;
    }
    return false;
}


$(document).mouseup(function() {
    var selection = getSelected();

    if (selection) {
        alert(selection);
    }
});   