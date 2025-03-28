// nav-test1.js
const initNavigation = () => {
    const mobileTrigger = document.querySelector('.mobile-trigger');
    const tabletTrigger = document.querySelector('.tablet-trigger');
    const nav = document.querySelector('.poetic-nav');

	// 调试日志
	console.log('元素检测:', {
	    mobileTrigger: !!mobileTrigger,
	    tabletTrigger: !!tabletTrigger,
	    nav: !!nav
	});

    // 通用切换方法
    const toggleNav = () => {
		const isActive = document.body.classList.toggle('nav-active');
		console.log('导航状态:', isActive ? '显示' : '隐藏');
        // document.body.classList.toggle('nav-active');
        // // 移动端特殊处理
        // if (window.innerWidth <= 768) {
        //     nav.style.transform = document.body.classList.contains('nav-active') 
        //         ? 'translate(0, -50%)' 
        //         : 'translate(-100%, -50%)';
        // }
		// 移动端特殊处理
			if (window.innerWidth <= 768) {
		        nav.style.transform = isActive 
		            ? 'translateX(0) translateY(-50%)'
		            : 'translateX(-100%) translateY(-50%)';
		    }
    };

    // 事件绑定
    const bindEvents = () => {
        // 全局点击关闭
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && e.target !== mobileTrigger && e.target !== tabletTrigger) {
                document.body.classList.remove('nav-active');
            }
        });

        // 设备特定事件
        const device = window.innerWidth >= 1025 ? 'desktop' : 
                      window.innerWidth >= 769 ? 'tablet' : 'mobile';

        // 移动端事件
        if (mobileTrigger) {
            mobileTrigger.addEventListener('click', function(e) {
                console.log('移动按钮点击');
                e.stopPropagation();
                e.preventDefault();
                toggleNav();
            });
        }

// 全局点击关闭
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && e.target !== mobileTrigger) {
                console.log('外部点击，关闭导航');
                document.body.classList.remove('nav-active');
            }
        });

        // 平板端事件
        if (device === 'tablet' && tabletTrigger) {
            tabletTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleNav();
            });
        }

        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') document.body.classList.remove('nav-active');
        });
    };

    // 初始化
    const init = () => {
        bindEvents();
        // 移动端特殊初始化
        if (window.innerWidth <= 768) {
            nav.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
			nav.style.willChange = 'transform'; // 优化动画性能
        }
    };

    init();
    window.addEventListener('resize', () => {
        // document.body.classList.remove('nav-active');
        init();
    });
};

document.addEventListener('DOMContentLoaded', initNavigation);
