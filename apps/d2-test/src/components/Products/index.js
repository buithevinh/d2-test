import Fillter from "../FillterProduct";
import ListProducts from "../ListProducts";

const Products = () => {

  return (
    <div className="md:grid md:grid-cols-4 max-w-screen-2xl mx-auto mt-28">
      <Fillter></Fillter>
      <ListProducts></ListProducts>
    </div>
  )
}
export default Products;