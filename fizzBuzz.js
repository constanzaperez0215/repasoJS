
let i = 1

while (i < 382) {
    if (i % 15 == 0) {
        console.log('FizzBuzz')
        i++
    } else if (i % 3 == 0) {
        console.log('Fizz')
        i++
    }else if (i % 5 == 0) {
        console.log('Buzz')
        i++
    } else{
        console.log(i)
        i++
    }
}