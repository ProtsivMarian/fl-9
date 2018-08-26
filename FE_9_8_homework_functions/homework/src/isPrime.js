function isPrime(num) {
    if (num >= 0) {
        switch (num) {
            case 0:
            case 1:
                return false;
            case 2:
                return true;
            default:
                for (var i = 2; i < num; i++) {
                    if (num % i === 0)
                        return false;
                }
                return true;
        }
    } else {
        return false;
    }
}
