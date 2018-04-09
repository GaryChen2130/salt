$(document).ready(function(){
  $('#brush').hide();
  $('#basket').hide();
  $('#shovel').hide();
  $('#shade').css('left','0px');
  $('#shade').css('top','0px');
  $('#intro_page').hide();

/*item_btn onClick()*/

var item;
var brush = document.getElementById("brush");
var basket = document.getElementById("basket");
var shovel = document.getElementById("shovel");
var on_hand = 0;
var has_basket = false;

$('#brush_btn').click(function(){
  $('#brush').show();
  $('#shovel').hide();
  on_hand = 1;
  item = brush;
  getItem();
});

$('#basket_btn').click(function(){
  $('#basket').show();
  $('#brush').hide();
  $('#shovel').hide();
  on_hand = 2;
  has_basket = true;
  item = basket;
  getItem();
});

$('#shovel_btn').click(function(){
  $('#shovel').show();
  $('#brush').hide();
  on_hand = 3;
  item = shovel;
  getItem();
});


/*item_btn hover()*/

$('#brush_btn').hover(
  function(){
    $('#brush_btn').css('height','120px');
    $('#brush_btn').css('width','120px');
  },
  function(){
    $('#brush_btn').css('height','100px');
    $('#brush_btn').css('width','100px');
  }    
);

$('#basket_btn').hover(
  function(){
    $('#basket_btn').css('height','120px');
    $('#basket_btn').css('width','120px');
  },
  function(){
    $('#basket_btn').css('height','100px');
    $('#basket_btn').css('width','100px');
  }  
);

$('#shovel_btn').hover(
  function(){
    $('#shovel_btn').css('height','120px');
    $('#shovel_btn').css('width','120px');
  },
  function(){
    $('#shovel_btn').css('height','100px');
    $('#shovel_btn').css('width','100px');
  }    
);


/*Functions control items*/

function getItem(){
  document.onmousemove = moveItem;
  item.onclick = setItem;
}

function moveItem(e){
  if(!e)e = window.event;
  $(item).css('top',(e.clientY) + "px"); 
  $(item).css('left',(e.clientX - 20) + "px");
}

function setItem(){
  document.onmousemove = null;
  if(on_hand == 2){item.onclick = getItem;}
  else{
    $(item).hide();
    on_hand = 0;
  }
}


/* Process of making salt */

var pile_state = 0;
var basket_state = 0;
var on_pile = false;
var salt = document.getElementById("salt");
var mt = document.getElementById("mountain");
$('#salt').hover(
    function(){
      if(!on_pile && (on_hand == 1) && (pile_state < 5)){
        $('#salt').css('width',(salt.width + 20) + "px");
        $('#salt').css('height',(salt.height + 10) + "px");
        on_pile = true;
        ++pile_state;
      }
      else if(!on_pile && has_basket && (on_hand == 3) && (pile_state > 0) && (basket_state < 5)){
        
        $('#salt').css('width',(salt.width - 20) + "px");
        $('#salt').css('height',(salt.height - 10) + "px");
        on_pile = true;
        --pile_state;
        
        ++basket_state;
        if(basket_state == 1)basket.setAttribute("src","res/basket.png");
        else if(basket_state == 2)basket.setAttribute("src","res/basket1.png");
        else if(basket_state == 3)basket.setAttribute("src","res/basket2.png");
        else if(basket_state == 4)basket.setAttribute("src","res/basket3.png");
        else if(basket_state == 5)basket.setAttribute("src","res/basket4.png");

      }
    },
    function(){
      if(on_pile)on_pile = false;
    }

);

$('#mountain').hover(function(){ 
  if((on_hand == 2) && (mt.width < 500)){
    $('#mountain').css('width',(mt.width + 6*basket_state) + "px");
    $('#mountain').css('height',(mt.height + 4*basket_state) + "px");
    $('#mountain').css('left',(mt.left - 6*basket_state) + "px");
    $('#mountain').css('top',(mt.top - 4*basket_state) + "px");
    basket_state = 0;
    basket.setAttribute("src","res/basket.png");
  }
});


/* Web Control Buttons */

$('#start_btn').hover(
    function(){
      $('#start_btn').css('width','140px');
      $('#start_btn').css('height','140px');
    },
    function(){
      $('#start_btn').css('width','120px');
      $('#start_btn').css('height','120px');
    }
);

$('#intro_btn').hover(
    function(){
      $('#intro_btn').css('width','200px');
      $('#intro_btn').css('height','100px');
    },
    function(){
      $('#intro_btn').css('width','160px');
      $('#intro_btn').css('height','80px');
    }
);

$('#restart_btn').hover(
    function(){
      $('#restart_btn').css('width','200px');
      $('#restart_btn').css('height','100px');
    },
    function(){
      $('#restart_btn').css('width','160px');
      $('#restart_btn').css('height','80px');
    }
);

$('#start_btn').click(function(){
  $('#shade').hide();
});

$('#intro_btn').click(function(){
  $('#basket').hide();
  $('#intro_page').show();
  $('#intro_page').css('left','0px');
  $('#intro_page').css('top','0px');
});

$('#restart_btn').click(function(){
    on_hand = 0;
    $('#brush').hide();
    $('#basket').hide();
    $('#shovel').hide();
    basket_state = 0;
    basket.setAttribute("src","res/basket.png");
    pile_state = 0;
    on_pile = false;
    $('#salt').css('width','100px');
    $('#salt').css('height','50px');
    $('#mountain').css('left','70px');
    $('#mountain').css('top','320px');
    $('#mountain').css('width','300px');
    $('#mountain').css('height','200px');
});

$('#intro_page').click(function(){
  $('#intro_page').hide();    
});

});

