import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../galeri.css';

function Galeri() {
  const imageUrl = (serviceId) => {
    switch (serviceId) {
      case 1:
        return 'src/assets/dc.jpeg';
      case 2:
        return 'src/assets/unyell.jpeg';
      case 3:
        return 'src/assets/cuci_sepatubg.jpg';
      case 4:
        return 'src/assets/repaint.jpeg';
      case 5:
        return 'src/assets/repair.jpeg';
      case 6:
        return 'src/assets/landingbg.jpeg';
        case 7:
            return 'src/assets/spa.jpeg';
      default:
        return 'src/assets/yz.jpeg';
    }
  };

  return (
    <div>
       <header style={{ backgroundImage: 'url("src/assets/bgh3.jpeg")', backgroundSize: 'cover', height: '200px', textAlign: 'center', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '30px' }}>
        <h1 style={{ margin: '70px 0' }}>Galeri Kami</h1>
      </header>

      <div className="container mt-4">
        <div className="row">
          {/* Single full-width image on the left */}
          <div className="col-md-6">
            <img src="src/assets/bggaleri.JPG" alt="Full Image" className="img-fluid" />
          </div>

          {/* Gallery with 8 images on the right */}
          <div className="col-md-6">
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div key={index} className="col-6 mb-3">
                  <img src={imageUrl(index)} alt={`Gallery Image ${index}`} className="img-fluid"  style={{ width: '200px', height: 'auto' }}  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galeri;
