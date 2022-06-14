import { openFile, draw } from 'jsroot';

async function drawWithJSROOT() {
  let file = await openFile('https://root.cern/js/files/hsimple.root');
  let obj = await file.readObject('hpxpy;1');

  draw('drawing', obj, 'colz');
}

drawWithJSROOT();
