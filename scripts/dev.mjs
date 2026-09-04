import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 5173);
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.pdf':'application/pdf'};

const server = http.createServer((req,res)=>{
  const raw = decodeURIComponent((req.url || '/').split('?')[0]);
  const requestPath = raw === '/' ? '/index.html' : raw;
  const filePath = path.normalize(path.join(root, requestPath));
  if (!filePath.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.stat(filePath,(err,stat)=>{
    if (err || !stat.isFile()) {
      const fallback = path.join(root,'index.html');
      res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
      return fs.createReadStream(fallback).pipe(res);
    }
    res.writeHead(200,{'Content-Type':mime[path.extname(filePath).toLowerCase()] || 'application/octet-stream'});
    fs.createReadStream(filePath).pipe(res);
  });
});
server.listen(port,()=>console.log(`Portfolio running at http://localhost:${port}`));
