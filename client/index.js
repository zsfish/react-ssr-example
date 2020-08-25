import React from 'react';
// 客户端入口
import ReactDom from 'react-dom';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import routes from '../routes';
import { Provider} from 'react-redux';
import { getClientStore } from '../store/store';
import { renderRoutes } from 'react-router-config';
let store = getClientStore();
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            { renderRoutes(routes)}
          </Switch>
      </BrowserRouter>
      </Provider>
  )
}
// ssr render要用hydreate替换，注水
ReactDom.hydrate(
  <App />
  , document.getElementById('root')
)