
function setTheme(theme) {
  if (theme == 'red') {
    localStorage.setItem('panelTheme', theme);
    $('#current-theme').text(theme);
    $(':root').css('--main-color', '#000000');
  }
  if (theme == 'Blue') {
    localStorage.setItem('panelTheme',  'Blue');
    $('#current-theme').text('Blue');
    alert("Blue");
  }
  if (theme == 'Green') {
    localStorage.setItem('panelTheme', 'Green');
    $('#current-theme').text('Green');
    alert("Green");
  }
}