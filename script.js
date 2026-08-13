/* MENU */

function openMenu(){
  document.getElementById("sideMenu").classList.add("active");
  document.getElementById("menuOverlay").classList.add("active");
}

function closeMenu(){
  document.getElementById("sideMenu").classList.remove("active");
  document.getElementById("menuOverlay").classList.remove("active");
}


/* DARK MODE */

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
  }
}


/* JAM REALTIME */

function updateClock(){

  const now = new Date();

  const time = new Intl.DateTimeFormat("id-ID",{
    timeZone:"Asia/Jakarta",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit",
    hour12:false
  }).format(now);

  document.getElementById("realtimeClock").textContent =
    time + " WIB";
}

updateClock();

setInterval(updateClock,1000);


/* JUMLAH VIEW */

function increaseArticleView(articleId){

  const key =
    "addinnews_article_views";

  const views =
    JSON.parse(
      localStorage.getItem(key) || "{}"
    );

  views[articleId] =
    (views[articleId] || 0) + 1;

  localStorage.setItem(
    key,
    JSON.stringify(views)
  );
}


/* BUKA ARTIKEL */

function readArticle(articleId){

  increaseArticleView(articleId);

  const articlePage =
    document.getElementById("articlePage");

  const homeContent =
    document.getElementById("homeContent");

  const articleContent =
    document.getElementById("articleContent");


  if(articleId === "hut-81-ri"){

    articleContent.innerHTML = `

      <img
      class="article-page-image"
      src="berita0.png"
      alt="Semarak menjelang HUT ke-81 Republik Indonesia"
      >

      <div class="article-page-content">

      <button class="back-button" onclick="closeArticle()">
      ← Kembali ke Berita
      </button>

      <span class="news-category">NASIONAL</span>

      <h1 class="news-title">
      Semarak Jelang HUT ke-81 RI, Suasana 17 Agustus Mulai Terasa di Berbagai Daerah 🇮🇩
      </h1>

      <div class="article-info">
      <span>📅 12 Agustus 2026</span>
      <span>•</span>
      <span>⏱️ 2 menit baca</span>
      </div>

      <div class="article-actions">

      <button class="share-button" onclick="shareArticle()">
      📤 Bagikan Artikel
      </button>

      </div>

      <p>
      Menjelang peringatan Hari Ulang Tahun (HUT) ke-81 Republik Indonesia pada 17 Agustus 2026, suasana kemeriahan mulai terasa di berbagai daerah.
      </p>

      <p>
      Warga mulai mempersiapkan berbagai kegiatan untuk menyambut hari kemerdekaan, mulai dari menghias lingkungan dengan bendera Merah Putih hingga mengadakan berbagai perlombaan khas 17 Agustus.
      </p>

      <h3 class="news-subtitle">
      Berbagai Persiapan Mulai Dilakukan
      </h3>

      <p>
      Di sejumlah lingkungan, warga terlihat mulai memasang bendera Merah Putih dan berbagai dekorasi bernuansa merah putih. Kegiatan tersebut menjadi salah satu cara masyarakat ikut memeriahkan peringatan kemerdekaan Indonesia.
      </p>

      <p>
      Selain dekorasi, berbagai perlombaan juga mulai dipersiapkan. Lomba seperti makan kerupuk, balap karung, memasukkan pensil ke botol, hingga panjat pinang masih menjadi kegiatan yang banyak dinantikan masyarakat.
      </p>

      <h3 class="news-subtitle">
      Bukan Sekadar Perlombaan
      </h3>

      <p>
      Kemeriahan 17 Agustus bukan hanya tentang perlombaan dan hadiah. Kegiatan tersebut juga menjadi momen bagi masyarakat untuk berkumpul, mempererat kebersamaan, serta mengenang perjuangan para pahlawan dalam merebut kemerdekaan.
      </p>

      <p>
      Dengan semakin dekatnya tanggal 17 Agustus, suasana perayaan diperkirakan akan semakin meriah di berbagai wilayah.
      </p>

      <p>
      <strong>Dirgahayu Republik Indonesia ke-81! 🇮🇩</strong>
      </p>

      <p>
      Catatan: Detail kegiatan dapat berbeda di setiap daerah sesuai agenda masyarakat setempat.
      </p>

      </div>

    `;

  }


  if(articleId === "perseid-2026"){

    articleContent.innerHTML = `

      <img
      class="article-page-image"
      src="berita1.png"
      alt="Hujan Meteor Perseid"
      >

      <div class="article-page-content">

      <button class="back-button" onclick="closeArticle()">
      ← Kembali ke Berita
      </button>

      <span class="news-category">INTERNASIONAL</span>

      <h1 class="news-title">
      Hujan Meteor Perseid Capai Puncak Hari Ini, Bisa Disaksikan dari Indonesia 🌠
      </h1>

      <div class="article-info">
      <span>📅 13 Agustus 2026</span>
      <span>•</span>
      <span>⏱️ 2 menit baca</span>
      </div>

      <div class="article-actions">

      <button class="share-button" onclick="shareArticle()">
      📤 Bagikan Artikel
      </button>

      </div>

      <p>
      Jakarta — Fenomena astronomi kembali menghiasi langit. Hujan meteor Perseid mencapai puncaknya pada Kamis, 13 Agustus 2026, dan masyarakat Indonesia berkesempatan untuk menyaksikan fenomena langit tersebut.
      </p>

      <p>
      Hujan meteor Perseid terjadi ketika Bumi melewati debu dan material yang ditinggalkan oleh komet 109P/Swift-Tuttle. Material tersebut memasuki atmosfer Bumi dengan kecepatan tinggi dan terbakar, sehingga terlihat seperti garis cahaya yang melintas di langit.
      </p>

      <h3 class="news-subtitle">
      Kapan Waktu Terbaik Melihatnya?
      </h3>

      <p>
      Pengamatan dapat dilakukan setelah tengah malam hingga menjelang subuh. Kondisi terbaik adalah ketika langit cerah dan jauh dari cahaya lampu perkotaan.
      </p>

      <p>
      Menariknya, fenomena ini tidak membutuhkan teleskop atau binokular. Pengamat dapat melihat meteor dengan mata telanjang selama kondisi langit mendukung.
      </p>

      <h3 class="news-subtitle">
      Cari Tempat yang Minim Polusi Cahaya
      </h3>

      <p>
      Bagi masyarakat yang ingin mencoba mengabadikan fenomena ini, pilih lokasi yang memiliki pandangan langit luas dan minim cahaya buatan.
      </p>

      <p>
      Matikan atau jauhi sumber cahaya terang dan berikan waktu bagi mata untuk menyesuaikan diri dengan kondisi gelap. Semakin gelap langit, semakin besar peluang untuk melihat meteor.
      </p>

      <p>
      Jangan sampai terlewat! Hujan meteor Perseid menjadi salah satu fenomena langit yang menarik untuk diamati pada pertengahan Agustus 2026.
      </p>

      <p>
      <strong>AddinNews — Berita Terkini & Trending Hari Ini</strong>
      </p>

      </div>

    `;

  }


  homeContent.style.display = "none";

  articlePage.classList.add("active");

  renderPopular();

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


/* KEMBALI */

function closeArticle(){

  document.getElementById("articlePage")
    .classList.remove("active");

  document.getElementById("homeContent")
    .style.display = "grid";

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


/* SHARE */

function shareArticle(){

  const shareData = {
    title:
      "AddinNews — Berita Terkini",

    text:
      "Baca berita terbaru di AddinNews.",

    url:
      window.location.href
  };

  if(navigator.share){

    navigator.share(shareData)
      .catch(function(){});

  }else{

    navigator.clipboard.writeText(
      window.location.href
    );

    alert("Link artikel berhasil disalin.");
  }
}


/* KATEGORI */

function showCategory(category){

  const newsList =
    document.getElementById("newsList");

  const emptyNews =
    document.getElementById("emptyNews");

  const categoryTitle =
    document.getElementById("categoryTitle");

  const searchInput =
    document.getElementById("searchInput");

  document.getElementById("articlePage")
    .classList.remove("active");

  document.getElementById("homeContent")
    .style.display = "grid";

  searchInput.value = "";

  document.querySelectorAll("nav a")
    .forEach(function(link){

      link.classList.remove("active");

      if(link.dataset.category === category){

        link.classList.add("active");
      }
    });

  const cards =
    document.querySelectorAll(".news-card");

  if(category === "beranda"){

    categoryTitle.innerHTML =
      "📰 Berita Terbaru";

    newsList.classList.remove("hidden");
    emptyNews.classList.add("hidden");

    cards.forEach(function(card){
      card.style.display = "";
    });

  }else if(category === "nasional"){

    categoryTitle.innerHTML =
      "📰 Berita Nasional";

    newsList.classList.remove("hidden");
    emptyNews.classList.add("hidden");

    cards.forEach(function(card){

      card.style.display =
        card.dataset.category === "nasional"
        ? ""
        : "none";

    });

  }else if(category === "internasional"){

    categoryTitle.innerHTML =
      "🌎 Berita Internasional";

    newsList.classList.remove("hidden");
    emptyNews.classList.add("hidden");

    cards.forEach(function(card){

      card.style.display =
        card.dataset.category === "internasional"
        ? ""
        : "none";

    });

  }else{

    const names = {

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
      names[category];

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


/* PENCARIAN */

function searchNews(){

  const query =
    document.getElementById("searchInput")
      .value
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

  document.getElementById("articlePage")
    .classList.remove("active");

  document.getElementById("homeContent")
    .style.display = "grid";

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
      card.dataset.title.toLowerCase();

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


/* TOP BERITA & TERPOPULER */

const newsRanking = [
  {
    id: "perseid-2026",
    title: "Hujan Meteor Perseid Capai Puncak Hari Ini, Bisa Disaksikan dari Indonesia 🌠"
  },
  {
    id: "hut-81-ri",
    title: "Semarak Jelang HUT ke-81 RI, Suasana 17 Agustus Mulai Terasa di Berbagai Daerah 🇮🇩"
  }
];


/* TOP BERITA */

function renderTopNews(){

  const topBox =
    document.querySelector(".breaking-news-item");

  if(!topBox) return;

  topBox.innerHTML = "";

  newsRanking.slice(0,5).forEach(function(news,index){

    const item =
      document.createElement("div");

    item.className = "top-news-row";

    item.onclick = function(){
      readArticle(news.id);
    };

    item.innerHTML = `

      <span class="breaking-tag">
        ${index + 1}
      </span>

      <span class="breaking-text">
        ${news.title}
      </span>

      <span class="breaking-arrow">
        →
      </span>

    `;

    topBox.appendChild(item);

  });

}


/* TERPOPULER */

function renderPopular(){

  const list =
    document.getElementById("popularList");

  if(!list) return;

  const views =
    JSON.parse(
      localStorage.getItem(
        "addinnews_article_views"
      ) || "{}"
    );

  const ranked =
    newsRanking
      .map(function(news){

        return {
          id: news.id,
          title: news.title,
          views: views[news.id] || 0
        };

      })
      .sort(function(a,b){

        return b.views - a.views;

      })
      .slice(0,5);


  list.innerHTML = "";


  ranked.forEach(function(news,index){

    const item =
      document.createElement("div");

    item.className =
      "popular-item";

    item.onclick = function(){

      readArticle(news.id);

    };


    item.innerHTML = `

      <div class="popular-number">
        ${index + 1}
      </div>

      <div>

        <div class="popular-title">
          ${news.title}
        </div>

        <div class="popular-views">
          ${news.views} views
        </div>

      </div>

    `;


    list.appendChild(item);

  });

}


/* LOADING RINGAN */

function showLoading(){

  const loading =
    document.getElementById("loadingBox");

  loading.classList.add("active");

  setTimeout(function(){

    loading.classList.remove("active");

  },350);
}


/* START */

loadDarkMode();

renderTopNews();

renderPopular();
