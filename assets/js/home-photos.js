document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/photos/photos.json", { cache: "no-store" })
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Could not load photos.json");
            }
            return response.json();
        })
        .then(function (data) {

            // --------------------------------------------------
            // MAIN PHOTO
            // --------------------------------------------------

            if (data.main) {
                var mainWidget = document.querySelector("#media_image-3");

                if (mainWidget) {
                    var title = mainWidget.querySelector(".widget-title");
                    var img = mainWidget.querySelector("img");

                    if (title && data.main.title) {
                        title.textContent = data.main.title;
                    }

                    if (img && data.main.file) {
                        img.src = "/assets/photos/" + data.main.file;
                        img.alt = data.main.alt || "";

                        img.removeAttribute("srcset");
                        img.removeAttribute("sizes");
                        img.removeAttribute("width");
                        img.removeAttribute("height");

                        if (data.main.width) {
                            img.style.width = data.main.width + "px";
                        } else {
                            img.style.width = "auto";
                        }

                        img.style.maxWidth = "100%";
                        img.style.height = "auto";
                    }
                }
            }

            // --------------------------------------------------
            // HISTORICAL GALLERY
            // --------------------------------------------------

            if (Array.isArray(data.gallery)) {
                var gallery = document.querySelector("#gallery-1");

                if (gallery) {
                    gallery.innerHTML = "";

                    data.gallery.forEach(function (photo) {
                        if (!photo.file) {
                            return;
                        }

                        var item = document.createElement("dl");
                        item.className = "gallery-item";

                        var icon = document.createElement("dt");
                        icon.className = "gallery-icon " + (photo.orientation || "");

                        var link = document.createElement("a");
                        link.href = "/assets/photos/" + photo.file;

                        var img = document.createElement("img");
                        img.src = "/assets/photos/" + photo.file;
                        img.alt = photo.caption || "";
                        img.loading = "lazy";
                        img.style.maxWidth = "100%";
                        img.style.height = "auto";

                        link.appendChild(img);
                        icon.appendChild(link);
                        item.appendChild(icon);

                        if (photo.caption) {
                            var caption = document.createElement("dd");
                            caption.className = "wp-caption-text gallery-caption";
                            caption.textContent = photo.caption;
                            item.appendChild(caption);
                        }

                        gallery.appendChild(item);
                    });

                    var clear = document.createElement("br");
                    clear.style.clear = "both";
                    gallery.appendChild(clear);
                }
            }
        })
        .catch(function (error) {
            console.error("Could not update homepage photos:", error);
        });
});