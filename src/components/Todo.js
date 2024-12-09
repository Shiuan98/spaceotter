import React from 'react'
import Checkbox1 from '../assets/img/checkbox.png';
import Checkbox2 from '../assets/img/checkbox-ticked.png';

function Todo() {
  return (
    <div class="to-do">
        <div class="container">
        <h2 class="text-uppercase text-center">Otter's To-do</h2>
        <div class="row">

        <div class="col-5 text-right">
        <img src={Checkbox2} alt="Space Otter Club" />
        </div>
        <div class="col-7 text-left">
        <p>3,333 Space Otters Adoption</p>
        </div>

        <div class="col-5 text-right">
        <img src={Checkbox1} alt="Space Otter Club" />
        </div>
        <div class="col-7 text-left">
        <p>$SOC Token Airdrop</p>
        </div>

        <div class="col-5 text-right">
        <img src={Checkbox1} alt="Space Otter Club" />
        </div>
        <div class="col-7 text-left">
        <p>3,333 Female Space Otters Collection</p>
        </div>

        <div class="col-5 text-right">
        <img src={Checkbox1} alt="Space Otter Club" />
        </div>
        <div class="col-7 text-left">
        <p>$SOC Staking Platform</p>
        </div>

        <div class="col-5 text-right">
        <img src={Checkbox1} alt="Space Otter Club" />
        </div>
        <div class="col-7 text-left">
        <p>Otter's Merchandise Store</p>
        </div>

        <div class="col-5 text-right">
        <img src={Checkbox1} alt="Space Otter Club" />
        </div>
        <div class="col-7 text-left">
        <p>Rocket Parts Airdrop</p>
        </div>

        </div>
        </div>
    </div>
  )
}

export default Todo