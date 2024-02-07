$(document).ready(function () {
  const sActiveClass = 'active'

  $('.animais .tab-menu a').first().addClass(sActiveClass)
  $('.animais .item').first().addClass(sActiveClass)
  $('.florestas .tab-menu a').first().addClass(sActiveClass)
  $('.florestas .item').first().addClass(sActiveClass)

  $('.animais .tab-menu a').click(function (e) {
    e.preventDefault()
    $('.animais .tab-menu a, .animais .item').removeClass(sActiveClass)
    $(this).addClass(sActiveClass)
    $($(this).attr('href')).addClass(sActiveClass)
  })

  $('.florestas .tab-menu a').first().addClass(sActiveClass)
  $('.florestas .item').first().addClass(sActiveClass)

  $('.florestas .tab-menu a').click(function (e) {
    e.preventDefault()
    $('.florestas .tab-menu a, .florestas .item').removeClass(sActiveClass)
    $(this).addClass(sActiveClass)
    $($(this).attr('href')).addClass(sActiveClass)
  })
})
