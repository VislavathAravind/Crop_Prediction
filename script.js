function detectCrop() {
  const place = document.getElementById('place').value.trim();
  const soil = document.getElementById('soil').value.trim().toLowerCase();
  const weather = document.getElementById('weather').value.trim().toLowerCase();
  const resultContainer = document.getElementById('resultContainer');

  if (!place || !soil || !weather) {
    resultContainer.innerHTML = "Please fill in all the fields.";
    return;
  }

  const cropRules = [
    { soil: "loamy", weather: "cool", crop: "Wheat" },
    { soil: "clay", weather: "wet", crop: "Rice" },
    { soil: "black", weather: "hot", crop: "Cotton" },
    { soil: "sandy", weather: "dry", crop: "Groundnut" },
    { soil: "red", weather: "moderate", crop: "Millets" },
    { soil: "alluvial", weather: "humid", crop: "Sugarcane" },
    { soil: "laterite", weather: "moist", crop: "Tea" },
    { soil: "peaty", weather: "cold", crop: "Potato" }
  ];

  let crop = "Maize"; // default

  for (const rule of cropRules) {
    if (soil.includes(rule.soil) && weather.includes(rule.weather)) {
      crop = rule.crop;
      break;
    }
  }

  resultContainer.innerHTML = `
    <p><strong>Place:</strong> ${place}</p>
    <p><strong>Soil Type:</strong> ${soil}</p>
    <p><strong>Weather:</strong> ${weather}</p>
    <p><strong>Recommended Crop:</strong> ${crop}</p>
  `;
}
