async function displayMissionPatches(limit = 0) {

  try {
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    const jsonResponse = await response.json();

    console.log(jsonResponse);
    const launchesToDisplay = jsonResponse.slice(0, limit);
    
    launchesToDisplay.forEach((launchObj) => {
      const patchImage = launchObj.links.patch.small;
      const imgElement = document.createElement("img");

      imgElement.setAttribute("src", patchImage);
      imgElement.setAttribute("width", 200);
      document.body.appendChild(imgElement);
    });
    
  } catch (error) {
    // Handle error or a rejected Promise
    console.log("Something went wrong!", error);
  }
}

displayMissionPatches(10);
