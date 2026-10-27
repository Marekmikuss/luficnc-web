import http from 'node:http';
import {readFileSync,existsSync} from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer((req,res)=>{let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=path.join(root,pathname==='/'?'index.html':pathname);if(!path.extname(file))file+='.html';if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}let status=200;if(!existsSync(file)){file=path.join(root,'404.html');status=404;}const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.svg':'image/svg+xml'};res.writeHead(status,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(readFileSync(file));}).listen(4173,'0.0.0.0',()=>console.log('Local: http://localhost:4173'));
