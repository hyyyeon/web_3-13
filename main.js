document.getElementById('time').innerHTML = new Date().toLocaleDateString();

// 배경색 버튼
function pink() {
  document.body.style.backgroundColor = 'pink';
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue';
}
function yellow() {
  document.body.style.backgroundColor = 'yellow';
}
function linen() {
  document.body.style.backgroundColor = 'linen';
}

// 사진
function showhtml() {
  document.getElementById('fig').src = 'img/html5.png';
  document.getElementById('desc').innerHTML =
    '<b>html은</b> 구조적 웹문서를 작성하는데 사용하는 마크업 언어다.';
}
function showcss() {
  document.getElementById('fig').src = 'img/css3.png';
  document.getElementById('desc').innerHTML = 'css는';
}
function showjs() {
  document.getElementById('fig').src = 'img/javascript.png';
  document.getElementById('desc').innerHTML = 'javascript는';
}

//  숨기기
function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}
