import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="home">
            <div className="hero">
                <h1>ĐẶT VÉ XEM PHIM</h1>
                <p>Chọn ghế từ sơ đồ rạp và thanh toán dễ dàng.</p>
                <Link className="btn" to="/select">Bắt đầu</Link>
            </div>
        </section>
    )
}

