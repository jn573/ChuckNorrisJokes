document.querySelector('.get-jokes').addEventListener('click', getJokes)

// should add a function to limit a new joke to 1 a day

function getJokes(e) {
    let numberOfJokes = 3
    // let numberOfJokes = Math.abs(document.querySelector('input[type=number]').value)
    // if (numberOfJokes > 10) {
    //     numberOfJokes = 10
    // }
    // console.log(`Number of jokes ${numberOfJokes}`)

    const xhr = new XMLHttpRequest()

    xhr.open('GET', `https://api.icndb.com/jokes/random/1`)
    // xhr.open("GET", "https://dad-jokes.p.rapidapi.com/random/joke");
    // xhr.setRequestHeader("x-rapidapi-host", "dad-jokes.p.rapidapi.com");
    // xhr.setRequestHeader("x-rapidapi-key", "");

    xhr.onload = function () {
        if (xhr.status === 200) {
            let jokes = JSON.parse(xhr.responseText)
            // console.log(jokes.body[0].setup)
            // console.log(jokes.body[0].punchline)
            const jokesLi = document.querySelector('.jokes')
            let output = ''
            console.log(jokes)
            let self = this

            // if (jokes.length > 0 ){ //=== 'success') {
            //     let i = 0
            //     jokes.body.forEach(function (joke) {
            // output = `<li>${jokes.body[0].setup}:<br/> ${jokes.body[0].punchline}</li>`
            output = `<li>${jokes.value[0].joke}<br/></li>`
            // console.log(output)
            //     i++;
            // })
            jokesLi.innerHTML = output
            console.log(output)
        } else {
            self.output = '<li>Something went wrong</li>'
        }
    // }
}

xhr.send()
e.preventDefault()
}