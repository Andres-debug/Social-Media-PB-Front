import React from 'react';
import { Navbar } from '../../layout/Navbar';
import { Footer } from '../../layout/Footer';
import ProfileHeader from '../../layout/profile/ProfileHeader';
import ProfileStats from '../../layout/profile/ProfileStats';
import ProfileAbout from '../../layout/profile/ProfileAbout';
import ProfileStory from '../../layout/profile/ProfileStory';
import ProfileGallery from '../../layout/profile/ProfileGallery';
import ProfileModal from '../../layout/profile/ProfileModal';

const Profile = () => {

  const storyInputRef = React.useRef<HTMLInputElement>(null);
  const galleryInputRef = React.useRef<HTMLInputElement>(null);

  const [showModal, setShowModal] = React.useState(false);
  const [bioText, setBioText] = React.useState("");
  const [storyImage, setStoryImage] = React.useState<string | null>(null);
  const [userPhotos, setUserPhotos] = React.useState<string[]>([]);

  return (
    <div className="min-h-screen flex flex-col bg-sky-50 text-black dark:bg-gray-900 dark:text-white transition-colors">
       
      <Navbar />
 
      <main className="flex-1 w-[90%] max-w-5xl mx-auto py-8 space-y-4">
         
        <ProfileHeader />
 
        <ProfileStats />
 
        <div className="grid md:grid-cols-3 gap-4">
 
          <div className="space-y-4">
            <ProfileAbout bio={bioText} />
          </div>
 
          <div className="md:col-span-2 space-y-4">

            <ProfileStory storyImage={storyImage} />

            <ProfileGallery 
              photos={userPhotos}
              onAdd={() => galleryInputRef.current?.click()}
            />

          </div>

        </div>

      </main>
 
      <Footer />
 
      {showModal && (
        <ProfileModal 
          bioText={bioText}
          setBioText={setBioText}
          onClose={() => setShowModal(false)}
        />
      )}
 
      <input 
        type="file"
        ref={storyInputRef}
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setStoryImage(URL.createObjectURL(file));
        }}
      />

      <input 
        type="file"
        ref={galleryInputRef}
        hidden
        multiple
        onChange={(e) => {
          const files = e.target.files;
          if (files) {
            const urls = Array.from(files).map(f => URL.createObjectURL(f));
            setUserPhotos(prev => [...prev, ...urls]);
          }
        }}
      />

    </div>
  );
};

export default Profile;