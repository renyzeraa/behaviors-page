export default function initSlideIntroduction() {
  const aSlides = [
    {
      title: 'Animais',
      imgSrc: 'img/slide/slide-1.jpg'
    },
    {
      title: 'Florestas',
      imgSrc: 'img/slide/slide-2.jpg'
    },
    {
      title: 'Montanhas',
      imgSrc: 'img/slide/slide-3.jpg'
    }
  ]

  const section = $('<section>').addClass('introducao slide').appendTo('body')
  aSlides.forEach(oItem => {
    $('<div>')
      .append(
        $('<img>').attr({
          src: oItem.imgSrc,
          alt: oItem.title
        })
      )
      .append($('<h2>').text(oItem.title))
      .appendTo(section)
  })

  $('.slide > :first').addClass('active')

  setInterval(function () {
    const activeSlide = $('.slide > .active')
    const nextSlide = activeSlide.next().length
      ? activeSlide.next()
      : activeSlide.prev()
    activeSlide.removeClass('active')
    nextSlide.addClass('active')
  }, 3500)
}
