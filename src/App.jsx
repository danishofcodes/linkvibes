import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LinkCreationPage from "./components/LinkCreationPage";
import ProfileDetails from "./components/ProfileDetails";
import MiniPreview from "./components/MiniPreview";
import Preview from "./components/Preview";

function App() {
  const [menu, setMenu] = useState("links");
  //  const [preview, setPreview] = useState(false)
  function menuSelector(selectedmenu) {
    setMenu(selectedmenu);
    console.log(selectedmenu);
  }
  // -------------------

  // -------USER DETAILS-----------
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    profilePic: "",
  });
  const handleNameChange = (e) => {
    setFullname(e.target.value);
  };



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProfilePicChange = (e) => {
    // setProfilePic(e.target.value);
      const file = e.target.files[0]; 
      if (file) {
        const fileURL = URL.createObjectURL(file); 
        setProfilePic(fileURL);
      }

  };

  console.log(fullname, email, profilePic);

  function handleProfileSave(val) {
    console.log(val)
    if( fullname && email){
      setProfileData({
        fullname,
        email,
        profilePic,
      });
    }else{
      alert( "fullname, email fields empty, required fields should be filled")
    }
    
   
  }

  console.log("Profile Data : ", profileData);

  // -------LINK DETAILS------------
  const [addNewLink, setAddNewLink] = useState(false);
  const [link, setLink] = useState("");
  const [social, setSocial] = useState("");
  const [linkBucket, setLinkBucket] = useState({});

  // add new link 
  function addLink() {
    setAddNewLink(true);
    setLink('')
    setSocial('')
  }

  // Hide the add new link 
  function handleLinkRemove() {
    setAddNewLink(false);

  }

  // Update social platform state
  function handleSocial(e) {
    setSocial(e.target.value);
    setLink('')
  }

  // Update link state
  function handleLink(e) {
    setLink(e.target.value);
  }

  // Save the link to the linkBucket object
  function handleSaveLink(val) {
    console.log("incoming values : ", val)
    if (social) {
      setLinkBucket((prevBucket) => ({
        ...prevBucket,
        [social]: link,
      }));
      setAddNewLink(false);
    }
  }

  console.log(linkBucket);

  //-------- EDIT SAVED LINK----------
  function handleUpdateLink(key, newLink){
    setLinkBucket(prevBucket => ({
      ...prevBucket,
      [key]: newLink
    }));

  }
// ------- Delete Saved Link --------
const handleDeleteLink = (key) => {
  setLinkBucket(prev => {
      const updatedLinks = { ...prev };
      delete updatedLinks[key];
      return updatedLinks;
  });
};

// ----------preview
// function handlePreview(){
//   setPreview(true)
// }

// function handleClosePreview(){
//   setPreview(false)
// }
  return (
    <>
      <Navbar menuSelector={menuSelector} menu={menu} />
      <main>
      <div className="container">
      <div className="preview container-card">
      <div className="borderDashed">
          <MiniPreview
            linkBucket={linkBucket}
            fullname={fullname}
            email={email}
            profilePic={profilePic}
            social={social}
          />

          </div>
      </div>
      <div className="settings container-card">

      <div className="mb-3">
        <button
          className={`btnsolid ${menu === 'links' ? 'active' : ''}`}
          onClick={() => menuSelector('links')}
        >
          Links
        </button>
        <button
          className={`btnsolid ${menu === 'profiledetails' ? 'active' : ''}`}
          onClick={() => menuSelector('profiledetails')}
        >
          Profile Details
        </button>
      </div>
      
      {menu == "links" && (
            <LinkCreationPage
              addLink={addLink}
              handleLinkRemove={handleLinkRemove}
              handleSocial={handleSocial}
              handleLink={handleLink}
              handleSaveLink={handleSaveLink}
              addNewLink={addNewLink}
              linkBucket={linkBucket}
              handleUpdateLink={handleUpdateLink}
              handleDeleteLink={handleDeleteLink}
            />
          )}
          {menu == "profiledetails" && (
            <ProfileDetails
              handleNameChange={handleNameChange}
              handleEmailChange={handleEmailChange}
              handleProfilePicChange={handleProfilePicChange}
              handleProfileSave={handleProfileSave}
              fullname={fullname}
              email={email}
              profilePic={profilePic}
            />
          )}
      </div>
      </div>
       
      </main>

     {/* {preview && <Preview handleClosePreview={handleClosePreview}/>}
     */}
    </>
  );
}

export default App;
