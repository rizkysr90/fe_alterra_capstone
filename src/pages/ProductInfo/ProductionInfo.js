import React, { Component } from 'react'
import style from './ProductInfo.module.css'


export default class Productioninfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            namaproduk: "",
            hargaproduk: "",
            kategori: "",
            deskripsi: "",
        }
    }

    namahandler = (event) => {
        this.setState({
            namaproduk: event.target.value
        })
    }

    hargahandler = (event) => {
        this.setState({
            hargaproduk: event.target.value
        })
    }
    kategorihandler = (event) => {
        this.setState({
            kategori: event.target.value
        })
    }

    deskripsihandler = (event) => {
        this.setState({
            deskripsi: event.target.value
        })
    }

  render() {
    return (
      <>
        <div className={style.arrow}>
            <img src="/icons/arrow-left.svg" alt="icon arrow left" />
        </div>

        <form className={style.product}>
            <div className={style.name}>
                <label className={style.fig}>Nama Produk</label> 
                <div className={style.ame}>
                    <input className={style.up} type="text" value={this.state.namaproduk} onChange={this.namahandler} placeholder="Nama Produk" />
                </div>
            </div>
            
            <div className={style.price}>
                <label className={style.fig}>Harga Produk</label> 
                <div className={style.ame}>
                    <input className={style.up} type="number" value={this.state.hargaproduk} onChange={this.hargahandler} placeholder="Rp 0,00" />
                </div>
            </div>
            
            <div className={style.kategori}>
                <label className={style.fig}>Kategori</label> 
                <div className={style.ame}>
                    <select className={style.jam} onChange={this.kategorihandler} required>
                        <option className={style.ctr} value="" disabled selected hidden>Pilih Kategori</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
            </div>
            
            <div className={style.deskripsi}>
                <label className={style.fig}>Deskripsi</label> 
                <div className={style.ame}>
                    <input className={style.end} type="text" value={this.state.deskripsi} onChange={this.deskripsihandler} placeholder="Contoh: Jalan Ikan Hiu 33" />
                </div>
            </div>
            
            <div className={style.image}>
                <label className={style.fig}>Foto Produk</label>
                <div className={style.set}>
                    <img className={style.hel} src="/icons/plus.svg" alt="icon plus" />
                </div> 
            </div>
        </form>
      </>
    )
  }
}
