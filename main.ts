input.onButtonPressed(Button.A, function () {
    שחקן_1.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    שחקן_2.change(LedSpriteProperty.Y, 1)
})
let שחקן_2: game.LedSprite = null
let שחקן_1: game.LedSprite = null
let זמן = 0
שחקן_1 = game.createSprite(0, 0)
שחקן_2 = game.createSprite(4, 0)
loops.everyInterval(1000, function () {
    זמן += 1
})
basic.forever(function () {
    if (20 == זמן) {
        basic.showNumber(0)
        basic.pause(5000)
    }
})
basic.forever(function () {
    if (4 == שחקן_1.get(LedSpriteProperty.Y)) {
        שחקן_1.delete()
        שחקן_1 = game.createSprite(0, 0)
    } else if (4 == שחקן_2.get(LedSpriteProperty.Y)) {
        שחקן_2.delete()
        שחקן_2 = game.createSprite(4, 0)
    } else {
    	
    }
})
