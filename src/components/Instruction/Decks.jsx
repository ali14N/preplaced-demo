import React from 'react';
import step1 from '../../assets/img/step1.png'
import step2 from '../../assets/img/step2.png'
import step3 from '../../assets/img/step3.png'
import step4 from '../../assets/img/step4.png'
const Decks = () => {
    return (
        <div class="container">
            <div class="card-deck">
                <div class="card mb-4">
                    <img class="card-img-top img-fluid" src={step1} alt="sign up" />
                    <div class="card-body">
                        <h4 class="card-title">Step 1</h4>
                        <p class="card-text">Signup and book an interview by filling the form.</p>
                    </div>
                </div>
                <div class="card mb-4">
                    <img class="card-img-top img-fluid" src={step2} alt="introductory call" />
                    <div class="card-body">
                        <h4 class="card-title">Step 2</h4>
                        <p class="card-text">Attend an introductory call from Preplaced.</p>
                    </div>
                </div>

                <div class="w-100 d-none d-sm-block d-md-none">
                </div>
                <div class="w-100 d-none d-md-block d-lg-none">
                </div>

                <div class="card mb-4">
                    <img class="card-img-top img-fluid" src={step3} alt="mock interview" />
                    <div class="card-body">
                        <h4 class="card-title">Step 3</h4>
                        <p class="card-text">Schedule and attend your mock interview.</p>
                    </div>
                </div>
                <div class="card mb-4">
                    <img class="card-img-top img-fluid" src={step4} alt="online review" />
                    <div class="card-body">
                        <h4 class="card-title">Step 4</h4>
                        <p class="card-text">Check your performance and review online.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Decks;