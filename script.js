document.addEventListener("DOMContentLoaded", () => {
  const readMore = document.querySelectorAll(".read-more");
  const scrollMargin = 70;

  readMore.forEach((button) => {
    button.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      card.classList.add("expanded");

      const tempElement = document.createElement("div");
      tempElement.style.position = "absolute";
      tempElement.style.top = `${card.getBoundingClientRect().top - scrollMargin + window.scrollY}px`;
      document.body.appendChild(tempElement);
      tempElement.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => document.body.removeChild(tempElement), 200);
    });
  });

  const closeButtons = document.querySelectorAll(".close-button");

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      card.classList.remove("expanded");
    });
  });
});
