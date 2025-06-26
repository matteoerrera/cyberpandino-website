export function shareImage(title, url)  {
    if (navigator.share) {
        fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const file = new File([blob], "image.jpg", {type: blob.type});
            return file;
        })
        .then(file => {
            navigator.share({
                title: title,
                files: [file],
            })
            .then(() => console.log("Successful share"))
            .catch((error) => console.log("Error sharing", error));
        })
    } else {
        console.log("WebShare API not supported.");
    }
};