window.addEventListener('DOMContentLoaded', (event) => {
    const uploadButton = document.getElementById('uploadButton');
    const fileInput = document.getElementById('uploadInput');
    const previewContainer = document.getElementById('previewContainer');
    const checkImage = document.querySelector('.check-image');  // 이미지 삽입 되었을 때 check-image와 text3 숨기기
  
    uploadButton.addEventListener('click', () => {
      fileInput.click();
    });
  
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const image = new Image();
        image.src = e.target.result;
  
        previewContainer.innerHTML = '';
        previewContainer.appendChild(image);
  
        // 이미지가 추가될 때 check-image와 text3를 숨김
        checkImage.style.display = 'none';
      };
  
      reader.readAsDataURL(file);
    });
  });
  