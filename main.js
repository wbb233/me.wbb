document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentSlide = 0;

    function showSlide(index) {
        // 移除所有活动状态
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // 设置新的活动状态
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
    }

    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) prev = slides.length - 1;
        showSlide(prev);
    }

    // 绑定按钮事件
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // 绑定指示器事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });

    // 自动轮播
    setInterval(nextSlide, 5000);
}); 