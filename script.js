let imagesData = [
    {
        photo: 'images/city.jpg',
        title: 'City',
        description: 'City in the afternoon'
    },
    {
        photo: 'images/desertmoon.jpg',
        title: 'Moon',
        description: 'The desert moon is magical'
    },
    {
        photo: 'images/forrest.jpg',
        title: 'Forrest',
        description: 'Forrest is full of sounds, yet peaceful'
    },
    {
        photo: 'images/landscape.jpg',
        title: 'Horizont',
        description: 'So many options in your sight'
    },
    {
        photo: 'images/lighthouse.jpg',
        title: 'Lighthouse',
        description: 'The beacon of safe harbor'
    },
    {
        photo: 'images/redrose.jpg',
        title: 'Red rose',
        description: 'Beautiful but not so delicate'
    },
];

let currentPhoto = 2;

$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').append(`${imagesData[currentPhoto].title}`);
$('#photo-description').append(`${imagesData[currentPhoto].description}`);

function loadPhoto(currentPhoto) {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').append(`${imagesData[currentPhoto].title}`);
    $('#photo-description').append(`${imagesData[currentPhoto].description}`);
  }