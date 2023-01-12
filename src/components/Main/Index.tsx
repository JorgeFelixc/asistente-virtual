import React, { useState } from 'react';

import { Button, Transition } from '@mantine/core';
import { Text } from "@mantine/core";

import { useDisclosure } from '@mantine/hooks';

import ExhibitionCarousel from './ExhibitionCarousel';
import { Exihibition } from '../../interfaces/common';
import { useNavigate } from 'react-router-dom';
import useMounted from '../hooks/useMounted';


const Main = () => { 
  const [selectedExhibition, setSelectedExhibition] = useState<Exihibition | null>(null)
  const navigate = useNavigate();
  const [mounted] = useMounted();


  const handleGoExhibition = () => { 
    navigate(`/exhibition/${selectedExhibition?.id}`);
  }

  return (
    <Transition mounted={mounted} transition="fade" duration={400} timingFunction="ease">
      {(styles) => (
        <div style={styles} className="wrapper-main">
          <Header />
          <ExhibitionCarousel
            onSelectExhibition={setSelectedExhibition}
            selectedExhibition={selectedExhibition}
          />
          <Button
            className="btn-exhibition"
            size="lg"
            onClick={handleGoExhibition}
            disabled={!selectedExhibition}
          >
            Ir a la Exhibicion
          </Button>
        </div>
      )}
    </Transition>
  );
}

const Header = () => (
  <header>
    <img
      className="logo-mini"
      src="https://scontent.flmm1-1.fna.fbcdn.net/v/t1.18169-9/10710657_709420342477162_7072456520147965976_n.png?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=Dc-N_rSTiucAX9sai9e&_nc_ht=scontent.flmm1-1.fna&oh=00_AfDZy5BkRulddQJ5pZ5kytUfY8c9HCGIEOYGIfwnw2D9ow&oe=63AA1A98"
      alt="logo"
    />
    <div>
      <Text fz="xl" align="left">
        Asistente Virtual
      </Text>
      <Text c="dimmed">Selecciona tu propia ruta</Text>
    </div>
  </header>
);

export default Main;