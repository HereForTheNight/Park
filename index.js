var imageModal = function(imagePath, imageTitle){
  alert(imagePath);
  $('#pictureModalTitle')[0].textContent = imageTitle;
  $('#pictureModalImage')[0].src = imagePath;
}
