import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { markBooked } from '../features/seats/seatSlices'


export default function PaymentModal({ open, onClose }) {
    const selected = useSelector(s => s.seats.selected || [])
    const dispatch = useDispatch()
    if (!open) return null


    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                <h3>Xác nhận thanh toán</h3>
                <p>Ghế: {selected.join(', ')}</p>


                <div className="modal-actions">
                    <button className="btn ghost" onClick={onClose}>Hủy</button>
                    <button className="btn" disabled={selected.length === 0} onClick={() => {
                        dispatch(markBooked(selected))
                        onClose()
                        alert('Thanh toán thành công!')
                    }}>Thanh toán</button>
                </div>
            </div>
        </div>
    )
}