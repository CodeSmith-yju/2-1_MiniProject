                        // 자동 슬라이드 간격 설정 (6초)
                        var slideIndex = 1;
                        var slideInterval = setInterval(nextSlide, 6000);
                    
                        // 이전/다음 버튼 클릭 이벤트 핸들러
                        function plusSlides(n) {
                          showSlides(slideIndex += n);
                        }
                    
                        // 현재 슬라이드 점 활성화 표시
                        function currentSlide(n) {
                          showSlides(slideIndex = n);
                        }
                    
                        // 다음 슬라이드로 이동
                        function nextSlide() {
                          showSlides(slideIndex += 1);
                        }
                    
                        // 슬라이드 표시
                        function showSlides(n) {
                          var i;
                          var slides = document.getElementsByClassName("slide");
                          var dots = document.getElementsByClassName("dot");
                    
                          // 슬라이드 인덱스 초기화
                          if (n > slides.length) {
                            slideIndex = 1;
                          }
                          if (n < 1) {
                            slideIndex = slides.length;
                          }
                    
                          // 슬라이드 숨김
                          for (i = 0; i < slides.length; i++) {
                            slides[i].classList.remove("show");
                            slides[i].classList.add("hide");
                            slides[i].style.display = "none";
                          }
                    
                          // 현재 슬라이드 표시 및 점 활성화
                          slides[slideIndex - 1].classList.remove("hide");
                          slides[slideIndex - 1].classList.add("show");
                          slides[slideIndex - 1].style.display = "block";
                    
                          var prevSlideIndex = slideIndex - 2 < 0 ? slides.length - 1 : slideIndex - 2;
                          var prevSlideImages = slides[prevSlideIndex].getElementsByTagName("img");
                          for (var k = 0; k < prevSlideImages.length; k++) {
                            prevSlideImages[k].classList.remove("show");
                            prevSlideImages[k].classList.add("hide");
                          }
                    
                          var nextSlideIndex = slideIndex % slides.length;
                          var nextSlideImages = slides[nextSlideIndex].getElementsByTagName("img");
                          for (var l = 0; l < nextSlideImages.length; l++) {
                            nextSlideImages[l].classList.remove("hide");
                            nextSlideImages[l].classList.add("show");
                          }
                    
                          // 슬라이드 점 비활성화
                          for (i = 0; i < dots.length; i++) {
                            dots[i].className = dots[i].className.replace(" active", "");
                          }
                    
                          dots[slideIndex - 1].className += " active";
                        }
                    
                        // 초기 슬라이드 표시
                        showSlides(slideIndex);
                    
                        // 이전/다음 버튼 클릭 이벤트 리스너
                        document.querySelector(".prev2").addEventListener("click", function() {
                          plusSlides(-1);
                        });
                    
                        document.querySelector(".next2").addEventListener("click", function() {
                          plusSlides(1);
                        });
                    
                        // 슬라이드 점 클릭 이벤트 리스너
                        var slideDots = document.getElementsByClassName("dot");
                        for (var i = 0; i < slideDots.length; i++) {
                          slideDots[i].addEventListener("click", function() {
                            var dotIndex = Array.prototype.indexOf.call(slideDots, this) + 1;
                            currentSlide(dotIndex);
                          });
                        }