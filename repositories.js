$(document).ready(function() {
  
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/jmvx/repos",
    dataType: "json",
    success: function(result) {
      for (i in result) {
        url = result[i].html_url;
        name = result[i].name;
        description = result[i].description;
        if (result[i].homepage) {
          link = result[i].homepage;
        } else {
          link = url;
        }
        $("div#myprojects").append("<a href='" + link + "' target='_blank'><div class='project'> <div class='name'>" + name + "</div><div class='description'>" + description + "</div></div></a>");
      }
      
      $(".project:even").addClass('left-col');
      $(".project:odd").addClass('right-col');
      
      
    }
  });
  
});