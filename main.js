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
      // Bandcamp's embed-HTML wordt server-side op een vaste breedte
      // (~350px) gerenderd binnen de iframe — dat is GEEN CSS-probleem aan
      // onze kant (cross-origin, dus niet aanpasbaar): zodra de iframe
      // smaller is dan die vaste breedte, loopt de tekst (tracktitel, duur)
      // over zijn eigen rand en wordt ze afgesneden ("size=small" bleek nog
      // slechter — die layout overlapt zichzelf in een smalle iframe). We
      // geven de iframe daarom op mobiel een vaste min-breedte + horizontale
      // scroll (zie ".item .music iframe" in style.css), zodat de inhoud
      // intact blijft en de gebruiker er desnoods naar kan scrollen.
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
  var $item = $('<div class="work-item"></div>')
    .attr('id', project.id)
    .addClass((project.categorieen || []).join(' '))
    .append(buildProjectImage(project))
    .append('<div class="music"></div>')
    .append($('<h4></h4>').text(project.titel));
  return $item;
}

function buildLifeItem(project) {
  var $itam = $('<div class="life-item"></div>')
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
    // EERDERE AANPAK (geschrapt): de iframe op een vaste, "voldoende
    // brede" eigen breedte (700px) zetten en als geheel terugschalen tot
    // de beschikbare kolombreedte. Dat ging ervan uit dat Bandcamp zijn
    // embed intern altijd op diezelfde ~700px breedte opbouwt — maar
    // Bandcamp kiest die interne lay-out blijkbaar OOK zelf op basis van
    // viewport/toestel: op een echte telefoon bouwt het zijn eigen,
    // compactere/mobiele variant op (vermoedelijk al rond de ~350px), die
    // we dan ALSNOG eens extra verkleinden — vandaar de "piepkleine" speler.
    // We kunnen die interne breedte niet uitlezen (cross-origin iframe),
    // dus is "juist" terugschalen sowieso giswerk. In plaats daarvan laten
    // we de iframe simpelweg de volledige beschikbare breedte innemen en
    // vertrouwen op Bandcamp's EIGEN responsive gedrag — dat is exact het
    // mechanisme dat deze speler default ook op de echte Bandcamp-site
    // gebruikt op mobiel.
    $iframe.css({ width: '100%', height: '120px' });
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
    $music.append(buildEmbed(project.embedUrl));
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
  });

  $(".tags-life label input").on("click", function () {
    $(".life-item").removeClass("is-open").children(".music").empty().hide();
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
    //reset work
    var ni = $(".hidden-repo .work-item");
    $(".shown").append(ni);
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
  function calcH4Delta($wi) {
    var rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    var offset = 0.5 * rem;
    var itemH = $wi[0].offsetHeight;
    var h4H = $wi.find('h4')[0].offsetHeight;
    return offset - (itemH - offset - h4H); // negatief = omhoog
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
        $item.children(".music").css({position:'absolute', top:'19rem', left:0, right:0, bottom:0});
        $item.find('h4').css('transform', '');
        $item.removeClass("is-open");
        $item.children(".music").fadeOut(FADE_OUT_DUR, function () { $(this).empty().css({position:'',top:'',left:'',right:'',bottom:''}); });
      } else {
        var $others = $(".work-item").not($item).filter(".is-open");
        var project0 = findProject(PROJECTS.work, $item.attr("id"));
        var $music0 = $item.children(".music");
        var delta = calcH4Delta($item);

        // Positie van sluitende items vastzetten VOOR removeClass, zodat .music
        // niet van absolute naar static "springt" tijdens de fadeOut.
        $others.children(".music").css({position:'absolute', top:'19rem', left:0, right:0, bottom:0});

        // Stap 1: beide klasse-wissels + titelbewegingen in exact hetzelfde
        // animatieframe zodat alle CSS-transities simultaan starten.
        requestAnimationFrame(function () {
          $others.removeClass("is-open");
          $item.addClass("is-open");
          // Sluit-items: titel terug naar onderaan
          $others.find('h4').css('transform', '');
          // Open-item: titel naar bovenaan
          $item.find('h4').css('transform', 'translateY(' + delta + 'px)');
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
      $item.animate({ height: CLOSED_H }, MOBILE_DUR, 'swing', function () {
        $item.removeClass('is-open');
        $item.css('height', '');
        $item.children('.music').empty().hide();
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
      $music.css('visibility', 'hidden').show();
      var targetH = $item[0].scrollHeight;
      $music.css('visibility', '').hide();
      $item.css('height', CLOSED_H + 'px');

      // === Beide animaties starten in hetzelfde animatieframe ===
      requestAnimationFrame(function () {
        closeData.forEach(function (d) {
          d.$o.children('.music').fadeOut(Math.round(MOBILE_DUR * 0.4));
          d.$o.animate({ height: CLOSED_H }, MOBILE_DUR, 'swing', function () {
            d.$o.removeClass('is-open');
            d.$o.css('height', '');
            d.$o.children('.music').empty().hide();
          });
        });

        $music.css({ opacity: 0 }).show();
        $music.animate({ opacity: 1 }, Math.round(MOBILE_DUR * 0.8));
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
        $item.children(".music").fadeOut(FADE_OUT_DUR, function () { $(this).empty().css({position:'',top:'',left:'',right:'',bottom:''}); });
      } else {
        var $others = $(".life-item").not($item).filter(".is-open");
        var project0 = findProject(PROJECTS.life, $item.attr("id"));
        var $music0 = $item.children(".music");
        var pathFn0 = lifeAudioPath(project0);
        var delta = calcH4Delta($item);

        $others.children(".music").css({position:'absolute', top:'19rem', left:0, right:0, bottom:0});

        requestAnimationFrame(function () {
          $others.removeClass("is-open");
          $item.addClass("is-open");
          $others.find('h4').css('transform', '');
          $item.find('h4').css('transform', 'translateY(' + delta + 'px)');
          $others.children(".music").fadeOut(FADE_OUT_DUR, function () { $(this).empty().css({position:'',top:'',left:'',right:'',bottom:''}); });

          requestAnimationFrame(function () {
            $music0.css({ display: 'block', opacity: 0 });
            loadProjectContent($music0, project0, pathFn0);
            $music0.animate({ opacity: 1 }, DESKTOP_DUR);
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
      $item.animate({ height: CLOSED_H }, MOBILE_DUR, 'swing', function () {
        $item.removeClass('is-open');
        $item.css('height', '');
        $item.children('.music').empty().hide();
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
      $music2.css('visibility', 'hidden').show();
      var targetH2 = $item[0].scrollHeight;
      $music2.css('visibility', '').hide();
      $item.css('height', CLOSED_H + 'px');

      requestAnimationFrame(function () {
        closeData2.forEach(function (d) {
          d.$o.children('.music').fadeOut(Math.round(MOBILE_DUR * 0.4));
          d.$o.animate({ height: CLOSED_H }, MOBILE_DUR, 'swing', function () {
            d.$o.removeClass('is-open');
            d.$o.css('height', '');
            d.$o.children('.music').empty().hide();
          });
        });

        $music2.css({ opacity: 0 }).show();
        $music2.animate({ opacity: 1 }, Math.round(MOBILE_DUR * 0.8));
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
