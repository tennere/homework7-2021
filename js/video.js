var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = document.getElementById('slider').value+ '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if ( (video.currentTime + 15) >= video.duration ){
		video.currentTime = 0;
		console.log("Going back to beginning")
		console.log("New location is: " + video.currentTime)
	}
	else {
	video.currentTime += 15;
	console.log("New location is: " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		mute.innerHTML = 'Unmute'
		console.log("Muted the video")
	}
	else {
		video.muted = false;
		mute.innerHTML = 'Mute'
		console.log("Unmuted the video")
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	var vol = document.getElementById('slider').value;
	video.volume = vol / 100;
	volume.innerHTML = vol + '%';
	console.log("The current volume is: " + video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
	console.log("Vintage theme turned on")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
	console.log("Vintage theme turned off")
});
