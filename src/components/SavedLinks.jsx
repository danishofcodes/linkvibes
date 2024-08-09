import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export default function SavedLinks({ linkBucket, handleUpdateLink }) {
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
                                <button onClick={() => startEditing(key, value)} className='edit'>Edit</button>
                            </div>

                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
