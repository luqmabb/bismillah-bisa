// carousel slider
let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    // alert(items.length)
    const totalItems = items.length;

    function showItem(index) {
      items.forEach(item => {
        item.style.transform = `translateX(-${index * 100}%)`;
      });
    }

    function nextSlide() {
      currentIndex++;
      if (currentIndex >= totalItems) {
        currentIndex = 0;
      }
      showItem(currentIndex);
    //   alert(currentIndex)
    }

    function prevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = totalItems - 1;
      }
      showItem(currentIndex);
    }

