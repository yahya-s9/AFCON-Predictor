import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { SortableItem } from './SortableItem';

import {
  DndContext, // context we need to have DND enabled
  closestCenter // helps us detect when two things over each other
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy // helps w/ sorting functionality
} from "@dnd-kit/sortable";

import { useState } from 'react';


// defining the inputs to the group table, whcih is gonna be a list of countries
// and group name

interface GroupTableProps {
    countriesList: string[];
    groupLetter: string;
}



function GroupTable({countriesList, groupLetter}:GroupTableProps) {

  // the data that can change over time (the state) is an array of strings
  // can also make this an array of objects if you really wanted 
  const [countries, setLanguages] = useState(countriesList)

  return (
    <>
      {/* everything that uses DND functionality has to be in a DND context */}
      {/* can define how we want DND to work inside the openign DNDContext tag */}
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <Container className="p-3" style={{"width": "50%"}}>
          <h3>Group {groupLetter}</h3>

          {/* everything u want to be able to sort in here
          sortableContext needs the items and the strategy */}
          <SortableContext
          items={countries}
          strategy={verticalListSortingStrategy}
          >
            {/* wihtin this sortable context we need components that use the useSortable hook,
            which allows us to create react components that are able to be interacted by sortable context */}

            {/* can now map over our state in order to create a bunch of sortableItem components */}
            {/* take the current language that we're at, pass it into the sortanle item  */}
            {/* need two properties: a key (react best practice), and then every sortable item has a identificationprop.*/}
            {countries.map(country => <SortableItem key={country} identification={country}/>)}

          </SortableContext>
        </Container>
      </DndContext>
    </>
  );

  function handleDragEnd(event: any) {
    const {active, over} = event;

    if(active.id != over.id) {
      setLanguages((items) => {
         const activeIndex = items.indexOf(active.id);
         const overIndex = items.indexOf(over.id);
         console.log(arrayMove(items, activeIndex, overIndex));
         return arrayMove(items, activeIndex, overIndex);
      });
    }
  }

}

export default GroupTable