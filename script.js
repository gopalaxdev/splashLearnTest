const deleteButton = document.querySelector('#display__box');

var imageData = JSON.parse(localStorage.getItem('data'));
const shuffleButton = document.getElementById('suffle__button');
const displayBox = document.getElementById('display__box');
const displayGrid = document.createElement('div');
      displayGrid.classList.add('flex__container');

displayBox.appendChild(displayGrid)

//Displaying Images
displayImages(imageData);
function displayImages(imageData){
    displayGrid.innerHTML = "";
    for(let i=0; i<imageData.length; i++){
     console.log(imageData[i].url)
     createImageCard(imageData[i]);
    }

}
//Function to create Image Card
function createImageCard(imageDetails){

   const imageBox = document.createElement('div');
   imageBox.classList.add('image__box');

   imageBox.innerHTML = ` <div class="image__box__inner">
   <div class="image__box__front">
     <img class="images" src=${imageDetails.thumbnailUrl} alt=${imageDetails.title} data-src=${imageDetails.url} style="width:200px;height:200px">
   </div>
   <div class="image__box__back">
     <p class="dummy__text"> ${imageDetails.title}</p>
     <button class='delete__button' id=${imageDetails.id}> Delete </button>
   </div>
 </div>`;

 displayGrid.appendChild(imageBox);
}
//Click Handler for shuffle Button
shuffleButton.addEventListener('click', ()=>{

  // Animation can be added here
  shufflePosition();
  var data = JSON.parse(localStorage.getItem('data'));
  displayImages(data);
  lazyLoadImages();
})
// Function to shuffle the position
function shufflePosition(){
  for(let i=0; i<40; i++){
    const rand1 = Math.floor(Math.random() * imageData.length);
    const rand2 = Math.floor(Math.random() * imageData.length);

    const tmp = imageData[rand1];
    imageData[rand1] = imageData[rand2];
    imageData[rand2] = tmp;
  }

  localStorage.setItem('data', JSON.stringify(imageData));
}
//Delete Button Handler
deleteButton.addEventListener('click', (e)=>{
  if(e.target.classList[0] === 'delete__button'){
    var data = imageData.filter(item => item.id != e.target.id);
    localStorage.setItem('data', JSON.stringify(data));
    var disData = JSON.parse(localStorage.getItem('data'));
    displayImages(disData);
    lazyLoadImages();
  }
})

document.addEventListener('DOMContentLoaded', ()=>{
  lazyLoadImages();
})

//Function for lazy loading images
function lazyLoadImages(){
  const lazyImages = document.querySelectorAll('[data-src]')

  function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
      return;
    }

    img.src = src;
  }

  const imgOption = {
      threshold: 1,
      rootMargin: "0px 0px -10px 0px"
  }

  const imageObserver = new IntersectionObserver((enteries,
    imgObserver) => {
      enteries.forEach(entery =>{
        if(!entery.isIntersecting){
          return;
        }
        else{
          preloadImage(entery.target);
          imgObserver.unobserve(entery.target);
        }
      })
    }, imgOption);


  lazyImages.forEach(image => {
    imageObserver.observe(image);
  })
}