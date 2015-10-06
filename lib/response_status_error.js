function ResponseStatusError(message, extra) {
	Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
	this.name = this.constructor.name;
	this.message = message;
	this.extra = extra;
};

require('util').inherits(ResponseStatusError, Error);

module.exports = ResponseStatusError;