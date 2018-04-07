$('.item_btn').click(function(){
  $('h1').css('color','red');
});

$('#brush').hover(
  function(){
    $('#brush').css('height','120px');
    $('#brush').css('width','120px');
  },
  function(){
    $('#brush').css('height','100px');
    $('#brush').css('width','100px');
  }    
);

$('#basket').hover(
  function(){
    $('#basket').css('height','120px');
    $('#basket').css('width','120px');
  },
  function(){
    $('#basket').css('height','100px');
    $('#basket').css('width','100px');
  }  
);

$('#shovel').hover(
  function(){
    $('#shovel').css('height','120px');
    $('#shovel').css('width','120px');
  },
  function(){
    $('#shovel').css('height','100px');
    $('#shovel').css('width','100px');
  }    
);


