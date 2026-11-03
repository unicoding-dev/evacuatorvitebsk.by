export const siteConfig = {
  name: 'Эвакуатор Витебск',
  legalName: 'ИП Косьянова А. М.',
  legalShortName: 'ИП Косьянова',
  unp: '391900522',
  currency: 'BYN',
  currencyName: 'Белорусский рубль',
  title: 'Эвакуатор в Витебске круглосуточно — вызов 24/7 | Эвакуатор Витебск',
  description: 'Эвакуатор в Витебске и области: подача от 20 минут, легковые, внедорожники, микроавтобусы, спецтехника, электромобили. Выездная зарядка электромобилей. Автотехпомощь на дороге 24/7.',
  url: 'https://unicoding-dev.github.io/evacuatorvitebsk.by', // вернуть 'https://evacuatorvitebsk.by' после настройки DNS
  phonePrimary: '+375 (29) 719-78-06',
  phoneClean: '+375297197806',
  address: {
    city: 'Витебск',
    street: '', // TODO: уточнить адрес базирования/офиса
    full: 'г. Витебск',
    postalCode: '210000',
    country: 'BY',
    latitude: 55.1904,   // TODO: уточнить координаты точки базирования
    longitude: 30.2049,
  },
  maps: {
    google: 'https://www.google.com/maps/dir/?api=1&destination=55.1904,30.2049',
    yandex: 'https://yandex.ru/maps/?rtext=~55.1904,30.2049&rtt=auto',
  },
  workingHours: 'Круглосуточно, без выходных — 24/7',
  workingHoursIso: 'Mo-Su 00:00-24:00',
  email: 'info@evacuatorvitebsk.by', // TODO: подтвердить email
  ogImage: '/images/og/og-default.webp',
  priceRange: '$',
  responseTime: 'от 20 минут по городу',
  priceFrom: 'от 60 BYN',
  kmRate: 'от 1 BYN/км за городом',
  social: {
    viber: 'viber://chat?number=%2B375297197806',
    telegram: 'https://t.me/evacuatorvitebsk', // TODO: подтвердить
    whatsapp: 'https://wa.me/375297197806',
  }
};
