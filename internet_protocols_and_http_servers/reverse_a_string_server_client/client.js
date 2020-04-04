// import `net` from node
// `net` will be used to create a Socket for your client to send requests to
// your server
const net = require('net');
// import `readline` from node
// `readline` will be used to take user inputted data from the commandline
const readline = require('readline');

// this is the setup required to read input from the command line
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// create a client socket!
const client = new net.Socket();

// when the client receives data
// print that data to the console
// end the process
client.on('data', data => {
	console.log(`${data}`);
	process.exit();
});

// client.connect is a function that connects to a server
// client.connect requires 3 parameters:
//    - the port that the server is running on (in this case: 4000)
//    - the IP address the server is running on (in this case: 'localhost')
//    - a callback function that runs once a connection has been established to
//      the server
client.connect(4000, 'localhost', () => {
	// r1.question is a function that prints something to the command-line and
	// then waits for the user to press `enter` on the keyboard
	// r1.question requires 2 parameters:
	//    - a string that it prints onto the console to prompt the user for input
	//    - a callback function that is run once the user presses `enter`
	// this callback function requires one parameter:
	//    - `input` which is the input that the user typed into the command-line
	rl.question('enter something to reverse: ', input => {
		// client.write is a function that sends data to the connect server
		// client.write requires 1 parameter: a string or data buffer to send
		client.write(input);
	});
});
