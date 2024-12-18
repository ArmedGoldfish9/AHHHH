function showAlert(playerElement) {
    const playerName = playerElement.getAttribute('data-player');
    alert(`You clicked on ${playerName}!`);
  }
  document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
 
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseover", () => link.style.color = "orange");
    link.addEventListener("mouseout", () => link.style.color = "black");
});


  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
