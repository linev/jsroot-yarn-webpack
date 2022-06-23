import { openFile, draw, HierarchyPainter, setDefaultDrawOpt } from 'jsroot';

async function drawWithJSROOT() {
  let file = await openFile('https://root.cern/js/files/hsimple.root');
  let obj = await file.readObject('hpxpy;1');

  draw('drawDiv', obj, 'colz');
}

// drawWithJSROOT();

async function drawWithHPainter() {

   // change default draw option for supported ROOT class,
   // used when object clicked in the hierarchy
   setDefaultDrawOpt('TH1', 'text');
   setDefaultDrawOpt('TH2', 'col');

   let h = new HierarchyPainter("example", "hierarchyDiv");

   // configure 'simple' in provided <div> element
   // one also can specify "grid2x2" or "flex"
   h.setDisplay("simple", "drawDiv");

   // open file and display element
   await h.openRootFile("https://root.cern/js/files/hsimple.root");

   await h.display("hpxpy;1", "colz");
}

drawWithHPainter();