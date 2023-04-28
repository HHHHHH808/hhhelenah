
$(document).ready(function () {
    

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

    $(".bio, .press").fadeOut();

        //UNZOOM STILL MISSING
    if ($(this).is('#work-btn')){
     $(".work, .tags-work").fadeIn(100);
     $(".life, .tags-life").fadeOut(100);
     }
      else if($(this).is('#life-btn')){
        $(".work, .tags-work").fadeOut(100);
        $(".life, .tags-life").fadeIn(100);
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
    
     $('#bio-btn').on('click', function(){
  $('.bio').fadeIn();
$(".tags-work, .tags-life, .life, .work").fadeOut();
         $('h2').addClass('blur');
    });
});

}


<svg viewBox="0 0 300 300">
    <defs>
        <path id="text_0_path" d="M 0 100 A 100 100 0 1 1 300 150"/>
    </defs>
    <use xlink:href="#text_0_path"  fill="none"/>
<text>
        <textPath xlink:href="#text_0_path" startOffset="50%">
            <!-- 157.075 is the center of the length of an arc of radius 100 -->
                        <tspan x="-20" dy="40">Ivy Falls</tspan>

        </textPath>
    </text>
</svg>

<svg viewBox="0 0 300 300">
    <defs>
        <path id="text_0_path" d="M 0 100 A 100 100 0 1 1 300 150"/>
    </defs>
    <use xlink:href="#text_0_path"  fill="none"/>
    <text>
        <textPath xlink:href="#text_0_path" startOffset="50%">
            <!-- 157.075 is the center of the length of an arc of radius 100 -->
            <tspan x="-20" dy="40">Burnout</tspan>
        </textPath>
    </text>
</svg>
<svg viewBox="0 0 300 300">
    <defs>
        <path id="text_0_path" d="M 0 100 A 100 100 0 1 1 300 150"/>
    </defs>
    <use xlink:href="#text_0_path"  fill="none"/>
<text>
        <textPath xlink:href="#text_0_path" startOffset="50%">
            <!-- 157.075 is the center of the length of an arc of radius 100 -->
            <tspan x="-20" dy="40">Fluxys</tspan>
        </textPath>
    </text>
</svg>
<svg viewBox="0 0 300 300">
    <defs>
        <path id="text_0_path" d="M 0 100 A 100 100 0 1 1 300 150"/>
    </defs>
    <use xlink:href="#text_0_path"  fill="none"/>
<text>
        <textPath xlink:href="#text_0_path" startOffset="50%">
            <!-- 157.075 is the center of the length of an arc of radius 100 -->
                        <tspan x="-20" dy="40">Tellen met Viktor.</tspan>

        </textPath>
    </text>
</svg><svg viewBox="0 0 300 300">
    <defs>
        <path id="text_0_path" d="M 0 100 A 100 100 0 1 1 300 150"/>
    </defs>
    <use xlink:href="#text_0_path"  fill="none"/>
<text>
        <textPath xlink:href="#text_0_path" startOffset="50%">
            <!-- 157.075 is the center of the length of an arc of radius 100 -->
                        <tspan x="-20" dy="40">Eén rebranding</tspan>

        </textPath>
    </text>
</svg>
<svg viewBox="0 0 300 300">
    <defs>
        <path id="text_0_path" d="M 0 100 A 100 100 0 1 1 300 150"/>
    </defs>
    <use xlink:href="#text_0_path"  fill="none"/>
<text>
        <textPath xlink:href="#text_0_path" startOffset="50%">
            <!-- 157.075 is the center of the length of an arc of radius 100 -->            <tspan x="-20" dy="40">MNM Mashups</tspan>

        </textPath>
    </text>
</svg>