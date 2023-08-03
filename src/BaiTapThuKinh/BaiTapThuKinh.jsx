import React, { useState } from "react";
import dataGlasses from "../Data/dataGlasses.json";

const BaiTapThuKinh = () => {
  const [glassesCurrent, setGlassesCurrent] = useState({
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
  });

  const renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <img
          className="ml-2 p-2 border border-width-1"
          onClick={() => {
            changeGlasses(glassesItem);
          }}
          style={{ width: "110px", cursor: "pointer" }}
          key={index}
          src={glassesItem.url}
          alt={`Glasses ${index + 1}`}
        />
      );
    });
  };

  const changeGlasses = (newGlasses) => {
    setGlassesCurrent(newGlasses);
  };

  const styleGlasses = {
    width: "150px",
    top: "70px",
    right: "118px",
    opacity: "0.7",
  };

  const infoGlasses = {
    width: "250px",
    top: "200px",
    left: "318px",
    paddingLeft: "15px",
    backgroundColor: "rgba(255, 127, 0, 0.5)",
    textAlign: "left",
    height: "105px",
  };

  return (
    <div
      style={{
        backgroundImage: `url("./glassesImage/background.jpg")`,
        backgroundSize: "1600px",
        minHeight: "2000px",
      }}
    >
      <div style={{ backgroundColor: "rgba(0,0,0,.5)", minHeight: "2000px" }}>
        <h3
          style={{ backgroundColor: "#FFBBFF" }}
          className="text-center text-light p-5"
        >
          TRY GLASSES APP ONLINE
        </h3>
        <div className="container">
          <div className="row mt-5 text-center">
            <div className="col-6">
              <div className="position-relative">
                <img
                  className="position-absolute"
                  style={{ width: 250 }}
                  src={"./glassesImage/model.jpg"}
                  alt="model.jpg"
                />
                <img
                  className="position-absolute"
                  style={styleGlasses}
                  src={glassesCurrent.url}
                  alt="v1.png"
                />
                <div style={infoGlasses} className="position-relative">
                  <span style={{ fontWeight: "bold", color: "#1874CD" }}>
                    {glassesCurrent.name}
                  </span>
                  <br />
                  <span style={{ fontSize: 13, fontWeight: 300 }}>
                    {glassesCurrent.desc}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                style={{ width: 250 }}
                src="./glassesImage/model.jpg"
                alt="model.jpg"
              />
            </div>
          </div>
        </div>
        {/* div chua kinh */}
        <div className="bg-light text-center mt-5 d-flex justify-content-center p-5">
          {renderGlassesList()}
        </div>
      </div>
    </div>
  );
};

export default BaiTapThuKinh;
