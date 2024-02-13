import debounce from './debounce.js'
import initHeader from './header.js'
import initContent from './content.js'
initHeader()
initContent()

// Call the function to create the florestas section
const sActiveClass = 'active'
$(document).ready(function () {
  $('[data-group]').each(function () {
    const aTargets = $(this).find('[data-target]')
    const aClicks = $(this).find('[data-click]')

    $(aTargets).first().addClass(sActiveClass)
    $(aClicks).first().addClass(sActiveClass)

    aClicks.click(function (e) {
      e.preventDefault()
      aTargets.removeClass(sActiveClass)
      aClicks.removeClass(sActiveClass)
      $(`[data-target="${$(this).data('click')}"]`).addClass(sActiveClass)
      $(this).addClass(sActiveClass)
    })
  })
})

const iMenuHeight = $('.menu').innerHeight()

$('.menu nav a[href^="#"]').click(function (e) {
  e.preventDefault()
  const sId = $(this).attr('href')
  const targetOffset = $(sId).offset().top
  $('html, body').animate(
    {
      scrollTop: targetOffset - iMenuHeight
    },
    600
  )
})

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
    const checkpointEnd = checkpoint - menuHeight <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

$(window).scroll(debounce(activateMenuAtCurrentSection, 200))
