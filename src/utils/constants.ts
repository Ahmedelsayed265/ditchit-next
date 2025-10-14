export const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const SORT_BY = [
  {
    name: "Best",
    value: "best",
  },
  {
    name: "Latest",
    value: "latest",
  },
  {
    name: "Lowest Price",
    value: "lowest",
  },
  {
    name: "Highest Price",
    value: "highest",
  },
  {
    name: "Near By",
    value: "near",
  },
];

export const CONDITIONS = [
  {
    name: "New",
    value: "new",
  },
  {
    name: "Used",
    value: "used",
  },
];
export const TYPES = [
  {
    name: "Sale",
    value: "sale",
  },
  {
    name: "Wanted",
    value: "wanted",
  },
];

export const SHIPPING_METHODS = [
  {
    name: "Local + Shipping",
    value: "both",
  },
  {
    name: "Local",
    value: "local",
  },
  {
    name: "Shipping",
    value: "shipping",
  },
];

export const POST_TABS = [
  "Choose Category",
  "Main Details",
  "More Details",
  "Price & Shipping",
];

export const SOCKET_EVENTS = {
  JOIN_USER: "ditch_it_user_join",

  JOIN_ROOMS: "ditch_it_join_rooms",
  LEAVE_ROOMS: "ditch_it_leaves_rooms",

  SEND_FIRST_MESSAGE: "ditch_it_one_user_send_data",
  RECEIVE_FIRST_MESSAGE: "ditch_it_one_user_receive_data",

  SEND_MESSAGE: "ditch_it_one_room_send_data",
  RECEIVE_MESSAGE: "ditch_it_one_room_receive_data",
};

export const RTL_LANGUAGES = ["ar", "fa"];

export const LANGUAGES = {
  af: "Afrikaans",
  am: "አማርኛ",
  ar: "العربية",
  az: "Azərbaycan",
  bg: "Български",
  bn: "বাংলা",
  ca: "Català",
  cs: "Čeština",
  da: "Dansk",
  de: "Deutsch",
  el: "Ελληνικά",
  en: "English",
  es: "Español",
  et: "Eesti",
  fa: "فارسی",
  fi: "Suomi",
  fil: "Filipino",
  fr: "Français",
  gu: "ગુજરાતી",
  hi: "हिन्दी",
  hr: "Hrvatski",
  hu: "Magyar",
  id: "Bahasa Indonesia",
  it: "Italiano",
  ja: "日本語",
  kk: "Қазақ",
  kn: "ಕನ್ನಡ",
  ko: "한국어",
  lo: "ລາວ",
  lt: "Lietuvių",
  lv: "Latviešu",
  mk: "Македонски",
  ml: "മലയാളം",
  mr: "मराठी",
  ms: "Bahasa Melayu",
  nb: "Norsk Bokmål",
  nl: "Nederlands",
  pa: "ਪੰਜਾਬੀ",
  pl: "Polski",
  pt: "Português",
  ro: "Română",
  ru: "Русский",
  sk: "Slovenčina",
  sl: "Slovenščina",
  sq: "Shqip",
  sr: "Српски",
  sv: "Svenska",
  sw: "Kiswahili",
  ta: "தமிழ்",
  te: "తెలుగు",
  th: "ไทย",
  tr: "Türkçe",
  uk: "Українська",
  uz: "O‘zbek",
  vi: "Tiếng Việt",
  zh: "简体中文",
};

export const COUNTIRES_DATA = [
  {
    id: 1,
    code: "US",
  },
  {
    id: 2,
    code: "CA",
  },
  {
    id: 3,
    code: "IN",
  },
];
