var every = function(array, thisObject) {
	for(var i = 0; i < array.length; i++) {
		if(!thisObject(array[i])) {
			return false;
		}
	}
	return true;
};

var some = function(array, thisObject) {
	for(var i = 0; i < array.length; i++) {
		if(!thisObject(array[i])) {
			return false;
		} else {
			return true;
		}
	}
};
