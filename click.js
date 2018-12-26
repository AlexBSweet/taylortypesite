const clickTag = document.querySelector('div.click-image')
const clearTag = document.querySelector('div.clear')

let imageNumber = 0
const clickImages = [
     'images/click-06.svg',
    'images/click-06.svg',
    'images/click-07.svg',
    'images/click-08.svg',
    'images/click-09.svg',
    'images/click-10.svg',
    'images/click-11.svg',
    'images/click-12.svg',
    'images/click-13.svg',
    'images/click-14.svg',
    'images/click-15.svg',
    'images/click-16.svg',
    'images/click-17.svg',
    'images/click-18.svg',
    'images/click-19.svg',
    'images/click-31.svg',
    'images/click-30.svg',
    'images/click-29.svg',
    'images/click-28.svg',
    'images/click-27.svg',
    'images/click-26.svg',
    'images/click-25.svg',
    'images/click-24.svg',
    'images/click-23.svg',
    'images/click-22.svg',
    'images/click-21.svg',
    'images/click-20.svg'
]


const addStamp = function(x, y){
    const img = document.createElement('img')
    img.style.left = (x - window.innerWidth /2) + 'px'
    img.style.top = y + 'px'
    
    
    imageNumber = imageNumber + 1
    if (imageNumber > clickImages.length -1){imageNumber = 0}
    
    img.setAttribute('src', clickImages[imageNumber])
    clickTag.appendChild(img)
    

    
}



document.addEventListener('click', function(event){
    
    addStamp(event.pageX, event.pageY)
    
    clearTag.classList.add('clear-open')
    
    
})

clearTag.addEventListener('click', function(){
    
    clickTag.innerHTML = ''
    clearTag.classList.remove('clear-open')
})








