function scroll (){
  const scrollButton = document.querySelector(".scrolltop");
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
  }