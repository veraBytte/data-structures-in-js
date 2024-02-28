const array = [1,4,6,32,4,6,2,3,6,8,0,3,2,4,7,2,1,65,5,3,6,5,32,7,6,9,4,7,43,3,1]

for (let i = 0; i < array.length; i++) {
    if(array[i+1]>= array[i] && array[i+1]>= array[i+2]){
        console.log(`find a peak on the position ${i} : ${array[i+1]}`);
    }
}