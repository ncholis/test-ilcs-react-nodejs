const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(cors());

function calculate(res) {
  data = res.data;
  fob =
    parseFloat(data["nilai_incoterm"]) +
    parseFloat(data["biaya_tambahan"]) -
    parseFloat(data["biaya_pengurang"]) +
    parseFloat(data["tarif_vd"]);
  cif = fob + parseFloat(data["nilai_asuransi"]) + parseFloat(data["freight"]);
  cif_rp = cif * parseFloat(data["nilai_kurs"]);
  data["nilai_fob"] = fob;
  data["cif"] = cif;
  data["cif_rp"] = cif_rp;
  return res;
}

app.get("/api/data_utama", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-hub.ilcs.co.id/test/v2/dataUtama?nomor_pengajuan=20120B388FAE20240402000001"
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Something wrong, Please try again later.",
    });
  }
});

app.get("/api/data_entitas", async (req, res) => {
  try {
    const response = await axios.get(
      "http://api-hub.ilcs.co.id/test/v2/dataEntitas?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2"
    );

    //console.log(response)
    res.status(200).json(response.data);
  } catch (error) {
    //console.log(error);
    res.status(500).json({
      message: "Something wrong, Please try again later.",
    });
  }
});

app
  .route("/api/data_pungutan")
  .get(async (req, res) => {
    try {
      const response = await axios.get(
        "https://api-hub.ilcs.co.id/test/v2/dataPungutan?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2"
      );

      //tidak ada payload
      if (!response.data || response.data == {}) {
        res.json({
          message: "Something wrong, Please try again later.",
        });
        return;
      }

      //RE-Calculated
      // ur code
      /**
         * Nilai FOB = Nilai + Biaya Tambahan – Biaya Pengurangan + Voluntary Declaration
           CIF = Nilai FOB + Asuransi + Freight
           CIF Rp = CIF * Kurs
      */
      const dataCalculated = calculate(response.data);
      res.status(200).json(dataCalculated);
    } catch (error) {
      res.status(500).json({
        message: "Something wrong, Please try again later.",
      });
    }
  })
  .post(async (req, res) => {});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
