import React from 'react';
import wpdf from '../mudranewwhitepaper.pdf';


// import {NavLink} from 'react-router-dom';
import img3 from './logo3.png';

function Footer(){

return( 

    <div class="footer-dark w-full bg-gray-600">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item text-center text-gray-300 justify-center pt-6">
                        <img src={img3} alt="logo" height="60px" width="225px"/>

                        <br></br>
                        <br></br><br></br>
                        {/* <a href="" download >Terms</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                       <a href="" download >Privacy</a> */}

                        
                    </div>
                    <div class="col-sm-6 col-md-3 item text-center">
                        <h2 className="mt-6 mb-6 text-2xl text-gray-300 text-bold">Quick Links</h2>
                        <ul class="p-0 text-xl mb-0 text-white hover:text-red-700 ">
                       

                            <li><a href={wpdf} download className="no-underline hover:text-gray-400">Whitepaper</a>
                            </li>
                        </ul>
                    </div>

      <div class="col-md-6 item text mb-9 text-center p-2.5">
         <h3 className="mt-6 mb-6 text-2xl text-gray-300 text-bold">Community</h3>

              <div class="col flex  item social text-center items-center justify-center px-2">
                        
                <div className="flex items-center justify-center hover:shadow-2xl">   
                   <a href="https://www.twitter.com/OfficialMudra  " className="flex items-center justify-center text-blue-500 hover:no-underline" >
                      <div className="flex items-center justify-center w-12 h-12 text-xl no-underline rounded-full shadow-lg hover:shadow-2xl">  <i class="fa fa-twitter "></i></div>
                   </a>
                </div>

                <a href="https://www.telegram.me/MudraOfficialChat" class="text-xl  flex justify-center items-center hover:no-underline text-blue-400" >
                     <div className="flex items-center justify-center w-12 h-12 text-xl rounded-full shadow-lg">  <i class="fa fa-telegram "></i>
                     </div>
                </a>
            <a href="https://www.medium.com/@MudraOfficial" class="text-xl hover:no-underline text-red-600 ">
                 <div className="flex items-center justify-center w-12 h-12 text-xl rounded-full shadow-lg"> <i class="fa fa-medium "></i></div>
              </a>
      
                </div>
                    <br></br>
                   

                     
                    
                    </div>
                   
                </div>
                <p class="copyright text-center text-sm text-opacity-70 mb-0">Mudracc.com © 2021 All rights reserved.</p>
               
            </div>
        </footer>
        
    </div>

)
}

export default Footer;
