import { useState } from "react";

import "./TableData.css";
import FormDataUtama from "../Forms/FormDataUtama";
import FormDataEntitas from "../Forms/FormDataEntitas";
import FormDataPungutan from "../Forms/FormDataPungutan";

const TableData = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabContents = [
    {
      id: 1,
      content: <FormDataUtama />,
      title: "Data Utama",
    },
    {
      id: 2,
      content: <FormDataEntitas />,
      title: "Data Entitas",
    },
    {
      id: 3,
      content: <FormDataPungutan />,
      title: "Data Pungutan",
    },
  ];

  const prev = () => {
    if (activeTab > 1) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const next = () => {
    if (activeTab == tabContents.length) {
      return;
    }
    setActiveTab((prev) => prev + 1);
  };

  const btnPrevDisabledStyled = `btn-pagination ${
    activeTab === 1 ? "disabled" : ""
  }`;
  const btnNextDisabledStyled = `btn-pagination ${
    activeTab === 3 ? "disabled" : ""
  }`;

  return (
    <>
      <div className="body-content">
        <div className="logos">
          <div className="row row-logos">
            <div className="column column-logos">
                <img src="../../../public/town.svg" height={80} width={80}></img>
              Pemberitahuan
            </div>
            <div className="column column-logos">
                <img src="../../../public/flight.svg" height={80} width={80}></img>
              Transportasi
            </div>
            <div className="column column-logos">
                <img src="../../../public/document.svg" height={80} width={80}></img>
                Dokumen
            </div>
            <div className="column column-logos">
                <img src="../../../public/box.svg" height={80} width={80}></img>
                Komoditi
            </div>
            <div className="column column-logos">
                <img src="../../../public/service.svg" height={80} width={80}></img>
                Layanan
            </div>
          </div>
        </div>

        <div className="header">
          <h2 className="title">
            Data Pemberitahuan
            <div className="garis-bawah"></div>
          </h2>
          <h5>
            {" "}
            No Pengajuan: 20120B388FAE20240402000001 | KSWP: VALID | Jenis API:
            02
          </h5>
        </div>

        <div className="tabs">
          {tabContents.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </div>
          ))}
          <div className="line-table"></div>
        </div>
        <div className="tab-content">
          {tabContents.map((tab) => (
            <div
              key={tab.id}
              style={{ display: activeTab === tab.id ? "block" : "none" }}
            >
              {tab.content}
            </div>
          ))}
          <div className="pagination">
            <button className={btnPrevDisabledStyled} onClick={prev}>
              Sebelumnya
            </button>
            <button className={btnNextDisabledStyled} onClick={next}>
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableData;
