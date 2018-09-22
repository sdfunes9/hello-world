//Throw
function isPositive(a) {
    try {
      if (a > 0) {
          console.log('YES');
          return 'YES';
      } else {
        if (a === 0) {
          throw new Error("Zero Error");
        }else{
            if (a < 0) {
              throw new Error('Negative Error');
            }
        }
      }
    } catch (error) {
        console.log(error.message);
    }
  }
  //Alternative version for "isPositive"
  function isPositiv(b) {
      try {
          if (Math.sign(b) == 0) {
              throw new Error('Zero Error');
          } else {
              if (Math.sign(b) == -1) {
                  throw new Error('Negative Error');
              } else {
                  console.log('YES');
                  return 'YES';
              }
          }
      } catch (error) {
          console.log(error.message);
      }
  }
  isPositiv(2);
  isPositiv(0);
  isPositiv(6);