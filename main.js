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
} 