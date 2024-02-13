// ---------------Common function for all areas-----------------
function getInputValueById(inputFieldId){
    const elementInput = document.getElementById(inputFieldId);
    const valueText = elementInput.value;
    const value = parseFloat(valueText);
    return value; 
}

// common function for set area
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// function for rectangle area & display area
function calculateTriangleValue(){
    const rectangleLength = getInputValueById('rectangle-length');
    const rectangleWidth = getInputValueById('rectangle-width');
    console.log(rectangleLength, rectangleWidth);

    const area = 0.5 * rectangleLength * rectangleWidth;
    setInnerTextById('rectangle-area-output', area);
    console.log(area)
}

// function for parallelogram area & display area
function calculateParallelogramValue(){
    const parallelogramBase = getInputValueById('parallelogram-base');
    const parallelogramHeight = getInputValueById('parallelogram-height');
    console.log(parallelogramBase, parallelogramHeight);

    const area = parallelogramBase * parallelogramHeight;
    setInnerTextById('parallelogram-area-output', area);
    console.log(area)
}

// function for rhombus area & display area
function calculateRhombusValue(){
    const rhombusLength = getInputValueById('rhombus-length');
    const rhombusWidth = getInputValueById('rhombus-width');
    console.log(rhombusLength, rhombusWidth);

    const area = 0.5 * rhombusLength * rhombusWidth;
    setInnerTextById('rhombus-area-output', area);
    console.log(area)
}

// function for pentagon area & display area
function calculatePentagonValue(){
    const pentagonLength = getInputValueById('perimeter-length');
    const pentagonWidth = getInputValueById('apothem -width');
    console.log(pentagonLength, pentagonWidth);

    const area = 0.5 * pentagonLength * pentagonWidth;
    setInnerTextById('pentagon-area-output', area);
    console.log(area)
}

// function for ellipse area & display area
function calculatePentagonValue(){
    const ellipseMinorLength = getInputValueById('ellipse-minor-length');
    const ellipseMajorWidth = getInputValueById('ellipse-major-length');
    console.log(ellipseMinorLength, ellipseMajorWidth);

    const area = 3.1416 * ellipseMinorLength * ellipseMajorWidth;
    setInnerTextById('ellipse-area-output', area);
    console.log(area)
}


// triangle area using Normal Case
function triangleAreaCalculate(){
    // get length of the triangle
    const triangleLengthInput = document.getElementById('triangle-length');
    const lengthText = triangleLengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length)

    // get width of the triangle
    const triangleWidthInput = document.getElementById('triangle-width');
    const widthText = triangleWidthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // calculate the triangle area
    const area = 0.5 * length * width;
    console.log('Area of the triangle is:', area);

    // display the triangle area
    const triangleAreaOutput = document.getElementById('triangle-area-result');
    triangleAreaOutput.innerText = area;
  }