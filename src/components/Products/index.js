import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { MdEdit, MdDelete } from 'react-icons/md';

import * as S from './styled'

function Products(props) {
    const [products, setProducts] = useState([]);
    const [isAdd, setIsAdd] = useState(true);
    const [idProduct, setIdProduct] = useState('');

    //Form
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3334/products/')
        .then(response => setProducts(response.data.docs))
    }, [products])

    async function deleteProduct(id) {
        await axios.delete(`http://localhost:3334/product/${id}`)
        alert('Produt removed')
    }

    function deleteSubmit(id) {
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => deleteProduct(id)
            },
            {
              label: 'No',
              onClick: () => false
            }
          ]
        });
      };

      async function handleSubmit(event) {
          event.preventDefault();

          await axios.post('http://localhost:3334/products/', {
              title,
              description,
              url
          })
          .then(() => {
              alert("Sucessfully added!")
              setTitle('');
              setDescription('');
              setUrl('');
            })
          .catch(error => alert(error))
      }

      function edit(item) {
        setIsAdd(false);  
        window.scroll(0, 0);
        setTitle(item.title);
        setDescription(item.description);
        setUrl(item.url);
        setIdProduct(item._id)
      }

      async function update() {
        await axios.put(`http://localhost:3334/product/${idProduct}`, {
            title,
            description,
            url
        })
        .then(() => {
            alert("Sucessfully update!")
            setTitle('');
            setDescription('');
            setUrl('');
          })
        .catch(error => alert(error))
      }

    return (
        <S.Container>
            <div id="form">
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required/>
                <textarea rows="4" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required></textarea>
                <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="Url" required/>
                {isAdd ? <button onClick={e => handleSubmit(e)} >Add</button> : <button onClick={() => update()}>Edit</button>}
            </div>
            {products.map(item => {
                return (
                <S.Card key={item._id}>
                    <S.Title>{item.title}</S.Title>
                    <S.Description>{item.description}</S.Description>
                    <S.Link 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.url}
                    </S.Link>
                    <S.Action>
                        <S.EditBtn onClick={() => edit(item)}><MdEdit font-size={20}/></S.EditBtn>
                        <S.DeleteBtn onClick={() => deleteSubmit(item._id)}><MdDelete font-size={20}/></S.DeleteBtn>
                    </S.Action>
                </S.Card>
                )
            })}
        </S.Container>
    )
}

export default Products