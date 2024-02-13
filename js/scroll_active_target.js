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

      const checkpointStart = checkpoint >= sectionTop + menuHeight
      const checkpointEnd =
        checkpoint - menuHeight <= sectionTop + sectionHeight

      if (checkpointStart && checkpointEnd) {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.add(sActiveClass)
      } else {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.remove(sActiveClass)
      }
    }
  }

  $(window).scroll(debounce(activateMenuAtCurrentSection, 200))
}
