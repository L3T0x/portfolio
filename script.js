document.querySelectorAll("[data-year]").forEach(node=>{node.textContent=String(new Date().getFullYear())});
if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  document.querySelectorAll("img[data-static-src]").forEach(img=>{img.src=img.dataset.staticSrc});
}
