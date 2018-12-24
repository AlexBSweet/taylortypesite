const parallaxSection = document.querySelector('section.parallax-1')




const parallax1 = function(){
        
        const topViewport = window.pageYOffset
        const midViewport = topViewport + (window.innerHeight / 2)
        const parallaxSectionTop = parallaxSection.offsetTop
        const parallaxSectionMid = parallaxSectionTop + (parallaxSection.offsetHeight / 2)
        
        const distanceToSection = midViewport - parallaxSectionMid
        
        const parallaxLetters = document.querySelector('section.parallax-1 img')
        
        
        
}





















