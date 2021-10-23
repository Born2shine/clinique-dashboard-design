$(document).ready(() =>{

   $('#avatar-menu').click(()=>  $('.user-menu').toggle())
   
   const toggleNav = () =>   $('.content-wrapper').find('.left')[0].classList.toggle('show-nav')
  
   $('.toggle').click(()=>  toggleNav()) 

   $('.has-children').click((e) => {
        let li = e.target.closest('.has-children')
        const chevron = li.children[0].children[1].children[0]
        const hasChevron = chevron.classList.contains('fa-chevron-right')
        hasChevron ? chevron.classList.toggle('rotate90') : null
        $(li.children[1]).slideToggle()
        li = $('.has-children').removeClass('active-link')
        e.target.closest('.has-children').classList.toggle('active-link')
   })
})