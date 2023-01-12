import { Button, Text, Transition } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Exihibition } from '../../../interfaces/common';
import useMounted from '../../hooks/useMounted';

import './styles.css';
interface ExihibitionDescriptionProps { 
  exihibition: Exihibition;
}

const ExihibitionDescription = ({exihibition}: ExihibitionDescriptionProps) => { 
  const { img, name, description } = exihibition;
  const navigate = useNavigate();
  const [mounted] = useMounted();

  const handleNavigateMain = () => { 
    navigate('/')
  }

  return (
    <Transition mounted={mounted} transition="fade" duration={400} timingFunction="ease">
      {(styles) => (
        <div style={styles} className='wrapper-ed'>
          <img src={img} alt={name} className='img-ed' />
          <div className='overlay-ed'>
            <div className='description-ed'>
              <Text size="xs" fw="bolder" tt="uppercase">{name}</Text>
              <Text size="sm">{description}</Text>

              <Button className='btn-next-ed' onClick={handleNavigateMain}>Siguiente Exihibicion</Button>
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}

export default ExihibitionDescription;