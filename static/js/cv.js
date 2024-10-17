$(document).ready(function() {
    $('#printer_PT-BR').on('click', function () {
      $('#portuguese_content').printThis();
    });
    $('#printer_EN').on('click', function () {
        $('#english_content').textContent.printThis()
      });
  });