document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
    <footer class="bg-surface-container-highest w-full py-16 px-margin-desktop mt-auto border-t border-outline/10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-bento-gap max-w-7xl mx-auto">
            <div class="space-y-6">
                <img alt="ASM-360 Logo" class="h-16 w-auto object-contain rounded" src="/assets/logo.png" />
                <p class="text-on-surface-variant font-body-md max-w-[280px]">
                    Asset Management 360 is a USA-based company owned by women and minorities specializing in surplus asset liquidation.
                </p>
            </div>

            <div>
                <h4 class="font-label-md uppercase text-on-surface font-bold mb-8">Useful Links</h4>
                <ul class="space-y-4">
                    <li><a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/">About Us</a></li>
                    <li><a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/oem-distribuitors/">OEM Distribuitors</a></li>
                    <li><a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Privacy Policy</a></li>
                    <li><a class="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Terms & Conditions</a></li>
                </ul>
            </div>

            <div>
                <h4 class="font-label-md uppercase text-on-surface font-bold mb-8">Get In Touch</h4>
                <ul class="space-y-6 text-on-surface-variant text-body-md">
                    <li class="flex items-start gap-4">
                        <span class="material-symbols-outlined text-primary mt-1">location_on</span>
                        <div>
                            <p class="font-bold text-on-surface">Office Address</p>
                            <p>7671 Hawthorne Avenue<br/>Livermore, CA 94550</p>
                        </div>
                    </li>
                    <li class="flex items-start gap-4">
                        <span class="material-symbols-outlined text-primary mt-1">phone</span>
                        <div>
                            <p class="font-bold text-on-surface">Phone Number</p>
                            <a href="tel:+19255056141">
                            <p>+(925) 505-6141</p>
                            </a>
                        </div>
                    </li>
                    <li class="flex items-start gap-4">
                        <span class="material-symbols-outlined text-primary mt-1">mail</span>
                        <div>
                            <p class="font-bold text-on-surface">Email Address</p>
                            <a href="mailto:info@asm-360.com">
                            <p>info@asm-360.com</p>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="space-y-6">
     
                
                <p class="text-[11px] text-on-surface-variant leading-relaxed">
                    © 2026 Asset Management 360, Inc. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
    `;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    } else {
        console.warn('footer.js: no se encontró <div id="footer-placeholder"></div> en esta página.');
    }
});