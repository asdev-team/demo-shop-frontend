import { isWebpSupported } from './dom'

export const getProductImg = ( images = [] ) => {
	const isWebpSupport = isWebpSupported()
	const place         = isWebpSupport
	                      ? 'webP'
	                      : 'original'
	
	const imageMain    = images.filter( img => img.isMain )[ 0 ]
	const imageGallery = images.filter( img => img.isGallery )
	const src          = imageMain
	                     ? imageMain[ place ][ 'url' ]
	                     : false
	
	return {
		main: src,
		gallery: imageGallery
	}
}