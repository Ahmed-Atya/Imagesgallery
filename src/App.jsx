import React,{useState,useEffect} from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images,setImages] = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const [term,setTerm] = useState('')
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=31986873-ac252a063eecc3062400734b7&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <h1 className=" display-1 font-monospace text-danger text text-center m-5 text-bold text-uppercase">Images Gallery Application</h1>
       <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className="font-monospace text-info text text-center m-3">No Images Found</h1> }

        {isLoading ? <h1 className="h1 text-center mx-auto mt-3">Loading...</h1> : <div className="row">
        {images.map(image => (
        <div className="col-lg-4 col-md-6">
            <ImageCard key={image.id} image={image} />
        </div>
      
        ))}
        </div>}
    </div>
  );
}

export default App