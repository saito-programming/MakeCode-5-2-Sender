radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(1)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
