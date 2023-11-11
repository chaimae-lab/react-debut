
import { Component} from 'react';
import './App.css';
import Contact from './component/contact/contact';
import Navbar from './component/navbar/navbar';
import Form from './component/form/form';
import Api from './component/api/Api';

class  App extends Component {
render()
{
    let nom="chaimae";
    

  return (
    //jsx
    <div className="App">
      

<label htmlFor="name">{nom}</label>
<input type="text"  name="" id="" />    
<h1>hhhhh</h1>


<Contact/>
<h1>this is props </h1>
<Navbar  title="contact liste "/>
<Navbar  title="noooooo "/>
<Navbar  title="goood like "/>

<Form/>
<Api/>

    </div>
  );





}
  
}

export default App;
