

// ONE

// let url = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`;
// axios.get(url)
//     .then(res => {
//         console.log(`${res.data.cards[0].value} OF ${res.data.cards[0].suit}`);
//     })
//     .catch(err => console.log("nope", err))

    


// getCard();

// TWO

// let url = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`;
// axios.get(url)
//     .then(res => {
//         // console.log(res.data.cards[0]);
//         let cardOne = res.data.cards[0];
//         console.log(`${cardOne.value} OF ${cardOne.suit}`);
//         let deckId = res.data.deck_id;
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        
//     })
//     .then(res =>{

//         let cardtwo = res.data.cards[0];
//         console.log(`${cardtwo.value} OF ${cardtwo.suit}`);
        
        
//     })
//     .catch(err => console.log("nope", err))


// // THREE

const button = document.getElementById("button");
const newDiv = document.getElementById("new_div");


button.addEventListener("click", shuffleDeck);

async function shuffleDeck(){
    let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    let newDeck = await $.getJSON(url);
    let deck_id = newDeck.deck_id;
    console.log(deck_id);
    let oneCardUrl = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    let card = await $.getJSON(oneCardUrl);
    console.log(card.cards[0]);
    let img = document.createElement('img');
    img.src = card.cards[0].images.png;
    newDiv.prepend(img);

}


