document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      answer = question.nextElementSibling;

      
      if (answer.style.display == "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});
