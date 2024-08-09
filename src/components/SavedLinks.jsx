import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export default function SavedLinks({ linkBucket, handleUpdateLink, handleDeleteLink }) {
    const linkEntries = Object.entries(linkBucket);

    const [editing, setEditing] = useState(null);
    const [editKey, setEditKey] = useState('');
    const [editValue, setEditValue] = useState('');

    //---- Edit field value
    const startEditing = (key, value) => {
        setEditing(key);
        setEditKey(key);
        setEditValue(value);
    };

    //---- cancel Edits
    const cancelEdit = () => {
        setEditing(null);
    };

    // -------
    const deleteThisLink = (key) => {
        handleDeleteLink(key);

        setEditing(null);
        setEditKey('');
        setEditValue('');
    };


    // ---- Save edits 
    const saveEdit = () => {
        handleUpdateLink(editKey, editValue);
        setEditing(null);
    };

    return (
        <div className="savedLinksSec">
            {linkEntries.map(([key, value]) => (
                <div className='savedlinkBlock' key={key}>
                    {editing === key ? (
                        <div>
                           <p>Editing <b>{key}</b> Link</p> 
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                            />
                            <button onClick={saveEdit} className='btnsmall savegreen mr-1'><FontAwesomeIcon icon={faCheckCircle}/>&nbsp;Save</button>
                            <button onClick={cancelEdit} className='btnsmall cancelred'><FontAwesomeIcon icon={faTimesCircle}/>&nbsp;Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <h3>{key}</h3>
                            <div className='alignbeside'>
                                <a href={value} target='_blank' rel='noopener noreferrer'>{value}</a>
                                <div>
                                <button onClick={() => startEditing(key, value)} className='xsmallbtn mr-1'>Edit</button>
                                <button onClick={() => deleteThisLink(key)} className='xsmallbtn dangerbtn'>delete</button>
                                  </div>
                            </div>

                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
