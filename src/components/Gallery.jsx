import React ,{useState} from 'react'



const Gallery = () => {
 const [clickedImaged, setClickedImaged] = useState(null);
 const [imagesDetails,setImageDetails] = useState(null);
 const images = [
{path:"/images/yoga.jpeg",  description : "yoga. resdmi acıklaması"},
{path:"/images/yoga_garden.jpeg", description : "yoga. resdmi acıklaması1"},
{path:"/images/yoga_garden2.jpeg", description : "yoga. resdmi acıklaması3"}

 ];

  const handleImageClick = (image) => {
    const selectedImage = images.find(img => img.path ===image);
    setClickedImaged(image ===clickedImaged ? null : image); 
    setImageDetails(selectedImage ? selectedImage.description : null)
    
  };
  const handleGoBack = () => {
    setClickedImaged (null)
    setImageDetails (null)
  };
  return (
    <>
      <h3>GALLERY PAGE</h3>
      <p style={{color:"black"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur iusto autem quos repellendus praesentium architecto id molestiae deleniti placeat!</p>
      
      <div className='yoga_img' >

       { images.map((image,index)=>( 
      <img 
      key = {index}
      src = {image.path}
      alt={`resim -${index}`}
      onClick={()=>handleImageClick(image.path)} 
      
      />
      ))}
      </div>
      {clickedImaged && (
        <div className='resim-clicked'>
          <img src={clickedImaged} alt="larger" />
          <div className="image-details"> 
          {imagesDetails &&   <p>{imagesDetails}</p>}
           <button onClick={()=>handleGoBack()}>Back</button>
           </div>
        </div>
      )}
      
    </>
  )
}

export default Gallery
