import React,{Component} from 'react';
import {renderRoutes} from 'react-router-config'
import Header from './component/header';
const App=(props)=>{
    return (
        <div>
            <Header staticContext={props.staticContext}></Header>
            {renderRoutes(props.route.routes)}
        </div>
    )
}

export default App;
