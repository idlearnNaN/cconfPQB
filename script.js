let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementsByClassName("slide");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }

        // Variables
const playButton = document.getElementById("play-video-btn");
const videoModal = document.getElementById("video-modal");
const closeBtn = document.getElementById("close-video-modal");
const videoFrame = document.getElementById("video-frame");

function toggleVideo() {
    var iframe = document.getElementById("youtubeVideo");
    var button = document.getElementById("videoButton");

    if (iframe.style.display === "none") {
        iframe.style.display = "block";
        iframe.src += "?autoplay=1";
        button.textContent = "Fermer la lecture";
    } else {
        iframe.style.display = "none";
        stopVideo(iframe);
        button.textContent = "Lancer la vidéo";
    }
}

// Function to stop the video
function stopVideo(iframe) {
    var src = iframe.src.split("?")[0];
    iframe.src = src;  // Stop the video by resetting the src
}

// Add event listener for clicks outside the video
document.addEventListener('click', function(event) {
    var videoContainer = document.querySelector('.video-container');
    var iframe = document.getElementById("youtubeVideo");
    var button = document.getElementById("videoButton");

    if (!videoContainer.contains(event.target)) {
        iframe.style.display = "none";
        stopVideo(iframe);
        button.textContent = "Lancer la vidéo";
    }
});