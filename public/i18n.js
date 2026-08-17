// 简易多语言：中/英/日。给带 data-i18n 的元素替换文本；语言存 localStorage。
const EMAIL = "argoodies@googlegroups.com";
const I18N = {
  zh: {
    _name: "中文",
    brand: "擦宝石",
    nav_about: "简介", nav_privacy: "隐私", nav_support: "支持",
    tagline: "一款治愈系的擦拭寻宝小游戏——擦去灰尘，让宝石在瓶中闪耀。",
    cta_tf: "TestFlight 测试",
    f1_t: "擦拭揭示", f1_d: "擦去覆盖宝石的灰尘，露出通透晶体。",
    f2_t: "收进水瓶", f2_d: "擦净的宝石落进玻璃瓶，越攒越多。",
    f3_t: "程序化宝石", f3_d: "每颗随机生成的棱角原石，四色可寻。",
    f4_t: "轻松无压力", f4_d: "无账号、无广告、无计时，随时放松。",
    priv_t: "隐私政策",
    priv_updated: "更新于 2026-08-17",
    priv_p: "《擦宝石》不收集、不存储、不分享任何个人数据：无账号、无数据分析、无广告、无第三方追踪。游戏进度仅保存在你的设备本地，我们无法访问（它可能包含在设备的标准 iCloud 备份中，由 Apple 管理，与我们无关）；本应用也不需要任何特殊权限。",
    sup_t: "支持",
    sup_p: "需要帮助或想反馈？欢迎邮件联系,我们会尽快回复。",
    sup_backup: "进度会随设备的 iCloud 备份一起保存——换新机从备份恢复即可找回,无需登录。",
    contact: "联系邮箱",
    foot_rights: "保留所有权利。"
  },
  en: {
    _name: "English",
    brand: "Gemstone Puzzle",
    nav_about: "About", nav_privacy: "Privacy", nav_support: "Support",
    tagline: "A cozy wipe-to-reveal game — dust off the stones and let the gems shine in the flask.",
    cta_tf: "TestFlight Beta",
    f1_t: "Wipe to Reveal", f1_d: "Rub away the dust to uncover a clear, glowing crystal.",
    f2_t: "Collect in the Flask", f2_d: "Cleaned gems drop into a glass flask and pile up.",
    f3_t: "Procedural Gems", f3_d: "Every stone is randomly generated in four colors.",
    f4_t: "Relaxing, No Pressure", f4_d: "No account, no ads, no timers — unwind any time.",
    priv_t: "Privacy Policy",
    priv_updated: "Updated 2026-08-17",
    priv_p: "Gemstone Puzzle does not collect, store, or share any personal data: no accounts, no analytics, no ads, no third-party tracking. Your progress is stored only locally on your device and we cannot access it (it may be part of your device’s standard iCloud backup, which is managed by Apple, not us). The app requires no special permissions.",
    sup_t: "Support",
    sup_p: "Need help or want to share feedback? Email us and we’ll get back to you.",
    sup_backup: "Your progress is included in your device’s iCloud backup — restore it on a new device and your progress comes back, no login needed.",
    contact: "Contact",
    foot_rights: "All rights reserved."
  },
  ja: {
    _name: "日本語",
    brand: "宝石磨き",
    nav_about: "紹介", nav_privacy: "プライバシー", nav_support: "サポート",
    tagline: "癒やしの「磨いて見つける」ゲーム。ほこりを拭って、瓶の中で宝石を輝かせよう。",
    cta_tf: "TestFlight ベータ",
    f1_t: "磨いて発見", f1_d: "ほこりを拭い、透きとおる結晶を現します。",
    f2_t: "瓶にコレクション", f2_d: "磨いた宝石はガラス瓶へ。どんどん貯まります。",
    f3_t: "プロシージャル宝石", f3_d: "一つ一つがランダム生成、四色の原石。",
    f4_t: "気楽にのんびり", f4_d: "アカウント・広告・タイマーなし。いつでもリラックス。",
    priv_t: "プライバシーポリシー",
    priv_updated: "更新日 2026-08-17",
    priv_p: "「宝石磨き」は個人データを一切収集・保存・共有しません。アカウント・分析・広告・第三者トラッキングはありません。進行状況は端末内にのみ保存され、私たちはアクセスできません（端末の標準的な iCloud バックアップに含まれる場合がありますが、それは Apple が管理し、私たちは関与しません）。特別な権限も必要としません。",
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
  if(!l) l = "en";   // 默认英语（其次中/日，由用户切换）
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
