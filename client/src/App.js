import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"

function App() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios
        .get("http://localhost:3002/")
        .catch((err) => console.log(err));
      console.log(data.images);
      setImages(data.images);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    const { data } = await axios
      .post("http://localhost:3002/upload", formData)
      .catch((err) => console.log(err));
      console.log(data.url);
    setImages([...images,{image: data.url }]);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      
      <div className="mainContainer">
        <div className="mainBox">
          <form onSubmit={handleSubmit}>
            <div className="boxOne">
              <input type="file" onChange={handleFileChange} />
              <button>Submit</button>
            </div>
          </form>
          <div className="boxTwo">
            {images.length > 0 &&
              images.map((img) => (
                <div key={img._id}>
                  <img src={img?.image}  alt="logo" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
