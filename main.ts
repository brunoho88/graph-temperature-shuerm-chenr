let temp = 0
basic.forever(function () {
    temp = input.temperature()
    led.plotBarGraph(
    temp,
    50
    )
    if (input.buttonIsPressed(Button.A)) {
        if (temp < 37) {
            basic.showIcon(IconNames.Happy)
        } else {
            music.playMelody("D E F F E D D - ", 120)
            basic.showIcon(IconNames.Sad)
        }
    }
})
