# AGENTS.md — evacuatorvitebsk-by

Сайт службы эвакуации в Витебске (evacuatorvitebsk.by). Astro 5 static + Tailwind 3 + TS strict.
Шаблон и конвенции — от astro-mosservice (см. его AGENTS.md).

## Команды
npm run dev / npm run build / npm run preview

## Критичные конвенции
- Единый источник данных — src/data/siteConfig.ts (ИП Косьянова А.М., УНП 391900522, телефон). Хардкод NAP запрещён.
- Услуги — Content Collections, src/content/services/*.md, категории: vehicle | situation | roadside | ev.
- Schema.org: TowingService (не AutoRepair), Service+Offer, FAQPage, BreadcrumbList.
- Отзывы: ТОЛЬКО реальные (ReviewsSlider пуст до сбора). aggregateRating НЕ добавлять без реальных отзывов.
- Картинки: placeholder.webp сейчас — заменить на фото парка, 2 размера (-card 480x320, -full 800x500), sharp-скрипт.
- Canonical — на саму страницу (баг референса исправлен в Layout.astro).
- TODO в siteConfig: адрес, координаты базы, email, telegram.
- Деплой: GitHub Pages + CNAME (evacuatorvitebsk.by), base '/'.
