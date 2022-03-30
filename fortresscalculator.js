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
  let ax = parseFloat(document.getElementById('ax').value);
  let az = parseFloat(document.getElementById('az').value);
  let bx = parseFloat(document.getElementById('bx').value);
  let bz = parseFloat(document.getElementById('bz').value);
  let da = parseFloat(document.getElementById('da').value);
  let db = parseFloat(document.getElementById('db').value);
  
  let fc = calculateСoordinates(ax, az, bx, bz, da, db);
  
  document.getElementById('result').innerHTML = '<h3>Fortress coordinates - X: ' + Math.round(fc[0]) + ', Z: ' + Math.round(fc[1]) + '</h3>';
  return;
}
