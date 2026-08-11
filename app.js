document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".module-list a");

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                links.forEach(l => l.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeToggle.innerHTML = "☀ Light Mode";
            } else {
                themeToggle.innerHTML = "🌙 Dark Mode";
            }

        });
    }

});