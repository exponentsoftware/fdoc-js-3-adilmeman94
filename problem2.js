const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];

// 1. Imagine you are getting the above users collection from a MongoDB database.

// a. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.

const username = "Adil";
const email = "adil@gmail.com";
const password = "1234";
const signup = (username, email, password) => {
  let found = false;
  const exist = users.some((el) => el.email == email);

  if (!exist) {
    found = true;
    const _id = Math.random().toString(36).substr(2, 6);
    const createdAt = new Date();
    users.push({
      _id: _id,
      username: username,
      email: email,
      password: password,
      createdAt: createdAt,
      isLoggedIn: false,
    });
  }
  found
    ? console.log(users, "userArray")
    : console.log("user is already exist");
};

// signup(username, email, password);

// b. Create a function called ***signIn*** which allows user to sign in to the application

const signIn = (email, password) => {
  let found = false;

  users.forEach((item) => {
    if (item.email === email) {
      if (item.password === password) {
        found = true;
        item.isLoggedIn = true;
      } else {
        return console.log("password is incorrect");
      }
    } else {
      return console.log("email is not exist");
    }
  });
  found ? console.log(users, "userArray") : "";
};

// signIn(email, password);

// 2  The products array has  three elements and each of them has six properties.

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// a. Create a function called ***rateProduct*** which rates the product

const rateProduct = (email, product, rating) => {
  let found = false;

  users.forEach((item) => {
    if (item.email === email && item.isLoggedIn === true) {
      for (let i = 0; i < products.length; i++) {
        if (products[i].name === product) {
          found = true;
          products[i].ratings.push({ userId: item._id, rate: rating });
        } else {
          console.log("product is not lited");
        }
      }
    } else {
      console.log("please use correct email id and login");
    }
  });

  found ? console.log(products, "productArray") : "";
};

//  rateProduct("asab@asab.com", "Laptop", 4);

// b. Create a function called ***averageRating*** which calculate the average rating of a product

const averageRating = (product) => {
  let found = false;
  let sum = 0;
  let averageRating1 = 0;
  let divider = 1;
  for (let i = 0; i < products.length; i++) {
    if (products[i].name == product) {
      found = true;
      divider = products[i].ratings.length;
      for (let j = 0; j < divider; j++) {
        sum += products[i].ratings[j].rate;
      }
    }
  }
  averageRating1 = sum / divider;
  found ? console.log(averageRating1, "averageRating") : "";
};

// averageRating("mobile phone");

// c. Create a function called ***likeProduct***. This function will helps to like to the product
//  if it is not liked and remove like if it was liked.

const likeProduct = (email, product) => {
  let found = false;

  for (let j = 0; j < users.length; j++) {
    if (users[j].email === email && users[j].isLoggedIn === true) {
      for (let i = 0; i < products.length; i++) {
        if (products[i].name === product) {
          found = true;
          for (let k = 0; k < products[i].likes.length; k++) {
            if (products[i].likes[k] == users[j]._id) {
              const index = products[i].likes.indexOf(products[i].likes[k]);
              products[i].likes.splice(index, 1);
              console.log("You have unliked this product");
            } else {
              products[i].likes.push(users[j]._id);
              console.log("You have liked this product");
            }
          }
        } else {
          console.log("product is not lited");
        }
      }
    } else {
      console.log("please use correct email id and login");
    }
  }

  found ? console.log(products, "productArray") : "";
};

likeProduct("asab@asab.com", "mobile phone");
