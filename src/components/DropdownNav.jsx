import ProfileUser from "../assets/profile-user.png"
import { Avatar, Dropdown } from "flowbite-react"
import { useNavigate } from "react-router-dom"
const DropdownNav = () => {
     const navigation = useNavigate();

     const userLogout = () => {
          try {
               localStorage.removeItem("useToken")
               console.log("remove token")
               setTimeout(() => {
                    navigation("/login")
               }, 100)
          } catch (error) {
               console.error("Error logout", error);
          }
     }
     return (
          <div className="flex">
               <Dropdown
                    arrowIcon={true}
                    inline
                    className="mt-2 shadow-sm"
                    label={<Avatar alt="user" img={ProfileUser} />}
               >
                    <Dropdown.Header>
                         <div className="bg-red-200 text-red-700 p-3 font-normal rounded-md">Lengkapi profil di edit profil</div>
                         <div className="flex items-center my-2">
                              <img src={ProfileUser} alt="Profile User" className="w-12 h-12 rounded-full" />
                              <span className="text-sm text-primary mt-2 ml-2">
                                   Halo, <p className="font-bold py-1 text-primary">Nabil Anugerah</p>
                                   <a href="#" className="underline text-secondary font-normal">Edit Profile</a>
                              </span>
                         </div>
                    </Dropdown.Header>
                    <Dropdown.Item>
                         <span className="block text-sm text-primary">
                              Iklan Saya
                         </span>
                    </Dropdown.Item>
                    <Dropdown.Item>
                         <span className="block text-sm text-primary">
                              Favorit Saya
                         </span>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                         <span className="block text-sm text-primary" onClick={userLogout}>
                              Logout
                         </span>
                    </Dropdown.Item>
               </Dropdown>
          </div>
     )
}

export default DropdownNav
