document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // MODULE / NAVIGATION LINKS
    // ==========================================

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


    // ==========================================
    // DARK MODE
    // ==========================================

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


    // ==========================================
    // HOME PAGE SEARCH
    // ==========================================

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const query = this.value.toLowerCase().trim();

            /*
             * Search the main sections/cards of the
             * Python Portal.
             */

            const searchableItems = document.querySelectorAll(
                ".topic-section, " +
                ".content-box, " +
                ".module-card, " +
                ".dashboard-card, " +
                ".card, " +
                ".topic-card"
            );


            searchableItems.forEach(function (item) {

                const text = item.textContent.toLowerCase();

                if (query === "" || text.includes(query)) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });


            /*
             * Search navigation links also.
             */

            const navigationLinks = document.querySelectorAll(
                ".module-list a, " +
                "nav a, " +
                ".sidebar a"
            );


            navigationLinks.forEach(function (link) {

                const text = link.textContent.toLowerCase();

                if (query === "" || text.includes(query)) {

                    link.style.display = "";

                } else {

                    link.style.display = "none";

                }

            });

        });

    }

});
