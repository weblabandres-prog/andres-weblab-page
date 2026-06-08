/* =========================================================
   Andres WebLab \u00b7 app.js
   Sitio est\u00e1tico interactivo con cotizador y CTAs WhatsApp.
   ========================================================= */

const WHATSAPP_NUMBER = "18296431565";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, vi tu p\u00e1gina web y quiero informaci\u00f3n sobre dise\u00f1o web o mantenimiento para mi negocio.";

const formatRD = (amount) => {
  const rounded = Math.round(amount);
  return "RD$" + rounded.toLocaleString("es-DO");
};

const buildWhatsappUrl = (message) => {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

// Mark JS as enabled so CSS can hide things only when JS is available
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector(".header");
  const scrollProgress = document.getElementById("scrollProgress");

  const menuBtn = document.getElementById("menuBtn");
  const closeMenuBtn = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobilePanel = mobileMenu?.querySelector(".mobile-menu__panel");

  const mobileLinks = document.querySelectorAll(".mobile-link, .mobile-menu .btn");
  const desktopNavLinks = document.querySelectorAll(".desktop-nav a");
  const allInternalLinks = document.querySelectorAll('a[href^="#"]');

  const yearEl = document.getElementById("year");
  const contactForm = document.getElementById("contactForm");
  const whatsappFloat = document.querySelector(".whatsapp-float");
  const whatsappIntentLinks = document.querySelectorAll("[data-whatsapp-message]");
  const revealElements = document.querySelectorAll(".reveal");

  const cotizadorForm = document.getElementById("cotizadorForm");
  const summaryList = document.getElementById("summaryList");
  const totalProjectEl = document.getElementById("totalProject");
  const totalMonthlyEl = document.getElementById("totalMonthly");
  const totalMonthlyRow = document.getElementById("totalMonthlyRow");
  const sendQuoteBtn = document.getElementById("sendQuoteBtn");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let lastFocusedElement = null;
  let tickingScroll = false;

  /* ---------------- Mobile menu ---------------- */
  const isMenuOpen = () => mobileMenu?.classList.contains("is-open");

  const openMenu = () => {
    if (!mobileMenu || !menuBtn) return;
    lastFocusedElement = document.activeElement;
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
    body.classList.add("menu-open");
    setTimeout(() => closeMenuBtn?.focus(), 80);
  };

  const closeMenu = () => {
    if (!mobileMenu || !menuBtn) return;
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  };

  const trapFocusInsideMenu = (event) => {
    if (!isMenuOpen() || event.key !== "Tab" || !mobilePanel) return;
    const focusable = mobilePanel.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  menuBtn?.addEventListener("click", () => (isMenuOpen() ? closeMenu() : openMenu()));
  closeMenuBtn?.addEventListener("click", closeMenu);
  mobileMenu?.addEventListener("click", (event) => {
    if (event.target === mobileMenu) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen()) closeMenu();
    trapFocusInsideMenu(event);
  });
  mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

  /* ---------------- Nav active state ---------------- */
  const updateActiveNav = (sectionId) => {
    desktopNavLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${sectionId}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  /* ---------------- Smooth scroll ---------------- */
  const smoothScrollTo = (target) => {
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  allInternalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;
      event.preventDefault();
      smoothScrollTo(targetSection);
      if (targetSection.id) {
        history.pushState(null, "", `#${targetSection.id}`);
        updateActiveNav(targetSection.id);
      }
      closeMenu();
    });
  });

  /* ---------------- Year + WhatsApp float ---------------- */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (whatsappFloat) {
    whatsappFloat.href = buildWhatsappUrl(DEFAULT_WHATSAPP_MESSAGE);
    whatsappFloat.target = "_blank";
    whatsappFloat.rel = "noopener noreferrer";
  }

  whatsappIntentLinks.forEach((link) => {
    const message = link.getAttribute("data-whatsapp-message");
    if (!message) return;
    link.href = buildWhatsappUrl(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  /* ---------------- Scroll progress + header state ---------------- */
  const updateScrollState = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = percent + "%";
    header?.classList.toggle("is-scrolled", scrollTop > 24);
    tickingScroll = false;
  };

  updateScrollState();

  window.addEventListener(
    "scroll",
    () => {
      if (tickingScroll) return;
      tickingScroll = true;
      window.requestAnimationFrame(updateScrollState);
    },
    { passive: true }
  );

  /* ---------------- Contact form -> WhatsApp ---------------- */
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !phone || !email || !message) {
      contactForm.reportValidity();
      return;
    }

    const whatsappMessage = [
      "Hola, vi tu p\u00e1gina web y quiero una propuesta.",
      "",
      `Nombre: ${name}`,
      `WhatsApp: ${phone}`,
      `Correo: ${email}`,
      `Tipo de proyecto: ${projectType || "No especificado"}`,
      "",
      "Idea del proyecto:",
      message,
    ].join("\n");

    window.open(buildWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");
    contactForm.reset();
  });

  /* ---------------- Reveal animations ---------------- */
  if ("IntersectionObserver" in window && revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Slight stagger when several elements appear together
            const delay = Math.min(index * 60, 240);
            setTimeout(() => entry.target.classList.add("is-visible"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );
    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------- Section active observer ---------------- */
  const sections = Array.from(desktopNavLinks)
    .map((link) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return null;
      return document.getElementById(href.slice(1));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length && desktopNavLinks.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) updateActiveNav(visible.target.id);
      },
      {
        threshold: [0.3, 0.6],
        rootMargin: "-20% 0px -45% 0px",
      }
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* ---------------- COTIZADOR ---------------- */
  if (cotizadorForm) {
    const bumpAnimate = (el) => {
      if (!el) return;
      el.classList.remove("is-bumped");
      // force reflow to re-trigger animation
      void el.offsetWidth;
      el.classList.add("is-bumped");
    };

    const updateQuote = (animate = false) => {
      const formData = new FormData(cotizadorForm);
      const baseInput = cotizadorForm.querySelector('input[name="base"]:checked');
      const maintenanceInput = cotizadorForm.querySelector('input[name="maintenance"]:checked');
      const urgencyInput = cotizadorForm.querySelector('input[name="urgency"]:checked');
      const extrasInputs = cotizadorForm.querySelectorAll('input[name="extra"]:checked');

      const basePrice = baseInput ? Number(baseInput.dataset.price) || 0 : 0;
      const baseLabel = baseInput ? baseInput.value : "";

      const extras = [];
      let extrasTotal = 0;
      extrasInputs.forEach((input) => {
        const price = Number(input.dataset.price) || 0;
        extrasTotal += price;
        extras.push({ label: input.value, price });
      });

      const multiplier = urgencyInput ? Number(urgencyInput.dataset.multiplier) || 1 : 1;
      const urgencyLabel = urgencyInput ? urgencyInput.value : "";

      const monthly = maintenanceInput ? Number(maintenanceInput.dataset.monthly) || 0 : 0;
      const maintenanceLabel = maintenanceInput ? maintenanceInput.value : "";

      const subtotal = basePrice + extrasTotal;
      const projectTotal = subtotal * multiplier;

      // Build summary list
      const items = [];
      if (baseLabel) items.push(`<li><span>${baseLabel}</span><strong>${formatRD(basePrice)}</strong></li>`);
      extras.forEach((extra) => {
        items.push(`<li><span>+ ${extra.label}</span><strong>${formatRD(extra.price)}</strong></li>`);
      });
      if (multiplier > 1) {
        const surcharge = subtotal * (multiplier - 1);
        items.push(`<li><span>Entrega express (+20%)</span><strong>${formatRD(surcharge)}</strong></li>`);
      }
      if (monthly > 0) {
        items.push(`<li><span>${maintenanceLabel}</span><strong>${formatRD(monthly)}/mes</strong></li>`);
      }

      if (summaryList) {
        summaryList.innerHTML = items.length
          ? items.join("")
          : '<li class="summary-empty">A\u00fan no seleccionas nada</li>';
      }

      if (totalProjectEl) {
        totalProjectEl.textContent = formatRD(projectTotal);
        if (animate) bumpAnimate(totalProjectEl);
      }

      if (totalMonthlyRow && totalMonthlyEl) {
        if (monthly > 0) {
          totalMonthlyRow.hidden = false;
          totalMonthlyEl.textContent = formatRD(monthly) + "/mes";
          if (animate) bumpAnimate(totalMonthlyEl);
        } else {
          totalMonthlyRow.hidden = true;
        }
      }

      // Store data on the send button for later use
      sendQuoteBtn?.setAttribute("data-project-total", String(projectTotal));
      sendQuoteBtn?.setAttribute("data-monthly", String(monthly));
      sendQuoteBtn?.setAttribute("data-base", baseLabel);
      sendQuoteBtn?.setAttribute("data-extras", JSON.stringify(extras.map((e) => e.label)));
      sendQuoteBtn?.setAttribute("data-maintenance", maintenanceLabel);
      sendQuoteBtn?.setAttribute("data-urgency", urgencyLabel);
    };

    cotizadorForm.addEventListener("change", () => updateQuote(true));
    cotizadorForm.addEventListener("input", () => updateQuote(true));

    updateQuote(false);

    sendQuoteBtn?.addEventListener("click", () => {
      const projectTotal = Number(sendQuoteBtn.getAttribute("data-project-total") || 0);
      const monthly = Number(sendQuoteBtn.getAttribute("data-monthly") || 0);
      const base = sendQuoteBtn.getAttribute("data-base") || "";
      const extras = JSON.parse(sendQuoteBtn.getAttribute("data-extras") || "[]");
      const maintenance = sendQuoteBtn.getAttribute("data-maintenance") || "";
      const urgency = sendQuoteBtn.getAttribute("data-urgency") || "";

      const lines = [
        "Hola Andres, arm\u00e9 mi cotizaci\u00f3n desde la p\u00e1gina:",
        "",
        `\u2022 Tipo de proyecto: ${base}`,
      ];

      if (extras.length) {
        lines.push("\u2022 Extras:");
        extras.forEach((extra) => lines.push(`   - ${extra}`));
      } else {
        lines.push("\u2022 Extras: ninguno");
      }

      lines.push(`\u2022 Mantenimiento: ${maintenance}`);
      lines.push(`\u2022 Entrega: ${urgency}`);
      lines.push("");
      lines.push(`Total estimado del proyecto: ${formatRD(projectTotal)}`);
      if (monthly > 0) {
        lines.push(`Mantenimiento mensual: ${formatRD(monthly)}/mes`);
      }
      lines.push("");
      lines.push("Quisiera confirmar el alcance y los siguientes pasos. Gracias!");

      const message = lines.join("\n");
      window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
    });
  }
});
