var mainMargin = 0;

function showChatWindow() {
  const mainStyle = document.getElementById('main').style;
  mainMargin = mainStyle.marginLeft;

  mainStyle.marginLeft = '320px';
  document.getElementById('chatButton').style.width = '0';
  document.getElementById('mySidebar').style.width = '320px';
}

function hideChatWindow() {
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('chatButton').style.width = '35px';
  document.getElementById('main').style.marginLeft = mainMargin;
}