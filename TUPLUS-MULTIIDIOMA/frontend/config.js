/* Configuración comercial centralizada. Validar tarifas y canal antes de publicar. */
window.TUPLUS_CONFIG = Object.freeze({
  whatsapp: '51916828870',
  currency: 'PEN',
  locale: 'es-PE',
  currencyByLocale: { en: 'USD', zh: 'CNY', ru: 'RUB', pt: 'BRL', fr: 'EUR', ja: 'JPY', de: 'EUR' },
  penRates: { PEN: 1, MXN: 5.122415, USD: 0.296616, EUR: 0.259015, CNY: 1.99132, RUB: 24.855162, BRL: 1.517903, JPY: 46.663114 },
  fxDate: '2026-09-22',
  pricePerPage: 50,
  maxExtraPages: 20,
  types: {
    corporativa: { name: 'Página corporativa', price: 0 },
    tienda: { name: 'Tienda virtual', price: 350 },
    landing: { name: 'Página de campaña', price: -150 }
  },
  plans: {
    profesional: { name: 'Profesional', price: 950 },
    empresarial: { name: 'Empresarial', price: 1575 },
    corporativo: { name: 'Corporativo', price: 2450 }
  }
});
