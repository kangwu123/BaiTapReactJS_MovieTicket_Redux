import { useSelector, useDispatch } from 'react-redux'
import { markBooked } from '../features/seats/seatSlices'

export default function Checkout() {
    const selected = useSelector(s => s.seats.selected)
    const dispatch = useDispatch()

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <p>Bạn đã chọn: {selected.join(', ') || 'Không có ghế'}</p>
            <button
                className="btn"
                onClick={() => {
                    dispatch(markBooked())
                    alert('Đặt vé thành công!')
                }}
                disabled={selected.length === 0}
            >Xác nhận</button>
        </div>
    )
}