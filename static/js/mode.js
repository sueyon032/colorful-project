window.addEventListener('DOMContentLoaded', (event) => {
    const showimage = document.getElementById('showimage');
    const redLink = document.getElementById('redLink');
    const greenLink = document.getElementById('greenLink');
    const blueLink = document.getElementById('blueLink');

    const imageData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."; // Base64 data here
    showimage.src = imageData;

    redLink.addEventListener('click', () => {
        loadImageByColor('red');
    });

    greenLink.addEventListener('click', () => {
        loadImageByColor('green');
    });

    blueLink.addEventListener('click', () => {
        loadImageByColor('blue');
    });

    function loadImageByColor(color) {
        if (color === 'red' || color === 'blue' || color === 'green') {
            fetch(`/process_image/${color}`) // Use template literals to pass color as a parameter
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.message);
                    const showimage = document.getElementById('showimage');
                    showimage.src = 'data:image/png;base64,' + data.processed_image_base64;
                })
                .catch((error) => console.error('Error:', error));
        } else {
            console.error('Invalid color:', color);
            return;
        }
    }
    

    // function loadImageByColor(color) {
    //     if (color === 'red') {
    //         fetch('/process_image/red')
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data.message);
    //             })
    //             .catch((error) => console.error('Error:', error));
    //     } else if (color === 'green') {
    //         fetch('/process_image/green')
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data.message);
    //             })
    //             .catch((error) => console.error('Error:', error));
    //     } else if (color === 'blue') {
    //         fetch('/process_image/blue')
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data.message);
    //             })
    //             .catch((error) => console.error('Error:', error));
    //     } else {
    //         console.error('Invalid color:', color);
    //         return;
    //     }
    // }

});