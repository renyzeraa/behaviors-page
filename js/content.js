const aTypes = ['animais', 'florestas', 'montanhas']
const aDataAnimais = [
  { name: 'Fox', id: 'fox', imgSrc: 'img/fox.jpg' },
  { name: 'Firefox', id: 'firefox', imgSrc: 'img/firefox.jpg' },
  { name: 'Wolf', id: 'wolf', imgSrc: 'img/wolf.jpg' }
]
const aDataFlorestas = [
  { name: 'Estrada', id: 'estrada', imgSrc: 'img/estrada.jpg' },
  { name: 'Sol', id: 'sol', imgSrc: 'img/sol.jpg' },
  { name: 'Verde', id: 'verde', imgSrc: 'img/verde.jpg' }
]
const aDataMontanhas = [
  { name: 'Pico', id: 'pico', imgSrc: 'img/pico.jpg' },
  { name: 'Montanha', id: 'montanha', imgSrc: 'img/montanha.jpg' },
  { name: 'Monte', id: 'monte', imgSrc: 'img/monte.jpg' }
]

function getItens(type) {
  if (type === 'animais') {
    return aDataAnimais
  }
  if (type === 'florestas') {
    return aDataFlorestas
  }
  if (type === 'montanhas') {
    return aDataMontanhas
  }
  return []
}

function getTitleSection(type) {
  switch (type) {
    case 'animais':
      return 'Animais Espirituais'
    case 'animais':
      return 'Florestas Termais'
    case 'montanhas':
      return 'Montanhas da Alma'
    default:
      return ''
  }
}

function createSection(type) {
  const sTitle = getTitleSection(type)
  const section = $('<section>')
    .addClass('container ' + type)
    .attr('data-group', type)
    .attr('id', type)
    .append($('<h1>').text(sTitle))

  const ul = $('<ul>').addClass('tab-menu')
  section.append(ul)
  getItens(type).forEach(sectionItem => {
    ul.append(
      $('<li>').append(
        $('<a>').attr('data-click', sectionItem.id).text(sectionItem.name)
      )
    )

    const item = $('<div>').addClass('item').attr({
      id: sectionItem.id,
      'data-target': sectionItem.id
    })

    const itemImg = $('<div>').addClass('item-img')

    $('<img>')
      .attr({
        src: sectionItem.imgSrc,
        alt: sectionItem.name
      })
      .appendTo(itemImg)

    $('<h2>').text(sectionItem.name).appendTo(itemImg)

    item.append(itemImg)

    // Create item-info
    const itemInfo = $('<div>').addClass('item-info')
    const characteristicsDiv = $('<div>').append(
      $('<h3>').text('Características'),
      $('<p>').text(
        'Todavia, a valorização de fatores subjetivos oferece uma interessante oportunidade para verificação das formas de ação.'
      )
    )

    // Create habitat
    const habitatDiv = $('<div>')
      .append($('<h3>').text('Habitat'))
      .append(
        $('<p>').text(
          'Todavia, a valorização de fatores subjetivos oferece uma interessante oportunidade para verificação das formas de ação.'
        )
      )

    itemInfo.append(characteristicsDiv)
    itemInfo.append(habitatDiv)

    item.append(itemInfo)

    section.append(item)
  })
  $('body').append(section)
}

export default function initContent() {
  aTypes.forEach(createSection)
}
