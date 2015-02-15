
function playTone(source, frequency, time){
	source.frequency.value = frequency; // value in hertz
	source.start();
	source.stop(time || 0);
}

var audioContext = new AudioContext();

var source = audioContext.createOscillator();
source.type = 'square';


source.connect(audioContext.destination);

playTone(source, 220, 1);
playTone(source, 440, 1);
playTone(source, 220, 1);
playTone(source, 440, 1);
