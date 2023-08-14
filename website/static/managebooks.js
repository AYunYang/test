const booklist=() => {
	function get_data() {
		return new Promise((resolve, reject) => {
			fetch("https://api.apispreadsheets.com/data/tqDVavbc09WjAg9o/")
				.then(response => {
					return response.json();
				}).then(data_from_fetched => {
					let data = data_from_fetched.data;
					resolve(data)
			}).catch(err => console.log(err))
		})
	}

	let rawData = [];
	get_data().then(data => {
		rawData = data

		let a = "<ul>";
		a += "<h2>Awaiting Pick Up</h2>"

		let values = [];
		for (let i = 0; i < rawData.length; i++) {
			if (rawData[i].admin_no === 2224248) {
				values = Object.values(rawData[i])
				for (let j = 2; j < values.length - 4; j++) {
					if (values[j]) {
						let b = values[j].split(",");

						let result = b.reduce(
							(arr, it, i) => ({...arr, [i]: it}), {}
						)

						if (result[1] > 0) {
							a += "<li>" + result[0] + " is due for collection in " + result[1] + " days." + "<br>" + " (Pick Up Location: " + result[3] + ")" + "<button class='reserveBTN' onclick=cancelbook()>Cancel Reservation</button>" + "</li>" + "<br><br>";
						}
					}
				}

				a += "<h2>Currently Loaned</h2>"

				for (let j = 2; j < values.length - 4; j++) {
					if (values[j]) {
						let b = values[j].split(",");

						let result = b.reduce(
							(arr, it, i) => ({...arr, [i]: it}), {}
						)

						if (result[1] == 0){
							a += "<li>" + result[0] + " is to be returned in " + result[2] + " days." + "<br>" + " (Drop Off Location: " + result[3] + ")" + "<button class='loanedBTN' onclick=extendbook()>Extend Loan Period</button>" + "</li>" + "<br><br>";
						}
					}
				}
			}
		}

		a += "</ul>";
		document.getElementById("all-books").innerHTML = a;
	});
}