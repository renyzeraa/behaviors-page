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

const createHeader = () => {
  const header = $('<header>').addClass('menu').appendTo($('body'))
  $('<a>').addClass('logo').attr('href', '/').text('Nature').appendTo(header)
  $('<span>').addClass('mobile-btn').appendTo(header)
  $('<nav>')
    .append($('<ul>').append(createListHeader(aListHeader)))
    .appendTo(header)
}

export default function initHeader() {
  createHeader()
}
