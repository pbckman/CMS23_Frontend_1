function calculateCost() {
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    var material = document.getElementById('selectedMaterial').value;

    var area = length * width;
    var cost = calculateMaterialCost(area, material);

    document.getElementById('result').innerHTML = 'Kostnad: ' + cost + ' kr';
}

function calculateMaterialCost(area, material) {

    var costPerSquareMeter = 100;

    switch (material) {
        case 'trä1':
            costPerSquareMeter = 150;
            break;
        case 'trä2':
            costPerSquareMeter = 200;
            break;
        case 'trä3':
            costPerSquareMeter = 300;
            break;
        case 'trä4':
            costPerSquareMeter = 400;
            break;
    }

    return area * costPerSquareMeter;
}


function calculateCostL() {
    var lengthA = document.getElementById('lengthA').value;
    var widthA = document.getElementById('widthA').value;
    var lengthB = document.getElementById('lengthB').value;
    var widthB = document.getElementById('widthB').value;
    var materialL = document.getElementById('selectedMaterial').value;

    var areaL = lengthA * widthA + lengthB * widthB;
    var costL = calculateMaterialCostL(areaL, materialL)

    document.getElementById('resultL').innerHTML = 'Kostnad: ' + costL + ' kr';
}

function calculateMaterialCostL(areaL, materialL) {

    var costPerSquareMeter = 100;

    switch (materialL) {
        case 'trä1':
            costPerSquareMeter = 150;
            break;
        case 'trä2':
            costPerSquareMeter = 200;
            break;
        case 'trä3':
            costPerSquareMeter = 300;
            break;
        case 'trä4':
            costPerSquareMeter = 400;
            break;
    }

    return areaL * costPerSquareMeter;
}

function selectMaterial(material) {
    document.getElementById('selectedMaterial').value = material;
}