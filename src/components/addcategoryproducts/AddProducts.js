import axios from 'axios';
import { useState } from 'react';
import './AddProducts.css'
export const ProductItem = ({item, onClick}) => {
    return (
        <div className='productItem'>
            <button type='button' className='productListBtn' onClick={onClick}>Delete</button>
            {Object.entries(item).map(([key, value]) =>
                <p key={Math.floor(Math.random() * 9999)}>{value}</p>)}
        </div>
    )
}

const ProductForm = ({ submitProducts }) => {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productImage, setProductImage] = useState(null)
    const [productCategory, setProductCategory] = useState('')
    const sendProducts = (e) => {
        e.preventDefault()
        const product = {
            productName,
            price: productPrice,
            category: productCategory,
            imageUrl: productImage,
        }
        submitProducts(product)
        setProductCategory('')
        setProductImage(null)
        setProductName('')
        setProductPrice('')
    }
    return (

    

        <form className='form' onSubmit={sendProducts}>
    <div className='otsikko-keskitys'>
            <h2 className='add-tuote'>Product Form</h2>
            </div>
            <label className='addLabel'>Tuotteen nimi</label>
            <input value={productName} onChange={ ({ target }) => setProductName(target.value)} name='name' className='addInput' placeholder='Tuotteen nimi' required={true}/>
            <label className='addLabel'>Tuotteen hinta</label>
            <input value={productPrice} onChange={ ({ target }) => setProductPrice(target.value)} className='addInput' placeholder='Hinta' required={true}/>
            <label className='addLabel'>Tuotteen kategoria</label>
            <input value={productCategory} onChange={ ({ target }) => setProductCategory(target.value)} className='addInput' placeholder='Kategoria' required={true}/>
            <input onChange={ ({ target }) => setProductImage(URL.createObjectURL(target.files[0]))}type='file' id='file' accept="image/*"/>
            <div className='button-display'>
            <button className='formButton' type='submit'>Lisää listalle</button>
            </div>
        </form>
    )
}

export const ListHeaders = ({headers}) => (
    <div className='productItem'>
        <button className='productListBtn' style={{visibility: 'hidden'}}>Delete</button>
        {headers.map(n => 
            <h4 key={n}>{n}</h4>
        )}
    </div>
)

export const BottomButtons = ({ reset, send, disabled }) => (
    <div className='bottomBtns'>
        <button className='btnAlas' onClick={reset}>Tyhjennä lista</button>
        <button className='btnAlas' disabled={disabled} onClick={send}>Lähetä tietokantaan</button>
    </div>
)
const AddProducts = () => {
    const [productList, setProductList] = useState([])

    const deleteFromList = (e) => {
        setProductList(productList.filter(prod => prod.productName !== e))
    }

    const sendProducts = async () => {
        axios.post('http://localhost:3001/products', {products: productList})
        .then(r => {
            console.log(r)
            setProductList([])
        })
        .catch(error => console.log('Errori lisäykses: ', error))
    }
    return (
        <div className='main'>
            <ProductForm submitProducts={(product) => setProductList(productList.concat(product))}/>
            <div className='preview'>
                <ListHeaders headers={['Name', 'Price', 'Category', 'Image URL']}/>
                {productList.map(object => 
                    <ProductItem key={Math.floor(Math.random() * 9999)} item={object} onClick={() => deleteFromList(object.productName)}/>
                )}
            </div>
            <BottomButtons reset={() => setProductList([])} send={sendProducts} disabled={productList.length === 0}/>
        </div>
    )
}

export default AddProducts