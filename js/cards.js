export default (data, target) => {
  const htmlString = data
    .map((item) => {
      return `
            <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="card">
                <div class="card-body">
                    <img class="card-img" src="${item.photo}">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Height: ${item.params.height}</p>
                    <p class="card-text">Weight: ${item.params.weight}</p>
                </div>
            </div>
            </div>
        `;
    })
    .join("");
  target.innerHTML = htmlString;
};
