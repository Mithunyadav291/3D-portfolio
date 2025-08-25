import React, { useState } from "react";
import img1 from "../assets/mithunImg.jpg";
// import img1 from "../assets/ruby.jpeg";
// import img3 from "../assets/gallery3.jpg";
// import img4 from "../assets/gallery4.jpg";
// import img5 from "../assets/gallery5.jpg";
// import img6 from "../assets/gallery6.jpg";

const images = [img1, img1, img1, img1, img1, img1];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="h-[90vh] text-white bg-gray-900 rounded-2xl overflow-y-auto px-4 pt-16 pb-6 sm:px-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My <span className="text-blue-600">Gallery</span>
      </h2>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-48 sm:h-56 md:h-auto object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white text-sm font-semibold">Click to View</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center rounded-2xl justify-center z-50"
          onClick={() => setSelectedImage(null)} // close when clicking outside
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;

// import React, { useState } from "react";
// import img1 from "../assets/mithunImg.jpg";

// // initial images
// const initialImages = [img1, img1, img1, img1, img1, img1];

// const Gallery = () => {
//   const [images, setImages] = useState(initialImages);
//   const [selectedImage, setSelectedImage] = useState(null);

//   // ✅ simulate logged-in user (replace with real auth later)
//   const isOwner = true; // set to false to hide upload for others

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const newImage = URL.createObjectURL(file); // preview only
//       setImages([...images, newImage]);
//     }
//   };

//   return (
//     <section className="h-[90vh] text-white bg-gray-900 rounded-2xl overflow-y-auto px-4 pt-16 pb-6 sm:px-10">
//       <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
//         My <span className="text-blue-600">Gallery</span>
//       </h2>

//       {/* ✅ Upload button - visible only to you */}
//       {isOwner && (
//         <div className="flex justify-center mb-6">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleUpload}
//             className="hidden"
//             id="upload-photo"
//           />
//           <label
//             htmlFor="upload-photo"
//             className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
//           >
//             Upload New Photo
//           </label>
//         </div>
//       )}

//       {/* Responsive Image Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//         {images.map((src, i) => (
//           <div
//             key={i}
//             className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
//             onClick={() => setSelectedImage(src)}
//           >
//             <img
//               src={src}
//               alt={`Gallery ${i + 1}`}
//               className="w-full h-48 sm:h-56 md:h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
//             />
//             {/* Overlay effect */}
//             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
//               <p className="text-white text-sm font-semibold">Click to View</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Fullscreen Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
//           onClick={() => setSelectedImage(null)} // close when clicking outside
//         >
//           <button
//             className="absolute top-6 right-6 text-white text-3xl font-bold"
//             onClick={() => setSelectedImage(null)}
//           >
//             ✕
//           </button>
//           <img
//             src={selectedImage}
//             alt="Fullscreen"
//             className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default Gallery;
