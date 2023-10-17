import React from 'react'
import './App.css';

import bk from '../src/images/bkg.jpg'
import profile from '../src/images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey,faGear,faUser,faCartShopping,faDollarSign,faArrowUpRightDots,faCircleInfo,faChevronRight,faChevronDown,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar,faNoteSticky,faCoins,faBagShopping } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <div className='bodyy'>
    <div className='leftpart'>
         <div className='leftupper'><h1><FontAwesomeIcon  icon={faGear} style={{color: "#ffffff",}} /> Dashboard</h1></div>
         <div className='leftmiddle'>
               <div className='lftmi'>

               
               <FontAwesomeIcon  className='icons' icon={faKey} style={{color: "#ffffff",}} />
             
               <p>Dashboard</p></div>
               <div className='lftmi'><FontAwesomeIcon className='icons' icon={faCartShopping} style={{color: "#ffffff",}} /><p>Product</p><FontAwesomeIcon className='icons' icon={faChevronRight} style={{color: "#ffffff",}} /></div>
               <div className='lftmi'> <FontAwesomeIcon className='icons' icon={faUser} style={{color: "#ffffff",}} /><p>Customers</p><FontAwesomeIcon  className='icons' icon={faChevronRight} style={{color: "#ffffff",}} /></div>
               <div className='lftmi'><FontAwesomeIcon className='icons' icon={faDollarSign} style={{color: "#ffffff",}} /><p>Income</p><FontAwesomeIcon className='icons' icon={faChevronRight} style={{color: "#ffffff",}} /> </div>
               <div className='lftmi'><FontAwesomeIcon className='icons' icon={faArrowUpRightDots} style={{color: "#ffffff",}} /><p>Promote</p> <FontAwesomeIcon className='icons' icon={faChevronRight} style={{color: "#ffffff",}} /></div>
               <div className='lftmi'><FontAwesomeIcon className='icons'icon={faCircleInfo} style={{color: "#ffffff",}} /><p>Help</p> <FontAwesomeIcon className='icons' icon={faChevronRight} style={{color: "#ffffff",}} /></div>

         </div>
         <div className='leftbttom'>
          <div className='profilediv'>
            <div className='imgboxprofile'><img src={ profile}/> </div>
            <div className='profiletxt'>
              <h4>Prashant</h4>
              <p>Project Manager </p>
              

            </div>
           

          </div>
         </div>
       



    </div>

    <div className='rightpart'>

        <div className='upper'>
           <div className='uleft'><h1>Hello Prashant👋,</h1></div>
           <div className='uright'> <input type='text' placeholder='Search'  style={{border:"none"}}/><FontAwesomeIcon className='searchicon' icon={faMagnifyingGlass} style={{color: "#d1d1d1",}} /></div>
       </div>


    <div className='middle'>
       <div className='mupper'>

          <div className='fourcards'>
            <div className='imgbox'><FontAwesomeIcon  className='dollar' icon={faSackDollar} style={{color: "#097716",}} /></div>
            <div className='txtbox'><h4>Earning</h4><h2>$198k</h2><p><span>	&uarr; 37.8%</span>this month</p></div>
          </div>
          
          <div className='fourcards'>
            <div className='imgbox'><FontAwesomeIcon className='dollar' icon={faNoteSticky} /></div>
            <div className='txtbox'><h4>Orders</h4><h2>$2.4k</h2><p><span style={{color: "red",}}>	&darr; 2%</span>this month</p></div>
          </div>
          
          <div className='fourcards'>
            <div className='imgbox'><FontAwesomeIcon className='dollar' icon={faCoins} style={{color: "#3a2768",}} /></div>
            <div className='txtbox'><h4>Balance</h4><h2>$12.4k</h2><p><span  style={{color: "red",}} >	&darr; 2%</span>this month</p></div>
          </div>
          
          <div className='fourcards'>
            <div className='imgbox'><FontAwesomeIcon  className='dollar' icon={faBagShopping} style={{color: "#ab0738",}} /></div>
            <div className='txtbox'><h4>Earning</h4><h2>$89k</h2><p><span>	&uarr; 11%</span>this week</p></div>
          </div>
          

       </div>
       <div className='mlower'>

          <div className='overview'>
              <div className='oupper'>
                <div className='otxtbox'><h3>Overview</h3><p>Monthly Earning</p></div>
                <div className='oquantity'><select>
                <option>Quaterly</option>
                <option>Annual</option>
                </select></div>
              </div>


              {/* overview bar chart */}

              <div className='barbox'>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar1'></div></div>
                 <h5>Jan</h5>
                   
                 </div>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar2'></div></div>
                 <h5>Feb</h5>
                   
                 </div>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar3'></div></div>
                 <h5>Mar</h5>
                   
                 </div>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar4'></div></div>
                 <h5>Apr</h5>
                   
                 </div>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar5'></div></div>
                 <h5>May</h5>
                   
                 </div>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar6' ></div></div>
                 <h5>Jun</h5>
                   
                 </div>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar7'></div></div>
                 <h5>Jul</h5>
                   
                 </div>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar8'></div></div>
                 <h5>Aug</h5>
                   
                 </div>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar9'></div></div>
                 <h5>Sep</h5>
                   
                 </div>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar10'></div></div>
                 <h5>Oct</h5>
                   
                 </div>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar11'></div></div>
                 <h5>Nov</h5>
                   
                 </div>
                 <div className='bardiv'>
                 <div className='outercolorbarbox'><div className='colorbar colorbar12'></div></div>
                 <h5>Dec</h5>
                   
                 </div>
                 
              </div>

          </div>
          <div className='customer'>
          <div className='otxtbox'><h3>Customer</h3><p>Customers that buy products</p></div>
          <div className='custbox'>
          <div class="pie"> <div className="pie hollow"><div className='white'><h2>65%</h2>
          <p>Total New Customers</p>
          </div></div></div>
         
             {/* <div className='grey'>
               <div className='pink'>
                <div className='puprle'>
                  <div className='white'></div>
                </div>
               </div>


             </div> */}
          </div>
          </div>

       </div>

    </div>


    {/* bottom */}
    <div className='bottom'>
          <div className='bheadings'>
            <div className='bleft'><h3>Product Sell</h3></div>
            <div className='right'><input type='text' placeholder='Search' />
            <select>
            <option>Last 30 days</option>
            <option>Last 60 days</option>
            <option>Last 90 days</option>
            </select> 
            </div>
          </div>

          <table>

            <tr className='greydena'>
              <td ><div className='datadiv'>Product Name</div></td>
              <td>Stock</td>
              <td>Price</td>
              <td>Total Sales</td>
            </tr>

            <tr>
              <td><div className='datadiv'><div className='bimgbox'><img src={bk}/></div> <div className='ab3d'><h4>Abstract 3D</h4> <p>Lorem Epsum dolor sit </p></div> </div></td>

             
              <td>  <div className='margindenahai'>32 in stock</div></td>
              <th><div className='margindenahai'>$45.99</div></th>
              <td><div className='margindenahai'>20</div></td>
            
            </tr>
          </table>
    </div>

    </div>
      
    </div>
  )
}

export default App

