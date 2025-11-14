import {useState} from 'react'
import SeatGrid from '../shared/SeatGrid'
import SelectedSeats from '../shared/SelectedSeats'
import PaymentModal from '../shared/PaymentModal'
export default function Select(){
  const [pay, setPay] = useState(false)
  return (
    <div className="select-page">
        <div className="left">
          <SeatGrid/>
        </div>

        <div className="right">
            <SelectedSeats onCheckout={()=>setPay(true)} />
            <PaymentModal open={pay} onClose={()=>setPay(false)} />
        </div>
    </div>
  )
}
