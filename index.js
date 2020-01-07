marked.setOptions({breaks: true});

$(document).ready( function() {
  $("#preview").html(
    marked($("#editor").val())
  );
});

function preview(val) {
  $("#preview").html(marked(val));
}

