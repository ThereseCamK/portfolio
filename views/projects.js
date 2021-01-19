function projectView(){
    const allProjects = model.pagesContent.projectPage;
    const showAll = allProjects.map(pro => `<hr><div> Tittel:  ${pro.title}  <p>Beskrivelse:  ${pro.description}</p><br> Link til side:${pro.linkToPage}`).join(' ');

    html=`
    <h1>PROSJEKTER</h1>
    <t>Ting jeg har laget, enten for meg selv, eller på bestilling, eller evt sammen med andre kodere</t>
    <br>
   <div>
    ${showAll}
    
    </div>`;
    document.getElementById('mainContent').innerHTML = html;
}

