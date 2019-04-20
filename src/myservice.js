export function getData(wUrl){
	return new Promise(function(resolve, reject){
		let req = new XMLHttpRequest();
		req.onload = () => {
			if(req.status == 200){
				resolve(req.response);
			}
			else {
				reject(req.status);
			}		
		}
		req.open("GET", wUrl, true);
		req.responseType = "json";
		req.send();
	})
};

export function postData(url, data){
	return new Promise(function(resolve, reject){
		let req = new XMLHttpRequest();
		req.onload = () => {
			if(req.status == 200){
				resolve(req.response);
			}
			else {
				reject(req.statusText);
			}
		}
		req.open("POST", url, true);
		req.setRequestHeader("Content-Type","application/json");
		req.send(data);
	})
}





