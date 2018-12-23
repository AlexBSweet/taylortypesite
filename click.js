const clickTag = document.querySelector('div.click-image')
const clearTag = document.querySelector('div.clear')

let imageNumber = 0
const clickImages = [
    'images/click-04.svg',
    'images/click-04.svg',
    'images/click-04.svg'
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


