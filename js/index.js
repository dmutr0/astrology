(()=>{"use strict";function e(e){const t=e.currentTarget.parentElement.nextSibling;e.currentTarget.classList.toggle("program__btn_active"),t.classList.toggle("program__webinars_active")}function t(e){const t=e.currentTarget.parentElement.parentElement.querySelector("ul");e.currentTarget.classList.toggle("choose__toggler_active"),t.classList.toggle("choose__second-list_active")}function c(e){e.currentTarget.parentElement.parentElement.querySelector(".choose__hidden-content").classList.add("choose__hidden-content_active")}function o(e){e.currentTarget.classList.remove("choose__hidden-content_active")}function r(e){const t=e.currentTarget.getAttribute("data-format"),c=document.querySelector(`#${t}`);document.querySelector(".overlay").classList.add("overlay_active"),c.classList.add("modal_active")}function n(e){e.target.classList.contains("modal")||(document.querySelector(".overlay").classList.remove("overlay_active"),document.querySelectorAll(".modal").forEach((e=>e.classList.remove("modal_active"))))}window.addEventListener("DOMContentLoaded",(()=>{const a=document.querySelectorAll(".program__btn"),l=document.querySelector(".choose__toggler"),s=document.querySelectorAll(".choose .button"),i=document.querySelectorAll(".modal__close"),d=document.querySelectorAll(".choose__discount"),u=document.querySelectorAll(".choose__hidden-content"),_=document.querySelector(".overlay");a.forEach((t=>t.addEventListener("click",e))),l.addEventListener("click",t),s.forEach((e=>e.addEventListener("click",r))),i.forEach((e=>e.addEventListener("click",n))),_.addEventListener("click",n),d.forEach((e=>e.addEventListener("mouseenter",c))),u.forEach((e=>e.addEventListener("mouseleave",o)))}))})();