$(document).ready(function() {
  $.ajaxSetup({ 
    cache: false,
    isLocal:true
  });
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/jmvx/gists",
    dataType: "json",
    success: function(result) {
      for (i in result) {
        url = result[i].html_url;
        for (f in result[i].files) {
          name = f.substr(0, f.indexOf('.'));
        }
        description = result[i].description;
        $("div#mygists").append("<a href='" + url + "' target='_blank'><div class='project'> <div class='name'>" + name + "</div><div class='description'>" + description + "</div></div></a>");
      }
      $(".project:even").addClass('left-col');
      $(".project:odd").addClass('right-col');
    },
    error: function(xhr, textStatus, errorThrown) {
      console.log(errorThrown);
      console.log(textStatus);
    }
  });
});