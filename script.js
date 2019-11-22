/* //Declaring Id's
let imageoneClick = document.getElementById('imageoneClick'),
    imagetwoClick = document.getElementById('imagetwoClick'),
    imagethreeClick = document.getElementById('imagethreeClick'),
    imagefourClick = document.getElementById('imagefourClick'),
    imagefiveClick = document.getElementById('imagefiveClick'),
    imagesixClick = document.getElementById('imagesixClick'),
    removeEverything = document.getElementById('removeEverything');

//Images
let imageOne = document.getElementById('imageOne'),
    imageTwo = document.getElementById('imageTwo'),
    imageThree = document.getElementById('imageThree'),
    imageFour = document.getElementById('imageFour'),
    imageFive = document.getElementById('imageFive'),
    imageSix = document.getElementById('imageSix');

imageoneClick.addEventListener('click', function (event) {
    //Adds style="display: none;"
    //Hides
    removeEverything.style.display = "none";

    //Adds style="display: ;"
    //Shows
    imageOne.style.display = "";
});

imagetwoClick.addEventListener('click', function (event) {
    //Adds style="display: none;"
    //Hides
    removeEverything.style.display = "none";

    //Adds style="display: ;"
    //Shows
    imageTwo.style.display = "";
});

imagethreeClick.addEventListener('click', function (event) {
    //Adds style="display: none;"
    //Hides
    removeEverything.style.display = "none";

    //Adds style="display: ;"
    //Shows
    imageThree.style.display = "";
});

imagefourClick.addEventListener('click', function (event) {
    //Adds style="display: none;"
    //Hides
    removeEverything.style.display = "none";

    //Adds style="display: ;"
    //Shows
    imageFour.style.display = "";
});

imagefiveClick.addEventListener('click', function (event) {
    //Adds style="display: none;"
    //Hides
    removeEverything.style.display = "none";

    //Adds style="display: ;"
    //Shows
    imageFive.style.display = "";
});

imagesixClick.addEventListener('click', function (event) {
    //Adds style="display: none;"
    //Hides
    removeEverything.style.display = "none";

    //Adds style="display: ;"
    //Shows
    imageSix.style.display = "";
}); */

//-----------------------------W3 Schools Modal Image Test----------------------------------//
// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function (event) {
    modal.style.display = "none";
});