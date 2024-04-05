// if not using Babel, you'll want to replace `import` statements with ES5 format, e.g. `const { SerialPort } = require('SerialPort')...`
import { execFile } from 'child_process';

const child = execFile('dracal-usb-get', ['-i','0,1,2'], (error, stdout, stderr) => {
	if (error) {
		throw error;
	}

	// Remove everything following the first newline character, then
	// split using a comma separator, then trim each field.
	var fields = stdout.replace(/(rn|n|r)*/gm,"").split(",").map(s => s.trim());

	// Validate how many fields were read
	if (fields.length != 3) {
		throw "Wrong number of fields"
	}

	// Display individual values
	console.log("Pressure..(kPa): " + fields[0]);
	console.log("Temperature.(C): " + fields[1]);
	console.log("RH..........(%): " + fields[2]);
	console.log("Temperature.(F): " + (fields[1] * 9 / 5 + 32));

});