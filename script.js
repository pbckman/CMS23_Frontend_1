function calculateCost() {
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    var material = document.getElementById('material').value;

    var area = length * width;
    var cost = calculateMaterialCost(area, material);

    document.getElementById('result').innerHTML = 'Kostnad: ' + cost + ' kr';
}

function calculateMaterialCost(area, material) {
    
    var costPerSquareMeter = 100;

    switch (material) {
        case 'trä':
            costPerSquareMeter = 150;
            break;
        case 'trä1':
            costPerSquareMeter = 200;
            break;
    }

    return area * costPerSquareMeter;
}


function calculateCostL() {
    var lengthA = document.getElementById('lengthA').value;
    var widthA = document.getElementById('widthA').value;
    var lengthB = document.getElementById('lengthB').value;
    var widthB = document.getElementById('widthB').value;

    var areaL = lengthA * widthA + lengthB * widthB;
    var costL = calculateMaterialCostL(areaL, materialL)

    document.getElementById('resultL').innerHTML = 'Kostnad: ' + costL + ' kr';
}

function calculateMaterialCostL(areaL, materialL) {
    
    var costPerSquareMeter = 100;

    switch (materialL) {
        case 'trä':
            costPerSquareMeter = 150;
            break;
        case 'trä1':
            costPerSquareMeter = 200;
            break;
    }

    return areaL * costPerSquareMeter;
}