document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('nav-menu');
    const links = document.querySelectorAll('.nav-links a');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setMenu = (open) => {
        menu.classList.toggle('active', open);
        hamburger.classList.toggle('active', open);
        hamburger.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => {
        setMenu(!menu.classList.contains('active'));
    });

    links.forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            setMenu(false);
            hamburger.focus();
        }
    });

    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12
    });

    document.querySelectorAll('[data-reveal]').forEach(el => {
        if (reduceMotion) {
            el.classList.add('revealed');
        } else {
            revealObserver.observe(el);
        }
    });

    const sections = document.querySelectorAll('main section[id]');
    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
            });
        });
    }, {
        root: null,
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
    });

    sections.forEach(sec => spyObserver.observe(sec));

    const sheet = document.querySelector('.hero-sheet .sheet-tilt');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (sheet && !reduceMotion && finePointer.matches) {
        const DEG = 2.5;
        let raf = 0;

        const apply = (x, y) => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                raf = 0;
                const r = sheet.parentElement.getBoundingClientRect();
                const px = (x - r.left) / r.width - 0.5;
                const py = (y - r.top) / r.height - 0.5;
                sheet.style.transform = `rotateX(${-py * DEG}deg) rotateY(${px * DEG}deg)`;
            });
        };

        sheet.parentElement.addEventListener('pointermove', (e) => {
            sheet.style.transition = 'none';
            apply(e.clientX, e.clientY);
        });

        sheet.parentElement.addEventListener('pointerleave', () => {
            cancelAnimationFrame(raf);
            raf = 0;
            sheet.style.transition = 'transform 0.5s var(--ease-out)';
            sheet.style.transform = '';
        });
    }
});