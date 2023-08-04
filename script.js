let imagesData = [
    {
        photo: 'images/city.jpg',
        title: 'City',
        description: 'Sunset in the city'
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
        title: 'Rose',
        description: 'Beautiful but not so delicate'
    },
];

let currentPhoto = 0;

function loadPhoto(currentPhoto) {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').html(`${imagesData[currentPhoto].title}`);
    $('#photo-description').html(`${imagesData[currentPhoto].description}`);
    $('.box').css("border-color", "white");
    $(`#${imagesData[currentPhoto].title}`).css("border-color", "black");
}

$('#rightButton').click(function() {
    if (currentPhoto >= imagesData.length - 1) {
    } else {
    currentPhoto++;
    loadPhoto(currentPhoto);
    }
});

$('#leftButton').click(function() {
    if (currentPhoto == 0) {
    } else {
    currentPhoto--;
    loadPhoto(currentPhoto);
    }
});

imagesData.forEach((item, index) => {
    $('.thumbnails').append(`<div class="box" id="${item.title}" data-index="${index}"><h4>${item.title}</h4></div>`);
    $(`#${item.title}`).css("background-image", "url(" + item.photo + ")");
    $('.box').click((event) => {
      let indexClicked = $(event.target).attr('data-index');
      let numberIndex = parseInt(indexClicked);
      currentPhoto = numberIndex;
      loadPhoto(currentPhoto)
    });
  });
  
  loadPhoto(currentPhoto);