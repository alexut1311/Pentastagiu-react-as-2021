import React from 'react';


function Forms(props){
    return (
        <form onSubmit={props.handleSave}>
             <input type="text" value={props.text} onChange={props.handleChange}/>
             <button type="submit">Save</button>
         </form>
     );
}
export default Forms;