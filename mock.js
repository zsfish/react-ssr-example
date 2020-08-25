let express = require('express');
let app = express();

app.get('/course/list', (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', "PUT,POST,GET,DELETE");
  res.header('Content-Type', "application/json;charset=utf-8");
  res.json({
    code: 200,
    list: [
      { name: 'html', id: 1},
      { name: 'css', id: 2},
      { name: 'js', id: 3}
    ]
  })
})
app.listen(9090, () => {
  console.log('mock成功')
});
