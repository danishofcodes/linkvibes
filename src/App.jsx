import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LinkCreationPage from "./components/LinkCreationPage";
import ProfileDetails from "./components/ProfileDetails";
import MiniPreview from "./components/MiniPreview";

function App() {
  const [menu, setMenu] = useState("links");

  function menuSelector(selectedmenu) {
    setMenu(selectedmenu);
    console.log(selectedmenu);
  }
  // -------------------

  // -------USER DETAILS-----------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profilePic: "",
  });
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.value);
  };

  console.log(firstName, lastName, email, profilePic);

  function handleProfileSave() {
    setProfileData({
      firstName,
      lastName,
      email,
      profilePic,
    });
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
  function handleSaveLink() {
    if (social) {
      setLinkBucket((prevBucket) => ({
        ...prevBucket,
        [social]: link,
      }));
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

  return (
    <>
      <Navbar menuSelector={menuSelector} menu={menu} />
      <main>
        <div className="container-card">
          <div className="borderDashed">
          <MiniPreview
            linkBucket={linkBucket}
            firstName={firstName}
            lastName={lastName}
            email={email}
            profilePic={profilePic}
            social={social}
          />

          </div>
        </div>
        <div className="container-card2">
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
            />
          )}
          {menu == "profiledetails" && (
            <ProfileDetails
              handleFirstNameChange={handleFirstNameChange}
              handleLastNameChange={handleLastNameChange}
              handleEmailChange={handleEmailChange}
              handleProfilePicChange={handleProfilePicChange}
              handleProfileSave={handleProfileSave}
              firstName={firstName}
              lastName={lastName}
              email={email}
              profilePic={profilePic}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
