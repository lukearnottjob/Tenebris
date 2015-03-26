function Stage(x, y, width, height, element){
    this.x = x;
    this.y = y;
    this.offsetX = 0;
    this.offsetY = 0;
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
    }
    this.init();
}
Stage.prototype.dimensions = function(width, height){
    this.element.width = this.width;
    this.element.height = this.height;
}
Stage.prototype.drawRect = function(){//x, y, width, height, colour.

    if(arguments[arguments.length -1] === true){//If the rectangle to be drawn is in an array or not.
        this.context.fillStyle = arguments[0][4];
        this.context.fillRect(arguments[0][0] + this.offsetX, arguments[0][1] + this.offsetY, arguments[0][2], arguments[0][3]);
        
    }else{
        this.context.fillStyle = arguments[4];
        this.context.fillRect(arguments[0] + this.offsetX, arguments[1] + this.offsetY, arguments[2], arguments[3]);
    }
}