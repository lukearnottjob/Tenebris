function moveWindow(x, y, elementID){
    var element = document.getElementById(elementID);
    element.style.left = x;
    element.style.top = y;
    element.style.display = 'block';
}
function closeWindow(elementID){
    var element = document.getElementById(elementID);
    element.style.display = 'none';
}
function tooltip(element){
    var tooltipElement = document.getElementById('tooltip');
    tooltipElement.style.display = 'block';
    mouseElement = tooltipElement;
    tooltipElement.innerHTML = element.defaultValue;
    originalMousePosition = {x: 0, y: 0};
    elementOffset = {x: -parseInt(window.getComputedStyle(tooltipElement, null).getPropertyValue('width').replace('px', ''), 10) - 5, y: -parseInt(window.getComputedStyle(tooltipElement, null).getPropertyValue('height').replace('px', ''), 10)};
    
     document.addEventListener('mousemove', draggingDOM);
    element.addEventListener('mouseout', function(){
        document.removeEventListener('mousemove', draggingDOM);
        mouseElement.style.display= 'none';
    });
}