// 简易多语言：中/英/日。给带 data-i18n 的元素替换文本；语言存 localStorage。
const EMAIL = "argoodies@googlegroups.com";
const I18N = {
  zh: {
    _name: "简体中文",
    brand: "擦宝石模拟器",
    nav_about: "简介", nav_privacy: "隐私", nav_support: "支持",
    tagline: "一款治愈系的擦拭寻宝小工具——擦去灰尘，让宝石在瓶中闪耀。",
    cta_tf: "TestFlight 测试",
    f1_t: "擦拭揭示", f1_d: "擦去覆盖宝石的灰尘，露出通透晶体。",
    f2_t: "收进水瓶", f2_d: "擦净的宝石落进玻璃瓶，越攒越多。",
    f3_t: "程序化宝石", f3_d: "每颗随机生成的棱角原石，四色可寻。",
    f4_t: "轻松无压力", f4_d: "无账号、无广告、无计时，随时放松。",
    priv_t: "隐私政策",
    priv_updated: "更新于 2026-08-17",
    priv_p: "本应用不收集、不存储、不分享任何个人数据，进度仅保存在你的设备本地。",
    sup_t: "支持",
    sup_p: "需要帮助或反馈？欢迎邮件联系我们，我们会尽快回复。",
    sup_backup: "进度会随设备的 iCloud 备份一起保存——换新机从备份恢复即可找回,无需登录。",
    contact: "联系邮箱",
    foot_rights: "保留所有权利。"
  },
  "zh-Hant": {
    _name: "繁體中文",
    brand: "擦寶石模擬器",
    nav_about: "簡介", nav_privacy: "隱私", nav_support: "支援",
    tagline: "一款治癒系的擦拭尋寶小工具——擦去灰塵，讓寶石在瓶中閃耀。",
    cta_tf: "TestFlight 測試",
    f1_t: "擦拭揭示", f1_d: "擦去覆蓋寶石的灰塵，露出通透晶體。",
    f2_t: "收進水瓶", f2_d: "擦淨的寶石落進玻璃瓶，越攢越多。",
    f3_t: "程式化寶石", f3_d: "每顆隨機生成的稜角原石，四色可尋。",
    f4_t: "輕鬆無壓力", f4_d: "無賬號、無廣告、無計時，隨時放鬆。",
    priv_t: "隱私政策",
    priv_updated: "更新於 2026-08-17",
    priv_p: "本應用不收集、不儲存、不分享任何個人資料，進度僅儲存在你的裝置本地。",
    sup_t: "支援",
    sup_p: "需要幫助或反饋？歡迎郵件聯絡我們，我們會盡快回復。",
    sup_backup: "進度會隨裝置的 iCloud 備份一起儲存——換新機從備份恢復即可找回,無需登入。",
    contact: "聯絡郵箱",
    foot_rights: "保留所有權利。"
  },
  en: {
    _name: "English",
    brand: "Gemstone Puzzle",
    nav_about: "About", nav_privacy: "Privacy", nav_support: "Support",
    tagline: "A cozy wipe-to-reveal app — dust off the stones and let the gems shine in the flask.",
    cta_tf: "TestFlight Beta",
    f1_t: "Wipe to Reveal", f1_d: "Rub away the dust to uncover a clear, glowing crystal.",
    f2_t: "Collect in the Flask", f2_d: "Cleaned gems drop into a glass flask and pile up.",
    f3_t: "Procedural Gems", f3_d: "Every stone is randomly generated in four colors.",
    f4_t: "Relaxing, No Pressure", f4_d: "No account, no ads, no timers — unwind any time.",
    priv_t: "Privacy Policy",
    priv_updated: "Updated 2026-08-17",
    priv_p: "This app collects no personal data — your progress stays only on your device.",
    sup_t: "Support",
    sup_p: "Need help or have feedback? Just email us and we’ll reply soon.",
    sup_backup: "Your progress is included in your device’s iCloud backup — restore it on a new device and your progress comes back, no login needed.",
    contact: "Contact",
    foot_rights: "All rights reserved."
  },
  ja: {
    _name: "日本語",
    brand: "宝石磨き",
    nav_about: "紹介", nav_privacy: "プライバシー", nav_support: "サポート",
    tagline: "癒やしの「磨いて見つける」アプリ。ほこりを拭って、瓶の中で宝石を輝かせよう。",
    cta_tf: "TestFlight ベータ",
    f1_t: "磨いて発見", f1_d: "ほこりを拭い、透きとおる結晶を現します。",
    f2_t: "瓶にコレクション", f2_d: "磨いた宝石はガラス瓶へ。どんどん貯まります。",
    f3_t: "プロシージャル宝石", f3_d: "一つ一つがランダム生成、四色の原石。",
    f4_t: "気楽にのんびり", f4_d: "アカウント・広告・タイマーなし。いつでもリラックス。",
    priv_t: "プライバシーポリシー",
    priv_updated: "更新日 2026-08-17",
    priv_p: "本アプリは個人データを一切収集しません。進行状況は端末内にのみ保存されます。",
    sup_t: "サポート",
    sup_p: "お困りの点やご意見はメールでお気軽にどうぞ。できるだけ早く返信します。",
    sup_backup: "進行状況は端末の iCloud バックアップに含まれます。新しい端末で復元すれば進行状況も戻り、ログインは不要です。",
    contact: "連絡先",
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
  const cur = document.getElementById("langCur");
  if(cur) cur.textContent = d._name;
  document.querySelectorAll(".lang-menu button").forEach(b=>b.classList.toggle("on", b.dataset.l===l));
  try{ localStorage.setItem("gp_lang", l); }catch(e){}
}
function initLang(){
  document.querySelectorAll("[data-email]").forEach(a=>{ a.textContent=EMAIL; a.href="mailto:"+EMAIL; });
  let l = null;
  try{ l = localStorage.getItem("gp_lang"); }catch(e){}
  if(!l) l = "zh-Hant";   // 默认繁体中文（繁体优先，其次简/英/日）
  applyLang(l);
  const box = document.querySelector(".lang");
  const btn = document.getElementById("langBtn");
  if(btn && box){
    btn.addEventListener("click", e=>{ e.stopPropagation(); box.classList.toggle("open"); });
    document.addEventListener("click", ()=>box.classList.remove("open"));
  }
  document.querySelectorAll(".lang-menu button").forEach(b=>{
    b.addEventListener("click", ()=>{ applyLang(b.dataset.l); if(box) box.classList.remove("open"); });
  });
}
document.addEventListener("DOMContentLoaded", initLang);
