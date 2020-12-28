import { selectInvoices } from "../features/invoices/invoiceSlice"
import { useSelector } from "react-redux"


export default function Invoices(){
    const invoices = useSelector(selectInvoices)
    const invoicesList = invoices.map((item)=>
                        <tr key={item.id}>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.cuit}
                            </td><td>
                                {item.comment}
                            </td><td>
                                {item.date}
                            </td>
                        </tr>
    )

return <><div>Invoices</div>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>cuit</th>
                <th>comment</th>
                <th>date</th>
            </tr>
        </thead>
        <tbody>{invoicesList}</tbody>
    </table>
    
    
    </>
}