function getTanFromDegrees(degrees) {
  return Math.tan(degrees * Math.PI / 180);
}

function calculateСoordinates(ax, az, bx, bz, da, db) {
  da = da + 90;
  db = db + 90;
  
  let fx = 0;
  let fz = 0;
  
  let ta = getTanFromDegrees(da);
  let tb = getTanFromDegrees(db);
  
  fz = (tb*ta*bx - tb*ta*ax + az*tb - bz*ta) / (tb-ta);
  fx = (fz-bz)/tb + bx;
  
  return [fx, fz];
}

function calculate() {
  let ax = parseInt(document.getElementById('ax').value);
  let az = parseInt(document.getElementById('az').value);
  let bx = parseInt(document.getElementById('bx').value);
  let bz = parseInt(document.getElementById('bz').value);
  let da = parseInt(document.getElementById('da').value);
  let db = parseInt(document.getElementById('db').value);
  
  document.getElementById('result').innerHTML = '<h3>' + calculateСoordinates(ax, az, bx, bz, da, db) + '</h3>';
  return;
}
