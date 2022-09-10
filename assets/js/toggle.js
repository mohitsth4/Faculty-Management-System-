document.addEventListener("DOMContentLoaded", function (event) {

  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        // show navbar
        nav.classList.toggle('show')
        // Change icons
        toggle.classList.toggle('fa-xmark')
        // add padding into body
        bodypd.classList.toggle('body-pd')
        // add padding into header
        headerpd.classList.toggle('body-pd')
      })
    }
  }

  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

  /*===== ACTIVE MENU=====*/
  const linkColor = document.querySelectorAll('.nav_link')

  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))

});

var myLink = document.querySelector('a[href="#"]');
myLink.addEventListener('click', function (e) {
  e.preventDefault();
});

/***** Search Filter */

$(document).ready(function () {
  $("#searchFilter").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#profTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


/***** Click Edit Content */

$(document).ready(function () {
  $('.edit-text').on('click', function () {
    var that = $(this);
    if (that.find('input').length > 0) {
      return;
    }
    var currentText = that.text();

    var $input = $('<input>').val(currentText)
      .css({
        'position': 'absolute',
        top: '0px',
        left: '0px',
        width: that.width(),
        height: that.height(),
        opacity: 0.9,
        padding: '10px'
      });

    $(this).append($input);

    // Handle outside click
    $(document).click(function (event) {
      if (!$(event.target).closest('.edit-text').length) {
        if ($input.val()) {
          that.text($input.val());
        }
        that.find('input').remove();
      }
    });
  });
});


/***** Delete Row */

$('table').on('click', 'tr a.del', function (e) {
  e.preventDefault();
  $(this).parents('tr').remove();
});

