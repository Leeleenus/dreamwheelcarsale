document.addEventListener("DOMContentLoaded", function() {
    const carList = document.getElementById('car-list');
  
    cars.forEach(car => {
      const card = document.createElement('div');
      card.className = 'car-card';
  
      card.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <div class="car-details">
          <div class="car-title">${car.name} (${car.year})</div>
          <div class="car-info">Mileage: ${car.mileage}</div>
          <div class="car-info">Fuel: ${car.fuel}</div>
          <div class="car-info">Transmission: ${car.transmission}</div>
          <div class="price">${car.price}</div>
        </div>
      `;
  
      carList.appendChild(card);
    });
  });
  