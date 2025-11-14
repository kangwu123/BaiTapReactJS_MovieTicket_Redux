import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSeat } from '../features/seats/seatSlices';
import { motion } from 'framer-motion'

export default function Seat({ seat }) {
    const dispatch = useDispatch();
    const selected = useSelector(s => s.seats.selected.includes(seat.soGhe));
    const disabled = seat.daDat || useSelector(s => s.seats.disabled.includes(seat.soGhe));
    return (
        <motion.button
            whileHover={disabled ? {} : { scale: 1.12 }}
            whileTap={disabled ? {} : { scale: 0.9 }}
            onClick={() => dispatch(toggleSeat(seat.soGhe))}
            disabled={disabled}
            className={`seat ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
            title={`${seat.soGhe} - ${seat.gia.toLocaleString()}đ`}
        >
            {seat.soGhe}
        </motion.button>
    )
}
