/**
 * Ativa um slide de fotos, e no hover para este
 * @param {String} className
 * @param {Integer} velocity
 */
export default function Slide(className, velocity) {
  className = `.${className}`
  const classActive = 'active'
  let rotate = setInterval(rotateSlide, velocity)
  $(className + ' > :first').addClass(classActive)
  $(className).hover(
    function () {
      clearInterval(rotate)
    },
    function () {
      rotate = setInterval(rotateSlide, velocity)
    }
  )

  function rotateSlide() {
    const activeSlide = $(className + ' > .active')
    const nextSlide = activeSlide.next()
    if (activeSlide.next().length) {
      activeSlide.removeClass(classActive)
      nextSlide.addClass(classActive)
    } else {
      activeSlide.removeClass(classActive)
      $(className + ' > :first').addClass(classActive)
    }
  }
}
