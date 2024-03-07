let cards = document.querySelectorAll(".btn");

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cards.forEach((button) => {
      if (card !== button) {
        button.style.backgroundColor = "white";
        button.innerHTML = "submit";
      }
    });
    card.style.backgroundColor = "orange";
    card.innerHTML = "acknowledgement";
     console.log("Acknowledgement Done");
  });
});

