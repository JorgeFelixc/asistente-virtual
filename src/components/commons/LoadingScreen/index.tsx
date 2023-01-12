import { Button, Text, Transition } from '@mantine/core';
import React, { LegacyRef, MutableRefObject, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Exihibition } from '../../../interfaces/common';
import useMounted from '../../hooks/useMounted';

import './styles.css';

interface LoadingScreenProps { 
  exihibition: Exihibition;
}

const LoadingScreen = ({exihibition}: LoadingScreenProps) => {
  const { img, name, description } = exihibition;
  const [mounted] = useMounted();
  const navigate = useNavigate();
  

  return (
    <Transition mounted={mounted} transition="fade" duration={400} timingFunction="ease">
    {(styles) => (
      <div style={styles} className='wrapper-loading-screen'>
        <div className='ls-description'>
          <Text size="xs" fw="bolder" tt="uppercase">Estamos dirigiendonos a</Text>
          <Text size="xl" fw={300} >{name}</Text>
        </div>
        <img src={img} alt={name}/>
        <div className='loading-screen-content'>
          <ArrowsAnimation />
        </div>
        <Text size="xs" fw="bolder" tt="uppercase">Estamos trabajando para llegar</Text>
        {/* <Button onClick={() => navigate('/')}>Back</Button> */}
      </div>
    )}
  </Transition>
  )
}

const ArrowsAnimation = () => (
  <div className="container">
    <div className="chevron"></div>
    <div className="chevron"></div>
    <div className="chevron"></div>
    <div className="chevron"></div>
  </div>
)

export default LoadingScreen;