import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(<App />, document.getElementById('root'));


/*

//How a promise works
new Promise((resolve,reject) => {

    return reject(new Error('no Bears'));
    setTimeout(() => {
    resolve('Bears, Beets, battlestar galactica');

},2000)}).then(quote=> {
    console.log(quote);
}).catch(error => console.log('error',error));


*/


