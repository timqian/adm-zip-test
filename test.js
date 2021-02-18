// const extract = require('extract-zip');
const AdmZip = require('adm-zip');
const fs = require('fs');
const fileContent = fs.readFileSync('./hello.sh', 'utf-8');
const fileStat = fs.statSync('./hello.sh');

const zip = new AdmZip();

zip.addFile('./unzippedFolder/hello.sh', fileContent, null, fileStat.mode);
// zip.addFile('./unzippedFolder/hello.sh', fileContent, null, 0o755);

fs.writeFileSync('./a.zip', zip.toBuffer());
// zip.writeZip('./a.zip')
