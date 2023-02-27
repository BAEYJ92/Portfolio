// const divBox = document.getElementsByClassName('box')[0];
// console.log(divBox);

// window.addEventListener('scroll', function(){
//   let value = window.scrollY;
//   console.log(value)

//   if(value > 30) {
//     divBox.style.animation = 'moving 10s linear forwards';
//   }

// });

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
    type: 'bullets',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  spaceBetween: 0, // 패널 사이의 간격을 50px로 설정 
  grabCursor: true, // 스와이프 시 마우스 포인터 모양 변경
  slidesPerView: 1, // css에 지정한 슬라이더의 크기를 반영
  centeredSlides: true, // 슬라이드 패널을 항상 가운데로 반환
  speed: 500, // 슬라이더 이동 속도 지정
  // effect: 'cards', // 이팩트 효과
  // coverflowEffect: {
  //   rotate: 50, // 회전각도
  //   stretch: -200, // 슬라이드 간의 당김 정도
  //   depth: 400, // 원근감 지정
  //   modifier: 1, // 중첩 정도 지정
  //   slideShadows: false //슬라이드 그림자 생성
  // },

  autoplay: { // 자동 슬라이드
    delay: 1000,
    disableOnInteraction: true
  },

});

const btnStart = document.querySelector('li.btnStart');
const btnStop = document.querySelector('li.btnStop');
console.log(btnStart. btnStop);

btnStart.addEventListener('click', function(){
  swiper.autoplay.start();
});
btnStop.addEventListener('click', function(){
  swiper.autoplay.stop();
});

// // 화면의 사이즈가 변하면 section 높이값을 고정
// $('window').resize(function(){
//   let ht = $(window).height();
//   $('section').height(ht);
// });

//  // 메뉴 클릭 시 상하스크롤 하기
// $('ul#gnb li').click(function(e){
    
//   // 고유의 기능을 막아준다.(a 태그)
//   e.preventDefault();

//   // 화면의 높이값
//   let ht = $(window).height();
//   // 클릭한 요소의 인덱스 값
//   let i = $(this).index();
//   // 인덱스 값 * 화면의 높이 값
//   let nowTop = i * ht;
//   // 해당 위치로 스크롤 이동
//   $('html, body').stop().animate({scrollTop : nowTop}, 1400);

// });

  // 메뉴 클릭 시 상하스크롤 하기
  $('ul#gnb li').click(function(e){
    
    // 고유의 기능을 막아준다.(a 태그)
    e.preventDefault();

    // 화면의 높이값
    let ht = $(window).height();
    // 클릭한 요소의 인덱스 값
    let i = $(this).index();
    // 인덱스 값 * 화면의 높이 값
    let nowTop = i * ht;
    // 해당 위치로 스크롤 이동
    $('html, body').stop().animate({scrollTop : nowTop}, 1400);

  });