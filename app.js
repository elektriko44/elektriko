


// app.js
(function () {
  "use strict";

  /* ================= R18 PARENTAL CONTROL ================= */
  const ADULT_PASSWORD = "0214";
  let adultUnlockedSession = false;

  function requestAdultUnlock() {
    if (adultUnlockedSession) return true;
    const p = prompt("Enter parental password:");
    if (p === ADULT_PASSWORD) {
      adultUnlockedSession = true;
      return true;
    }
    alert("Wrong password");
    return false;
  }

  /* ================= TOKENS ================= */
  const IPTV_TOKENS={
  converge: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcyNTg1NDEyLCJleHAiOjE3NzM4ODE0MTIsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mzg4MTQxMn0.pWBHcolaeZXd-5DAkMobbJn5DbFoSTDEWYuQn0LC5U4",
 cignal: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcyNTg1NDEyLCJleHAiOjE3NzM4ODE0MTIsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mzg4MTQxMn0.pWBHcolaeZXd-5DAkMobbJn5DbFoSTDEWYuQn0LC5U4",
  astro: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcyNTg1NDEyLCJleHAiOjE3NzM4ODE0MTIsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mzg4MTQxMn0.pWBHcolaeZXd-5DAkMobbJn5DbFoSTDEWYuQn0LC5U4",
  iheart: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcyNTg1NDEyLCJleHAiOjE3NzM4ODE0MTIsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mzg4MTQxMn0.pWBHcolaeZXd-5DAkMobbJn5DbFoSTDEWYuQn0LC5U4",
  SonyPixHD: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcyNTg1NDEyLCJleHAiOjE3NzM4ODE0MTIsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mzg4MTQxMn0.pWBHcolaeZXd-5DAkMobbJn5DbFoSTDEWYuQn0LC5U4",
  StarMovies: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcyNTg1NDEyLCJleHAiOjE3NzM4ODE0MTIsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mzg4MTQxMn0.pWBHcolaeZXd-5DAkMobbJn5DbFoSTDEWYuQn0LC5U4",
  StarMoviesSelect: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcyNTg1NDEyLCJleHAiOjE3NzM4ODE0MTIsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mzg4MTQxMn0.pWBHcolaeZXd-5DAkMobbJn5DbFoSTDEWYuQn0LC5U4",
  gmalife: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcyNTg1NDEyLCJleHAiOjE3NzM4ODE0MTIsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mzg4MTQxMn0.pWBHcolaeZXd-5DAkMobbJn5DbFoSTDEWYuQn0LC5U4",
  gmanewstv: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcyNTg1NDEyLCJleHAiOjE3NzM4ODE0MTIsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mzg4MTQxMn0.pWBHcolaeZXd-5DAkMobbJn5DbFoSTDEWYuQn0LC5U4",
  HeartOfAsia: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcyNTg1NDEyLCJleHAiOjE3NzM4ODE0MTIsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mzg4MTQxMn0.pWBHcolaeZXd-5DAkMobbJn5DbFoSTDEWYuQn0LC5U4" 
};
function withToken(baseUrl, tokenKey) {
  const token = IPTV_TOKENS[tokenKey];
  if (!token) return baseUrl;
  return `${baseUrl}?token=${token}`;
}
function withHlsToken(baseUrl, tokenKey) {
  const token = IPTV_TOKENS[tokenKey];
  if (!token) return baseUrl;

  const joiner = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${joiner}token=${token}`;
}


  /* =========================================================
   GSAT DEVICE FILTER PATCH
   (Desktop + Android 11–12 HIDE)
========================================================= */
function isMobile() {
  return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
}

function isAndroidTV() {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes("android") && !ua.includes("mobile");
}

function isDesktop() {
  return !isMobile() && !isAndroidTV();
}


  

  // ===== STORAGE KEYS =====
  const FAV_KEY    = "iptv_favorites_v1";
  const THEME_KEY  = "iptv_theme_v1";
  const VOL_KEY    = "iptv_volume_v1";
  const LAST_KEY   = "iptv_last_channel_v1";
  const RECENT_KEY = "iptv_recent_v1";

  // ===== STATE =====
  let channels = window.CHANNELS_DATA || [];
  let activeCategory = "HLS";
  let currentChannelIndex = null;

  let currentMedia = null; // video or audio
  let hls = null;
  let shakaPlayer = null;

  // Fake visualizer (no Web Audio)
  let vuCanvas = null;
  let vuCtx = null;
  let vuAnimationId = null;

  let currentVolume = 0.8;
  /* ================= VIEW COUNTERS ================= */

/* LOCAL VIEW COUNTER */

function addView(channelId){

let views =
JSON.parse(
localStorage.getItem("channelViews")||"{}"
);

if(!views[channelId])
views[channelId]=0;

views[channelId]++;

localStorage.setItem(
"channelViews",
JSON.stringify(views)
);

}


/* GLOBAL VIEW COUNTER */

async function addGlobalView(ch){

if(!window.supabase) return;

const sb =
window.supabase.createClient(
"https://uhujowmgmcnjbkgacfke.supabase.co",
"sb_publishable_fZBycaepGYVBzl3k3wszMQ_iY4klXV2"
);

try{

const { data } =
await sb
.from("channel_views")
.select("*")
.eq("id",ch.id)
.single();


if(data){

await sb
.from("channel_views")
.update({

views:data.views+1

})
.eq("id",ch.id);

}
else{

await sb
.from("channel_views")
.insert({

id:ch.id,
name:ch.name,
logo:ch.logo,
views:1

});

}

}catch(e){

console.log("Supabase error");

}

}

  // =====================================================================
  //  ONLINE VIEWERS (FISHEYE)
  // =====================================================================
  const SUPABASE_URL = "https://uhujowmgmcnjbkgacfke.supabase.co";
  const SUPABASE_ANON_KEY =
    "sb_publishable_fZBycaepGYVBzl3k3wszMQ_iY4klXV2";
  const PRESENCE_ROOM = "iptv-online-v1";

  const viewerState = {
    mode: "none",
    userId: null,
    channel: null,
    bc: null,
    alive: true,
    heartbeatId: null,
    cleanupId: null,
    peers: new Map(), // id -> lastSeen (fallback mode)
  };

  function setViewerCount(n) {
    const el = document.getElementById("viewerCount");
    if (!el) return;
    const safe = Math.max(1, parseInt(n || 1, 10));
    el.textContent = String(safe);

    const bubble = el.closest(".viewer-fisheye");
    if (bubble) bubble.classList.toggle("viewer-fisheye--active", safe > 0);
  }

  function makeId() {
    try {
      return (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}_${Math.random()}`).replace(/\W/g, "");
    } catch {
      return `${Date.now()}_${Math.random()}`.replace(/\W/g, "");
    }
  }

  function initViewers() {
    viewerState.userId = makeId();
    setViewerCount(1);

    const canUseSupabase =
      typeof window !== "undefined" &&
      window.supabase &&
      SUPABASE_URL &&
      SUPABASE_ANON_KEY;

    if (canUseSupabase) {
      viewerState.mode = "supabase";
      initSupabasePresence();
    } else {
      viewerState.mode = "broadcast";
      initBroadcastPresence();
    }

    window.addEventListener("beforeunload", () => {
      viewerState.alive = false;
      try { cleanupViewers(); } catch {}
    });
  }

  function cleanupViewers() {
    if (viewerState.heartbeatId) {
      clearInterval(viewerState.heartbeatId);
      viewerState.heartbeatId = null;
    }
    if (viewerState.cleanupId) {
      clearInterval(viewerState.cleanupId);
      viewerState.cleanupId = null;
    }

    if (viewerState.mode === "supabase") {
      try { if (viewerState.channel) viewerState.channel.unsubscribe(); } catch {}
      viewerState.channel = null;
    }

    if (viewerState.mode === "broadcast") {
      try { if (viewerState.bc) viewerState.bc.close(); } catch {}
      viewerState.bc = null;
      viewerState.peers.clear();
    }
  }

  function initSupabasePresence() {
    try {
      const { createClient } = window.supabase;
      const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        realtime: { params: { eventsPerSecond: 5 } },
      });

      const channel = sb.channel(PRESENCE_ROOM, {
        config: { presence: { key: viewerState.userId } },
      });

      const syncCount = () => {
        const state = channel.presenceState();
        const count = Object.keys(state || {}).length || 1;
        setViewerCount(count);
      };

      channel.on("presence", { event: "sync" }, syncCount);
      channel.on("presence", { event: "join" }, syncCount);
      channel.on("presence", { event: "leave" }, syncCount);

      channel.subscribe((status) => {
        if (status === "SUBSCRIBED") {
          channel.track({ online_at: new Date().toISOString() });
        }
      });

      viewerState.channel = channel;
    } catch (e) {
      console.warn("Supabase presence failed, falling back to BroadcastChannel:", e);
      viewerState.mode = "broadcast";
      initBroadcastPresence();
    }
  }

  function initBroadcastPresence() {
    const bc = new BroadcastChannel(PRESENCE_ROOM);
    viewerState.bc = bc;

    const me = viewerState.userId;
    const now = () => Date.now();
    const ttlMs = 7000;

    function publish(type) {
      try { bc.postMessage({ type, from: me, t: now() }); } catch {}
    }

    function recompute() {
      viewerState.peers.set(me, now());

      const cutoff = now() - ttlMs;
      for (const [id, ts] of viewerState.peers.entries()) {
        if (ts < cutoff) viewerState.peers.delete(id);
      }
      setViewerCount(viewerState.peers.size || 1);
    }

    bc.onmessage = (ev) => {
      const msg = ev.data || {};
      if (!msg.from) return;
      if (msg.type === "hello" || msg.type === "ping") {
        viewerState.peers.set(msg.from, msg.t || now());
        if (msg.type === "hello") publish("pong");
        recompute();
      } else if (msg.type === "pong") {
        viewerState.peers.set(msg.from, msg.t || now());
        recompute();
      } else if (msg.type === "bye") {
        viewerState.peers.delete(msg.from);
        recompute();
      }
    };

    publish("hello");
    viewerState.peers.set(me, now());
    recompute();

    viewerState.heartbeatId = setInterval(() => {
      if (!viewerState.alive) return;
      publish("ping");
      viewerState.peers.set(me, now());
      recompute();
    }, 2000);

    viewerState.cleanupId = setInterval(() => recompute(), 1500);

    window.addEventListener("beforeunload", () => publish("bye"));
  }

  // =====================================================================
  //  FIX HELPERS
  // =====================================================================
  function sanitizeId(id, fallback) {
    const raw = String(id || fallback || "").trim();
    let out = raw.replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    if (!out) out = `ch_${Date.now()}_${Math.random()}`.replace(/\W/g, "");
    return out;
  }

  function isHex(str) {
    return typeof str === "string" && /^[0-9a-fA-F]+$/.test(str);
  }

  function showNowPlayingSub(msg) {
    const npSub = document.getElementById("npSub");
    if (npSub) npSub.textContent = msg;
  }

  // =====================================================================
  //  NOW SHOWING OVERLAY (Title UL, Logo UR, PG LR)
  //  - works on mobile/desktop/smart TV
  // =====================================================================
  const NOWSHOWING_OVERLAY_ID = "nowShowingOverlay";
  const NOWSHOWING_PG_TEXT = "Parental Guidance";

  function removeNowShowingOverlay() {
    const old = document.getElementById(NOWSHOWING_OVERLAY_ID);
    if (old) old.remove();
  }

  function getOverlayScale() {
    const w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // TV/large screens: bigger UI
    if (w >= 1600) return 1.35;
    if (w >= 1280) return 1.25;
    if (w >= 900) return 1.10;
    return 1.0; // mobile default
  }

  function ensureNowShowingOverlay(container, ch) {
    if (!container) return;

    // Only for NowShowing category
    if (!ch || ch.category !== "NowShowing") {
      removeNowShowingOverlay();
      return;
    }

    // Ensure container can host absolute overlay
    const cs = window.getComputedStyle(container);
    if (cs.position === "static") container.style.position = "relative";

    const scale = getOverlayScale();

    let overlay = document.getElementById(NOWSHOWING_OVERLAY_ID);
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = NOWSHOWING_OVERLAY_ID;

      // Full layer
      overlay.style.position = "absolute";
      overlay.style.inset = "0";
      overlay.style.zIndex = "9999";
      overlay.style.pointerEvents = "none";
      overlay.style.userSelect = "none";

      // Title (Upper Left)
      const title = document.createElement("div");
      title.className = "ns-title";
      title.style.position = "absolute";
      title.style.top = `${10 * scale}px`;
      title.style.left = `${10 * scale}px`;
      title.style.maxWidth = `calc(100% - ${140 * scale}px)`;
      title.style.padding = `${8 * scale}px ${10 * scale}px`;
      title.style.borderRadius = `${12 * scale}px`;
      title.style.background = "rgba(0,0,0,0.55)";
      title.style.backdropFilter = "blur(6px)";
      title.style.webkitBackdropFilter = "blur(6px)";
      title.style.color = "#fff";
      title.style.fontWeight = "900";
      title.style.fontSize = `${14 * scale}px`;
      title.style.whiteSpace = "nowrap";
      title.style.overflow = "hidden";
      title.style.textOverflow = "ellipsis";
      title.style.lineHeight = "1.1";

      // Logo (Upper Right)
      const logoWrap = document.createElement("div");
      logoWrap.className = "ns-logo-wrap";
      logoWrap.style.position = "absolute";
      logoWrap.style.top = `${10 * scale}px`;
      logoWrap.style.right = `${10 * scale}px`;
      logoWrap.style.width = `${52 * scale}px`;
      logoWrap.style.height = `${52 * scale}px`;
      logoWrap.style.borderRadius = `${14 * scale}px`;
      logoWrap.style.background = "rgba(0,0,0,0.55)";
      logoWrap.style.backdropFilter = "blur(6px)";
      logoWrap.style.webkitBackdropFilter = "blur(6px)";
      logoWrap.style.display = "flex";
      logoWrap.style.alignItems = "center";
      logoWrap.style.justifyContent = "center";
      logoWrap.style.overflow = "hidden";

      const logo = document.createElement("img");
      logo.className = "ns-logo";
      logo.alt = "Logo";
      logo.style.width = "100%";
      logo.style.height = "100%";
      logo.style.objectFit = "contain";
      logo.style.padding = `${8 * scale}px`;
      logoWrap.appendChild(logo);

      // PG (Lower Right)
      const pg = document.createElement("div");
      pg.className = "ns-pg";
      pg.style.position = "absolute";
      pg.style.right = `${10 * scale}px`;
      pg.style.bottom = `${10 * scale}px`;
      pg.style.padding = `${8 * scale}px ${10 * scale}px`;
      pg.style.borderRadius = "999px";
      pg.style.background = "rgba(0,0,0,0.55)";
      pg.style.backdropFilter = "blur(6px)";
      pg.style.webkitBackdropFilter = "blur(6px)";
      pg.style.color = "#fff";
      pg.style.fontWeight = "900";
      pg.style.fontSize = `${13 * scale}px`;
      pg.style.letterSpacing = "0.2px";
      pg.style.display = "inline-flex";
      pg.style.alignItems = "center";
      pg.style.gap = `${8 * scale}px`;

      const pgBadge = document.createElement("span");
      pgBadge.textContent = "PG";
      pgBadge.style.display = "inline-block";
      pgBadge.style.padding = `${4 * scale}px ${8 * scale}px`;
      pgBadge.style.borderRadius = "999px";
      pgBadge.style.background = "rgba(255,255,255,0.18)";
      pgBadge.style.fontWeight = "950";
      pgBadge.style.fontSize = `${12 * scale}px`;

      const pgText = document.createElement("span");
      pgText.className = "ns-pg-text";
      pgText.textContent = NOWSHOWING_PG_TEXT;

      pg.appendChild(pgBadge);
      pg.appendChild(pgText);

      overlay.appendChild(title);
      overlay.appendChild(logoWrap);
      overlay.appendChild(pg);

      container.appendChild(overlay);
    }

    // Update content
    const titleEl = overlay.querySelector(".ns-title");
    const logoEl = overlay.querySelector(".ns-logo");
    const pgTextEl = overlay.querySelector(".ns-pg-text");

    if (titleEl) titleEl.textContent = ch.name || "Now Showing";
    if (logoEl) logoEl.src = ch.logo || "";
    if (pgTextEl) pgTextEl.textContent = NOWSHOWING_PG_TEXT;
  }

  // =====================================================================
  //  CHANNELS ARRAY
  // =====================================================================
  // ✅✅✅ PALATANDAAN: DITO MO ILALAGAY ANG CHANNEL LIST MO ✅✅✅
  // IMPORTANT:
  // - Para gumana overlay, set: category: "NowShowing"
  // - Radio channels: category: "Radio"
  //
  // Example:
  // {
  //   id: "now-showing-movie1",
  //   number: 1,
  //   name: "Movie Title",
  //   group: "Now Showing",
  //   category: "NowShowing",
  //   logo: "https://....png",
  //   url: "https://....mp4",
  //   drm: false,
  //   drmType: null,
  //   favorite: false
  // }
  
  // ✅✅✅ END PALATANDAAN ✅✅✅
 // ===== DEVICE FILTER =====
if (isDesktop()) {
  channels = channels.filter(ch => {
    // Hide NowShowing on desktop
    if (ch.category === "NowShowing") return false;

   

    return true;
  });
}


  // ===== NORMALIZE CHANNELS =====
  (function normalizeChannels() {
    const used = new Set();
    channels.forEach((ch, i) => {
      if (!ch) channels[i] = ch = {};
      const fallback = `${ch.category || "ch"}_${ch.number || i}_${ch.name || i}`;
      ch.id = sanitizeId(ch.id, fallback);

      let base = ch.id;
      let k = 2;
      while (used.has(ch.id)) {
        ch.id = `${base}_${k++}`;
      }
      used.add(ch.id);

      if (typeof ch.favorite !== "boolean") ch.favorite = false;

      if (typeof ch.url === "string") ch.url = ch.url.trim();
      if (typeof ch.name === "string") ch.name = ch.name.trim();
      if (typeof ch.category === "string") ch.category = ch.category.trim();
    });
  })();

  // ===== LOCAL STORAGE HELPERS =====
  function loadFavorites() {
    try {
      const raw = localStorage.getItem(FAV_KEY);
      if (!raw) return;

      const data = JSON.parse(raw);
      const ids = Array.isArray(data) ? data : [];

      channels.forEach((ch) => {
        ch.favorite = ids.includes(ch.id);
      });
    } catch (e) {
      console.warn("loadFavorites error, clearing bad data:", e);
      try { localStorage.removeItem(FAV_KEY); } catch {}
    }
  }

  function saveFavorites() {
    try {
      const favIds = channels.filter((c) => c.favorite).map((c) => c.id);
      localStorage.setItem(FAV_KEY, JSON.stringify(favIds));
    } catch (e) {
      console.warn("saveFavorites error", e);
    }
  }

  function loadTheme() {
    try {
      const val = localStorage.getItem(THEME_KEY) || "default";
      applyTheme(val);
      const sel = document.getElementById("themeSelect");
      if (sel) sel.value = val;
    } catch (e) {
      console.warn("loadTheme error", e);
    }
  }

  function saveTheme(val) {
    try { localStorage.setItem(THEME_KEY, val); } catch (e) { console.warn("saveTheme error", e); }
  }

  function loadVolume() {
    try {
      const raw = localStorage.getItem(VOL_KEY);
      if (!raw) return;
      const v = parseFloat(raw);
      if (!isNaN(v) && v >= 0 && v <= 1) currentVolume = v;
    } catch (e) {
      console.warn("loadVolume error", e);
    }
  }

  function saveVolume() {
    try { localStorage.setItem(VOL_KEY, String(currentVolume)); } catch (e) { console.warn("saveVolume error", e); }
  }

  function loadLastChannelId() {
    try { return localStorage.getItem(LAST_KEY); } catch { return null; }
  }

  function saveLastChannelId(id) {
    try { localStorage.setItem(LAST_KEY, id); } catch {}
  }

  function loadRecentList() {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (!raw) return [];
      const ids = JSON.parse(raw);
      return Array.isArray(ids) ? ids : [];
    } catch {
      return [];
    }
  }

  function saveRecentList(ids) {
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(ids)); } catch {}
  }

  function pushRecent(id) {
    if (!id) return;
    let ids = loadRecentList();
    ids = ids.filter((x) => x !== id);
    ids.unshift(id);
    if (ids.length > 5) ids = ids.slice(0, 5);
    saveRecentList(ids);
  }

  // ===== THEME =====
  function applyTheme(theme) {
    const body = document.body;
    body.classList.remove("theme-amoled","theme-neon","theme-purple","theme-red","theme-minimal");
    if (theme && theme !== "default") body.classList.add("theme-" + theme);
  }

  // ===== CLOCK =====
  function updateClock() {
    const el = document.getElementById("clock");
    if (!el) return;
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    el.textContent = `${hh}:${mm}:${ss}`;
  }

  // ===== FAKE VU METER =====
  function stopVisualizer() {
    if (vuAnimationId) {
      cancelAnimationFrame(vuAnimationId);
      vuAnimationId = null;
    }
  }

  function startFakeVisualizer(mediaEl) {
    stopVisualizer();

    vuCanvas = vuCanvas || document.getElementById("vuCanvas");
    if (!vuCanvas) return;
    vuCtx = vuCtx || vuCanvas.getContext("2d");

    const width = vuCanvas.width;
    const height = vuCanvas.height;
    const barCount = 16;
    const gap = 2;
    const barWidth = (width - (barCount - 1) * gap) / barCount;

    let t = 0;

    function draw() {
      vuAnimationId = requestAnimationFrame(draw);
      t += 0.07;

      vuCtx.clearRect(0, 0, width, height);

      const baseLevel = mediaEl && !mediaEl.paused ? 1 : 0.2;

      for (let i = 0; i < barCount; i++) {
        const noise = (Math.sin(t + i * 0.7) + Math.sin(t * 1.3 + i)) * 0.25 + 0.5;
        const level = baseLevel * noise;
        const barHeight = height * level;
        const x = i * (barWidth + gap);
        const y = height - barHeight;

        vuCtx.fillStyle = "#22c55e";
        vuCtx.fillRect(x, y, barWidth, barHeight);
      }
    }

    draw();
  }

 // ===== RADIO BACKGROUND (blurred logo inside playerContainer) =====
function applyRadioBackground(ch) {
  const container = document.getElementById("playerContainer");
  if (!container) return;

  if (ch && ch.category === "Radio" && ch.logo) {
    container.classList.add("radio-mode");
    container.style.setProperty("--radio-bg-image", `url('${ch.logo}')`);
  } else {
    container.classList.remove("radio-mode");
    container.style.removeProperty("--radio-bg-image");
  }
}


  // ===== PLAYER DESTROY/CREATE =====
  async function destroyPlayer() {
    stopVisualizer();

    if (hls) {
      try { hls.destroy(); } catch {}
      hls = null;
    }

    if (shakaPlayer) {
      try { await shakaPlayer.destroy(); } catch {}
      shakaPlayer = null;
    }

    if (currentMedia) {
      try { currentMedia.pause(); } catch {}
      try { currentMedia.src = ""; } catch {}
      try { currentMedia.remove(); } catch {}
    }
    currentMedia = null;

    const container = document.getElementById("playerContainer");
    if (container) {
      container.innerHTML = "";
      removeNowShowingOverlay();
      applyRadioBackground(null); // clear blur when no player
    }
  }

  function createVideoElement() {
    const video = document.createElement("video");
    video.className = "player-video";
    video.controls = true;
    video.playsInline = true;
    video.autoplay = true;
    video.volume = currentVolume;
    video.addEventListener("dblclick", toggleFullscreen);
    return video;
  }

  function createAudioElement() {
    const audio = document.createElement("audio");
    audio.className = "player-audio";
    audio.controls = true;
    audio.autoplay = true;
    audio.volume = currentVolume;
    return audio;
  }

  function applyVolumeToMedia() {
    if (currentMedia) currentMedia.volume = currentVolume;
    const slider = document.getElementById("volumeSlider");
    if (slider) slider.value = Math.round(currentVolume * 100);
  }

  // ===== PLAY CHANNEL =====
 async function playChannel(ch) {

if (arguments[0] && arguments[0].adult === true) {
 if (!requestAdultUnlock()) return;
}

if (!ch || !ch.url) return;


/* VIEW COUNTERS */

addGlobalView(ch);

addView(ch.id);


await destroyPlayer(); 

    const container = document.getElementById("playerContainer");
    if (!container) return;

    // set blurred logo bg inside player for Radio channels
    applyRadioBackground(ch);

    let url = ch.url.trim().replace(/\s+/g, "");

    if (ch.secure && typeof applySecureUrl === "function") {
      url = await applySecureUrl(ch);
    }
    const lower = url.toLowerCase();
    let mediaEl;

    // Overlay: show only for NowShowing; auto-remove otherwise
    ensureNowShowingOverlay(container, ch);

    // RADIO
    if (ch.category === "Radio") {
      mediaEl = createAudioElement();
      container.appendChild(mediaEl);
      currentMedia = mediaEl;

      // keep overlay on top if NowShowing (safe call)
      ensureNowShowingOverlay(container, ch);

      mediaEl.src = url;

      mediaEl.addEventListener("canplay", () => {
        mediaEl.play().then(() => startFakeVisualizer(mediaEl)).catch((err) => {
          console.error("Radio play error:", err);
          showNowPlayingSub("Radio autoplay blocked. Pindutin ulit ang Play button.");
        });
      });

      mediaEl.addEventListener("error", () => {
        showNowPlayingSub("Radio stream error (URL / server / CORS).");
      });

      return;
    }

    // VIDEO
    mediaEl = createVideoElement();
    container.appendChild(mediaEl);
    currentMedia = mediaEl;
    applyVolumeToMedia();

    // ensure overlay persists visually
    ensureNowShowingOverlay(container, ch);
    mediaEl.addEventListener("play", () => ensureNowShowingOverlay(container, ch));
    mediaEl.addEventListener("loadedmetadata", () => ensureNowShowingOverlay(container, ch));
    mediaEl.addEventListener("ended", () => ensureNowShowingOverlay(container, ch));

    // HLS
    if (lower.includes(".m3u8")) {
      if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls();
        hls.loadSource(url);
        hls.attachMedia(mediaEl);
        if (typeof startSecureRefresh === "function") startSecureRefresh(mediaEl, ch, hls);
        hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
          mediaEl.play().then(() => startFakeVisualizer(mediaEl)).catch(() => {});
        });
        hls.on(window.Hls.Events.ERROR, (_, data) => {
          console.error("HLS error:", data);
          showNowPlayingSub("HLS stream error (check URL/server).");
        });
      } else if (mediaEl.canPlayType("application/vnd.apple.mpegurl")) {
        mediaEl.src = url;
        mediaEl.addEventListener("loadedmetadata", () => {
          mediaEl.play().then(() => startFakeVisualizer(mediaEl)).catch(() => {});
        });
      } else {
        alert("HLS not supported in this browser.");
      }
      return;
    }

   // DASH (Shaka) – FORMAT AWARE (Converge vs GSAT)
// === DASH (GSAT / CONVERGE / CIGNAL SAFE) ===
if (lower.includes(".mpd")) {
  if (!window.shaka || !shaka.Player.isBrowserSupported()) {
    alert("DASH / Widevine not supported on this device.");
    return;
  }

  shaka.polyfill.installAll();
  shakaPlayer = new shaka.Player();
  await shakaPlayer.attach(mediaEl);

  // Network filters (REQUIRED for Android)
  const net = shakaPlayer.getNetworkingEngine();
  net.clearAllRequestFilters();
  net.clearAllResponseFilters();
  net.registerRequestFilter((type, request) => {
    if (type === shaka.net.NetworkingEngine.RequestType.LICENSE) {
      request.headers["Content-Type"] = "application/octet-stream";
    }
  });

  // === CLEARKEY ===
  if (ch.drm && ch.drmType === "clearkey") {
    shakaPlayer.configure({
      drm: { clearKeys: { [ch.keyId]: ch.key } }
    });
  }

 // === WIDEVINE (GSAT – ANDROID + DESKTOP SAFE) ===
if (ch.drm && ch.drmType === "widevine") {
  const isAndroid = /Android/i.test(navigator.userAgent);

  const drmConfig = {
    servers: { "com.widevine.alpha": ch.licenseUrl }
  };

  // Android ONLY
  if (isAndroid) {
    drmConfig.advanced = {
      "com.widevine.alpha": {
        videoRobustness: "SW_SECURE_DECODE",
        audioRobustness: "SW_SECURE_CRYPTO"
      }
    };
  }

  shakaPlayer.configure({ drm: drmConfig });
}

  shakaPlayer.addEventListener("error", (e) => {
  const err = e.detail;

  // ❌ SILENT GSAT DRM ERROR (Desktop expected)
  if (err.code === 4012) {
    console.warn("GSAT DRM 4012 ignored (desktop limitation)");
    setStatus("Unavailable on this device"); // optional
    return;
  }

  // ✅ ibang errors, normal pa rin
  setStatus("Error", "err");
  log(`Shaka error code=${err.code} category=${err.category}`, "err");
  if (err.message) log("Message: " + err.message, "err");
  if (err.data) log("Data: " + JSON.stringify(err.data), "err");
  });

  await shakaPlayer.load(url);
  mediaEl.play().catch(()=>{});
  return;
}

    // Fallback
    mediaEl.src = url;
    mediaEl.addEventListener("canplay", () => {
      mediaEl.play().then(() => startFakeVisualizer(mediaEl)).catch(() => {});
    });
  }

  // ===== CHANNEL LIST HELPERS =====
  function getVisibleChannels() {
    const searchInput = document.getElementById("searchInput");
    const hideDrmCb = document.getElementById("hideDrmToggle");
    const term = (searchInput?.value || "").toLowerCase();
    const hideDrm = hideDrmCb?.checked;

  return channels.filter((ch) => {

  // ===== HIDE GSAT ON DESKTOP ONLY =====
  if (ch.group === "GSAT" && isDesktop()) {
    return false;
  }

  // ===== ORIGINAL LOGIC =====
  if (activeCategory === "Favorites") {
    if (!ch.favorite) return false;
  } else if (ch.category !== activeCategory) {
    return false;
  }

  if (hideDrm && ch.drm) return false;

  if (term) {
    const txt = `${ch.name} ${ch.number || ""}`.toLowerCase();
    if (!txt.includes(term)) return false;
  }

  return true;
});


  }

  function getRecentForCategory() {
    const ids = loadRecentList();
    const searchInput = document.getElementById("searchInput");
    const hideDrmCb = document.getElementById("hideDrmToggle");
    const term = (searchInput?.value || "").toLowerCase();
    const hideDrm = hideDrmCb?.checked;

    return ids
      .map((id) => channels.find((c) => c.id === id))
      .filter(Boolean)
      .filter((ch) => {
        if (activeCategory === "Favorites") return false;
        if (ch.category !== activeCategory) return false;
        if (hideDrm && ch.drm) return false;
        if (term) {
          const txt = `${ch.name} ${ch.number || ""}`.toLowerCase();
          if (!txt.includes(term)) return false;
        }
        return true;
      });
  }

  function createChannelItem(ch, index, isRecent) {
    const item = document.createElement("div");
    item.className = "channel-item";
    item.dataset.index = index;

    if (index === currentChannelIndex) item.classList.add("active");

    const logo = document.createElement("img");
    logo.className = "channel-logo";
    logo.src = ch.logo || "";
    logo.alt = ch.name || "";

    const info = document.createElement("div");
    info.className = "channel-info";

    const topRow = document.createElement("div");

    const badge = document.createElement("span");
    badge.className = "channel-number-badge";

    const cat = (ch.category || "").toLowerCase();
    if (cat === "hls") badge.classList.add("cat-hls");
    else if (cat === "converge") badge.classList.add("cat-converge");
    else if (cat === "cignal") badge.classList.add("cat-cignal");
    else if (cat === "radio") badge.classList.add("cat-radio");

    badge.textContent =
      ch.number != null && ch.number !== "" ? `Ch ${ch.number}` : (ch.category || "Channel");

    const nameSpan = document.createElement("span");
    nameSpan.className = "channel-name";
    nameSpan.textContent = ch.name || "Unnamed";

    topRow.appendChild(badge);
    topRow.appendChild(nameSpan);

    const groupText = document.createElement("div");
    groupText.className = "channel-group-text";
    groupText.textContent = `${ch.group || ""}${isRecent ? " • Recently watched" : ""}`;

    info.appendChild(topRow);
    info.appendChild(groupText);

    const favBtn = document.createElement("button");
    favBtn.className = "fav-btn";
    favBtn.innerHTML = ch.favorite ? "❤" : "♡";
    if (ch.favorite) favBtn.classList.add("active");

    favBtn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      ch.favorite = !ch.favorite;
      saveFavorites();
      favBtn.innerHTML = ch.favorite ? "❤" : "♡";
      favBtn.classList.toggle("active", ch.favorite);
      if (activeCategory === "Favorites") renderChannelList();
    });

    item.appendChild(logo);
    item.appendChild(info);
    item.appendChild(favBtn);

    item.addEventListener("click", () => selectChannel(index));
    return item;
  }

  function renderChannelList() {
    const list = document.getElementById("channelList");
    if (!list) return;

    const frag = document.createDocumentFragment();

    const recent = getRecentForCategory();
    const shownRecentIds = new Set();

    if (recent.length && activeCategory !== "NowShowing") {
      const header = document.createElement("div");
      header.className = "group-header recent";
      header.textContent = "Recently Watched";
      frag.appendChild(header);

      recent.forEach((ch) => {
        const idx = channels.indexOf(ch);
        if (idx === -1) return;
        shownRecentIds.add(ch.id);
        frag.appendChild(createChannelItem(ch, idx, true));
      });
    }

    const visible = getVisibleChannels().filter((ch) => !shownRecentIds.has(ch.id));

    if (!visible.length && !recent.length) {
      const empty = document.createElement("div");
      empty.className = "no-channels";
      empty.textContent =
        activeCategory === "Favorites"
          ? "Wala ka pang favorites. I-tap ang puso sa isang channel."
          : "Walang channel sa category na ito.";
      frag.appendChild(empty);
    } else if (visible.length) {
      const header = document.createElement("div");
      header.className = "group-header";
      header.textContent =
        activeCategory === "Favorites"
          ? "Favorites"
          : (activeCategory === "NowShowing" ? "Now Showing" : activeCategory);
      frag.appendChild(header);

      visible.forEach((ch) => {
        const idx = channels.indexOf(ch);
        if (idx === -1) return;
        frag.appendChild(createChannelItem(ch, idx, false));
      });
    }

    list.innerHTML = "";
    list.appendChild(frag);
  }

  function selectChannel(index) {
    if (index < 0 || index >= channels.length) return;

    const prevIndex = currentChannelIndex;
    currentChannelIndex = index;
    const ch = channels[index];

    const npTitle = document.getElementById("npTitle");
    const npSub = document.getElementById("npSub");

    if (npTitle) npTitle.textContent = (ch.number != null ? `Ch ${ch.number} • ` : "") + (ch.name || "");
    if (npSub) npSub.textContent = `${ch.category || ""} • ${ch.group || ""}`.trim();

    saveLastChannelId(ch.id);
    pushRecent(ch.id);
    playChannel(ch);

    const list = document.getElementById("channelList");
    if (list) {
      if (prevIndex != null) {
        const prevEl = list.querySelector(`.channel-item[data-index="${prevIndex}"]`);
        if (prevEl) prevEl.classList.remove("active");
      }
      const newEl = list.querySelector(`.channel-item[data-index="${index}"]`);
      if (newEl) newEl.classList.add("active");
    }
  }

  function channelStep(dir) {
    const visible = getVisibleChannels();
    if (!visible.length) return;

    const currentId = currentChannelIndex != null ? channels[currentChannelIndex]?.id : null;
    let pos = visible.findIndex((c) => c.id === currentId);

    if (pos === -1) pos = 0;
    else pos = (pos + dir + visible.length) % visible.length;

    const next = visible[pos];
    const idx = channels.indexOf(next);
    if (idx !== -1) selectChannel(idx);
  }

  // ===== FULLSCREEN =====
  function toggleFullscreen() {
    const elem = document.getElementById("playerContainer");
    if (!elem) return;

    const isFs = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

    if (!isFs) {
      if (elem.requestFullscreen) elem.requestFullscreen();
      else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
      else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
    }
  }

  function onFullscreenChange() {
    const isFs = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    document.body.classList.toggle("fs-active", !!isFs);
    const mini = document.getElementById("miniUi");
    if (!mini) return;
    if (isFs) mini.classList.add("visible");
    else mini.classList.remove("visible");
  }

  // ===== INIT =====
  function initApp() {
    loadFavorites();
    loadVolume();
    loadTheme();
    applyVolumeToMedia();

    initViewers();

    const playBtn = document.getElementById("playBtn");
    const stopBtn = document.getElementById("stopBtn");
    const chUpBtn = document.getElementById("chUpBtn");
    const chDownBtn = document.getElementById("chDownBtn");
    const fsBtn = document.getElementById("fullscreenBtn");
    const volumeSlider = document.getElementById("volumeSlider");
    const themeSelect = document.getElementById("themeSelect");
    const searchInput = document.getElementById("searchInput");
    const hideDrmToggle = document.getElementById("hideDrmToggle");
    const miniUi = document.getElementById("miniUi");

    if (playBtn) {
      playBtn.addEventListener("click", () => {
        if (currentChannelIndex == null) {
          const visible = getVisibleChannels();
          if (visible.length) {
            const idx = channels.indexOf(visible[0]);
            if (idx !== -1) selectChannel(idx);
          }
        } else {
          playChannel(channels[currentChannelIndex]);
        }
      });
    }

    if (stopBtn) stopBtn.addEventListener("click", () => destroyPlayer());
    if (chUpBtn) chUpBtn.addEventListener("click", () => channelStep(+1));
    if (chDownBtn) chDownBtn.addEventListener("click", () => channelStep(-1));
    if (fsBtn) fsBtn.addEventListener("click", toggleFullscreen);

    if (volumeSlider) {
      volumeSlider.value = Math.round(currentVolume * 100);
      volumeSlider.addEventListener("input", (e) => {
        const v = parseInt(e.target.value, 10);
        if (isNaN(v)) return;
        currentVolume = Math.min(1, Math.max(0, v / 100));
        applyVolumeToMedia();
        saveVolume();
      });
    }

    if (themeSelect) {
      themeSelect.addEventListener("change", () => {
        const val = themeSelect.value || "default";
        applyTheme(val);
        saveTheme(val);
      });
    }

    if (searchInput) searchInput.addEventListener("input", renderChannelList);
    if (hideDrmToggle) hideDrmToggle.addEventListener("change", renderChannelList);

    const categoryButtons = document.querySelectorAll(".category-tab");
    categoryButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        categoryButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        activeCategory = btn.dataset.category || "HLS";
        currentChannelIndex = null;

        const npTitle = document.getElementById("npTitle");
        const npSub = document.getElementById("npSub");
        if (npTitle) npTitle.textContent = "No channel selected";
        if (npSub) npSub.textContent = `Category: ${activeCategory} – choose a channel`;

        // if switching category, remove overlay if not playing NowShowing
        removeNowShowingOverlay();

        renderChannelList();
      });
    });

    if (miniUi) {
      miniUi.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        const action = btn.dataset.action;
        if (action === "prev") channelStep(-1);
        else if (action === "next") channelStep(1);
        else if (action === "play") {
          if (!currentMedia) return;
          if (currentMedia.paused) currentMedia.play();
          else currentMedia.pause();
        } else if (action === "fs") toggleFullscreen();
      });
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    document.addEventListener("msfullscreenchange", onFullscreenChange);

    document.addEventListener("keydown", (e) => {
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    });

    // Keep overlay scaled nicely on resize/orientation (mobile/TV)
    window.addEventListener("resize", () => {
      const container = document.getElementById("playerContainer");
      if (!container) return;
      // refresh overlay if currently NowShowing
      if (currentChannelIndex != null) {
        const ch = channels[currentChannelIndex];
        ensureNowShowingOverlay(container, ch);
      }
    });

    renderChannelList();

    const lastId = loadLastChannelId();
    if (lastId) {
      const ch = channels.find((c) => c.id === lastId);
      if (ch) {
        const idx = channels.indexOf(ch);
        if (idx !== -1) selectChannel(idx);
      }
    }
  }

  window.addEventListener("load", () => {
    initApp();
    updateClock();
    setInterval(updateClock, 1000);
  });
  window.playChannel = playChannel;
})();

const videoElement = document.querySelector('video');
if (videoElement) {
    videoElement.muted = true; // Ensure autoplay works
    videoElement.play();
}


fetch('https://example.com/video.mp4')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch media');
    }
    return response.blob();
  })
  .then(mediaBlob => {
    // process the mediaBlob here
  })
  .catch(error => {
    console.error('CORS error or other issue:', error);
  });
// ===== AUTO-HIDE BOTTOM DRAWER =====
(function autoHideDrawer(){
  const drawer = document.querySelector(".sidebar");
  if (!drawer) return;

  let timer;

  function show() {
    drawer.classList.remove("hidden");
    clearTimeout(timer);
    timer = setTimeout(() => {
      drawer.classList.add("hidden");
    }, 8000);
  }

  ["mousemove","keydown","touchstart"].forEach(evt => {
    window.addEventListener(evt, show, { passive:true });
  });

  show(); // initial show
})();
// ===== AUTO-HIDE TOP BAR =====
(function autoHideTopBar(){
  const bar = document.querySelector(".top-bar");
  if (!bar) return;

  let timer;

  function show() {
    bar.classList.remove("hidden");
    clearTimeout(timer);
    timer = setTimeout(() => {
      bar.classList.add("hidden");
    }, 8000);
  }

  ["mousemove","keydown","touchstart"].forEach(evt => {
    window.addEventListener(evt, show, { passive:true });
  });

  show();
})();
// ===== SWIPE UP / DOWN DRAWER =====
(function drawerSwipe(){
  const drawer = document.querySelector(".sidebar");
  if (!drawer) return;

  let startY = 0;

  drawer.addEventListener("touchstart", e => {
    startY = e.touches[0].clientY;
  }, { passive:true });

  drawer.addEventListener("touchend", e => {
    const endY = e.changedTouches[0].clientY;
    const diff = startY - endY;

    if (diff > 60) {
      drawer.classList.remove("hidden"); // swipe up
    } else if (diff < -60) {
      drawer.classList.add("hidden"); // swipe down
    }
  });
})();
// ===== ANDROID TV DPAD SCROLL SUPPORT =====
(function enableDpadScroll() {
  const SCROLL_AMOUNT = 220;

  document.addEventListener("keydown", (e) => {
    const active = document.activeElement;
    if (!active) return;

    // CHANNEL ROW
    if (active.classList.contains("channel-item")) {
      const row = document.querySelector(".channel-list");
      if (!row) return;

      if (e.key === "ArrowRight") {
        row.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
        e.preventDefault();
      }

      if (e.key === "ArrowLeft") {
        row.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
        e.preventDefault();
      }
    }

    // CATEGORY BAR
    if (active.classList.contains("category-tab")) {
      const bar = document.querySelector(".category-tabs");
      if (!bar) return;

      if (e.key === "ArrowRight") {
        bar.scrollBy({ left: 120, behavior: "smooth" });
        e.preventDefault();
      }

      if (e.key === "ArrowLeft") {
        bar.scrollBy({ left: -120, behavior: "smooth" });
        e.preventDefault();
      }
    }
  });
})();
document.addEventListener("focusin", (e) => {
  const el = e.target;
  if (!el.classList.contains("channel-item")) return;

  el.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
  });
});
// ===== CHANNEL ARROW SCROLL (ANDROID TV SAFE) =====
(function channelArrowScroll() {
  const SCROLL_AMOUNT = 260;

  function scroll(dir) {
    const list = document.getElementById("channelList");
    if (!list) return;
    list.scrollBy({
      left: dir * SCROLL_AMOUNT,
      behavior: "smooth"
    });
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-arrow");
    if (!btn) return;

    if (btn.classList.contains("left")) scroll(-1);
    if (btn.classList.contains("right")) scroll(1);
  });
  // =========================================================
// 🎬 MAX MOVIES BADGE CLICK HANDLER
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const maxBadge = document.getElementById("maxMoviesBadge");
  if (!maxBadge) return;

  maxBadge.addEventListener("click", () => {
    // gamitin ang existing category-tab logic
    const tab = document.querySelector(
      '.category-tab[data-category="MaxMovies"]'
    );
    if (tab) tab.click();
  });
});

})();





/* ================= SECURE TOKEN ADD-ON PATCH ================= */
async function applySecureUrl(channel) {
  const res = await fetch(`/api/playback-token?channel=${encodeURIComponent(channel.id)}`);
  const data = await res.json();
  const token = data.token;
  const joiner = channel.url.includes("?") ? "&" : "?";
  return `${channel.url}${joiner}token=${token}`;
}

let __secureRefreshTimer = null;
function startSecureRefresh(videoElement, channel, hlsInstance) {
  if (__secureRefreshTimer) clearInterval(__secureRefreshTimer);
  __secureRefreshTimer = setInterval(async () => {
    if (!channel.secure) return;
    const newUrl = await applySecureUrl(channel);
    if (hlsInstance) hlsInstance.loadSource(newUrl);
    else if (videoElement) videoElement.src = newUrl;
  }, 20000);
}


/* ================= DESKTOP TOKEN STREAM BLOCKER ================= */
/*
  Any channel with:
     requiresToken: true
  will NOT render on Desktop browsers.
  Mobile and Android TV are allowed.
*/

function allowTokenStreams() {
  return isMobile() || isAndroidTV();
}

// Remove token-based channels entirely on Desktop
if (isDesktop()) {
  channels = channels.filter(channel => !channel.requiresToken);
}

