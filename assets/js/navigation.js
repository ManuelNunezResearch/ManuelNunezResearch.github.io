(function () {

    function cleanPath(path) {
        path = path.replace(/\/index\.html$/i, '/');
        return path || '/';
    }

    function updateNavigation() {

        /* -------------------------------------------------
           1. Limpiar /index.html de la barra del navegador
           ------------------------------------------------- */

        var currentPath = cleanPath(window.location.pathname);

        if (currentPath !== window.location.pathname) {
            window.history.replaceState(
                null,
                '',
                currentPath + window.location.search + window.location.hash
            );
        }

        /* -------------------------------------------------
           2. Localizar el menú principal
           ------------------------------------------------- */

        var nav =
            document.querySelector('#site-navigation') ||
            document.querySelector('.main-navigation') ||
            document.querySelector('nav');

        if (!nav) {
            return;
        }

        var links = Array.from(nav.querySelectorAll('a'));
        var items = Array.from(nav.querySelectorAll('li'));

        /* -------------------------------------------------
           3. Limpiar también los enlaces del propio menú
           ------------------------------------------------- */

        links.forEach(function (a) {

            try {
                var u = new URL(a.getAttribute('href'), window.location.href);

                if (u.origin !== window.location.origin) {
                    return;
                }

                var cleaned = cleanPath(u.pathname);

                if (cleaned !== u.pathname) {
                    a.setAttribute('href', cleaned);
                }

            } catch (e) {
                /* ignorar enlaces especiales */
            }
        });

        /* -------------------------------------------------
           4. Apagar cualquier tab marcado por WordPress
           ------------------------------------------------- */

        var stateClasses = [
            'current-menu-item',
            'current_page_item',
            'current-menu-parent',
            'current_page_parent',
            'current-menu-ancestor',
            'current_page_ancestor'
        ];

        items.forEach(function (li) {
            stateClasses.forEach(function (c) {
                li.classList.remove(c);
            });
        });

        links.forEach(function (a) {
            a.removeAttribute('aria-current');
        });

        /* -------------------------------------------------
           5. Averiguar qué sección está activa
           ------------------------------------------------- */

        var section = '/';

        if (currentPath.startsWith('/conferences/')) {
            section = '/conferences/';
        }
        else if (currentPath.startsWith('/publications/')) {
            section = '/publications/';
        }
        else if (currentPath.startsWith('/former-ph-d-students/')) {
            section = '/former-ph-d-students/';
        }
        else if (currentPath.startsWith('/other-activities/')) {
            section = '/other-activities/';
        }

        /* -------------------------------------------------
           6. Encender el tab correspondiente
           ------------------------------------------------- */

        var target = links.find(function (a) {

            try {
                var u = new URL(a.getAttribute('href'), window.location.href);

                if (u.origin !== window.location.origin) {
                    return false;
                }

                return cleanPath(u.pathname) === section;

            } catch (e) {
                return false;
            }
        });

        if (target) {

            var li = target.closest('li');

            if (li) {
                li.classList.add(
                    'current-menu-item',
                    'current_page_item'
                );
            }

            target.setAttribute('aria-current', 'page');
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateNavigation);
    }
    else {
        updateNavigation();
    }

})();