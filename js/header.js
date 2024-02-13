export default function initHeader() {
  const aListHeader = [
    { name: 'Animais', id: 'animais' },
    { name: 'Florestas', id: 'florestas' },
    { name: 'Montanhas', id: 'montanhas' }
  ]

  function createListHeader(aLista) {
    return aLista.map(oData => {
      return $('<li>').append(
        $('<a>').attr('href', `#${oData.id}`).text(oData.name)
      )
    })
  }

  const header = $('<header>').addClass('menu').appendTo($('body'))
  $('<a>').addClass('logo').attr('href', '/').text('Nature').appendTo(header)
  const mobileBtn = $('<span>').addClass('mobile-btn').appendTo(header)
  const navMenu = $('<nav>')
    .append($('<ul>').append(createListHeader(aListHeader)))
    .appendTo(header)

  $(window).on('resize', () => {
    if ($(window).width() < 768) {
      navMenu.hide()
      mobileBtn.addClass('show-btn')
    } else {
      navMenu.show()
      mobileBtn.removeClass('show-btn')
    }
  })
}
