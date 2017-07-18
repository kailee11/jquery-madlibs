$(function() {
  console.log("whee!")

  // ---- event handler ---- //
  $("#btn-click").click(function(e) {
    // grab the values from the input boxes, then append them to the DOM
    $(".input1").empty().append($("input.input1").val());
    $(".input2").empty().append($("input.input2").val());
    $(".input3").empty().append($("input.input3").val());
    $(".input4").empty().append($("input.input4").val());
    $(".input5").empty().append($("input.input5").val());
    $(".input6").empty().append($("input.input6").val());
    $(".input7").empty().append($("input.input7").val());
    $(".input8").empty().append($("input.input8").val());
    $(".input9").empty().append($("input.input9").val());
    $(".input10").empty().append($("input.input10").val());
  });

});