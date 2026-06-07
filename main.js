// ============================================================
// PROJECTEN-CONFIGURATIE
// Eén centrale bron voor alle work- en life-content. De site
// wordt hieruit automatisch opgebouwd (zie verdere stappen).
// ============================================================
const PROJECTS = {
  work: [
    {
      id: "wayout",
      titel: "Andrea Murtas",
      categorieen: ["mixing", "production"],
      afbeelding: "assets/Images/Work/wide-circ/blur/circ-wayout.png",
      type: "audio",
      beschrijving: "Mixing for Andrea Murtas: The Way Out. Client: Sonhouse.",
      nummers: [
        { id: "andrea", titel: "The Way Out", duur: "6:44" }
      ]
    },
    {
      id: "ww",
      titel: "Warmste Week 2019",
      categorieen: ["sonic-branding", "sound-design"],
      afbeelding: "assets/Images/Work/wide-circ/blur/circ-ww.png",
      type: "audio",
      beschrijving: "Soundtrack for StuBru's promotional campaign for 'De Warmste Week 2019'.",
      nummers: [
        { id: "warmweek", titel: "Warmste Week", duur: "0:07" },
        { id: "sba1", titel: "Harp Fall", duur: "0:11" },
        { id: "sba2", titel: "4ths", duur: "0:07" },
        { id: "sba3", titel: "Dumb 2", duur: "0:07" },
        { id: "sba4", titel: "Dumb 3", duur: "0:07" },
        { id: "sba5", titel: "Koor", duur: "0:08" },
        { id: "sba6", titel: "Explosion", duur: "0:07" },
        { id: "sba7", titel: "Riff 1", duur: "0:07" },
        { id: "sba8", titel: "Riff 2", duur: "0:07" },
        { id: "sbe1", titel: "Euphoria Long", duur: "0:08" },
        { id: "sbe2", titel: "Euphoria Voice", duur: "0:07" }
      ]
    },
    {
      id: "siebert",
      titel: "Truck",
      categorieen: ["soundtracks", "sound-design"],
      afbeelding: "assets/Images/Work/wide-circ/blur/circ-truck.png",
      type: "embed",
      embedUrl: "https://player.vimeo.com/video/348057330",
      beschrijving: "Soundtrack for Siebert Mispelons videowork, 'Truck'."
    },
    {
      id: "burnout",
      titel: "Burnout",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/wide-circ/blur/circ-burnout.png",
      type: "embed",
      embedUrl: "https://www.youtube.com/embed/eq25I4exauE",
      beschrijving: "Mastering for Epong's soundtrack of Rik Chaubet's film, 'Burnout'."
    },
    {
      id: "ivy",
      titel: "Ivy Falls",
      categorieen: ["production"],
      afbeelding: "assets/Images/Work/wide-circ/blur/circ-ivy.png",
      type: "embed",
      embedUrl: "https://open.spotify.com/embed/track/1iQnPzwIEkNyG0B5zPwIUn",
      beschrijving: "Production of 'Beautiful Stranger' by Ivy Falls with Kasper Cornelus."
    },
    {
      id: "schob",
      titel: "Schobbee",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/wide-circ/blur/schob.png",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=202891063",
      beschrijving: "Mastering for 'Poe's Law' by Schobbee."
    },
    {
      id: "people",
      titel: "People's People",
      categorieen: ["sound-design"],
      afbeelding: "assets/Images/Work/wide-circ/blur/circ-people.jpg",
      type: "embed",
      embedUrl: "https://www.youtube.com/embed/FD35-NHz7BI",
      beschrijving: "Sound design and extra arrangements for Lip Service's EP 'People's People'."
    },
    {
      id: "green",
      titel: "Green Greener Greenest",
      categorieen: ["mastering", "mixing", "production", "sound-design", "soundtracks"],
      afbeelding: "assets/Images/Work/wide-circ/blur/circ-green.jpg",
      type: "embed",
      embedUrl: "https://player.vimeo.com/video/221453555",
      beschrijving: "Sound-design voor Senne Marquenie's short movie 'Green, Greener, Greenest'."
    }
  ],

  life: [
    {
      id: "comp",
      titel: "Compressed '16-'17",
      status: "released",
      afbeelding: "assets/Images/Life/logocompressed.jpg",
      beschrijving: "A series of songs made between '16 '17, sonically bundled by various tape & compression emulations.",
      nummers: [
        { id: "comp1", titel: "Blue", duur: "02:33" },
        { id: "comp2", titel: "Hi Tim", duur: "03:39" },
        { id: "comp3", titel: "We Had To Take Everything Since The Bag Ripped", duur: "03:56" },
        { id: "comp4", titel: "Sour", duur: "00:23" },
        { id: "comp5", titel: "Conservatory", duur: "06:07" },
        { id: "comp6", titel: "Charisma", duur: "03:53" },
        { id: "comp7", titel: "Far", duur: "04:21" },
        { id: "comp8", titel: "Reminiscence", duur: "06:59" },
        { id: "comp9", titel: "Tom", duur: "02:58" },
        { id: "comp-a", titel: "Lip Service - Together Remix", duur: "9:59" },
        { id: "comp-b", titel: "Cry", duur: "07:18" },
        { id: "comp-c", titel: "Abba", duur: "02:56" },
        { id: "comp-d", titel: "Litefeet", duur: "03:59" },
        { id: "comp-e", titel: "The Sun Is Crying", duur: "03:37" },
        { id: "comp-f", titel: "Dance Wimme", duur: "04:18" },
        { id: "comp-g", titel: "Between The Brakes", duur: "01:50" },
        { id: "comp-h", titel: "The Movie With Roses", duur: "05:23" },
        { id: "comp-i", titel: "Chauvinist Anthem", duur: "10:00" },
        { id: "comp-j", titel: "Myxolydian", duur: "02:07" },
        { id: "comp-k", titel: "No Impro", duur: "04:21" },
        { id: "comp-l", titel: "Whei Whu", duur: "02:04" },
        { id: "comp-m", titel: "Test", duur: "04:38" },
        { id: "comp-n", titel: "Music To Cut Your Perineum To", duur: "04:52" },
        { id: "comp-o", titel: "For You To Play In Your Dj Sets", duur: "11:58" },
        { id: "comp-p", titel: "Talk To Me", duur: "13:40" }
      ]
    },
    {
      id: "hhh",
      titel: "Helenah",
      status: "released",
      afbeelding: "assets/Images/Life/logo12.jpg",
      beschrijving: "Debut album on the Brussels based label 'Montage'.",
      nummers: [
        { id: "intro", titel: "Intro", duur: "01:46" },
        { id: "hysteria", titel: "Hysteria", duur: "02:29" },
        { id: "santiago", titel: "Santiago", duur: "01:35" },
        { id: "interludea", titel: "Interlude I", duur: "01:28" },
        { id: "ott", titel: "OTT", duur: "00:57" },
        { id: "wdyi", titel: "Who Do You Is", duur: "03:37" },
        { id: "interludeb", titel: "Interlude II", duur: "01:02" },
        { id: "soil", titel: "Soil", duur: "03:14" },
        { id: "greenhorn", titel: "Greenhorn", duur: "05:44" },
        { id: "interludec", titel: "Interlude III", duur: "01:15" },
        { id: "futurism", titel: "Futurism", duur: "06:09" },
        { id: "ghq", titel: "GHQ", duur: "05:07" },
        { id: "interd", titel: "Interlude IV", duur: "00:41" },
        { id: "schurft", titel: "Schurft", duur: "03:18" },
        { id: "tlgm", titel: "TLGFM", duur: "03:43" }
      ]
    },
    {
      id: "ora",
      titel: "Ora et Labora",
      status: "forthcoming",
      afbeelding: "assets/Images/Life/logo-ora.jpg",
      beschrijving: "Demo of EP with Tore Snauwaert & Gergana Velikova.",
      nummers: [
        { id: "ora1", titel: "Ora Et Labora", duur: "08:22" }
      ]
    },
    {
      id: "fili",
      titel: "Filibus LP",
      status: "forthcoming",
      afbeelding: "assets/Images/Life/logofili.jpg",
      beschrijving: "A live recording of a live accompaniment for a silent movie.",
      nummers: [
        { id: "fili-1", titel: "Track 1", duur: "02:09" },
        { id: "fili-2", titel: "Track 2", duur: "03:06" },
        { id: "fili-3", titel: "Track 3", duur: "03:06" },
        { id: "fili-4", titel: "Track 4", duur: "05:36" },
        { id: "fili-5", titel: "Track 5", duur: "03:29" },
        { id: "fili-6", titel: "Track 6", duur: "03:29" },
        { id: "fili-7", titel: "Track 7", duur: "05:36" },
        { id: "fili-8", titel: "Track 8", duur: "03:29" },
        { id: "fili-9", titel: "Track 9", duur: "03:06" },
        { id: "fili-a", titel: "Track 10", duur: "12:47" },
        { id: "fili-b", titel: "Track 11", duur: "11:21" },
        { id: "fili-c", titel: "Track 12", duur: "12:47" },
        { id: "fili-d", titel: "Track 13", duur: "04:25" }
      ]
    }
  ]
};

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

// Mobiel/desktop wordt bepaald via matchMedia (i.p.v. de oudere screen.width string-vergelijking),
// zodat de check consistent en betrouwbaar is.
const isMobile = () => window.matchMedia('(max-width: 700px)').matches;

// ============================================================
// SITE-OPBOUW VANUIT PROJECTS
// De onderstaande helpers bouwen de work- en life-items en hun
// inhoud (audiospeler / embed / video) volledig op uit de
// PROJECTS-array. Er wordt niets meer extern ingeladen
// (werk/*.html en life/*.html bestaan niet meer).
// ============================================================

// De audiomappen onder assets/Audio/Life/ gebruiken niet altijd
// dezelfde naam als het project-id (bv. id "hhh" -> map "helenah").
const LIFE_AUDIO_FOLDERS = {
  comp: "comp",
  hhh: "helenah",
  ora: "ora",
  fili: "filibus"
};

function findProject(list, id) {
  return list.filter(function (p) { return p.id === id; })[0];
}

function workAudioPath(trackId) {
  return "assets/Audio/Work/" + trackId + ".mp3";
}

function lifeAudioPath(project) {
  var folder = LIFE_AUDIO_FOLDERS[project.id] || project.id;
  return function (trackId) {
    return "assets/Audio/Life/" + folder + "/" + trackId + ".mp3";
  };
}

function buildProjectImage(project) {
  return $('<img>')
    .attr('src', project.afbeelding)
    .css('object-position', project.afbeeldingPositie || 'center');
}

function buildWorkItem(project) {
  var $item = $('<div class="item"></div>')
    .attr('id', project.id)
    .addClass((project.categorieen || []).join(' '))
    .append(buildProjectImage(project))
    .append('<div class="music"></div>')
    .append($('<h4></h4>').text(project.titel));
  return $item;
}

function buildLifeItem(project) {
  var $itam = $('<div class="itam"></div>')
    .attr('id', project.id)
    .addClass(project.status)
    .append(buildProjectImage(project))
    .append('<div class="music"></div>')
    .append($('<h4></h4>').html(project.titel));
  return $itam;
}

function renderWorkItems() {
  var $repo = $('.hidden-repo');
  PROJECTS.work.forEach(function (project) {
    $repo.append(buildWorkItem(project));
  });
}

function renderLifeItems() {
  var $albums = $('.albums');
  PROJECTS.life.forEach(function (project) {
    $albums.append(buildLifeItem(project));
  });
}

// Bouwt het basis-spelermarkup (audio-element, play/pause-knop, progressbar)
function buildPlayerMarkup() {
  return '<audio>Your browser does not support HTML 5 Player.</audio>' +
    '<button class="pp">&#9658;</button>' +
    '<input type="range" id="progress-bar" min="0" max="" value="0" />';
}

function buildTrackList(nummers) {
  var $ul = $('<ul></ul>');
  nummers.forEach(function (track) {
    $ul.append(
      $('<li></li>').append(
        $('<a href="#" class="audio play"></a>')
          .attr('data-music-id', track.id)
          .text(track.titel),
        $('<p></p>').text(track.duur)
      )
    );
  });
  return $ul;
}

// Generieke embed-wrapper (Vimeo/YouTube/Spotify/Bandcamp werken allemaal
// met deze gangbare iframe-attributen).
function buildEmbed(embedUrl) {
  return $('<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    .attr('src', embedUrl);
}

function buildVideo(videoBestand) {
  return $('<video width="100%" height="auto" controls></video>')
    .append($('<source type="video/mp4">').attr('src', videoBestand))
    .append('Your browser does not support the video tag.');
}

// Herbruikbare audiospeler-logica (gebaseerd op de oorspronkelijke
// window.Formaweb.Player uit de werk/life-snippets), nu data-driven
// vanuit de "nummers"-array van een project.
function initAudioPlayer($content, nummers, pathFn) {
  var audio = $content.find('audio')[0];
  var $pp = $content.find('.pp');
  var progressBar = $content.find('#progress-bar')[0];
  var playlist = nummers.map(function (track) { return { id: track.id }; });
  var len = playlist.length - 1;
  var current = 0;

  function run(music) {
    audio.src = pathFn(music.id);
    audio.load();
  }
  function next() {
    current++;
    if (current > len) current = 0;
  }
  function playById(id) {
    var idx;
    $.each(playlist, function (i, v) {
      if (v.id == id) idx = i;
    });
    if (idx !== undefined) {
      current = idx;
      run(playlist[current]);
    }
  }

  run(playlist[0]);

  audio.addEventListener('ended', function () {
    next();
    run(playlist[current]);
    audio.play();
    $content.find('.audio.play').removeClass('playing');
  });

  audio.addEventListener('play', function () {
    var zoeker = playlist[current].id;
    $content.find('.audio.play').filter(function () {
      return $(this).attr('data-music-id').match(zoeker);
    }).addClass('playing');
  });

  $content.find('.audio.play').on('click', function () {
    $(this).parent('li').siblings().children('.play').removeClass('playing');
    var zoeker = playlist[current].id;
    var music_id = $(this).attr('data-music-id');
    if (zoeker == music_id) {
      if (audio.paused) {
        audio.play();
        $pp.html('&#10074;&#10074;');
      } else {
        audio.pause();
        $pp.html('&#9658;');
      }
    } else {
      playById(music_id);
      audio.play();
      $pp.html('&#10074;&#10074;');
    }
    return false;
  });

  $pp.on('click', function () {
    if (audio.paused) {
      audio.play();
      $(this).html('&#10074;&#10074;');
    } else {
      audio.pause();
      $(this).html('&#9658;');
    }
    return false;
  });

  function updateProgressValue() {
    if (audio.duration) {
      progressBar.max = audio.duration;
      progressBar.value = audio.currentTime;
    }
  }
  setInterval(updateProgressValue, 500);
  progressBar.addEventListener('input', function () {
    audio.currentTime = progressBar.value;
  });
  progressBar.addEventListener('click', function (e) {
    e.stopPropagation();
  });
}

// Vult een ".music"-container met de inhoud van een project
// (beschrijving + speler/embed/video), volledig opgebouwd uit data.
function loadProjectContent($music, project, pathFn) {
  $music.empty();

  // Life-projects hebben geen "type"-veld (ze zijn altijd audio-albums),
  // dus detecteren we audio-content op basis van de aanwezigheid van "nummers".
  var isAudio = project.type === 'audio' || (!project.type && Array.isArray(project.nummers));

  var $content = $('<div class="content"></div>').append(
    $('<h5></h5>').text(project.beschrijving)
  );

  if (isAudio) {
    $content.append(buildPlayerMarkup());
    $content.append(buildTrackList(project.nummers));
  }

  $music.append($content);

  if (project.type === 'embed') {
    $music.append(buildEmbed(project.embedUrl));
  } else if (project.type === 'video') {
    $music.append(buildVideo(project.videoBestand));
  }

  if (isAudio) {
    initAudioPlayer($content, project.nummers, pathFn);
  }
}


$(document).ready(function () {

  // TIJDELIJKE BYPASS: het wachtwoordscherm is voorlopig niet nodig.
  // Verwijder dit blokje om het wachtwoordscherm terug te activeren.
  $('.nav').removeClass('locked');
  $('.footer').fadeIn();
  $('.form').fadeOut();

  // Bouw de work- en life-items op vanuit PROJECTS, vóórdat alle
  // hieronder volgende handlers eraan gekoppeld worden.
  renderWorkItems();
  renderLifeItems();

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
    // Op desktop wordt scroll-gedrag gereset en de nav-zoom teruggezet via gsap;
    // op mobiel is dat niet nodig (geen zoom-effect op de nav).
    if (!isMobile()) {
      $("body").on("scroll");
      gsap.to(".nav", { duration: 0.3, zoom: 1 });
    }

    $(this).removeClass("blur");
    $("h2").not(this).addClass("blur");
    $(".nav").removeClass("filler");
      $("h2").removeClass('spot');
      $("h1").removeClass('spot');
    $(".bio, .press").fadeOut();

        //UNZOOM STILL MISSING
    // Mobiel gebruikt een expliciete fade-duur (200ms); desktop gebruikt de jQuery-default.
    var workLifeFadeDuration = isMobile() ? 200 : undefined;
    if ($(this).is('#work-btn')){
     $(".work, .tags-work").fadeIn(workLifeFadeDuration);
     $(".life, .tags-life").fadeOut(workLifeFadeDuration);
     }
      else if($(this).is('#life-btn')){
        $(".work, .tags-work").fadeOut(workLifeFadeDuration);
        $(".life, .tags-life").fadeIn(workLifeFadeDuration);
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

  // Klik enkel op de afbeelding opent/sluit een item — niet ergens in de
  // hele kolom. Zo blijft de cursor in de rest van het rayon de gewone
  // pijl (geen verwarrende "klikbaar"-wijsvinger overal), en kan de
  // gebruiker er ook gewoon verticaal doorheen scrollen (bv. bij een
  // lange tracklist) zonder per ongeluk te klikken.
  $(".item").on("click", "img", function (e) {
    e.stopPropagation();
    var $item = $(this).closest(".item");

    if ($item.hasClass('activate')) {
      // Tweede klik op dezelfde afbeelding: sluit het item terug.
      $item.removeClass("activate");
      $item.children(".music").fadeOut(200, function () {
        $(this).empty();
      });
    } else {
      //overlapschuif
      $item.addClass("activate");
      $(".item").not($item).children(".music").empty().hide();
      $(".item").not($item).removeClass("activate");
      //music
      // Mobiel faadt de player in over 300ms, desktop over 500ms (bewust verschil).
      var itemFadeDuration = isMobile() ? 300 : 500;
      var project = findProject(PROJECTS.work, $item.attr("id"));
      var $music = $item.children(".music");
      loadProjectContent($music, project, workAudioPath);
      $music.fadeIn(itemFadeDuration);
    }
  });

  $(".itam").on("click", function () {
    //overlapschuif
    $(this).addClass("active-itam");
    var project = findProject(PROJECTS.life, $(this).attr("id"));
    var $music = $(this).children(".music");
    var pathFn = lifeAudioPath(project);
    if (isMobile()) {
      // Mobiel: leegmaken/verbergen van de andere players, dan de nieuwe player infaden.
      $(".itam").not(this).children(".music").empty().hide();
      $(".itam").not(this).removeClass("active-itam");
      //music
      loadProjectContent($music, project, pathFn);
      $music.fadeIn(500);
    } else {
      // Desktop: de andere players faden uit en leegmaken, dan de nieuwe player tonen.
      //  $(this).children(".music").toggle();
      $(".itam").not(this).children(".music").fadeOut().empty();
      $(".itam").not(this).removeClass("active-itam");
      //music
      loadProjectContent($music, project, pathFn);
      $music.show();
    }
  });

  $('#press-btn').on('click', function(){
  $('.press').fadeIn();
$(".tags-work, .tags-life, .life, .work").fadeOut();
$('h2').addClass('blur');
    });

  $('#bio-btn').on('click', function(e){
    $('.bio').fadeToggle(300);
    // Op desktop wordt de click-bubbling expliciet tegengehouden; op mobiel was dat niet nodig.
    if (!isMobile()) {
      e.stopPropagation();
      e.preventDefault();
    }
  });

  $('.bio').on('click',function(){
      $('.bio').fadeOut(300);
  });

  $('.bio-box').on('click',function(e){
    e.stopPropagation();
    e.preventDefault();
  });

});
