import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import coverImg from "../../../assets/images/cover.jpg";
import { toast } from "react-hot-toast";
import { imageUploadCloudinary } from "../../../utils";

const Profile = () => {
  const { user, setLoading } = useAuth();
  const [userData, setUserData] = useState({});
  const [originalData, setOriginalData] = useState({});
  const [editable, setEditable] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/users?email=${user?.email}`
        );

        const userInfo = data[0] || {};
        setUserData({
          ...userInfo,
          bloodGroup: userInfo.blood_group || "",
        });
        setOriginalData({
          ...userInfo,
          bloodGroup: userInfo.blood_group || "",
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (user?.email) fetchUserData();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  const handleSave = async () => {
    try {
      const token = await user.getIdToken();

      const updatePayload = {};
      if (userData.name !== originalData.name) updatePayload.name = userData.name;
      if (userData.district !== originalData.district) updatePayload.district = userData.district;
      if (userData.upazila !== originalData.upazila) updatePayload.upazila = userData.upazila;
      if (userData.bloodGroup !== originalData.bloodGroup) updatePayload.blood_group = userData.bloodGroup;
      if (avatarFile) updatePayload.avatar = await imageUploadCloudinary(avatarFile);

      if (Object.keys(updatePayload).length === 0) return toast("No changes to save!");

      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/${userData.email}`,
        updatePayload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);
        setEditable(false);
        setAvatarFile(null);
        setOriginalData({ ...userData, avatar: avatarFile ? updatePayload.avatar : userData.avatar });
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen bg-red-50 flex justify-center items-start py-10 px-2">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl overflow-hidden">
        {/* Cover Image */}
        <div className="relative">
          <img
            src={coverImg}
            alt="cover"
            className="w-full h-48 object-cover"
          />
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <img
                src={avatarFile ? URL.createObjectURL(avatarFile) : userData?.avatar || user?.photoURL}
                alt="avatar"
                className="h-28 w-28 rounded-full border-4 border-white object-cover"
              />
              {editable && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="absolute bottom-0 right-0 h-10 w-10 rounded-full border border-gray-300 bg-white p-1 cursor-pointer"
                  title="Change Avatar"
                />
              )}
            </div>
          </div>
        </div>

        {/* Info Form */}
        <div className="pt-16 px-6 pb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
            {!editable ? (
              <button
                className="bg-lime-500 px-4 py-2 rounded-lg text-white hover:bg-lime-600 transition"
                onClick={() => setEditable(true)}
              >
                Edit
              </button>
            ) : (
              <button
                className="bg-lime-500 px-4 py-2 rounded-lg text-white hover:bg-lime-600 transition"
                onClick={handleSave}
              >
                Save
              </button>
            )}
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={userData?.name || ""}
                onChange={handleChange}
                disabled={!editable}
                className={`mt-1 block w-full border rounded-md p-2 focus:outline-none ${
                  editable ? "border-lime-500 focus:ring focus:ring-lime-200" : "bg-gray-100 border-gray-300"
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={userData?.email || ""}
                disabled
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
              />
            </div>

            {/* District */}
            <div>
              <label className="block text-sm font-medium text-gray-700">District</label>
              <input
                type="text"
                name="district"
                value={userData?.district || ""}
                onChange={handleChange}
                disabled={!editable}
                className={`mt-1 block w-full border rounded-md p-2 ${
                  editable ? "border-lime-500 focus:ring focus:ring-lime-200" : "bg-gray-100 border-gray-300"
                }`}
              />
            </div>

            {/* Upazila */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Upazila</label>
              <input
                type="text"
                name="upazila"
                value={userData?.upazila || ""}
                onChange={handleChange}
                disabled={!editable}
                className={`mt-1 block w-full border rounded-md p-2 ${
                  editable ? "border-lime-500 focus:ring focus:ring-lime-200" : "bg-gray-100 border-gray-300"
                }`}
              />
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Blood Group</label>
              <input
                type="text"
                name="bloodGroup"
                value={userData?.bloodGroup || ""}
                onChange={handleChange}
                disabled={!editable}
                className={`mt-1 block w-full border rounded-md p-2 ${
                  editable ? "border-lime-500 focus:ring focus:ring-lime-200" : "bg-gray-100 border-gray-300"
                }`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
