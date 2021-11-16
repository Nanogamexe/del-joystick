servos.P0.setRange(10, 170)
basic.forever(function () {
    servos.P0.setAngle(pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1000,
    10,
    170
    ))
})
