//blog side. går det ann å linke denne til en annen side 
//(så jeg slipper å ha logg inn knapp på denne siden,
//så jeg kan pushe nytt innlegg på en annen side, men vises her.  )
function blogPage(){
    const blogConmitments = model.pagesContent.blogPage;
    const blogs = blogConmitments.map(com =>`<div>${com.content} <br> Dato:${com.date} `).join('');
    html =` blog Innlegg
    ${blogs}
    `;

    document.getElementById('mainContent').innerHTML = html;
}