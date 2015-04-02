var offsetX = window.innerWidth/2;
var offsetY = window.innerHeight/2;
var scale = 1;
function Stage(x, y, width, height, element){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.element = document.getElementById(element);
    this.context;
    this.init = function(){//Initialise the stage with the width, height, top, left and drawing.
        this.element.width = this.width;
        this.element.height = this.height;
        this.element.style.left = this.x;
        this.element.style.top = this.y;
        this.context = this.element.getContext("2d");
    };
    this.init();
}
Stage.prototype.dimensions = function(width, height){
    this.element.width = this.width;
    this.element.height = this.height;
};
Stage.prototype.drawRect = function(){//x, y, width, height, colour.

    if(arguments[arguments.length -1] === true){//If the rectangle to be drawn is in an array or not.
        this.context.fillStyle = arguments[0][4];
        this.context.fillRect(arguments[0][0] + offsetX, arguments[0][1] + offsetY, arguments[0][2], arguments[0][3]);
        
    }else{
        this.context.fillStyle = arguments[4];
        this.context.fillRect(arguments[0] + offsetX, arguments[1] + offsetY, arguments[2], arguments[3]);
    }
};

Stage.prototype.drawGraph = function(){
    var interval = 100*scale;
	var currentInterval = 0;
	var xOff = offsetX%interval;
	var yOff = offsetY%interval;
	this.context.beginPath();
	this.context.fillStyle = '#05ABC3';
	this.context.font='20px Arial';
	for(currentInterval = -interval; currentInterval < windowWidth + interval; currentInterval += interval){
	    var xNumbers = currentInterval - offsetX + xOff;
		this.context.moveTo(xOff+currentInterval, 0);
		this.context.lineTo(xOff+currentInterval, windowHeight);
		
		this.context.fillText(xNumbers.toFixed(2), xOff+currentInterval + 5, windowHeight -10);
		
		//X is above, Y is below.
		var yNumbers = currentInterval - offsetY + yOff;
		
        
		this.context.moveTo(0, yOff+(currentInterval));
		this.context.lineTo(windowWidth, yOff+currentInterval);
		

		
		
		
		this.context.fillText(yNumbers.toFixed(2), 10, yOff + currentInterval - 5);
		this.drawNumbers();
	}
	this.context.lineWidth = 2;
	this.context.strokeStyle="#05ABC3";
	this.context.stroke();
};

Stage.prototype.drawNumbers = function(){
    
};
Stage.prototype.drawBall = function(x, y, radius, colour){
    this.context.beginPath();
    this.context.arc(x + offsetX, y + offsetY, radius * scale, 0, 2 * Math.PI);
    
    this.context.fillStyle = colour;
    this.context.fill();
};