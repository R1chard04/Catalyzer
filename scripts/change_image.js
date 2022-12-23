// const randomFile = require('select-random-file')

// const dir = '/background_images';
// randomFile(dir, (err, file) => {
//     console.log('The random file is: ${file}.');
// })

changeImage();

function changeImage(){
    let num = Math.floor(Math.random()*5 + 1);
    var image = document.getElementById('home_page');
    image.style.backgroundImage = `url('background_images/image_${num}.jpg')`;
}
