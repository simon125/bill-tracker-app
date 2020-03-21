// node modules
import React from 'react';
import { Button } from 'antd';
// local modules
import RegisterForm from '../components/RegisterForm/RegisterForm';
import img from '../staticresources/computer.png';
const LandingPage = () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '350px',
          marginTop: 50,
          position: 'relative'
        }}
      >
        <svg
          style={{ position: 'absolute', top: 0, left: 0 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#40a9ff"
            fillOpacity="1"
            d="M0,224L80,229.3C160,235,320,245,480,240C640,235,800,213,960,186.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

        <h1
          style={{
            fontSize: '50px',
            textAlign: 'center',
            paddingTop: 60,
            position: 'relative',
            zIndex: 3
          }}
        >
          Track your money 🔎, save your money 📈
        </h1>
        <h4
          style={{
            fontSize: '30px',
            lineHeight: '25px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 3
          }}
        >
          The best tool for storing, managing and reviewing bills.
        </h4>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 20
          }}
        ></div>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '100px 0' }}
      >
        <div style={{ margin: '200px 0 150px 0', display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: 380 }}>
            <h3
              style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 35 }}
            >
              Simple as 🚴
            </h3>
            <p style={{ fontSize: 18, padding: 30 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos
              totam ab iste doloribus{' '}
              <b> expedita excepturi fugit tempora ex omnis?</b>
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: 380 }}>
            <h3
              style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 35 }}
            >
              Intuitive 💡
            </h3>
            <p style={{ fontSize: 18, padding: 30 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <b> Dicta eos totam ab iste doloribus</b> expedita excepturi fugit
              tempora ex omnis?
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: 380 }}>
            <h3
              style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 35 }}
            >
              Powerful 💪
            </h3>
            <p style={{ fontSize: 18, padding: 30 }}>
              <b>Lorem ipsum dolor sit</b> amet consectetur adipisicing elit.
              Dicta eos totam ab iste doloribus expedita excepturi fugit tempora
              ex omnis?
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: 380 }}>
            <h3
              style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 35 }}
            >
              Effective ✔️
            </h3>
            <p style={{ fontSize: 18, padding: 30 }}>
              <b>Lorem ipsum dolor sit amet</b> consectetur adipisicing elit.
              Dicta eos totam ab iste doloribus expedita{' '}
              <b>excepturi fugit tempora</b> ex omnis?
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={img} alt="computer" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h3 style={{ fontSize: '30px', margin: '50px 0 30px 0' }}>
          Finally you will be know <b>how much you spend</b> on petrol in Orlen
          or caffe in Starbucks
        </h3>
        <Button style={{}} type="primary" size="large">
          Try actual for free
        </Button>
      </div>

      {/* <RegisterForm /> */}
    </>
  );
};

export default LandingPage;
