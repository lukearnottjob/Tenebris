var G = 6.67 * Math.pow(10, -11);
function Ball(x, y, velocityX, velocityY, mass, radius, isStatic, colour){
    this.x = x;
    this.y = y;
    this.lastX = x;
    this.lastY = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.mass = mass;
    this.radius = radius;
    this.isStatic = isStatic;
    this.colour = colour;
}

function getRadius(object1, object2){
    var distance = Math.sqrt(Math.pow(object1.x - object2.x, 2) + Math.pow(object1.y - object2.y, 2));
    return distance;
}
function calculateAccelerationDueToGravity(object1, object2, radius){//Get the acceleration due to gravity between two objects.
  var acceleration = G * object1.mass * object2.mass / Math.pow(radius, 2);
  return acceleration;
}
function getAngle(object1, object2){//Get the angle between two objects.
  var dx = object1.x - object2.x;
  var dy = object1.y - object2.y;
  var angle = Math.atan2(dy, dx);//atan2 is used to conserve negative values.
  return angle;
}
function getComponent(object1, object2, acceleration, angle){//Get the componoent.
  var component = {x: Math.cos(angle) * acceleration, y: Math.sin(angle) * acceleration};
  return component;
}
function getAccelerationDueToGravity(object1, object2){
    var radius = getRadius(object1, object2);
    var acceleration = calculateAccelerationDueToGravity(object1, object2, radius);
    var angle = getAngle(object1, object2);
    var component = getComponent(object1, object2, acceleration, angle);
    return component;
}
Ball.prototype.capture = function(){
    this.lastX = this.x;
    this.lastY = this.y;
}