const sectionsTag = document.querySelector('section.parallax')





const parallaxRun = function(){
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)
  



    const topSection = sectionsTag.offsetTop
    const midSection = topSection + (sectionsTag.offsetHeight / 2)
    const distanceToSection = midViewport - midSection
    const parallaxTags = sectionsTag.querySelectorAll(`[data-parallax]`)
    
    //loop over each parallaxed tag
    // this allows us to grab any element with the data attribute of 'data-parallax', and apply that speed to the element, rather than having to 				select individually based on classes-making it a much more flexible system
    parallaxTags.forEach(tag =>{
      const speed = parseFloat(tag.getAttribute('data-parallax'))
      const rotate = parseFloat(tag.getAttribute('data-rotate'))

      	tag.style.transform = `translate(0, ${distanceToSection * speed}px) rotate(${distanceToSection * rotate}deg)`
        
         console.log(distanceToSection)
    })
  }



document.addEventListener('scroll', function(){
        parallaxRun()
})
document.addEventListener('resize', function(){
    parallaxRun()
})

parallaxRun()









