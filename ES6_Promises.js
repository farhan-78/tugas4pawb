function foo() {
  return new Promise((
 resolve , reject 
 
 
) => {
    let result = getSomeResult();
    if (result)
      resolve('Success');
    else
      reject('Something went wrong');
  });
}