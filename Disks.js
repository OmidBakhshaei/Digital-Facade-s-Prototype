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
let img;
let diskColors = [];
let x1, x2, y1, y2;
let new1 = 0;
let new2 = 0;
let checkbox;
let checked;
let defaultColor = "rgba(57, 57, 57, 255)";
// let defaultColor =  "rgba(30, 30, 30, 255)";



function getColorData(i) {
  let colorRGBA = ["rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(58, 58, 58, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(56, 56, 56, 255)", "rgba(56, 56, 56, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(56, 56, 56, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(58, 58, 58, 255)", "rgba(57, 57, 57, 255)", "rgba(56, 56, 56, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(58, 58, 58, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(58, 58, 58, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 55, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(58, 58, 58, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 59, 255)", "rgba(57, 57, 55, 255)", "rgba(58, 58, 60, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 55, 255)", "rgba(56, 56, 56, 255)", "rgba(57, 57, 57, 255)", "rgba(58, 58, 58, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(58, 58, 56, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 55, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 59, 255)", "rgba(57, 57, 59, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(56, 56, 54, 255)", "rgba(0, 0, 0, 255)", "rgba(0, 0, 0, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 55, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 55, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(0, 0, 0, 255)", "rgba(0, 0, 0, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(106, 96, 105, 255)", "rgba(182, 154, 143, 255)", "rgba(151, 124, 113, 255)", "rgba(218, 184, 175, 255)", "rgba(183, 154, 148, 255)", "rgba(100, 80, 81, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(80, 69, 65, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(169, 164, 187, 255)", "rgba(200, 188, 198, 255)", "rgba(234, 205, 189, 255)", "rgba(207, 172, 150, 255)", "rgba(191, 153, 130, 255)", "rgba(157, 114, 98, 255)", "rgba(178, 133, 114, 255)", "rgba(182, 156, 143, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(79, 72, 66, 255)", "rgba(161, 141, 108, 255)", "rgba(204, 170, 125, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(96, 94, 105, 255)", "rgba(182, 177, 207, 255)", "rgba(174, 168, 202, 255)", "rgba(216, 185, 165, 255)", "rgba(179, 153, 138, 255)", "rgba(219, 179, 154, 255)", "rgba(228, 185, 153, 255)", "rgba(201, 167, 140, 255)", "rgba(167, 135, 122, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(150, 130, 97, 255)", "rgba(178, 160, 124, 255)", "rgba(201, 172, 128, 255)", "rgba(179, 150, 106, 255)", "rgba(149, 119, 93, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(140, 139, 157, 255)", "rgba(157, 156, 198, 255)", "rgba(133, 137, 184, 255)", "rgba(136, 125, 141, 255)", "rgba(148, 116, 105, 255)", "rgba(184, 150, 123, 255)", "rgba(165, 128, 109, 255)", "rgba(155, 122, 105, 255)", "rgba(159, 131, 109, 255)", "rgba(211, 202, 193, 255)", "rgba(222, 199, 158, 255)", "rgba(205, 172, 119, 255)", "rgba(198, 171, 124, 255)", "rgba(192, 165, 118, 255)", "rgba(167, 139, 100, 255)", "rgba(163, 137, 102, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(85, 72, 64, 255)", "rgba(155, 147, 160, 255)", "rgba(143, 147, 192, 255)", "rgba(133, 139, 187, 255)", "rgba(84, 85, 106, 255)", "rgba(74, 68, 72, 255)", "rgba(99, 74, 70, 255)", "rgba(103, 78, 74, 255)", "rgba(139, 109, 99, 255)", "rgba(130, 108, 97, 255)", "rgba(228, 219, 210, 255)", "rgba(186, 162, 116, 255)", "rgba(199, 175, 127, 255)", "rgba(213, 186, 133, 255)", "rgba(166, 147, 115, 255)", "rgba(139, 119, 94, 255)", "rgba(128, 109, 95, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(143, 119, 91, 255)", "rgba(166, 150, 135, 255)", "rgba(125, 127, 175, 255)", "rgba(115, 118, 153, 255)", "rgba(90, 88, 109, 255)", "rgba(68, 67, 81, 255)", "rgba(69, 67, 70, 255)", "rgba(89, 71, 69, 255)", "rgba(95, 83, 83, 255)", "rgba(149, 139, 138, 255)", "rgba(144, 136, 134, 255)", "rgba(73, 67, 69, 255)", "rgba(72, 67, 63, 255)", "rgba(125, 102, 86, 255)", "rgba(154, 127, 98, 255)", "rgba(144, 118, 95, 255)", "rgba(161, 132, 100, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(131, 111, 84, 255)", "rgba(161, 142, 109, 255)", "rgba(119, 107, 107, 255)", "rgba(95, 94, 112, 255)", "rgba(97, 94, 113, 255)", "rgba(80, 77, 98, 255)", "rgba(73, 72, 86, 255)", "rgba(53, 48, 54, 255)", "rgba(46, 44, 49, 255)", "rgba(136, 132, 133, 255)", "rgba(63, 61, 62, 255)", "rgba(49, 49, 51, 255)", "rgba(53, 52, 57, 255)", "rgba(87, 72, 69, 255)", "rgba(66, 58, 55, 255)", "rgba(49, 47, 50, 255)", "rgba(61, 51, 50, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(111, 87, 75, 255)", "rgba(122, 102, 93, 255)", "rgba(134, 117, 110, 255)", "rgba(116, 106, 107, 255)", "rgba(86, 81, 88, 255)", "rgba(63, 61, 66, 255)", "rgba(50, 45, 51, 255)", "rgba(57, 57, 57, 255)", "rgba(105, 99, 101, 255)", "rgba(59, 54, 60, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(72, 62, 63, 255)", "rgba(71, 61, 62, 255)", "rgba(70, 60, 59, 255)", "rgba(58, 58, 58, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(101, 83, 73, 255)", "rgba(121, 104, 94, 255)", "rgba(147, 119, 108, 255)", "rgba(163, 146, 116, 255)", "rgba(171, 154, 126, 255)", "rgba(200, 185, 152, 255)", "rgba(198, 182, 149, 255)", "rgba(184, 166, 144, 255)", "rgba(175, 161, 134, 255)", "rgba(163, 157, 145, 255)", "rgba(127, 144, 160, 255)", "rgba(73, 73, 83, 255)", "rgba(60, 54, 58, 255)", "rgba(57, 56, 52, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(56, 56, 56, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 53, 54, 255)", "rgba(84, 76, 74, 255)", "rgba(122, 112, 111, 255)", "rgba(164, 156, 145, 255)", "rgba(159, 151, 140, 255)", "rgba(169, 157, 135, 255)", "rgba(182, 167, 146, 255)", "rgba(192, 191, 187, 255)", "rgba(176, 172, 187, 255)", "rgba(58, 57, 62, 255)", "rgba(57, 57, 57, 255)", "rgba(58, 58, 58, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 59, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(58, 58, 58, 255)", "rgba(57, 57, 57, 255)", "rgba(59, 58, 64, 255)", "rgba(69, 71, 83, 255)", "rgba(81, 84, 101, 255)", "rgba(115, 119, 130, 255)", "rgba(179, 181, 176, 255)", "rgba(87, 87, 95, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(56, 56, 56, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(52, 51, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(70, 70, 80, 255)", "rgba(51, 50, 56, 255)", "rgba(56, 56, 56, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 55, 255)", "rgba(58, 58, 60, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 55, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(0, 0, 0, 255)", "rgba(0, 0, 0, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 59, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 55, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(56, 56, 56, 255)", "rgba(0, 0, 0, 255)", "rgba(0, 0, 0, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 55, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 55, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(0, 0, 0, 255)", "rgba(0, 0, 0, 255)", "rgba(57, 57, 55, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(58, 58, 58, 255)", "rgba(57, 57, 57, 255)", "rgba(58, 58, 58, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(57, 57, 57, 255)", "rgba(0, 0, 0, 255)", "rgba(0, 0, 0, 255)"]
  return colorRGBA[i] 

}



function setup() {
//   if (windowWidth/(HorizantalDisks*2+5<windowHeight/(VerticalDisks*2+5))) {
//     Radius = windowWidth/(HorizantalDisks*2+5);
//   } 
//   else {
//     Radius = windowHeight/(VerticalDisks*2+5);
//   }
 
  createCanvas(windowWidth, windowHeight+20);

  for (let i=0; i< HorizantalDisks; i++) {
      for (let j=0; j<VerticalDisks; j++) {
        x = Radius*2.1*i+Radius
        y = Radius*2.1*j+Radius
        disks.push(new Disk(x, y, Radius, getColorData(indexOfDisks), indexOfDisks));
        indexList.push(indexOfDisks,x, y)
        if (indexOfDisks == VerticalDisks-1) {
          colpickY = y + Radius;
        }
        indexOfDisks++
    }
  }
  colPic = createColorPicker("#CDAC77");
  colPic.position(0, colpickY);
  
  checkbox = createCheckbox('label', false);
  checkbox.changed(multipleSelection);
  checkbox.position(50, colpickY-3);
  const box = checkbox.elt.getElementsByTagName('input')[0];
	box.style.width = '27px';
	box.style.height = '27px';

  // button = createButton("Multiple selection");
  // button.mousePressed(multipleSelection)
  // button.position(60, colpickY);
  // button.size(50,28);
  // button.style("font-family", "Times");
  // button.style("background-color", "white");
  // button.style('font-size', '10px');
  // button.style("color", "grey");
}



function draw() {
  background(0);
  
  fill("white");
  noStroke();
  text("Multiple selection", 85, colpickY+1, 50, 600);
  for (let i=0; i<disks.length; i++) {
    // Remove the extra disks
    if (extrasIndexes.indexOf(i) < 0){
      disks[i].show(i);
    }
  }
  if (mouseIsPressed){
    x2 = mouseX;
    y2 = mouseY;
  }
  fill("rgba(255,0,0, " + new1 + ")")
  stroke("rgba(255,0,0, " + new2 + ")")
  let rectangle = rect(x1,y1, x2-x1, y2-y1);


}



class Disk {
  constructor(diskX, diskY, diskRadius, diskColor, diskIndex) {
    this.diskX = diskX;
    this.diskY = diskY;
    this.diskRadius = diskRadius;
    this.diskColor = diskColor
    this.diskIndex = diskIndex
  }

  // Change the color of the disk that is clicked on by user.
  lightUp(_x, _y, _i) {
    let distance = dist(_x, _y, this.diskX, this.diskY) 
    if (distance < this.diskRadius) {
      this.diskColor = colPic.color()
      let diskNewColor = colPic.color().toString()
      // Save new colors' data
      DisksProperties[_i] = diskNewColor;
      }
  }
  
  // Change the color of the disks in the drawn rectangle by user
  lightUpRect(_x1, _x2, _y1, _y2, _i) {
    if (_x1<this.diskX && _x2>this.diskX && _y1<this.diskY && _y2>this.diskY ||
        _x1<this.diskX && _x2>this.diskX && _y1>this.diskY && _y2<this.diskY ||
        _x1>this.diskX && _x2<this.diskX && _y1<this.diskY && _y2>this.diskY ||
        _x1>this.diskX && _x2<this.diskX && _y1>this.diskY && _y2<this.diskY) {
      console.log(_x1 + " < " + this.diskX + "and " + " < " + _x2)
      console.log("disk's color is" + this.diskColor)
      this.diskColor = colPic.color()
      console.log("disk's color is" + this.diskColor)
      let diskNewColor2 = colPic.color().toString()
      // Save new colors' data
      DisksProperties[_i] = diskNewColor2;
    }
  }

  
  show() {
    noStroke();
    fill(this.diskColor);
    circle(this.diskX, this.diskY, this.diskRadius*2);
  }
  
  
  resetColors() {
    this.diskColor = defaultColor
  }
  
  
  reCreateColors() {
    this.diskColor = getColorData(this.diskIndex)
  }
  
  
  hover() {
  for (let i=0; i<disks.length; i++) {
    disks[i].showHover(mouseX, mouseY, i);
  }
}
}


function mousePressed() {
  // if button is pressed
  // if () {
  console.log(DisksProperties)
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


function keyTyped() {
  if (key === 'p') {
      console.log(diskColors)
    }
  else if (key === 'c') {
    for (let i=0; i<disks.length; i++) {
      disks[i].reCreateColors();
    }
  }
  else if (key === 'r') {
    for (let i=0; i<disks.length; i++) {
      disks[i].resetColors();
    }
  }
}
