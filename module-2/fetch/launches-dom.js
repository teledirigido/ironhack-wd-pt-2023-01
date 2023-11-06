// index.js

fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => response.json())
  .then((data) => {

  data.forEach((launchObj) => {
    const patchImage = launchObj.links.patch.small;
    const imgElement = document.createElement("img");

    imgElement.setAttribute("src", patchImage);
    imgElement.setAttribute("width", 200);
    document.body.appendChild(imgElement);
  });

}).catch((err) => console.log(err));
