// 简易多语言：中/英/日。给带 data-i18n 的元素替换文本；语言存 localStorage。
const I18N = {
  zh: {
    _name: "中文",
    brand: "擦宝石",
    nav_home: "首页", nav_privacy: "隐私政策", nav_support: "支持",
    tagline: "一款治愈系的擦拭寻宝小游戏——擦去灰尘，让宝石在瓶中闪耀。",
    cta_web: "网页试玩", cta_tf: "TestFlight 测试",
    f1_t: "擦拭揭示", f1_d: "手指擦去覆盖宝石的灰尘，慢慢露出通透的晶体。",
    f2_t: "收进水瓶", f2_d: "擦净的宝石会落进玻璃瓶，越攒越多、沉在瓶底闪光。",
    f3_t: "程序化宝石", f3_d: "每颗都是随机生成的棱角原石——蓝晶、红玛瑙、绿松石、黄宝石。",
    f4_t: "轻松无压力", f4_d: "无账号、无广告、无计时。随时擦一擦,放松一下。",
    priv_title: "隐私政策",
    priv_updated: "最后更新：2026 年 8 月 17 日",
    priv_p1: "《擦宝石》(以下简称「本应用」)非常重视你的隐私。本应用不收集、不存储、也不分享任何个人数据。",
    priv_h1: "我们收集什么", priv_l1a: "什么都不收集。没有账号、没有注册、没有登录。", priv_l1b: "没有数据分析、没有广告、没有第三方追踪 SDK。",
    priv_h2: "你的游戏数据", priv_l2a: "游戏进度仅保存在你自己的设备本地,我们无法访问。", priv_l2b: "本应用不会向我们或任何第三方传输任何数据。",
    priv_h3: "权限", priv_p3: "本应用不需要任何特殊权限(不使用位置、通讯录、相机、麦克风等)。",
    priv_h4: "联系我们", priv_p4: "如对本隐私政策有任何疑问,请联系:",
    sup_title: "支持",
    sup_p1: "需要帮助或想反馈?欢迎随时联系我们。",
    sup_h1: "联系方式", sup_p2: "邮件:", sup_h2: "常见问题",
    sup_q1: "进度会同步吗?", sup_a1: "存档保存在本地设备,不做云同步。",
    sup_q2: "要付费吗?", sup_a2: "完全免费,无内购、无广告。",
    foot_rights: "保留所有权利。"
  },
  en: {
    _name: "English",
    brand: "Wipe Gemstone",
    nav_home: "Home", nav_privacy: "Privacy", nav_support: "Support",
    tagline: "A cozy wipe-to-reveal game — dust off the stones and let the gems shine in the flask.",
    cta_web: "Play on Web", cta_tf: "TestFlight Beta",
    f1_t: "Wipe to Reveal", f1_d: "Rub away the dust covering each stone to slowly uncover a clear, glowing crystal.",
    f2_t: "Collect in the Flask", f2_d: "Cleaned gems drop into a glass flask, piling up and glinting at the bottom.",
    f3_t: "Procedural Gems", f3_d: "Every stone is randomly generated — blue crystal, red agate, turquoise, yellow topaz.",
    f4_t: "Relaxing, No Pressure", f4_d: "No account, no ads, no timers. Wipe a little whenever you want to unwind.",
    priv_title: "Privacy Policy",
    priv_updated: "Last updated: August 17, 2026",
    priv_p1: "Wipe Gemstone (“the app”) respects your privacy. The app does not collect, store, or share any personal data.",
    priv_h1: "What we collect", priv_l1a: "Nothing. No accounts, no sign-up, no login.", priv_l1b: "No analytics, no advertising, no third-party tracking SDKs.",
    priv_h2: "Your game data", priv_l2a: "Your progress is stored only locally on your own device; we cannot access it.", priv_l2b: "The app does not transmit any data to us or to any third party.",
    priv_h3: "Permissions", priv_p3: "The app requires no special permissions (no location, contacts, camera, microphone, etc.).",
    priv_h4: "Contact us", priv_p4: "If you have any questions about this policy, contact:",
    sup_title: "Support",
    sup_p1: "Need help or want to share feedback? Reach out any time.",
    sup_h1: "Contact", sup_p2: "Email:", sup_h2: "FAQ",
    sup_q1: "Does progress sync?", sup_a1: "Saves live on your local device; there is no cloud sync.",
    sup_q2: "Is it free?", sup_a2: "Completely free — no in-app purchases, no ads.",
    foot_rights: "All rights reserved."
  },
  ja: {
    _name: "日本語",
    brand: "宝石磨き",
    nav_home: "ホーム", nav_privacy: "プライバシー", nav_support: "サポート",
    tagline: "癒やしの「磨いて見つける」ゲーム。ほこりを拭って、瓶の中で宝石を輝かせよう。",
    cta_web: "Web で遊ぶ", cta_tf: "TestFlight ベータ",
    f1_t: "磨いて発見", f1_d: "石を覆うほこりを指で拭い、透きとおる結晶を少しずつ現します。",
    f2_t: "瓶にコレクション", f2_d: "磨いた宝石はガラス瓶へ。どんどん貯まって、底できらめきます。",
    f3_t: "プロシージャル宝石", f3_d: "一つ一つがランダム生成の原石——青の水晶・赤メノウ・ターコイズ・黄トパーズ。",
    f4_t: "気楽にのんびり", f4_d: "アカウント・広告・タイマーなし。好きな時にちょっと磨いてリラックス。",
    priv_title: "プライバシーポリシー",
    priv_updated: "最終更新日：2026 年 8 月 17 日",
    priv_p1: "「宝石磨き」(以下「本アプリ」)はあなたのプライバシーを尊重します。本アプリは個人データを一切収集・保存・共有しません。",
    priv_h1: "収集する情報", priv_l1a: "何も収集しません。アカウント・登録・ログインはありません。", priv_l1b: "分析・広告・第三者トラッキング SDK はありません。",
    priv_h2: "ゲームデータ", priv_l2a: "進行状況はお使いの端末内にのみ保存され、私たちはアクセスできません。", priv_l2b: "本アプリは私たちや第三者へデータを送信しません。",
    priv_h3: "権限", priv_p3: "本アプリは特別な権限を必要としません(位置情報・連絡先・カメラ・マイク等は使いません)。",
    priv_h4: "お問い合わせ", priv_p4: "本ポリシーに関するご質問は下記まで:",
    sup_title: "サポート",
    sup_p1: "お困りの点やご意見があれば、いつでもご連絡ください。",
    sup_h1: "連絡先", sup_p2: "メール:", sup_h2: "よくある質問",
    sup_q1: "進行状況は同期されますか?", sup_a1: "セーブは端末内に保存され、クラウド同期はありません。",
    sup_q2: "有料ですか?", sup_a2: "完全無料です。アプリ内課金も広告もありません。",
    foot_rights: "All rights reserved."
  }
};
function applyLang(l){
  const d = I18N[l] || I18N.en;
  document.documentElement.lang = (l==="zh"?"zh-Hans":l);
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if(d[k]!==undefined) el.textContent = d[k];
  });
  document.querySelectorAll(".langs button").forEach(b=>b.classList.toggle("on", b.dataset.l===l));
  try{ localStorage.setItem("gp_lang", l); }catch(e){}
}
function initLang(){
  let l = null;
  try{ l = localStorage.getItem("gp_lang"); }catch(e){}
  if(!l){
    const n = (navigator.language||"en").toLowerCase();
    l = n.startsWith("zh") ? "zh" : n.startsWith("ja") ? "ja" : "en";
  }
  applyLang(l);
  document.querySelectorAll(".langs button").forEach(b=>{
    b.addEventListener("click", ()=>applyLang(b.dataset.l));
  });
}
document.addEventListener("DOMContentLoaded", initLang);
