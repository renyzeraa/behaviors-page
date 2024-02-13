export default function initActiveTarget() {
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
}
