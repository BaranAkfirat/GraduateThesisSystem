// Tablodaki satırlara tıklanabilirlik ekle
document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll("table tbody tr");
    rows.forEach(row => {
        row.addEventListener("click", function () {
            const link = this.querySelector("a");
            if (link) {
                window.location.href = link.href;
            }
        });
    });
});

// Geri butonuna animasyon ekleyelim
if (typeof backButton === 'undefined') {
    const backButton = document.querySelector("a[href='/']");
    if (backButton) {
        backButton.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#0056b3";
            this.style.color = "#fff";
        });

        backButton.addEventListener("mouseout", function () {
            this.style.backgroundColor = "transparent";
            this.style.color = "#007bff";
        });
    }
}

// Geri butonuna animasyon ekleyelim
const backButton = document.querySelector("a[href='/']");
if (backButton) {
    backButton.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#0056b3";
        this.style.color = "#fff";
    });

    backButton.addEventListener("mouseout", function () {
        this.style.backgroundColor = "transparent";
        this.style.color = "#007bff";
    });
}
