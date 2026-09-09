(function () {

    async function loadPhotos() {
        try {
            const response = await fetch('/assets/photos/photos.json', {
                cache: 'no-cache'
            });

            if (!response.ok) {
                throw new Error('Cannot load photos.json');
            }

            const data = await response.json();

            /* FOTO PRINCIPAL */
            const mainWidget = document.getElementById('media_image-3');

            if (mainWidget && data.main) {
                const title = mainWidget.querySelector('.widget-title');
                const img = mainWidget.querySelector('img');

                if (title) {
                    title.textContent = data.main.title || '';
                }

                if (img) {
                    img.src = '/assets/photos/' + data.main.file;
                    img.alt = data.main.alt || '';

                    /* Evita que WordPress conserve otra versión antigua */
                    img.removeAttribute('srcset');
                    img.removeAttribute('sizes');
                    img.removeAttribute('width');
                    img.removeAttribute('height');

                    img.style.maxWidth = '100%';
                    img.style.height = 'auto';
                }
            }

            /* GALERÍA */
            const gallery = document.getElementById('gallery-1');

            if (gallery && Array.isArray(data.gallery)) {
                gallery.innerHTML = '';

                data.gallery.forEach(function (photo) {
                    const figure = document.createElement('figure');
                    figure.className = 'gallery-item';

                    const icon = document.createElement('div');
                    icon.className =
                        'gallery-icon ' +
                        (photo.orientation || 'landscape');

                    const img = document.createElement('img');
                    img.src = '/assets/photos/' + photo.file;
                    img.className = 'attachment-full size-full';
                    img.alt = photo.caption || '';
                    img.loading = 'lazy';

                    icon.appendChild(img);
                    figure.appendChild(icon);

                    if (photo.caption) {
                        const caption = document.createElement('figcaption');
                        caption.className =
                            'wp-caption-text gallery-caption';
                        caption.textContent = photo.caption;
                        figure.appendChild(caption);
                    }

                    gallery.appendChild(figure);
                });
            }

        } catch (error) {
            console.error('Photo configuration not loaded:', error);
            /* No hacemos nada:
               permanecen las fotos originales del HTML. */
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPhotos);
    } else {
        loadPhotos();
    }

})();