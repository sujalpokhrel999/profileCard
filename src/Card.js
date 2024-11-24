import Footer from './Components/Footer.js';
import Scale from './Components/Scale.js';
function Card(props){
        if(props.userlogin){
    return(
         <div className = "wrapper">
        <container className="container">
        <Scale />
        <Footer />
        </container>
        </div>
        ); 
        }
        else{
            return(
            <div className="errorText">Please go back and try again.</div>
            );
        }
    };

export default Card;