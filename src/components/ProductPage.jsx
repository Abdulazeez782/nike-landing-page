import { useParams } from "react-router-dom"
import { products } from "../constants";
import {ProductDetails, AdditonalProductDetails, ProductGallery} from "../sections";
import { motion } from 'framer-motion'
import { sectionFadeIn } from "../utilities/animations";

const ProductPage = () => {
const { productId } = useParams();
const product = products.find((p) => p.name === productId);

if(!product) {
    return <h1>Product Not Found</h1>
}

  return (
    <section className="xl:padding-l wide:padding-r padding-b w-full">
        <motion.section {...sectionFadeIn} className="padding">
            <ProductDetails imgBig={product.imgBig} productName={product.name} productPrice={product.price} ProductDetails={product.details}/>            
        </motion.section>

        <motion.section {...sectionFadeIn} className="padding">
            <ProductGallery imgBig={product.imgBig}/>
        </motion.section>

        <motion.section {...sectionFadeIn} className="padding">
            <AdditonalProductDetails productName={product.name} productDetails={product.details}/>
        </motion.section>
    </section>
  )
}

export default ProductPage