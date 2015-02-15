var q = require('q');

var audioContext = new AudioContext();


function playTone(frequency, time){
	var source = audioContext.createOscillator();
	source.type = 'square';
	source.frequency.value = frequency; // value in hertz
	source.connect(audioContext.destination);
	source.start();
	
	var deferred = q.defer();
	setTimeout(function(){
		source.stop();
		deferred.resolve();
	}, time || 0);

	return deferred.promise;
}


playTone(220, 1000, '1')
.then(function(){
	return playTone(440, 1000);
})
.then(function(){
	return playTone(220, 1000);
})
.then(function(){
	return playTone(440, 1000);
});
