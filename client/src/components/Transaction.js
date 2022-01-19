import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-':'+'
    const borderColor = transaction.amount < 0 ? 'minus':'plus'

    return (
        <li className={borderColor}>
            {transaction.text} <span>{sign} Kshs. {Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>X</button>
        </li>
    )
}
