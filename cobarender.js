var page = require('webpage').create();
console.log('loading...'); // nambahin tulisan loading
page.open('http://google.com', function(status) {
	console.log('status = '+status);
	if (status === "success") {
		page.render('example.jpg');
	}
	phantom.exit();
	console.log('ngeload halamane wis bar bab...");
});

// iki nambahi commment aja
