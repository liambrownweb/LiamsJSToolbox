if (typeof require != "undefined") {
	require("../../ljs.js");
}

describe("exclude", function() {
	it("Populates structure c with all elements in a not in b", function() {
		var source_set = [],
			exclude_set = [],
			dest_set = [],
			compare_function = function(a, b){
				if (typeof a != "undefined" && typeof b != "undefined"){
					return (a["value"] == b["value"]);
				}
			};
		source_set.push({"key": "uno", "value": 1});
		source_set.push({"key": "zwei", "value": 2});
		source_set.push({"key": "trois", "value": 3});
		source_set.push({"key": "fore", "value": 4});
		exclude_set.push({"key": "uno", "value": 1});
		exclude_set.push({"key": "uno", "value": 2});
		ljs.exclude(source_set, exclude_set, dest_set, compare_function);
		expect(dest_set.length).toEqual(2);
	});
});
