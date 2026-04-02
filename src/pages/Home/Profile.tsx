import ProfileHeader from '../../layout/profile/ProfileHeader'
import ProfileStats from '../../layout/profile/ProfileStats'
import { Navbar } from '../../layout/Navbar';
const Profile = () => {
  return (
    <div className="min-h-screen bg-sky-50 p-4">
      <div className="max-w-4xl mx-auto space-y-4">
        
        <Navbar />
        <ProfileHeader />
        <ProfileStats />
      </div>
    </div>
  )
}

export default Profile