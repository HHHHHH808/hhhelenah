        (function() {
	const blurProperty = gsap.utils.checkPrefix("filter"),
		    blurExp = /blur\((.+)?px\)/,
		    getBlurMatch = target => (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];

	gsap.registerPlugin({
		name: "blur",
		get(target) {
			return +(getBlurMatch(target)[1]) || 0;
		},
		init(target, endValue) {
			let data = this,
          filter = gsap.getProperty(target, blurProperty),
          endBlur = "blur(" + endValue + "px)",
          match = getBlurMatch(target)[0],
          index;
      if (filter === "none") {
        filter = "";
      }
      if (match) {
        index = filter.indexOf(match);
        endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
      } else {
        endValue = filter + endBlur;
        filter += filter ? " blur(0px)" : "blur(0px)";
      }
      data.target = target; 
      data.interp = gsap.utils.interpolate(filter, endValue); 
		},
		render(progress, data) {
			data.target.style[blurProperty] = data.interp(progress);
		}
	});
})();
        
        function isValid() {
  var password = document.getElementById("clue").value;
  if (password == "allislight") {
$('.nav').removeClass('locked');
      $('.footer').fadeIn();
$('.form').fadeOut(); 
} else {
    $('#wrong').fadeIn(100,'swing');
    $('#clue').val('');
    $('#clue, .footer').on('click',function(){
        $('#wrong').fadeOut(100,'swing');
    });
  }
}
        
        
        if(screen.width <= '700') {


$(document).ready(function () {
    
  
    
    
  $("#clue").keypress(function (e) {
    if (e.which == 13) {
      $("#login").click();
      return false; //<---- Add this line
    }
  });
    
  $(".tags-work label input").on("click", function () {
    $(".item").removeClass("activate").children(".music").empty().hide();
    var thistag = $(this).parent("label").text();
    var oldtag = $("label input:checked")
      .not(this)
      .parent("label")
      .text()
      .split(" ");
    oldtag.pop();
    oldtag.push("Kiwi");

    if ($(this).is(".oll")) {
      if ($(this).is(":checked")) {
        var ni = $(".hidden-repo .item");
        $(".shown").append(ni);
        gsap.from(ni, {
          duration: 0.5,
          x: 300,
          
          stagger: {
            from: "random",
            amount: 0.5
          }
        });
        $(".tags-work label input").not(this).prop("checked", false);
      } else {
        $(".tags-work .oll").prop("checked", false);
        $(".shown .item")
          .addClass("hiding")
          .fadeOut(500, function () {
            $(this)
              .appendTo(".hidden-repo")
              .fadeIn(300)
              .removeClass("hiding activate")
              .children(".music")
              .empty();
          });
      }
    } else {
      //productietag aangevinkt
      if ($(this).is(":checked")) {
        if ($(".tags-work .oll").is(":checked")) {
          $(".tags-work .oll").prop("checked", false);
          $(".item")
            .not("." + thistag)
            .addClass("hiding")
            .fadeOut(500, function () {
              $(this)
                .appendTo(".hidden-repo")
                .fadeIn(300)
                .removeClass("hiding activate")
                .children(".music")
                .empty();
            });
        }
        $("." + thistag).each(function () {
          //aanwezig=niets
          if ($(this).is(":visible")) {
          } else {
            //afwezig= voeg toe
            $(".shown").append(this);
            gsap.from(this, { duration: 0.5, x: 300});
          }
        });
      } else {
        //productietag leeggevinkt
        $("." + thistag).each(function () {
          var classes = "\\b(" + oldtag.join("|") + ")\\b",
            regex = new RegExp(classes, "i");
          var elClasses = " " + $(this).attr("class").replace(/\s+/, " ") + " ";
          console.log(elClasses, regex);
          //als overeenkomstig met oude tags= niets
          if (regex.test(elClasses)) {
          } else {
            //zoniet= weg
            //  gsap.to(this, { duration: 0.5, width: 0, opacity: 0 });
            //$(this).appendTo('.hidden-repo');
            $(this)
              .addClass("hiding")
              .fadeOut(500, function () {
                $(this)
                  .appendTo(".hidden-repo")
                  .fadeIn(300)
                  .removeClass("hiding activate")
                  .children(".music")
                  .empty();
              });
          }
        });
      }
    }
  });
  $(".tags-life label input").on("click", function () {
    $(".itam").removeClass("active-itam").children(".music").empty().hide();
    var thistag = $(this).parent("label").text();
    var thislp = $("." + thistag);
    var oldtag = $("label input:checked").not(this).parent("label").text();
    var oldlp = $("." + oldtag);
    if ($(this).is(".oll")) {
      if ($(this).is(":checked")) {
        $(".tags-life .itam").fadeIn(100);
        $(".tags-life label input").not(this).prop("checked", false);
      } else {
        $(this).prop("checked", false);
        $(".tags-life .itam").fadeOut(100);
      }
    } else {
      $(".tags-life .oll").prop("checked", false);
      if ($("#forthcoming").is(":checked")) {
        $(".forthcoming").fadeIn(100);
      } else {
        $(".forthcoming").fadeOut(100);
      }

      if ($("#released").is(":checked")) {
        $(".released").fadeIn(100);
      } else {
        $(".released").fadeOut(100);
      }
    }
  });


  $("#work-btn,#life-btn").click(function () {
    $(this).removeClass("blur");
    $("h2").not(this).addClass("blur");
    $(".nav").removeClass("filler");
      $("h2").removeClass('spot');
      $("h1").removeClass('spot');
    $(".bio, .press").fadeOut();

        //UNZOOM STILL MISSING
    if ($(this).is('#work-btn')){
     $(".work, .tags-work").fadeIn(200);
     $(".life, .tags-life").fadeOut(200);
     }
      else if($(this).is('#life-btn')){
        $(".work, .tags-work").fadeOut(200);
        $(".life, .tags-life").fadeIn(200);
      }
      
    //reset work
    var ni = $(".hidden-repo .item");
    $(".shown").append(ni);
    gsap.from(ni, {
      duration: 0.5,
      x: 300,
      
      stagger: {
        from: "random",
        amount: 0.5
      }
    });
    $(".oll").prop("checked", true);
    $("label input").not(".oll").prop("checked", false);
    //reset life
    $(".life .itam").fadeIn(100);
    //stop players
    $(".item").removeClass("activate").children(".music").empty().hide();
    $(".itam").removeClass("active-itam").children(".music").empty().hide();
  });
  $(".item").on("click", function () {
      
      if ($(this).hasClass('activate')){
      }else{
    //overlapschuif
   $(this).addClass("activate");
   $(".item").not(this).children(".music").empty().hide();

   $(".item").not(this).removeClass("activate");
    //music
    $(this).children(".music").load("werk/" + $(this).attr("id") + ".html").fadeIn(300);
  }
  });
    
  $(".itam").on("click", function () {
    //overlapschuif
    $(this).addClass("active-itam");
    //  $(this).children(".music").toggle();
    $(".itam").not(this).removeClass("active-itam");
    //music
    $(this)
      .children(".music")
      .load("life/" + $(this).attr("id") + ".html")
      .fadeIn(500);
    $(".itam").not(this).children(".music").empty().hide();
  });
    
    $('#press-btn').on('click', function(){
  $('.press').fadeIn();
$(".tags-work, .tags-life, .life, .work").fadeOut();
$('h2').addClass('blur');
    });
    
       $('#bio-btn').on('click', function(e){
  $('.bio').fadeToggle(300);
    });

    $('.bio').on('click',function(){
        $('.bio').fadeOut(300);
    });
    $('.bio-box').on('click',function(e){
    e.stopPropagation();
    e.preventDefault();
    });
});

}
else{

$(document).ready(function () {
  
  $(".tags-work label input").on("click", function () {
      //klap items toe
    $(".item").removeClass("activate").children(".music").empty().hide();
      //zoek aangevinkten
    var thistag = $(this).parent("label").text();
    var oldtag = $("label input:checked")
      .not(this)
      .parent("label")
      .text()
      .split(" ");
    oldtag.pop();
    oldtag.push("Kiwi");
//all-work
    if ($(this).is(".oll")) {
      if ($(this).is(":checked")) {
        var ni = $(".hidden-repo .item");
        $(".shown").append(ni);
        gsap.from(ni, {
          duration: 0.5,
          x: 300,
          
          stagger: {
            from: "random",
            amount: 0.5
          }
        });
        $(".tags-work label input").not(this).prop("checked", false);
      } else {
        $(".tags-work .oll").prop("checked", false);
        $(".shown .item")
          .addClass("hiding")
          .fadeOut(500, function () {
            $(this)
              .appendTo(".hidden-repo")
              .fadeIn(300)
              .removeClass("hiding activate")
              .children(".music")
              .empty();
          });
      }
    } else {
      //productietag aangevinkt
      if ($(this).is(":checked")) {
        if ($(".tags-work .oll").is(":checked")) {
          $(".tags-work .oll").prop("checked", false);
          $(".item")
            .not("." + thistag)
            .addClass("hiding")
            .fadeOut(500, function () {
              $(this)
                .appendTo(".hidden-repo")
                .fadeIn(300)
                .removeClass("hiding activate")
                .children(".music")
                .empty();
            });
        }
        $("." + thistag).each(function () {
          //aanwezig=niets
          if ($(this).is(":visible")) {
          } else {
            //afwezig= voeg toe
            $(".shown").append(this);
            gsap.from(this, { duration: 0.5, x: 300});
          }
        });
      } else {
        //productietag leeggevinkt
        $("." + thistag).each(function () {
          var classes = "\\b(" + oldtag.join("|") + ")\\b",
            regex = new RegExp(classes, "i");
          var elClasses = " " + $(this).attr("class").replace(/\s+/, " ") + " ";
          console.log(elClasses, regex);
          //als overeenkomstig met oude tags= niets
          if (regex.test(elClasses)) {
          } else {
            //zoniet= weg
            //  gsap.to(this, { duration: 0.5, width: 0, opacity: 0 });
            //$(this).appendTo('.hidden-repo');
            $(this)
              .addClass("hiding")
              .fadeOut(500, function () {
                $(this)
                  .appendTo(".hidden-repo")
                  .fadeIn(300)
                  .removeClass("hiding activate")
                  .children(".music")
                  .empty();
              });
          }
        });
      }
    }
  });
  $(".tags-life label input").on("click", function () {
    $(".itam").removeClass("active-itam").children(".music").empty().hide();
    var thistag = $(this).parent("label").text();
    var thislp = $("." + thistag);
    var oldtag = $("label input:checked").not(this).parent("label").text();
    var oldlp = $("." + oldtag);
    if ($(this).is(".oll")) {
      if ($(this).is(":checked")) {
        $(".tags-life .itam").fadeIn(100);
        $(".tags-life label input").not(this).prop("checked", false);
      } else {
        $(this).prop("checked", false);
        $(".tags-life .itam").fadeOut(100);
      }
    } else {
      $(".tags-life .oll").prop("checked", false);
      if ($("#forthcoming").is(":checked")) {
        $(".forthcoming").fadeIn(100);
      } else {
        $(".forthcoming").fadeOut(100);
      }

      if ($("#released").is(":checked")) {
        $(".released").fadeIn(100);
      } else {
        $(".released").fadeOut(100);
      }
    }
  });
  $("#clue").keypress(function (e) {
    if (e.which == 13) {
      $("#login").click();
      return false; //<---- Add this line
    }
  });
  
  $("#work-btn,#life-btn").click(function () {
    $("body").on("scroll");
    $(this).removeClass("blur");
    $("h2").not(this).addClass("blur");
    $(".nav").removeClass("filler");

      $("h2").removeClass('spot');
      $("h1").removeClass('spot');
    $(".bio, .press").fadeOut();
    gsap.to(".nav", { duration: 0.3, zoom: 1 });

    if ($(this).is('#work-btn')){
     $(".work, .tags-work").fadeIn();
     $(".life, .tags-life").fadeOut();
     }
      else if($(this).is('#life-btn')){
        $(".work, .tags-work").fadeOut();
        $(".life, .tags-life").fadeIn();
      }
    //reset work
    var ni = $(".hidden-repo .item");
    $(".shown").append(ni);
    gsap.from(ni, {
      duration: 0.5,
      x: 300,
      stagger: {
        from: "random",
        amount: 0.5
      }
    });
    $(".oll").prop("checked", true);
    $("label input").not(".oll").prop("checked", false);
    //reset life
    $(".life .itam").fadeIn(100);
    //stop players
    $(".item").removeClass("activate").children(".music").empty().hide();
    $(".itam").removeClass("active-itam").children(".music").empty().hide();
  });
  $(".item").on("click", function () {
      
      if ($(this).hasClass('activate')){
      }else{
    //overlapschuif   
          $(".item").not(this).removeClass("activate");

   $(this).addClass("activate");
   $(".item").not(this).children(".music").empty().hide();

   $(".item").not(this).removeClass("activate");
    //music
    $(this).children(".music").load("werk/" + $(this).attr("id") + ".html").fadeIn(500);
  }
  });
  $(".itam").on("click", function () {
    //overlapschuif
    $(this).addClass("active-itam");
 // $(this).children(".music").toggle();
    $(".itam").not(this).children(".music").fadeOut().empty();
    $(".itam").not(this).removeClass("active-itam");
    //music
    $(this)
      .children(".music")
      .load("life/" + $(this).attr("id") + ".html")
      .show();
  });
    
    $('#press-btn').on('click', function(){
  $('.press').fadeIn();
$(".tags-work, .tags-life, .life, .work").fadeOut();
$('h2').addClass('blur');
    });
     $('#bio-btn').on('click', function(e){
  $('.bio').fadeToggle(300);
    e.stopPropagation();
    e.preventDefault();
    });
 $('.bio-box').on('click',function(e){
    e.stopPropagation();
    e.preventDefault();
    });
    $('.bio').on('click',function(){
        $('.bio').fadeOut(300);
    });
   
});
}

