/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let count = 0;
  for (let i=0; i<objects.length;i++) {
      if (objects[i].x === objects[i].y) {
          count++;
      }
    }
  console.log(count);
  return count;
}

const objects1 = [
  o0={
    x: 1,
    y: 1
  },
  o1={
    x: 2,
    y: 3
  },
  o2={
    x: 3,
    y: 3
  },
  o3={
    x: 3,
    y: 4
  },
  o4={
    x: 4,
    y: 5
  }
];

getCount(objects1);
