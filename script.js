const videos = document.querySelectorAll('.video__player');

videos.forEach(video => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

const videoContainer = document.querySelector('.app__videos');
let isScrolling;

videoContainer.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        const videoElements = document.querySelectorAll('.video');
        const containerTop = videoContainer.scrollTop;
        const containerBottom = containerTop + videoContainer.clientHeight;

        videoElements.forEach(videoElement => {
            const videoPlayer = videoElement.querySelector('.video__player');
            const videoTop = videoElement.offsetTop;
            const videoBottom = videoTop + videoElement.clientHeight;

            if (videoTop >= containerTop && videoBottom <= containerBottom) {
                videoPlayer.play();
            } else {
                videoPlayer.pause();
            }
        });
    }, 150);
});
