

 
  // chuyen doong kho full man hinh right:30px->right:-555px;
  //chuyen dong xuong duoi botton 0px->-360px
  
var contact= document.querySelector('.contact');
var contactus=document.querySelector('.contact__us')
var exit=document.querySelector('.exit');
var trangthai='in'
var x=screen.width;
console.log(x);
// if(x<=768){
//   document.querySelectorAll('.inner').innerHTML = "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, minima incidunt porro enim molestiae et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam corrupti reiciendis sed ";
// }
  // contact.classList.remove('display__bottom');
  // contact.classList.remove('hidden__bottom');
contactus.addEventListener('click',function(){
  if(trangthai=='in'){
    contact.classList.add('display__top');
    // contact.classList.remove('hidden__top');
    trangthai='out';
  }
  else{ 
    // contact.classList.add('hidden__top');
    contact.classList.remove('display__top');
    trangthai='in';
    
  }
 
})
exit.addEventListener('click',function(){

  if(trangthai=='out'){
    // contact.classList.add('hidden__top');
    contact.classList.remove('display__top');
    trangthai=='in';
  }
  

})
//  else {
  // contact.classList.remove('display__top');
  // contact.classList.remove('hidden__top');
//   contactus.addEventListener('click',function(){
//     contact.classList.remove('display__bottom');
//     contact.classList.remove('hidden__bottom');
//     if(trangthai=='in'){
//       contact.classList.add('display__bottom');
//       contact.classList.remove('hidden__bottom');
//       trangthai='out';
//       console.log('aaaa');
//     }
//     else{ 
//       contact.classList.add('hidden__bottom');
//       contact.classList.remove('display__bottom');
//       trangthai='in';
  
//     }
   
//   })
//   exit.addEventListener('click',function(){
//     if(trangthai=='out'){
//       contact.classList.add('hidden__bottom');
//       contact.classList.remove('display__bottom');
//       trangthai=='in';
//     }
// })
// }