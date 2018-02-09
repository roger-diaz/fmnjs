(function(){
	var Model = {
		"title": "Simple Template with data model and service",
		"message": "Services works!!!!",
		"author": "Roger Diaz B"
	};

	var Util = {
		getDate: function() {
			var today = new Date();
			return today.toDateString();
		}
	}

	return {
		"model": Model,
		"util": Util
	}
})()