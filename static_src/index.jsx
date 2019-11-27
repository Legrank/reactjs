import React from 'react';
import ReactDOM from 'react-dom';

const messeg = ['Приветствую', 'Как настроение?']

const Messeg = props => <div>{ props.text}</div>
const MessegList = props => { 
   return props.messeg.map(messeg => <Messeg text={messeg}/>)
}
const App = () => {return <div> <MessegList messeg = {messeg} />{btnNorm}</div>}
const hClick = () => {
   messeg.push('Нормально')
   ReactDOM.render(
      <App />,
      document.getElementById('root'),
   );
}
const btnNorm = <button onClick= { hClick } >Нажми меня!</button>
ReactDOM.render(
   <App />,
   document.getElementById('root'),
);