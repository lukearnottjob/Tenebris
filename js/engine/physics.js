function Ball(x, y, velocityX, velocityY, mass, radius, isStatic, colour){
    
}

function getRadius(object1, object2){
    var distance = Math.sqrt(Math.pow(object1.x - object2.x, 2) + Math.pow(object1.y - object2.y, 2));
    return distance;
}
function getAccelerationDueToGravity(object1, object2, radius){//Get the acceleration due to gravity between two objects.
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