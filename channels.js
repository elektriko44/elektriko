// Token helpers (moved here so channels.js is self-contained)
function withToken(baseUrl, tokenKey) {
  const IPTV_TOKENS = {
    converge: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
  astro: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
  iheart: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
    SonyPixHD: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
    StarMovies: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
    StarMoviesSelect: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
  HeartOfAsia: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo"
  };

  const token = IPTV_TOKENS[tokenKey];
  if (!token) return baseUrl;
  return `${baseUrl}?token=${token}`;
}

function withHlsToken(baseUrl, tokenKey) {
  const IPTV_TOKENS = {
    converge: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
  astro: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
  iheart: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
    SonyPixHD: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
    StarMovies: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
    StarMoviesSelect: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo",
  HeartOfAsia: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJNb29uIiwiaWF0IjoxNzcxNDcyNTQ2LCJleHAiOjE3NzI3Njg1NDYsImFjY291bnRFeHBpcmVkIjpmYWxzZSwiYWNjb3VudEV4cGlyZXNBdCI6MTc3Mjc2ODU0Nn0.xUY-gdCGyqP4cICCDEYjyLiuB8enKAct6csI1-WjYLo"
  };

  const token = IPTV_TOKENS[tokenKey];
  if (!token) return baseUrl;

  const joiner = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${joiner}token=${token}`;
}

// channels.js
window.CHANNELS_DATA = [
  // ==== ILIPAT MO DITO LAHAT NG CHANNEL OBJECTS MO ====
  {
      id: "hls-3rstv",
      number: 3,
      name: "3RsTV",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/50RyQA7.jpeg",
      url: "https://live20.bozztv.com/giatvplayout7/giatv-210631/tracks-v1a1/mono.ts.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-3rssine",
      number: 1,
      name: "3rsSinePinoy",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/OCS1l7G.jpeg",
      url: "https://live20.bozztv.com/giatvplayout7/giatv-210267/tracks-v1a1/mono.ts.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-moviebox",
      number: 2,
      name: "3rsMovieBoxPh",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/b4rjf8n.png",
      url: "https://live20.bozztv.com/giatvplayout7/giatv-210731/tracks-v1a1/mono.ts.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-SDTVGLOBAL",
      number: 4,
      name: "SDTV Global",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.ibb.co/gLtFkJ23/3c3c1e76-3c0c-4e44-878a-9fc09ca53a89.jpg",
      url: "https://live20.bozztv.com/giatvplayout7/giatv-210938/tracks-v1a1/mono.ts.m3u8",
      drm: false,
      drmType: null,
      favorite: false
	     
    },
    {
	  id: "hls-SDTVPH",
      number: 5,
      name: "SDTV PH",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/BXokJD9.jpeg",
      url: "https://live20.bozztv.com/giatv/giatv-SDTVPH/SDTVPH/playlist.m3u8",
      drm: false,
      drmType: null,
      favorite: false 
	  
    },
    {	
	
      id: "hls-crave1",
      number: 6,
      name: "Crave 1",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/EFTariN.png",
      url: "https://fl7.moveonjoy.com/CRAVE_1/index.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-pbskids",
      number: 7,
      name: "pbs kids",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/8sKjU0A.png",
      url: "https://dce3793146fef017.mediapackage.us-west-2.amazonaws.com/out/v1/55cdf73af7894775ba6de8f57482b66a/CMAF_HLS/index.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-UniversalMovies",
      number: 8,
      name: "Universal Movies",
      group: "3rstv",
      category: "HLS",
      logo: "https://raw.githubusercontent.com/mystery75/logo/main/UniversalMovies.png",
      url: "https://raw.githubusercontent.com/mystery75/m3u8/main/UNIVERSALMOV.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-crave3",
      number: 9,
      name: "Crave 3",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/vc26AeL.png",
      url: "https://fl7.moveonjoy.com/CRAVE_3/index.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-moviesaction",
      number: 10,
      name: "Movies Action",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/Y9gGFen.jpeg",
      url: "https://shls-live-ak.akamaized.net/out/v1/46079e838e65490c8299f902a7731168/index_2.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-&flixhd",
      number: 11,
      name: "&Flix HD",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/HLJtTBw.jpeg",
      url: "https://edge3-moblive.yuppcdn.net/drm/smil:nflixdrm.smil/chunklist_b996000.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-moviessphere",
      number: 13,
      name: "Movies Sphere",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/PfhtYtr.jpeg",
      url: "https://moviesphereuk-samsunguk.amagi.tv/720p-vtt/index.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-sinemanila",
      number: 14,
      name: "SINEMANILA",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/bizGo39.png",
      url: "https://live20.bozztv.com/giatv/giatv-sinemanila/sinemanila/chunks.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-blastmovies",
      number: 15,
      name: "Blast Movies",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/heg9onl.png",
      url: "https://amg19223-amg19223c7-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c7-amgplt0351/playlist.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-animeX",
      number: 16,
      name: "AnimeX",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/qeA9Q5q.png",
      url: "https://live20.bozztv.com/giatv/giatv-animex/animex/chunks.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-RageMusicTV",
      number: 17,
      name: "Rage Music TV",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/a3iXI35.png",
      url: "https://live20.bozztv.com/giatv/giatv-ragemusictv/ragemusictv/playlist.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-RageTV",
      number: 18,
      name: "RageTV",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/DTF7Aa0.png",
      url: "https://live20.bozztv.com/giatv/giatv-ragetv/ragetv/playlist.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-BIHMTV",
      number: 19,
      name: "BIHM TV",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/F8YMePt.png",
      url: "https://live20.bozztv.com/giatv/giatv-bihmtv/bihmtv/playlist.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
    
      id: "hls-AnimeXHidive",
      number: 21,
      name: "Anime X Hidive",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/95v4BT3.jpeg",
      url: "https://amc-anime-x-hidive-1-us.tablo.wurl.tv/2000.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-Jungopinoytv",
      number: 22,
      name: "Jungopinoytv",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/RX3xYxB.jpeg",
      url: "https://jungotvstream.chanall.tv/jungotv/jungopinoytv/playlist_480p.m3u8",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "hls-Miramax",
      number: 23,
      name: "Miramax",
      group: "3rstv",
      category: "HLS",
      logo: "https://raw.githubusercontent.com/mystery75/logo/main/Miramax.png",
      url: "https://raw.githubusercontent.com/mystery75/m3u8/main/MIRAMAX.m3u8",
      drm: false,
      drmType: null,
      favorite: false
 },
    { 
	 id: "hls-StingrayKaraoke",
      number: 24,
      name: "Stingray Karaoke",
      group: "3rstv",
      category: "HLS",
      logo: "https://i.imgur.com/XIjXTSP.jpeg",
      url: "https://lotus.stingray.com/manifest/karaoke-kar000-montreal/samsungtvplus/master.m3u8",
      drm: false,
      drmType: null,
      favorite: false 
	 },
    { 
	  id: "hls-heartofasia",
  number: 25,
  name: "Heart Of Asia",
  group: "3rstv",
  category: "HLS",
  logo: "https://i.imgur.com/FmYiHYy.jpeg",
  url: withHlsToken(
    "https://hls.nathcreqtives.com/playlist.m3u8?id=1",
    "HeartOfAsia"
  ),
  requiresToken: true,
  drm: false,
  favorite: false
   },
    { 
	 id: "hls-iheartmovies",
  number: 26,
  name: "iHeart Movies",
  group: "3rstv",
  category: "HLS",
  logo: "https://i.imgur.com/uBmYDy0.jpeg",
  url: withHlsToken(
    "https://hls.nathcreqtives.com/playlist.m3u8?id=2",
    "iheart"
  ),
  requiresToken: true,
  drm: false,
  favorite: false
   },
    { 
  id: "hls-sonypixhd",
  number: 27,
  name: "Sony Pix HD",
  group: "3rstv",
  category: "HLS",
  logo: "https://i.imgur.com/4tPrf85.jpeg",
  url: withHlsToken(
    "https://converse.nathcreqtives.com/channels/sonypixhd/playlist.m3u8",
    "SonyPixHD"
  ),
  requiresToken: true,
  drm: false,
  favorite: false
 
     },
 {
  id: "hls-starmovies",
  number: 28,
  name: "Star Movies FHD",
  group: "3rstv",
  category: "HLS",
  logo: "https://i.imgur.com/n0w1QZ8.jpeg",
  url: withHlsToken(
    "https://converse.nathcreqtives.com/channels/starmovies/playlist.m3u8",
    "StarMovies"
  ),
  requiresToken: true,
  drm: false,
  favorite: false

     },
{
  id: "hls-smselect",
  number: 29,
  name: "Star Movies Select FHD",
  group: "3rstv",
  category: "HLS",
  logo: "https://i.imgur.com/jS2un18.png",
  url: withHlsToken(
    "https://converse.nathcreqtives.com/channels/smselect/playlist.m3u8",
    "StarMoviesSelect"
  ),
  requiresToken: true,
  drm: false,
  favorite: false

	 },
  // ================= CONVERGE – MPD (Widevine) =================
 {
 

  id: "converge-gma7",
  number: 1,
  name: "GMA 7",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723126306082.png",
     url: "https://gsattv.akamaized.net/live/media0/gma7/Widevine/gma7.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "31363231383438333031323033393138",
  key: "38694e34324d543478316b7455753437",
  favorite: false
  
},
{
  id: "converge-ptv",
  number: 1086,
  name: "PTV",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723133792284.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1086/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231383437343631323030313134",
  key: "614762653768324e676a6b3577434733",
  favorite: false
},
{
  id: "converge-rptv",
  number: 1094,
  name: "RPTV",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723133873954.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1094/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231383439313133323034313530",
  key: "78645370476a496d5756385231474332",
  favorite: false
},
{
  id: "converge-pbo",
  number: 1078,
  name: "PBO",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723612823404.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1078/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363230393830323336303039323834",
  key: "7676746b584436514331503256784654",
  favorite: false
},
{
  id: "converge-untv",
  number: 1091,
  name: "UNTV",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723134409636.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1091/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231393131383734323234313831",
  key: "7a333137597652656743393372427153",
  favorite: false
},
{
  id: "converge-gtv",
  number: 1143,
  name: "GTV",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723126332757.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1143/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363232353335323435353337353331",
  key: "35416a68643065697575493337566135",
  favorite: false
},
{
  id: "converge-gma7",
  number: 1093,
  name: "GMA 7",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723126306082.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1093/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231383438333031323033393138",
  key: "38694e34324d543478316b7455753437",
  favorite: false
},
{
  id: "converge-knowledge",
  number: 1340,
  name: "Knowledge Channel",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723604992973.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1340/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363735313534353138343339333732",
  key: "3970705738596631374f54324c384f57",
  favorite: false
},
{
  id: "converge-ibc13",
  number: 1089,
  name: "IBC 13",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723128890006.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1089/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231383439333634323034333738",
  key: "364a3849664b37386955623437364579",
  favorite: false
},
{
  id: "converge-jeepneytv",
  number: 1250,
  name: "Jeepney TV",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723128953472.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1250/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363331363735363832333531363036",
  key: "723548436f6e34333961586150756649",
  favorite: false
},
{
  id: "converge-tv5",
  number: 1088,
  name: "TV5",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723134335547.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1088/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231383438303333323033373730",
  key: "375a684a31357647653565574b363076",
  favorite: false
},
    {
  id: "converge-cna",
  number: 1106,
  name: "CHANNEL NEWS ASIA",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723125590334.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1106/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231393339333834323333353038",
  key: "756a7351733939554668654a79633372",
  favorite: false
},

{
  id: "converge-onesports",
  number: 1083,
  name: "ONE SPORTS",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723131202156.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1083/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231353030333331313038333030",
  key: "6c3543424b356d575851357961596873",
  favorite: false
},

{
  id: "converge-inctv",
  number: 1092,
  name: "INC TV",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723605495653.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1092/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231393132323937323234333139",
  key: "74516e7a4f3472713651316233425841",
  favorite: false
},

{
  id: "converge-kapamilya-hd",
  number: 1286,
  name: "KAPAMILYA HD",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723129013828.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1286/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363331363737343637333533323837",
  key: "71347339457958556439543650426e74",
  favorite: false
},

{
  id: "converge-cinemax",
  number: 1108,
  name: "CINEMAX",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723125660668.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1108/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363232303137333630323534393638",
  key: "63547a3159507a7036314e3357436c7a",
  favorite: false
},

{
  id: "converge-dzmm",
  number: 1249,
  name: "DZMM TELERADYO",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1749519196399.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1249/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363331363832363034333637353833",
  key: "524349317875574c34386a32416c4633",
  favorite: false
},

{
  id: "converge-ewtn",
  number: 1104,
  name: "EWTN",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723126078814.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1104/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231393133313335323234373039",
  key: "4372743534626238333533784d336159",
  favorite: false
},

{
  id: "converge-cinemaone",
  number: 1283,
  name: "CINEMA ONE",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723125628005.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1283/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363331363736373234333532363730",
  key: "684b6853695333444a6b345579376a61",
  favorite: false
},

{
  id: "converge-myx",
  number: 1252,
  name: "MYX",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723129763447.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1252/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363331363736333231333532323639",
  key: "396c467233356c357355497565533536",
  favorite: false
},

{
  id: "converge-net25",
  number: 1090,
  name: "NET 25",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723129823252.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1090/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231393131363337323232353030",
  key: "56783536726130576e5a4171564c3741",
  favorite: false
},

{
  id: "converge-celestial-pinoy",
  number: 1077,
  name: "CELESTIAL MOVIES PINOY",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723219252241.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1077/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363230383933303132303032303231",
  key: "6b5058557254355845335a6e63737030",
  favorite: false
},

{
  id: "converge-hbo",
  number: 1065,
  name: "HBO",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723126386617.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1065/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363230383830323639303031323938",
  key: "715a36614f62445635304852794b3676",
  favorite: false
},

{
  id: "converge-hallypop",
  number: 1152,
  name: "HALLYPOP",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1733707474289.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1152/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363233303437353134383939313936",
  key: "686e36454a54544d3930343749713333",
  favorite: false
 },
{ 
 
  id: "converge-aliw",
  number: 1109,
  name: "ALIW TV",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723125129835.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1109/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363232303137373937323535313836",
  key: "3551344768323677674c32704a713249",
  favorite: false
},

{
  id: "converge-a2z",
  number: 1087,
  name: "A2Z",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723125016586.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1087/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231383437383231323033353237",
  key: "583130656f6d3267777a6d7235487858",
  favorite: false
},

{
  id: "converge-viva-cinema",
  number: 1079,
  name: "VIVA CINEMA",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723134481136.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1079/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363230393830353534303039353831",
  key: "506e354374394938446439344b6f3741",
  favorite: false
},

{
  id: "converge-rjtv29",
  number: 1159,
  name: "RJTV 29",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723133830822.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1159/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363233323237323935303332363334",
  key: "38346b5732353165303954347677476e",
  favorite: false
},

{
  id: "converge-cartoon-network",
  number: 1178,
  name: "CARTOON NETWORK",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723125431025.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1178/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363233323238323938303333343430",
  key: "536a4774797143315773693133654b73",
  favorite: false
},

{
  id: "converge-cctv4",
  number: 1223,
  name: "CCTV4",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723125521068.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1223/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363234393439353931383032393636",
  key: "3570773244533748733935644c787a56",
  favorite: false
},

{
  id: "converge-cnn",
  number: 1073,
  name: "CNN",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723125798255.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1073/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363230383933303132303032313231",
  key: "6b5058557254355845335a6e63737030",
  favorite: false
},

{
  id: "converge-dzrh",
  number: 1174,
  name: "DZRH",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723126004028.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1174/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363233323236373936303238393632",
  key: "74576436426946764a6b4e5734456e37",
  favorite: false
},

{
  id: "converge-kix",
  number: 1263,
  name: "KIX",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723129053549.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1263/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363331313938353234383134303633",
  key: "3669754977303668394e493367344773",
  favorite: false
},

{
  id: "converge-fashiontv",
  number: 1102,
  name: "FASHION TV",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723126284675.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1102/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363232313037313238323837343137",
  key: "4a696164307578497138383747433934",
  favorite: false
},

{
  id: "converge-taptv",
  number: 1149,
  name: "TAP TV",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723134180637.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1149/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363232353337313135353433363839",
  key: "7573536e79344f796e746c324b695133",
  favorite: false
},

{
  id: "converge-star-channel-1",
  number: 1202,
  name: "STAR CHANNEL 1",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723219661968.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1202/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363233343131373737323235333232",
  key: "57787a75513536333132744c34763439",
  favorite: false
},

{
  id: "converge-tap-sports",
  number: 1151,
  name: "TAP SPORTS",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723134161793.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1151/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363233303437333337383938393931",
  key: "4344324b7661386b4579323633343645",
  favorite: false
},

{
  id: "converge-metro",
  number: 1267,
  name: "METRO",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723129722508.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1267/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363334313133373731323334343436",
  key: "673478506852336979544a4f38475479",
  favorite: false
},

{
  id: "converge-alltv",
  number: 1179,
  name: "ALL TV",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723136602348.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1179/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363233323238353336303333363036",
  key: "367662564c69425947353948374f4553",
  favorite: false
},

{
  id: "converge-anc-hd",
  number: 1216,
  name: "ANC HD",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723219396137.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1216/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363234353837393638333931313738",
  key: "335a493259306157495a557356494b44",
  favorite: false
},
{
  id: "converge-gnn-tv44",
  number: 1234,
  name: "GNN TV44",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1735903243498.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1234/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363235373230343031373839383832",
  key: "6f3367454f743663393778454d327338",
  favorite: false
  },
{
   id: "converge-NET-25",
  number: 1090,
  name: "NET 25",
  group: "Converge",
  category: "Converge",
  logo: "https://ottepg8.comclark.com:8443/iptvepg/images/markurl/mark_1723129823252.png",
  url: withToken(
    "https://converse.nathcreqtives.com/1090/manifest.mpd",
    "converge"
  ),
  drm: true,
  drmType: "clearkey",
  keyId: "31363231393131363337323232353030",
  key: "56783536726130576e5a4171564c3741",
  favorite: false

},
{
  id: "world-movies-now",
  number: 1011,
  name: "Movies Now",
  group: "World TV",
  category: "Converge",
  logo: "https://i.imgur.com/3BCg3pS.png",
  url: "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "40f019b86241d23ef075633fd7f1e927",
  key: "058dec845bd340178a388edd104a015e",
  headers: {},
  favorite: false
},
{
  id: "world-cinema-one",
  number: 1012,
  name: "Cinema One",
  group: "World TV",
  category: "Converge",
  logo: "https://static.wikia.nocookie.net/russel/images/9/94/Cinema_One_Logo_2020.png",
  url: "https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "58d0e56991194043b8fb82feb4db7276",
  key: "d68f41b59649676788889e19fb10d22c",
  headers: {},
  favorite: false

},
{
  id: "world-aniplus",
  number: 1014,
  name: "Aniplus",
  group: "World TV",
  category: "Converge",
  logo: "https://i.imgur.com/5gMIjA2.png",
  url: "https://slive.mana2.my/AniPlus/index.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "3dd653fc7aa1e3075b7f0233620df68f",
  key: "8573791fa55bff03a3094ff559fc1407",
  headers: {},
  favorite: false 
},
{
id: "world-cartoon-network",
  number: 1020,
  name: "Cartoon Network",
  group: "World TV",
  category: "Converge",
  logo: "https://poster.starhubgo.com/Linear_channels2/316_1920x1080_HTV.png",
  url: "https://a190aivottlinear-a.akamaihd.net/OTTB/iad-nitro/live/clients/dash/enc/ampfzrmpam/out/v1/e08f3866c80040f2bc494cb48ebc7bce/cenc.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "7ef57f7f3e8cf0efe4f3d5772a7cbb35",
  key: "0ac6d617095fbe0ca7f4c9ae72fa5f51",
  headers: {},
  favorite: false
},
{
  id: "world-ytv",
  number: 1021,
  name: "YTV",
  group: "World TV",
  category: "Converge",
  logo: "https://i.imgur.com/LXoPZ8x.png",
  url: "https://a196aivottlinear-a.akamaihd.net/OTTB/pdx-nitro/live/clients/dash/enc/o7aqpbb6vv/out/v1/f8f6ef738ef24c4f8176d561ffb8a157/cenc.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "6f0aeae5779f1dcaef23f0bfbc828220",
  key: "7bcef3cf93de00e3daeb190d15b1ec05",
  headers: {},
  favorite: false
},
{
  id: "world-disney-channel",
  number: 1022,
  name: "Disney Channel",
  group: "World TV",
  category: "Converge",
  logo: "http://apkip.tv/logos/Canada/DisneyChannel.ca.png",
  url: "https://a77aivottepl-a.akamaihd.net/pdx-nitro/live/clients/dash/enc/zuf794yutz/out/v1/ca3534bfe4f148298b36719204d108e0/cenc.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "be9caaa813c5305e761c66ac63645901",
  key: "3d40f2990ec5362ca5be3a3c9bb8f8b4",
  headers: {},
  favorite: false
},
{
  id: "world-kapamilya-channel",
  number: 1023,
  name: "Kapamilya Channel",
  group: "World TV",
  category: "Converge",
  logo: "https://i.imgur.com/WcYS3S3.png",
  url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "bd17afb5dc9648a39be79ee3634dd4b8",
  key: "3ecf305d54a7729299b93a3d69c02ea5",
  headers: {},
  favorite: false
},
{
  id: "world-anc",
  number: 1024,
  name: "ANC",
  group: "World TV",
  category: "Converge",
  logo: "https://i.imgur.com/Bcu69bU.png",
  url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "4bbdc78024a54662854b412d01fafa16",
  key: "6039ec9b213aca913821677a28bd78ae",
  headers: {},
  favorite: false
},
{
  id: "world-channel-news-asia",
  number: 1025,
  name: "Channel News Asia",
  group: "World TV",
  category: "Converge",
  logo: "https://i.imgur.com/vm9Z0uV.png",
  url: "https://tglmp03.akamaized.net/out/v1/43856347987b4da3890360b0d18b5dc5/manifest.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "4ee336861eed4840a555788dc54aea6e",
  key: "f1f53644d4941d4ed31b4bb2478f8cf4",
  headers: {},
  favorite: false
},
{
  id: "world-dzmm-teleradyo",
  number: 1026,
  name: "DZMM TeleRadyo",
  group: "World TV",
  category: "Converge",
  logo: "https://i.imgur.com/npj41pk.png",
  url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "47c093e0c9fd4f80839a0337da3dd876",
  key: "50547394045b3d047dc7d92f57b5fb33",
  headers: {},
  favorite: false
},
{
  id: "world-tfc",
  number: 1027,
  name: "TFC",
  group: "World TV",
  category: "Converge",
  logo: "https://i.imgur.com/zZWj5vn.png",
  url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/index.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "9568cc84e1d944f38eac304517eab6fd",
  key: "f12142af8f39b3bab79d3679d3665ebe",
  headers: {},
  favorite: false
},
{
  id: "world-cinemo-global",
  number: 1028,
  name: "Cinemo! Global",
  group: "World TV",
  category: "Converge",
  logo: "https://static.wikia.nocookie.net/russel/images/f/f2/Cine_Mo%21_3D_Logo_2011.png",
  url: "https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "aa8aebe35ccc4541b7ce6292efcb1bfb",
  key: "aab1df109d22fc5d7e3ec121ddf24e5f",
  headers: {},
  favorite: false
},
{
  id: "world-myx-global",
  number: 1029,
  name: "MYX Global",
  group: "World TV",
  category: "Converge",
  logo: "https://i.imgur.com/CIPTNnT.png",
  url: "https://d24xfhmhdb6r0q.cloudfront.net/out/v1/e897a7b6414a46019818ee9f2c081c4f/index.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "f40a52a3ac9b4702bdd5b735d910fd2f",
  key: "5ce1bc7f06b494c276252b4d13c90e51",
  headers: {},
  favorite: false
  	 },
  {  
  
   id: "world-Play_boy TV",
  number: 1030,
  name: "Play_boy TV",
  group: "World TV",
  category: "Converge",
  logo: "",
  url: "https://video.beeline.tv/live/d/channel047.isml/manifest-stb.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "8b4af3cb6ba681d3df359cd404c11776",
  key: "9b010f4ba2a71a3ef2706aed3549189b",
  headers: {},
  favorite: false,
  adult: true

   },
  {  
  
   id: "world-Babes TV",
  number: 1031,
  name: "Babes TV",
  group: "World TV",
  category: "Converge",
  logo: "",
  url: "https://video.beeline.tv/live/d/channel472.isml/manifest-stb.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "996d754bd00695c04644c3fa44c25183",
  key: "5d5fcedc221c1ce858519d60442a107a",
  headers: {},
  favorite: false,
  adult: true

    },
  {  
  
   id: "world-Barely Legal",
  number: 1032,
  name: "Barely Legal",
  group: "World TV",
  category: "Converge",
  logo: "",
  url: "https://video.beeline.tv/live/d/channel420.isml/manifest-stb.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "bf0bdbb8a0e83ec6ba8b7f42d27a6925",
  key: "f4051d1dd36e66e085264b9b342641c5",
  headers: {},
  favorite: false,
  adult: true

     },
  {  
  
   id: "world-Exxxotica",
  number: 1033,
  name: "Exxxotica",
  group: "World TV",
  category: "Converge",
  logo: "",
  url: "https://video.beeline.tv/live/d/channel442.isml/manifest-stb.mpd",
  drm: true,
  drmType: "clearkey",
  keyId: "3d5bd327009443ddeee322e210dda78a",
  key: "3d5bd327009443ddeee322e210dda78a",
  headers: {},
  favorite: false,
  adult: true

  
	
	 },
  {  
     id: "cignal-kapamilya",
    number: 1,
    name: "Kapamilya Channel",
    group: "Cignal",
    category: "Cignal",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Kapamilya_Channel_Logo_2020.svg/2560px-Kapamilya_Channel_Logo_2020.svg.png",
    url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "bd17afb5dc9648a39be79ee3634dd4b8",
    key: "3ecf305d54a7729299b93a3d69c02ea5",
    favorite: false
   },
  {
    id: "cignal-one-ph",
    number: 3,
    name: "One PH",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/gkluDe9.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/oneph_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "92834ab4a7e1499b90886c5d49220e46",
    key: "a7108d9a6cfcc1b7939eb111daf09ab3",
    favorite: false
  },
  {
    id: "cignal-buko",
    number: 4,
    name: "BuKO",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/Wv0K5Yc.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_buko_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "d273c085f2ab4a248e7bfc375229007d",
    key: "7932354c3a84f7fc1b80efa6bcea0615",
    favorite: false
  },
  {
    id: "cignal-sari-sari",
    number: 5,
    name: "SARI-SARI",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/russel/images/e/ec/Sari-Sari_Channel_2D_Logo_2016.png/revision/latest?cb=20190317023940",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_sarisari/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "0a7ab3612f434335aa6e895016d8cd2d",
    key: "b21654621230ae21714a5cab52daeb9d",
    favorite: false
  },
  {
    id: "cignal-ptv4",
    number: 6,
    name: "PTV4",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/russel/images/d/dc/PTV_4_Para_Sa_Bayan_Alternative_Logo_June_2017.png/revision/latest?cb=20171019065428",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_ptv4_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "71a130a851b9484bb47141c8966fb4a3",
    key: "ad1f003b4f0b31b75ea4593844435600",
    favorite: false
  },
  {
    id: "cignal-one-news",
    number: 7,
    name: "One News",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/bpRiu54.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/onenews_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "d39eb201ae494a0b98583df4d110e8dd",
    key: "6797066880d344422abd3f5eda41f45f",
    favorite: false
  },
  {
    id: "cignal-rptv",
    number: 8,
    name: "RPTV",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/russel/images/f/fb/RPTV_Alternative_Logo_2024.png/revision/latest?cb=20240305140432",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cnn_rptv_prod_hd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "1917f4caf2364e6d9b1507326a85ead6",
    key: "a1340a251a5aa63a9b0ea5d9d7f67595",
    favorite: false
  },
  {
    id: "cignal-tv5",
    number: 9,
    name: "TV5",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/russel/images/7/7a/TV5_HD_Logo_2024.png/revision/latest/scale-to-width-down/290?cb=20240202141126",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/tv5_hd/default1/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "2615129ef2c846a9bbd43a641c7303ef",
    key: "07c7f996b1734ea288641a68e1cfdc4d",
    favorite: false
  },
  {
    id: "cignal-a2z",
    number: 10,
    name: "A2Z",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/russel/images/8/85/A2Z_Channel_11_without_Channel_11_3D_Logo_2020.png/revision/latest?cb=20231101144828",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "f703e4c8ec9041eeb5028ab4248fa094",
    key: "c22f2162e176eee6273a5d0b68d19530",
    favorite: false
  },
  {
    id: "cignal-bilyonaryo",
    number: 11,
    name: "Bilyonaryo Channel",
    group: "Cignal",
    category: "Cignal",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxvjeBIthYiEaZHeVeYpDicIlOTdv3G6lzoal3VM2xVzWu_J7XxM657oz&s=10",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bilyonaryoch/default1/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "227ffaf09bec4a889e0e0988704d52a2",
    key: "b2d0dce5c486891997c1c92ddaca2cd2",
    favorite: false
  },
  {
    id: "cignal-tvn-movies-pinoy",
    number: 12,
    name: "tvN Movies Pinoy",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/russel/images/e/e3/TvN_Movies_Pinoy_Logo_2023.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tvnmovie/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "2e53f8d8a5e94bca8f9a1e16ce67df33",
    key: "3471b2464b5c7b033a03bb8307d9fa35",
    favorite: false
  },
  {
    id: "cignal-pbo",
    number: 13,
    name: "PBO",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/61fHpnW.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pbo_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "dcbdaaa6662d4188bdf97f9f0ca5e830",
    key: "31e752b441bd2972f2b98a4b1bc1c7a1",
    favorite: false
  },
  {
    id: "cignal-viva-cinema",
    number: 14,
    name: "Viva Cinema",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/tvfanon6528/images/2/2f/Viva_Cinema_%282021-.n.v.%29.png/revision/latest?cb=20210804092616",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/viva_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "07aa813bf2c147748046edd930f7736e",
    key: "3bd6688b8b44e96201e753224adfc8fb",
    favorite: false
  },
  {
    id: "cignal-tmc",
    number: 15,
    name: "TMC",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/6mNCite.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tagalogmovie/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "96701d297d1241e492d41c397631d857",
    key: "ca2931211c1a261f082a3a2c4fd9f91b",
    favorite: false
  },
  {
    id: "cignal-tap-movies",
    number: 16,
    name: "Tap Movies",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/3RVA5mV.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tapmovies_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "71cbdf02b595468bb77398222e1ade09",
    key: "c3f2aa420b8908ab8761571c01899460",
    favorite: false
  },
    // =============== CIGNAL – BATCH 2 (ClearKey DASH) ===============
  {
    id: "cignal-hbo",
    number: 401,
    name: "HBO",
    group: "Cignal",
    category: "Cignal",
    logo: "https://images.now-tv.com/shares/channelPreview/img/en_hk/color/ch115_170_122",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "d47ebabf7a21430b83a8c4b82d9ef6b1",
    key:   "54c213b2b5f885f1e0290ee4131d425b",
    favorite: false
  },
  {
    id: "cignal-hbo-hits",
    number: 402,
    name: "HBO Hits",
    group: "Cignal",
    category: "Cignal",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/449_144.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohits/default1/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "b04ae8017b5b4601a5a0c9060f6d5b7d",
    key:   "a8795f3bdb8a4778b7e888ee484cc7a1",
    favorite: false
  },
  {
    id: "cignal-dreamworks-tagalized",
    number: 403,
    name: "DreamWorks (Tagalized)",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/cgfKSDP.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworktag/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "564b3b1c781043c19242c66e348699c5",
    key:   "d3ad27d7fe1f14fb1a2cd5688549fbab",
    favorite: false
  },
  {
    id: "cignal-pba-rush",
    number: 404,
    name: "PBA RUSH",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/F2npB7o.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_pbarush_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "76dc29dd87a244aeab9e8b7c5da1e5f3",
    key:   "95b2f2ffd4e14073620506213b62ac82",
    favorite: false
  },
  {
    id: "cignal-one-sports-plus",
    number: 405,
    name: "One Sports+",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/D33wRIq.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesportsplus_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "322d06e9326f4753a7ec0908030c13d8",
    key:   "1e3e0ca32d421fbfec86feced0efefda",
    favorite: false
  },
  {
    id: "cignal-tap-sports",
    number: 406,
    name: "Tap Sports",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/ZsWDiRF.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tapsports/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "eabd2d95c89e42f2b0b0b40ce4179ea0",
    key:   "0e7e35a07e2c12822316c0dc4873903f",
    favorite: false
  },
  {
    id: "cignal-tvup",
    number: 407,
    name: "TVUP!",
    group: "Cignal",
    category: "Cignal",
    logo: "https://cms.cignal.tv/Upload/Images/TVUP%20Logo%20.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/tvup_prd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "83e813ccd4ca4837afd611037af02f63",
    key:   "a97c515dbcb5dcbc432bbd09d15afd41",
    favorite: false
  },
  {
    id: "cignal-rock-action",
    number: 408,
    name: "Rock Action",
    group: "Cignal",
    category: "Cignal",
    logo: "https://uploads-ssl.webflow.com/64e961c3862892bff815289d/64f57100366fe5c8cb6088a7_logo_ext_web.png?fbclid=IwY2xjawGIHF9leHRuA2FlbQIxMAABHaW0_Y0A9XL4w1ZXDSwAZCAxe62ui1Oy3gU5wjykfHsZ0eCjzNxl05M0JQ_aem_NIH5vZtTty4_B8wy5fB2LA",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_rockextreme/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "0f852fb8412b11edb8780242ac120002",
    key:   "4cbc004d8c444f9f996db42059ce8178",
    favorite: false
  },
  {
    id: "cignal-tap-tv",
    number: 409,
    name: "Tap TV",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/KJaSftF.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_taptv_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "f6804251e90b4966889b7df94fdc621e",
    key:   "55c3c014f2bd12d6bd62349658f24566",
    favorite: false
  },
  {
    id: "cignal-knowledge-channel",
    number: 410,
    name: "Knowledge Channel",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/UIqEr2y.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/knowledge_channel/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "0f856fa0412b11edb8780242ac120002",
    key:   "783374273ef97ad3bc992c1d63e091e7",
    favorite: false
  },
  {
    id: "cignal-deped-tv",
    number: 411,
    name: "DepEd TV",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/russel/images/f/f3/DepEd_TV_Logo_2020.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/depedch_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "0f853706412b11edb8780242ac120002",
    key:   "2157d6529d80a760f60a8b5350dbc4df",
    favorite: false
  },
  {
    id: "cignal-fashion-tv",
    number: 412,
    name: "Fashion TV",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/Zd5zm7C.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/fashiontvhd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "971ebbe2d887476398e97c37e0c5c591",
    key:   "472aa631b1e671070a4bf198f43da0c7",
    favorite: false
  },
  {
    id: "cignal-hbo-signature",
    number: 413,
    name: "HBO Signature",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/t4HF5va.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbosign/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "a06ca6c275744151895762e0346380f5",
    key:   "559da1b63eec77b5a942018f14d3f56f",
    favorite: false
  },
  // =============== CIGNAL – BATCH 3 (ClearKey DASH) ===============
  {
    id: "cignal-tap-action-flix",
    number: 414,
    name: "Tap Action Flix",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.ibb.co/wgjPKFW/IMG-20241029-111906.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tapactionflix_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "bee1066160c0424696d9bf99ca0645e3",
    key:   "f5b72bf3b89b9848de5616f37de040b7",
    favorite: false
  },
  {
    id: "cignal-kix",
    number: 415,
    name: "KIX",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/B8Fmzer.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/kix_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "a8d5712967cd495ca80fdc425bc61d6b",
    key:   "f248c29525ed4c40cc39baeee9634735",
    favorite: false
  },
  {
    id: "cignal-warner-tv",
    number: 416,
    name: "Warner TV",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/vGEL2Ne.png",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "4503cf86bca3494ab95a77ed913619a0",
    key:   "afc9c8f627fb3fb255dee8e3b0fe1d71",
    favorite: false
  },
  {
    id: "cignal-tvn-premium",
    number: 417,
    name: "tvN Premium",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/eE9IBhJ.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tvnpre/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "e1bde543e8a140b38d3f84ace746553e",
    key:   "b712c4ec307300043333a6899a402c10",
    favorite: false
  },
  {
    id: "cignal-history",
    number: 418,
    name: "History",
    group: "Cignal",
    category: "Cignal",
    logo: "https://cantseeus.com/wp-content/uploads/2023/10/History_28201529.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_historyhd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "a7724b7ca2604c33bb2e963a0319968a",
    key:   "6f97e3e2eb2bade626e0281ec01d3675",
    favorite: false
  },
  {
    id: "cignal-bbc-earth",
    number: 419,
    name: "BBC Earth",
    group: "Cignal",
    category: "Cignal",
    logo: "https://imgur.com/QMB9sFW.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_bbcearth_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "34ce95b60c424e169619816c5181aded",
    key:   "0e2a2117d705613542618f58bf26fc8e",
    favorite: false
  },
  {
    id: "cignal-uaap-varsity",
    number: 420,
    name: "UAAP Varsity Channel",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/V0sxXci.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_uaap_cplay_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "95588338ee37423e99358a6d431324b9",
    key:   "6e0f50a12f36599a55073868f814e81e",
    favorite: false
  },
  {
    id: "cignal-true-tv",
    number: 421,
    name: "True TV",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/logopedia/images/a/a0/TRUETV_Logo_2024.png/revision/latest/smart/width/250/height/250?cb=20241110070654",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/truefm_tv/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "0559c95496d44fadb94105b9176c3579",
    key:   "40d8bb2a46ffd03540e0c6210ece57ce",
    favorite: false
  },
  {
    id: "cignal-hbo-family",
    number: 422,
    name: "HBO Family",
    group: "Cignal",
    category: "Cignal",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/450_144.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbofam/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "872910c843294319800d85f9a0940607",
    key:   "f79fd895b79c590708cf5e8b5c6263be",
    favorite: false
  },
  {
    id: "cignal-rock-entertainment",
    number: 423,
    name: "Rock Entertainment",
    group: "Cignal",
    category: "Cignal",
    logo: "https://cdn.prod.website-files.com/67ad5259c6e804a40b4bae92/67ad5259c6e804a40b4bb0c1_logo_ent_red_web.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_rockentertainment/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "e4ee0cf8ca9746f99af402ca6eed8dc7",
    key:   "be2a096403346bc1d0bb0f812822bb62",
    favorite: false
  },
  {
    id: "cignal-spotv",
    number: 424,
    name: "SPOTV",
    group: "Cignal",
    category: "Cignal",
    logo: "https://linear-poster.astro.com.my/prod/logo/SPOTV.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_spotvhd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "ec7ee27d83764e4b845c48cca31c8eef",
    key:   "9c0e4191203fccb0fde34ee29999129e",
    favorite: false
  },
  {
    id: "cignal-spotv2",
    number: 425,
    name: "SPOTV2",
    group: "Cignal",
    category: "Cignal",
    logo: "https://linear-poster.astro.com.my/prod/logo/SPOTV2.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_spotv2hd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "7eea72d6075245a99ee3255603d58853",
    key:   "6848ef60575579bf4d415db1032153ed",
    favorite: false
  },
  {
    id: "cignal-premier-sports-2",
    number: 426,
    name: "Premier Sports 2",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/logopedia/images/5/59/PremierSports2_logo.png/revision/latest/scale-to-width-down/250?cb=20220528091432",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/premiersports2hd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "59454adb530b4e0784eae62735f9d850",
    key:   "61100d0b8c4dd13e4eb8b4851ba192cc",
    favorite: false
  },
  {
    id: "cignal-nba-tv-ph",
    number: 427,
    name: "NBA TV Philippines",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/x1ZG71v.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cgnl_nba/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "c5e51f41ceac48709d0bdcd9c13a4d88",
    key:   "20b91609967e472c27040716ef6a8b9a",
    favorite: false
  },
  {
    id: "cignal-cinemax",
    number: 428,
    name: "Cinemax",
    group: "Cignal",
    category: "Cignal",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/337_144.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_cinemax/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "b207c44332844523a3a3b0469e5652d7",
    key:   "fe71aea346db08f8c6fbf0592209f955",
    favorite: false
  },
  {
    id: "cignal-lifetime",
    number: 429,
    name: "Lifetime",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/Qvj8mf4.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_lifetime/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "cf861d26e7834166807c324d57df5119",
    key:   "64a81e30f6e5b7547e3516bbf8c647d0",
    favorite: false
  },
  {
    id: "cignal-food-network",
    number: 430,
    name: "Food Network",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/vucZeKB.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_foodnetwork_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "b7299ea0af8945479cd2f287ee7d530e",
    key:   "b8ae7679cf18e7261303313b18ba7a14",
    favorite: false
  },
  {
    id: "cignal-axn",
    number: 431,
    name: "AXN",
    group: "Cignal",
    category: "Cignal",
    logo: "http://linear-poster.astro.com.my/prod/logo/AXN_v1.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_axn_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "fd5d928f5d974ca4983f6e9295dfe410",
    key:   "3aaa001ddc142fedbb9d5557be43792f",
    favorite: false
  },
  // =============== CIGNAL – BATCH 4 (ClearKey DASH) ===============
  {
    id: "cignal-abc-australia",
    number: 432,
    name: "ABC Australia",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/kVVax44.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/abc_aus/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "389497f9f8584a57b234e27e430e04b7",
    key:   "3b85594c7f88604adf004e45c03511c0",
    favorite: false
  },
  {
    id: "cignal-travel-channel",
    number: 433,
    name: "Travel Channel",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/ZCYeUV2.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/travel_channel_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "f3047fc13d454dacb6db4207ee79d3d3",
    key:   "bdbd38748f51fc26932e96c9a2020839",
    favorite: false
  },
  {
    id: "cignal-bloomberg",
    number: 434,
    name: "Bloomberg",
    group: "Cignal",
    category: "Cignal",
    logo: "https://poster.starhubgo.com/Linear_channels2/708_1920x1080_HTV.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bloomberg_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "ef7d9dcfb99b406cb79fb9f675cba426",
    key:   "b24094f6ca136af25600e44df5987af4",
    favorite: false
  },
  {
    id: "cignal-bbc-news",
    number: 435,
    name: "BBC News",
    group: "Cignal",
    category: "Cignal",
    logo: "https://logos-world.net/wp-content/uploads/2024/12/BBC-News-Logo-500x281.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/bbcworld_news_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "f59650be475e4c34a844d4e2062f71f3",
    key:   "119639e849ddee96c4cec2f2b6b09b40",
    favorite: false
  },
  {
    id: "cignal-cartoon-network",
    number: 436,
    name: "Cartoon Network",
    group: "Cignal",
    category: "Cignal",
    logo: "https://poster.starhubgo.com/Linear_channels2/316_1920x1080_HTV.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cartoonnetworkhd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "a2d1f552ff9541558b3296b5a932136b",
    key:   "cdd48fa884dc0c3a3f85aeebca13d444",
    favorite: false
  },
  {
    id: "cignal-dreamworks-hd",
    number: 437,
    name: "DreamWorks",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/cgfKSDP.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworks_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "4ab9645a2a0a47edbd65e8479c2b9669",
    key:   "8cb209f1828431ce9b50b593d1f44079",
    favorite: false
  },
  {
    id: "cignal-hits-now",
    number: 438,
    name: "HITS Now",
    group: "Cignal",
    category: "Cignal",
    logo: "https://aqfadtv.xyz/logos/HITSNow.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hitsnow/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "14439a1b7afc4527bb0ebc51cf11cbc1",
    key:   "92b0287c7042f271b266cc11ab7541f1",
    favorite: false
  },
  {
    id: "cignal-moonbug",
    number: 439,
    name: "Moonbug",
    group: "Cignal",
    category: "Cignal",
    logo: "https://aqfadtv.xyz/logos/Moonbug.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_moonbug_kids_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "0bf00921bec94a65a124fba1ef52b1cd",
    key:   "0f1488487cbe05e2badc3db53ae0f29f",
    favorite: false
  },
  {
    id: "cignal-celestial-movies-pinoy",
    number: 440,
    name: "Celestial Movies Pinoy",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/e5IZsv3.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/celmovie_pinoy_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "0f8537d8412b11edb8780242ac120002",
    key:   "2ffd7230416150fd5196fd7ea71c36f3",
    favorite: false
  },
  {
    id: "cignal-hits-movies",
    number: 441,
    name: "HITS Movies",
    group: "Cignal",
    category: "Cignal",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/391_144.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_hitsmovies/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "f56b57b32d7e4b2cb21748c0b56761a7",
    key:   "3df06a89aa01b32655a77d93e09e266f",
    favorite: false
  },
  {
    id: "cignal-thrill",
    number: 442,
    name: "THRILL",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/logos/images/9/9c/Thrill_logo_2014.png/revision/latest/scale-to-width-down/306?cb=20220502112950&path-prefix=vi",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_thrill_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "928114ffb2394d14b5585258f70ed183",
    key:   "a82edc340bc73447bac16cdfed0a4c62",
    favorite: false
  },
  {
    id: "cignal-lotus-macao",
    number: 443,
    name: "Lotus Macao",
    group: "Cignal",
    category: "Cignal",
    logo: "https://cms.cignal.tv/Upload/Thumbnails/mo-macau-lotus-tv-3757.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/lotusmacau_prd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "60dc692e64ea443a8fb5ac186c865a9b",
    key:   "01bdbe22d59b2a4504b53adc2f606cc1",
    favorite: false
  },
  {
    id: "cignal-discovery-channel",
    number: 444,
    name: "Discovery Channel",
    group: "Cignal",
    category: "Cignal",
    logo: "https://cantseeus.com/wp-content/uploads/2023/10/discov.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/discovery/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "d9ac48f5131641a789328257e778ad3a",
    key:   "b6e67c37239901980c6e37e0607ceee6",
    favorite: false
  },
  {
    id: "cignal-asian-food-network",
    number: 445,
    name: "Asian Food Network",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/O5jBcL2.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/asianfoodnetwork_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "1619db30b9ed42019abb760a0a3b5e7f",
    key:   "5921e47fb290ae263291b851c0b4b6e4",
    favorite: false
  },
  {
    id: "cignal-nhk-world-japan",
    number: 446,
    name: "NHK World Japan",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/3zp7a0B.png",
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nhk_japan.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "3d6e9d4de7d7449aadd846b7a684e564",
    key:   "0800fff80980f47f7ac6bc60b361b0cf",
    favorite: false
  },
  {
    id: "cignal-animal-planet",
    number: 447,
    name: "Animal Planet",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.ibb.co/mBFs4RQ/pinpng-com-animal-planet-png-4851143.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animal_planet_sd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "436b69f987924fcbbc06d40a69c2799a",
    key:   "c63d5b0d7e52335b61aeba4f6537d54d",
    favorite: false
  },
  {
    id: "cignal-kbs-world",
    number: 448,
    name: "KBS World",
    group: "Cignal",
    category: "Cignal",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrxyZu1bPiJ3SdGvhVf3d3Muj5AqQ7ZkGpw&s",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/kbsworld/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "22ff2347107e4871aa423bea9c2bd363",
    key:   "c6e7ba2f48b3a3b8269e8bc360e60404",
    favorite: false
  },
  {
    id: "cignal-cnn-international",
    number: 449,
    name: "CNN International",
    group: "Cignal",
    category: "Cignal",
    logo: "http://115.146.176.131:80/images/2acf9495fde07739914e7a7bb3ffee94.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_cnnhd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "900c43f0e02742dd854148b7a75abbec",
    key:   "da315cca7f2902b4de23199718ed7e90",
    favorite: false
  },
  {
    id: "cignal-france24",
    number: 450,
    name: "France24",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/61MSiq9.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/france24/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "257f9fdeb39d41bdb226c2ae1fbdaeb6",
    key:   "e80ead0f4f9d6038ab34f332713ceaa5",
    favorite: false
  },
  {
    id: "cignal-ibc-13",
    number: 451,
    name: "IBC 13",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/logopedia/images/f/f5/IBC_13_Logo_2012.png/revision/latest?cb=20170830080345",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/ibc13_sd_new/default1/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "16ecd238c0394592b8d3559c06b1faf5",
    key:   "05b47ae3be1368912ebe28f87480fc84",
    favorite: false
  },
  {
    id: "cignal-one-sports-hd",
    number: 452,
    name: "One Sports HD",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/russel/images/5/5a/One_Sports_%28TV_channel%29_3D_Logo_2020.png/revision/latest?cb=20230520142737",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesports_hd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "53c3bf2eba574f639aa21f2d4409ff11",
    key:   "3de28411cf08a64ea935b9578f6d0edd",
    favorite: false
  },
  {
    id: "cignal-premier-sports",
    number: 453,
    name: "Premier Sports",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/logopedia/images/6/63/Premier_Sports_logo_final.png/revision/latest?cb=20210920130931",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_ps_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "b8b595299fdf41c1a3481fddeb0b55e4",
    key:   "cd2b4ad0eb286239a4a022e6ca5fd007",
    favorite: false
  },
  {
    id: "cignal-animax",
    number: 454,
    name: "Animax",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/MiUDLVa.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animax_sd_new/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "92032b0e41a543fb9830751273b8debd",
    key:   "03f8b65e2af785b10d6634735dbe6c11",
    favorite: false
  },
  {
    id: "cignal-hits-hd",
    number: 455,
    name: "Hits HD",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/YeqyD9W.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hits_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "dac605bc197e442c93f4f08595a95100",
    key:   "975e27ffc1b7949721ee3ccb4b7fd3e5",
    favorite: false
	 },
  {
	 id: "cignal-Teleradyo",
    number: 2,
    name: "Teleradyo",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/e1i8ffA.png",
    url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "47c093e0c9fd4f80839a0337da3dd876",
    key:   "50547394045b3d047dc7d92f57b5fb33",
    favorite: false
  },
  {
    id: "cignal-global-trekker",
    number: 456,
    name: "Global Trekker",
    group: "Cignal",
    category: "Cignal",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/482_144.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tapedge/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "4553f7e8011f411fb625cefc39274300",
    key:   "98f2f1d153367e84b5d559dc9dfb9a35",
    favorite: false
  },
  // =============== CIGNAL (batch: CCTV4 hanggang TV Maria) ===============
  {
    id: "cignal-cctv4",
    number: 457,
    name: "CCTV4",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/HBisPOA.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_cctv4/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "b83566836c0d4216b7107bd7b8399366",
    key:   "32d50635bfd05fbf8189a0e3f6c8db09",
    favorite: false
  },
  {
    id: "cignal-tv5-monde",
    number: 458,
    name: "TV5 Monde",
    group: "Cignal",
    category: "Cignal",
    logo: "https://klean.nl/wp-content/uploads/Logo_TV5_Monde_-_2021.svg_.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tv5_monde/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "fba5a720b4a541b286552899ba86e38b",
    key:   "f63fa50423148bfcbaa58c91dfcffd0e",
    favorite: false
  },
  {
    id: "cignal-nickelodeon",
    number: 459,
    name: "Nickelodeon",
    group: "Cignal",
    category: "Cignal",
    logo: "http://apkip.tv/logos/UK/Nickelodeon.uk.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_nickelodeon/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "9ce58f37576b416381b6514a809bfd8b",
    key:   "f0fbb758cdeeaddfa3eae538856b4d72",
    favorite: false
  },
  {
    id: "cignal-nick-jr",
    number: 460,
    name: "Nick Jr",
    group: "Cignal",
    category: "Cignal",
    logo: "https://i.imgur.com/4MozyqM.png",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_nickjr/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "bab5c11178b646749fbae87962bf5113",
    key:   "0ac679aad3b9d619ac39ad634ec76bc8",
    favorite: false
  },
  {
    id: "cignal-hgtv",
    number: 461,
    name: "HGTV",
    group: "Cignal",
    category: "Cignal",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/198_144.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hgtv_hd1/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "f0e3ab943318471abc8b47027f384f5a",
    key:   "13802a79b19cc3485d2257165a7ef62a",
    favorite: false
  },
  {
    id: "cignal-crime-investigation",
    number: 462,
    name: "Crime & Investigation",
    group: "Cignal",
    category: "Cignal",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/369_144.png",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/crime_invest/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "21e2843b561c4248b8ea487986a16d33",
    key:   "db6bb638ccdfc1ad1a3e98d728486801",
    favorite: false
  },
  {
    id: "cignal-tv-maria",
    number: 463,
    name: "TV Maria",
    group: "Cignal",
    category: "Cignal",
    logo: "https://static.wikia.nocookie.net/logopedia/images/c/cd/TV_MARIA_PH.png/revision/latest?cb=20200421061144",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/tvmaria_prd/default/index.mpd",
    drm: true,
    drmType: "clearkey",
    keyId: "fa3998b9a4de40659725ebc5151250d6",
    key:   "998f1294b122bbf1a96c1ddc0cbb229f",
    favorite: false
  },  
    // ... (UNCHANGED: lahat ng Cignal channels mo – kept as-is)

    // ================= RADIO STATIONS =================
    {
      id: "radio-yesfm-dagupan",
      number: 901,
      name: "106.3 Yes FM Dagupan",
      group: "Radio",
      category: "Radio",
      logo: "https://i.ibb.co/yBqNhTZN/raryo.jpg",
      url: "https://yesfmdagupan.radioca.st/;",
      type: "mp3",
      drm: false,
      drmType: null,
      favorite: false
    },
    {	
	id: "radio-TeleRadyo",
      number: 911,
      name: "TeleRadyo",
      group: "Radio",
      category: "Radio",
      logo: "https://i.imgur.com/ibvP0jr.jpeg",
      url: "https://tunein.com/radio/TeleRadyo-630-s14674/;",
      type: "mp3",
      drm: false,
      drmType: null,
      favorite: false	
	},
    {	
      id: "radio-loveradio-dagupan",
      number: 902,
      name: "98.3 Love Radio Dagupan",
      group: "Radio",
      category: "Radio",
      logo: "https://i.ibb.co/yBqNhTZN/raryo.jpg",
      url: "https://loveradiodagupan.radioca.st/;",
      type: "mp3",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "radio-SDTVRADIO",
      number: 903,
      name: "SDTV RADIO",
      group: "Radio",
      category: "Radio",
      logo: "https://i.imgur.com/QrYj87U.jpeg",
      url: "https://usa13.fastcast4u.com/proxy/itunerworldwide?mp=/1",
      type: "mp3",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "radio-loveradio-manila",
      number: 904,
      name: "90.7 Love Radio",
      group: "Radio",
      category: "Radio",
      logo: "https://static.mytuner.mobi/media/tvos_radios/141/dzmb-love-radio-907-fm.fd6dd832.png",
      url: "https://azura.loveradio.com.ph/listen/love_radio_manila/radio.mp3",
      type: "mp3",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "radio-eaglefm",
      number: 905,
      name: "95.5 Eagle FM",
      group: "Radio",
      category: "Radio",
      logo: "https://static.mytuner.mobi/media/tvos_radios/550/eagle-fm-955.31726a37.jpg",
      url: "http://n0c.radiojar.com/yus0r2bghd3vv?rj-ttl=5&rj-tok=AAABl4NB7pwAuUwQgelXY74u7w",
      type: "mp3",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "radio-easyrock",
      number: 906,
      name: "96.3 Easy Rock",
      group: "Radio",
      category: "Radio",
      logo: "https://static.mytuner.mobi/media/tvos_radios/138/dwrk-963-easy-rock.c2c03660.png",
      url: "https://azura.easyrock.com.ph/listen/easy_rock_manila/radio.mp3",
      type: "mp3",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "radio-homeradio",
      number: 907,
      name: "97.9 Home Radio",
      group: "Radio",
      category: "Radio",
      logo: "https://static.mytuner.mobi/media/tvos_radios/3fFrky9eJE.jpg",
      url: "https://hrmanila.radioca.st/stream",
      type: "mp3",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "radio-yesfm-manila",
      number: 908,
      name: "101.1 Yes FM",
      group: "Radio",
      category: "Radio",
      logo: "https://static.mytuner.mobi/media/tvos_radios/211/yes-fm-manila-1011.3596a020.png",
      url: "https://azura.yesfm.com.ph/listen/yes_fm_manila/radio.mp3",
      type: "mp3",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "radio-starfm",
      number: 909,
      name: "102.7 Star FM",
      group: "Radio",
      category: "Radio",
      logo: "https://static.mytuner.mobi/media/tvos_radios/848/star-fm-manila.c6a245b5.png",
      url: "https://stream.zeno.fm/69b1kf7q0y5tv",
      type: "mp3",
      drm: false,
      drmType: null,
      favorite: false
    },
    {
      id: "radio-energyfm",
      number: 910,
      name: "106.7 Energy FM",
      group: "Radio",
      category: "Radio",
      logo: "https://static.mytuner.mobi/media/tvos_radios/PG5RgCjKLe.png",
      url: "http://ph-icecast.eradioportal.com:8000/energyfm_manila",
      type: "mp3",
      drm: false,
      drmType: null,
      favorite: false
    },

    // ===== NOW SHOWING STATIC CATEGORY =====
    {
      id: "now-showing-The_Great_Flood",
      number: 1,
      name: "The_Great_Flood",
      group: "Now Showing",
      category: "NowShowing", // match sa data-category ng tab
      logo: "https://i.imgur.com/50RyQA7.jpeg",
      url: "https://videos.gia.tv/giatv/movies/playlist/210273/The_Great_Flood_2025_720p_NF_WEB_DL_x264_ESub_Hollymoviehd_2.mp4",
      drm: false,
      drmType: null,
      favorite: false 
	  },
    {
	   id: "now-showing-Shoguns_Ninja",
      number: 2,
      name: "Shoguns_Ninja",
      group: "Now Showing",
      category: "NowShowing", // match sa data-category ng tab
      logo: "https://i.imgur.com/50RyQA7.jpeg",
      url: "https://videos.gia.tv/giatv/movies/playlist/210273/Shoguns_Ninja_2025_720p_WEB_x264_ESub_Hollymoviehd.mp4",
      drm: false,
      drmType: null,
      favorite: false 	
    }
  ];