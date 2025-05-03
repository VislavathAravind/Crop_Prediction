function detectCrop() {
    const place = document.getElementById('place').value.trim();
    const soil = document.getElementById('soil').value.trim();
    const weather = document.getElementById('weather').value.trim();
    const resultContainer = document.getElementById('resultContainer');
  
    if (!place || !soil || !weather) {
      resultContainer.innerHTML = "Please fill in all the fields.";
      return;
    }
  
    // Mock crop suggestions based on soil and weather
    let crop = "Maize";
  
    if (soil.toLowerCase().includes("loamy") && weather.toLowerCase().includes("cool")) {
      crop = "Wheat";
    } else if (soil.toLowerCase().includes("clay") && weather.toLowerCase().includes("wet")) {
      crop = "Rice";
    } else if (soil.toLowerCase().includes("black") && weather.toLowerCase().includes("hot")) {
      crop = "Cotton";
    } else if (soil.toLowerCase().includes("sandy") && weather.toLowerCase().includes("dry")) {
      crop = "Groundnut";
    }
  
    resultContainer.innerHTML = `
      <p><strong>Place:</strong> ${place}</p>
      <p><strong>Soil Type:</strong> ${soil}</p>
      <p><strong>Weather:</strong> ${weather}</p>
      <p><strong>Recommended Crop:</strong> ${crop}</p>
    `;
  }