document.addEventListener('DOMContentLoaded', () => {
	// 获取导航栏元素
	    const nav = document.querySelector('#nav-intro');
	    
	    // 导航栏位置锁定函数
	    function updateNavPosition() {
	        const viewportHeight = window.innerHeight;
	        const scrollY = window.scrollY;
	        const docHeight = document.documentElement.scrollHeight;
	        
	        // 计算动态top值（保持垂直居中）
	        const maxScroll = docHeight - viewportHeight;
	        const progress = Math.min(scrollY / maxScroll, 1);
	        const basePosition = 50 + (progress * 10); // 添加轻微动态偏移
	        
	        nav.style.top = `${basePosition}%`;
	        nav.style.transform = `translateY(-50%)`; // 保持垂直居中
	    }
	
	    // 滚动事件整合
	    function handleScroll() {
	        const now = Date.now();
	        
	        // 节流控制
	        if (now - lastScroll > 16) {
	            // 更新导航栏位置
	            updateNavPosition();
	            
	            // 原有动画性能优化
	            document.documentElement.style.transform = 'translateZ(0)';
	            
	            lastScroll = now;
	        }
	    }
	
	    // 初始化
	    updateNavPosition();
	    window.addEventListener('scroll', handleScroll, { passive: true });
	
	
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
  };

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const target = entry.target;
      
      if (entry.isIntersecting) {
        // 入场动画
        target.classList.remove('bamboo-exit');
        target.classList.add('brush-entry');
        target.style.opacity = '1';
      } else {
        // 离场动画
        target.classList.remove('brush-entry');
        target.classList.add('bamboo-exit');
        
        // 重置动画准备下次触发
        setTimeout(() => {
          target.style.opacity = '0';
        }, 800); // 匹配动画时长
      }
    });
  }, observerOptions);

  // 观察所有目标元素
  document.querySelectorAll('.word-p, .tripad-p').forEach(el => {
    // 初始状态
    el.style.opacity = '0';
    el.style.willChange = 'transform, opacity, filter';
    
    // 开始观察
    animationObserver.observe(el);
  });

  // 滚动性能优化
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastScroll > 16) { // 约60FPS
      lastScroll = now;
      // 触发重绘保证动画流畅
      document.documentElement.style.transform = 'translateZ(0)';
    }
  }, { passive: true });
});