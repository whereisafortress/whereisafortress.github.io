function getTanFromDegrees(degrees) {
  return Math.tan(degrees * Math.PI / 180);
}

function calculateСoordinates(ax, az, bx, bz, da, db) {
  let fx = 0;
  let fz = 0;
  
  let ta = getTanFromDegrees(da);
  let tb = getTanFromDegrees(db);
  
  fz = (tb*ta*bx - tb*ta*ax + az*tb - bz*ta) / (tb-ta);
  fx = (fz-bz)/tb + bx;
  
  return [fx, fz];
}

function calculate() {
  return;
}
