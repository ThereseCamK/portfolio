function aboutView(){
    var aboutPageView = model.pagesContent.aboutPage;
    var headerInAbout = aboutPageView.header;
   
    html = `
    <div class="centerAbout">

     <div class="headerInAbout"> ${headerInAbout}</div>
     <p> Jeg er en dame som er i Praksis på GET Academy som lærer i programmering <br>
     Jeg har litt erfaring innenfor Javascript, HTML/CSS, C# og litt i SQL. Trives veldig godt med å utvikle forskjellige type ting. <br>
     Det som jeg har nå erfart er at man lærer veldig mye av å gjøre, og målet mitt er å gjøre enda mer og bli enda bedre!</p>
    </div>
     `;
    document.getElementById("mainContent").innerHTML = html
}