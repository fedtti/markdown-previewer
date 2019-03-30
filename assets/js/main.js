$(() => {
  $("#preview").html(marked($("#editor").attr("placeholder")));

  $("#editor").on("input", () => {
    if (!$.trim($("#editor").val())) {
      $("#preview").html(marked($("#editor").attr("placeholder")));
    } else {
      $("#preview").html(marked($("#editor").val()));
    }
  });
});
