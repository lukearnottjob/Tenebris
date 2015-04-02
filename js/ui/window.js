var windowWidth;
var windowHeight;
var objectSelected;
function getWindowDimensions(){
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
}
function moveWindow(x, y, elementID){
    var element = document.getElementById(elementID);
    element.style.left = x;
    element.style.top = y;
    element.style.display = 'block';
}
function closeWindow(elementID){
    elementID.style.display = 'none';
}
function tooltip(element){
    var tooltipElement = document.getElementById('tooltip');
    tooltipElement.innerHTML = element.defaultValue;
    if(tooltipElement.innerHTML == 'undefined'){
        tooltipElement.innerHTML = element.getAttribute('name');
    }
    tooltipElement.style.display = 'block';
     var elementWidth = parseInt(window.getComputedStyle(tooltipElement, null).getPropertyValue('width').replace('px', ''), 10) + 10;
    var position = {x: element.getBoundingClientRect().left, y: element.getBoundingClientRect().top};
    
    
    tooltipElement.style.left = position.x - elementWidth;
    tooltipElement.style.top = position.y;
    
    element.addEventListener('mouseout', function(){
        tooltipElement.style.display= 'none';
    });
    
}