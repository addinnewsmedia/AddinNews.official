const darkBtn =
  document.getElementById("darkBtn");

const menuBtn =
  document.getElementById("menuBtn");

const nav =
  document.getElementById("nav");

const searchBtn =
  document.getElementById("searchBtn");

const searchBox =
  document.getElementById("searchBox");

const searchInput =
  document.getElementById("searchInput");

const clock =
  document.getElementById("clock");

const topBtn =
  document.getElementById("topBtn");


// ==========================
// DARK MODE
// ==========================

if (
  localStorage.getItem("addinnews-dark") === "1"
) {

  document.body.classList.add("dark");

  darkBtn.textContent = "☀️";

}


darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const dark =
    document.body.classList.contains("dark");

  localStorage.setItem(
    "addinnews-dark",
    dark ? "1" : "0"
  );

  darkBtn.textContent =
    dark ? "☀️" : "🌙";

});


// ==========================
// MENU MOBILE
// ==========================

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("open");

});


// ==========================
// SEARCH
// ==========================

searchBtn.addEventListener("click", () => {

  searchBox.classList.toggle("show");

  if (
    searchBox.classList.contains("show")
  ) {

    searchInput.focus();

  }

});


// ==========================
// JAM WIB
// ==========================

function updateClock() {

  const now = new Date();

  const parts =
    new Intl.DateTimeFormat(
      "id-ID",
      {
        timeZone: "Asia/Jakarta",

        hour: "2-digit",

        minute: "2-digit",

        second: "2-digit",

        hour12: false
      }
    ).formatToParts(now);


  const get = (type) => {

    const part =
      parts.find(
        item =>
          item.type === type
      );

    return part
      ? part.value
      : "00";

  };


  clock.textContent =
    `${get("hour")}:${get("minute")}:${get("second")} WIB`;

}


updateClock();

setInterval(
  updateClock,
  1000
);


// ==========================
// TOMBOL KE ATAS
// ==========================

window.addEventListener(
  "scroll",
  () => {

    topBtn.classList.toggle(
      "show",
      window.scrollY > 350
    );

  }
);


topBtn.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);


// ==========================
// TUTUP MENU HP
// ==========================

document
  .querySelectorAll(".nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove(
          "open"
        );

      }
    );

  });
