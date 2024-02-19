import debounce from './debounce.js'

export default function initAnimationScroll() {
  $('.tab-menu').attr('data-anime', 'scroll')

  // animação ao scroll
  const oTarget = $('[data-anime="scroll"]')
  const sAnimationClass = 'animate'
  const offset = $(window).height() * 0.85

  function animateScroll() {
    const windowTop = $(window).scrollTop()
    oTarget.each(function () {
      const targetTop = $(this).offset().top
      if (windowTop > targetTop - offset) {
        $(this).addClass(sAnimationClass)
      } else {
        $(this).removeClass(sAnimationClass)
      }
    })
  }

  animateScroll()
  $(document).scroll(
    debounce(function () {
      animateScroll()
    }, 200)
  )
}
