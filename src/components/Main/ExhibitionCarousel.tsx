import React, { useState } from "react";

import { Carousel } from "@mantine/carousel";
import { Text, Transition } from "@mantine/core";

import { Exihibition } from "../../interfaces/common";
import { MockData } from "./mock";
import useMounted from "../hooks/useMounted";

interface ExhibitionCarouselProps {
  onSelectExhibition: (exhibition: Exihibition | null) => void;
  selectedExhibition: Exihibition | null;
}

const ExhibitionCarousel = ({onSelectExhibition, selectedExhibition}: ExhibitionCarouselProps) => {

  const handleSelectExhibition = (exhibition: Exihibition) => { 
    if(selectedExhibition?.id === exhibition.id){
      onSelectExhibition(null)
      return;
    }
    onSelectExhibition(exhibition);

  }

  const getCurrentSelection = (exhibition: Exihibition) => exhibition.id === selectedExhibition?.id;

  return (
    <div className="wrapper-carousel">
      <Carousel
        sx={{ maxWidth: "90vw" }}
        align="start"
        loop
        withIndicators
        withControls={false}
        slideGap="xs"
      >
        {MockData.map((item, index) => {
          const [exhibition1, exhibition2] = item;
          return (
            <Carousel.Slide
              className="wrapper-slides"
              key={`${index}-${item[0].name}`}
            >
              <ExhibitionCard
                info={exhibition1}
                onClick={handleSelectExhibition}
                selected={getCurrentSelection(exhibition1)}
              />
              <ExhibitionCard
                info={exhibition2}
                onClick={handleSelectExhibition}
                selected={getCurrentSelection(exhibition2)}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

interface ExhibitionCardProp {
  info: Exihibition;
  onClick: (data: Exihibition) => void;
  selected: boolean;
}

const ExhibitionCard = ({ info, onClick, selected }: ExhibitionCardProp) => {
  const { name, img, description } = info;
  const [mounted] = useMounted();

  const handleClick = () => onClick(info)

  const classFinal = `wrapper-card ${selected ? 'selected-wrapper-card' : '' }`

  return (
    <Transition mounted={mounted} transition="pop-bottom-left" duration={500} timingFunction="ease">
      {(styles) => (
        <div style={styles} className={classFinal} onClick={handleClick}>
          <img src={img} alt="exhibition" />
          <div className="overlay-card">
            <div className="row">
              <Text>{name}</Text>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default ExhibitionCarousel;
