// ============================================================
// ASM-360 — Navbar component (shared across all pages)
// OEM Distributors is a clickable link AND a dropdown trigger,
// revealing "Hanwa ESD" as a clickable sub-item.
// ============================================================

(function () {
    const navbarHTML = `
    <header class="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface/90 backdrop-blur-md shadow-sm">
        <nav class="flex items-center gap-12 px-margin-desktop py-4 w-full max-w-screen-2xl mx-auto">
            <div class="flex items-center gap-4">
                <a href="/"><img alt="ASM-360 Logo" class="h-16 w-auto rounded" src="/assets/logo.png" /></a>
            </div>

            <div class="hidden md:flex items-center gap-8" id="nav-links">
                <a class="nav-link text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md pb-1 border-b-2 border-transparent" href="/">About Us</a>

                <div class="nav-dropdown relative group">
                    <button class="nav-dropdown-trigger flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md pb-1 border-b-2 border-transparent">
                        Auctions
                        <span class="material-symbols-outlined text-base transition-transform duration-200 group-hover:rotate-180">expand_more</span>
                    </button>
                    <div class="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                        <div class="bg-white rounded-xl shadow-lg border border-outline-variant/30 py-2 min-w-[200px]">
                            <a class="nav-link block px-5 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors font-body-md" href="https://auctions.asminc360.com" target="_blank">Dedicated Auctions</a>
                            <a class="nav-link block px-5 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors font-body-md" href="https://www.bidspotter.com/en-us/auction-catalogues/bcsasminc" target="_blank">Prime Auctions</a>
                        </div>
                    </div>
                </div>

                <a class="nav-link text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md pb-1 border-b-2 border-transparent" href="https://auctions.asminc360.com/gallery" target="_blank">Marketplace</a>
                <a class="nav-link text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md pb-1 border-b-2 border-transparent" href="/contact/">Contact</a>

                <div class="nav-dropdown relative group">
                    <button class="nav-dropdown-trigger flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md pb-1 border-b-2 border-transparent">
                        Services
                        <span class="material-symbols-outlined text-base transition-transform duration-200 group-hover:rotate-180">expand_more</span>
                    </button>
                    <div class="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                        <div class="bg-white rounded-xl shadow-lg border border-outline-variant/30 py-2 min-w-[200px]">
                            <a class="nav-link block px-5 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors font-body-md" href="/prime-services/">Prime Services</a>
                            <a class="nav-link block px-5 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors font-body-md" href="https://thewhiteglovewarehouse.com/services/" target="_blank">White Glove</a>
                        </div>
                    </div>
                </div>

          

                <div class="nav-dropdown relative group">
                    <a class="nav-link nav-dropdown-trigger flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md pb-1 border-b-2 border-transparent" href="/oem-distribuitors/">
                        OEM Distributors
                        <span class="material-symbols-outlined text-base transition-transform duration-200 group-hover:rotate-180">expand_more</span>
                    </a>
                    <div class="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                        <div class="bg-white rounded-xl shadow-lg border border-outline-variant/30 py-2 min-w-[200px]">
                            <a class="nav-link block px-5 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors font-body-md" href="/hanwa/">Hanwa ESD</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-4 ml-auto">
                <a class="hidden md:block bg-primary-container text-on-primary font-label-md text-label-md px-6 py-2 rounded-lg active:scale-95 transition-transform" href="https://auctions.asminc360.com/sign-up" target="_blank" rel="noopener">Start Bidding</a>
                <span class="material-symbols-outlined cursor-pointer md:hidden" id="mobile-menu-toggle">menu</span>
            </div>
        </nav>

        <div class="hidden md:hidden bg-white border-t border-outline-variant/30 max-h-[calc(100vh-72px)] overflow-y-auto" id="mobile-menu">
            <div class="flex flex-col px-6 py-4">
                <a class="mobile-nav-link py-3 border-b border-outline-variant/20 text-on-surface-variant font-body-md" href="/">About Us</a>

                <button class="mobile-accordion-trigger flex items-center justify-between py-3 border-b border-outline-variant/20 text-on-surface-variant font-body-md w-full text-left">
                    Auctions
                    <span class="material-symbols-outlined text-base transition-transform duration-200">expand_more</span>
                </button>
                <div class="mobile-accordion-panel hidden pl-4">
                    <a class="block py-2.5 text-sm text-on-surface-variant" href="https://auctions.asminc360.com" target="_blank">Dedicated Auctions</a>
                    <a class="block py-2.5 text-sm text-on-surface-variant" href="https://www.bidspotter.com/en-us/auction-catalogues/bcsasminc" target="_blank">Prime Auctions</a>
                </div>

                <a class="mobile-nav-link py-3 border-b border-outline-variant/20 text-on-surface-variant font-body-md" href="https://auctions.asminc360.com/gallery" target="_blank">Marketplace</a>
                <a class="mobile-nav-link py-3 border-b border-outline-variant/20 text-on-surface-variant font-body-md" href="/contact/">Contact</a>

                <button class="mobile-accordion-trigger flex items-center justify-between py-3 border-b border-outline-variant/20 text-on-surface-variant font-body-md w-full text-left">
                    Services
                    <span class="material-symbols-outlined text-base transition-transform duration-200">expand_more</span>
                </button>
                <div class="mobile-accordion-panel hidden pl-4">
                    <a class="block py-2.5 text-sm text-on-surface-variant" href="/prime-services/">Prime Services</a>
                    <a class="block py-2.5 text-sm text-on-surface-variant" href="https://thewhiteglovewarehouse.com/services/" target="_blank">White Glove</a>
                </div>



                <div class="flex items-center justify-between border-b border-outline-variant/20">
                    <a class="mobile-nav-link py-3 flex-1 text-on-surface-variant font-body-md" href="/oem-distribuitors/">OEM Distributors</a>
                    <button class="mobile-accordion-trigger p-3 text-on-surface-variant" aria-label="Toggle OEM Distributors submenu">
                        <span class="material-symbols-outlined text-base transition-transform duration-200">expand_more</span>
                    </button>
                </div>
                <div class="mobile-accordion-panel hidden pl-4">
                    <a class="block py-2.5 text-sm text-on-surface-variant" href="/hanwa/">Hanwa ESD</a>
                </div>

                <a class="bg-primary-container text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg text-center mt-4" href="https://auctions.asminc360.com/sign-up" target="_blank" rel="noopener">Start Bidding</a>
            </div>
        </div>
    </header>
    `;

    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) {
        console.warn('navbar.js: no se encontró <div id="navbar-placeholder"></div> en esta página.');
        return;
    }

    placeholder.innerHTML = navbarHTML;

    // ---- Lógica del menú móvil, autocontenida (no depende de site.js) ----
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (toggleBtn && mobileMenu) {
        toggleBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            toggleBtn.textContent = isOpen ? 'menu' : 'close';
        });

      mobileMenu.querySelectorAll('.mobile-accordion-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
        // Caso normal: el panel es hermano directo del botón (Auctions, Services)
        let panel = trigger.nextElementSibling;

        // Caso OEM Distributors: el botón está envuelto junto al link,
        // así que el panel real es hermano del DIV contenedor, no del botón
        if (!panel || !panel.classList.contains('mobile-accordion-panel')) {
            panel = trigger.parentElement.nextElementSibling;
        }

        if (!panel) return;

        const icon = trigger.querySelector('.material-symbols-outlined') || trigger;
        const isOpen = !panel.classList.contains('hidden');
        panel.classList.toggle('hidden');
        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});

        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                toggleBtn.textContent = 'menu';
            });
        });
    }
})();