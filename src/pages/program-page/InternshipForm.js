import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../images/svg/academy-logo.svg";
import loader from "../../images/load.gif";
import authImg from "../../images/auth.png";
import upload from "../../images/program/upload-cloud.png"
import { Internship_Form } from "../../api/dashboard/auth";


const InternshipForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    course: "",
    idCard: null,
    phoneNumber: "",
    matricNumber: "",
    accommodation: false,
  });

  const [errors, setErrors] = useState({});

  const schools = [
    "Babcock University, Ilisan Remo",
    "Bells University of Technology, Ota",
    "Chrisland University, Abeokuta",
    "Christopher University, Mowe",
    "Covenant University, Ota",
    "Crawford University, Igbesa",
    "Crescent University, Abeokuta",
    "McPherson University, Seriki-Sotayo",
    "Mountain Top University, Lagos-Ibadan Expressway",
    "Hallmark University, Ijebu Itele",
    "Kings University, Ode-Omu",
    "Redeemer's University, Mowe",
    "Skyline University (Campus in Ogun)",
    "Federal University of Agriculture, Abeokuta (FUNAAB), Abeokuta",
    "Olabisi Onabanjo University (OOU), Ago Iwoye",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First Name is required.";
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last Name is required.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required.";
    } else if (!/^(\+[\d]{1,5}|0)?[7-9]\d{9}$/.test(form.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid Nigerian phone number.";
    }
    if (!form.institution.trim()) {
      newErrors.institution = "Institution is required.";
    }
    if (!form.course.trim()) {
      newErrors.course = "Course is required.";
    }
    if (!form.matricNumber.trim()) {
      newErrors.matricNumber = "Matric Number is required.";
    }
    if (!form.idCard) {
      newErrors.idCard = "Please upload your school ID.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
    // Clear error for the field being changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        idCard: file,
      });
      // Clear error for idCard
      if (errors.idCard) {
        setErrors({
          ...errors,
          idCard: "",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);

      const formData = new FormData();
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("email", form.email);
      formData.append("phoneNumber", form.phoneNumber);
      formData.append("institution", form.institution);
      formData.append("course", form.course);
      formData.append("matricNumber", form.matricNumber);
      formData.append("accommodation", form.accommodation);
      formData.append("attachment", form.idCard);

      try {
        const response = await Internship_Form(formData);

        if (response.status === 200 || response.status === 201) {
          toast.success("Details submitted successfully!");
          // Store basic info for the payment page
          sessionStorage.setItem("internshipForm", JSON.stringify({
            ...form,
            schoolId: null // Can't store File object in JSON
          }));

          // Small delay to show toast before redirect
          setTimeout(() => {
            window.location = "/InternshipPayment";
          }, 1500);
        } else {
          toast.error("Something went wrong, please try again!");
        }
      } catch (err) {
        const errorMessage =
          err.response?.data?.message ||
          "Something went wrong! Please ensure you have a good internet connection.";
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  return (
    <div className="layout_auth font-rajdhani">
      <ToastContainer />
      <div className="layout_auth-main">
        <div className="auth_container">
          <div className="auth_container-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="auth_container_form !w-[542px] sm:!w-[95%] !px-[68px] sm:!px-2 !pt-[47px] !pb-[24px]">
            <div>
              <div className="text-text text-[12px] leading-[18px] text-right">
                Step 1 of 2
              </div>
              <div className="h-[7px] w-auto rounded-2xl bg-[#DDDDDD] mb-8">
                <div className="h-full w-2/3 bg-primary rounded-lg"></div>
              </div>
            </div>
            <h1 className="!text-heading !text-[24px] !mb-2 font-bold">
              Internship Enrollment Form
            </h1>
            <p className="text-[#787676] text-[14px] leading-[21px] mb-8">
              Kindly fill in your details correctly. Please note that payment of your{" "}
              <span className="text-[#773DD3] font-bold">tuition fee (₦301,000)</span> completes this application.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[14px] font-bold text-[#073041] mb-2">First Name</label>
                  {errors.firstName && <p className="!text-red-600 text-[12px] mb-1">{errors.firstName}</p>}
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-[#073041] mb-2">Last Name</label>
                  {errors.lastName && <p className="!text-red-600 text-[12px] mb-1">{errors.lastName}</p>}
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-[#073041] mb-2">Email Address</label>
                  {errors.email && <p className="!text-red-600 text-[12px] mb-1">{errors.email}</p>}
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-[#073041] mb-2">Phone Number</label>
                  {errors.phoneNumber && <p className="!text-red-600 text-[12px] mb-1">{errors.phoneNumber}</p>}
                  <input
                    type="tel"
                    placeholder="08124068750"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-[#073041] mb-2">School</label>
                  {errors.institution && <p className="!text-red-600 text-[12px] mb-1">{errors.institution}</p>}
                  <select
                    className="w-full border border-[#D9DCE1] text-text text-[14px] leading-[21px] rounded-lg pl-6 sm:pl-1 py-3 mb-4"
                    name="institution"
                    value={form.institution}
                    onChange={handleChange}
                  >
                    <option value="">Select your school</option>
                    {schools.map((school) => (
                      <option key={school} value={school}>
                        {school}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#073041] mb-2">Course</label>
                  {errors.course && <p className="!text-red-600 text-[12px] mb-1">{errors.course}</p>}
                  <input
                    type="text"
                    placeholder="Enter your course"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-[#073041] mb-2">Matric Number</label>
                  {errors.matricNumber && <p className="!text-red-600 text-[12px] mb-1">{errors.matricNumber}</p>}
                  <input
                    type="text"
                    placeholder="Enter school matric no."
                    name="matricNumber"
                    value={form.matricNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-[#073041] mb-2">Upload school ID</label>
                  {errors.idCard && <p className="!text-red-600 text-[12px] mb-1">{errors.idCard}</p>}
                  <label className="border border-[#D9DCE1] rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#773DD3] transition-colors bg-white relative">
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                    />
                    <img src={upload} alt="upload" />
                    <p className="!text-[12px] text-gray-400 mt-2">
                      {form.idCard ? (
                        <span className="text-[#773DD3] font-bold">{form.idCard.name}</span>
                      ) : (
                        <>
                          <span className="text-[#773DD3] font-bold">Attach ID</span> or drag and drop
                        </>
                      )}
                      <br />
                      JPEG, PDF and PNG (max. 10MB)
                    </p>
                  </label>
                </div>
                <label htmlFor="accommodation" className="block text-[14px] font-bold text-[#073041] mb-2">Accommodation</label>
                <div className="bg-[#F5F5F5] px-[24px] py-[16px] rounded-xl">
                  <p className="!text-[12px] text-gray-600 mb-4 leading-relaxed">
                    We offer accommodation option at the rate of{" "}
                    <span className="text-[#773DD3] font-bold">₦250,000</span> for the period of your internship with us. Select the checkbox below to show interest.
                  </p>
                  <label className="flex gap-3 cursor-pointer mt-2">
                    <input
                      type="checkbox"
                      id="accommodation"
                      name="accommodation"
                      className="w-4 h-4 rounded text-[#773DD3] cursor-pointer mt-[1px]"
                      checked={form.accommodation}
                      onChange={handleChange}
                    />
                    <span className="!text-[12px] font-medium text-[#1D1E2C] select-none">Opt in for accommodation</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                id="actionBtn"
                className="!mt-8 flex items-center justify-center gap-2"
                disabled={loading}
              >
                Submit {loading && <img src={loader} width={20} height={20} alt="loading" />}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="layout_auth-image">
        <LazyLoadImage
          src={authImg}
          effect="blur"
          alt="student"
          height="100%"
          width="100%"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-[#773DD3]/10"></div>
      </div>
    </div>
  );
};

export default InternshipForm;