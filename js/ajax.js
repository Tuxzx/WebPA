
function ajax(url, sendMsg, callback, method) {
	let httpRequest = new XMLHttpRequest();

	if(!httpRequest) {
		console.log('Cannot create an XMLHTTP instance.');
		return false;
	}

	httpRequest.onreadystatechange = function(){
		if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
			callback(httpRequest.responseText);
		} else {
			console.log('There was a problem with the request.');
		}
	};
	httpRequest.open(method, url, true);
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	httpRequest.send(sendMsg)
}
