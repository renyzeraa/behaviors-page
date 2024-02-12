// Debounce do Lodash
debounce = function (func, wait, immediate) {
  var timeout
  return function () {
    var context = this,
      args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

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

function createHeader() {
  const header = $('<header>').addClass('menu').appendTo($('body'))
  $('<a>').addClass('logo').attr('href', '/').text('Nature').appendTo(header)
  $('<nav>')
    .append($('<ul>').append(createListHeader(aListHeader)))
    .appendTo(header)
}

createHeader()

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

$('.logo').click(function (e) {
  e.preventDefault()
  $('html, body').animate({ scrollTop: 0 }, 800)
})

const sections = $('[data-group]').toArray()
function activateMenuAtCurrentSection() {
  const checkpoint = $(window).scrollTop() + ($(window).innerHeight() / 8) * 3
  const menuHeight = $('.menu').innerHeight()
  for (const section of sections) {
    const sectionTop = $(section).offset().top
    const sectionHeight = $(section).innerHeight()
    const sectionId = $(section).attr('id')

    const checkpointStart = checkpoint >= sectionTop + menuHeight
    const checkpointEnd = checkpoint - menuHeight <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

$(window).scroll(debounce(activateMenuAtCurrentSection, 200))
