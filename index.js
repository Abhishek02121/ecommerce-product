let counter = 0;
function minus(){
  let number = document.getElementById("number");
  if(counter = 0){
  	counter = 0;
  } else if (counter > 0){
  	counter = counter -1 ;
  }
  number.value = counter;
  return counter;
}
function addition(){
let number = document.getElementById("number");
  if(counter > 4){
    alert("Product out of stock")
    counter = 0;
  } 
  counter = counter + 1;
  number.value = counter;
  return counter ;
}
function myFunction(){		
	let pl = document.querySelector(".phone-list");
	let a = document.querySelector(".ex");
	let b =document.querySelector(".ex1")
	a.classList.toggle("hide");
	b.classList.remove("hide");
    pl.style.display = "none"
}
function myFunction1(){
	let pl = document.querySelector(".phone-list");
	let a = document.querySelector(".ex");
	let b =document.querySelector(".ex1");
	b.classList.toggle("hide");
	a.classList.remove("hide");	
	pl.style.display = "block"
}

const lightbox = document.createElement("div");
const main = document.createElement("div");
const subimg = document.createElement('div');
const images = document.createElement('img');
const thumbn = document.createElement('div');
const thumb1 = document.createElement('img');
const thumb2 = document.createElement('img');
const thumb3 = document.createElement('img');
const thumb4 = document.createElement('img');
main.id = 'main';
lightbox.id = 'lightbox';
images.id="mainImg";
subimg.id = "subImg";
thumbn.id = "thumbImg";
thumb1.id = 'thumb1';
thumb2.id = 'thumb2';
thumb3.id = 'thumb3';
thumb4.id = 'thumb4';
document.body.appendChild(lightbox);
lightbox.appendChild(main);
main.appendChild(subimg);
subimg.appendChild(images);
images.src = "./images/image-product-1.jpg";
images.style.width = '65%';
images.style.height = '50%';
main.appendChild(thumbn);
thumbn.appendChild(thumb1)
thumb1.src = "./images/image-product-1-thumbnail.jpg"
thumbn.appendChild(thumb2)
thumb2.src = "./images/image-product-2-thumbnail.jpg"
thumbn.appendChild(thumb3)
thumb3.src = "./images/image-product-3-thumbnail.jpg"
thumbn.appendChild(thumb4)
thumb4.src = "./images/image-product-1-thumbnail.jpg"

function myFunction(){
	lightbox.style.display = "block";	
}
const images1 = document.getElementById('images');
const thumbnail1 = document.getElementById('thumb1')
const thumbnail2 = document.getElementById('thumb2')
const thumbnail3 = document.getElementById('thumb3')
const thumbnail4 = document.getElementById('thumb4')
  thumbnail1.addEventListener("click",()=> {  	
  	images1.src = ".images/image-product-1.jpg";     
  })
  thumbnail2.addEventListener("click",()=> {  	
  	images1.src = ".images/image-product-2.jpg";     
  })
  thumbnail3.addEventListener("click",()=> {  	
  	images1.src = ".images/image-product-3.jpg";     
  })
  thumbnail4.addEventListener("click",()=> {  	
  	images1.src = ".images/image-product-4.jpg";     
  })

lightbox.addEventListener('click', e=> {
	if(e.target !== e.currentTarget) {
	lightbox.style.display = "none";
}
})

 

