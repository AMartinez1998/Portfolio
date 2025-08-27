document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("more");
  const projects = document.getElementById("extraProjects");
  const section = document.querySelector(".ocultar"); 
  const animationTime = 400;

  projects.style.display = "none";

  btn.addEventListener("click", () => {
    if (projects.style.display === "grid") {
    
      projects.classList.remove("show");
      btn.textContent = "See more";

      setTimeout(() => {
        projects.style.display = "none";
        
        section.appendChild(btn); 
      }, animationTime);
    } else {
      projects.style.display = "grid";
      setTimeout(() => projects.classList.add("show"), 10);
      btn.textContent = "See less";

     
      section.appendChild(btn);
    }
  });
});
