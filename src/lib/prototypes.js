Object.defineProperty( Array.prototype, 'remove', {
	value: function ( value ) {
		
		const index = this.indexOf( value )
		if ( index > -1 ) {
			this.splice( index, 1 )
		}
		return this
	}
} )