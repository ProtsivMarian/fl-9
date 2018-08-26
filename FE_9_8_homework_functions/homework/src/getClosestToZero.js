function getClosestToZero() {
    let current = arguments[0];
    let near = Math.abs(0 - current);
    for (let val = 0; val < arguments.length; val++) {
        let newdiff = Math.abs(0 - arguments[val]);
        if (newdiff < near) {
            near = newdiff;
            current = arguments[val];
        }
    }
    return current;
}
