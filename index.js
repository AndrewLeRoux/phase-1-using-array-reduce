const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


function batteryCounter(acucumulator, element) {
    return element + acucumulator
}

const totalBatteries = batteryBatches.reduce(batteryCounter, 0)

console.log(totalBatteries)