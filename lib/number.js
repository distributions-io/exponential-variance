'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// FUNCTIONS //

var pow = Math.pow;


// VARIANCE //

/**
* FUNCTION variance( lambda )
*	Computes the distribution variance for a exponential distribution with parameter lambda.
*
* @param {Number} lambda - rate parameter
* @returns {Number} distribution variance
*/
function variance( lambda ) {
	if ( !isPositive( lambda ) ) {
		return NaN;
	}
	return pow( lambda, -2 );
} // end FUNCTION variance()


// EXPORTS

module.exports =  variance;
