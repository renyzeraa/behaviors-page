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
  $('<span>')
    .addClass('mobile-btn')
    .appendTo(header)
    .click(function () {
      $(this).toggleClass('active')
      if ($(this).hasClass('active')) {
        $('.menu-nav').addClass('active')
        return
      }
      $('.menu-nav').removeClass('active')
    })
  $('<nav>')
    .addClass('menu-nav  mobile-menu')
    .append($('<ul>').append(createListHeader(aListHeader)))
    .appendTo(header)
}
