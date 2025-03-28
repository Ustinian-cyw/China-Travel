// nav-test1.js
const initNavigation = () => {
    const mobileTrigger = document.querySelector('.mobile-trigger');
    const tabletTrigger = document.querySelector('.tablet-trigger');
    const nav = document.querySelector('.poetic-nav');

    // 通用切换方法
    const toggleNav = () => {
        document.body.classList.toggle('nav-active');
        // 移动端特殊处理
        if (window.innerWidth <= 768) {
            nav.style.transform = document.body.classList.contains('nav-active') 
                ? 'translate(0, -50%)' 
                : 'translate(-100%, -50%)';
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
        if (device === 'mobile' && mobileTrigger) {
            mobileTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleNav();
            });
        }

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
        }
    };

    init();
    window.addEventListener('resize', () => {
        document.body.classList.remove('nav-active');
        init();
    });
};

document.addEventListener('DOMContentLoaded', initNavigation);