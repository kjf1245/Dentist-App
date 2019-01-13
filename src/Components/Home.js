import React, { Component } from 'react'

const newList = [
                  'Comprehensive dental examinations',
                  'A full array of preventive and hygiene therapies',
                  'The latest in porcelain restorations',
                  'A full array of preventive and hygiene therapies',
                  'Dental implant restorations, including advanced cases',
                  '<li>Tooth bleaching and whitening procedures',
                  'Porcelain veneers and the latest cosmetic restorative materials',
                  'Root Canal',
                  'Full mouth rehabilitation',
                  'Advanced prosthodontic cases',
                  'Crown and Bridgework (One visit crowns available)'
                ];


class Home extends Component {
  render(){
    return(
      <div>
        <main>
          <div>
            <h2>Welcome to Singfer & Stiel D.D.S.</h2>

            <p>
              Welcome to the dental office of Drs. Steven Singfer and Edward Stiel.
              At our Bensonhurst practice, we are dedicated to providing the finest dental care to
              the members of the Brooklyn community and its surrounding environs.
              Exemplary patient care, outstanding aesthetic results,
              compassion and integrity are the cornerstones of our dental practice.
              Incorporating the latest technology, our state-of-the-art practice specializes in preventive,
              cosmetic, restorative and implant dentistry.
            </p>

             <p>
               Your visits with us are all about you, your happiness, your comfort and your dental health.
               Our patients expect and receive the finest care with a gentle touch each and every time they see us.
               In the 21st century, dentistry has evolved into a science that maintains function, form, health and a
               beautiful smile for a lifetime.
             </p>

             <p>
              The more you know, the better equipped you are to make wise decisions about your health care.
              Among our most important functions is to educate our patients as to their treatment options.
              At our state of the art dental practice, we take the time to speak to you about your treatment goals and Dr. Singfer
              and Dr. Stiel will make recommendations allowing you to make the most educated oral health care decisions.
             </p>

             <p>We invite you to contact our office to learn more about achieving the smile of your dreams</p>

             <h3>Below are some of the most common services we provide:</h3>

            <ul>
                <li>
                  <newList />
                </li>,
            </ul>

             <p>
              We hope that you will find this website to be a useful and interesting resource for all of your dental concerns.
              If you would like more information about any of the procedures that we offer or to request an appointment,
              please call us at (718) 339-1122.
            </p>
          </div>
        </main>

        <footer>
        </footer>
      </div>
    );
  }
}

export default Home;
