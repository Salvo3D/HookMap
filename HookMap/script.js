/* ============================
   HOOKMAP — Demo application
   Account: Pescatore / Azienda
   ============================ */

const LAKES = [
  {
    id:"lago-di-levico",
    name:"Lago di Levico",
    region:"Trentino-Alto Adige",
    province:"Trento",
    image:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
    gallery:[
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    price:45,
    rating:4.8,
    reviews:126,
    size:"1.2 km²",
    depth:"Fino a 18 m",
    species:["Carpa comune","Carpa specchio","Carpa amur","Lucerne"],
    maxCarp:"Demo: 24,5 kg",
    swims:12,
    boat:false,
    accessible:true,
    services:["Parcheggio","Bagni e docce","Elettricità","Ristorazione","Noleggio attrezzature"],
    coords:[46.015,11.118],
    description:"Demo dimostrativa: ambiente alpino adatto a sessioni di Carp Fishing, con postazioni organizzate e fondali variabili tra sabbia, ghiaia e vegetazione sommersa.",
    rules:"Demo: pesca solo in postazioni assegnate, niente esche non biodegradabili, obbligo di tappetino di posa e disinfettante.",
    catches:[
      {species:"Carpa specchio",weight:"22,8 kg",date:"Demo — aprile"},
      {species:"Carpa comune",weight:"19,4 kg",date:"Demo — maggio"},
      {species:"Carpa amur",weight:"17,1 kg",date:"Demo — giugno"}
    ],
    availability:"Disponibilità demo: 6 postazioni su 12"
  },
  {
    id:"lago-di-garda",
    name:"Lago di Garda — Area Carp",
    region:"Lombardia",
    province:"Brescia",
    image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery:[
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    ],
    price:65,
    rating:4.6,
    reviews:214,
    size:"Grandi acque",
    depth:"Fino a 30 m",
    species:["Carpa comune","Carpa specchio","Siluro","Lucerne"],
    maxCarp:"Demo: 28,2 kg",
    swims:18,
    boat:true,
    accessible:true,
    services:["Parcheggio","Bagni e docce","Ristorazione","Noleggio barche","Lago navigabile","Alloggi"],
    coords:[45.568,10.664],
    description:"Demo dimostrativa: area dedicata a sessioni lunghe su grandi acque, con possibilità di pesca dalla barca e postazioni panoramiche.",
    rules:"Demo: prenotazione obbligatoria, divieto di abbandono di pasturazione, rispetto delle zone balneari.",
    catches:[
      {species:"Carpa comune",weight:"26,4 kg",date:"Demo — marzo"},
      {species:"Carpa specchio",weight:"24,0 kg",date:"Demo — maggio"},
      {species:"Siluro",weight:"Oltre 100 kg",date:"Demo — luglio"}
    ],
    availability:"Disponibilità demo: 9 postazioni su 18"
  },
  {
    id:"lago-di-trasimeno",
    name:"Lago Trasimeno — Carp Zone",
    region:"Umbria",
    province:"Perugia",
    image:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    gallery:[
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    price:38,
    rating:4.4,
    reviews:98,
    size:"128 km²",
    depth:"Fino a 6 m",
    species:["Carpa comune","Carpa specchio","Carpa amur","Persico reale"],
    maxCarp:"Demo: 21,7 kg",
    swims:24,
    boat:true,
    accessible:false,
    services:["Parcheggio","Bagni e docce","Noleggio barche","Ristorazione","Servizi per famiglie"],
    coords:[43.133,12.107],
    description:"Demo dimostrativa: grande lago umbro con fondali prevalentemente fangosi, canneti e zone aperte ideali per sessioni prolungate.",
    rules:"Demo: rispetto delle aree protette, divieto di accesso con mezzi motorizzati nelle zone delimitate.",
    catches:[
      {species:"Carpa comune",weight:"20,3 kg",date:"Demo — aprile"},
      {species:"Carpa amur",weight:"18,9 kg",date:"Demo — giugno"}
    ],
    availability:"Disponibilità demo: 14 postazioni su 24"
  },
  {
    id:"lago-di-iseo",
    name:"Lago d’Iseo — Carp Retreat",
    region:"Lombardia",
    province:"Brescia",
    image:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    gallery:[
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    price:55,
    rating:4.7,
    reviews:151,
    size:"61 km²",
    depth:"Fino a 250 m",
    species:["Carpa comune","Carpa specchio","Lucerne","Trota lacustre"],
    maxCarp:"Demo: 23,6 kg",
    swims:10,
    boat:false,
    accessible:true,
    services:["Parcheggio","Bagni e docce","Alloggi","Ristorazione","Elettricità"],
    coords:[45.722,10.087],
    description:"Demo dimostrativa: lago alpino con acque profonde e postazioni selezionate per pescatori che cercano sessioni tecniche.",
    rules:"Demo: numero limitato di pescatori per postazione, obbligo di recupero completo delle lenze.",
    catches:[
      {species:"Carpa specchio",weight:"23,6 kg",date:"Demo — maggio"},
      {species:"Carpa comune",weight:"18,2 kg",date:"Demo — settembre"}
    ],
    availability:"Disponibilità demo: 4 postazioni su 10"
  },
  {
    id:"lago-di-viverone",
    name:"Lago di Viverone",
    region:"Piemonte",
    province:"Biella",
    image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    gallery:[
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    price:42,
    rating:4.3,
    reviews:74,
    size:"5,7 km²",
    depth:"Fino a 20 m",
    species:["Carpa comune","Carpa specchio","Carpa amur","Lucerne"],
    maxCarp:"Demo: 22,1 kg",
    swims:16,
    boat:true,
    accessible:true,
    services:["Parcheggio","Bagni e docce","Noleggio barche","Ristorazione","Servizi per famiglie"],
    coords:[45.426,8.043],
    description:"Demo dimostrativa: lago piemontese con rive accessibili, fondali misti e buone potenzialità per la pesca notturna.",
    rules:"Demo: sessioni notturne solo su postazioni autorizzate.",
    catches:[
      {species:"Carpa comune",weight:"21,1 kg",date:"Demo — maggio"},
      {species:"Carpa specchio",weight:"19,8 kg",date:"Demo — agosto"}
    ],
    availability:"Disponibilità demo: 11 postazioni su 16"
  },
  {
    id:"lago-di-massaciuccoli",
    name:"Lago di Massaciuccoli",
    region:"Toscana",
    province:"Lucca",
    image:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
    gallery:[
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    ],
    price:36,
    rating:4.2,
    reviews:63,
    size:"6,9 km²",
    depth:"Fino a 4 m",
    species:["Carpa comune","Carpa specchio","Carpa amur","Anguilla"],
    maxCarp:"Demo: 18,4 kg",
    swims:14,
    boat:true,
    accessible:false,
    services:["Parcheggio","Bagni","Noleggio barche","Ristorazione"],
    coords:[43.876,10.329],
    description:"Demo dimostrativa: ambiente palustre toscano con vegetazione abbondante e acque poco profonde.",
    rules:"Demo: divieto di accesso alle zone di nidificazione, rispetto della fauna locale.",
    catches:[
      {species:"Carpa comune",weight:"17,6 kg",date:"Demo — aprile"},
      {species:"Carpa amur",weight:"15,2 kg",date:"Demo — giugno"}
    ],
    availability:"Disponibilità demo: 8 postazioni su 14"
  }
];

const TRIPS = [
  {
    id:"trip-alps",
    title:"Carp Session nelle Alpi",
    destination:"Trentino-Alto Adige",
    lake:"Lago di Levico",
    image:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    tutor:"Marco Rinaldi",
    dates:"12–15 giugno",
    duration:"4 giorni / 3 notti",
    price:390,
    participants:"Max 6 pescatori",
    level:"Intermedio",
    gear:"Attrezzatura base inclusa",
    description:"Demo: sessione guidata su postazioni selezionate, con analisi dei fondali, scelta delle esche e gestione della battuta."
  },
  {
    id:"trip-garda",
    title:"Grandi Acque sul Garda",
    destination:"Lombardia",
    lake:"Lago di Garda — Area Carp",
    image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    tutor:"Luca Ferrari",
    dates:"5–8 settembre",
    duration:"4 giorni / 3 notti",
    price:480,
    participants:"Max 8 pescatori",
    level:"Avanzato",
    gear:"Barca e echobot inclusi",
    description:"Demo: esperienza tecnica su grandi acque, con strategie di baiting, mappe batimetriche e sessioni notturne."
  },
  {
    id:"trip-umbria",
    title:"Weekend Carp in Umbria",
    destination:"Umbria",
    lake:"Lago Trasimeno — Carp Zone",
    image:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
    tutor:"Giulia Moretti",
    dates:"20–22 ottobre",
    duration:"3 giorni / 2 notti",
    price:260,
    participants:"Max 6 pescatori",
    level:"Principiante",
    gear:"Attrezzatura inclusa",
    description:"Demo: weekend formativo pensato per chi si avvicina al Carp Fishing, con tutor dedicato e catch report condiviso."
  }
];

const POSTS = [
  {
    id:1,
    user:"Marco R.",
    lake:"Lago di Levico",
    text:"Demo di catch report: bella sessione all’alba, azione costante su boilies e presentazione attenta vicino alla barra sabbiosa.",
    image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    likes:48,
    liked:false,
    comments:["Demo: complimenti, bella gestione della postazione!","Demo: che atmosfera incredibile."],
    catch:"Carpa specchio — 22,8 kg"
  },
  {
    id:2,
    user:"Giulia M.",
    lake:"Lago Trasimeno",
    text:"Demo: sessione di due notti con cambi di vento improvvisi. Abbiamo lavorato molto sulla distanza e sulla mappa dei fondali.",
    image:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    likes:31,
    liked:false,
    comments:["Demo: ottimo report, grazie per la condivisione."],
    catch:"Carpa amur — 18,9 kg"
  }
];

const BUSINESS_LAKE_ID = "lago-di-levico";

const BUSINESS_SWIMS = [
  {id:1,name:"Postazione 1",price:45,status:"Disponibile"},
  {id:2,name:"Postazione 2",price:45,status:"Disponibile"},
  {id:3,name:"Postazione 3",price:55,status:"Occupata"},
  {id:4,name:"Postazione 4",price:45,status:"Disponibile"}
];

const EQUIPMENT = [
  {id:"eq-1",name:"Set canne Carp 12ft",price:25,available:true},
  {id:"eq-2",name:"Bivvy 2 posti",price:40,available:true},
  {id:"eq-3",name:"Barca di servizio",price:70,available:false},
  {id:"eq-4",name:"Echobot",price:55,available:true}
];

const BUSINESS_BOOKINGS = [
  {id:"BK-1042",user:"Marco R.",lake:"Lago di Levico",swim:"Postazione 4",dates:"12–14 del mese",people:2,total:"€180",status:"Confermata"},
  {id:"BK-1043",user:"Giulia M.",lake:"Lago di Levico",swim:"Postazione 7",dates:"20–22 del mese",people:3,total:"€270",status:"In attesa"}
];

let currentUser = null;
let compareSelection = [];
let maps = {};

const app = document.getElementById("app");
const toast = document.getElementById("toast");

/* ---------- Utils ---------- */
const money = n => `€${n}`;
const stars = r => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"), 3200);
}

function requireAuth(action){
  if(!currentUser){
    openAuth("register", action);
    return false;
  }
  return true;
}

/* ---------- Components ---------- */
function lakeCard(lake){
  return `
    <article class="card">
      <div class="card-media">
        <img src="${lake.image}" alt="${lake.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-top">
          <div>
            <span class="badge">${lake.region}</span>
            <h3 style="margin-top:10px">${lake.name}</h3>
            <p class="small muted">${lake.province} · Carp Fishing</p>
          </div>
          <div class="rating">${stars(lake.rating)}<span>${lake.rating}</span></div>
        </div>
        <div class="meta-row">
          <span class="meta">${lake.size}</span>
          <span class="meta">${lake.depth}</span>
          <span class="meta">${lake.swims} postazioni</span>
          ${lake.boat ? `<span class="meta gold">Barca</span>` : ""}
        </div>
        <div class="card-top" style="margin-top:16px">
          <span class="price">${money(lake.price)} <small>/ notte</small></span>
          <div class="card-actions" style="margin:0">
            <a class="btn btn-outline" href="#/lake/${lake.id}">Dettagli</a>
            <button class="btn btn-primary" data-book="${lake.id}">Prenota</button>
          </div>
        </div>
      </div>
    </article>`;
}

function tripCard(trip){
  return `
    <article class="card trip-card">
      <div class="card-media"><img src="${trip.image}" alt="${trip.title}" loading="lazy" /></div>
      <div class="card-body">
        <span class="badge gold">${trip.destination}</span>
        <h3 style="margin-top:12px">${trip.title}</h3>
        <p class="small muted">${trip.lake} · Tutor: ${trip.tutor}</p>
        <div class="trip-info">
          <div><span>Date</span><strong>${trip.dates}</strong></div>
          <div><span>Durata</span><strong>${trip.duration}</strong></div>
          <div><span>Partecipanti</span><strong>${trip.participants}</strong></div>
          <div><span>Livello</span><strong>${trip.level}</strong></div>
        </div>
        <p class="small" style="margin-top:14px">${trip.description}</p>
        <div class="card-top" style="margin-top:16px">
          <span class="price">${money(trip.price)} <small>/ persona</small></span>
          <button class="btn btn-gold" data-trip="${trip.id}">Prenota il tuo viaggio</button>
        </div>
      </div>
    </article>`;
}

function postCard(post){
  const initials = post.user.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  return `
  <article class="post">
    <div class="post-head">
      <div class="avatar">${initials}</div>
      <div>
        <strong>${post.user}</strong>
        <p class="small muted">${post.lake}</p>
      </div>
    </div>
    ${post.catch ? `<span class="catch-tag">🐟 ${post.catch}</span>` : ""}
    <p>${post.text}</p>
    ${post.image ? `<img class="post-image" src="${post.image}" alt="Foto sessione" loading="lazy" />` : ""}
    <div class="post-actions">
      <button data-like="${post.id}" class="${post.liked ? "liked":""}">♥ ${post.likes} Mi piace</button>
      <button data-comments="${post.id}">💬 ${post.comments.length} Commenti</button>
      <button data-share="${post.id}">↗ Condividi</button>
    </div>
    <div id="comments-${post.id}" style="display:none;margin-top:14px">
      ${post.comments.map(c=>`<p class="small">• ${c}</p>`).join("")}
    </div>
  </article>`;
}

/* ---------- Pages ---------- */
function homePage(){
  return `
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-content">
      <span class="eyebrow">🎣 Carp Fishing · Italia</span>
      <h1>YOUR NEXT SESSION STARTS HERE.</h1>
      <p>Scopri i migliori laghi per il Carp Fishing in Italia. Confronta, scegli e prenota la tua prossima avventura.</p>

      <form class="search-panel" id="heroSearch">
        <div class="field">
          <label for="hRegion">Regione</label>
          <select id="hRegion">
            <option value="">Tutte le regioni</option>
            ${[...new Set(LAKES.map(l=>l.region))].map(r=>`<option>${r}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label for="hDate">Date di pesca</label>
          <input type="date" id="hDate" />
        </div>
        <div class="field">
          <label for="hPeople">Pescatori</label>
          <select id="hPeople">
            <option value="1">1 pescatore</option>
            <option value="2">2 pescatori</option>
            <option value="3">3 pescatori</option>
            <option value="4">4 pescatori</option>
          </select>
        </div>
        <div class="field">
          <label for="hSession">Sessione</label>
          <select id="hSession">
            <option value="24">24 ore</option>
            <option value="48">48 ore</option>
            <option value="72">72 ore</option>
          </select>
        </div>
        <button class="btn btn-gold" type="submit">Cerca lago</button>
      </form>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <h2>Laghi più popolari</h2>
          <p>Una selezione dimostrativa di spot italiani pensati per il Carp Fishing, con servizi, postazioni e informazioni tecniche.</p>
        </div>
        <a href="#/explore" class="btn btn-outline">Esplora tutti</a>
      </div>
      <div class="grid grid-3">${LAKES.slice(0,3).map(lakeCard).join("")}</div>
    </div>
  </section>

  <section class="section dark">
    <div class="container">
      <div class="section-head">
        <div>
          <h2>Come funziona HOOKMAP</h2>
          <p>Trova l’acqua giusta, confronta le caratteristiche e organizza la sessione in pochi passaggi.</p>
        </div>
      </div>
      <div class="grid grid-4">
        <div class="card" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12)">
          <div class="card-body">
            <span class="badge gold">01</span>
            <h3 style="margin:12px 0">Cerca</h3>
            <p>Filtra per regione, prezzo, durata, servizi, accessibilità e pesca dalla barca.</p>
          </div>
        </div>
        <div class="card" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12)">
          <div class="card-body">
            <span class="badge gold">02</span>
            <h3 style="margin:12px 0">Confronta</h3>
            <p>Aggiungi fino a tre laghi e confronta prezzi, dimensioni, profondità e recensioni.</p>
          </div>
        </div>
        <div class="card" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12)">
          <div class="card-body">
            <span class="badge gold">03</span>
            <h3 style="margin:12px 0">Prenota</h3>
            <p>Scegli postazione, date e numero di pescatori. La prenotazione è simulata in questa demo.</p>
          </div>
        </div>
        <div class="card" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12)">
          <div class="card-body">
            <span class="badge gold">04</span>
            <h3 style="margin:12px 0">Condividi</h3>
            <p>Pubblica foto, racconti e catch report nella community di HOOKMAP.</p>
          </div>
        </div>
      </div>

      <div class="grid grid-2" style="margin-top:24px">
        <div class="card" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12)">
          <div class="card-body">
            <span class="badge gold">Per pescatori</span>
            <h3 style="margin:12px 0">Free o Premium</h3>
            <p>Cerca laghi, salva i preferiti, prenota e condividi i tuoi catch report con la community.</p>
            <button class="btn btn-gold full" id="userCta" style="margin-top:16px">Crea account pescatore</button>
          </div>
        </div>
        <div class="card" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12)">
          <div class="card-body">
            <span class="badge gold">Per gestori</span>
            <h3 style="margin:12px 0">Gestisci il tuo lago</h3>
            <p>Pubblica postazioni, prezzi, disponibilità, servizi e noleggio attrezzature con l’account Azienda.</p>
            <button class="btn btn-gold full" id="businessCta" style="margin-top:16px">Area aziende</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section sand">
    <div class="container">
      <div class="section-head">
        <div>
          <h2>Fishing Trips con tutor</h2>
          <p>Impara tecniche, lettura dell’acqua e gestione della sessione insieme a pescatori esperti.</p>
        </div>
        <a href="#/trips" class="btn btn-primary">Vedi tutti i viaggi</a>
      </div>
      <div class="grid grid-3">${TRIPS.map(tripCard).join("")}</div>
    </div>
  </section>`;
}

function explorePage(){
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <h2>Esplora laghi in Italia</h2>
          <p>Usa la mappa e i filtri per trovare l’area più adatta alla tua prossima sessione di Carp Fishing.</p>
        </div>
      </div>

      <div class="explore-layout">
        <aside class="filters">
          <h3>Filtri</h3>
          <div class="filter-group">
            <label for="fRegion">Regione</label>
            <select id="fRegion">
              <option value="">Tutte</option>
              ${[...new Set(LAKES.map(l=>l.region))].map(r=>`<option>${r}</option>`).join("")}
            </select>
          </div>
          <div class="filter-group">
            <label for="fProvince">Provincia</label>
            <select id="fProvince">
              <option value="">Tutte</option>
              ${[...new Set(LAKES.map(l=>l.province))].map(p=>`<option>${p}</option>`).join("")}
            </select>
          </div>
          <div class="filter-group">
            <label for="fMaxPrice">Prezzo massimo per notte</label>
            <input type="range" id="fMaxPrice" min="30" max="80" value="80" />
            <p class="small muted" id="priceLabel">Fino a €80</p>
          </div>
          <div class="filter-group">
            <label for="fNights">Notti</label>
            <select id="fNights">
              <option value="1">1 notte</option>
              <option value="2">2 notti</option>
              <option value="3">3 notti</option>
            </select>
          </div>
          <div class="filter-group">
            <label for="fPeople">Numero pescatori</label>
            <select id="fPeople">
              <option value="1">1</option><option value="2">2</option>
              <option value="3">3</option><option value="4">4</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Tipo di sessione</label>
            <div class="checks">
              <label class="check"><input type="checkbox" id="fSolo" /> Pesca in solitaria</label>
              <label class="check"><input type="checkbox" id="fGroup" /> Pesca in gruppo</label>
              <label class="check"><input type="checkbox" id="f24" /> 24 ore</label>
              <label class="check"><input type="checkbox" id="f48" /> 48 ore</label>
              <label class="check"><input type="checkbox" id="f72" /> 72 ore</label>
            </div>
          </div>
          <div class="filter-group">
            <label>Servizi e caratteristiche</label>
            <div class="checks">
              <label class="check"><input type="checkbox" id="fServices" /> Servizi completi</label>
              <label class="check"><input type="checkbox" id="fAccess" /> Accessibilità</label>
              <label class="check"><input type="checkbox" id="fBoat" /> Pesca dalla barca</label>
            </div>
          </div>
          <button class="btn btn-primary full" id="applyFilters">Applica filtri</button>
          <button class="btn btn-ghost full" id="resetFilters" style="margin-top:10px">Reset</button>
        </aside>

        <div>
          <div class="map-box"><div id="exploreMap"></div></div>
          <p class="results-count" id="resultsCount"></p>
          <div class="grid grid-2" id="lakeResults"></div>
        </div>
      </div>
    </div>
  </section>`;
}

function lakePage(id){
  const lake = LAKES.find(l=>l.id===id);
  if(!lake) return `<section class="section"><div class="container"><div class="empty">Lago non trovato.</div></div></section>`;

  return `
  <section class="lake-hero">
    <img src="${lake.image}" alt="${lake.name}" />
    <div class="container lake-hero-content">
      <p class="breadcrumb"><a href="#/">Home</a> / <a href="#/explore">Esplora laghi</a> / ${lake.name}</p>
      <h1>${lake.name}</h1>
      <p>${lake.region} · ${lake.province} · ${stars(lake.rating)} ${lake.rating} (${lake.reviews} recensioni demo)</p>
    </div>
  </section>

  <section class="section">
    <div class="container detail-layout">
      <div>
        <div class="gallery">
          <img src="${lake.gallery[0]}" alt="${lake.name} vista principale" />
          <img src="${lake.gallery[1]}" alt="${lake.name} dettaglio" />
        </div>

        <div class="panel">
          <h3>Descrizione</h3>
          <p>${lake.description}</p>
          <div class="spec-grid" style="margin-top:20px">
            <div class="spec"><span>Dimensioni</span><strong>${lake.size}</strong></div>
            <div class="spec"><span>Profondità</span><strong>${lake.depth}</strong></div>
            <div class="spec"><span>Postazioni</span><strong>${lake.swims}</strong></div>
            <div class="spec"><span>Peso massimo demo</span><strong>${lake.maxCarp}</strong></div>
          </div>
        </div>

        <div class="panel">
          <h3>Specie e catture documentate</h3>
          <div class="meta-row">
            ${lake.species.map(s=>`<span class="meta">${s}</span>`).join("")}
          </div>
          <div style="margin-top:18px">
            ${lake.catches.map(c=>`
              <div class="review">
                <strong>${c.species}</strong>
                <p class="small muted">${c.weight} · ${c.date}</p>
              </div>`).join("")}
          </div>
        </div>

        <div class="panel">
          <h3>Fondali, ostacoli e batimetria</h3>
          <ul class="list-check">
            <li>Fondali demo: alternanza di sabbia, ghiaia, fango e vegetazione sommersa.</li>
            <li>Ostacoli demo: alberi sommersi, canneti e strutture near-shore da mappare prima della sessione.</li>
            <li>Mappa batimetrica demo: da integrare con dati ufficiali del gestore.</li>
          </ul>
          <div class="map-box" style="margin-top:18px"><div id="lakeMap"></div></div>
        </div>

        <div class="panel">
          <h3>Regolamento di pesca</h3>
          <p>${lake.rules}</p>
        </div>

        <div class="panel">
          <h3>Recensioni dei pescatori</h3>
          <div class="review">
            <div class="post-head">
              <div class="avatar">MR</div>
              <div><strong>Marco R.</strong><p class="small muted">Demo — sessione di 48 ore</p></div>
            </div>
            <p>“Demo: postazioni ben organizzate e informazioni chiare sui fondali. Ottima esperienza complessiva.”</p>
          </div>
          <div class="review">
            <div class="post-head">
              <div class="avatar">GM</div>
              <div><strong>Giulia M.</strong><p class="small muted">Demo — sessione di gruppo</p></div>
            </div>
            <p>“Demo: ambiente curato e servizi utili per una sessione lunga. Consigliata la prenotazione anticipata.”</p>
          </div>
        </div>
      </div>

      <aside>
        <div class="panel booking-card">
          <h3>Prenota la postazione</h3>
          <p class="small muted">${lake.availability}</p>
          <form id="bookingForm" style="margin-top:18px">
            <div class="filter-group">
              <label for="bSwim">Postazione</label>
              <select id="bSwim">
                ${Array.from({length:lake.swims},(_,i)=>`<option>Postazione ${i+1}</option>`).join("")}
              </select>
            </div>
            <div class="filter-group">
              <label for="bArrival">Arrivo</label>
              <input type="date" id="bArrival" required />
            </div>
            <div class="filter-group">
              <label for="bDeparture">Partenza</label>
              <input type="date" id="bDeparture" required />
            </div>
            <div class="filter-group">
              <label for="bPeople">Pescatori</label>
              <select id="bPeople">
                <option value="1">1 pescatore</option>
                <option value="2">2 pescatori</option>
                <option value="3">3 pescatori</option>
                <option value="4">4 pescatori</option>
              </select>
            </div>
            <div class="filter-group">
              <label for="bType">Tipologia</label>
              <select id="bType">
                <option value="Individuale">Individuale</option>
                <option value="Gruppo">Gruppo</option>
              </select>
            </div>
            <div class="booking-summary">
              <div class="summary-row"><span>Prezzo per notte</span><strong id="bNight">${money(lake.price)}</strong></div>
              <div class="summary-row"><span>Notti</span><strong id="bNights">1</strong></div>
              <div class="summary-row"><span>Pescatori</span><strong id="bPeopleLabel">1</strong></div>
              <div class="summary-row total"><span>Totale stimato</span><strong id="bTotal">${money(lake.price)}</strong></div>
            </div>
            <button class="btn btn-gold full" type="submit" style="margin-top:18px">Conferma prenotazione</button>
          </form>
        </div>

        <div class="panel">
          <h3>Servizi</h3>
          <ul class="list-check">
            ${lake.services.map(s=>`<li>${s}</li>`).join("")}
          </ul>
        </div>

        <div class="panel">
          <h3>Confronta questo lago</h3>
          <p class="small muted">Aggiungi il lago al confronto e seleziona fino a 3 acque da analizzare.</p>
          <button class="btn btn-outline full" data-compare="${lake.id}" style="margin-top:14px">Aggiungi al confronto</button>
        </div>
      </aside>
    </div>
  </section>`;
}

function comparePage(){
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <h2>Confronta laghi</h2>
          <p>Seleziona fino a 3 laghi per confrontare prezzi, dimensioni, profondità, catture, servizi e recensioni.</p>
        </div>
      </div>

      <div class="pick-grid">
        ${LAKES.map(l=>`
          <button class="pick ${compareSelection.includes(l.id) ? "selected":""}" data-pick="${l.id}">
            <img src="${l.image}" alt="${l.name}" />
            <span>
              <strong>${l.name}</strong>
              <small>${l.region} · ${money(l.price)}/notte</small>
            </span>
          </button>`).join("")}
      </div>

      <div id="compareResult"></div>
    </div>
  </section>`;
}

function communityPage(){
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <h2>Community</h2>
          <p>Condividi sessioni, foto, catch report e trova compagni di pesca.</p>
        </div>
        <button class="btn btn-primary" id="communityAuth">${currentUser ? "Il mio profilo" : "Registrati"}</button>
      </div>

      <div class="composer">
        <h3>Pubblica un Catch Report</h3>
        <form id="postForm">
          <input type="text" id="postLake" placeholder="Lago di provenienza" required />
          <div class="composer-row">
            <input type="text" id="postCatch" placeholder="Specie e peso, es. Carpa specchio — 20 kg" />
            <input type="url" id="postImage" placeholder="URL foto della sessione" />
          </div>
          <textarea id="postText" rows="3" placeholder="Racconta la sessione: condizioni, strategia, esche e risultati." required></textarea>
          <button class="btn btn-gold" type="submit">Pubblica</button>
        </form>
      </div>

      <div class="grid grid-2" id="postsGrid">
        ${POSTS.map(postCard).join("")}
      </div>

      <div class="section" style="padding-bottom:0">
        <div class="section-head">
          <div>
            <h3>Gruppi e compagni di sessione</h3>
            <p>Entra in un gruppo demo o cerca pescatori disponibili per una sessione condivisa.</p>
          </div>
        </div>
        <div class="grid grid-3">
          <div class="card"><div class="card-body">
            <span class="badge">Gruppo</span><h3 style="margin:10px 0">Carp Night Crew</h3>
            <p class="small">Sessioni notturne, bait boat e tecniche su grandi acque.</p>
            <button class="btn btn-outline full" data-group="Carp Night Crew" style="margin-top:14px">Entra nel gruppo</button>
          </div></div>
          <div class="card"><div class="card-body">
            <span class="badge">Gruppo</span><h3 style="margin:10px 0">Session Buddies</h3>
            <p class="small">Trova compagni per weekend di pesca e condivisione attrezzatura.</p>
            <button class="btn btn-outline full" data-group="Session Buddies" style="margin-top:14px">Entra nel gruppo</button>
          </div></div>
          <div class="card"><div class="card-body">
            <span class="badge">Gruppo</span><h3 style="margin:10px 0">Fondali & Mappe</h3>
            <p class="small">Confronta mappe, ostacoli e strategie di lettura dell’acqua.</p>
            <button class="btn btn-outline full" data-group="Fondali & Mappe" style="margin-top:14px">Entra nel gruppo</button>
          </div></div>
        </div>
      </div>
    </div>
  </section>`;
}

function tripsPage(){
  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <h2>Fishing Trips</h2>
          <p>Viaggi organizzati con tutor esperti, pensati per migliorare tecnica, lettura dell’acqua e gestione della sessione.</p>
        </div>
      </div>
      <div class="grid grid-3">${TRIPS.map(tripCard).join("")}</div>
    </div>
  </section>`;
}

function dashboardPage(){
  if(!currentUser){
    return `
    <section class="section">
      <div class="container">
        <div class="empty">
          <h3>Area personale</h3>
          <p>Accedi come Pescatore o Azienda per accedere alla tua dashboard.</p>
          <button class="btn btn-primary" id="dashLogin" style="margin-top:18px">Accedi / Registrati</button>
        </div>
      </div>
    </section>`;
  }

  const isBusiness = currentUser.type === "business";
  const planLabel = isBusiness
    ? (currentUser.plan === "business-pro" ? "Business Pro" : "Business Basic")
    : (currentUser.plan === "premium" ? "Premium" : "Free");

  return `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <h2>Ciao, ${currentUser.name}</h2>
          <p>${isBusiness
            ? "Gestisci il tuo lago, le postazioni, i noleggi e le prenotazioni ricevute."
            : "Gestisci prenotazioni, preferiti, catch report, gruppi e messaggi."}</p>
        </div>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
          <span class="plan-badge ${isBusiness ? "business" : (currentUser.plan === "premium" ? "" : "free")}">
            ${isBusiness ? "🏢 " : "🎣 "}${planLabel}
          </span>
          <button class="btn btn-ghost" id="logoutBtn">Esci</button>
        </div>
      </div>

      <div class="dash-layout">
        <aside class="dash-nav">
          ${isBusiness ? `
            <button class="active" data-dash="business-overview">Panoramica azienda</button>
            <button data-dash="business-lake">Il mio lago</button>
            <button data-dash="business-swims">Postazioni e prezzi</button>
            <button data-dash="business-calendar">Disponibilità</button>
            <button data-dash="business-bookings">Prenotazioni</button>
            <button data-dash="business-equipment">Noleggio attrezzature</button>
            <button data-dash="business-reports">Report e incassi</button>
          ` : `
            <button class="active" data-dash="overview">Panoramica</button>
            <button data-dash="bookings">Prenotazioni</button>
            <button data-dash="favorites">Laghi preferiti</button>
            <button data-dash="catches">Catch Report</button>
            <button data-dash="groups">Gruppi</button>
            <button data-dash="messages">Messaggi</button>
            <button data-dash="trips">Viaggi prenotati</button>
            ${currentUser.plan === "premium" ? `<button data-dash="premium">Vantaggi Premium</button>` : ""}
          `}
        </aside>

        <div id="dashContent"></div>
      </div>
    </div>
  </section>`;
}

/* ---------- Maps ---------- */
function initExploreMap(){
  const el = document.getElementById("exploreMap");
  if(!el || typeof L === "undefined" || maps.explore) return;

  maps.explore = L.map(el).setView([43.8,11.2],6);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom:19,
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(maps.explore);

  LAKES.forEach(lake=>{
    L.marker(lake.coords).addTo(maps.explore)
      .bindPopup(`<strong>${lake.name}</strong><br>${money(lake.price)}/notte<br><a href="#/lake/${lake.id}">Apri scheda</a>`);
  });
}

function initLakeMap(lake){
  const el = document.getElementById("lakeMap");
  if(!el || typeof L === "undefined" || maps[lake.id]) return;

  maps[lake.id] = L.map(el).setView(lake.coords,12);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom:19,
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(maps[lake.id]);

  L.marker(lake.coords).addTo(maps[lake.id]).bindPopup(`<strong>${lake.name}</strong>`);
}

/* ---------- Explore filters ---------- */
function applyExploreFilters(){
  const region = document.getElementById("fRegion")?.value || "";
  const province = document.getElementById("fProvince")?.value || "";
  const maxPrice = Number(document.getElementById("fMaxPrice")?.value || 80);
  const services = document.getElementById("fServices")?.checked;
  const accessible = document.getElementById("fAccess")?.checked;
  const boat = document.getElementById("fBoat")?.checked;

  const results = LAKES.filter(l=>
    (!region || l.region===region) &&
    (!province || l.province===province) &&
    l.price<=maxPrice &&
    (!services || l.services.length>=4) &&
    (!accessible || l.accessible) &&
    (!boat || l.boat)
  );

  const count = document.getElementById("resultsCount");
  const grid = document.getElementById("lakeResults");

  if(count) count.textContent = `${results.length} laghi disponibili nella demo`;
  if(grid) grid.innerHTML = results.length ? results.map(lakeCard).join("") : `<div class="empty">Nessun lago corrisponde ai filtri selezionati.</div>`;

  bindGlobalCardActions();
}

/* ---------- Booking ---------- */
function updateBooking(lake){
  const arrival = document.getElementById("bArrival")?.value;
  const departure = document.getElementById("bDeparture")?.value;
  const people = Number(document.getElementById("bPeople")?.value || 1);

  let nights = 1;
  if(arrival && departure){
    const diff = (new Date(departure) - new Date(arrival)) / 86400000;
    nights = diff > 0 ? Math.round(diff) : 1;
  }

  const total = lake.price * nights * people;
  document.getElementById("bNight").textContent = money(lake.price);
  document.getElementById("bNights").textContent = nights;
  document.getElementById("bPeopleLabel").textContent = people;
  document.getElementById("bTotal").textContent = money(total);
}

/* ---------- Auth ---------- */
function openAuth(mode="login", next=null){
  const modal = document.getElementById("authModal");
  document.getElementById("authTitle").textContent =
    mode === "register" ? "Crea il tuo account HOOKMAP" : "Accedi a HOOKMAP";

  modal.dataset.next = next || "";
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
}

function closeAuth(){
  const modal = document.getElementById("authModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
}

/* ---------- Compare ---------- */
function renderCompare(){
  const box = document.getElementById("compareResult");
  if(!box) return;

  if(compareSelection.length === 0){
    box.innerHTML = `<div class="empty">Seleziona almeno un lago per avviare il confronto.</div>`;
    return;
  }

  const selected = LAKES.filter(l=>compareSelection.includes(l.id));
  const rows = [
    ["Prezzo per notte", l=>money(l.price)],
    ["Dimensioni", l=>l.size],
    ["Profondità", l=>l.depth],
    ["Peso massimo catture", l=>l.maxCarp],
    ["Numero postazioni", l=>`${l.swims}`],
    ["Servizi", l=>l.services.join(", ")],
    ["Disponibilità", l=>l.availability],
    ["Recensioni", l=>`${l.rating} / 5 · ${l.reviews} recensioni demo`],
    ["Barca", l=>l.boat ? "Disponibile" : "Non disponibile"],
    ["Accessibilità", l=>l.accessible ? "Sì" : "Da verificare"]
  ];

  box.innerHTML = `
    <div class="compare-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th>Caratteristica</th>
            ${selected.map(l=>`<th><div class="compare-lake"><img src="${l.image}" alt="${l.name}" /><strong>${l.name}</strong></div></th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows.map(([label,fn])=>`
            <tr>
              <td>${label}</td>
              ${selected.map(l=>`<td>${fn(l)}</td>`).join("")}
            </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <div style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap">
      <button class="btn btn-ghost" id="clearCompare">Svuota confronto</button>
      ${selected.length===1 ? `<a class="btn btn-primary" href="#/lake/${selected[0].id}">Vai alla scheda</a>`:""}
    </div>`;

  document.getElementById("clearCompare").onclick = ()=>{
    compareSelection = [];
    router();
  };
}

/* ---------- Dashboard ---------- */
function renderDash(section){
  const box = document.getElementById("dashContent");
  if(!box) return;

  const isBusiness = currentUser?.type === "business";

  const userViews = {
    overview:()=>`
      <div class="stat-grid">
        <div class="stat"><span>Prenotazioni</span><strong>2</strong></div>
        <div class="stat"><span>Preferiti</span><strong>3</strong></div>
        <div class="stat"><span>Catch report</span><strong>5</strong></div>
        <div class="stat"><span>Gruppi</span><strong>2</strong></div>
      </div>
      <div class="panel">
        <h3>Prossima sessione</h3>
        <div class="booking-row">
          <div><strong>Lago di Levico</strong><p class="small muted">Postazione 4 · 2 pescatori</p></div>
          <span class="badge gold">Demo</span>
        </div>
      </div>`,
    bookings:()=>`
      <div class="panel"><h3>Prenotazioni</h3>
        <div class="booking-row"><div><strong>Lago di Levico</strong><p class="small muted">Demo · 2 notti · 2 pescatori</p></div><span class="badge">Confermata</span></div>
        <div class="booking-row"><div><strong>Lago Trasimeno</strong><p class="small muted">Demo · 1 notte · 1 pescatore</p></div><span class="badge gold">In attesa</span></div>
      </div>`,
    favorites:()=>`<div class="grid grid-2">${LAKES.slice(0,2).map(lakeCard).join("")}</div>`,
    catches:()=>`
      <div class="panel"><h3>Catch Report personali</h3>
        <div class="review"><strong>Carpa specchio — 22,8 kg</strong><p class="small muted">Lago di Levico · demo</p></div>
        <div class="review"><strong>Carpa amur — 18,9 kg</strong><p class="small muted">Lago Trasimeno · demo</p></div>
      </div>`,
    groups:()=>`
      <div class="grid grid-2">
        <div class="panel"><h3>Carp Night Crew</h3><p class="small">Membro demo</p></div>
        <div class="panel"><h3>Session Buddies</h3><p class="small">Membro demo</p></div>
      </div>`,
    messages:()=>`
      <div class="panel"><h3>Messaggi</h3>
        <div class="booking-row"><div><strong>Marco R.</strong><p class="small muted">Demo: ci vediamo sabato alla postazione 4?</p></div><span class="badge">Nuovo</span></div>
      </div>`,
    trips:()=>`
      <div class="panel"><h3>Viaggi prenotati</h3>
        <div class="trip-row"><div><strong>Carp Session nelle Alpi</strong><p class="small muted">12–15 giugno · Lago di Levico</p></div><span class="badge gold">Confermato</span></div>
      </div>`,
    premium:()=>`
      <div class="panel">
        <h3>Vantaggi Premium</h3>
        <ul class="list-check">
          <li>Prenotazione prioritaria delle postazioni demo.</li>
          <li>Salvataggio illimitato di catch report.</li>
          <li>Confronto avanzato tra laghi.</li>
          <li>Notifiche per nuove disponibilità.</li>
        </ul>
      </div>`
  };

  const businessViews = {
    "business-overview":()=>`
      <div class="stat-grid">
        <div class="stat"><span>Prenotazioni</span><strong>${BUSINESS_BOOKINGS.length}</strong></div>
        <div class="stat"><span>Postazioni</span><strong>${BUSINESS_SWIMS.length}</strong></div>
        <div class="stat"><span>Attrezzature</span><strong>${EQUIPMENT.length}</strong></div>
        <div class="stat"><span>Incassi demo</span><strong>€450</strong></div>
      </div>
      <div class="panel">
        <h3>Il tuo lago</h3>
        <p class="small muted">Lago di Levico · Trentino-Alto Adige · piano ${currentUser.plan === "business-pro" ? "Business Pro" : "Business Basic"}</p>
        <div class="manager-actions">
          <button class="btn btn-primary" data-manager="business-lake">Modifica scheda lago</button>
          <button class="btn btn-outline" data-manager="business-swims">Gestisci postazioni</button>
          <button class="btn btn-outline" data-manager="business-equipment">Gestisci noleggi</button>
          <button class="btn btn-ghost" data-manager="business-bookings">Vedi prenotazioni</button>
        </div>
      </div>`,
    "business-lake":()=>`
      <div class="panel">
        <h3>Scheda del lago</h3>
        <form id="lakeManagerForm">
          <div class="filter-group"><label>Nome lago</label><input value="Lago di Levico" /></div>
          <div class="filter-group"><label>Regione</label><input value="Trentino-Alto Adige" /></div>
          <div class="filter-group"><label>Prezzo base per notte</label><input type="number" value="45" /></div>
          <div class="filter-group"><label>Descrizione</label><textarea rows="4">Demo: ambiente alpino con postazioni organizzate e fondali variabili.</textarea></div>
          <button class="btn btn-primary" type="submit">Salva modifiche</button>
        </form>
      </div>`,
    "business-swims":()=>`
      <div class="panel">
        <h3>Postazioni e prezzi</h3>
        ${BUSINESS_SWIMS.map(s=>`
          <div class="booking-row">
            <div>
              <strong>${s.name}</strong>
              <p class="small muted">${money(s.price)}/notte · ${s.status}</p>
            </div>
            <button class="btn btn-ghost" data-edit-swim="${s.id}">Modifica</button>
          </div>`).join("")}
        <button class="btn btn-primary" id="addSwim" style="margin-top:16px">Aggiungi postazione</button>
      </div>`,
    "business-calendar":()=>`
      <div class="panel">
        <h3>Disponibilità</h3>
        <p class="small muted">Demo: blocca date, apre stagioni e imposta limiti di pescatori per postazione.</p>
        <div class="filter-group"><label>Data inizio blocco</label><input type="date" /></div>
        <div class="filter-group"><label>Data fine blocco</label><input type="date" /></div>
        <button class="btn btn-primary" id="blockDates">Blocca date</button>
      </div>`,
    "business-bookings":()=>`
      <div class="panel">
        <h3>Prenotazioni ricevute</h3>
        ${BUSINESS_BOOKINGS.map(b=>`
          <div class="booking-row">
            <div>
              <strong>${b.user} — ${b.swim}</strong>
              <p class="small muted">${b.lake} · ${b.dates} · ${b.people} pescatori · ${b.total}</p>
            </div>
            <div style="display:flex;gap:8px;align-items:center">
              <span class="badge ${b.status === "Confermata" ? "" : "gold"}">${b.status}</span>
              ${b.status !== "Confermata" ? `<button class="btn btn-primary" data-confirm="${b.id}">Conferma</button>` : ""}
            </div>
          </div>`).join("")}
      </div>`,
    "business-equipment":()=>`
      <div class="panel">
        <h3>Noleggio attrezzature</h3>
        ${EQUIPMENT.map(eq=>`
          <div class="booking-row">
            <div>
              <strong>${eq.name}</strong>
              <p class="small muted">${money(eq.price)}/giorno · ${eq.available ? "Disponibile" : "Noleggiata"}</p>
            </div>
            <button class="btn ${eq.available ? "btn-outline":"btn-danger"}" data-toggle-eq="${eq.id}">
              ${eq.available ? "Segna noleggiata" : "Segna disponibile"}
            </button>
          </div>`).join("")}
        <button class="btn btn-primary" id="addEquipment" style="margin-top:16px">Aggiungi attrezzatura</button>
      </div>`,
    "business-reports":()=>`
      <div class="panel">
        <h3>Report e incassi</h3>
        <div class="spec-grid">
          <div class="spec"><span>Prenotazioni mese</span><strong>12</strong></div>
          <div class="spec"><span>Incasso demo</span><strong>€1.240</strong></div>
          <div class="spec"><span>Noleggi</span><strong>8</strong></div>
          <div class="spec"><span>Occupazione</span><strong>68%</strong></div>
        </div>
      </div>`
  };

  const views = isBusiness ? businessViews : userViews;
  box.innerHTML = (views[section] || views[isBusiness ? "business-overview" : "overview"])();
  bindDashboardActions();
}

function bindDashboardActions(){
  document.querySelectorAll("[data-manager]").forEach(btn=>{
    btn.onclick = ()=>{
      document.querySelectorAll("[data-dash]").forEach(b=>b.classList.remove("active"));
      document.querySelector(`[data-dash="${btn.dataset.manager}"]`)?.classList.add("active");
      renderDash(btn.dataset.manager);
    };
  });

  document.querySelectorAll("[data-confirm]").forEach(btn=>{
    btn.onclick = ()=>{
      const booking = BUSINESS_BOOKINGS.find(b=>b.id===btn.dataset.confirm);
      booking.status = "Confermata";
      renderDash("business-bookings");
      showToast(`Prenotazione ${booking.id} confermata.`);
    };
  });

  document.querySelectorAll("[data-toggle-eq]").forEach(btn=>{
    btn.onclick = ()=>{
      const eq = EQUIPMENT.find(e=>e.id===btn.dataset.toggleEq);
      eq.available = !eq.available;
      renderDash("business-equipment");
      showToast(`${eq.name} aggiornato.`);
    };
  });

  document.getElementById("lakeManagerForm")?.addEventListener("submit",e=>{
    e.preventDefault();
    showToast("Modifiche alla scheda lago salvate nella demo.");
  });

  document.getElementById("addSwim")?.addEventListener("click",()=>showToast("Nuova postazione aggiunta alla demo."));
  document.getElementById("blockDates")?.addEventListener("click",()=>showToast("Date bloccate nella demo."));
  document.getElementById("addEquipment")?.addEventListener("click",()=>showToast("Nuova attrezzatura aggiunta alla demo."));

  document.querySelectorAll("[data-edit-swim]").forEach(btn=>{
    btn.onclick = ()=>showToast(`Modifica postazione ${btn.dataset.editSwim} aperta nella demo.`);
  });
}

function bindDashboard(){
  document.getElementById("dashLogin")?.addEventListener("click",()=>openAuth("login","dashboard"));
  document.getElementById("logoutBtn")?.addEventListener("click",()=>{
    currentUser = null;
    showToast("Sessione demo terminata.");
    router();
  });

  document.querySelectorAll("[data-dash]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll("[data-dash]").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      renderDash(btn.dataset.dash);
    });
  });

  renderDash(currentUser?.type === "business" ? "business-overview" : "overview");
}

/* ---------- Router ---------- */
function router(){
  const hash = location.hash.replace("#","") || "/";
  const [path, param] = hash.split("/").filter(Boolean);

  window.scrollTo({top:0,behavior:"instant"});
  document.querySelectorAll("[data-nav]").forEach(a=>a.classList.remove("active"));

  if(!path){
    app.innerHTML = homePage();
    document.querySelector('[data-nav="home"]')?.classList.add("active");
    bindHome();
  }
  else if(path==="explore"){
    app.innerHTML = explorePage();
    document.querySelector('[data-nav="explore"]')?.classList.add("active");
    initExploreMap();
    applyExploreFilters();
    bindExplore();
  }
  else if(path==="lake" && param){
    app.innerHTML = lakePage(param);
    const lake = LAKES.find(l=>l.id===param);
    if(lake){
      initLakeMap(lake);
      bindLake(lake);
    }
  }
  else if(path==="compare"){
    app.innerHTML = comparePage();
    document.querySelector('[data-nav="compare"]')?.classList.add("active");
    renderCompare();
    bindCompare();
  }
  else if(path==="community"){
    app.innerHTML = communityPage();
    document.querySelector('[data-nav="community"]')?.classList.add("active");
    bindCommunity();
  }
  else if(path==="trips"){
    app.innerHTML = tripsPage();
    document.querySelector('[data-nav="trips"]')?.classList.add("active");
    bindTrips();
  }
  else if(path==="dashboard"){
    app.innerHTML = dashboardPage();
    bindDashboard();
  }
  else{
    app.innerHTML = `<section class="section"><div class="container"><div class="empty">Pagina non trovata.</div></div></section>`;
  }
}

/* ---------- Bindings ---------- */
function bindHome(){
  document.getElementById("heroSearch")?.addEventListener("submit",e=>{
    e.preventDefault();
    const region = document.getElementById("hRegion").value;
    const people = document.getElementById("hPeople").value;
    const session = document.getElementById("hSession").value;
    showToast(`Ricerca demo: ${region || "tutte le regioni"} · ${people} pescatori · ${session} ore`);
    location.hash = "#/explore";
  });

  document.getElementById("userCta")?.addEventListener("click",()=>{
    openAuth("register");
    selectAccountType("user");
  });

  document.getElementById("businessCta")?.addEventListener("click",()=>{
    openAuth("register");
    selectAccountType("business");
  });

  bindGlobalCardActions();
}

function bindExplore(){
  const price = document.getElementById("fMaxPrice");
  const label = document.getElementById("priceLabel");

  price?.addEventListener("input",()=>{
    label.textContent = `Fino a €${price.value}`;
  });

  document.getElementById("applyFilters")?.addEventListener("click",applyExploreFilters);
  document.getElementById("resetFilters")?.addEventListener("click",()=>{
    ["fRegion","fProvince"].forEach(id=>document.getElementById(id).value="");
    document.getElementById("fMaxPrice").value = 80;
    label.textContent = "Fino a €80";
    ["fSolo","fGroup","f24","f48","f72","fServices","fAccess","fBoat"].forEach(id=>{
      const el=document.getElementById(id); if(el) el.checked=false;
    });
    applyExploreFilters();
  });

  bindGlobalCardActions();
}

function bindLake(lake){
  const form = document.getElementById("bookingForm");
  if(form){
    ["bArrival","bDeparture","bPeople"].forEach(id=>{
      document.getElementById(id).addEventListener("change",()=>updateBooking(lake));
    });
    form.addEventListener("submit",e=>{
      e.preventDefault();
      if(!requireAuth(`book:${lake.id}`)) return;
      const swim = document.getElementById("bSwim").value;
      const total = document.getElementById("bTotal").textContent;
      showToast(`Prenotazione demo confermata: ${lake.name}, ${swim}. Totale ${total}.`);
    });
  }
  bindGlobalCardActions();
}

function bindCompare(){
  document.querySelectorAll("[data-pick]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const id = btn.dataset.pick;
      if(compareSelection.includes(id)){
        compareSelection = compareSelection.filter(x=>x!==id);
      }else{
        if(compareSelection.length>=3){
          showToast("Puoi confrontare massimo 3 laghi.");
          return;
        }
        compareSelection.push(id);
      }
      router();
    });
  });
}

function bindCommunity(){
  document.getElementById("communityAuth")?.addEventListener("click",()=>{
    if(currentUser) location.hash="#/dashboard";
    else openAuth("register","community");
  });

  document.getElementById("postForm")?.addEventListener("submit",e=>{
    e.preventDefault();
    if(!requireAuth("community")) return;

    const text = document.getElementById("postText").value.trim();
    const lake = document.getElementById("postLake").value.trim() || "Lago non specificato";
    const catchText = document.getElementById("postCatch").value.trim();
    const image = document.getElementById("postImage").value.trim();

    POSTS.unshift({
      id:Date.now(),
      user:currentUser.name,
      lake,
      text,
      image:image || null,
      likes:0,
      liked:false,
      comments:[],
      catch:catchText
    });

    document.getElementById("postsGrid").innerHTML = POSTS.map(postCard).join("");
    e.target.reset();
    bindCommunityActions();
    showToast("Catch Report pubblicato nella demo community.");
  });

  bindCommunityActions();
}

function bindCommunityActions(){
  document.querySelectorAll("[data-like]").forEach(btn=>{
    btn.onclick = ()=>{
      const post = POSTS.find(p=>p.id===Number(btn.dataset.like));
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
      btn.classList.toggle("liked",post.liked);
      btn.innerHTML = `♥ ${post.likes} Mi piace`;
    };
  });

  document.querySelectorAll("[data-comments]").forEach(btn=>{
    btn.onclick = ()=>{
      const box = document.getElementById(`comments-${btn.dataset.comments}`);
      box.style.display = box.style.display==="none" ? "block":"none";
    };
  });

  document.querySelectorAll("[data-share]").forEach(btn=>{
    btn.onclick = ()=>showToast("Link del post demo copiato.");
  });

  document.querySelectorAll("[data-group]").forEach(btn=>{
    btn.onclick = ()=>{
      if(!requireAuth(`group:${btn.dataset.group}`)) return;
      showToast(`Richiesta di accesso inviata a ${btn.dataset.group}.`);
    };
  });
}

function bindTrips(){
  document.querySelectorAll("[data-trip]").forEach(btn=>{
    btn.onclick = ()=>{
      if(!requireAuth(`trip:${btn.dataset.trip}`)) return;
      const trip = TRIPS.find(t=>t.id===btn.dataset.trip);
      showToast(`Prenotazione demo confermata: ${trip.title}.`);
    };
  });
}

function bindGlobalCardActions(){
  document.querySelectorAll("[data-book]").forEach(btn=>{
    btn.onclick = ()=>{
      if(!requireAuth(`book:${btn.dataset.book}`)) return;
      location.hash = `#/lake/${btn.dataset.book}`;
      setTimeout(()=>{
        document.querySelector(".booking-card")?.scrollIntoView({behavior:"smooth",block:"start"});
      },120);
    };
  });

  document.querySelectorAll("[data-compare]").forEach(btn=>{
    btn.onclick = ()=>{
      const id = btn.dataset.compare;
      if(!compareSelection.includes(id)){
        if(compareSelection.length>=3){
          showToast("Puoi confrontare massimo 3 laghi.");
          return;
        }
        compareSelection.push(id);
      }
      location.hash = "#/compare";
    };
  });
}

/* ---------- Account type ---------- */
function selectAccountType(type){
  const input = document.querySelector(`input[name="accountType"][value="${type}"]`);
  if(input) input.checked = true;

  const isBusiness = type === "business";
  document.getElementById("userPlanBox").style.display = isBusiness ? "none" : "block";
  document.getElementById("businessPlanBox").style.display = isBusiness ? "block" : "none";
  document.getElementById("authTitle").textContent = isBusiness
    ? "Crea il tuo account Azienda"
    : "Crea il tuo account HOOKMAP";
}

/* ---------- Global events ---------- */
document.addEventListener("click",e=>{
  if(e.target.closest("[data-close-modal]")) closeAuth();
});

document.getElementById("menuToggle").addEventListener("click",()=>{
  document.getElementById("mainNav").classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach(a=>{
  a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open"));
});

document.getElementById("loginBtn").addEventListener("click",()=>openAuth("login"));
document.getElementById("registerBtn").addEventListener("click",()=>openAuth("register"));
document.getElementById("footerLogin").addEventListener("click",()=>openAuth("login"));
document.getElementById("footerRegister").addEventListener("click",()=>openAuth("register"));

document.querySelectorAll('input[name="accountType"]').forEach(input=>{
  input.addEventListener("change",()=>selectAccountType(input.value));
});

document.getElementById("authForm").addEventListener("submit",e=>{
  e.preventDefault();

  const name = document.getElementById("authUser").value.trim();
  const type = document.querySelector('input[name="accountType"]:checked').value;

  currentUser = type === "business"
    ? {
        type:"business",
        name,
        plan:document.getElementById("businessPlan").value,
        lakeId:BUSINESS_LAKE_ID
      }
    : {
        type:"user",
        name,
        plan:document.getElementById("userPlan").value
      };

  const next = document.getElementById("authModal").dataset.next;
  closeAuth();

  showToast(
    currentUser.type === "business"
      ? `Area azienda attivata per ${name}.`
      : `Benvenuto in HOOKMAP, ${name}!`
  );

  if(next?.startsWith("book:")){
    location.hash = `#/lake/${next.split(":")[1]}`;
  }else if(next){
    location.hash = `#/${next}`;
  }else{
    location.hash = "#/dashboard";
  }
});

window.addEventListener("hashchange",router);
document.getElementById("year").textContent = new Date().getFullYear();
router();