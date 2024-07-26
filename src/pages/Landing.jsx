//for lazy component landing page route
import { useNavigate } from 'react-router-dom';
import '../css/Landing.css'
import '../css/ScrollButton.css'

export default function Landing() {
  return (
    <div className='Landing1'>
        <div className="LandingChild1">
          <h1>DHRUP SINHA</h1>
          <p>SOFTWARE ENGINEER, BACK-END & FRONT-END. <br></br> #DEV.</p>
        </div>
        <div className='LandingChild2'>
          <ScrollButton />
          {/* <Button /> */}
        </div>
    </div>
  );
  }
  
  // const Button = () => {
  //   const navigate = useNavigate();
  
  //   const handleClick = () => {
  //     navigate('/Expertise');
  //   };
  
  //   return <button onClick={handleClick}>Click me</button>;
  // };



  const ScrollButton = () => {
       const navigate = useNavigate();

     const handleClick = () => {
            navigate('/Expertise');
          };

    return (
        <div className="scroll-button" onClick={handleClick}>
            <div className="arrow">
                <div className="lightning-line"></div>
                <div className="arrow-head"></div>
            </div>
        </div>
    );
};