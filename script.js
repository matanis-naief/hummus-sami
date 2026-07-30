const menuData = {
  hummus: [
    {
      name: "חומוס גרגירים",
      description: "חומוס עם גרגירים ומרקם עשיר.",
      price: "₪30"
    },
    {
      name: "חומוס טחינה",
      description: "חומוס עם שכבת טחינה עשירה.",
      price: "₪30"
    },
    {
      name: "חומוס משאוושה",
      description: "חומוס מועדף עם טעם עמוק ומיוחד.",
      price: "₪30"
    },
    {
      name: "חומוס פול",
      description: "חומוס עם פול מבושל ותבלינים.",
      price: "₪30"
    },
    {
      name: "חומוס פטריות ובצל",
      description: "חומוס עם פטריות ובצל מטוגן.",
      price: "₪47"
    },
    {
      name: "חומוס קומפלט",
      description: "חומוס עם שילוב עשיר של טעמים.",
      price: "₪30"
    },
    {
      name: "חומוס רגיל",
      description: "גרסה קלאסית ומרשימה.",
      price: "₪30"
    },
    {
      name: "חומוס עם בשר עגל",
      description: "חומוס עם בשר עגל איכותי.",
      price: "₪50"
    },
    {
      name: "חומוס עם בשר עגל, פטריות ובצל",
      description: "חומוס עם בשר עגל, פטריות ובצל.",
      price: "₪52"
    },
    {
      name: "חומוס עם עוף ובצל",
      description: "חומוס עם עוף ובצל מטוגן.",
      price: "₪50"
    },
    {
      name: "חומוס עם עוף, פטריות ובצל",
      description: "חומוס עם עוף, פטריות ובצל.",
      price: "₪52"
    },
    {
      name: "מנה משאוושה",
      description: "מנה מיוחדת עם טעם עשיר.",
      price: "₪30"
    },
    {
      name: "מנה פול",
      description: "מנה עם פול ותבלינים.",
      price: "₪30"
    },
    {
      name: "השקשוקה של סמי",
      description: "השקשוקה המיוחדת של סמי.",
      price: "₪51"
    },
    {
      name: "חמשוקה של סמי",
      description: "מנת חומוס-שקשוקה ייחודית.",
      price: "₪51"
    }
  ],
  pitas: [
    {
      name: "פיתה חומוס",
      description: "פיתה טרייה עם חומוס, סלט, חמוצים וטחינה.",
      price: "₪24"
    },
    {
      name: "פיתה פלאפל",
      description: "כדורי פלאפל, חומוס, סלט, כרוב וטחינה.",
      price: "₪26"
    },
    {
      name: "פיתה בשר",
      description: "בשר מתובל, חומוס, בצל, פטרוזיליה וטחינה.",
      price: "₪38"
    },
    {
      name: "פיתה עוף",
      description: "רצועות עוף מתובלות, ירקות טריים וטחינה.",
      price: "₪35"
    }
  ],
  sides: [
    {
      name: "סלט קטן",
      description: "סלט טרופי קליל ומרענן.",
      price: "₪24"
    },
    {
      name: "סלט גדול",
      description: "סלט גדול עם ירקות טריים ותיבול עשיר.",
      price: "₪32"
    },
    {
      name: "צ׳יפס קטן",
      description: "צ׳יפס פריך ומיני.",
      price: "₪24"
    },
    {
      name: "צ׳יפס גדול",
      description: "צ׳יפס גדול וקריספי.",
      price: "₪32"
    }
  ],
  drinks: [
    {
      name: "שתייה קלה",
      description: "שתייה קלה עם טעם פשוט ונעים.",
      price: "₪10"
    },
    {
      name: "קנקן לימונדה",
      description: "קנקן לימונדהRefreshing and fresh.",
      price: "₪25"
    }
  ],
  desserts: [
    {
      name: "מלבי",
      description: "מלבי קרמי עם מי ורדים, קוקוס ובוטנים.",
      price: "₪18"
    },
    {
      name: "בקלאווה",
      description: "מאפה פילו פריך במילוי אגוזים וסירופ.",
      price: "₪16"
    },
    {
      name: "כנאפה אישית",
      description: "כנאפה חמה עם גבינה, קדאיף ופיסטוק.",
      price: "₪28"
    }
  ]
};

const menuGrid = document.getElementById("menuGrid");
const categoryButtons = document.querySelectorAll(".category-btn");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderMenu(category) {
  const items = menuData[category] || [];

  menuGrid.innerHTML = items.map((item) => `
    <article class="menu-item reveal visible">
      <div class="menu-item-body">
        <div class="menu-title-wrap">
          <h3>${item.name}</h3>
        </div>
        <p>${item.description}</p>
      </div>
      <span class="price" aria-label="מחיר ${item.price}">${item.price}</span>
    </article>
  `).join("");
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderMenu(button.dataset.category);
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

function closeMenu() {
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  toggle.setAttribute("aria-expanded", "false");
}

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!nav.classList.contains("open")) {
    return;
  }
  if (nav.contains(event.target) || toggle.contains(event.target)) {
    return;
  }
  closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const header = document.querySelector(".site-header");
let scrollTicking = false;

function updateHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 40);
  scrollTicking = false;
}

window.addEventListener("scroll", () => {
  if (scrollTicking) {
    return;
  }
  scrollTicking = true;
  window.requestAnimationFrame(updateHeaderState);
}, { passive: true });

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("visible");
    obs.unobserve(entry.target);
  });
}, { threshold: 0.15, rootMargin: "0px 0px -30px 0px" });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") {
      return;
    }
    const target = document.querySelector(targetId);
    if (!target) {
      return;
    }

    event.preventDefault();
    const behavior = prefersReducedMotion ? "auto" : "smooth";
    target.scrollIntoView({ behavior, block: "start" });
    history.replaceState(null, "", targetId);
  });
});

function setupReviewsSlider() {
  const slider = document.querySelector(".reviews-slider");
  if (!slider) {
    return;
  }

  const track = slider.querySelector(".reviews-track");
  const cards = Array.from(slider.querySelectorAll(".review-card"));
  const prevButton = slider.querySelector(".reviews-prev");
  const nextButton = slider.querySelector(".reviews-next");
  const dotsWrap = document.querySelector(".reviews-dots");
  const viewport = slider.querySelector(".reviews-viewport");

  let currentIndex = 0;
  let cardsPerView = 1;
  let maxIndex = 0;
  let autoplayId = null;
  let touchStartX = 0;
  let touchEndX = 0;

  function calculateCardsPerView() {
    if (window.innerWidth >= 1024) {
      return 3;
    }
    if (window.innerWidth >= 768) {
      return 2;
    }
    return 1;
  }

  function createDots() {
    dotsWrap.innerHTML = "";
    for (let i = 0; i <= maxIndex; i += 1) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "reviews-dot";
      dot.setAttribute("aria-label", `מעבר לחוות דעת ${i + 1}`);
      dot.addEventListener("click", () => {
        goTo(i);
      });
      dotsWrap.append(dot);
    }
  }

  function updateDots() {
    const dots = dotsWrap.querySelectorAll(".reviews-dot");
    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }

  function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === maxIndex;
  }

  function updateTrackPosition() {
    const cardWidth = 100 / cardsPerView;
    track.style.transform = `translateX(${currentIndex * cardWidth}%)`;
    updateDots();
    updateButtons();
  }

  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    updateTrackPosition();
  }

  function next() {
    if (currentIndex >= maxIndex) {
      goTo(0);
      return;
    }
    goTo(currentIndex + 1);
  }

  function previous() {
    if (currentIndex <= 0) {
      goTo(maxIndex);
      return;
    }
    goTo(currentIndex - 1);
  }

  function stopAutoplay() {
    if (!autoplayId) {
      return;
    }
    window.clearInterval(autoplayId);
    autoplayId = null;
  }

  function startAutoplay() {
    stopAutoplay();
    if (prefersReducedMotion) {
      return;
    }
    autoplayId = window.setInterval(next, 5500);
  }

  function onResize() {
    const nextCardsPerView = calculateCardsPerView();
    if (nextCardsPerView === cardsPerView) {
      return;
    }
    cardsPerView = nextCardsPerView;
    maxIndex = Math.max(0, cards.length - cardsPerView);
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    track.style.setProperty("--cards-per-view", String(cardsPerView));
    createDots();
    updateTrackPosition();
  }

  prevButton.addEventListener("click", () => {
    previous();
  });

  nextButton.addEventListener("click", () => {
    next();
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);
  slider.addEventListener("focusin", stopAutoplay);
  slider.addEventListener("focusout", startAutoplay);

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      next();
      stopAutoplay();
    }
    if (event.key === "ArrowRight") {
      previous();
      stopAutoplay();
    }
  });

  viewport.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  viewport.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].clientX;
    const delta = touchStartX - touchEndX;
    if (Math.abs(delta) < 35) {
      return;
    }
    if (delta > 0) {
      next();
    } else {
      previous();
    }
    stopAutoplay();
  }, { passive: true });

  window.addEventListener("resize", onResize, { passive: true });

  cardsPerView = calculateCardsPerView();
  maxIndex = Math.max(0, cards.length - cardsPerView);
  track.style.setProperty("--cards-per-view", String(cardsPerView));
  createDots();
  updateTrackPosition();
  startAutoplay();
}

function initLoader() {
  const loader = document.getElementById("siteLoader");
  if (!loader) {
    return;
  }

  const startTime = performance.now();
  const minVisibleTime = 420;
  const maxVisibleTime = 1200;
  let hidden = false;

  function hideLoader() {
    if (hidden) {
      return;
    }
    hidden = true;
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-loaded");
    loader.classList.add("is-hidden");
  }

  window.setTimeout(hideLoader, maxVisibleTime);

  window.addEventListener("load", () => {
    const elapsed = performance.now() - startTime;
    const delay = Math.max(0, minVisibleTime - elapsed);
    window.setTimeout(hideLoader, delay);
  }, { once: true });
}

document.getElementById("year").textContent = new Date().getFullYear();
renderMenu("hummus");
setupReviewsSlider();
updateHeaderState();
initLoader();
