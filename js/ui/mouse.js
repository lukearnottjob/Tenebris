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
function dragDOMx(element, events){
    mouseElement = {elem: element, par: element.parentNode};
    eventFunction = events;
    elementOffset = {x: parseInt(window.getComputedStyle(mouseElement.elem, null).getPropertyValue('left').replace('px', ''), 10)};
    originalMousePosition = mousePosition();
    document.addEventListener('mousemove', draggingDOMx);
    document.addEventListener('mouseup', function(){document.removeEventListener('mousemove', draggingDOMx);});
}
function draggingDOM(){
    var mouse = mousePosition();
    mouseElement.style.left = mouse.x - originalMousePosition.x + elementOffset.x;
    mouseElement.style.top = mouse.y - originalMousePosition.y + elementOffset.y;
}
function draggingDOMx(){
    var mouse = mousePosition();
    var width = {elem: parseInt(window.getComputedStyle(mouseElement.elem, null).getPropertyValue('width').replace('px', ''), 10), par: parseInt(window.getComputedStyle(mouseElement.par, null).getPropertyValue('width').replace('px', ''), 10)};
    var newX = mouse.x - originalMousePosition.x + elementOffset.x;
    var percent;
    
    if(newX >= 0 && newX <= width.par - width.elem){
        
        mouseElement.elem.style.left = mouse.x - originalMousePosition.x + elementOffset.x;
        percent = (mouse.x - originalMousePosition.x + elementOffset.x + width.elem)/width.par;
        mouseElement.elem.innerHTML = Math.round(percent.toFixed(1)*10)/10;
        eventFunction(percent);
    }
}
function setSlide(element){
    var percent = element.getAttribute('value');
    element.style.left = (parseInt(window.getComputedStyle(element.parentNode, null).getPropertyValue('width').replace('px', ''), 10)- parseInt(window.getComputedStyle(element, null).getPropertyValue('width').replace('px', ''))) * percent;
    element.innerHTML = Math.round(percent*10)/10;
    refreshVariables(percent);
}
function contextOffset(){
    var offset = {x: offsetX, y: offsetY};
    return offset;
}

//Stage interaction.
function dragContext(){
    originalMousePosition = mousePosition();
    elementOffset = contextOffset();
    if(arguments[0] !== null){
        eventFunction = arguments[0];
    }
    document.addEventListener('mousemove', draggingContext);
    document.addEventListener('mouseup', function(){document.removeEventListener('mousemove', draggingContext);});
    
}
function draggingContext(){
    var mouse = mousePosition();
    if(eventFunction){
        graphStage.context.clearRect(0, 0, windowWidth, windowHeight);
        graphStage.drawGraph();
    }
    offsetX = mouse.x - originalMousePosition.x + elementOffset.x;
    offsetY = mouse.y - originalMousePosition.y + elementOffset.y;
}
function mouseCircleCollision(object){
    var collision = false;
    var mouse = mousePosition();
    var radius = Math.sqrt(Math.pow(object.x - mouse.x + offsetX, 2) + Math.pow(object.y -mouse.y + offsetY, 2));
    if(radius < object.radius){
        collision = true;
    }
    return collision;
}