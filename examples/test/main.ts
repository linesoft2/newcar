import { CarEngine, Scene, Widget, App, changeProperty } from '@newcar/core'
import {
  Arc,
  Arrow,
  ImageWidget,
  Line,
  Rect,
  Text,
  Circle,
  move,
  fadeIn,
  create,
} from '@newcar/basic'
import { MathFunction, NumberAxis } from '@newcar/mod-math'
import { Color, Recorder } from 'newcar'

let circle: any
let app: App

await new CarEngine()
  .init('../node_modules/canvaskit-wasm/bin/canvaskit.wasm')
  .then((engine) => {
    app = engine.createApp(document.querySelector('#canvas'))
    const ff = new MathFunction(Math.sin, [-10, 10], {
      y: 100,
    })
    const root = new Widget()
      // .add(
      //   new Rect([0, 0], [100, 100], {
      //     y: 100,
      //     style: {
      //       transparency: 0.5,
      //     },
      //   }).animate(fadeIn, 0, 300),
      // )
      // .add(
      //   new Text(
      //     'Hello world!',
      //     'https://storage.googleapis.com/skia-cdn/misc/Roboto-Regular.ttf',
      //     {
      //       y: 100,
      //     },
      //   ).animate(fadeIn, 0, 100),
      // )
      // .add(new ImageWidget('./brand.png').animate(fadeIn, 0, 300))
      // .add(new Circle(200).animate(changeProperty('radius', 0, 400), 0, 100))
      // .add(new Svg(`<rect width="100" height="100" fill="red"/>`, {
      //   x: 100,
      //   y: 100,
      //   style: {
      //     width: 200,
      //     height: 200
      //   }
      .add(new NumberAxis(-100, 100, {
        x: 500,
        y: 200
      }))

      // .add(
      //   new Arrow([0, 0], [100, 100]).animate(move, 0, 100, {
      //     from: [0, 0],
      //     to: [100, 100],
      //   }).add(
      //   new Arrow([0, 0], [100, 200])
      // )
      // )
      

    // .add(new ImageWidget('./brand.png'))
    const scene = new Scene(root)
    app.checkout(scene)
    // root
    //   .add()
    app.play()

    const r = new Recorder(document.querySelector('#canvas'), 'mp4')
    r.start(3000, (url: string) => {
      console.log(url)
    })
  })