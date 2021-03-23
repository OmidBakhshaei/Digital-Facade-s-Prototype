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



  let colorRGBA = {
169:"rgba(0, 0, 0, 255)",
170:"rgba(0, 0, 0, 255)",
188:"rgba(0, 0, 0, 255)",
189:"rgba(0, 0, 0, 255)",
195:"rgba(106, 96, 105, 255)",
196:"rgba(182, 154, 143, 255)",
197:"rgba(151, 124, 113, 255)",
198:"rgba(218, 184, 175, 255)",
199:"rgba(183, 154, 148, 255)",
200:"rgba(100, 80, 81, 255)",
208:"rgba(80, 69, 65, 255)",
213:"rgba(169, 164, 187, 255)",
214:"rgba(200, 188, 198, 255)",
215:"rgba(234, 205, 189, 255)",
216:"rgba(207, 172, 150, 255)",
217:"rgba(191, 153, 130, 255)",
218:"rgba(157, 114, 98, 255)",
219:"rgba(178, 133, 114, 255)",
220:"rgba(182, 156, 143, 255)",
225:"rgba(79, 72, 66, 255)",
226:"rgba(161, 141, 108, 255)",
227:"rgba(204, 170, 125, 255)",
231:"rgba(96, 94, 105, 255)",
232:"rgba(182, 177, 207, 255)",
233:"rgba(174, 168, 202, 255)",
234:"rgba(216, 185, 165, 255)",
235:"rgba(179, 153, 138, 255)",
236:"rgba(219, 179, 154, 255)",
237:"rgba(228, 185, 153, 255)",
238:"rgba(201, 167, 140, 255)",
239:"rgba(167, 135, 122, 255)",
242:"rgba(150, 130, 97, 255)",
243:"rgba(178, 160, 124, 255)",
244:"rgba(201, 172, 128, 255)",
245:"rgba(179, 150, 106, 255)",
246:"rgba(149, 119, 93, 255)",
250:"rgba(140, 139, 157, 255)",
251:"rgba(157, 156, 198, 255)",
252:"rgba(133, 137, 184, 255)",
253:"rgba(136, 125, 141, 255)",
254:"rgba(148, 116, 105, 255)",
255:"rgba(184, 150, 123, 255)",
256:"rgba(165, 128, 109, 255)",
257:"rgba(155, 122, 105, 255)",
258:"rgba(159, 131, 109, 255)",
259:"rgba(211, 202, 193, 255)",
260:"rgba(222, 199, 158, 255)",
261:"rgba(205, 172, 119, 255)",
262:"rgba(198, 171, 124, 255)",
263:"rgba(192, 165, 118, 255)",
264:"rgba(167, 139, 100, 255)",
265:"rgba(163, 137, 102, 255)",
268:"rgba(85, 72, 64, 255)",
269:"rgba(155, 147, 160, 255)",
270:"rgba(143, 147, 192, 255)",
271:"rgba(133, 139, 187, 255)",
272:"rgba(84, 85, 106, 255)",
273:"rgba(74, 68, 72, 255)",
274:"rgba(99, 74, 70, 255)",
275:"rgba(103, 78, 74, 255)",
276:"rgba(139, 109, 99, 255)",
277:"rgba(130, 108, 97, 255)",
278:"rgba(228, 219, 210, 255)",
279:"rgba(186, 162, 116, 255)",
280:"rgba(199, 175, 127, 255)",
281:"rgba(213, 186, 133, 255)",
282:"rgba(166, 147, 115, 255)",
283:"rgba(139, 119, 94, 255)",
284:"rgba(128, 109, 95, 255)",
287:"rgba(143, 119, 91, 255)",
288:"rgba(166, 150, 135, 255)",
289:"rgba(125, 127, 175, 255)",
290:"rgba(115, 118, 153, 255)",
291:"rgba(90, 88, 109, 255)",
292:"rgba(68, 67, 81, 255)",
293:"rgba(69, 67, 70, 255)",
294:"rgba(89, 71, 69, 255)",
295:"rgba(95, 83, 83, 255)",
296:"rgba(149, 139, 138, 255)",
297:"rgba(144, 136, 134, 255)",
298:"rgba(73, 67, 69, 255)",
299:"rgba(72, 67, 63, 255)",
300:"rgba(125, 102, 86, 255)",
301:"rgba(154, 127, 98, 255)",
302:"rgba(144, 118, 95, 255)",
303:"rgba(161, 132, 100, 255)",
306:"rgba(131, 111, 84, 255)",
307:"rgba(161, 142, 109, 255)",
308:"rgba(119, 107, 107, 255)",
309:"rgba(95, 94, 112, 255)",
310:"rgba(97, 94, 113, 255)",
311:"rgba(80, 77, 98, 255)",
312:"rgba(73, 72, 86, 255)",
313:"rgba(53, 48, 54, 255)",
314:"rgba(46, 44, 49, 255)",
315:"rgba(136, 132, 133, 255)",
316:"rgba(63, 61, 62, 255)",
317:"rgba(49, 49, 51, 255)",
318:"rgba(53, 52, 57, 255)",
319:"rgba(87, 72, 69, 255)",
320:"rgba(66, 58, 55, 255)",
321:"rgba(49, 47, 50, 255)",
322:"rgba(61, 51, 50, 255)",
326:"rgba(111, 87, 75, 255)",
327:"rgba(122, 102, 93, 255)",
328:"rgba(134, 117, 110, 255)",
329:"rgba(116, 106, 107, 255)",
330:"rgba(86, 81, 88, 255)",
331:"rgba(63, 61, 66, 255)",
332:"rgba(50, 45, 51, 255)",
334:"rgba(105, 99, 101, 255)",
335:"rgba(59, 54, 60, 255)",
339:"rgba(72, 62, 63, 255)",
340:"rgba(71, 61, 62, 255)",
341:"rgba(70, 60, 59, 255)",
347:"rgba(101, 83, 73, 255)",
348:"rgba(121, 104, 94, 255)",
349:"rgba(147, 119, 108, 255)",
350:"rgba(163, 146, 116, 255)",
351:"rgba(171, 154, 126, 255)",
352:"rgba(200, 185, 152, 255)",
353:"rgba(198, 182, 149, 255)",
354:"rgba(184, 166, 144, 255)",
355:"rgba(175, 161, 134, 255)",
356:"rgba(163, 157, 145, 255)",
357:"rgba(127, 144, 160, 255)",
358:"rgba(73, 73, 83, 255)",
359:"rgba(60, 54, 58, 255)",
369:"rgba(84, 76, 74, 255)",
370:"rgba(122, 112, 111, 255)",
371:"rgba(164, 156, 145, 255)",
372:"rgba(159, 151, 140, 255)",
373:"rgba(169, 157, 135, 255)",
374:"rgba(182, 167, 146, 255)",
375:"rgba(192, 191, 187, 255)",
376:"rgba(176, 172, 187, 255)",
390:"rgba(59, 58, 64, 255)",
391:"rgba(69, 71, 83, 255)",
392:"rgba(81, 84, 101, 255)",
393:"rgba(115, 119, 130, 255)",
394:"rgba(179, 181, 176, 255)",
395:"rgba(87, 87, 95, 255)",
435:"rgba(0, 0, 0, 255)",
436:"rgba(0, 0, 0, 255)",
454:"rgba(0, 0, 0, 255)",
455:"rgba(0, 0, 0, 255)",
473:"rgba(0, 0, 0, 255)",
474:"rgba(0, 0, 0, 255)",
492:"rgba(0, 0, 0, 255)",
493:"rgba(0, 0, 0, 255)"
}

  
for (let i=0; i<HorizantalDisks*VerticalDisks; i++) {
  if (colorRGBA.hasOwnProperty(i) == true) {
    allColors[i] = colorRGBA[i]
    coloredDisks[i] = colorRGBA[i]
  }

  else {
    allColors[i] = defaultColor
      // }
  }
}


//   if (colorRGBA.hasOwnProperty(i) == true){
//     return colorRGBA[i]    
//   }
//   else {
//     return defaultColor
//   }
// }



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
        disks[i].show(dimmerValue)
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
    this.diskColor = diskColor
    this.diskIndex = diskIndex
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
  
    
  hover() {
    for (let i=0; i<disks.length; i++) {
      disks[i].showHover(mouseX, mouseY, i);
    }
  }

}



function mousePressed() {
  // console.log(colPic.color().toString())
  // if button is pressed
  // if () {
  // console.log(DisksProperties)
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
    // Recreate the colors
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
