document.addEventListener("DOMContentLoaded", function () {
    const leaveReviewBtn = document.getElementById("leaveReviewBtn");
    const reviewForm = document.getElementById("reviewForm");
    const closeReviewFormBtn = document.getElementById("closeReviewFormBtn");

    const toggleReviewForm = () => {
        reviewForm.classList.toggle("active");
    };

    leaveReviewBtn.addEventListener("click", function () {
        toggleReviewForm();
    });

    closeReviewFormBtn.addEventListener("click", function () {
        toggleReviewForm();
    });
});
