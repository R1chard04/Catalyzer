changeImage();

function changeImage(){
    let num = Math.floor(Math.random()*10 + 1);
    var image = document.getElementById('home_page');
    image.style.backgroundImage = `url('background_images/image_${num}.jpg')`;
}
