import React, { useState } from "react";
import { FiX, FiAlignJustify } from "react-icons/fi";
import { FaHome, FaUser, FaClipboardList, FaBook } from "react-icons/fa";

import { Link, BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from '../Signin';
import Dashboard from '../Dashboard';
import SaleForm from '../SaleForm';


import Logo from "../../assets/logo.jpg";

import { Container, Title, Menu, Content, ContentT, ListMenu } from './sytles';

const SidBar: React.FC = () => {
 
  const [ condition, setCondition ] = useState(false);


  return(
    <>
    <BrowserRouter>
        <Container>
        
        <Menu style={ {width: condition ? '220px' : '50px'} }>
          <div style={{transition: '1s', color: '#9a9da0', background: '#343a40'}}>
            <button onClick={() => setCondition(!condition)}
              
            >
              {condition ? <FiX size={27} /> : <FiAlignJustify size={27} />}

            </button>
          </div>
          <ListMenu>
          <div className={condition ? "" : "cssmenu"} id="cssmenu">
              <ul>
              
                  <li><Link to='/dashboard'><FaHome /><span>Home</span></Link></li>
                  <li><Link to='/saleform'><FaUser /><span>Nova Ficha</span></Link></li>
                  <li><Link to='#'><FaClipboardList /><span>Status de Cad.</span></Link></li>
                  <li><Link to='#'><FaBook /><span>Agendamentos</span></Link></li>
              </ul>
            </div>  
          </ListMenu>
        </Menu>

        <ContentT>
          <Title>
            <img src={ Logo } alt="logo"/>
          </Title>

          <Content>
            
              <Switch>
                
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/saleform" component={SaleForm} />
              </Switch>
            
          </Content>
        </ContentT>

      </Container>
      </BrowserRouter>
    </>
  );

}

export default SidBar