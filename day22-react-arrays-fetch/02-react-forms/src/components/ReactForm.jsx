import React, {useState} from 'react'

const ReactForm = () => {
    const [name, setName] = React.useState('');
    const [comment, setComment] = React.useState('');
    const [flavor, setFlavor] = React.useState('');

    /* the original event handler, the rest is doing exactly the same thing
      the only thing it actually does (aside from some console logs to help us see what's going on) is extract
      the new value of the input AFTER you press the key and update the "internal" value, but BEFORE it would
      update visually in HTML and does stuff with it */
    const handleNameChange = (e) => {
      console.log('Current value - '+ name)
      /* e.target is the element that the event happened on, we can access its property value which holds the
        same thing that was written into the input */
      console.log('New value - '+ e.target.value)
      /* now that we can access what was written into the input so far, we take it and put it into the state */
      setName(e.target.value);
      /* once the state gets a new value, it is changed, triggering a visual update of the component, so the
        element is displayed with whatever was written into it so far, supplementing the functionality of input
        which would do it on its own othewise, but this way, we also keep track of what was written so far
        in the component state */
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value);
      }

      const handleFlavorChange = (e) => {
        setFlavor(e.target.value);
      }
  
    const handleSubmit = (e) => {
      /* we don't want to send the data anywhere - default behavior of submitting a form,
        so we disable the default behavior of the event.. */
      e.preventDefault();
      /* ...and then we define, what should be done instead */
      alert('A name was submitted: ' + name + ' with a comment: ' + comment + 'and the favorite flavor is: ' + flavor);
    }

    return (  
        <form onSubmit={handleSubmit}>
            {/* the original form element */}
            <label>
            Name:
            {/* the object has "set" value, meaning first time it renders and any time the component updates,
              the value (displayed text written so far) is set from the state. How come that the state is always
              up to date? Triggering handleNameChange on every change of the element takes care of that, for
              explanation of those shennanigans check coments on that function and also Classes ;) */}
            <input type="text" value={name} onChange={handleNameChange} />
            </label>

            {/* unlike HTML, JSX treats textarea in the same manner it treats input - it holds its content
              in a value => work with it is just the same as work with the input */}
            <label>
            Comment:
            <textarea value={comment} onChange={handleCommentChange} />
            </label>

            {/* ...and the same goes for select - no more selected keyword, you just set the value "attribute"
              in the select element itself and that's how you control which option is actually selected */}
            <label>
                Pick your favorite flavor:

                <select value={flavor} onChange={handleFlavorChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default ReactForm