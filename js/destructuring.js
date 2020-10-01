const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

  const { johnDoe: { age, email }} = user;
  const { johnDoe: { age: userAge, email: userEmail }} = user;

  console.log(userAge)