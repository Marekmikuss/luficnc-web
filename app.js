const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){toggle?.setAttribute('aria-expanded','false');nav?.classList.remove('open');}});
const dialog=document.querySelector('.lightbox');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{const img=dialog.querySelector('img');img.src=button.dataset.image;img.alt=button.dataset.caption;dialog.querySelector('p').textContent=button.dataset.caption;dialog.showModal();}));
document.querySelector('.close-dialog')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('[data-category]').forEach(item=>{item.hidden=button.dataset.filter!=='Vše'&&item.dataset.category!==button.dataset.filter;if(!item.hidden)count++;});document.querySelector('#gallery-status').textContent=`Zobrazeno ${count} fotografií.`;}));
