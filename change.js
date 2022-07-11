class Change {
  calculate(coinArray, target) {
    coinArray.sort(function(a, b){return a - b});
    
    let result = [];
    let newCoinArray = [];
    let lastCoin = null;
    let coinLength = coinArray.length;
    for (let i = 0; i < coinLength; i++) {
        const element = coinArray[i];
        if (element == target) {
            lastCoin = element;
            result.push(lastCoin);
            return result;
        } else if (element < target) {
            lastCoin = element;
            newCoinArray.push(element);
            if (i == (coinLength - 1) && lastCoin != null && (target - lastCoin) < target) {
                result.push(lastCoin);
                result = result.concat(this.calculate(newCoinArray, target - lastCoin));
            }
        } else {
            if (lastCoin != null) {
                result.push(lastCoin);
                result = result.concat(this.calculate(newCoinArray, target - lastCoin));
            }
            break;
        }
    }

    result.sort(function(a, b){return a - b});
    return result;
  }
}

module.exports = Change;