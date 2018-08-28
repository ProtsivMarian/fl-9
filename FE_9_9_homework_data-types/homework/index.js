function findType(parameter) {
    return typeof parameter;
}

function forEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

function map(array, action) {
    let transArr = [];

    forEach(array, i => {
        transArr.push(action(i));
    });

    return transArr;
}

function filter(array, action) {
    let filtArr = [];

    forEach(array, i => {
        if (action(i)) {
            filtArr.push(i);
        }
    });

    return filtArr;
}

function getAdultAppleLovers(array) {
    let adultAppleLoversArray = [];

    let filtArray = filter(array, i => {
        return i.age > 18 && i.favouriteFruit === 'apple';
    });

    adultAppleLoversArray = map(filtArray, i => {
        return i.name;
    });

    return adultAppleLoversArray;
}

function keys(object) {
    let arrayOfKeys = [];

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            arrayOfKeys.push(key);
        }
    }

    return arrayOfKeys;
}

function values(object) {
    let arrayOfValues = [];

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            arrayOfValues.push(object[key]);
        }
    }

    return arrayOfValues;
}

let month= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function showFormattedDate(date) {
    return `It is ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()}`;
}
