document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Add a scroll-to-top button
    let scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.innerText = "↑";
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "20px";
    scrollToTopBtn.style.right = "20px";
    scrollToTopBtn.style.padding = "10px";
    scrollToTopBtn.style.borderRadius = "50%";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.background = "#FF7F50";
    scrollToTopBtn.style.color = "white";
    scrollToTopBtn.style.fontSize = "20px";
    scrollToTopBtn.style.cursor = "pointer";
    scrollToTopBtn.style.display = "none";
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
