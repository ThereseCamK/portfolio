
function selectStar(n) {
    rating = n;
   
    feedbackPage();

}

function submitfeedback(){
    
    const feedbackComment = model.pagesContent.feedbackPage.comment;
    const feedbackName = model.pagesContent.feedbackPage.name;
    const ratingFeedback = rating;

if( feedbackComment != null && feedbackName != null && ratingFeedback != null ){
    model.pagesContent.feedbackPage.push({
        comment: `${feedbackComment}`,
        name: `${feedbackName}`,
        rating: `${ratingFeedback}`
        
    })
    
    rating = null;

}
else alert("det mangler, navn, stjerne eller kommentar ");
   

    feedbackPage();
}

