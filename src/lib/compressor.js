import LZString from 'lz-string'

const deCompress = ( compressedData ) => {
	const stringifyData = LZString.decompressFromEncodedURIComponent( compressedData )
	return JSON.parse( stringifyData )
}

const compress = ( data ) => {
	const stringifyData = JSON.stringify( data )
	return LZString.compressToEncodedURIComponent( stringifyData )
}

export { deCompress, compress }