
const restaurant = {
    name: " Mry Food",
    city: "Kota Bogor",
    favoriteDrink: "Abidin",
    favoriteFood: "Jasuke",
    isVegan: true
  };
  
  const restaurants = [
    {
      name: "Angkringan Langit",
      city: "Kota Tasik",
      favoriteDrink: "Cappucino Ice",
      favoriteFood: "Sharing",
      isVegan: true
    },
    {
      name: "Maxim A Food",
      city: "Kota Sukabumi",
      favoriteDrink: "Inex",
      favoriteFood: "Steak",
      isVegan: false
    }
  ];
  
  // Menampilkan informasi restoran objek
  console.log("Informasi Restoran Objek:");
  console.log("Nama Restoran:", restaurant.name);
  console.log("Kota:", restaurant.city);
  console.log("Minuman Favorit:", restaurant.favoriteDrink);
  console.log("Makanan Favorit:", restaurant.favoriteFood);
  console.log("Vegan:", restaurant.isVegan ? "Ya" : "Tidak");
  
  // Menampilkan informasi restoran dari array
  console.log("\nInformasi Restoran Array:");
  restaurants.forEach(function(restaurant, index) {
    console.log("Restoran ke-" + (index + 1));
    console.log("Nama Restoran:", restaurant.name);
    console.log("Kota:", restaurant.city);
    console.log("Minuman Favorit:", restaurant.favoriteDrink);
    console.log("Makanan Favorit:", restaurant.favoriteFood);
    console.log("Vegan:", restaurant.isVegan ? "Ya" : "Tidak");
    console.log("\n");
  });
