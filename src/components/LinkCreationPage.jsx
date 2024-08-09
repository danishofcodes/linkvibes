import LinkAdd from './LinkAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import SavedLinks from './SavedLinks';


export default function LinkCreationPage({ addLink, addNewLink, handleLinkRemove, handleSaveLink, handleLink, handleSocial, linkBucket, handleUpdateLink, handleDeleteLink }) {

  return (
    <div className='customlinks'>
      <h3 className='texttheme'>Customise Your Links</h3>
      <h5 className='texttheme'>Add, edit, or remove links below and share all your profiles with the world.</h5>
      <div className='m-1'>
      {!addNewLink && (
        <button
          className='btnbordered w-100'
          onClick={addLink}
          disabled={addNewLink}
        >
          <FontAwesomeIcon icon={faLink} /> Add New Link
        </button>
      )}

      {!addNewLink &&
        <SavedLinks linkBucket={linkBucket} handleUpdateLink={handleUpdateLink} handleDeleteLink={handleDeleteLink} />
      }

      {addNewLink && (
        <LinkAdd
          removeLink={handleLinkRemove}
          saveLink={handleSaveLink}
          handleLink={handleLink}
          handleSocial={handleSocial}
        />
      )}
      </div>
    </div>
  );
}
