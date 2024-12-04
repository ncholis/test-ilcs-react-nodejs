import { useEffect, useState } from "react";
import axios from "axios";

//CSS
import "./FormDataUtama.css";

//COMPONENTS
import InputText from "../../Input/InputText";
import InputDropDown from "../../Input/InputDropdown";
import { toast } from "react-toastify";


const FormDataUtama = () => {
  const [form, setForm] = useState({
    no_pengajuan: "",
    tgl_pengajuan: "",
    no_pendaftaran: "",
    tgl_pendaftaran: "",
    kantor_pabean: "",
    skep_fasilitas: "",
    jenis_pib: "",
    jenis_import: "",
    cara_pembayaran: "",
    transaksi: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
      async function fetchData () {
        try {
            const res = await (await axios.get("http://127.0.0.1:3000/api/data_utama"))
            if (res.status !== 200 && res.status !== 201) {
                throw new Error("Server Not Ok");
            }

            const data = res.data.data
            await setForm({
                no_pengajuan: data['nomor_pengajuan'],
                tgl_pengajuan: data['tanggal_pengajuan'],
                no_pendaftaran: data["nomor_pendaftaran"],
                tgl_pendaftaran: data["tanggal_pendaftaran"],
                kantor_pabean: data["ur_pabean_asal"],
                skep_fasilitas: data["kd_skep_fasilitas"],
                jenis_pib: data["jenis_pib"],
                jenis_import: data["kd_jenis_import"],
                cara_pembayaran: data["ur_cara_bayar"],
                transaksi: data["Transaksi"],
            })
        } catch (err) {
            toast.error(`${err}`)
        }
      }
    
      fetchData()
  }, []);

  return (
    <>
      <div className="content">
        <div className="row">
          <div className="column">
            <InputText
              name="no_pengajuan"
              label="Nomer Pengajuan"
              value={form.no_pengajuan}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="tgl_pengajuan"
              label="Tanggal Pengajuan"
              value={form.tgl_pengajuan}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="no_pendaftaran"
              label="Nomer Pendaftaran"
              value={form.no_pendaftaran}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="tgl_pendaftaran"
              label="Tanggal Pendaftaran"
              value={form.tgl_pendaftaran}
              onChange={handleChange}
            ></InputText>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <InputDropDown
              label="Kantor Pabean"
              value={form.kantor_pabean}
            ></InputDropDown>
          </div>
          <div className="column">
            <InputDropDown
              label="SKEP Fasilitas"
              value={form.skep_fasilitas}
            ></InputDropDown>
          </div>
          <div className="column">
            <InputDropDown
              label="Jenis PIB"
              value={form.jenis_pib}
            ></InputDropDown>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <InputDropDown
              label="Jenis Import"
              value={form.jenis_import}
            ></InputDropDown>
          </div>
          <div className="column">
            <InputDropDown
              label="Cara Pembayaran"
              value={form.cara_pembayaran}
            ></InputDropDown>
          </div>
          <div className="column">
            <InputDropDown
              label="Transaksi"
              value={form.transaksi}
            ></InputDropDown>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormDataUtama;
