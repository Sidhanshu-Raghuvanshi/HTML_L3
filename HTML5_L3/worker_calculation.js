var input_no;
function getInput(event) {
	// Accessing to the message data sent by the main page
	input_no = Number(event.data);
	timedCount();
}

function timedCount() {
    // Preparing the message that we will send back
    input_no = input_no + 1;
    // Posting back the message to the main page
    postMessage(input_no);
    // Calling the function recursively after every 0.5 seconds
    setTimeout("timedCount("+String(input_no)+")",500);
}

// Defining the callback function raised when the main page will call us
this.addEventListener('message', getInput, false);
