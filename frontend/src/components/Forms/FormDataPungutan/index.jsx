import { useEffect, useState } from "react";
//CSS

//COMPONENTS
import InputText from "../../Input/InputText";
import axios from "axios";
import { toast } from "react-toastify";
import InputDropDown from "../../Input/InputDropdown";
import RefreshButton from "../../Buttons/RefreshButton";

const FormDataPungutan = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const [form, setForm] = useState({
    incoterms: "",
    valuta: "",
    kurs: 0.0,
    nilai: 0.0,
    biaya_tambahan: 0.0,
    biaya_pengurangan: 0.0,
    voluntary_dec: 0.0,
    nilai_fob: 0.0,
    asuransi_by: "",
    asuransi: 0.0,
    freight: 0.0,
    cif: 0.0,
    cif_rp: 0.0,
    bruto: 0.0,
    netto: 0.0,
    flag_kontainer: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://127.0.0.1:3000/api/data_pungutan");
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Server Not Ok");
        }

        const data = res.data.data;
        await setForm({
          incoterms: data["ur_incoterm"],
          valuta: data["kd_valut"],
          kurs: parseFloat(data["nilai_kurs"]),
          nilai: parseFloat(data["nilai_incoterm"]),
          biaya_tambahan: parseFloat(data["biaya_tambahan"]),
          biaya_pengurangan: parseFloat(data["biaya_pengurangan"]),
          voluntary_dec: parseFloat(data["tarif_vd"]),
          nilai_fob: parseFloat(data["fob"]),
          asuransi_by: data["ur_asuransi"],
          asuransi: parseFloat(data["nilai_asuransi"]),
          freight: parseFloat(data["freight"]),
          cif: parseFloat(data['cif']),
          cif_rp: parseFloat(data['cif_rp']),
          bruto: parseFloat(data["berat_kotor"]),
          netto: parseFloat(data["berat_bersih"]),
          flag_kontainer: data["ur_flag_curah"],
        });
      } catch (err) {
        toast.error(`${err}`);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="content">
        <div className="row">
          <div className="column">
            <InputDropDown
              label="Incoterms"
              value={form.incoterms}
            ></InputDropDown>
          </div>
          <div className="column">
            <InputDropDown
              label="Valuta"
              value={form.valuta}
            ></InputDropDown>
          </div>
          <div className="column">
            <InputText
              name="kurs"
              label="Kurs"
              value={form.kurs}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <RefreshButton onClick={handleRefresh} isLoading={isLoading} />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <InputText
              name="nilai"
              label="Nilai"
              value={form.nilai}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="biaya_tambahan"
              label="Biaya Tambahan"
              value={form.biaya_tambahan}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="biaya_pengurangan"
              label="Biaya Pengurangan"
              value={form.biaya_pengurangan}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="voluntary_dec"
              label="Voluntary Declaration"
              value={form.voluntary_dec}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="nilai_fob"
              label="Nilai FOB"
              value={form.nilai_fob}
              onChange={handleChange}
            ></InputText>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <InputDropDown
              label="Asuransi Bayar di"
              value={form.asuransi_by}
            ></InputDropDown>
          </div>
          <div className="column">
            <InputText
              name="asuransi"
              label="Asuransi"
              value={form.asuransi}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="freight"
              label="Freight"
              value={form.freight}
              onChange={handleChange}
            ></InputText>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <InputText
              name="cif"
              label="Cif"
              value={form.cif}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="cif_rp"
              label="Cif Rp"
              value={form.cif_rp}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="bruto"
              label="Bruto"
              value={form.bruto}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputText
              name="netto"
              label="Netto"
              value={form.netto}
              onChange={handleChange}
            ></InputText>
          </div>
          <div className="column">
            <InputDropDown
              label="Flag Kontainer"
              value={form.flag_kontainer}
            ></InputDropDown>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <button className="btn-danger">Kelangkapan Data</button>
          <button className="btn-primary">Simpan</button>
        </div>
      </div>
    </>
  );
};

export default FormDataPungutan;
