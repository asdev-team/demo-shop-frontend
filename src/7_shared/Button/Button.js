import React, { useRef } from 'react'

export const Button = ( { ripple, type, size = 'normal', className, onClick, children, disabled } ) => {
	const rippleOptions = {
		active: true,
		rippleBackground: 'rgb(200,200,200,0.8)',
		rippleDuration: '600ms',
		rippleOpacity: '0.8',
		rippleEasing: 'linear',
		...ripple
	}
	const btnRef        = useRef()
	
	const btnHandler = ( event ) => {
		if ( rippleOptions.active ) {
			// const button = event.target;
			const button = btnRef.current
			const e      = event.touches
			               ? event.touches[ 0 ]
			               : event
			
			const r              = button.getBoundingClientRect()
			const d              = Math.sqrt( Math.pow( r.width, 2 ) + Math.pow( r.height, 2 ) ) * 2
			button.style.cssText = `--s: 0; --o: 1;`
			button.offsetTop
			button.style.cssText = `--t: 1; --o: 0; --d: ${ d }; --x:${ e.clientX - r.left }; --y:${ e.clientY - r.top };`
		}
		
		if ( typeof onClick == 'function' ) {
			onClick( event )
		}
	}
	
	const btnClassName    = className
	                        ? 'button ' + className
	                        : 'button'
	const btnWrpClassName = className
	                        ? 'buttonWrapper ' + size + ' ' + className
	                        : 'buttonWrapper ' + size
	
	const style = rippleOptions.active
	              ? {
			'--ripple-background': rippleOptions.rippleBackground,
			'--ripple-opacity': rippleOptions.rippleOpacity,
			'--ripple-duration': rippleOptions.rippleDuration,
			'--ripple-easing': rippleOptions.rippleEasing
		}
	              : {}
	
	return (
		<div className={ btnWrpClassName } style={ style }>
			<button className={ btnClassName } onClick={ btnHandler } type={ type } ref={ btnRef } disabled={ disabled }>
				<div className="buttonText">{ children }</div>
			</button>
		</div>
	)
}