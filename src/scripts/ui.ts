// Шапка: компактный вид после прокрутки; мобильное меню закрывается после выбора пункта.
const header = document.querySelector<HTMLElement>("[data-header]");
const menu = document.querySelector<HTMLDetailsElement>("[data-mnav]");

if (header) {
  const sentinel = document.createElement("div");
  sentinel.setAttribute("aria-hidden", "true");
  sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:120px;pointer-events:none";
  document.body.prepend(sentinel);
  new IntersectionObserver(([e]) => header.classList.toggle("is-compact", !e.isIntersecting)).observe(sentinel);
}

if (menu) {
  menu.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;
    if (t.closest("a[href^='#']")) menu.open = false;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary")?.focus();
    }
  });
}

// Нижня панель «Подзвонити / Telegram» (≤ 767 px): з'являється, коли перший екран пішов з виду.
const bar = document.querySelector<HTMLElement>("[data-mbar]");
const hero = document.getElementById("hero");
const contactsBlock = document.getElementById("kontakty");
if (bar && hero && "IntersectionObserver" in window) {
  let heroVisible = true;
  let contactsVisible = false;
  const update = () => bar.classList.toggle("is-shown", !heroVisible && !contactsVisible);
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; update(); }, { threshold: 0 }).observe(hero);
  if (contactsBlock) new IntersectionObserver(([e]) => { contactsVisible = e.isIntersecting; update(); }, { threshold: 0.35 }).observe(contactsBlock);
} else if (bar) {
  bar.classList.add("is-shown");
}
