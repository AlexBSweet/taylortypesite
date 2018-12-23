$('.grid').on('mousemove', function(e){
    $('.hover').css({
       left:  e.pageX,
       top:   e.pageY,
      visibility: 'visible'
    })
})
$('.grid').on('mouseleave', function(){
   $('.hover').css({
     visibility: 'hidden'
      })
})


const hoverDiv = document.querySelector('div.hover')
const gridDiv = document.querySelectorAll('section.grid div')
const gridSection = document.querySelector('section.grid')




gridDiv.forEach(div =>{
  div.addEventListener('mouseenter', function(){
    const hoverLetter = div.innerHTML

    hoverDiv.innerHTML =  hoverLetter
    hoverDiv.style.fontSize = '190px'
  })
  div.addEventListener('mouseleave', function(){

  })
  
})