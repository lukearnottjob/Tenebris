//set mouseFunction to function to be launched on mousedown.
//call trackMouse
var mouseElement;
var originalMousePosition;
var eventFunction;
var elementOffset;
function mousePosition(){
    var mouse = {x: event.clientX, y: event.clientY};
    return mouse;
}
function elementPosition(){
    var offset = {x: parseInt(window.getComputedStyle(mouseElement, null).getPropertyValue('left').replace('px', ''), 10), y: parseInt(window.getComputedStyle(mouseElement, null).getPropertyValue('top').replace('px', ''), 10)};
   
    return offset;
}
function dragDOM(element){
    mouseElement = element;
    originalMousePosition = mousePosition();
    elementOffset = elementPosition();
    document.addEventListener('mousemove', draggingDOM);
    document.addEventListener('mouseup', function(){document.removeEventListener('mousemove', draggingDOM);});
}
function draggingDOM(){
    var mouse = mousePosition();
    mouseElement.style.left = mouse.x - originalMousePosition.x + elementOffset.x;
    mouseElement.style.top = mouse.y - originalMousePosition.y + elementOffset.y;
}
function contextOffset(){
    var offset = {x: mouseElement.offsetX, y: mouseElement.offsetY};
    return offset;
}

//Stage interaction.
function dragContext(object){
    mouseElement = object;
    originalMousePosition = mousePosition();
    elementOffset = contextOffset();
    document.addEventListener('mousemove', draggingContext);
    document.addEventListener('mouseup', function(){document.removeEventListener('mousemove', draggingContext);});
    
}
function draggingContext(){
    var mouse = mousePosition();
    mouseElement.offsetX = mouse.x - originalMousePosition.x + elementOffset.x;
    mouseElement.offsetY = mouse.y - originalMousePosition.y + elementOffset.y;
}
function mouseCircleCollision(object){
    var collision = false;
    var mouse = mousePosition();
    var radius = Math.sqrt(Math.pow(object.x - mouse.x + mainStage.offsetX, 2) + Math.pow(object.y -mouse.y + mainStage.offsetY, 2));
    if(radius < object.radius){
        collision = true;
    }
}