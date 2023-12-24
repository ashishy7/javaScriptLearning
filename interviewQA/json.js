What is JSON and its common operations
JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. It is useful when you want to transmit data across a network. It is basically just a text file with an extension of .json, and a MIME type of application/json

Parsing: Converting a string to a native object

JSON.parse(text);

Stringification: Converting a native object to a string so that it can be transmitted across the network

JSON.stringify(object);