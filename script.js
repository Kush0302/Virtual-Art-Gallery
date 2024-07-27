// Get all art pieces
const artPieces = document.querySelectorAll('.art-piece');

// Add event listeners to each art piece
artPieces.forEach((artPiece) => {
  artPiece.addEventListener('mouseover', () => {
    // Rotate the art piece on hover
    artPiece.style.transform = 'rotateY(15deg)';
  });

  artPiece.addEventListener('mouseout', () => {
    // Reset the art piece on mouse out
    artPiece.style.transform = 'rotateY(0deg)';
  });
});

// Add event listener to the gallery
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', (event) => {
  // Check if the click target is an art piece
  if (event.target.classList.contains('art-piece')) {
    // Toggle the art info visibility
    const artInfo = event.target.querySelector('.art-info');
    artInfo.style.opacity = artInfo.style.opacity === '1' ? '0' : '1';
  }
});