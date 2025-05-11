// Array of 20 car objects with details and image URLs
const cars = [
    {
      name: "Tesla Model S",
      year: 2023,
      price: "$89,990",
      mileage: "5,000 km",
      fuel: "Electric",
      transmission: "Automatic",
      image: "https://www.carscoops.com/wp-content/uploads/2023/03/2023-Tesla-Model-S.jpg"
    },
    {
      name: "BMW 3 Series",
      year: 2022,
      price: "$41,250",
      mileage: "12,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUvVw22QUdxjtcn_KBTgRwrmduE5tdRyryQ&s"
    },
    {
      name: "Audi A4",
      year: 2021,
      price: "$39,500",
      mileage: "18,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbivcp-L0tT_pJOh3r5_OJtjUlx0XUCjZXtQ&s"
    },
    {
      name: "Mercedes-Benz C-Class",
      year: 2022,
      price: "$43,000",
      mileage: "10,500 km",
      fuel: "Diesel",
      transmission: "Automatic",
      image: "https://cdn.jdpower.com/JDPA_2020%20Mercedes-AMG%20C63%20S%20Selenite%20Gray%20Front%20View.jpg"
    },
    {
      name: "Toyota Camry",
      year: 2020,
      price: "$27,000",
      mileage: "25,000 km",
      fuel: "Hybrid",
      transmission: "Automatic",
      image: "https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.676xw:0.506xh;0.101xw,0.399xh&resize=1200:*"
    },
    {
      name: "Honda Accord",
      year: 2021,
      price: "$29,500",
      mileage: "15,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Ford Mustang",
      year: 2019,
      price: "$36,000",
      mileage: "30,000 km",
      fuel: "Petrol",
      transmission: "Manual",
      image: "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Volkswagen Golf",
      year: 2022,
      price: "$24,000",
      mileage: "8,000 km",
      fuel: "Diesel",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Hyundai Sonata",
      year: 2021,
      price: "$22,500",
      mileage: "20,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1549921296-a0102b1f2c6b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Chevrolet Malibu",
      year: 2020,
      price: "$21,000",
      mileage: "28,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Kia Optima",
      year: 2019,
      price: "$19,800",
      mileage: "35,000 km",
      fuel: "Hybrid",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mazda 6",
      year: 2021,
      price: "$23,500",
      mileage: "17,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Nissan Altima",
      year: 2022,
      price: "$25,000",
      mileage: "10,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Subaru Legacy",
      year: 2020,
      price: "$20,500",
      mileage: "22,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Lexus ES",
      year: 2021,
      price: "$38,000",
      mileage: "12,000 km",
      fuel: "Hybrid",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Jaguar XF",
      year: 2019,
      price: "$42,000",
      mileage: "27,000 km",
      fuel: "Diesel",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Volvo S60",
      year: 2022,
      price: "$40,000",
      mileage: "9,000 km",
      fuel: "Hybrid",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Porsche Panamera",
      year: 2023,
      price: "$92,000",
      mileage: "4,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Genesis G80",
      year: 2021,
      price: "$47,000",
      mileage: "13,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Alfa Romeo Giulia",
      year: 2020,
      price: "$37,500",
      mileage: "19,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=600&q=80"
    }
  ];
  
  function renderCars(carArray) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = ''; // Clear existing content
  
    carArray.forEach(car => {
      // Create card container
      const card = document.createElement('article');
      card.className = 'car-card';
  
      // Car Image
      const img = document.createElement('img');
      img.src = car.image;
      img.alt = `${car.name} ${car.year}`;
      card.appendChild(img);
  
      // Car details container
      const details = document.createElement('div');
      details.className = 'car-details';
  
      // Title - car name and year
      const title = document.createElement('h3');
      title.className = 'car-title';
      title.textContent = `${car.name} ${car.year}`;
      details.appendChild(title);
  
      // Info list
      const infoList = document.createElement('ul');
      infoList.style.listStyle = 'none';
      infoList.style.padding = '0';
      infoList.style.margin = '0';
  
      const detailsData = [
        { label: 'Mileage', value: car.mileage },
        { label: 'Fuel', value: car.fuel },
        { label: 'Transmission', value: car.transmission },
      ];
  
      detailsData.forEach(detail => {
        const li = document.createElement('li');
        li.className = 'car-info';
        li.textContent = `${detail.label}: ${detail.value}`;
        infoList.appendChild(li);
      });
  
      details.appendChild(infoList);
  
      // Price
      const price = document.createElement('p');
      price.className = 'price';
      price.textContent = car.price;
      details.appendChild(price);
  
      card.appendChild(details);
  
      // Append card to car list
      carList.appendChild(card);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderCars(cars);
  });
  
  