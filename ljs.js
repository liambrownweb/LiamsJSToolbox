/*
 * Ljs, a JS toolbox library
 * (C)2016 Liam Brown
 * Subject to terms of the MIT license
 */ 
(function () {
	var _ljs = {};
	_ljs._error = function (message) {
		throw new Error(message);
	};
	_ljs.exclude = function (source_set, exclude_set, destination_set, compare) {
		if (typeof(compare) != "function") {
			_ljs._error("exclude: compare param is not a function!");
		}
		var source_copy = source_set,
			source_len = source_copy.length,
			exclude_len = exclude_set.length,
			i, j,
			skip = false;
		for (i = source_len - 1; i > -1; i -= 1) {
			for (j = exclude_len - 1; j > -1; j -= 1) {
				if (compare(source_copy[i], exclude_set[j])) {
					source_copy = source_copy.slice(0, i).concat(source_copy.splice(i+1));
					source_len -= 1;
					skip = true;
					continue;
				}
			}
			if (skip) {
				skip = false; 
				continue;
			}
			destination_set.unshift(source_copy[i]);
		}
	};
	if (typeof window.ljs === "undefined") {
		window.ljs = _ljs;
	}
}());
