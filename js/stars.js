function Star(){
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.velocity = Math.random() * 3;
    this.colour = '#fff';
    this.radius = Math.random() * 2 + 1;
    this.defaultBrightness = Math.random();
    this.brightness = 0;
}
Star.prototype.flicker = function(){
    this.x *= this.velocity;
    this.y *= this.velocity;
}
Star.prototype.setDefaultBrightness = function(){
    this.brightness = this.radius;
}