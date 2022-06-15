import React, { Component } from 'react'
import style from './ProfileInfo.module.css';

export default class ProfilInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: "",
            kota: "",
            alamat: "",
            handphone: "",
        }
    }

    namahandler = (event) => {
        this.setState({
            nama: event.target.value
        })
    }

    kotahandler = (event) => {
        this.setState({
            kota: event.target.value
        })
    }

    alamathandler = (event) => {
        this.setState({
            alamat: event.target.value
        })
    }

    handphonehandler = (event) => {
        this.setState({
            handphone: event.target.value
        })
    }

  render() {
    const star = <span className={style.fig}>*</span>

    return (
      <>
        <div className={style.arrow}>
            <img src="/icons/arrow-left.svg" alt="icon arrow left" />
        </div>

        <div className={style.camera}>
            <div className={style.den}>
                <img className={style.war} src="/icons/camera.svg" alt="icon camera" />
            </div>
        </div>

        <form className={style.product}>
            <div className={style.name}>
                <label className={style.fig}>Nama{star}</label> 
                <div className={style.ame}>
                    <input className={style.up} type="text" value={this.state.nama} onChange={this.namahandler} placeholder="Nama" />
                </div>
            </div>
            
            <div className={style.price}>
                <label className={style.fig}>Kota{star}</label> 
                <div className={style.ame}>
                    <select className={style.jam} onChange={this.kotahandler} required>
                        <option className={style.ctr} value="" disabled selected hidden>Pilih Kota</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Bali">Bali</option>
                    </select>
                </div>
            </div>
            
            <div className={style.kategori}>
                <label className={style.fig}>Alamat{star}</label> 
                <div className={style.ame}>
                    <input className={style.end} type="text" value={this.state.alamat} onChange={this.alamathandler} placeholder="Contoh: Jalan Ikan Hiu 33" />
                </div>
            </div>
            
            <div className={style.deskripsi}>
                <label className={style.fig}>No Handphone{star}</label> 
                <div className={style.ame}>
                    <input className={style.up} type="tel" name="phone" value={this.state.handphone} onChange={this.handphonehandler} placeholder="contoh: +628123456789" />
                </div>
            </div>
        </form>
      </>
    )
  }
}
