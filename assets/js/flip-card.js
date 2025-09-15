/* ================================ */
/* FLIP CARD COMPONENT SCRIPT v4.2  */
/* ================================ */

document.addEventListener('DOMContentLoaded', function () {
  // Find all flip cards within the .features container OR .flip-card-grid container
  const flipCards = document.querySelectorAll('.features .flip-card, .flip-card-grid .flip-card');

  flipCards.forEach(card => {
    // Function to toggle the flip state
    const toggleFlip = () => {
      const isFlipped = card.classList.toggle('is-flipped');
      
      // Accessibility: Announce the revealed content
      const backCard = card.querySelector('.flip-card-back');
      if (isFlipped) {
        backCard.setAttribute('aria-hidden', 'false');
      } else {
        backCard.setAttribute('aria-hidden', 'true');
      }
    };

    // Event listener for click
    card.addEventListener('click', toggleFlip);

    // Event listener for keyboard interaction (Enter or Space)
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // Prevent page from scrolling on Space
        toggleFlip();
      }
    });
  });
});