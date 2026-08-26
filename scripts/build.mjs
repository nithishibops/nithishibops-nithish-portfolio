import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root,'dist');
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});
for (const item of ['index.html','style.css','script.js','favicon.svg','robots.txt','sitemap.xml','.nojekyll','assets']) {
  const src = path.join(root,item);
  const dst = path.join(out,item);
  if (!fs.existsSync(src)) continue;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) fs.cpSync(src,dst,{recursive:true}); else fs.copyFileSync(src,dst);
}
fs.copyFileSync(path.join(root,'index.html'),path.join(out,'404.html'));
console.log('Build complete: dist/');
