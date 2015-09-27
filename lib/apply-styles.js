/**
 * @function applyStyle - apply css-like styles that will be allied to all figures drawn on ctx after this application
 * @param {CanvasRenderingContext2D} ctx - canvas 2D context
 * @param {Object} style - CSSStyleDeclaration-alike object with styles
 * @param {String} style.fill - fill color e.g. "#f2f2f2"
 * @param {String} style.stroke - stroke color e.g. "#f2f2f2"
 * @param {Number} style.strokeWidth - stroke width in pixels
 * @param {String} style.strokeStyle - may be 'dashed' or 'dotted'
 */

module.exports.applyStyles = function applyStyles(ctx, style){
	if(style.fill){
		ctx.fillStyle = style.fill;
	}

	if(style.stroke){
		ctx.strokeStyle = style.stroke;
	}

	if(style.strokeWidth){
		ctx.lineWidth = style.strokeWidth;
		if(style.strokeStyle === 'dashed'){
			ctx.setLineDash([style.strokeWidth * 5, style.strokeWidth * 2]);
		} else
		if(style.strokeStyle === 'dotted'){
			ctx.setLineDash([style.strokeWidth]);
		} else {
			ctx.setLineDash([]);
		}
	}
};

