import React from 'react';
import './Header.css';


class Header extends React.Component {
   
    
    monAction = (e) =>{
        let elm = document.getElementsByTagName('button')[0];
        let elm1;
        elm1 = elm.innerHTML;
        

        let elmx = document.getElementsByTagName('button')[1];
        
       
        let elm2;
        elm2 = elmx.textContent;

        let elmy = document.getElementsByTagName('button')[2];
        let elm3;
        elm3 = elmy.textContent;
        

       
        
        
    console.log("Il y a eu un clique");
        
        if(e.target.className == "btn1" ){
            console.log(elm1);
        }else if(e.target.className == "btn2"){
            console.log(elm2);
        }else if(e.target.className == "btn3"){
            console.log(elm3);
        }
        
         
    }


    render(){
        return(
            <nav>
                <button onClick={this.monAction} className="btn1">Accueil</button>
                <button onMouseEnter={this.monAction} className='btn2'>Contact</button>
                <button onDoubleClick={this.monAction} className='btn3'>Formulaire</button>
            </nav>
        );
      }
}

export default Header;

