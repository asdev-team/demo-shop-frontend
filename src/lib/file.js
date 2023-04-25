const base64ToBlob = function ( Base64Image ) {
	if ( !Base64Image ) {
		return null
	}
	// SPLIT INTO TWO PARTS
	const parts       = Base64Image.split( ';base64,' )
	// HOLD THE CONTENT TYPE
	const imageType   = parts[ 0 ].split( ':' )[ 1 ]
	// DECODE BASE64 STRING
	const decodedData = window.atob( parts[ 1 ] )
	// CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
	const uInt8Array  = new Uint8Array( decodedData.length )
	// INSERT ALL CHARACTER CODE INTO UINT8ARRAY
	for ( let i = 0; i < decodedData.length; ++i ) {
		uInt8Array[ i ] = decodedData.charCodeAt( i )
	}
	// RETURN BLOB IMAGE AFTER CONVERSION
	return new Blob( [ uInt8Array ], { type: imageType } )
}

const base64ToFile = ( base64String, fileName ) => {
	if ( !base64String ) {
		return null
	}
	let arr        = base64String.split( ',' )
	let mime       = arr[ 0 ].match( /:(.*?);/ )[ 1 ]
	let bstr       = atob( arr[ 1 ] )
	let n          = bstr.length
	let uint8Array = new Uint8Array( n )
	while ( n-- ) {
		uint8Array[ n ] = bstr.charCodeAt( n )
	}
	let file = new File( [ uint8Array ], fileName, { type: mime } )
	return file
}

const getBase64 = function ( file, callback ) {
	// console.log( file );
	let reader = new FileReader()
	reader.readAsDataURL( file )
	reader.onload  = () => {
		callback( reader.result )
	}
	reader.onerror = ( error ) => {
		console.log( 'Error: ', error )
	}
}

const toFileSize = ( byte, type = 'all', lang = 'en' ) => {
	const units_ru = [ ' Байт', ' Кб', ' Мб', ' Гб', ' Тб', ' Пб', ' EB', ' ZB', ' YB' ]
	const units_en = [ ' Byte', ' Kb', ' Mb', ' Gb', ' Tb', ' Пб', ' EB', ' ZB', ' YB' ]
	
	const units = lang === 'en'
	              ? units_en
	              : units_ru
	
	let size = 0
	let unit = units[ 0 ]
	
	for ( let i = 1, max = unit.length; i < max; i++ ) {
		size = byte
		unit = units[ 0 ]
		if ( byte < Math.pow( 1024, i ) ) {
			size = Math.round( byte / Math.pow( 1024, i - 1 ) * 100 ) / 100
			unit = units[ i - 1 ]
			break
		}
		
	}
	
	switch ( type ) {
		case 'all':
			return size + unit
		case 'unit':
			return unit
		case 'size':
			return size
		default:
			return size + unit
	}
}

export { base64ToBlob, base64ToFile, getBase64, toFileSize }