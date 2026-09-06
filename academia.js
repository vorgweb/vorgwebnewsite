async function aviso() {
        alert("Aviso: Esta landing page é fictícia e foi criada apenas para fins de demonstração. Nenhuma transação real será processada, então não é possivel realizar pagamentos ou matrículas. Qualquer informação fornecida não será armazenada ou utilizada para fins comerciais.");
       }

        // Efeito Sticky no Menu ao Rolar a Página
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });

        // Relação amigável de links internos (Scroll Suave Seguro)
        document.querySelectorAll('nav a, .btn-main, .cta-header').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if(targetId.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });