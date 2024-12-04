import { useEffect, useState } from "react";

//CSS
import "./FormDataEntitas.css";

//COMPONENTS
import InputText from "../../Input/InputText";
import axios from "axios";
//import { toast } from "react-toastify";

const FormDataEntitas = () => {
  const [form, setForm] = useState({
    jenis_pemberitahuan: "",
    jenis_identitas: "",
    nib: "",
    no_identitas: "",
    no_identitas_16: "",
    nama_perusahaan: "",
    provinsi: "",
    kab: "",
    kec: "",
    kode_post: "",
    rt_rw: "",
    telp: "",
    email: "",
    status: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  useEffect(() => {
      async function fetchData () {
        try {
            const res = await (await axios.get("http://127.0.0.1:3000/api/data_entitas"))
            if (res.status !== 200 && res.status !== 201) {
                throw new Error("Server Not Ok");
            }

            const data = res.data.data.pengusaha
            await setForm({
                jenis_pemberitahuan: data["ur_entitas"],
                jenis_identitas: data["ur_jenis_identitas"],
                nib: data["nib"],
                no_identitas: data["nomor_identitas"],
                no_identitas_16: data["no_identitas_16"],
                nama_perusahaan: data["nama_identitas"],
                provinsi: data["provinsi_identitas"],
                kab: data["kota_identitas"],
                kec: data["kecamatan"],
                kode_post: data["kode_pos"],
                rt_rw: data["rt_rw"],
                telp: data["tlp_identitas"],
                email: data["email_identitas"],
                status: data["status"],
            })
        } catch (err) {
            //toast.error(`${err}`)
            console.log(err)
        }
      }
    
      fetchData()

  }, [])

  return (
    <>
      <div className="content">
        <div className="row">
          <InputText
            name="jenis_pemberitahuan"
            label="Jenis Pemberitahuan"
            value={form.jenis_pemberitahuan}
            onChange={handleChange}
          ></InputText>
        </div>
        <hr />
        <h2 className="title" style={{ marginTop: "30px " }}>
          Data Pemberitahuan
        </h2>
        <div className="garis-bawah"></div>

        <div className="row">
          <div className="column">
            <InputText
              name="jenis_identitas"
              label="Jenis Identitas"
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="nib"
              label="NIB"
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="no_identitas"
              label="No Identitas"
              onChange={handleChange}
            ></InputText>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <InputText
              name="no_identitas_16"
              label="No Identitas (16 Digits)"
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="nama_perusahaan"
              label="Nama Perusahaan"
              onChange={handleChange}
            ></InputText>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <InputText
              name="provinsi"
              label="Provinsi"
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="kab"
              label="Kabupaten"
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="kec"
              label="Kecamatan"
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="kode_pos"
              label="Kode Pos"
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="rt_rw"
              label="RT/RW"
              onChange={handleChange}
            ></InputText>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <InputText
              name="telp"
              label="Telephone"
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="email"
              label="Email"
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="status"
              label="Status"
              onChange={handleChange}
            ></InputText>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormDataEntitas;
