class Carousel {
    constructor() {
        this.currentIndex = 0;
        this.images = [
            './imgs/个人照片.jpg',
            './imgs/校园生活1.png',
            './imgs/校园生活2.png'
        ];
        this.autoPlayInterval = 4000;
        this.init();
    }

    init() {
        this.carousel = document.getElementById('imageCarousel');
        this.createImages();
        this.createIndicators();
        this.setupControls();
        this.startAutoPlay();
    }

    createImages() {
        this.images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.className = index === 0 ? 'active' : '';
            
            // 添加错误处理以便调试
            img.onerror = () => {
                console.error(`图片加载失败: ${src}`);
            };
            
            img.onload = () => {
                console.log(`图片加载成功: ${src}`);
            };
            
            this.carousel.appendChild(img);
        });
    }

    createIndicators() {
        const indicators = document.querySelector('.carousel-indicators');
        this.images.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = index === 0 ? 'active' : '';
            dot.addEventListener('click', () => this.goToSlide(index));
            indicators.appendChild(dot);
        });
    }

    setupControls() {
        document.querySelector('.carousel-prev').addEventListener('click', () => this.prevSlide());
        document.querySelector('.carousel-next').addEventListener('click', () => this.nextSlide());
    }

    goToSlide(index) {
        const images = this.carousel.querySelectorAll('img');
        const indicators = document.querySelectorAll('.carousel-indicators button');
        
        images[this.currentIndex].classList.remove('active');
        indicators[this.currentIndex].classList.remove('active');
        
        this.currentIndex = index;
        
        images[this.currentIndex].classList.add('active');
        indicators[this.currentIndex].classList.add('active');
    }

    prevSlide() {
        const newIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
        this.goToSlide(newIndex);
    }

    nextSlide() {
        const newIndex = (this.currentIndex + 1) % this.images.length;
        this.goToSlide(newIndex);
    }

    startAutoPlay() {
        setInterval(() => this.nextSlide(), this.autoPlayInterval);
    }
} 