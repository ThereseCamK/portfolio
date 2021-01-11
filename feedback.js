
function feedbackPage(){
    let modelFeedbacks = model.pagesContent.feedbackPage;
    let modelComments = modelFeedbacks.map(com => `<hr><div> Stjerner: ${com.rating} Navn:${com.name} . <p style="font-size: 15px; color: black;">  ${com.comment}</p> </div>` ).join(``);

    html =`<div class="centerFeedback">
    <h1>Din vurdering</h1>
    <div class="stars" data-rating="3">
        <span class="star">&nbsp;</span>
        <span class="star">&nbsp;</span>
        <span class="star">&nbsp;</span>
        <span class="star">&nbsp;</span>
        <span class="star">&nbsp;</span>
    </div>
   
    <div> 
        <input type="text" placeholder="kommentar" id="feedbackComment" class="feedbackComment" oninput="model.pagesContent.feedbackPage.comment = this.value"> </input > <br>
        <input type="text" placeholder="Navn" class="feedbackName"  oninput="model.pagesContent.feedbackPage.name = this.value"> </input>
        <button onclick="submitfeedback()" class="feedbackSubmitButton"> Send inn</button>
    </div>
                ${modelComments} 
    </div>
            
    `;

    document.getElementById('mainContent').innerHTML = html;
}
 

