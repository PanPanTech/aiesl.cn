(function () {
  "use strict";

  const mobileToggle = document.querySelector("[data-mobile-toggle]");
  const mobilePanel = document.querySelector("[data-mobile-panel]");
  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener("click", () => {
      const open = mobileToggle.getAttribute("aria-expanded") !== "true";
      mobileToggle.setAttribute("aria-expanded", String(open));
      mobileToggle.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
      mobilePanel.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });
  }

  const menuButton = document.querySelector("[data-product-menu-button]");
  const megaMenu = document.querySelector("[data-mega-menu]");
  if (menuButton && megaMenu) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      megaMenu.classList.toggle("is-open", open);
    });
  }

  const siteHeader = document.querySelector("[data-site-header]");
  if (siteHeader) {
    let isScrolled = false;
    let scrollFrame = 0;
    const update = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        const nextState = window.scrollY > 10;
        if (nextState !== isScrolled) {
          isScrolled = nextState;
          siteHeader.classList.toggle("is-scrolled", isScrolled);
        }
        scrollFrame = 0;
      });
    };
    window.addEventListener("scroll", update, { passive: true });
  }

  document.querySelectorAll("[data-product-carousel]").forEach((carousel) => {
    const slides = [...carousel.querySelectorAll("[data-carousel-slide]")];
    const tabs = [...carousel.querySelectorAll("[data-carousel-tab]")];
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const status = carousel.querySelector("[data-carousel-status]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeIndex = 0;
    let timer = null;

    const loadSlideImage = (index) => {
      const image = slides[index]?.querySelector("img[data-src]");
      if (!image) return;
      image.fetchPriority = "high";
      image.src = image.dataset.src;
      delete image.dataset.src;
    };

    const show = (requestedIndex, announce) => {
      activeIndex = (requestedIndex + slides.length) % slides.length;
      loadSlideImage(activeIndex);
      slides.forEach((slide, index) => {
        const active = index === activeIndex;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      tabs.forEach((tab, index) => {
        const active = index === activeIndex;
        tab.setAttribute("aria-selected", String(active));
        tab.setAttribute("tabindex", active ? "0" : "-1");
      });
      if (announce && status) status.textContent = `当前展示：${tabs[activeIndex]?.textContent.trim() || ""}`;
    };

    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = null;
    };
    const start = () => {
      stop();
      if (!reduceMotion && slides.length > 1 && !document.hidden) {
        timer = window.setInterval(() => show(activeIndex + 1, false), 7000);
      }
    };

    previous?.addEventListener("click", () => { show(activeIndex - 1, true); start(); });
    next?.addEventListener("click", () => { show(activeIndex + 1, true); start(); });
    tabs.forEach((tab, index) => {
      tab.addEventListener("pointerenter", () => loadSlideImage(index), { once: true });
      tab.addEventListener("click", () => { show(index, true); start(); });
      tab.addEventListener("keydown", (event) => {
        let target = null;
        if (event.key === "ArrowRight") target = activeIndex + 1;
        if (event.key === "ArrowLeft") target = activeIndex - 1;
        if (event.key === "Home") target = 0;
        if (event.key === "End") target = tabs.length - 1;
        if (target === null) return;
        event.preventDefault();
        show(target, true);
        tabs[activeIndex].focus();
        start();
      });
    });
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) start();
    });
    document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); else start(); });
    show(0, false);
    start();
  });

  document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
})();
