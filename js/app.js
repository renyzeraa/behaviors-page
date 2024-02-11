const aTypes = ['animais', 'florestas']

function getItens(type) {
  if (type === 'animais') {
    return [
      { name: 'Fox', id: 'fox', imgSrc: 'img/fox.jpg' },
      { name: 'Firefox', id: 'firefox', imgSrc: 'img/firefox.jpg' },
      { name: 'Wolf', id: 'wolf', imgSrc: 'img/wolf.jpg' }
    ]
  }
  if (type === 'florestas') {
    return [
      { name: 'Estrada', id: 'estrada', imgSrc: 'img/estrada.jpg' },
      { name: 'Sol', id: 'sol', imgSrc: 'img/sol.jpg' },
      { name: 'Verde', id: 'verde', imgSrc: 'img/verde.jpg' }
    ]
  }
}

function createSection(type) {
  const section = $('<section>')
    .addClass('container ' + type)
    .attr('data-group', type)
    .append(
      $('<h1>').text(
        type === 'animais' ? 'Animais Espirituais' : 'Florestas Termais'
      )
    )

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

aTypes.forEach(createSection)
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
