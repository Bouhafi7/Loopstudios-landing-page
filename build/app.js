let e=document.querySelector(".menu"),c=document.querySelector(".burger-icon"),s=document.querySelectorAll(".menu li a");c.addEventListener("click",(()=>{e.classList.toggle("active"),e.classList.contains("active")?c.src="images/icon-close.svg":c.src="images/icon-hamburger.svg"})),s.forEach((s=>{s.addEventListener("click",(()=>{e.classList.remove("active"),e.classList.contains("active")?c.src="images/icon-close.svg":c.src="images/icon-hamburger.svg"}))}));let i=document.querySelector("header .container .head");window.onscroll=function(){window.scrollY>1?i.classList.add("active"):i.classList.remove("active")};
//# sourceMappingURL=app.js.map
