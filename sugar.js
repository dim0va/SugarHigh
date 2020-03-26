var candies = [33, 20, 16, 10, 6, 13];
var threshold = 33;

sugarHigh(candies, threshold);


function sugarHigh(candies, threshold) {

    console.log("Initial array: " + candies);
    console.log("Threshold: " + threshold);

    var dictionary = [];
    for (var i = 0; i < candies.length; i++) {
        dictionary.push({
            key: i,
            value: candies[i]
        })
    }

    candies.sort((a, b) => a - b);


    var indices = [];
    var sumOfSugar = 0;
    for (var i = 0; i < candies.length; i++) {
        if (sumOfSugar + candies[i] <= threshold) {
            sumOfSugar += candies[i];
            indices.push(Object.keys(dictionary).find(key => dictionary[key].value === candies[i]));
        }
    }


    for (var i = 0; i < indices.length; i++) {
        if (indices[i] === indices[i + 1]) {
            indices[i + 1]++;
        }
    }

    console.log("Ordered indices: " + indices.sort((a, b) => a - b));
}