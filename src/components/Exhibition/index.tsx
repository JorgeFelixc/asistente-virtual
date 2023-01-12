import { useTimeout } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Exihibition } from "../../interfaces/common";
import ExihibitionDescription from "../commons/ExihibitionDescription";
import LoadingScreen from "../commons/LoadingScreen";

import { MockData } from "../Main/mock";

import "./styles.css";

const getMockExhibitions = (
  id: string | undefined
): Exihibition | undefined => {
  if (!id) {
    return;
  }
  const dataFlat = MockData.reduce((prev: Exihibition[], [one, two]) => {
    prev = [...prev, one, two];
    return prev;
  }, []);
  console.log(dataFlat);
  return dataFlat.find((res) => res.id === Number(id));
};

const Exhibition = () => {
  const { id } = useParams();
  const data = getMockExhibitions(id);
  const [falseLoading, setFalseLoading] = useState(true);

  const {} = useTimeout(() => { 
    setFalseLoading(false);
  }, 5000, { autoInvoke: true});

  if (falseLoading) {
    return <LoadingScreen exihibition={data || MockData[2][0]} />;
  }

  return <ExihibitionDescription exihibition={data || MockData[2][0]} />;
};

export default Exhibition;
