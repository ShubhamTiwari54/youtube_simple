document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".q");

    faqItems.forEach(item => {
      const button = item.querySelector(".faq-question");

      button.addEventListener("click", () => {
        // Close other FAQs (Netflix behavior)
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove("active");
          }
        });

        // Toggle current FAQ
        item.classList.toggle("active");
      });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
  const row = document.querySelector(".movie-row");
  const section = document.querySelector(".trending");

  if (!row || !section) return;

  // Create arrows
  const leftArrow = document.createElement("button");
  const rightArrow = document.createElement("button");

  leftArrow.className = "trending-arrow left";
  rightArrow.className = "trending-arrow right";

  leftArrow.innerHTML = "‹";
  rightArrow.innerHTML = "›";

  section.appendChild(leftArrow);
  section.appendChild(rightArrow);

  const scrollAmount = 5 * 230; // 5 cards (image + gap)

  rightArrow.addEventListener("click", () => {
    row.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  leftArrow.addEventListener("click", () => {
    row.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });
});