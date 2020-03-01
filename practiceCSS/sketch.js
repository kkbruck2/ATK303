
// Make the variables global so they can be used in multiple functions
var BG;
var LetterA;
var LetterT;
var LetterK;
window.onload = function () {
  var s2 = Snap("#svgout2"); // ID where SVG loads in page

  // load SVG and do stuff to it
  Snap.load("img/SVG/SVGLogo.svg", function (logo) {
    // get layers of SVG
    BG = logo.select("#Background");
    LetterA = logo.select("#A");
    LetterT = logo.select("#T");
    LetterK = logo.select("#K");
    s2.append(logo); // append SVG to #svgout

    drawATK(); // drawing function
  });
}

function drawATK() {
  // Hide LetterA and move it up 100 pixels
  LetterA.attr({ opacity: 0, transform: "t-100,-100" });

  // Hide LetterT and rotate it 360 degrees
  LetterT.attr({ opacity: 0, transform: "t0,0,r0" });

  // Hide LetterK and scale it down
  LetterK.attr({ opacity: 0, transform: "S.1,0,0" });

  // Animate LetterA over 500ms,
  // change opacity and move to original position
  LetterA.animate({ opacity: 1, transform: "t0,0" },1000);

  // Animate LetterT over 1000ms,
  // change opacity and rotate to zero
  LetterT.animate({ opacity: 1, transform: "t0,0,r360" },1000);

  // Animate LetterK over 1500ms,
  // change opacity and scale to original size (1)
  LetterK.animate({ opacity: 1, transform: "S1,0,0" },1500);

  setTimeout('drawATK()',3000); // call drawATK again after 3000 ms
}
