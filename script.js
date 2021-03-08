
function rpsGame(yourChoice){
    let humanChoice, botChoice, results, message;
    
    humanChoice = yourChoice.id
    botChoice = numberChoice(computerChoice())
    results = dicideWinner(humanChoice, botChoice) // [1, 0] human won!
    message = finalMessage(results)

    finalFrontEnd(humanChoice, botChoice, message)
}

function computerChoice(){
    return Math.floor((Math.random()) * 3)
}

function numberChoice(number){
    return ['rock', 'paper', 'scissors'][number]
}

function dicideWinner(yourChoice, botChoice){
    let rpsDataset = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
    
    let yourScore = rpsDataset[yourChoice][botChoice]
    let botScore = rpsDataset[botChoice][yourChoice]

    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]){
    if(yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'}
    }else if(yourScore === 0.5){
        return {'message': 'You Tied!', 'color': 'yellow'}
    } else{
       return {'message': 'You Won!', 'color': 'green'}
    }
}

function finalFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    let imageDataset = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    
    // remove all items
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    let humanDiv = document.createElement('div')
    let messageDiv = document.createElement('div')
    let botDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='" + imageDataset[humanImageChoice] + "' width=200 height=200 style=' margin-left: auto; margin: 60px; padding: 20px; box-shadow: 0 5px 20px 10px rgba(53, 173, 42, 0.856);'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:80px; margin: 110px; '>" + finalMessage['message'] + "</h>"
    botDiv.innerHTML = "<img src='" + imageDataset[botImageChoice] + "' width=200 height=200 style=' margin-left: auto; margin: 60px; padding: 20px; box-shadow: 0 4px 18px 8px rgba(180, 48, 39, 0.856);'>"

    document.getElementById('field').appendChild(humanDiv)
    document.getElementById('field').appendChild(messageDiv)
    document.getElementById('field').appendChild(botDiv)
}