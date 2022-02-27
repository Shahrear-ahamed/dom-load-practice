const loadPhotoMainData = () => {
  fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((res) => res.json())
    .then((data) => loadAllPics(data.slice(0, 12)));
};
loadPhotoMainData();

const loadAllPics = (pics) => {
  const parent = document.getElementById("parentContainer");
  for (const pic of pics) {
    // console.log(pic);
    const div = document.createElement("div");
    div.classList.add("col-4");
    div.innerHTML = `
      <div class="card my-2 mx-auto" style="width: 18rem">
        <img src="${pic.thumbnailUrl}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${pic.title.slice(0, 30)}</h5>
          <button onClick="loadDetails('${
            pic.id
          }')" class="btn btn-primary">Details</button>
        </div>
      </div>`;
    parent.appendChild(div);
  }
};