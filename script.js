$(document).ready(async () => {
    async function getDeckId() {
        const resp = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        return resp.data.deck_id
    }   


    async function getCardFromDeck(deckId) {
        const resp = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        return resp.data.cards[0].image
    }

    let cardContainer = $('#card-holder');
    let deckId = await getDeckId();

    $('#draw-card-btn').on('click', async () => {
            let card = await getCardFromDeck(deckId);          
            
            cardImg = $("<img>").attr("src", card)

            // Create a new card element and append it to the card container
            let cardElement = $("<div class='card'>").append(cardImg);
            let randomRotation = Math.floor(Math.random() * 360);
            cardElement.css("transform", `rotate(${randomRotation}deg)`);

            // Append the card element to the card container
            cardContainer.append(cardElement);
            })




});