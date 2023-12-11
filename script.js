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

function calculateCost() {
    var material = document.getElementById('selectedMaterial').value;

    if (document.getElementById('rektInputs').style.display === 'block') {
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    

    var area = length * width;
    var cost = calculateMaterialCost(area, material);

    document.getElementById('result').innerHTML = 'Kostnad: ' + cost + ' kr';
    }
}

function calculateCostL() {
    var materialL = document.getElementById('selectedMaterial').value;

    if (document.getElementById('LInputs').style.display === 'block') {
    var lengthA = document.getElementById('lengthA').value;
    var widthA = document.getElementById('widthA').value;
    var lengthB = document.getElementById('lengthB').value;
    var widthB = document.getElementById('widthB').value;
    

    var areaL = lengthA * widthA + lengthB * widthB;
    var costL = calculateMaterialCost(areaL, materialL);

    document.getElementById('resultL').innerHTML = 'Kostnad: ' + costL + ' kr';
    }
}



function selectShape(shape) {
    var rektInputs = document.getElementById('rektInputs');
    var LInputs = document.getElementById('LInputs');
    var calculateButton = document.getElementById('calculateButton');
    var calculateButtonL = document.getElementById('calculateButtonL');

    if (shape === 'trall1') {
        rektInputs.style.display = 'block';
        LInputs.style.display = 'none';
        calculateButton.style.display = 'block';
        calculateButtonL.style.display = 'none';
    } else if (shape === 'trall2') {
        rektInputs.style.display = 'none';
        LInputs.style.display = 'block';
        calculateButton.style.display = 'none';
        calculateButtonL.style.display = 'block';
    }

    document.addEventListener('click', function (event) {
        if (event.target.nodeName == "IMG") {
            var allImages = document.querySelectorAll('img');
            allImages.forEach(function (img) {
                img.style.border = "none";
            });
    
            event.target.style.border = "2px solid yellow";
        }
    });
}


function selectMaterial(material) {
    var allMaterialImagesRectangular = document.querySelectorAll('#materialImagesRectangular .img-material-option');
    allMaterialImagesRectangular.forEach(function(img) {
        img.classList.remove('selected');
    });

    var selectedMaterialImageRectangular = document.querySelector('#materialImagesRectangular img[alt="' + material + '"]');
    if (selectedMaterialImageRectangular) {
        selectedMaterialImageRectangular.classList.add('selected');
    }

    var allMaterialImagesL = document.querySelectorAll('#materialImagesL .img-material-option');
    allMaterialImagesL.forEach(function(img) {
        img.classList.remove('selected');
    });

    var selectedMaterialImageL = document.querySelector('#materialImagesL img[alt="' + material + '"]');
    if (selectedMaterialImageL) {
        selectedMaterialImageL.classList.add('selected');
    }

    // Uppdatera det gömda fältet med valt material
    document.getElementById('selectedMaterial').value = material;

    document.addEventListener('click', function (event) {
        if (event.target.nodeName == "IMG") {
            var allImages = document.querySelectorAll('img');
            allImages.forEach(function (img) {
                img.style.border = "none";
            });
    
            event.target.style.border = "2px solid yellow";
        }
    });
}