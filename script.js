// 예: 스크롤 시 텍스트 페이드 인
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade');
    elements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('visible');
      }
    });
  });
  