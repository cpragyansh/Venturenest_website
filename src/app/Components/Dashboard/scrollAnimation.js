export function scrollanimation() {
    // Select the element you want to animate
    const animatedElement = document.querySelector(".application-section-heading");
    const animatedElement_1 = document.querySelector(".section-3-heading");
    const animatedElement_2 = document.querySelector(".section-3-heading-2");
    const animatedElement_3 = document.querySelector(".section-3-para");
    const animatedElement_4 = document.querySelector(".application-step-1");
    const animatedElement_5 = document.querySelector(".application-step-2");
    const animatedElement_6 = document.querySelector(".application-step-3");
    const animatedElement_7 = document.querySelector(".section-2-para-animation");
    const animatedElement_8 = document.querySelector(".cgc-venture-img");
  
    // Check if the element exists
    if (!animatedElement) {
      console.error("Element not found for animation");
      return;
    }
  
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class when in view
            animatedElement.classList.add("animate");
            animatedElement_1.classList.add("animate_1");
            animatedElement_2.classList.add("animate_2");
            animatedElement_3.classList.add("animate_3");
            animatedElement_4.classList.add("animate_4");
            animatedElement_5.classList.add("animate_5");
            animatedElement_6.classList.add("animate_6");
            animatedElement_7.classList.add("animate_7");
            animatedElement_8.classList.add("animate_8");
          } else {
            // Remove the animation class when out of view
            animatedElement.classList.remove("animate");
            animatedElement_1.classList.remove("animate_1");
            animatedElement_2.classList.remove("animate_2");
            animatedElement_3.classList.remove("animate_3");
            animatedElement_4.classList.remove("animate_4");
            animatedElement_5.classList.remove("animate_5");
            animatedElement_6.classList.remove("animate_6");
            animatedElement_7.classList.remove("animate_7");
            animatedElement_8.classList.remove("animate_8");
          }
        });
      },
      {
        threshold: 0.4, // 50% of the element must be visible
      }
    );
  
    // Observe the section
    observer.observe(animatedElement);
    observer.observe(animatedElement_1);
    observer.observe(animatedElement_2);
    observer.observe(animatedElement_3);
    observer.observe(animatedElement_4);
    observer.observe(animatedElement_5);
    observer.observe(animatedElement_6);
    observer.observe(animatedElement_7);
    observer.observe(animatedElement_8);
  }
  