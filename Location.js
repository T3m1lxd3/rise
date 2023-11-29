document.addEventListener("DOMContentLoaded", function () {
    const leaveReviewBtn = document.getElementById("leaveReviewBtn");
    const reviewForm = document.getElementById("reviewForm");
    const closeReviewFormBtn = document.getElementById("closeReviewFormBtn");
  
    // Toggle review form visibility with smooth transition
    const toggleReviewForm = () => {
      reviewForm.classList.toggle("hidden");
      setTimeout(() => {
        reviewForm.style.opacity = reviewForm.style.opacity === "0" ? "1" : "0";
      }, 10);
    };
  
    leaveReviewBtn.addEventListener("click", function () {
      toggleReviewForm();
    });
  
    // Close the review form
    closeReviewFormBtn.addEventListener("click", function () {
      toggleReviewForm();
    });
  });
  
