async function getData(){
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const breweries = await data.json();
     console.log(breweries);
    breweries.forEach(brewery => displayBrewery(brewery));
}
getData();

async function getData(){
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const breweries = await data.json();
     console.log(breweries);
    breweries.forEach(brewery => displayBrewery(brewery));
}
getData();



function displayBrewery(brewery){

    const createDiv = document.createElement("div");
    createDiv.setAttribute("class","brewery");
    createDiv.innerHTML = `
    <div class="list" id="list>
    <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${brewery.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted"> ${brewery.brewery_type}</h6>
            <p class="card-text" ${brewery.city}, ${brewery.state}</br> ${brewery.country}</p>
            <a href="#" class="btn btn-primary">${brewery.website_url}</a>
            <a href="#" class="btn btn-primary">Call: ${brewery.phone===null? "NA":brewery.phone}</a>
          </div>
        </div>
      </div>
      </container>
      </div>

      
      `;

      document.body.append(createDiv);
    }
    