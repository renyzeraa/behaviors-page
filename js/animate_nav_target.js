export default function initAnimateNavTarget() {
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
}
