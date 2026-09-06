document.addEventListener("DOMContentLoaded", function() {
            const filterButtons = document.querySelectorAll(".filter-btn");
            const menuItems = document.querySelectorAll(".menu-item");

            filterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    // Remove a classe active de todos os botões e adiciona ao clicado
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");

                    const filterValue = button.getAttribute("data-filter");

                    // Filtra os itens do cardápio
                    menuItems.forEach(item => {
                        if (filterValue === "todas" || item.getAttribute("data-category") === filterValue) {
                            item.style.display = "flex"; // Exibe o item
                        } else {
                            item.style.display = "none"; // Esconde o item
                        }
                    });
                });
            });
        });