//set mouseFunction to function to be launched on mousedown.
//call trackMouse



var mouse= {x: -1, y: -1};
var mousedownFunction;
var elementEffected;
var originalPointerPosition;
var originalDivPosition;
var dragDiff;
function trackMouse(funcArg, element){
	mousedownFunction = funcArg;
	elementEffected = element;
	mousePosition(false);
	originalMousePosition(element);
	document.addEventListener("mousemove", mousePosition);
}
function stopTrackMouse(){
	document.removeEventListener("mousemove", mousePosition);
	
	mousedownFunction.clear;
}
function mousePosition(runFunction){
	mouse.x = event.clientX;
	mouse.y = event.clientY;
	if(runFunction){
	mousedownFunction();
	}
}

function originalMousePosition(element){
	console.log();
	 var left = window.getComputedStyle(element,null).getPropertyValue("left").replace('px', '');
	 var top = window.getComputedStyle(element,null).getPropertyValue("top").replace('px', '')
	dragDiff = {x: mouse.x- left,y: mouse.y - top};
	
}

function dragDOM(){

	elementEffected.style.left = mouse.x - dragDiff.x;
	elementEffected.style.top = mouse.y - dragDiff.y;
}
function positionDiff(){

}