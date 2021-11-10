basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        led.plot(0, 2)
    } else if (input.isGesture(Gesture.LogoDown)) {
        led.unplot(0, 2)
        led.plot(4, 2)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        led.unplot(4, 2)
        led.plot(2, 0)
    } else if (input.isGesture(Gesture.TiltRight)) {
        led.unplot(2, 0)
        led.plot(2, 4)
    } else if (input.isGesture(Gesture.Shake)) {
        led.unplot(2, 4)
        led.plot(2, 2)
    }
})
