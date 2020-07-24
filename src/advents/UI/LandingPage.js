
import React,{useState, useEffect} from 'react';
import  ScrollReveal from 'scrollreveal';
import {
     Container,Col,Row ,Form,
    InputGroup, InputGroupAddon, Button, Input
    
} from 'reactstrap';


import Header from './Header';
import Footer from './Footer.js';
import Totop,{ debounce } from '../functions';
import '../advent.css';



 
const Main = ()=>{

    return(
        <>
        
     <section id="product" className="">
       <Container className="" fluid={true}>
        <Row className="py-sm-5 product-row">
            <Col  xs="12" md="6" >
       <div className="product-left">
           <img className="img"  src={require('../image/hero.jpg')}  alt="product-image" />
       </div>
            </Col>

            <Col  xs="12" md="6"  className="">
       <div className="product-right">
            <h3 className="product-right-item">Wireless Bluetooth Speakers of tomorrow</h3>
            <p className="text-muted product-right-item">Beoplay A1 bluetooth speakers image on the left is owned by Bang and Olufsen and is released under creative commons lisence. So, I downloaded it and displayed it here in my demo.</p>
             <a className="btn rounded-0 my-3 product-btn product-right-item">Read More</a>
       </div>
            </Col>
        </Row>
           </Container>
         </section> 

         
    <section id="testimonial">
        <Container className="testimonial-container w-75 text-center" fluid={true}>
            <Row>
            <Col className="testimonial-content py-5" xs="12">
            
                <p className="font-weight-bold">"Best in class bluetooth speaker in the market.Though A1 has smooth round edges it is built with the cutting edge technology."</p>
           <h3 className="text-capitalize customer font-weight-bold mt-4 "> <span className="mr-3">-</span>Mike python</h3>
           </Col>
              </Row>
            </Container>
    </section>

    
 <section>
     <Container className="">
         <Row>
       <Col xs="12" md="6"  id="features">
           <div className="">
               <img className="img-width "  src={require('../image/details.jpg')} alt="details-image" />
               </div>
           </Col>

           <Col xs="12" md="6">
    <div className=" px-3 px-md-0 mb-sm-2 text-center  font-weight-light feature-list">
             <h4 className="text-nowrap">Features & specification </h4>
             <ul className="text-muted mt-4  feature-list-ul" >
              <li className="my-4 my-md-2 li-circle">Firstly, most elegant and beautiful design</li>
              <li className="my-4 my-md-2 li-circle">36 Hours battery Backup</li>
              <li className="my-4 my-md-2 li-circle">Bluetooth 4.0 Upto 20 Feet & Microphhone upto 10 feet</li>
              <li className="my-4 my-md-2 li-circle">Highly Durable Body and Strap</li>
              <li className="my-4 my-md-2 li-circle">Supports Siri, Cortana and Google Voice</li>
              <li className="my-4 my-md-2 li-circle">Android, Apple and Windows Compatible</li>
            </ul>
         </div>
           </Col>
             </Row>
     </Container>
 </section>
 
  
<section id="feature-sub">
<Container>
  <Row>
      <Col id="">
      <div className="px-3 float-right feature-sub">
      <h3 className="text-light feature-2-content font-weight-light">With A1 when you Play the music you'll feel the rhythm of heavens passing through chimes of your freedom.</h3>
        <a className="btn rounded-0 my-3 feature2-btn">Read More</a>
  </div>
 
      </Col>

  </Row>
</Container>
   </section>

   <section id="pricing" className="">
  <Container className="text-center">
   <Row>
      
       <Col xs="12" md="6" className="" >
       <div className="pricing-content mb-md-5">
           <h3 className="pricing-h1 pricing-item">A1 Bluetooth Speakers</h3>
           <h4 className="small text-muted pricing-item" >Android and iOS Compatible</h4>
           <p className="my-4 text-lead pricing-item">Sleek and Elegant Bluetooth Speakers you'll love to carry around.
             Order and Get them for a cool price on Amazon today.</p>
           <div className="btn-buy my-3 pricing-item">
             <a href="#"><img className=""  src={require("../image/amazon_logo.png")} width="200" alt="Buy" /></a>
           </div>
           <div className="price-tag text-muted font-weight-lighter pricing-item">
             <h2 className="">at just $99.98</h2>
           </div>
         </div>
       </Col>

       <Col xs="12" md="6">
  <div className="">
      <img className="img-width" src={require('../image/pricing_image.jpg')}  alt="product-image" />
  </div>
       </Col>

   </Row>
      </Container>
    </section> 


    
<section className="feature-2" id="feature-sub">
<Container>
  <Row className=" ">
    <Col xs="12"className=" text-center"> 
      
      <div className=" feature2 px-4 px-sm-0 ">
      <h3 className="text-light font-weight-lighter  subscription-item">Love offers and discounts? <br className="d-none d-md-block" /> Subscribe and save.</h3>
       <p className="text-white small subscription-item" >
       Don't worry, we won't need your credit card details. Just enter your <br className="d-none d-md-block" />  email address and we'll take care of the rest.
       </p>

       <Form> 
       <InputGroup className="mt-4 subscription-item  ">
       <Input type="text" placeholder="join the wait list" className="form-control " />
<InputGroupAddon addonType="append">
     <Button className="cus-bg-pri cus-border-white">Subscribe</Button>
   </InputGroupAddon>
   
       </InputGroup>
       </Form>
       </div>
  
 
      
      </Col>
  </Row>
</Container>
   </section>

    

        </>
    )
}

export default function LandingPage(){
    const [scrolled, setscroll] = useState(false);
    const [loading,setLoading] = useState(true);
     
    useEffect(()=>{
     
       const scrolled = function(){
   
          if(document.documentElement.scrollTop > 80 ){
            
              document.querySelector('#navbar').classList.remove('nav-top');
              document.querySelector('#navbar').classList.add('nav-0');
             
          }else{
             
            document.querySelector('#navbar').classList.remove('nav-0');
            document.querySelector('#navbar').classList.add('nav-top');
        }
           if(document.documentElement.scrollTop > 200){
             document.querySelector('#to-top').classList.add('show-to-top');
             document.querySelector('#to-top').classList.remove('hide-to-top');
           }else{
             
             document.querySelector('#to-top').classList.remove('show-to-top');
             document.querySelector('#to-top').classList.add('hide-to-top');
           } 
       }
       
        window.addEventListener('scroll', debounce(scrolled,null))

        
        ScrollReveal().reveal('.product-left',{
          origin:'left',
          distance:'150px',
          duration:1000
        });
    
      
      ScrollReveal().reveal('.product-right-item',{
        origin:'bottom',
        distance:'100px',
        interval:300,
        easing:'ease-in-out'
      });
      
     
      ScrollReveal().reveal('.testimonial-content',{
        origin:'bottom',
        distance:'100px',
        duration:800,
        viewFactor:0
      });
    
      ScrollReveal().reveal('.feature-list',{
        origin:'bottom',
        distance:'50px',
        duration:600,
        viewFactor:0.1
      });
    
      ScrollReveal().reveal('.feature-2-content', {
        origin:'bottom',
        distance:'50px',
        duration:1000,
        easing:'linear',
        viewFactor:0.3
      });
    
      ScrollReveal().reveal('.pricing-item',{
        origin:'bottom',
        distance:'100px',
        easing:'linear',
        interval:100,
        duration:800,
        viewFactor:0.3
      });
    
      
      ScrollReveal().reveal('.subscription-item',{
        origin:'bottom',
        distance:'100px',
        easing:'linear',
        interval:400,
         
        viewFactor:0.3,
        easing:'ease-out'
      });
 
    
      }, []);

       
      
     return(
        <>
        
    <Header />
        <Main />
        <Footer />
        <Totop />
       
        </>
    )

};