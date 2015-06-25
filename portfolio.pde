
//next project:
//recreate the processing header by creating
//a cloud of random points, and lines connecting those points
//you'll need special logic to dictate if there should only be 3 lines
//extending from any given point.

//number of points
int pointCount = 400;

//set the threshold distance to draw a line
int threshVar = 100;

//create the arrays
int pointX[] = new int[pointCount];
int pointY[] = new int[pointCount];

//initialize strokeVar
int strokeVar = 255;


void setup() {
  size(2560,1400,"processing.core.PGraphicsRetina2D"); 
  smooth();

  //populate each of the arrays with 100 random integers
  for(int i = 0; i < pointCount; i++) {
     pointX[i] = int(random(0, width));
     pointY[i] = int(random(0, height));
  }


}


void draw() {

scale(2);

background(187);


  //no, we want every point connected. let's just start with the point cloud.
  for(int j = 0; j < pointCount; j++) {
    stroke(strokeVar);
    point(pointX[j],pointY[j]);
  }  
  
  //so now we need a function to connect these points. We only want to connect a point
  //to the 3 points closest to it. The easiest way of doing this is to start
  //by creating a function that tests if a point is within a certain radius.
  
  //do this for every point
  for(int h = 1; h < pointCount; h++) {
   
    //now let's try more complex logic. If the Y difference between pointY[h] and
    //pointY[h-1] is less than 100, AND the difference between x coordinates
    
    //ok so this is working well for CONSECUTIVE POINTS. I should be able to add
    //a simple "for" loop and make it work well for ALL points.
    
    for(int k = 1; k < pointCount; k++) {
    
      if(abs(pointY[h]-pointY[k]) < threshVar && abs(pointX[h]-pointX[k]) < threshVar){
        
        if(dist(pointX[h], pointY[h], mouseX, mouseY) < threshVar) {
        stroke(235);
        line(pointX[h], pointY[h], pointX[(k)], pointY[(k)]);
        } else {}
        
    } else {}
    
    }
       
  }

}

