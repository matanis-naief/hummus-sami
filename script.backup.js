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

function renderMenu(category) {
  const items = menuData[category] || [];
  const showDescriptions = category !== "sides" && category !== "drinks";

  menuGrid.innerHTML = items.map(item => `
    <article class="menu-item reveal visible">
      <div>
        <h3>${item.name}</h3>
        ${showDescriptions ? `<p>${item.description}</p>` : ""}
      </div>
      <span class="price">${item.price}</span>
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

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

document.getElementById("year").textContent = new Date().getFullYear();

renderMenu("hummus");
