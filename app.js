const WHATSAPP_NUMBER = "18098937371";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, vi tu página web y quiero información sobre una página web para mi negocio.";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

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
  const revealElements = document.querySelectorAll(".reveal");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let lastFocusedElement = null;

  const buildWhatsappUrl = (message) => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  };

  const isMenuOpen = () => {
    return mobileMenu?.classList.contains("is-open");
  };

  const openMenu = () => {
    if (!mobileMenu || !menuBtn) return;

    lastFocusedElement = document.activeElement;

    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
    body.classList.add("menu-open");

    setTimeout(() => {
      closeMenuBtn?.focus();
    }, 80);
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

  const smoothScrollTo = (target) => {
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
  };

  const trapFocusInsideMenu = (event) => {
    if (!isMenuOpen() || event.key !== "Tab" || !mobilePanel) return;

    const focusableElements = mobilePanel.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      if (isMenuOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeMenu);
  }

  if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
      if (event.target === mobileMenu) {
        closeMenu();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen()) {
      closeMenu();
    }

    trapFocusInsideMenu(event);
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

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

  if (whatsappFloat) {
    whatsappFloat.href = buildWhatsappUrl(DEFAULT_WHATSAPP_MESSAGE);
    whatsappFloat.target = "_blank";
    whatsappFloat.rel = "noopener noreferrer";
    whatsappFloat.setAttribute("aria-label", "Escribir por WhatsApp");
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
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
        "Hola, vi tu página web y quiero una propuesta.",
        "",
        `Nombre: ${name}`,
        `WhatsApp: ${phone}`,
        `Correo: ${email}`,
        `Tipo de proyecto: ${projectType || "No especificado"}`,
        "",
        "Idea del proyecto:",
        message
      ].join("\n");

      window.open(buildWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");

      contactForm.reset();
    });
  }

  if ("IntersectionObserver" in window && revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  const sections = Array.from(document.querySelectorAll("main section[id], .hero[id]"));

  if ("IntersectionObserver" in window && sections.length && desktopNavLinks.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          updateActiveNav(visibleSection.target.id);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "-20% 0px -45% 0px"
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }
});