// Credit: https://dev.to/nikhilroy2/how-to-create-javascript-scrollspy-vanilla-js-tutorial-35o9

let menuSection = document.querySelectorAll('.project-toc a');

menuSection.forEach(v=> {
  v.onclick = (()=> {
   setTimeout(()=> {
      menuSection.forEach(j=> j.classList.remove('active'))
    v.classList.add('active')
  },300)
   })
})

window.onscroll = (()=> {
  let mainSection = document.querySelectorAll('section');

  mainSection.forEach((v,i)=> {
    let rect = v.getBoundingClientRect().y
    if(rect < window.innerHeight-400){
      menuSection.forEach(v=> v.classList.remove('active'))
      menuSection[i].classList.add('active')
    }
  })
})