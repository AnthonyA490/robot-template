// backward
input.onButtonPressed(Button.A, function () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    control.waitMicros(20000)
})
// stop
input.onButtonPressed(Button.AB, function () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    control.waitMicros(20000)
})
// forward
input.onButtonPressed(Button.B, function () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(20000)
})
basic.showIcon(IconNames.Angry)
basic.forever(function () {
	
})
