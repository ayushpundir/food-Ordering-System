// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("main input");

    // Search field animation on typing
    searchInput.addEventListener("input", () => {
        searchInput.style.transform = "scale(1.02)";
        setTimeout(() => {
            searchInput.style.transform = "scale(1)";
        }, 150);
    });

    // Simple placeholder change on focus
    searchInput.addEventListener("focus", () => {
        searchInput.setAttribute("placeholder", "Type and hit Enter...");
    });

    searchInput.addEventListener("blur", () => {
        searchInput.setAttribute("placeholder", "Search for restaurants, cuisines, or a dish");
    });

    // Press Enter to simulate search
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            alert(`Searching for: ${searchInput.value}`);
        }
    });

    // Logo click animation
    const logo = document.querySelector("header img");
    logo.addEventListener("click", () => {
        logo.style.transform = "rotate(360deg)";
        logo.style.transition = "transform 1s ease";
        setTimeout(() => logo.style.transform = "rotate(0deg)", 1000);
    });
});
