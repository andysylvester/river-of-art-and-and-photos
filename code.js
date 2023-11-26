const urlRiver = "https://fullblastnews.com/rivers/artcastlist.js";

function startup () {
	var whenstart = new Date ();
	console.log ("startup");
	httpGetRiver (urlRiver, "idRiverDisplay", function () {
		console.log ("startup: httpGetRiver took approx " + secondsSince (whenstart) + " secs.");
		});
	}