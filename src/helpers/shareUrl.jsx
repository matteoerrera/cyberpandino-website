export function shareUrl(title)  {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
        console.log("WebShare API not supported.");
    }
};