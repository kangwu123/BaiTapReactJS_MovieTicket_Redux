import { useSelector } from "react-redux";
import Seat from "./Seat";
import seatData from "../data/danhSachGhe.json";

export default function SeatGrid() {
    return (
        <div className="seat-grid-wrap">
            <div className="screen-bar">
                <h3 className="screen">MÀN HÌNH</h3>
            </div>
         
            <div className="seat-grid">
                {seatData
                    .filter((r) => r.hang)
                    .map((row, i) => {
                        return (
                            <div key={i} className="row">
                                <div className="row-label">{row.hang}</div>
                                {row.danhSachGhe.map((g) => {
                                    return <Seat key={g.soGhe} seat={g} />;
                                })}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
