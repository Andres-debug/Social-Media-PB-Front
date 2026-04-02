import ProfileHeader from '../../layout/profile/ProfileHeader'
import ProfileStats from '../../layout/profile/ProfileStats'
import { Navbar } from '../../layout/Navbar';

const Profile = () => {
  return (
    <div className="min-h-screen bg-sky-50">
       
      <Navbar />
 
      <div className="w-[90%] max-w-5xl mx-auto py-8 space-y-4">
        <ProfileHeader />
        <ProfileStats />
      </div>

    </div>
  )
}

export default Profile