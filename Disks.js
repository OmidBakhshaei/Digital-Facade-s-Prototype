let HorizantalDisks = 26;
let VerticalDisks = 19;
let Radius = 15;
let disks = [];
let colPic;
let colpickY;
let indexList = [];
let indexOfDisks = 0;
let DisksProperties = {};
let extrasIndexes = [169,170,188,189,435,436,454,455,473,474,492,493];
let diskColors = [];
let x1, x2, y1, y2;
let new1 = 0;
let new2 = 0;
let checkbox;
let checked;
let greyValue = 30
let defaultColor = `rgba(${greyValue}, ${greyValue}, ${greyValue}, 255)`;
let allColors = {}
let coloredDisks = {}



  let colorRGBA = {}

  
for (let i=0; i<HorizantalDisks*VerticalDisks; i++) {
  if (colorRGBA.hasOwnProperty(i) == true) {
    allColors[i] = colorRGBA[i]
    coloredDisks[i] = colorRGBA[i]
  }

  else {
    allColors[i] = defaultColor
  }
}


function setup() {
 
  createCanvas(windowWidth, windowHeight+20);

  for (let i=0; i< HorizantalDisks; i++) {
      for (let j=0; j<VerticalDisks; j++) {
        x = Radius*2.1*i+Radius
        y = Radius*2.1*j+Radius
        disks.push(new Disk(x, y, Radius, allColors[indexOfDisks], indexOfDisks));
        indexList.push(indexOfDisks,x, y)
        if (indexOfDisks == VerticalDisks-1) {
          colpickY = y + Radius;
        }
        indexOfDisks++
    }
  }
  colPic = createColorPicker("#CDAC77");
  colPic.position(0, colpickY);
  
  slider = createSlider(30, 255, 30, 1);
  slider.position(610, colpickY+10);
  slider.style('width', '200px');
  
  checkbox = createCheckbox('label', false);
  checkbox.changed(multipleSelection);
  checkbox.position(50, colpickY-3);
  const box = checkbox.elt.getElementsByTagName('input')[0];
	box.style.width = '27px';
	box.style.height = '27px';
}



function draw() {

  background(0);
  
  sliderValue = slider.value();
  dimmerValue = `rgba(${sliderValue}, ${sliderValue}, ${sliderValue}, 255)`;
  
  fill("white");
  noStroke();
  text("Multiple selection", 85, colpickY+1, 50, 600);
  for (let i=0; i<disks.length; i++) {
    // Remove the extra disks
    if (extrasIndexes.indexOf(i) < 0){
      if (coloredDisks.hasOwnProperty(i) == true) {
        disks[i].show("self");
      }
      else {
        disks[i].dimmer(mouseX, mouseY, i, dimmerValue)
      }
    }
  }

  if (mouseIsPressed){
    x2 = mouseX;
    y2 = mouseY;
  }
  // fill(colPic.color().toString())
  fill(colPic.color().toString().slice(0,-2) + new1 + ")")
  // stroke(colPic.color().toString())
  stroke(colPic.color().toString().slice(0,-2) + new2 + ")")
  let rectangle = rect(x1,y1, x2-x1, y2-y1);
  
}



class Disk {
  constructor(diskX, diskY, diskRadius, diskColor, diskIndex) {
    this.diskX = diskX;
    this.diskY = diskY;
    this.diskRadius = diskRadius;
    this.diskColor = diskColor;
    this.diskIndex = diskIndex;
  }

  // Change the color of the disk that is clicked on by user.
  lightUp(_x, _y, _i) {
    let distance = dist(_x, _y, this.diskX, this.diskY) 
    if (distance < this.diskRadius) {
      coloredDisks[_i] = colPic.color()
      this.diskColor = coloredDisks[_i]
      console.log("The color of disk number " + _i + " was changed to "+ coloredDisks[_i])
      }
  }
  
  // Change the color of the disks in the drawn rectangle by user
  lightUpRect(_x1, _x2, _y1, _y2, _i) {
    if (_x1<this.diskX && _x2>this.diskX && _y1<this.diskY && _y2>this.diskY ||
        _x1<this.diskX && _x2>this.diskX && _y1>this.diskY && _y2<this.diskY ||
        _x1>this.diskX && _x2<this.diskX && _y1<this.diskY && _y2>this.diskY ||
        _x1>this.diskX && _x2<this.diskX && _y1>this.diskY && _y2<this.diskY) {
      coloredDisks[_i] = colPic.color()
      this.diskColor = coloredDisks[_i]
      console.log("The color of disk number " + _i +" was changed to " + coloredDisks[_i]);
    }
  }

  
  show(color) {
    noStroke();
    if (color == "self") {
      fill(this.diskColor)
    }
    else {
      fill(color)
    }
    circle(this.diskX, this.diskY, this.diskRadius*2);
  }
  
  
  dimmer(_x, _y, _i, dimmerValue) {
    let distance = dist(_x, _y, this.diskX, this.diskY)
      if (distance < this.diskRadius) {
        if (!checked) {
          fill(colPic.color().toString().slice(0,-2) + 0.4 + ")")
          circle(this.diskX, this.diskY, this.diskRadius*2);
        }
      }
      else {
        fill(dimmerValue)
        circle(this.diskX, this.diskY, this.diskRadius*2);
      }
  }
  

}



function mousePressed() {
  x1 = mouseX;
  y1 = mouseY;
  // }
  if (checked != true) {
    for (let i=0; i<disks.length; i++) {
      disks[i].lightUp(mouseX, mouseY, i);
    }
  }
  else {
    new1 = "0.1";
    new2 = "0.8";
  }  
}

function mouseReleased() {
  x2 = mouseX;
  y2 = mouseY;
  new1 = "0";
  new2 = "0";
  if (checked) {
    for (let i=0; i<disks.length; i++) {
      disks[i].lightUpRect(x1, x2, y1, y2, i);
    }
  }
}

function multipleSelection() {
  if (this.checked()) {
    checked = true;
  }
  else {
    checked = false;
  }

}


function keyTyped() {
  // Print a dictionary of disk's indexes and their colors to console
  if (key === 'p') {
      console.log(coloredDisks)
    }
  else if (key === 'c') {
    // Recreate the colorsز
    coloredDisks = {}
    for (let i=0; i<disks.length; i++) {
      if (colorRGBA.hasOwnProperty(i) == true) {
        // allColors[i] = colorRGBA[i]
        coloredDisks[i] = colorRGBA[i];
      }
    }
  }
  else if (key === 'r') {
    // Reset Colors
    coloredDisks = {}
  }
}
