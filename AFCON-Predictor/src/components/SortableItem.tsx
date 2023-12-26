import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities"
import Card from 'react-bootstrap/Card'


interface SortableItemProps {
    identification: string;
}

export function SortableItem({identification}: SortableItemProps) {
    
    // useSortable hook allows us to create sortable element in react.
    // want this sortable element to be of a certain id: in this case, equal
    // to the identification prop

    // when useSortable is ran, it gives access to a bunch of stuff from useSortable
    // using object notation to get all this stuff out of the hook

    const {
        attributes,
        listeners, // on drag event, on drop, etc
        setNodeRef, // allows us to tell useSortablw which node to attach to
        transform, // transform allow us to create functionality for picking up stuff
        transition // transition allow us to create functionality for moving stuff around
    } = useSortable({id: identification});

    // define style of sortable item
    const style = {
        transform: CSS.Transform.toString(transform), // pick up card and move it around
        transition
    }

    return(
        // setting ref to setNodeRef = "the div we want to drag is this one"
        // set style of this div, to the style object that we defiend above
        // use "property spread operator" s.t if we have anything inside
        // the attributes object, its gonna become a property of this div.
        // same thing for listeners
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {/* you can have any code inside this div and it's gonna be DND-able */}
            <Card body className="m-3"> {identification} </Card>
            {/* In our card, just display the id of the word as text  */}
        </div>
    )

}