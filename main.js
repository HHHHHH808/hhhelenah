// ============================================================
// PROJECTEN-CONFIGURATIE
// Eén centrale bron voor alle work- en life-content. De site
// wordt hieruit automatisch opgebouwd (zie verdere stappen).
// ============================================================
const PROJECTS = {
  // Volgorde: chronologisch, meest recente werk eerst (datum = JJJJ-MM).
  work: [
    {
      id: "BurgerS1",
      titel: "Burger Service",
      datum: "2026-02",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/BurgerS1.jpg",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=1268760684/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
      beschrijving: "Mastering for Burger Service’s LP"
    },
    {
      id: "Lieg1",
      titel: "Liegenaar",
      datum: "2026-02",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/Liegenaar1.jpg",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=2237593515/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
      beschrijving: "Mastering for Liegenaar’s LP"
    },
    {
      id: "OFMRake",
      titel: "One Frame Movement",
      datum: "2026-01",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/OFMRake.jpg",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=4088165736/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
      beschrijving: "Mastering for One Frame Movement’s LP"
    },
    {
      id: "LiesaCara",
      titel: "Liesa Van Der Aa",
      datum: "2025-10",
      categorieen: ["production", "mixing"],
      afbeelding: "assets/Images/Work/LiesaCaramel.webp",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=328048578/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
      beschrijving: "Co-mix / sound-design for Liesa Van Der Aa’s LP"
    },
    {
      id: "GerardJer",
      titel: "Gerard - Je.Rar Reworks",
      datum: "2025-05",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/JeRar.webp",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=3077992896/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
      beschrijving: "Mastering for Gerard’s LP"
    },
    {
      id: "Typpo1",
      titel: "TyPpO",
      datum: "2024-03",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/TyPpO1.webp",
      type: "embed",
      // Drie kleine Bandcamp track-embeds, worden onder elkaar getoond
      // (zie loadProjectContent: embedUrl mag een array zijn).
      embedUrl: [
        "https://bandcamp.com/EmbeddedPlayer/track=4253173949/size=small/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/track=2587785353/size=small/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/track=899365866/size=small/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/"
      ],
      beschrijving: "Mastering for a few TyPpO singles."
    },
    {
      id: "LaminaKitch",
      titel: "Lamina / Kitchen Cynics",
      datum: "2023-10",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/LaminaKitchen.webp",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=2775957945/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
      beschrijving: "Mastering for Lamina’s and Kitchen Cynics’s LP"
    },
    {
      id: "aeiou",
      titel: "a-e-i-o-u - Opbrakel",
      datum: "2023-03",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/a-e-i-o-uOpbrakel.webp",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=4220442005/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
      beschrijving: "Mastering for a-e-i-o-u’s EP"
    },
    {
      id: "OFMBr",
      titel: "One Frame Movement",
      datum: "2023-02",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/OFMBrusque.webp",
      type: "embed",
      embedUrl: "https://open.spotify.com/embed/album/0bUUWG2GeLcIhawdH6Cxd0?utm_source=generator&theme=0&si=2808234f371c46e1",
      beschrijving: "Mastering for OFM’s EP"
    },
    {
      id: "MuriOm",
      titel: "Muri - Omgeef Me",
      datum: "2022-07",
      categorieen: ["production"],
      afbeelding: "assets/Images/Work/MuriOmgeefMe.webp",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=219850248/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
      beschrijving: "Production and Sound Design for Muri’s LP"
    },
    {
      id: "burnout",
      titel: "Burnout",
      datum: "2020-04",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/BurnOut.webp",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=2426151550/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
      beschrijving: "Mastering for Epong's soundtrack of Rik Chaubet's film"
    },
    {
      id: "schob",
      titel: "Schobbee",
      datum: "2023-04",
      categorieen: ["mastering"],
      afbeelding: "assets/Images/Work/wide-circ/blur/schob.png",
      type: "embed",
      // Bandcamp's embed-HTML wordt server-side op een vaste breedte
      // (~350px) gerenderd binnen de iframe — dat is GEEN CSS-probleem aan
      // onze kant (cross-origin, dus niet aanpasbaar): zodra de iframe
      // smaller is dan die vaste breedte, loopt de tekst (tracktitel, duur)
      // over zijn eigen rand en wordt ze afgesneden ("size=small" bleek nog
      // slechter — die layout overlapt zichzelf in een smalle iframe). We
      // geven de iframe daarom op mobiel een vaste min-breedte + horizontale
      // scroll (zie ".item .music iframe" in style.css), zodat de inhoud
      // intact blijft en de gebruiker er desnoods naar kan scrollen.
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=202891063/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/",
      beschrijving: "Mastering for Schobbee’s LP"
    },
    {
      id: "siebert",
      titel: "Truck",
      datum: "2019-04",
      categorieen: ["production"],
      afbeelding: "assets/Images/Work/wide-circ/blur/circ-truck.png",
      type: "embed",
      embedUrl: "https://player.vimeo.com/video/348057330",
      beschrijving: "Soundtrack for Siebert Mispelons videowork, 'Truck'."
    },
    {
      id: "people",
      titel: "People's People",
      datum: "2019-03",
      categorieen: ["production"],
      afbeelding: "assets/Images/Work/LSPeople.webp",
      type: "embed",
      embedUrl: "https://open.spotify.com/embed/album/5Kg7zckDCzTRa8qdac2gQD?utm_source=generator&theme=0&si=f6540c3963324685",
      beschrijving: "Sound design and extra arrangements for Lip Service's EP 'People's People'."
    },
    {
      id: "ww",
      titel: "Warmste Week 2019",
      datum: "2019-01",
      categorieen: ["production"],
      afbeelding: "assets/Images/Work/wide-circ/blur/circ-ww.png",
      type: "audio",
      beschrijving: "Soundtrack for StuBru's promotional campaign",
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
      id: "ivy",
      titel: "Ivy Falls",
      datum: "2018-08",
      categorieen: ["production"],
      afbeelding: "assets/Images/Work/wide-circ/blur/circ-ivy.png",
      type: "embed",
      embedUrl: "https://open.spotify.com/embed/track/1iQnPzwIEkNyG0B5zPwIUn",
      beschrijving: "Production for Ivy Falls with Kasper Cornelus"
    },
    {
      id: "green",
      titel: "Green Greener Greenest",
      datum: "2018-02",
      categorieen: ["mastering", "production"],
      afbeelding: "assets/Images/Work/wide-circ/blur/circ-green.jpg",
      type: "embed",
      embedUrl: "https://player.vimeo.com/video/221453555",
      beschrijving: "Sound-design voor Senne Marquenie's short movie 'Green, Greener, Greenest'."
    },
    {
      id: "wayout",
      titel: "Andrea Murtas",
      datum: "2018-01",
      categorieen: ["mixing"],
      afbeelding: "assets/Images/Work/Murtas.jpg",
      type: "audio",
      beschrijving: "Mixing for Andrea Murtas",
      nummers: [
        { id: "andrea", titel: "The Way Out", duur: "6:44" }
      ]
    }
  ],

  // Volgorde: chronologisch, meest recente release eerst (datum = JJJJ-MM).
  life: [
    {
      id: "comp",
      titel: "Compressed '16-'17",
      datum: "2020-11",
      status: "helenah",
      afbeelding: "assets/Images/Life/logocompressed.jpg",
      beschrijving: "A series of songs made between '16 '17, sonically bundled by various tape & compression emulations.",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=285491679/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/"
    },
    {
      id: "hhh",
      titel: "Helenah",
      datum: "2019-10",
      status: "helenah",
      afbeelding: "assets/Images/Life/logo12.jpg",
      beschrijving: "Debut album on the Brussels based label 'Montage'.",
      type: "embed",
      embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=1065259858/size=large/bgcol=ffffff/linkcol=de270f/artwork=none/transparent=true/"
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

// Bouwt het jaartal-label (".jaartal") op basis van "datum" (formaat
// "JJJJ-MM"). Geeft niets terug als er geen datum is, zodat oudere/
// onvolledige entries de layout niet verstoren.
function buildYearLabel(project) {
  if (!project.datum) return null;
  var jaar = String(project.datum).split('-')[0];
  return $('<div class="jaartal"></div>').text(jaar);
}

function buildWorkItem(project, order) {
  var $item = $('<div class="work-item"></div>')
    .attr('id', project.id)
    // "data-order" bewaart de chronologische positie (index in PROJECTS.work,
    // dat array staat al van nieuw naar oud). Hierop sorteren we ".shown"
    // telkens opnieuw na het filteren op categorie, zodat de volgorde altijd
    // chronologisch blijft - ongeacht in welke volgorde items in/uit "shown"
    // verplaatst worden.
    .attr('data-order', order)
    .addClass((project.categorieen || []).join(' '))
    .append(buildProjectImage(project))
    .append('<div class="music"></div>')
    .append($('<h4></h4>').text(project.titel));
  var $year = buildYearLabel(project);
  if ($year) $item.append($year);
  return $item;
}

// Herordent de zichtbare work-items chronologisch (op basis van
// "data-order"), ongeacht in welke volgorde ze in/uit ".shown" verplaatst
// werden door de categorie-filters.
function sortShownWorkItems() {
  var $shown = $(".shown");
  $shown.children(".work-item").sort(function (a, b) {
    return ($(a).data('order') || 0) - ($(b).data('order') || 0);
  }).appendTo($shown);
}

function buildLifeItem(project) {
  var $itam = $('<div class="life-item"></div>')
    .attr('id', project.id)
    .addClass(project.status)
    .append(buildProjectImage(project))
    .append('<div class="music"></div>')
    .append($('<h4></h4>').html(project.titel));
  var $year = buildYearLabel(project);
  if ($year) $itam.append($year);
  return $itam;
}

function renderWorkItems() {
  var $repo = $('.hidden-repo');
  PROJECTS.work.forEach(function (project, index) {
    $repo.append(buildWorkItem(project, index));
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
  // "preload=metadata" i.p.v. niets: zonder dit blijft "audio.duration"
  // op mobiel vaak NaN totdat je effectief op play drukt. De tijdsbalk had
  // dan nog zijn DEFAULT max (100), waardoor een tik ergens op de balk
  // "audio.currentTime" instelde t.o.v. die verkeerde schaal — voor een
  // nummer van bv. 6:44 (404s) sprong dat dus terug naar vlak bij het
  // begin ("de song begint opnieuw"). Met preload=metadata is de duur
  // (en dus "progressBar.max", zie hieronder) meteen correct.
  return '<audio preload="metadata">Your browser does not support HTML 5 Player.</audio>' +
    // Geen tekst-glyph meer (de "media"-iconenfont rendert "&#9658;" play
    // en "&#10074;&#10074;" pauze op duidelijk verschillende groottes, wat
    // de knop deed "springen" en de tekst ernaast deed verschuiven). Het
    // icoon wordt nu zuiver met CSS getekend (".pp::before"/"::after"),
    // op een vaste, identieke afmeting voor beide standen — zie style.css.
    '<button class="pp" aria-label="Afspelen / pauzeren"></button>' +
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
  var $iframe = $('<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    .attr('src', embedUrl);

  // Bandcamp's ingesloten speler wordt server-side op een VASTE breedte
  // (~350px) opgebouwd en is niet "responsive" — knijpen we de iframe
  // smaller, dan loopt Bandcamp's eigen tekst over zijn rand. In plaats
  // van dat te laten gebeuren (of de gebruiker te laten scrollen, wat
  // buiten de kolomranden voelde), schalen we de iframe als geheel
  // proportioneel terug tot de beschikbare breedte: alles — inclusief de
  // tekst — krimpt mee, en blijft dus volledig binnen de lijnen.
  if (/bandcamp\.com/.test(embedUrl)) {
    // size=large: geen vaste height zetten — CSS flex (zie style.css,
    // .life-item.is-open .music > iframe) bepaalt de hoogte dynamisch.
    // size=small (120px): wel een vaste height, want die speler heeft geen
    // eigen intrinsieke hoogte.
    if (/size=large/.test(embedUrl)) {
      $iframe.css({ width: '100%', height: '472px' }); // desktop overschrijft dit via JS
    } else {
      $iframe.css({ width: '100%', height: '120px' });
    }
    return $iframe;
  }

  return $iframe;
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
        $pp.addClass('is-playing');
      } else {
        audio.pause();
        $pp.removeClass('is-playing');
      }
    } else {
      playById(music_id);
      audio.play();
      $pp.addClass('is-playing');
    }
    return false;
  });

  $pp.on('click', function () {
    if (audio.paused) {
      audio.play();
      $(this).addClass('is-playing');
    } else {
      audio.pause();
      $(this).removeClass('is-playing');
    }
    return false;
  });

  // "isSeeking" voorkomt dat de 500ms-poll de balk (en dus de indruk van
  // de afspeelpositie) terugzet TERWIJL de gebruiker aan het slepen/tikken
  // is — zonder deze vlag overschreef "updateProgressValue" de net-versleepte
  // waarde met de (nog niet bijgewerkte) "audio.currentTime", wat voelde
  // alsof het nummer "terugsprong".
  var isSeeking = false;
  function updateProgressValue() {
    if (audio.duration && !isSeeking) {
      progressBar.max = audio.duration;
      progressBar.value = audio.currentTime;
    }
  }
  setInterval(updateProgressValue, 500);
  // Zet "progressBar.max" METEEN zodra de duur gekend is, i.p.v. te wachten
  // op de volgende poll (elke 500ms). Zonder dit kon een tik op de balk
  // vlak na het laden nog tegen de DEFAULT max (100) berekend worden,
  // waardoor "audio.currentTime" een veel te lage waarde kreeg — de song
  // leek dan "opnieuw te beginnen".
  audio.addEventListener('loadedmetadata', updateProgressValue);
  audio.addEventListener('durationchange', updateProgressValue);

  function seekTo(value) {
    if (audio.duration) {
      audio.currentTime = value;
    }
  }
  // "pointerdown"/"touchstart" markeren het begin van een sleep/tik op de
  // balk; "pointerup"/"touchend" (en "change", als laatste vangnet) sluiten
  // het af. Op sommige mobiele browsers vuurt een eenvoudige TIK op de
  // balk geen "input" maar enkel "change" — vandaar dat we op BEIDE
  // luisteren i.p.v. enkel op "input".
  ['pointerdown', 'touchstart', 'mousedown'].forEach(function (evt) {
    progressBar.addEventListener(evt, function () { isSeeking = true; });
  });
  ['pointerup', 'touchend', 'mouseup'].forEach(function (evt) {
    progressBar.addEventListener(evt, function () {
      // Kleine vertraging: geeft de browser de kans om de uiteindelijke
      // "input"/"change"-waarde nog te verwerken vóór de poll terug actief wordt.
      setTimeout(function () { isSeeking = false; }, 100);
    });
  });
  // BELANGRIJK: tijdens het slepen ZELF niet meer bij elke "input" al
  // "audio.currentTime" zetten. Op mobiel (zeker over mobiele data, met
  // "preload=metadata") is er voorbij het reeds gebufferde stuk vaak nog
  // niets geladen — herhaaldelijk, snel na elkaar zoeken naar nog niet
  // gebufferde tijdstippen deed de browser telkens terugvallen naar het
  // begin (currentTime sprong terug naar 0). De <input type="range">
  // toont de sleep-positie zelf al visueel; we hoeven enkel de poll even
  // stil te leggen ("isSeeking") en pas bij het LOSLATEN ("change", of het
  // "vangnet" hieronder) één keer daadwerkelijk te zoeken.
  progressBar.addEventListener('input', function () {
    isSeeking = true;
  });
  progressBar.addEventListener('change', function () {
    seekTo(progressBar.value);
    setTimeout(function () { isSeeking = false; }, 100);
  });
  // Op de meeste mobiele browsers (o.a. Chrome op Android) doet TIKKEN op
  // een willekeurig punt van een <input type="range"> NIETS — enkel het
  // SLEPEN van de duim zelf wordt ondersteund (in tegenstelling tot
  // desktop, waar een klik ergens op de balk de duim daarheen verplaatst).
  // Dat is wat hier "niet werkt": een tik op een punt in de tijdsbalk om
  // daarheen te springen. We berekenen de positie daarom zelf, op basis
  // van waar de aanraking plaatsvond t.o.v. de breedte van de balk, en
  // zoeken expliciet naar dat tijdstip.
  function seekFromEvent(e) {
    if (!audio.duration) { return; }
    var oe = (e.originalEvent || e);
    var clientX = (oe.touches && oe.touches.length) ? oe.touches[0].clientX
      : (oe.changedTouches && oe.changedTouches.length) ? oe.changedTouches[0].clientX
      : oe.clientX;
    if (clientX === undefined) { return; }
    var rect = progressBar.getBoundingClientRect();
    var ratio = (clientX - rect.left) / rect.width;
    ratio = Math.min(Math.max(ratio, 0), 1);
    var value = ratio * audio.duration;
    progressBar.value = value;
    seekTo(value);
  }
  progressBar.addEventListener('click', function (e) {
    e.stopPropagation();
    seekFromEvent(e);
    setTimeout(function () { isSeeking = false; }, 100);
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

  $music.append($content);

  var $playerArea = null;
  if (isAudio) {
    // EERDER: speler + tracklist zaten IN ".content", samen met de
    // beschrijving (".h5"). Daardoor gedroegen ze zich structureel anders
    // dan ingesloten embeds (die als eigen ".music"-kind naast ".content"
    // staan en zo - via "clear: both" - netjes onder de cirkel
    // terechtkomen): de speler kon, afhankelijk van de lengte van de
    // beschrijving, half over/naast de cirkel heen schuiven en oogde dan
    // "awkward" t.o.v. de consistente plaatsing van embeds. Door de speler
    // + tracklist in hun EIGEN, aan ".music" toegevoegde wrapper te zetten
    // (".player-area", zie style.css "clear: both"), krijgen ze exact
    // hetzelfde, voorspelbare gedrag als embeds.
    $playerArea = $('<div class="player-area"></div>')
      .append(buildPlayerMarkup())
      .append(buildTrackList(project.nummers));
    $music.append($playerArea);
  }

  if (project.type === 'embed') {
    // embedUrl mag een enkele URL zijn, of een array van URL's die dan
    // als losse, kleine embeds onder elkaar getoond worden (zie "Typpo1").
    var embedUrls = Array.isArray(project.embedUrl) ? project.embedUrl : [project.embedUrl];
    embedUrls.forEach(function (url) {
      $music.append(buildEmbed(url));
    });
  } else if (project.type === 'video') {
    $music.append(buildVideo(project.videoBestand));
  }

  if (isAudio) {
    // De speler-elementen (".pp", "#progress-bar", "audio", ".audio.play")
    // staan nu in ".player-area" i.p.v. ".content" (zie hierboven — dat
    // gaf de speler dezelfde, consistente plaatsing als embeds), dus moet
    // "initAudioPlayer" ook in DIE container zoeken i.p.v. in ".content".
    initAudioPlayer($playerArea, project.nummers, pathFn);
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
    $(".work-item").removeClass("is-open").children(".music").empty().hide();
    // Reset het jaartal van eventueel openstaande items: zonder dit blijft
    // ".jaartal.is-visible" (incl. opacity/positionering) hangen op een item
    // dat door het filter verborgen wordt, en duikt het jaartal weer op
    // zodra je nadien naar "all" of een andere categorie gaat.
    $(".work-item").find('.jaartal').stop(true).removeClass('is-visible').css('opacity', '');
    if (!isMobile()) { $(".work-item").find('h4').css('transform', ''); }
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
        var ni = $(".hidden-repo .work-item");
        $(".shown").append(ni);
        $(".tags-work label input").not(this).prop("checked", false);
      } else {
        $(".tags-work .oll").prop("checked", false);
        $(".shown .work-item")
          .removeClass("hiding is-open")
          .children(".music").empty().end()
          .appendTo(".hidden-repo");
      }
    } else {
      //productietag aangevinkt
      if ($(this).is(":checked")) {
        if ($(".tags-work .oll").is(":checked")) {
          $(".tags-work .oll").prop("checked", false);
          $(".work-item")
            .not("." + thistag)
            .removeClass("hiding is-open")
            .children(".music").empty().end()
            .appendTo(".hidden-repo");
        }
        $("." + thistag).each(function () {
          //aanwezig=niets
          if ($(this).is(":visible")) {
          } else {
            //afwezig= voeg toe
            $(".shown").append(this);
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
              .removeClass("hiding is-open")
              .children(".music").empty().end()
              .appendTo(".hidden-repo");
          }
        });
      }
    }

    sortShownWorkItems();
  });

  $(".tags-life label input").on("click", function () {
    $(".life-item").removeClass("is-open").children(".music").empty().hide();
    // Zie analoge toelichting bij ".tags-work label input" hierboven.
    $(".life-item").find('.jaartal').stop(true).removeClass('is-visible').css('opacity', '');
    if (!isMobile()) { $(".life-item").find('h4').css('transform', ''); }
    var thistag = $(this).parent("label").text();
    var thislp = $("." + thistag);
    var oldtag = $("label input:checked").not(this).parent("label").text();
    var oldlp = $("." + oldtag);
    if ($(this).is(".oll")) {
      if ($(this).is(":checked")) {
        $(".life-item").fadeIn(100);
        $(".tags-life label input").not(this).prop("checked", false);
      } else {
        $(this).prop("checked", false);
        $(".life-item").fadeOut(100);
      }
    } else {
      $(".tags-life .oll").prop("checked", false);
      if ($("#helenah").is(":checked")) {
        $(".helenah").fadeIn(100);
      } else {
        $(".helenah").fadeOut(100);
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
    $(".bio").fadeOut();

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

    // Reset h4-transforms: titels die omhoog stonden (open item) terug naar onderaan
    if (!isMobile()) {
      $(".work-item, .life-item").find('h4').css('transform', '');
    }
    // Reset jaartal (zie analoge toelichting bij ".tags-work label input").
    $(".work-item, .life-item").find('.jaartal').stop(true).removeClass('is-visible').css('opacity', '');
    //reset work
    var ni = $(".hidden-repo .work-item");
    $(".shown").append(ni);
    sortShownWorkItems();
    $(".oll").prop("checked", true);
    $("label input").not(".oll").prop("checked", false);
    //reset life
    $(".life .life-item").fadeIn(100);
    //stop players
    $(".work-item").removeClass("is-open").children(".music").empty().hide();
    $(".life-item").removeClass("is-open").children(".music").empty().hide();
  });

  // Scrollbar van een open item enkel TONEN terwijl er effectief gescrold
  // wordt (".is-scrolling", zie style.css) — net als de overlay-scrollbars
  // in Chrome, die ook vanzelf weer verdwijnen zodra je stopt met scrollen.
  var scrollbarHideTimers = {};
  $(".work-item").on("scroll", function () {
    var $item = $(this);
    // Negeer scroll-events die de open-animatie zelf veroorzaakt (de
    // hoogte-transitie duurt ~0.5s en doet de browser soms een interne
    // scrollpositie corrigeren — geen "echte" gebruikersscroll).
    var activatedAt = $item.data("activatedAt") || 0;
    if (Date.now() - activatedAt < 600) { return; }
    var key = $item.attr("id");
    $item.addClass("is-scrolling");
    clearTimeout(scrollbarHideTimers[key]);
    scrollbarHideTimers[key] = setTimeout(function () {
      $item.removeClass("is-scrolling");
    }, 800);
  });

  // Gedeelde hulpfunctie voor beide item-types: berekent de translateY (px)
  // om de h4 van "bottom: 0.5rem" naar "top: 0.5rem" te brengen zonder
  // afhankelijk te zijn van de visuele (geanimeerde) positie.
  // Mobiel: schuift het jaartal en de beschrijving (".content") naar
  // beneden als de titel (h4) door zijn lengte over meer dan 1 regel
  // uitvalt. De CSS-basiswaarden (".jaartal" top: 2.3rem, ".content"
  // padding-top: 3.2rem) gaan uit van een titel van 1 regel — "extra" is
  // hier de bijkomende hoogte t.o.v. die ene regel, opgeteld bij beide.
  function adjustMobileTitleLayout($item) {
    var $h4 = $item.find('h4');
    if (!$h4.length) return;
    var cs = getComputedStyle($h4[0]);
    // "line-height: normal" geeft via getComputedStyle de letterlijke
    // string "normal" terug (niet-parsebaar) — val dan terug op de
    // gebruikelijke browser-verhouding (~1.2x font-size).
    var lineHeight = parseFloat(cs.lineHeight) || (1.2 * parseFloat(cs.fontSize));
    var paddingV = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    var extra = Math.max(0, $h4[0].offsetHeight - (lineHeight + paddingV));
    var rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    $item.find('.jaartal').css('top', extra ? (2.3 * rem + extra) + 'px' : '');
    $item.find('.content').css('padding-top', extra ? (3.2 * rem + extra) + 'px' : '');
  }

  function calcH4Delta($wi) {
    var rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    var offset = 0.5 * rem;
    var itemH = $wi[0].offsetHeight;
    var h4H = $wi.find('h4')[0].offsetHeight;
    return offset - (itemH - offset - h4H); // negatief = omhoog
  }

  // Faadt het jaartal van een sluitend item uit (desktop). De positionering
  // (".jaartal.is-visible", zie style.css) blijft tijdens het uitfaden
  // behouden — ".is-visible" wordt pas NA de animatie verwijderd. Zou dat
  // meteen gebeuren (samen met ".is-open"), dan valt het jaartal terug op
  // de niet-gepositioneerde basisstijl en "springt" het naar de
  // linkerbovenhoek voor het kan wegfaden.
  function fadeOutJaartal($wi, duration) {
    $wi.find('.jaartal').stop(true).animate({ opacity: 0 }, duration, function () {
      $(this).removeClass('is-visible').css('opacity', '');
    });
  }

  // Klik enkel op de afbeelding opent/sluit een item — niet ergens in de
  // hele kolom.
  $(".work-item").on("click", function (e) {
    var $item = $(this);
    var isOpen = $item.hasClass('is-open');

    // Zowel mobiel als desktop: enkel een tik/klik op de cirkel/afbeelding
    // (of de titel ernaast) opent/sluit het item — niet ergens anders in
    // de kolom. Eerder liet mobiel het VOLLEDIGE rayon als trigger gelden,
    // wat in de praktijk chaotisch aanvoelde: random tikken in de tekst,
    // tracklist of zelfs lege ruimte deed het item soms onverwacht open- of
    // dichtklappen. Door — net als op desktop — alleen de afbeelding/titel
    // als trigger te gebruiken, weet je als gebruiker precies waar je moet
    // tikken, en kan de rest van het item gewoon gelezen/bediend worden
    // zonder per ongeluk te sluiten.
    if (!$(e.target).closest('img, h4').length) {
      return;
    }

    e.stopPropagation();

    if (!isMobile()) {
      // Desktop: de CSS width-transitie (7rem → 25rem) + flexbox regelen
      // de animatie volledig zelf — geen JS-hoogte-logica nodig.
      var DESKTOP_DUR = 1500;
      var FADE_OUT_DUR = 600;

      if (isOpen) {
        // Sluiten: positie vastzetten voor removeClass zodat .music niet springt
        $item.children(".music").css({position:'absolute', top:'17rem', left:0, right:0, bottom:0});
        $item.find('h4').css('transform', '');
        $item.removeClass("is-open");
        // Jaartal faadt gelijktijdig en even snel uit als de beschrijving.
        fadeOutJaartal($item, FADE_OUT_DUR);
        $item.children(".music").fadeOut(FADE_OUT_DUR, function () { $(this).empty().css({position:'',top:'',left:'',right:'',bottom:''}); });
      } else {
        var $others = $(".work-item").not($item).filter(".is-open");
        var project0 = findProject(PROJECTS.work, $item.attr("id"));
        var $music0 = $item.children(".music");
        var $jaar0 = $item.find('.jaartal');
        var delta = calcH4Delta($item);

        // Positie van sluitende items vastzetten VOOR removeClass, zodat .music
        // niet van absolute naar static "springt" tijdens de fadeOut.
        $others.children(".music").css({position:'absolute', top:'17rem', left:0, right:0, bottom:0});

        // Stap 1: beide klasse-wissels + titelbewegingen in exact hetzelfde
        // animatieframe zodat alle CSS-transities simultaan starten.
        requestAnimationFrame(function () {
          $others.removeClass("is-open");
          $item.addClass("is-open");
          // Sluit-items: titel terug naar onderaan + jaartal faden uit
          $others.find('h4').css('transform', '');
          fadeOutJaartal($others, FADE_OUT_DUR);
          // Open-item: titel naar bovenaan + jaartal "is-visible" zodat het
          // meteen z'n positie krijgt (nog opacity:0, zie style.css) vóór
          // het effectief infaden in stap 2.
          $item.find('h4').css('transform', 'translateY(' + delta + 'px)');
          $jaar0.addClass('is-visible');
          $others.children(".music").fadeOut(FADE_OUT_DUR, function () { $(this).empty().css({position:'',top:'',left:'',right:'',bottom:''}); });

          // Stap 2: DOM-manipulatie in het VOLGENDE frame, nadat alle
          // transities al gestart zijn — zo verstoort content-laden de
          // timing niet. Gebruik css+animate i.p.v. fadeIn om de 1-frame
          // flash te vermijden (jQuery's fadeIn kan één frame tonen vóórdat
          // opacity:0 gezet wordt).
          requestAnimationFrame(function () {
            $music0.css({ display: 'block', opacity: 0 });
            loadProjectContent($music0, project0, workAudioPath);
            $music0.animate({ opacity: 1 }, DESKTOP_DUR);
            // Jaartal faadt gelijktijdig en even traag in als de beschrijving.
            $jaar0.css('opacity', 0).animate({ opacity: 1 }, DESKTOP_DUR);
            // Hoogte enkel automatisch laten meegroeien bij EEN enkele
            // grote Bandcamp-embed (size=large). Bij meerdere kleine embeds
            // onder elkaar (bv. "Typpo1", size=small) heeft elke iframe al
            // zijn eigen vaste, compacte hoogte (zie buildEmbed) en mag dat
            // niet overschreven worden.
            var $iframe = $music0.find('iframe');
            if ($iframe.length === 1 && /bandcamp\.com/.test($iframe.attr('src') || '') && /size=large/.test($iframe.attr('src') || '')) {
              var musicH = $music0[0].clientHeight;
              var contentH = $music0.find('.content')[0] ? $music0.find('.content')[0].offsetHeight : 0;
              $iframe.css('height', Math.max(musicH - contentH - 10, 80) + 'px');
            }
          });
        });
      }
      return;
    }

    // === MOBIEL: JS-hoogte-animatie zodat openen en sluiten synchroon lopen ===
    var MOBILE_DUR = 500; // vaste duur voor open én sluit — zo eindigen ze tegelijk
    var CLOSED_H = parseFloat($item.css('min-height')) || 61.6;

    if (isOpen) {
      // Sluiten via klik op zelfde cirkel.
      var fromH = $item[0].scrollHeight;
      $item.css('height', fromH + 'px');
      $item.children('.music').fadeOut(Math.round(MOBILE_DUR * 0.4));
      $item.find('.jaartal').animate({ opacity: 0 }, Math.round(MOBILE_DUR * 0.4));
      // "is-open" pas verwijderen NA de hoogte-animatie: ".work-item.is-open"
      // heeft max-height: 1200px — verwijder je de klasse meteen, dan klemt
      // max-height (3.85rem) de hoogte instant terug naar gesloten, nog
      // vóór de animate-tick kan tekenen, en sluit het item zonder zichtbare
      // animatie.
      $item.animate({ height: CLOSED_H }, MOBILE_DUR, 'swing', function () {
        $item.removeClass('is-open');
        $item.css('height', '');
        $item.children('.music').empty().hide();
        $item.find('.jaartal').css({ top: '', opacity: '' });
      });
    } else {
      $item.data("activatedAt", Date.now());

      var $others = $(".work-item").not($item).filter(".is-open");

      // === EERST alles meten en content laden VOOR de animaties starten ===
      // Sluit-data verzamelen (scrollHeight nu, voor DOM-wijzigingen)
      var closeData = [];
      $others.each(function () {
        var $o = $(this);
        closeData.push({ $o: $o, fromH: this.scrollHeight });
        $o.css('height', this.scrollHeight + 'px'); // hoogte vastzetten
      });

      // Open-item content laden en doelhoogte meten (onzichtbaar)
      var project = findProject(PROJECTS.work, $item.attr("id"));
      var $music = $item.children(".music");
      $item.addClass("is-open");
      loadProjectContent($music, project, workAudioPath);
      adjustMobileTitleLayout($item);
      $music.css('visibility', 'hidden').show();
      var targetH = $item[0].scrollHeight;
      $music.css('visibility', '').hide();
      $item.css('height', CLOSED_H + 'px');
      // "is-open" weer verwijderen na het meten, en de "gesloten" h4-stijl
      // expliciet laten renderen (forced reflow via offsetHeight) vóórdat we
      // de klasse hieronder opnieuw toevoegen. Zonder deze stap gebeuren
      // beide class-wissels in dezelfde synchrone afhandeling, waardoor de
      // browser nooit de "gesloten" stijl tekent en de titel-fade niet kan
      // starten — de rode/witte stijl "popt" dan instant op.
      $item.removeClass("is-open");
      void $item[0].offsetHeight;

      // === Beide animaties starten in hetzelfde animatieframe ===
      requestAnimationFrame(function () {
        $item.addClass("is-open");
        $item.find('.jaartal').css('opacity', 0);
        closeData.forEach(function (d) {
          d.$o.children('.music').fadeOut(Math.round(MOBILE_DUR * 0.4));
          d.$o.find('.jaartal').animate({ opacity: 0 }, Math.round(MOBILE_DUR * 0.4));
          d.$o.animate({ height: CLOSED_H }, MOBILE_DUR, 'swing', function () {
            d.$o.removeClass('is-open');
            d.$o.css('height', '');
            d.$o.children('.music').empty().hide();
            d.$o.find('.jaartal').css({ top: '', opacity: '' });
          });
        });

        $music.css({ opacity: 0 }).show();
        $music.animate({ opacity: 1 }, Math.round(MOBILE_DUR * 0.8));
        $item.find('.jaartal').animate({ opacity: 1 }, Math.round(MOBILE_DUR * 0.8));
        $item.animate({ height: targetH }, MOBILE_DUR, 'swing', function () {
          $item.css('height', 'auto');
          var rect = $item[0].getBoundingClientRect();
          var itemMiddle = rect.top + rect.height / 2;
          var viewportMiddle = window.innerHeight / 2;
          window.scrollBy({ top: itemMiddle - viewportMiddle, behavior: "smooth" });
        });
      }); // einde requestAnimationFrame
    } // einde else (nieuw item openen)
  }); // einde .work-item click handler

  // Life-items: zelfde animatielogica als work-items, maar vierkante afbeeldingen
  // en audio via lifeAudioPath. Klik enkel op afbeelding of titel.
  $(".life-item").on("click", function (e) {
    var $item = $(this);
    var isOpen = $item.hasClass('is-open');

    if (!$(e.target).closest('img, h4').length) { return; }
    e.stopPropagation();

    if (!isMobile()) {
      var DESKTOP_DUR = 1500;
      var FADE_OUT_DUR = 600;

      if (isOpen) {
        $item.children(".music").css({position:'absolute', top:'19rem', left:0, right:0, bottom:0});
        $item.find('h4').css('transform', '');
        $item.removeClass("is-open");
        fadeOutJaartal($item, FADE_OUT_DUR);
        $item.children(".music").fadeOut(FADE_OUT_DUR, function () { $(this).empty().css({position:'',top:'',left:'',right:'',bottom:''}); });
      } else {
        var $others = $(".life-item").not($item).filter(".is-open");
        var project0 = findProject(PROJECTS.life, $item.attr("id"));
        var $music0 = $item.children(".music");
        var $jaar0 = $item.find('.jaartal');
        var pathFn0 = lifeAudioPath(project0);
        var delta = calcH4Delta($item);

        $others.children(".music").css({position:'absolute', top:'19rem', left:0, right:0, bottom:0});

        requestAnimationFrame(function () {
          $others.removeClass("is-open");
          $item.addClass("is-open");
          $others.find('h4').css('transform', '');
          fadeOutJaartal($others, FADE_OUT_DUR);
          $item.find('h4').css('transform', 'translateY(' + delta + 'px)');
          $jaar0.addClass('is-visible');
          $others.children(".music").fadeOut(FADE_OUT_DUR, function () { $(this).empty().css({position:'',top:'',left:'',right:'',bottom:''}); });

          requestAnimationFrame(function () {
            $music0.css({ display: 'block', opacity: 0 });
            loadProjectContent($music0, project0, pathFn0);
            $music0.animate({ opacity: 1 }, DESKTOP_DUR);
            // Jaartal faadt gelijktijdig en even traag in als de beschrijving.
            $jaar0.css('opacity', 0).animate({ opacity: 1 }, DESKTOP_DUR);
            // Bandcamp vult de resterende hoogte; andere embeds (YouTube,
            // Vimeo, Spotify) gebruiken de CSS-hoogte (zie .work-item iframe).
            // Hoogte enkel automatisch laten meegroeien bij EEN enkele
            // grote Bandcamp-embed (size=large). Bij meerdere kleine embeds
            // onder elkaar (bv. "Typpo1", size=small) heeft elke iframe al
            // zijn eigen vaste, compacte hoogte (zie buildEmbed) en mag dat
            // niet overschreven worden.
            var $iframe = $music0.find('iframe');
            if ($iframe.length === 1 && /bandcamp\.com/.test($iframe.attr('src') || '') && /size=large/.test($iframe.attr('src') || '')) {
              var musicH = $music0[0].clientHeight;
              var contentH = $music0.find('.content')[0] ? $music0.find('.content')[0].offsetHeight : 0;
              $iframe.css('height', Math.max(musicH - contentH - 10, 80) + 'px');
            }
          });
        });
      }
      return;
    }

    // Mobiel: zelfde hoogte-animatie als work-items
    var MOBILE_DUR = 500;
    var CLOSED_H = parseFloat($item.css('min-height')) || 61.6;

    if (isOpen) {
      var fromH = $item[0].scrollHeight;
      $item.css('height', fromH + 'px');
      $item.children('.music').fadeOut(Math.round(MOBILE_DUR * 0.4));
      $item.find('.jaartal').animate({ opacity: 0 }, Math.round(MOBILE_DUR * 0.4));
      // Zie toelichting bij de work-item versie hierboven.
      $item.animate({ height: CLOSED_H }, MOBILE_DUR, 'swing', function () {
        $item.removeClass('is-open');
        $item.css('height', '');
        $item.children('.music').empty().hide();
        $item.find('.jaartal').css({ top: '', opacity: '' });
      });
    } else {
      $item.data("activatedAt", Date.now());
      var $others2 = $(".life-item").not($item).filter(".is-open");

      var closeData2 = [];
      $others2.each(function () {
        var $o = $(this);
        closeData2.push({ $o: $o, fromH: this.scrollHeight });
        $o.css('height', this.scrollHeight + 'px');
      });

      var project2 = findProject(PROJECTS.life, $item.attr("id"));
      var $music2 = $item.children(".music");
      var pathFn2 = lifeAudioPath(project2);
      $item.addClass("is-open");
      loadProjectContent($music2, project2, pathFn2);
      adjustMobileTitleLayout($item);
      $music2.css('visibility', 'hidden').show();
      var targetH2 = $item[0].scrollHeight;
      $music2.css('visibility', '').hide();
      $item.css('height', CLOSED_H + 'px');
      // Zie toelichting bij de work-item versie hierboven: forced reflow
      // zodat de "gesloten" h4-stijl effectief gerenderd wordt vóór we
      // "is-open" hieronder opnieuw toevoegen — anders geen titel-fade.
      $item.removeClass("is-open");
      void $item[0].offsetHeight;

      requestAnimationFrame(function () {
        $item.addClass("is-open");
        $item.find('.jaartal').css('opacity', 0);
        closeData2.forEach(function (d) {
          d.$o.children('.music').fadeOut(Math.round(MOBILE_DUR * 0.4));
          d.$o.find('.jaartal').animate({ opacity: 0 }, Math.round(MOBILE_DUR * 0.4));
          d.$o.animate({ height: CLOSED_H }, MOBILE_DUR, 'swing', function () {
            d.$o.removeClass('is-open');
            d.$o.css('height', '');
            d.$o.children('.music').empty().hide();
            d.$o.find('.jaartal').css({ top: '', opacity: '' });
          });
        });

        $music2.css({ opacity: 0 }).show();
        $music2.animate({ opacity: 1 }, Math.round(MOBILE_DUR * 0.8));
        $item.find('.jaartal').animate({ opacity: 1 }, Math.round(MOBILE_DUR * 0.8));
        $item.animate({ height: targetH2 }, MOBILE_DUR, 'swing', function () {
          $item.css('height', 'auto');
          var rect = $item[0].getBoundingClientRect();
          var itemMiddle = rect.top + rect.height / 2;
          var viewportMiddle = window.innerHeight / 2;
          window.scrollBy({ top: itemMiddle - viewportMiddle, behavior: "smooth" });
        });
      });
    }
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
