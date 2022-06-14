import { openFile, draw } from 'jsroot';

openFile('https://root.cern/js/files/hsimple.root').then((file) => {
  file.readObject('hpxpy;1').then((obj) => {
    draw('drawing', obj, 'colz');
  });
});
