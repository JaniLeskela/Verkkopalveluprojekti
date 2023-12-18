import { useState } from "react"
import { ListHeaders, ProductItem, BottomButtons } from "./AddProducts"
import axios from "axios"
const CategoryForm = ({ addCategories }) => {
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const sendCategories = (e) => {
        e.preventDefault()
        addCategories({categoryName: category, description})
        setCategory('')
        setDescription('')
    }
    return (
        <form className='form' onSubmit={sendCategories}>

            <div className='otsikko-keskitys'>
            <h2 className='add-tuote'>Lisää Kategoria</h2>
            </div>
            <label className='addLabel' for='category'>Kategoria</label>
            <input name='category' value={category} onChange={ ({ target }) => setCategory(target.value)} className='addInput' placeholder='Kategoria' required={true}/>
            <label name='description' className='addLabel'>Tuotekuvaus</label>
            <textarea name='description' value={description} onChange={ ({ target }) => setDescription(target.value)} className='addInput' placeholder='Tuotekuvaus' required={true}></textarea>
           <div className="button-display">
           <button className='formButton' type='submit'>Lisää listalle</button>
           </div>
        </form>
    )
}

const AddCategories = () => {
    const [categories, setCategories] = useState([])

    const sendCategories = async () => {
        axios.post('http://localhost:3001/categories', {categories})
        .then(r => {
            console.log(r)
            setCategories([])
        })
        .catch(error => console.log('Errori lisäykses: ', error))
    }

    const deleteFromList = (e) => {
        setCategories(categories.filter(cat => cat.categoryName !== e))
    }
    
    return (
        <div className='main'>
            <CategoryForm addCategories={(category) => setCategories(categories.concat(category))}/>
            <div className='preview'>
                <ListHeaders headers={['Category', 'Description']}/>
                {categories.map(object => 
                    <ProductItem key={Math.floor(Math.random() * 9999)} item={object} onClick={() => deleteFromList(object.categoryName)}/>
                )}
            </div>
            <BottomButtons reset={() => setCategories([])}  disabled={categories.length === 0} send={sendCategories}/>
        </div>
    )
}

export default AddCategories

