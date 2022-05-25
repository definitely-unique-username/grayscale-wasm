(async function () {
    const input = document.getElementById('upload');
    let grayscale;

    try {
        const pkg = await import('../pkg');
        grayscale = pkg.grayscale;
    } catch (e) {
        console.error(e);
        return;
    }

    if (input) {
        const fileReader = new FileReader();

        fileReader.onloadend = function () {
            let base64 = fileReader.result;
            base64 = base64.replace(/^data:image\/[a-z]+;base64,/, '');
            const processedBase64 = grayscale(base64);

            const img = document.getElementById('new-img');
            if (img) {
                img.src = processedBase64;
            }
        };

        input.addEventListener('change', () => {
            fileReader.readAsDataURL(input.files[0]);
        });
    }
})();