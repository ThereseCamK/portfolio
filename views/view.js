
view();
function view(){
    let linksToSOME = model.linksTopages;
    let footerInfo = model.footer;
    let navbarLinks = `${linksToSOME.map(links => `  
    <a href="${links.SOME}"> ${links.name}</a>`).join("<hr>")}
    `;

    html = `
    <div id="page">
   
    <div id="header">
        <div id="infoInHeader">
            IT-Utvikler under utdanning
        </div>
        <div id="navBar" class="linkToPages">
        <a id="linkToPages" href="javascript:changePage('projects')">Prosjekter</a>
        <a id="linkToPages" href="javascript:changePage('about')">Om meg</a>
        <a id="linkToPages" href="javascript:changePage('blog')">Blog</a>
        <a id="linkToPages" href="javascript:changePage('feedback')">Anmeldelser</a>
        <div class="dropdown">
                <span>Link til SOME</span>
                <div class="dropdown-content">
                    <p> ${navbarLinks}</p>
                </div>
            </div>
         
    </div>
            
    </div>
  
        <div id="mainContent"> 
        </div> 
        <div id="footer"><hr> 
            <tt> Navn: </tt> ${footerInfo.name}<br>
            <tt> Sted: </tt> ${footerInfo.town}<br>
            <tt> Epost: </tt> ${footerInfo.email}<br>
            <tt> Tlf: </tt> ${footerInfo.phone}<br>
        </div>
    </div>
     `;
  
    document.getElementById("content").innerHTML = html
}

updateView();

function updateView(){
    const page = model.app.currentpage;
    if(page === "projects") projectView();
    else if (page === 'about') aboutView();
    else if (page === 'blog') blogPage();
    else if (page === 'feedback') feedbackPage();
    
}

function changePage(page){
    model.app.currentpage = page;
    updateView();
}



 