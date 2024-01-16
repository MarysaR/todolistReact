import React, { useState, useEffect, useRef } from 'react';


function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e=> {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 5),
            text: input
        });

        setInput('');
            
    };

  return (
    <form className='todo-form' onSubmit={ handleSubmit }>
        {props.edit ? ( 
            <>
            <input 
                type="text" 
                placeholder='Modifier une tâche' 
                value={input}
                name='text'
                className='todo-input edit' 
                onChange={ handleChange }
                ref={inputRef}
            />
            <button className='todo-button edit'> Mets à jour ta tâche !</button>
            </>
        ) : ( 
            <>
                <input 
                    type="text" 
                    placeholder='Ajoute une tâche ?' 
                    value={input}
                    name='text'
                    className='todo-input' 
                    onChange={ handleChange }
                    ref={inputRef}
                /> 
                <button className='todo-button'>Ajoute une tâche ? </button>
            </>
        )}
    </form>
  );
}

export default TodoForm;