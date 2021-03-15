let HorizantalDisks = 26;
let VerticalDisks = 19;
let Radius = 18
let disks = [];
let defaultColor = "rgba(40,40,40,1)";
let colPic;
let colpickY;
let indexList = [];
let indexOfDisks = 0
let DisksProperties = {};
let extrasIndex = [169,170,188,189,435,436,454,455,473,474,492,493]


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i=0; i< HorizantalDisks; i++) {
      for (let j=0; j<VerticalDisks; j++) {
        disks.push(new Disk(Radius*2*i+Radius, Radius*2*j+Radius, Radius));
        indexList.push(indexOfDisks,Radius*2*i+Radius, Radius*2*j+Radius)
        if (indexOfDisks == VerticalDisks-1) {
          colpickY = Radius*2*j+Radius*2; 
        }
        indexOfDisks++
    }
  }
  colPic = createColorPicker("Red");
  colPic.position(0, colpickY);
}

function draw() {
  background(0);
  for (let i=0; i<disks.length; i++) {
    // Remove the extra disks
    if (extrasIndex.indexOf(i) < 0){
      disks[i].show();
    }
  }
}


class Disk {
  constructor(diskX, diskY, diskRadius) {
    this.diskX = diskX;
    this.diskY = diskY;
    this.diskRadius = diskRadius;
    this.diskColor = defaultColor
  }

  // Change the color of the disk that is clicked on by user.
  lightUp(_x, _y, _i) {
    let distance = dist(_x, _y, this.diskX, this.diskY) 
    if (distance < this.diskRadius) {
      this.diskColor = colPic.color()
      let diskNewColor = colPic.color().toString()
      // let diskNewColor = colPic.color().toString().substr(4)
      
      // Print the index of the disk and its new color to the console.
      DisksProperties[_i] = diskNewColor;
      
      // Print the index of the disk to console
      // console.log(_i)
      }
    }


  show() {
    noStroke();
    fill(this.diskColor);
    circle(this.diskX, this.diskY, this.diskRadius*2);
  }
}


function mousePressed() {
  for (let i=0; i<disks.length; i++) {
    disks[i].lightUp(mouseX, mouseY, i);
  }
}

function writeIndex(i_, x_, y_) {
  fill("Red");
  text(i_, x_, y_);
}

// Print a dictionary of disk's indexes and their colors to console
function keyTyped() {
  let dictLen = Object.keys(DisksProperties).length
  if (key === 'p') {
    for (let i=0; i<disks.length; i++) {
      // Add the disks with the original color to the dictionary
      if (DisksProperties.hasOwnProperty(str(i)) == false) {
        DisksProperties[i] = defaultColor
      }
      console.log(DisksProperties)
    }
  }
}
