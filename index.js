/* jshint node: true */
/* jslint browser: true */
/* jslint asi: true */
'use strict'

var Two = require('two')

// Make an instance of two and place it on the page.
var elem = document.body
var two = new Two({ width: 285, height: 200 }).appendTo(elem)

var circle = two.makeCircle(-70, 0, 50)
var rect = two.makeRectangle(70, 0, 100, 100)
circle.fill = '#FF8000'
circle.stroke = 'orangered'
rect.fill = 'rgba(0, 200, 255, 0.75)'
rect.stroke = '#1C75BC'

// Groups can take an array of shapes and/or groups.
var group = two.makeGroup(circle, rect)

// And have translation, rotation, scale like all shapes.
group.translation.set(two.width / 2, two.height / 2)
group.scale = 0

// You can also set the same properties a shape have.
group.linewidth = 5

// Bind a function to scale and rotate the group
// to the animation loop.
two.bind('update', function (frameCount) {
  // This code is called everytime two.update() is called.
  // Effectively 60 times per second.
  if (group.scale > 0.9999) {
    group.scale = group.rotation = 0
  }
  var t = (1 - group.scale) * 0.125
  group.scale += t
  group.rotation += t * 4 * Math.PI
})

// Finally, start the animation loop:
// call update() 60 times per second
two.play()
