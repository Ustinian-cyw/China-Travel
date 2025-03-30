document.addEventListener('DOMContentLoaded', () => {
  // ===== 交互动画增强版 =====
  const observerOptions = {
    root: null,
    rootMargin: '-25% 0px', // 上下扩展触发区域
    threshold: 0.05 // 更早触发
  };

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const target = entry.target;
      console.log(`元素 ${target.id} 触发状态:`, entry.isIntersecting); // 调试日志

      if (entry.isIntersecting) {
        // 强制重绘破解浏览器优化
        target.style.display = 'none';
        void target.offsetHeight; // 触发重排
        target.style.display = 'block';

        target.classList.add('brush-entry');
        target.style.opacity = '1';
      } else {
        target.classList.remove('brush-entry');
        setTimeout(() => {
          target.style.opacity = '0';
        }, 800);
      }
    });
  }, observerOptions);

  // ===== 初始化观察目标 =====
  document.querySelectorAll('.word-p, .tripad-p').forEach(el => {
    el.style.opacity = '0';
    el.style.willChange = 'transform, opacity'; // 精简性能提示
    animationObserver.observe(el);
    console.log('已绑定动画元素:', el.id); // 验证绑定
  });

  // ===== 移除可能冲突的滚动逻辑 =====
  // window.addEventListener('scroll', () => {
  //   document.documentElement.style.transform = 'translateZ(0)'; // 保留性能优化
  // }, { passive: true });
});


// 携程数据图
// 滚动动画触发
function checkScroll() {
	const cards = document.querySelectorAll('.season-card');
	cards.forEach(card => {
		const cardTop = card.getBoundingClientRect().top;
		if (cardTop < window.innerHeight * 0.8) {
			card.classList.add('active');
		}
	});
}

// 优化滚动性能
let isScrolling;
window.addEventListener('scroll', () => {
	window.clearTimeout(isScrolling);
	isScrolling = setTimeout(checkScroll, 50);
}, false);

// 初始化触发
checkScroll();
