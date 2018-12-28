const typeTesterTag = document.querySelector('section.type-tester')

const typeSizeTag = document.querySelector(`input[name="type-size"]`)
const leadingTag = document.querySelector(`input[name="leading"]`)
const trackingTag = document.querySelector(`input[name="tracking"]`)
const styleTag = document.querySelector(`select[name="typeface"]`)

const typeSizeOutput = document.querySelector('.typesize-output')
const leadingOutput = document.querySelector('.leading-output')
const trackingOutput = document.querySelector('.tracking-output')

const circleTag = document.querySelectorAll('div.circle')

const outputTag = document.querySelector('div.output')





typeSizeTag.addEventListener('input', function(){
    
    outputTag.style.fontSize = this.value + 'px'
    typeSizeOutput.innerHTML = this.value + 'px'
    
})

leadingTag.addEventListener('input', function(){
    
    outputTag.style.lineHeight = this.value
    leadingOutput.innerHTML = this.value
    
    
})
trackingTag.addEventListener('input', function(){
    
    outputTag.style.letterSpacing = this.value + 'em'
    trackingOutput.innerHTML = this.value + 'em'
})


//    const selectedTag = document.querySelector('div.select-selected')
//const selectedContent = selectedTag.innerHTML

styleTag.addEventListener('input', function(){
    
    outputTag.style.fontFamily = this.value
    



    
    
})

circleTag.forEach(circle =>{
 
    circle.addEventListener('click', function(){
        const bgColor = this.getAttribute('data-color')
        const typeColor = this.getAttribute('data-typecolor')
        
        typeTesterTag.style.backgroundColor= bgColor
        typeTesterTag.style.color= typeColor
        outputTag.style.color= typeColor
   
    })
   
})


