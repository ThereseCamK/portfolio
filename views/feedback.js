let rating = null;
// var midlertidigText = model.pagesContent.inputfields.comment ;
// var tempName = model.pagesContent.inputfields.name;

// var commentTest = comments();
function feedbackPage(){
    
    let modelFeedbacks = model.pagesContent.feedbackPage;
    let modelComments = modelFeedbacks.map(com => `<hr><div> Stjerner: ${com.rating} Navn:${com.name} . <p style="font-size: 15px; color: black;">  ${com.comment}</p> </div>` ).join(``);
    
    html =`<div class="centerFeedback">
    <h1>Din vurdering</h1>
    ${starRating()}
    ${comments()}
    ${modelComments} 
    </div>
    
    `;
    
    document.getElementById('mainContent').innerHTML = html;
}

function comments(){
    // midlertidigText = model.pagesContent.inputfields.comment ;
    // tempName = model.pagesContent.inputfields.name;
    var html = `
    <div> 
    <textarea placeholder="Kommentar" id="feedbackComment" class="feedbackComment" oninput="model.pagesContent.feedbackPage.comment = this.value"> </textarea> <br>
    <textarea type="text" placeholder="Navn" class="feedbackName"  oninput="model.pagesContent.feedbackPage.name = this.value"> </textarea>
    <button onclick="submitfeedback()" class="feedbackSubmitButton"> Send inn</button>
    </div>
    `;

    return html;
}


     function starRating(){
        let ratingText = rating == null ? '' : `${rating} / 5`;
        const testView = [1, 2, 3, 4, 5].map(n =>
            rating == null ? `<span id="ratingStars" class="gray" onclick="selectStar(${n})">☆</span>` :
                n <= rating ? `<span  id="ratingStars" onclick="selectStar(${n})" >★</span>` :
                    `<span id="ratingStars" onclick="selectStar(${n})">☆</span>`
        ).join('')
        + ratingText;

        html = `
        ${testView}`;
        // ratingTest = testView;
        // console.log('kjører ')
        return html;
    
        

}

