//Arrays
function secondLargest(arr) {
    arr.sort((x,y) => {return y-x});
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            result = arr[i];
            break;
        }
    }
    console.log(result);
    return result;
}

nums = [2,3,6,6,5,7,8,10];
secondLargest(nums);