function preload() {
}

function setup() {
canvas = createCanvas(640, 480);
canvas.position(110, 250);
circle(30,30,20);
video = createCapture(VIDEO);
video.hide();

tint_color = "";
}

function draw(){
image(video, 0, 0, 640, 480);
tint(tint_color);
circle(30,50,40);
circle(610, 50, 40);
circle(30,400,40);
circle(610,400,40);
rect(48,41,550,20);
rect(48,390,550,20);
rect(20,67,20,320);
rect(600,67,20,320)
}

function take_snapshot(){
save('student_name.png');
}

function filter_tint()
{
tint_color = document.getElementById("color_name").value;
}

