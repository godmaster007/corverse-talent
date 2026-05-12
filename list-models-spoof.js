import https from 'https';

const url = 'https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyAqlTEypDs6ArnkA2y7jdxtrYq-P_TkoCQ';

const req = https.get(url, { headers: { 'Referer': 'http://127.0.0.1:5173/' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data)));
});

req.on('error', (e) => console.error(e));
