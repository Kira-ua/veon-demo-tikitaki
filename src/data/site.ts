// Реальні контакти TikiTaki — лише з veon/client.json (company.contacts, socials).
export const contacts = {
  phone: "+38 073 91 72 234",
  phoneHref: "tel:+380739172234",
  telegram: "https://t.me/tikitakicomua",
  email: "sales.tikitaki@gmail.com",
  emailHref: "mailto:sales.tikitaki@gmail.com",
  hours: "Пн–Пт 9:00–18:00",
  hoursOff: "Сб–Нд — вихідні",
  address: "12210, Житомирська обл., с. Макалевичі, вул. О. Босого, 211",
  company: "ФОП Уваров Андрій Євгенович",
} as const;

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/tikitaki.com.ua/", icon: "instagram" },
  { name: "TikTok", href: "https://www.tiktok.com/@tikitaki.com.ua", icon: "tiktok" },
  { name: "Facebook", href: "https://www.facebook.com/tikitaki.ua/", icon: "facebook" },
  { name: "YouTube", href: "https://www.youtube.com/@tikitaki.onlineshop", icon: "youtube" },
  { name: "Telegram", href: "https://t.me/tikitakicomua", icon: "telegram" },
] as const;

export const NOTE = "Розділ у розробці";

export const nav = [
  { label: "Напрями", href: "#napryamy" },
  { label: "Комплекти", href: "#komplekty" },
  { label: "Волонтерам і дилерам", href: "#spivpratsia" },
  { label: "Оплата і доставка", href: "#zamovlennya" },
  { label: "Контакти", href: "#kontakty" },
] as const;
