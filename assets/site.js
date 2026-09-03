
    (function () {
        // Scroll reveal: secciones completas
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('main > section').forEach(section => {
            section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
            sectionObserver.observe(section);
        });

        // Scroll reveal con stagger para las tarjetas del bento grid
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-6');
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.bento-card-hover').forEach((card, i) => {
            card.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700');
            card.style.transitionDelay = `${i * 100}ms`;
            cardObserver.observe(card);
        });
    })();

    (function () {
        const normalize = (path) => path.replace(/\/index\.html$/, '/').replace(/\/+$/, '') || '/';
        const currentPath = normalize(window.location.pathname);

        document.querySelectorAll('.nav-link').forEach((link) => {
            // Los links externos (ej. Auctions con target=_blank) nunca se marcan como activos
            if (link.target === '_blank') return;

            const linkPath = normalize(new URL(link.getAttribute('href'), window.location.origin).pathname);

            if (linkPath === currentPath) {
                link.classList.add('text-primary', 'font-bold', 'border-primary');
                link.classList.remove('text-on-surface-variant', 'border-transparent');
            } else {
                link.classList.add('text-on-surface-variant', 'border-transparent');
                link.classList.remove('text-primary', 'font-bold', 'border-primary');
            }
        });

        // Si un item dentro del dropdown "Services" quedó activo, resalta también el trigger
        document.querySelectorAll('.nav-dropdown').forEach((dropdown) => {
            const trigger = dropdown.querySelector('.nav-dropdown-trigger');
            const activeItem = dropdown.querySelector('.nav-link.text-primary');
            if (trigger && activeItem) {
                trigger.classList.add('text-primary', 'font-bold', 'border-primary');
                trigger.classList.remove('text-on-surface-variant', 'border-transparent');
            }
        });
    })();


(function () {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!toggleBtn || !mobileMenu) return;

    toggleBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        toggleBtn.textContent = isOpen ? 'menu' : 'close';
    });

    // Acordeón para Auctions / Services dentro del menú móvil
    document.querySelectorAll('.mobile-accordion-trigger').forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const panel = trigger.nextElementSibling;
            const icon = trigger.querySelector('.material-symbols-outlined');
            const isOpen = !panel.classList.contains('hidden');

            panel.classList.toggle('hidden');
            icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });

    // Cierra el menú móvil automáticamente si tocan un link normal
    document.querySelectorAll('#mobile-menu a').forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            toggleBtn.textContent = 'menu';
        });
    });
})();
