let questions = document.querySelectorAll(".question div");

questions.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.parentNode.classList.contains("active")) {
      item.parentNode.classList.toggle("active");
    } else {
      questions.forEach((question) => {
        question.parentNode.classList.remove("active");
      });
      item.parentNode.classList.add("active");
    }
  });
});
