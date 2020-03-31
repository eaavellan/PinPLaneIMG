import React from "react";
import { DndProvider } from 'react-dnd';
import Backend from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
import styled  from 'styled-components';
import ImgItem from './ImgItem';
import ItemTypes from '../helpers/Constants';

const PinPlane = styled.div`
    height: 100%;
    width: 100%;
    min-height: 900px;
    min-width: 900px;
`;

const Plane = () => {
    
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ImgItem,
    collect: monitor => ({
      isOver: !!monitor.isOver(), 
      component : monitor.
    })
  });
    return (
        <PinPlane ref={drop}>
          {isOver ? console.log(isOver):console.log("nada")}
            <ImgItem />
            <ImgItem />
        </PinPlane>
    );
}

export default Plane;