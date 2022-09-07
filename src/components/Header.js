import { Container, Row, Col } from 'react-bootstrap';
import WolterLogo from '../assets/Wolters-Motors-Logo.png'
import TempLogo from '../assets/search-parts.png'
import ScriptTag from 'react-script-tag';
import { FaMobileAlt } from 'react-icons/fa';

export const PhoneTracking = ()=> {
  return (
    <ScriptTag isHydrating={true} type="text/javascript" src="//cdn.callrail.com/companies/168163266/93cacf6dd2ac7678bbfb/12/swap.js" />
  )
}

export const Header = ()=> {
  return (
    <>
      <Container style={{borderBottom: '2px solid #ccc'}}>
        <Row className="align-items-center">
          <Col sm={12} className="center-mobile">
            <img  
                src={TempLogo} 
                width='250px' 
                alt='Search App Logo' 
              />
          </Col>
        </Row>
      </Container>
    </>
    );
  }