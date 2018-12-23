const typeSizeTag = document.querySelector(`input[name="type-size"]`)
const styleTag = document.querySelector(`select[name="typeface"]`)
const outputTag = document.querySelector('div.output')





typeSizeTag.addEventListener('input', function(){
    
    outputTag.style.fontSize = this.value + 'px'
    
})

styleTag.addEventListener('input', function(){
    
    outputTag.style.fontFamily = this.value
    
})




