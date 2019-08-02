import React, { useState, useEffect  } from 'react';
import { Form, Input } from '@rocketseat/unform';
import {Link} from 'react-router-dom'
import BoxLeft from '../BoxLeft'
import {Container, Boxmid,FormGroup,FormGroup2} from './styles'
import api from '../../services/api';

export default function Edit({match,history}) {

  const [data,setData]=  useState({})
  
  async function handleSubmit(data){
   await api.postOrPut("/cars", match.params.id, data);
      history.push('/')
   }

 async function handleRemove(){
   const { id } = match.params;
   await api.delete(`/cars/${id}`)
    
   history.push('/')
   
 }
   useEffect(() => {
      async function loadData() {
        const { id } = match.params;
        const response = await api.get(`/cars/${id}`);
  
        setData(response.data);
      }
      loadData();
      if (match.params.id) {
        loadData();
      }
    }, [match.params, match.params.id]);

    return (
        <Container>
             <BoxLeft/>
             <Boxmid>
                 <Form  onSubmit={handleSubmit} initialData={data}>
                 <FormGroup>
                     <Input type="text" name="title"  className="input-control" />  
                  </FormGroup>
                  <FormGroup>
                     <Input type="text" name="model" className="input-control" />  
                     <Input type="text" name="year" className="input-control" />           
                  </FormGroup>                 
                  <FormGroup>
                     <Input type="text" name="brand" className="input-control"/>
                  </FormGroup>  
                     <FormGroup>
                        <Input type="text" name="color" className="input-control"/>  
                        <Input type="text" name="km"className="input-control"/>  
                     </FormGroup>
                     <FormGroup>
                        <Input type="text" name="price" className="input-control"/>  
                           
                     </FormGroup>
                     <FormGroup2>
                        <div>
                        <Link to="/" className="btn">Cancelar</Link>
                        <button className="btn" onClick={handleRemove}>Remover</button>
                        </div>
                        <button>Salvar</button>
                     </FormGroup2>
                 </Form>
             </Boxmid>
        </Container>
        )
  
}
