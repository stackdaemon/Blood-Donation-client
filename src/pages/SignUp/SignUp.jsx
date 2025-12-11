import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, loading } = useAuth();
  const data = useLoaderData();
  const location = useLocation();
  const from = location.state || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectedDistrict = watch("district");

  const districts = data.map((d) => d.name);

  const filteredUpazilas =
    data.find((d) => d.name === selectedDistrict)?.upazilas || [];

  const onSubmit = async (data) => {
    const { name, image, email, password } = data;
    const imageFile =image[0]
    console.log(imageFile)

     try {
      //2. User Registration
      const result = await createUser(email, password)

      //3. Save username & profile photo
      await updateUserProfile(
        name,
        'https://lh3.googleusercontent.com/a/ACg8ocKUMU3XIX-JSUB80Gj_bYIWfYudpibgdwZE1xqmAGxHASgdvCZZ=s96-c'
      )
      console.log(result)

      navigate(from, { replace: true })
      toast.success('Signup Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  
  };

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Sign Up for Blood Donation
        </h2>

        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Name is required" })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Your Email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          {/* Avatar (Image Upload) */}
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: "Avatar is required" })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
          {errors.image && (
            <p className="text-red-600">{errors.image.message}</p>
          )}

          {/* Blood Group */}
          <select
            {...register("bloodGroup", { required: "Blood group is required" })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          >
            <option value="">Select Blood Group</option>
            {bloodGroups.map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>
          {errors.bloodGroup && (
            <p className="text-red-600">{errors.bloodGroup.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: 6,
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
          {errors.confirmPassword && (
            <p className="text-red-600">{errors.confirmPassword.message}</p>
          )}

          {/* District */}
          <select
            {...register("district", { required: "District is required" })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          >
            <option value="">Select District</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          {/* Upazila */}
          <select
            {...register("upazila", { required: "Upazila is required" })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            disabled={!selectedDistrict}
          >
            <option value="">Select Upazila</option>
            {filteredUpazilas.map((u) => (
              <option key={u.id} value={u.name}>
                {u.name}
              </option>
            ))}
          </select>

          {/* Submit */}
          <button className="bg-red-600 text-white font-semibold py-3 rounded-full mt-2">
            Sign Up
          </button>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Already have an account?
          <Link to="/login" className="text-red-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
