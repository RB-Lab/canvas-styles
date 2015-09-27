# Canvas Styles
### Apply css-alike styles to figures drawn on canvas

Use it with Browserify or Webpack.

#### Installation

```bash
	$ npm install --save canvas-styles
```

#### Usage

```javascript

	var canvasStyles = require('canvas-styles');
	
	var myRectStyle = {
		fill: '#f4f4f4',
		stroke: '#122292',
		strokeWidth: 1,
		strokeStyle: 'dashed'
	}
	
	var ctx = document.getElementById('canvas').getContext('2D');
	
	ctx.rect(10, 10, 20, 20);
	
	canvasStyles.applyStyles(ctx, myRectStyle);
	
	ctx.fill();
	ctx.stroke();
	
	// and we've got a gray rectangle with dashed border
	
```
