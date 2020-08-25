import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Router, Switch } from 'react-router-dom'
import routes from '../routes';
import { Provider} from 'react-redux';
import { getStore} from '../store/store';
import { matchRoutes, renderRoutes} from 'react-router-config'
let store = getStore();
const app = express();
app.use(express.static('public'));
app.get('*', function(req, res) {
  // 这里拉取数据，直接渲染，组件有load静态方法，就在server端获取数据，直接显示
  let matchRet = matchRoutes(routes, req.path);
  let promises = [];
  matchRet.forEach(item => {
    if (item.route.loadData) {
      let promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve, reject).catch(reject)
      })
      promises.push(promise)
    }
  })
  Promise.all(promises).then(() => {
    let context = {css:[]};
    let content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </StaticRouter>
      </Provider>
  
    )
    const ssrStr=context.css.length ? context.css.join('\n'): '';
    res.send(`
      <html>
        <head>
          <title>kkbsssr</title>
          <style>${ssrStr}</style>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>window._context=${JSON.stringify(store.getState())}</script>
          <script src="/main.js"></script>
        </body>
      </html>
    `)
  });
  })
  
app.listen(9092, () => {
  console.log('启动')
})