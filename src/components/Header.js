import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Head, HeadContainer, HLeft, HRight} from './styled-components';

function Header() {
    const history = useHistory();
  
    const delToken = () => {
      localStorage.removeItem("token"); 
      localStorage.removeItem("professorID");
      history.push("/");
    }
  
    return(
      <HeadContainer>
        <Head>
          <Link to="/">
            <HLeft>
                <div id="headerLogo"> {/* Header Logo Here */} </div>
                <div className="h-left">
                  <h1 id="app-name">Better Professor</h1>
                  <span id="app-description">Deadline Management App</span>
                </div>
            </HLeft>
          </Link>
          <HRight>
          {localStorage.getItem("token") && localStorage.getItem("professorID") && (
            <div id="header-login" onClick={delToken}>Log Out</div>
          )}
          {!localStorage.getItem("token") && !localStorage.getItem("professorID") && (
            <div id="header-login" onClick={()=>history.push("/Login")}>Log In</div>
          )}
            
          </HRight>
        </Head>
      </HeadContainer>
    );
  }
  
  export default Header;