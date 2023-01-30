/**
 * Hra hadej náhodné číslo od 1 do 10 a na konci ukáže počet pokusů 
 */
/**
 * proměné na vygenerování nahodného čísla
 */
let guessNum = 0
let attempt = 0
let randNum = Math.ceil(Math.random() * 10)
basic.forever(function () {
    while (guessNum != randNum) {
        input.onButtonPressed(Button.A, function () {
    guessNum++
    attempt++
    if (guessNum < randNum) {
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    }
    if (guessNum > randNum) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    guessNum--
    attempt++
     if (guessNum < randNum) {
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    }
    if (guessNum > randNum) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    }

})
basic.showNumber(guessNum)
    }
    if (randNum == guessNum) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    }
    basic.showNumber(guessNum)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # # # #
        . # . . .
        . # . . .
        `)
    basic.showNumber(attempt)
})
