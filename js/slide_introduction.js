import Slide from './slide.js'

export default function initSlideIntroduction() {
  const classSlide = 'introducao'
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

  const section = $('<section>')
    .addClass(classSlide + ' slide')
    .appendTo('body')
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

  Slide(classSlide, 2000)
}
