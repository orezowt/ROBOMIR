// $("input[name='phone']").mask("+7(999)999-9999")
$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};


$("input[name='phone']").click(function(){
	if (this.value == "+7(___) ___-____")
  $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");