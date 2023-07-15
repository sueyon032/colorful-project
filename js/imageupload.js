window.addEventListener('DOMContentLoaded', (event) => {
  const uploadButton = document.getElementById('uploadButton');
  const uploadInput = document.getElementById('uploadInput');
  const showimage = document.getElementById('showimage');
  const imageicon = document.querySelector('.imageicon');

  uploadButton.addEventListener('click', () => {
    uploadInput.click();
  });

  uploadInput.addEventListener('change', () => {
    const file = uploadInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;

      showimage.innerHTML = '';
      showimage.appendChild(image);

      imageicon.style.display = 'none';
    };

    reader.readAsDataURL(file);
  });
});z