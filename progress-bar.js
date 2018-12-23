
// set a variable for the pageYOffset - telling you how far down you have scrolled, set a variable for the pageHeight telling you the total document page height, set a variable for "totalScrollableDistance" by subtracting the window.innerHeight from the pageHeight, set a variable for the "percentageWidth" of the scrollbar by dividing the distance scrolled (pageYOffset) by the total page height, then set the width of your progress bar to be the value of the "percentage width" multiplied by 100 to make it a round number rather than a decimal- activating on the event listener ('scroll')

const progressBar = document.querySelector('div.progress-bar')
const bodyTag = document.querySelector('body')
const pixelsDownTag = document.querySelector('h3.pixels-down')


document.addEventListener('scroll', function(){
    
    const pageTop = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollableDistance = pageHeight - window.innerHeight
    
    const percentageWidth = pageTop / totalScrollableDistance
    
    progressBar.style.width = percentageWidth * 100 + '%'
    
    
    pixelsDownTag.innerHTML = pageTop
    
    
})