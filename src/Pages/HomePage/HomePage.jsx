import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../../components/SideBar';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import './HomePage.css';

const Home = () => {
  return (
    <>
    <Container fluid className="home-container">
      <div className="home-row">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="content-wrapper">
          <Content />
        </div>
      </div>
    </Container>
      <Footer />
    </>

  );
};

export default Home;
