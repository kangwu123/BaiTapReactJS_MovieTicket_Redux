import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearSection } from "../features/seats/seatSlices";
import seatData from "../data/danhSachGhe.json";
export default function SelectedSeats({ onCheckout }) {
    const list = useSelector((s) => s.seats.selected);
    const dispatch = useDispatch();
    // find seat in JSON
    const findSeat = (id) => {
        for (const row of seatData) {
            for (const g of row.danhSachGhe) {
                if (g.soGhe === id) return g;
            }
        }
        return null;
    };
    const total = list.reduce((sum, id) => sum + (findSeat(id)?.gia || 0), 0);
    return (
        <div className="selected-panel">
            <h3>Danh Sách ghế đã chọn</h3>
            {list.length === 0 ? (
                <p>Ghế Còn Trống Chưa Được Chọn</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Ghế</th>
                            <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((id) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{findSeat(id)?.gia.toLocaleString()}đ</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className="total">Tổng tiền: {total.toLocaleString()}đ</div>

            <div className="panel-actions">
                <button
                    className="btn ghost"
                    onClick={() => dispatch(clearSection())}
                >
                    Clear
                </button>
                <button
                    className="btn"
                    disabled={list.length === 0}
                    onClick={onCheckout}
                >
                    Thanh toán
                </button>
            </div>
        </div>
    );
}
