var my_array = [[1, 4], ["china", "srun", 59], [3, 6]];
var my_new_array = [];
for (i of my_array) {
    for (j of i) {
        my_new_array.push(j);
    }
}
console.log(my_new_array); 