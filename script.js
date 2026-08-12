/* =========================
   MENU
========================= */

function openMenu(){
  document.getElementById("sideMenu").classList.add("active");
  document.getElementById("menuOverlay").classList.add("active");
}

function closeMenu(){
  document.getElementById("sideMenu").classList.remove("active");
  document.getElementById("menuOverlay").classList.remove("active");
}


/* =========================
   DARK MODE
========================= */

function toggleDarkMode(){

  document.body.classList.toggle("dark");

  const isDark =
    document.body.classList.contains("dark");

  localStorage.setItem(
    "addinnews-dark-mode",
    isDark ? "1" : "0"
  );

  document.getElementById("themeBtn").textContent =
    isDark ? "☀️" : "🌙";
}

function loadDarkMode(){

  const saved =
    localStorage.getItem("addinnews-dark-mode");

  if(saved === "1"){

    document.body.classList.add("dark");

    document.getElementById("themeBtn").textContent =
      "☀️";

  }else{

    document.getElementById("themeBtn").textContent =
      "🌙";
  }
}


/* =========================
   JAM REALTIME
========================= */

function updateClock(){

  const clock =
    document.getElementById("realtimeClock");

  if(!clock) return;

  const now = new Date();

  const time =
    new Intl.DateTimeFormat("id-ID",{
      timeZone:"Asia/Jakarta",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(now);

  clock.textContent =
    time + " WIB";
}

updateClock();

setInterval(updateClock,1000);


/* =========================
   VIEW BERITA
========================= */

function increaseArticleView(){

  const key =
    "addinnews_article_views";

  let views = {};

  try{

    views =
      JSON.parse(
        localStorage.getItem(key) || "{}"
      );

  }catch(error){

    views = {};
  }

  views["hut-81-ri"] =
    (views["hut-81-ri"] || 0) + 1;

  localStorage.setItem(
    key,
    JSON.stringify(views)
  );
}


/* =========================
   BUKA ARTIKEL
========================= */

function readArticle(){

  increaseArticleView();

  const home =
    document.getElementById("homeContent");

  const article =
    document.getElementById("articlePage");

  if(home){
    home.style.display = "none";
  }

  if(article){
    article.classList.add("active");
  }

  renderPopular();

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


/* =========================
   TUTUP ARTIKEL
========================= */

function closeArticle(){

  const home =
    document.getElementById("homeContent");

  const article =
    document.getElementById("articlePage");

  if(article){
    article.classList.remove("active");
  }

  if(home){
    home.style.display = "grid";
  }

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


/* =========================
   BAGIKAN
========================= */

function shareArticle(){

  const shareData = {

    title:
      "Semarak Jelang HUT ke-81 RI",

    text:
      "Semarak Jelang HUT ke-81 RI, Suasana 17 Agustus Mulai Terasa di Berbagai Daerah 🇮🇩",

    url:
      window.location.href

  };

  if(navigator.share){

    navigator.share(shareData)
      .catch(function(){});

  }else{

    if(navigator.clipboard){

      navigator.clipboard.writeText(
        window.location.href
      );

      alert("Link artikel berhasil disalin.");

    }else{

      alert("Silakan salin link halaman ini.");

    }
  }
}


/* =========================
   KATEGORI
========================= */

function showCategory(category){

  const newsList =
    document.getElementById("newsList");

  const emptyNews =
    document.getElementById("emptyNews");

  const categoryTitle =
    document.getElementById("categoryTitle");

  const searchInput =
    document.getElementById("searchInput");

  const article =
    document.getElementById("articlePage");

  const home =
    document.getElementById("homeContent");

  if(article){
    article.classList.remove("active");
  }

  if(home){
    home.style.display = "grid";
  }

  if(searchInput){
    searchInput.value = "";
  }

  document.querySelectorAll("nav a")
    .forEach(function(link){

      link.classList.remove("active");

      if(link.dataset.category === category){
        link.classList.add("active");
      }

    });

  const card =
    document.querySelector(".news-card");

  if(
    category === "beranda" ||
    category === "nasional"
  ){

    if(category === "beranda"){

      categoryTitle.innerHTML =
        "📰 Berita Terbaru";

    }else{

      categoryTitle.innerHTML =
        "📰 Berita Nasional";

    }

    newsList.classList.remove("hidden");

    emptyNews.classList.add("hidden");

    if(card){
      card.style.display = "";
    }

  }else{

    const names = {

      internasional:
        "🌎 Berita Internasional",

      teknologi:
        "💻 Berita Teknologi",

      olahraga:
        "⚽ Berita Olahraga",

      ekonomi:
        "💰 Berita Ekonomi",

      lifestyle:
        "✨ Berita Lifestyle"

    };

    categoryTitle.innerHTML =
      names[category] || "📰 Berita";

    newsList.classList.add("hidden");

    emptyNews.classList.remove("hidden");

    document.getElementById("emptyTitle")
      .textContent =
      "Belum Ada Berita";

    document.getElementById("emptyText")
      .textContent =
      "Belum ada berita pada kategori ini.";
  }

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


/* =========================
   PENCARIAN
========================= */

function searchNews(){

  const input =
    document.getElementById("searchInput");

  if(!input) return;

  const query =
    input.value
      .trim()
      .toLowerCase();

  const newsList =
    document.getElementById("newsList");

  const emptyNews =
    document.getElementById("emptyNews");

  const categoryTitle =
    document.getElementById("categoryTitle");

  const cards =
    document.querySelectorAll(".news-card");

  if(!query){

    categoryTitle.innerHTML =
      "📰 Berita Terbaru";

    cards.forEach(function(card){
      card.style.display = "";
    });

    newsList.classList.remove("hidden");
    emptyNews.classList.add("hidden");

    return;
  }

  categoryTitle.innerHTML =
    "🔎 Hasil Pencarian";

  let found = 0;

  cards.forEach(function(card){

    const title =
      (
        card.dataset.title || ""
      ).toLowerCase();

    if(title.includes(query)){

      card.style.display = "";

      found++;

    }else{

      card.style.display = "none";

    }

  });

  if(found === 0){

    newsList.classList.add("hidden");

    emptyNews.classList.remove("hidden");

    document.getElementById("emptyTitle")
      .textContent =
      "Berita Tidak Ditemukan";

    document.getElementById("emptyText")
      .textContent =
      'Tidak ada berita yang sesuai dengan "' +
      query +
      '".';

  }else{

    newsList.classList.remove("hidden");

    emptyNews.classList.add("hidden");

  }
}


/* =========================
   TOP / TERPOPULER
========================= */

function renderPopular(){

  const list =
    document.getElementById("popularList");

  if(!list) return;

  let views = {};

  try{

    views =
      JSON.parse(
        localStorage.getItem(
          "addinnews_article_views"
        ) || "{}"
      );

  }catch(error){

    views = {};

  }

  const count =
    views["hut-81-ri"] || 0;

  list.innerHTML = `

    <div
      class="popular-item"
      onclick="readArticle()"
    >

      <div class="popular-number">
        1
      </div>

      <div>

        <div class="popular-title">
          Semarak Jelang HUT ke-81 RI,
          Suasana 17 Agustus Mulai Terasa
          di Berbagai Daerah 🇮🇩
        </div>

        <div class="popular-views">
          👁 ${count} kali dibuka
        </div>

      </div>

    </div>

  `;
}


/* =========================
   LOADING RINGAN
========================= */

function showLoading(){

  const loading =
    document.getElementById("loadingBox");

  if(!loading) return;

  loading.classList.add("active");

  setTimeout(function(){

    loading.classList.remove("active");

  },350);
}


/* =========================
   SAAT WEBSITE DIBUKA
========================= */

document.addEventListener(
  "DOMContentLoaded",
  function(){

    loadDarkMode();

    updateClock();

    renderPopular();

  }
);
