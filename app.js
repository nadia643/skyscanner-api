require('dotenv').config();
console.log(process.env);

function fetchData() {
	fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-08-01?inboundpartialdate=2020-08-08", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "51fec1ec7fmsh9d2c7c699d329cfp145bafjsnbcabe15cfd2f"
	}
})
.then(response => {
	if(!response.ok) {
		throw Error("error");
	}
	return response.json();
})
.then(data => {
	console.log(data);
	document.querySelector(".departure").innerHTML = data.Places[1].Name;
	document.querySelector(".arrival").innerHTML = data.Places[0].Name;
	document.querySelector(".price").innerHTML = data.Quotes[0].MinPrice;

	
})
.catch(error => {
	console.log(error);
})
	}

fetchData();