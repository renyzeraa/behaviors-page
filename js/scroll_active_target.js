import debounce from './debounce.js'
export default function initScrollActiveTarget() {
  const sActiveClass = 'active'
  $('.logo').click(function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, 800)
  })

  const sections = $('[data-group]').toArray()
  function activateMenuAtCurrentSection() {
    const checkpoint = $(window).scrollTop() + ($(window).innerHeight() / 8) * 3
    const menuHeight = $('.menu').innerHeight()
    for (const section of sections) {
      const sectionTop = $(section).offset().top
      const sectionHeight = $(section).innerHeight()
      const sectionId = $(section).attr('id')

      const checkpointStart = checkpoint >= sectionTop + menuHeight * 2.5
      const checkpointEnd =
        checkpoint <= sectionTop + sectionHeight + menuHeight

      if (checkpointStart && checkpointEnd) {
        $('.menu-nav li a[href*=' + sectionId + ']').addClass(sActiveClass)
      } else {
        $('.menu-nav li a[href*=' + sectionId + ']').removeClass(sActiveClass)
      }
    }
  }

  $(window).scroll(debounce(activateMenuAtCurrentSection, 200))
}
