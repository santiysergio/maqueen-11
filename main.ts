input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
})
makerbit.onUltrasonicObjectDetected(200, DistanceUnit.CM, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
})
basic.showIcon(IconNames.Heart)
