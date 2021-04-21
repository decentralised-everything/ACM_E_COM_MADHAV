const func = async () => {
  const promise = new Promise((resolve, reject) => {
    if (Date.now() > 1618860212817 + 20000) {
      resolve("woohoooo!!!");
    }
  });

  promise.then((data) => {
    console.log(data);
  });
};

func();
