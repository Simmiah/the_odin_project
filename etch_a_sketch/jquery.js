var grid = 10;

$(document).ready(function(){
  makeGrid(grid);
  $('.square').hover(function(){
    $(this).addClass('black');
  });

  $('button').click(function(){
    $('.square').remove();
    var grid = prompt("Enter number of boxes per side in grid");
    makeGrid(grid);
    $('.square').hover(function(){
      $(this).addClass('black');
    });
  });
});

function makeGrid(grid){
  if (isNaN(grid) || grid < 1 || grid > 40) {
    var grid = 10;
  }
  for (y=0; y<grid; y++) {
    for (x=0; x<=grid; x++) {
      if (x != grid) {
        $('#container').append('<div class="square right"></div>');
      } else {
        $('#container').append('<div class="clear"></div>');
      }
    }
  }
}
