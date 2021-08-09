import React from 'react';
import logo3 from './logo3.png';

const Navbar = () => {
//   function checkMetamask(){
//     if (typeof window.ethereum !== 'undefined') {
//       console.log('MetaMask is installed!');
//     }
//      window.ethereum.request({ method: 'eth_requestAccounts' });
//   };
  

//   const ethereumButton = document.querySelector('.enableEthereumButton');

// ethereumButton.addEventListener('click', () => {
//   //Will Start the metamask extension
//   ethereum.request({ method: 'eth_requestAccounts' });
// });

  
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand navbar-logo" href="" exact>
              <img src={logo3} alt="logo" height="50px" width="220px"  />

            </a>
      
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
     
      
      
    </ul>
  </div>
</nav>
            
        </div>
    )
}

export default Navbar;
