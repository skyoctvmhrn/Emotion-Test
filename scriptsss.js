const commentForm = document.querySelector('form');
const commentList = document.getElementById('comment-list');
const commentsSection = document.querySelector('.comments');

commentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const rating = document.querySelector('input[name="rate"]:checked');
  const ratingValue = rating ? rating.id.split('-')[1] : '';
  const commentText = document.querySelector('.textarea textarea').value.trim();

  if (ratingValue && commentText) {
    const newComment = document.createElement('li');
    newComment.classList.add('comment'); // Ensure the new comment has the appropriate class

    newComment.innerHTML = `
      <div class="stars">
        ${getStarIcons(ratingValue)}
      </div>
      <div class="comment-text">
        <h3>You</h3>
        <p>${commentText}</p>
      </div>
    `;

    commentList.appendChild(newComment);

    // Reset form
    rating.checked = false;
    document.querySelector('.textarea textarea').value = '';
    document.querySelector('form header').textContent = 'Thank you for your comment!'; // Inform user

    // Show comments section
    commentsSection.style.display = 'block';
  } else {
    alert('Please select a rating and enter your comment.');
  }
});

// Helper function to generate star icons based on rating value
function getStarIcons(rating) {
  const filledStars = '<span class="fas fa-star"></span>'.repeat(rating);
  const emptyStars = '<span class="far fa-star"></span>'.repeat(5 - rating);
  return filledStars + emptyStars;
}
