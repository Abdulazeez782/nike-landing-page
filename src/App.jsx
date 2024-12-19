import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {CustomerReviews, PopularProducts, SuperQuality, Services, SpecialOffer, Hero, Subscribe, Footer} from './sections'
import Nav from './components/Nav';
import ProductPage from './components/ProductPage';
import ScrollToTop from './components/ScrollToTop';
import { motion } from 'framer-motion';
import { sectionFadeIn } from './utilities/animations';

const App = () => (
  <Router>    
      <ScrollToTop />
      <main className="relative">
      <Nav /> 
      <Routes>
        <Route path='/' element ={
          <>
            <section className="xl:padding-l wide:padding-r padding-b ">
              <Hero />
            </section>      
            <motion.section 
              className="padding"
              {...sectionFadeIn}         
            >
              <PopularProducts />
            </motion.section>

            <motion.section 
              className="padding"
              {...sectionFadeIn}
            >
              <SuperQuality />
            </motion.section>

            <motion.section 
              className="padding"
              {...sectionFadeIn}
            >
              <Services />
            </motion.section>

            <motion.section 
              className="padding-x py-10"
              {...sectionFadeIn}
            >
              <SpecialOffer />
            </motion.section>

            <motion.section 
              className="padding-x py-10 bg-pale-blue padding"
              {...sectionFadeIn}
            >
              <CustomerReviews />
            </motion.section>

            <motion.section 
              className="padding-x sm:py-32 py-16 w-full"
              {...sectionFadeIn}
            >
              <Subscribe />
            </motion.section>
           
          </>          
        } />

        <Route path='/product/:productId' element={<ProductPage />}/>
      </Routes>
       <section className="bg-black padding-x padding-t pb-8">
          <Footer />
      </section>
    </main>
  </Router>  
)

export default App