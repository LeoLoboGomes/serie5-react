import React, { useState } from 'react';
import { Form } from '@unform/web';
import Input from './components/Input';
import axios from 'axios';

function App() {
  //const formRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [items, setItems] = useState([]);
  
  function handleSubmit(data) {
    console.log(data);
    if(!isNaN(data.age)){
      if(parseInt(data.age) >= 18){
        axios.post('http://localhost:4000/', data)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      } else {
        return alert('Idade menor que 18.')
      }
    } else {
      return alert('Idade não é um numero')
    }
  }

  function handleClick(){
    axios.get('http://localhost:4000/')
      .then(res => {
        console.log(res);
        console.log(res.data);
        var json = res.data;
        //var json = {"person":[{"name":"Eduardo","age":"15"},{"name":"Leo","age":"23"},{"name":"Stela","age":"58"},{"name":"Ruby","age":"20"}]}
        var arr = [];
        Object.keys(json).forEach(function(key) {
          arr.push(json[key]);
        });
        setItems(arr);
        setIsEmpty(false);
      })
  }

  return (
    <div>
      <p>Formulário</p>
      <Form onSubmit={handleSubmit}>
        <label>Nome: </label>
        <Input name="name" placeholder="Nome"/><br></br>
        <label>Idade: </label>
        <Input name="age" placeholder="0"/><br></br>
        <button type="submit">Enviar Formulario</button>
      </Form>
      <button onClick={handleClick}>Pegar valores</button>
      <br></br>
      {!isEmpty &&
        <div>
          <p>Lista de dados armazenados: </p>
          <ul>
            {items[0].map(item => (
              <li key={item.name}>
                {item.name} {item.age}
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}

export default App;
