/**
 * サイトに載る文章・データはすべてこのファイルにまとめています。
 * 文言を変えたい、プロジェクトを足したい、というときはここだけ編集すればOKです。
 */

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const images = {
  hero: {
    src: "/images/taiyo-hero.webp",
    width: 969,
    height: 1526,
    alt: "夜の街に立つ上原多一陽のポートレート",
  },
  mic: {
    src: "/images/taiyo-mic.webp",
    width: 769,
    height: 1526,
    alt: "マイクを持って話す上原多一陽",
  },
  nightBokeh: {
    src: "/images/night-bokeh.webp",
    width: 900,
    height: 1349,
    alt: "",
  },
} satisfies Record<string, ImageAsset>;

export const profile = {
  nameEn: "Taiyo Uehara",
  nameEnLines: ["TAIYO", "UEHARA"],
  nameJa: "上原 多一陽",
  hometown: "宮崎県",
  education: "台湾・元智大学 情報管理系 卒業",
  graduated: "2026.09",
  languages: ["日本語", "中国語（繁体字）", "英語"],
  next: { company: "GA technologies", start: "2027.04" },
  keywords: ["留学", "台湾", "コミュニティ", "企画", "国際交流", "テクノロジー", "挑戦", "人とのつながり"],
};

export const hero = {
  label: "EP.00 — PROLOGUE",
  masthead: "Taiyo Uehara — Personal Portfolio — Miyazaki / Taiwan",
  catchLines: ["出会いから、", "可能性を", "広げる。"],
  // catchLines のうち、マーカーを引く行番号
  highlightLine: 1,
  sub: "宮崎から台湾へ。人と世界をつなぐ挑戦を。",
  bubble: "人との出会いで、\n世界は広がる。",
  caption: "MIYAZAKI → TAIWAN → NEXT",
};

/** Hero のサイン（一筆書きアニメーション）の設定 */
export const signature = {
  /** 書き終わるまでの秒数。小さいほど速く書きます */
  durationSec: 2.6,
  /** ページを開いてから書き始めるまでの秒数 */
  delaySec: 1.1,
  /** 線の太さ */
  strokeWidth: 5.5,
  /** クリック（タップ）でもう一度書くかどうか */
  replayOnClick: true,
};

export const about = {
  pullQuote: ["面白そう、と思ったら", "まず動く。"],
  paragraphs: [
    "宮崎で育って、大学は台湾の元智大学へ。情報管理を学びながら、たくさんの人や文化に出会いました。",
    "気づけば、学生コミュニティやイベントの企画にどんどん関わるようになっていて。人が集まる場をつくって、そこで誰かが笑ったり、新しいつながりが生まれたりする瞬間が、たぶん自分はいちばん好きです。",
    "挑戦も、安定も、どちらも大事にしたい。頑張る人がちゃんと報われる社会をつくりたい。2027年4月からは GA technologies で、次の挑戦を始めます。",
  ],
  bubble: "気になったら、\nとりあえずやってみるタイプです。",
};

export type Episode = {
  no: string;
  title: string;
  lead: string;
  body: string;
  meta?: string;
  bubble?: string;
};

export const episodes: Episode[] = [
  {
    no: "01",
    title: "宮崎で育つ",
    lead: "すべてのはじまりは、宮崎。",
    body: "宮崎県で生まれ育つ。ここが、自分の原点。",
    meta: "MIYAZAKI",
  },
  {
    no: "02",
    title: "台湾へ進学",
    lead: "海を渡って、台湾・元智大学へ。",
    body: "情報管理系に進学。プログラミングやデータ活用など、情報を扱うための技術を学ぶ。",
    meta: "TAIWAN",
  },
  {
    no: "03",
    title: "多文化の中で広がった視点",
    lead: "いろんな人と、いろんな文化に出会う。",
    body: "台湾で多様な人や文化に触れる。日本語・中国語（繁体字）・英語を行き来しながら、ものの見方がぐっと広がった。",
    bubble: "台湾での経験が、\n自分の視野をかなり広げてくれました。",
  },
  {
    no: "04",
    title: "人が集まる場をつくる",
    lead: "企画して、動いて、形にする。",
    body: "学生コミュニティやイベント企画に関わる。PolyCle などでコミュニティ運営や企画を経験し、台湾横丁や交流イベント、2Daysインターンにも携わる。",
    bubble: "“場”をつくることに\nワクワクする。",
  },
  {
    no: "05",
    title: "次の挑戦へ",
    lead: "卒業、そして次のステージへ。",
    body: "2026年9月、元智大学を卒業。2027年4月から GA technologies へ。",
    meta: "2026.09 → 2027.04",
  },
];

export type Skill = {
  left: string;
  right: string;
  ja: string;
  items: string[];
  quote: string;
};

export const skills: Skill[] = [
  {
    left: "People",
    right: "Community",
    ja: "人と、場をつくる",
    items: ["イベント企画・運営", "コミュニティづくり", "交流の場づくり"],
    quote: "人が集まる場をつくるのが好きです。",
  },
  {
    left: "Business",
    right: "Technology",
    ja: "アイデアを、仕組みにする",
    items: ["ビジネス企画", "Python", "C / C++", "Java", "HTML / CSS", "データ分析・可視化"],
    quote: "企画して終わりじゃなく、ちゃんと形にしたい。",
  },
  {
    left: "Japan",
    right: "Taiwan",
    ja: "ことばと文化をつなぐ",
    items: ["日本語", "中国語（繁体字）", "英語", "異文化コミュニケーション"],
    quote: "交流のきっかけをデザインする。",
  },
  {
    left: "Idea",
    right: "Action",
    ja: "思いついたら、動く",
    items: ["学生向け企画", "プレゼンテーション"],
    quote: "まずやってみる、がわりと自分らしい。",
  },
];

export type Project = {
  id: string;
  name: string;
  tag: string;
  summary: string;
  /** 下の5項目は、書いたものだけがカードの「詳しく」に表示されます */
  overview?: string;
  background?: string;
  role?: string;
  ingenuity?: string;
  learning?: string;
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    id: "taiwan-yokocho",
    name: "台湾横丁",
    tag: "COMMUNITY",
    summary: "台湾で関わった、人が集まる場づくりのプロジェクト。",
  },
  {
    id: "2days-intern",
    name: "2Daysインターン企画",
    tag: "BUSINESS",
    summary: "2日間のインターンシップの企画に携わる。",
  },
  {
    id: "mima",
    name: "MIMA",
    tag: "PROJECT",
    summary: "詳しくは準備中。話したときに、ぜひ聞いてください。",
    comingSoon: true,
  },
  {
    id: "vlog-ekiden",
    name: "台湾Vlog駅伝",
    tag: "MEDIA",
    summary: "台湾を舞台に、Vlogをつないでいく企画。",
  },
];

export const projectsIntro = {
  bubbles: ["企画して、動いて、\n形にするところまでやりたい。", "交流のきっかけを\nデザインする。"],
  notes: ["ROLE — 企画・運営", "FIELD — コミュニティ", "STYLE — まず動く"],
};

export type Hobby = { en: string; ja: string; note: string; glyph: string };

export const hobbies: Hobby[] = [
  { en: "PHOTO", ja: "カメラ / 写真", note: "日常を、切り取る。", glyph: "写" },
  { en: "TRAVEL", ja: "旅行", note: "知らない場所へ。", glyph: "旅" },
  { en: "MUSIC", ja: "音楽", note: "好きな音楽と過ごす。", glyph: "音" },
  { en: "FOOTBALL", ja: "サッカー", note: "ボールを追いかける。", glyph: "蹴" },
  { en: "LEARN", ja: "新しいことを知る", note: "知らない、を知るへ。", glyph: "知" },
  { en: "TALK", ja: "人と話すこと", note: "人との出会いが、いちばん面白い。", glyph: "話" },
  { en: "MAKE", ja: "ものづくり / デザイン", note: "デザインも、けっこう好きです。", glyph: "創" },
];

export type Value = { word: string; proverb: string; en: string; body: string };

export const nowNext = {
  now: {
    title: "NOW",
    lines: ["2026年9月、元智大学 情報管理系を卒業。", "2027年4月の GA technologies 入社へ。"],
  },
  valuesHeading: "大切にしていること。",
  valuesLabel: "MY VALUES — 僕を表す5つの言葉",
  values: [
    {
      word: "挑戦",
      proverb: "為せば成る",
      en: "Where there's a will, there's a way.",
      body: "できるかどうかを考える前に、まず行動する。未知の世界にも飛び込み、自分の可能性を広げていく。",
    },
    {
      word: "出会い",
      proverb: "一期一会",
      en: "Every encounter matters.",
      body: "人との出会いは、人生を変えるきっかけになる。一つひとつの縁を大切にし、新しいつながりを生み出す。",
    },
    {
      word: "思いやり",
      proverb: "情けは人の為ならず",
      en: "Kindness comes full circle.",
      body: "誰かを思いやる行動は、巡り巡って自分や社会にも返ってくる。人の笑顔や挑戦を支えることを大切にする。",
    },
    {
      word: "好奇心",
      proverb: "百聞は一見に如かず",
      en: "Seeing is believing.",
      body: "人から聞くだけでなく、自分の目で見て、体験して、学ぶ。知らない世界に触れることを楽しむ。",
    },
    {
      word: "主体性",
      proverb: "有言実行",
      en: "Turn words into action.",
      body: "思い描くだけで終わらせない。自分の言葉に責任を持ち、周囲を巻き込みながら形にしていく。",
    },
  ] as Value[],
  preview: {
    label: "次回予告",
    date: "2027.04",
    title: "GA technologies 編、スタート。",
    quote: "挑戦の先に、ちゃんと意味をつくりたい。",
  },
};

export type ContactLink = { label: string; href: string };

/** href を入れると押せるリンクになります（空のままだと「準備中」表示） */
export const contact = {
  bubble: "話してみたら、\nたぶんもっと伝わります。",
  lead: "気軽に声をかけてください。企画の相談でも、台湾の話でも、ただの雑談でも。",
  links: [
    { label: "Instagram", href: "https://www.instagram.com/taiyo_uehr/" },
    { label: "X", href: "https://x.com/taiyo_tw" },
    { label: "LINE", href: "https://line.me/ti/p/aiHJVRg4Aw" },
  ] as ContactLink[],
};

export const nav = [
  { id: "about", label: "About" },
  { id: "story", label: "Story" },
  { id: "what-i-do", label: "What I Do" },
  { id: "projects", label: "Projects" },
  { id: "beyond", label: "Beyond" },
  { id: "next", label: "Next" },
  { id: "contact", label: "Contact" },
];
