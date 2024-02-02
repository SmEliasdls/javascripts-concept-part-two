const nums = [12, 16, 13, 423, 122, 121];

// for (let elias of nums) {
//     console.log(elias);

//     if (elias === 423) {
//         break;
//     }
// }

for(let item of nums){
    if (item === 13){
        continue;
    }
    console.log(item);
}