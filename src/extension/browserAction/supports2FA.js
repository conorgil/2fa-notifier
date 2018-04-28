/*document.addEventListener('DOMContentLoaded', function (event) {
  let more2faInfoButton = document.getElementById('more2faInfoButton');
  let windowHeight = document.body.clientHeight;

  more2faInfoButton.addEventListener('click', function () {
    var more2faInfo = document.getElementById('methods');
    if (more2faInfo.style.display === 'block') {
      more2faInfo.style.display = 'none';
    } else {
      more2faInfo.style.display = 'block';
    }
  });

});/* */

$(function(){

  let originalWindowHeight = $(document).height();

  $("#more2faInfoButton").click(function() {
    
    

    if ($(".methods").css("display") === 'none') {
      $(".methods").toggle();
      //$("html").css("height", originalWindowHeight);
      $("#more2faInfoButton").addClass("methods__info-btn--hide");
      //console.log($(".methods").css("display"));
      //console.log("original window height = " + originalWindowHeight);
    }
  });

});
