(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[480,960];function t(t,n=``){return{resolve(r){let i=t[r];if(!i)return null;let a={};for(let t of e)a[t]=`${n}media/${r}-${String(t)}.webp`;return{width:i.width,height:i.height,variants:a}}}}function n(...e){return{resolve(t){for(let n of e){let e=n.resolve(t);if(e)return e}return null}}}function r(){return window.location.pathname.replace(/[^/]*$/,``)}async function i(e){let t=await fetch(`data/${e}`);if(!t.ok)throw Error(`Не удалось загрузить data/${e}: ${String(t.status)}`);return await t.json()}var a=new Map;function o(e){let t=a.get(e);return t||(t=i(e),t.catch(()=>{a.delete(e)}),a.set(e,t)),t}var s=()=>o(`catalog.json`),c=()=>o(`templates.json`),l=()=>o(`media.json`),u=[];async function d(){return n(t(await l()),...u)}function f(e){let t=structuredClone(e);t.theme.palette_tokens??=null;for(let e of t.blocks)(e.type===`cover`||e.type===`finale`)&&(e.layout??=`stack`);return t}var p=[`января`,`февраля`,`марта`,`апреля`,`мая`,`июня`,`июля`,`августа`,`сентября`,`октября`,`ноября`,`декабря`],m=[`понедельник`,`вторник`,`среда`,`четверг`,`пятница`,`суббота`,`воскресенье`],h={wedding:`Приглашение на свадьбу`,birthday:`Приглашение на день рождения`,kids:`Приглашение на детский праздник`,anniversary:`Приглашение на юбилей`,corporate:`Приглашение на корпоратив`,graduation:`Приглашение на выпускной`,memorial:`Приглашение на поминки`,party:`Приглашение на вечеринку`};function g(e){let t=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(e);if(!t)return null;let[,n,r,i,a,o]=t.map(Number);return{year:n,month:r,day:i,hour:a,minute:o}}function _(e){return`${String(e.day)} ${p[e.month-1]??``} ${String(e.year)}`}function v(e){return m[(new Date(Date.UTC(e.year,e.month-1,e.day)).getUTCDay()+6)%7]??``}function y(e){return`${String(e.hour).padStart(2,`0`)}:${String(e.minute).padStart(2,`0`)}`}function ee(e){return h[e]??`Приглашение`}function b(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}function x(e,t){let n=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute),r=n;for(let e=0;e<2;e+=1)r=n-S(r,t);return r}function S(e,t){let n=new Intl.DateTimeFormat(`en-US`,{timeZone:t,hourCycle:`h23`,year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`,second:`numeric`}).formatToParts(new Date(e)),r=e=>Number(n.find(t=>t.type===e)?.value??0);return Date.UTC(r(`year`),r(`month`)-1,r(`day`),r(`hour`),r(`minute`),r(`second`))-Math.floor(e/1e3)*1e3}var C=6,te=.1;function ne(e,t){let n=e/t;return Math.abs(n-1)<=te?`square`:n>1?`landscape`:`portrait`}function w(e){let t=Math.min(Math.max(e.length,1),C),n=e[0]??`portrait`;return t===1?`single-${n}`:t===2?e.every(e=>e===`portrait`)?`pair-side`:e.every(e=>e===`square`)?`pair-square`:`pair-stack`:t===3&&e.every(e=>e===`portrait`)?`row-3`:`grid-${String(t)}`}var T=`https://yandex.ru/maps/`;function E(e){return new URLSearchParams(e).toString().replaceAll(`%7E`,`~`)}function D(e,t,n){if(t!==null&&n!==null)return{show:`${T}?${E({pt:`${n.toFixed(6)},${t.toFixed(6)}`,z:`16`,l:`map`})}`,route:`${T}?${E({rtext:`~${t.toFixed(6)},${n.toFixed(6)}`,rtt:`auto`})}`};let r=e.trim();return r?{show:`${T}?${E({text:r})}`,route:`${T}?${E({rtext:`~${r}`,rtt:`auto`})}`}:null}function O(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#x27;`)}function k(e){let t=e.replaceAll(`\r
`,`
`).replaceAll(`\r`,`
`).trim();return t?t.split(/\n{2,}/).map(e=>`<p>${O(e).replaceAll(`
`,`<br>`)}</p>`).join(`

`):``}function re(e){return e.replace(/[^0-9+]/g,``)}var A=960,ie=`(min-width: 24rem) 22rem, 88vw`,j=`(min-width: 42rem) 40rem, 92vw`,M=`(min-width: 42rem) 20rem, 46vw`,N=`(min-width: 21rem) 18rem, 80vw`,P={attendance:`Вы придёте?`,guests:`Сколько вас будет, включая вас?`,children:`Сколько с вами детей?`,transfer:`Нужен трансфер?`,food:`Что вы предпочитаете?`,comment:`Комментарий`},F=[[`yes`,`Да`],[`no`,`Нет`]];function I(e){let t=[];for(let n of e.rsvp.questions){if(!n.enabled)continue;let e=[];n.kind===`food`?e=n.options.map((e,t)=>[String(t),e]):(n.kind===`attendance`||n.kind===`transfer`)&&(e=F),t.push({id:n.id,kind:n.kind,label:P[n.kind]??``,required:n.required,options:e})}return t}function L(e,t,n=``,r=`text`){if(!e.edit)return``;let i=n?` data-placeholder="${O(n)}"`:``;return` data-edit-path="${O(t)}" data-edit-kind="${r}"${i}`}function R(e,t){return e.edit?` data-block-id="${O(t.id)}"`:``}function z(e,t,n,r){let i={imageClass:``,alt:``,sizes:n,src:``,srcset:``,width:0,height:0};if(!e)return{...i,cssClass:`photo photo--empty frame-rounded`};let a=`photo frame-${e.frame_id} filter-${e.filter_id}`,o=`fp-${String(e.focus.x)}-${String(e.focus.y)}`,s=t.resolve(e.media_id);if(!s)return{...i,cssClass:`${a} photo--empty`,imageClass:o,alt:r};let c=Object.keys(s.variants).map(Number).sort((e,t)=>e-t),l=c.map(e=>`${s.variants[e]??``} ${String(e)}w`).join(`, `),u=c.reduce((e,t)=>Math.abs(t-A)<Math.abs(e-A)?t:e,c[0]??0);return{cssClass:a,imageClass:o,alt:r,sizes:n,src:s.variants[u]??``,srcset:l,width:s.width,height:s.height}}function B(e,t,n,r){return{...e,sizes:t,alt:`Фото ${String(n+1)} из ${String(r)}`}}function V(e,t){return e.startsWith(`single`)||e===`pair-stack`?!0:e===`grid-3`||e===`grid-5`?t===0:e===`grid-6`&&t%3==0}function H(e,t,n){let r=t.cssClass+(n.extraClass?` ${n.extraClass}`:``),i=e.edit&&n.path?` data-edit-path="${O(n.path)}"`:``,a=`width="${String(t.width)}" height="${String(t.height)}"`;return t.src?`<figure class="${r}"${i}>${n.priority?`<img class="${t.imageClass}" src="${O(t.src)}" srcset="${O(t.srcset)}" sizes="${t.sizes}" ${a} alt="${O(t.alt)}" fetchpriority="high">`:`<img class="${t.imageClass}" data-defer data-src="${O(t.src)}" data-srcset="${O(t.srcset)}" data-sizes="${t.sizes}" data-alt="${O(t.alt)}" ${a} alt="" decoding="async"><noscript><img class="${t.imageClass}" src="${O(t.src)}" srcset="${O(t.srcset)}" sizes="${t.sizes}" ${a} alt="${O(t.alt)}" loading="lazy" decoding="async"></noscript>`}</figure>`:`<figure class="${r}"${i}>${e.edit?`<span>${O(n.hint)}</span>`:``}</figure>`}var U=e=>e===`stack`?``:` layout-${e}`;function W(e,t,n){let r=z(t.photo,e.resolver,ie,e.title),i=t.subtitle||e.edit?`<p class="cover__subtitle"${L(e,`${n}.subtitle`,`Подзаголовок`)}>${O(t.subtitle)}</p>\n`:``;return`<section class="scene scene--cover${U(t.layout)}"${R(e,t)}>
<div class="scene__inner">
<p class="kicker">${O(e.kicker)}</p>
<h1 class="title"${L(e,`${n}.title`,`Ваши имена`)}>${O(t.title)}</h1>
${i}<p class="cover__date"><span${L(e,`event.starts_at`,``,`datetime`)}>${O(e.when.date)}</span> · ${O(e.when.time)}</p>
${H(e,r,{extraClass:`cover__photo`,priority:!0,hint:`Добавьте фото обложки`,path:`${n}.photo`})}
</div>
</section>`}function G(e,t,n){return`<section class="scene scene--invitation"${R(e,t)}>
<div class="scene__inner prose invitation__text"${L(e,`${n}.text`,`Текст приглашения`)}>${k(t.text)}</div>
</section>`}function K(e,t,n){let r=t.label||e.edit?`<h2 class="heading"${L(e,`${n}.label`,`Подпись отсчёта`)}>${O(t.label)}</h2>\n`:``,i=(e,t)=>`<p class="countdown__cell"><span class="countdown__value" data-unit="${e}">—</span><span class="countdown__unit" data-unit-label="${e}">${t}</span></p>`;return`<section class="scene scene--countdown"${R(e,t)}>
<div class="scene__inner" data-countdown-to="${O(e.countdownTo)}">
${r}<div class="countdown" role="timer" aria-live="off">
${i(`days`,`дней`)}
${i(`hours`,`часов`)}
${i(`minutes`,`минут`)}
${i(`seconds`,`секунд`)}
</div>
<p class="countdown__done" data-countdown-done hidden>Этот день настал!</p>
<p class="countdown__date muted">${O(b(e.when.weekday))}, ${O(e.when.date)}, ${O(e.when.time)}</p>
</div>
</section>`}function q(e,t,n){let r=`<section class="scene scene--gallery"${R(e,t)} aria-label="Фотографии">\n<div class="scene__inner">\n`,i=`
</div>
</section>`;if(t.photos.length===0)return e.edit?`${r}<div class="photo photo--empty frame-rounded gallery__empty"${L(e,`${n}.photos`,``,`photo`)}>Добавьте фото в галерею</div>${i}`:null;let a=t.photos.map(t=>z(t,e.resolver,M,``)),o=a.filter(e=>e.src).length===a.length?w(a.map(e=>ne(e.width,e.height))):`grid-${String(Math.min(a.length,6))}`;return`${r}<div class="gallery gallery--${o}">\n${a.map((t,r)=>H(e,B(t,V(o,r)?j:M,r,a.length),{extraClass:``,priority:!1,hint:`Добавьте фото`,path:`${n}.photos.${String(r)}`})).join(`
`)}</div>${i}`}function J(e,t,n){let{event:r}=e.document,{when:i}=e,a=i.endTime?` — ${O(i.endTime)}`:``,o=r.dress_code||e.edit?`<div><dt class="facts__label">Дресс-код</dt><dd class="facts__value"${L(e,`event.dress_code`,`Дресс-код`)}>${O(r.dress_code??``)}</dd></div>\n`:``,s=t.note||e.edit?`<div class="details__note prose muted"${L(e,`${n}.note`,`Пояснение для гостей`)}>${k(t.note)}</div>\n`:``;return`<section class="scene scene--details"${R(e,t)}>
<div class="scene__inner">
<h2 class="heading">Детали</h2>
<dl class="facts">
<div><dt class="facts__label">Когда</dt><dd class="facts__value"${L(e,`event.starts_at`,``,`datetime`)}>${O(b(i.weekday))}, ${O(i.date)}<br>${O(i.time)}${a}</dd></div>
<div><dt class="facts__label">Где</dt><dd class="facts__value"><span${L(e,`event.venue.name`,`Название места`)}>${O(r.venue.name)}</span><br><span class="muted"${L(e,`event.venue.address`,`Адрес`)}>${O(r.venue.address)}</span></dd></div>
${o}</dl>
${s}</div>
</section>`}function Y(e,t,n){let{venue:r}=e.document.event,i=e.map?`<div class="actions">
<a class="button" href="${O(e.map.show)}" target="_blank" rel="noopener">Открыть карту</a>
<a class="button button--ghost" href="${O(e.map.route)}" target="_blank" rel="noopener">Построить маршрут</a>
</div>
`:``,a=t.note||e.edit?`<div class="route__note prose muted"${L(e,`${n}.note`,`Парковка, ориентиры`)}>${k(t.note)}</div>\n`:``;return`<section class="scene scene--route"${R(e,t)}>
<div class="scene__inner">
<h2 class="heading">Как добраться</h2>
<address class="address"><span class="address__name"${L(e,`event.venue.name`,`Название места`)}>${O(r.name)}</span><span${L(e,`event.venue.address`,`Адрес`)}>${O(r.address)}</span></address>
${i}${a}</div>
</section>`}function ae(e,t,n){let r=t.items.map((t,r)=>{let i=`${n}.items.${String(r)}`,a=t.note||e.edit?`<p class="timeline__note"${L(e,`${i}.note`,`Пояснение`)}>${O(t.note)}</p>`:``;return`<li class="timeline__item">
<span class="timeline__time"${L(e,`${i}.time`,``,`time`)}>${O(t.time)}</span>
<div><p class="timeline__title"${L(e,`${i}.title`,`Что происходит`)}>${O(t.title)}</p>${a}</div>
</li>`}).join(`
`);return`<section class="scene scene--program"${R(e,t)}>
<div class="scene__inner">
<h2 class="heading">Программа дня</h2>
<ol class="timeline">
${r}</ol>
</div>
</section>`}function X(e,t,n){let r=t.items.map((t,r)=>{if(!(t.name||t.phone||e.edit))return``;let i=`${n}.items.${String(r)}`,a=t.role||e.edit?`<p class="contacts__role"${L(e,`${i}.role`,`Кому звонить по какому вопросу`)}>${O(t.role)}</p>\n`:``,o=``;return e.edit?o=`<p class="contacts__phone"${L(e,`${i}.phone`,`Телефон`)}>${O(t.phone)}</p>`:t.phone&&(o=`<p class="contacts__phone"><a href="tel:${O(re(t.phone))}">${O(t.phone)}</a></p>`),`<li class="contacts__item">
<p class="contacts__name"${L(e,`${i}.name`,`Имя`)}>${O(t.name)}</p>
${a}${o}
</li>`}).join(`
`);return`<section class="scene scene--contacts"${R(e,t)}>
<div class="scene__inner">
<h2 class="heading">Контакты</h2>
<ul class="contacts">
${r}</ul>
</div>
</section>`}function oe(e,t,n){let r=t.text||e.edit?`<div class="prose gifts__text"${L(e,`${n}.text`,`Что вам было бы приятно получить`)}>${k(t.text)}</div>\n`:``,i=t.items.map((t,r)=>{if(!(t.title||e.edit))return``;let i=`${n}.items.${String(r)}`,a=t.note||e.edit?`<p class="gifts__note"${L(e,`${i}.note`,`Пояснение`)}>${O(t.note)}</p>`:``;return`<li class="gifts__item">
<p class="gifts__title"${L(e,`${i}.title`,`Подарок`)}>${O(t.title)}</p>
${a}
</li>`}).join(`
`);return`<section class="scene scene--gifts"${R(e,t)}>
<div class="scene__inner">
<h2 class="heading">Подарки</h2>
${r}<ul class="gifts">
${i}</ul>
</div>
</section>`}function se(e,t,n){let r=t.author||e.edit?`<footer class="quote__author"${L(e,`${n}.author`,`Кто сказал`)}>${O(t.author)}</footer>`:``;return`<section class="scene scene--quote"${R(e,t)}>
<div class="scene__inner">
<blockquote class="quote">
<p class="quote__text"${L(e,`${n}.text`,`Цитата, тост или пожелание`)}>${O(t.text)}</p>
${r}
</blockquote>
</div>
</section>`}function ce(e){if(e.options.length>0){let t=e.options.map(([t,n])=>`<label class="choice"><input type="radio" name="${O(e.id)}" value="${O(t)}"${e.required?` required`:``}>${O(n)}</label>`).join(``);return`<fieldset class="field" data-kind="${e.kind}"><legend class="field__label">${O(e.label)}</legend><div class="choices">${t}</div></fieldset>`}let t=e.required?` required`:``;if(e.kind===`comment`)return`<div class="field" data-kind="${e.kind}"><label class="field__label" for="q-${O(e.id)}">${O(e.label)}</label><textarea class="input input--area" id="q-${O(e.id)}" name="${O(e.id)}" maxlength="1000"${t}></textarea></div>`;let n=e.kind===`guests`?`min="1" value="1"`:`min="0" value="0"`;return`<div class="field" data-kind="${e.kind}"><label class="field__label" for="q-${O(e.id)}">${O(e.label)}</label><input class="input" id="q-${O(e.id)}" name="${O(e.id)}" type="number" inputmode="numeric" ${n} max="10"${t}></div>`}function le(e,t,n){let r=t.intro||e.edit?`<div class="prose muted"${L(e,`${n}.intro`,`Пара слов гостям`)}>${k(t.intro)}</div>\n`:``;return`<section class="scene scene--rsvp" id="rsvp"${R(e,t)}>
<div class="scene__inner">
<h2 class="heading"${L(e,`${n}.title`,`Заголовок анкеты`)}>${O(t.title)}</h2>
${r}<form class="rsvp-form" method="post" action="/rsvp"${e.edit?` inert`:``}>
<input type="hidden" name="response_id" value="">
<input type="hidden" name="token" value="">
<div class="hp" aria-hidden="true"><label>Сайт <input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<div class="field" data-kind="name"><label class="field__label" for="rsvp-name">Ваше имя и фамилия</label><input class="input" id="rsvp-name" name="guest_name" autocomplete="name" maxlength="120" required></div>
${e.questions.map(ce).join(`
`)}
<p class="consent">Нажимая «Отправить», вы соглашаетесь, что организатор увидит ваше имя и ответы.</p>
<button class="button" type="submit">Отправить ответ</button>
</form>
</div>
</section>`}function ue(e,t,n){let r=t.photo||e.edit?z(t.photo,e.resolver,N,``):null,i=r?H(e,r,{extraClass:``,priority:!1,hint:`Добавьте фото`,path:`${n}.photo`})+`
`:``;return`<section class="scene scene--finale${U(t.layout)}"${R(e,t)}>
<div class="scene__inner">
<div class="prose finale__text"${L(e,`${n}.text`,`Финальные слова`)}>${k(t.text)}</div>
${i}</div>
</section>`}function Z(e){return e.type===`contacts`?e.items.some(e=>e.name||e.phone):e.type===`gifts`?!!e.text||e.items.some(e=>e.title):e.type!==`quote`||!!e.text}function Q(e,t,n){let r=`blocks.${String(n)}`;switch(t.type){case`cover`:return W(e,t,r);case`invitation`:return G(e,t,r);case`countdown`:return K(e,t,r);case`gallery`:return q(e,t,r);case`details`:return J(e,t,r);case`route`:return Y(e,t,r);case`program`:return t.items.length===0&&!e.edit?null:ae(e,t,r);case`rsvp`:return e.document.rsvp.enabled?le(e,t,r):null;case`finale`:return ue(e,t,r);case`contacts`:return!e.edit&&!Z(t)?null:X(e,t,r);case`gifts`:return!e.edit&&!Z(t)?null:oe(e,t,r);case`quote`:return!e.edit&&!Z(t)?null:se(e,t,r)}}var de=[`sage`,`blush`,`sky`,`sand`,`lilac`,`noir`,`velvet`],fe=[`cormorant-manrope`,`playfair-inter`,`comfortaa-nunito`],pe=`sage`,me=`cormorant-manrope`,he=`styles/guest.css`,ge=e=>`styles/palettes/${e}.css`,_e=e=>`styles/fonts/${e}.css`,ve=864e5;function ye(e,t){let{event:n}=e,r=g(n.starts_at);if(!r)return!1;let i=n.ends_at?g(n.ends_at):null,a=i?x(i,n.timezone):x({...r,hour:0,minute:0},n.timezone)+ve;return t.getTime()>=a}function be(e,t){return e.visible?t||e.show_in.includes(`invite`):!1}function $(e,t){let{event:n}=e,r=g(n.starts_at);if(!r)throw Error(`Неверная дата начала: ${n.starts_at}`);let i=n.ends_at?g(n.ends_at):null,a=new Date(x(r,n.timezone));return{edit:t.edit,document:e,title:e.meta.title||e.meta.hosts.filter(Boolean).join(` и `),kicker:ee(e.meta.event_type),when:{date:_(r),weekday:v(r),time:y(r),endTime:i?y(i):``},countdownTo:a.toISOString().replace(/\.\d{3}Z$/,`Z`),map:D(n.venue.address,n.venue.lat,n.venue.lon),questions:I(e),resolver:t.resolver}}function xe(e,t){let n=$(e,t),r=ye(e,t.now),i=e.blocks.map((e,t)=>be(e,r)?Q(n,e,t):null).filter(e=>e!==null).join(`
`),{theme:a}=e,o=de.includes(a.palette_id)?a.palette_id:pe,s=fe.includes(a.font_pair_id)?a.font_pair_id:me,c=a.template_id||`garden-wedding`,l=a.palette_tokens,u=`palette-${l?`custom`:o} fonts-${s} text-${a.text_size} tpl-${c}`;t.edit&&(u+=` is-editing`);let{event:d}=e,f=g(d.starts_at),p=[f?_(f):``,d.venue.name].filter(Boolean).join(` · `),{effects:m}=e;return{htmlClass:u,title:n.title||`Приглашение`,description:p,effect:m.kind===`none`?null:{kind:m.kind,intensity:m.intensity},customPalette:l,stylesheets:[he,...l?[]:[ge(o)],_e(s)],body:i}}function Se(e,t,n){let r=e.blocks.findIndex(e=>e.id===t),i=e.blocks[r];return i?Q($(e,n),i,r)??``:``}function Ce(e){return`.palette-custom {\n${[`bg`,`surface`,`text`,`muted`,`accent`,`on_accent`,`line`,`placeholder`].map(t=>`  --c-${t.replace(`_`,`-`)}: ${e[t].toLowerCase()};`).join(`
`)}\n}\n`}var we=`modulepreload`,Te=function(e,t){return new URL(e,t).href},Ee={},De=function(e){return e.pathname.endsWith(`.css`)},Oe=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},ke=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Te(t,n);let r=s(t),i=De(r);return Oe(Ee,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:we,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};export{O as a,f as c,c as d,d as f,Se as i,r as l,xe as n,_ as o,Ce as r,g as s,ke as t,s as u};