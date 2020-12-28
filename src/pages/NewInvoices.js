import { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import { addInvoice } from "../features/invoices/invoiceSlice"

const NewInvoices =()=>{
const dispatch = useDispatch()
const [invoice, setInvoice] = useState({cuit:"",comment:"",date:""})

const handleInputChange = (e) =>{
    let id = uuidv4()
    setInvoice({...invoice,id, [e.target.name] : e.target.value})
}

const createInvoice = (e) =>{
    e.preventDefault()
    dispatch(addInvoice(invoice))
}

return (<div>
<h1>Crear factura</h1>
{JSON.stringify(invoice,null,2)}
<form onSubmit={createInvoice}>
    <input type="text" name="cuit" placeholder="CUIT" onChange={handleInputChange}></input>
    <input type="text" name="comment" placeholder="COMMENT" onChange={handleInputChange}></input>
    <input type="text" name="date"placeholder="DATE" onChange={handleInputChange}></input>

<button type="submit" onClick={createInvoice}>Submit</button>
</form>
</div>)
}

export default NewInvoices