/* eslint-disable @so1ve/prettier/prettier */
import { Car, animation, object } from "./../packages/newcar/dist/newcar.js";

const car = new Car(document.querySelector("#mycanvas"), 60);

// const pen = new object.Pen({
//   lineWidth: 5,
//   color: "skyblue",
//   x: 0,
//   y: 100
// });
// const role_child = new object.Point({
//   x: 100,
//   y: 100,
// })
// const role = new object.Point({
//   children: [role_child],
//   x: 100,
//   y: 100
// })
const system = new object.CoordinateSystem(0, 0, 0, 0, {
  x: 100,
  y: 400,
  arrow: false,
  grid_color: "skyblue"
});

const numberAxis = new object.NumberAxis(100, -100, {
  x: 300,
  y: 300,
})

car.addObject(system, numberAxis);

// car.addAnimationItem(new animation.Translation(role, {
//   startAt: 0,
//   lastsFor: 50,
//   to: [400, 100],
// }))

car.addAnimationItem(new animation.AxisLimit(system, {
  startAt: 0,
  lastsFor: 50,
  to: [500, 350, 0, 0]
}))

// car.onUpdate(frame => {
//   if (frame === 1) {
//     pen.put()
//   }
//   pen.x = role.x;
//   pen.y = role.y
// })

car.play();
