import Head from "next/head";
import formImage from "../public/std.png";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import axios from 'axios';

export default function Home() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      dob: "",
      aadharNumber: "",
      address: "",
      incomeRange: "",
      employmentType: "",
      terms: false,
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      dob: Yup.date().required("Date of Birth is required"),
      aadharNumber: Yup.string()
        .matches(/^\d{12}$/, "Invalid Aadhar Number")
        .required("Aadhar Number is required"),
      address: Yup.string().required("Address is required"),
      incomeRange: Yup.string().required("Income Range is required"),
      employmentType: Yup.string().required("Employment Type is required"),
      terms: Yup.boolean().oneOf([true], "Terms of service must be checked"),
    }),

    onSubmit: async (values) => {
      try {
        console.log("form submitted");
        console.log(values);
        const response = await axios.post('/api/submit-form', values);
        console.log(response.data);
        router.push({ pathname: "/success", query: values });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  });

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full"
    >
      <Head>
        <title>Online Video KYC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/std.png" />
        <script
          type="text/javascript"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
        {/* <style>{`
          .goog-te-banner-frame.skiptranslate {
            display: none !important;
          }
          .goog-te-gadget-icon {
            display: none !important;
          }
          .goog-te-gadget-simple {
            background-color: transparent !important;
            border-color: transparent !important;
            padding: 0 !important;
          }
          .goog-te-gadget-simple .goog-te-menu-value span {
            color: #000 !important;
          }
          .goog-te-gadget-simple .goog-te-menu-value span:first-child {
            font-family: Arial, sans-serif !important;
            font-size: 14px !important;
          }
          .goog-te-gadget-simple .goog-te-menu-value span:nth-child(2) {
            font-family: Arial, sans-serif !important;
            font-size: 12px !important;
          }
          .goog-te-gadget-simple .goog-te-menu-frame.skiptranslate {
            display: none !important;
          }
          `}</style> */}
      </Head>

      <main className="h-screen items-center flex justify-center">
        {/* Google Translate Button */}
        <div id="google_translate_element" className="absolute top-0 right-0 m-4"></div>

        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex rounded-lg w-1/2 font-latoRegular"
        >
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-latoBold">
              Online Video KYC 👋
            </h1>
            <div className="mt-6">
              <div className="pb-4">
                <label
                  htmlFor="name"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="email"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="dob"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.dob && formik.errors.dob
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.dob && formik.errors.dob
                    ? formik.errors.dob
                    : "Date of Birth"}
                </label>
                <input
                  type="date"
                  name="dob"
                  onChange={formik.handleChange}
                  value={formik.values.dob}
                  onBlur={formik.handleBlur}
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="aadharNumber"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.aadharNumber && formik.errors.aadharNumber
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.aadharNumber &&
                  formik.errors.aadharNumber
                    ? formik.errors.aadharNumber
                    : "Aadhar Number"}
                </label>
                <input
                  type="text"
                  name="aadharNumber"
                  onChange={formik.handleChange}
                  value={formik.values.aadharNumber}
                  onBlur={formik.handleBlur}
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Enter your Aadhar Number"
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="address"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.address && formik.errors.address
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.address && formik.errors.address
                    ? formik.errors.address
                    : "Address"}
                </label>
                <input
                  type="text"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  onBlur={formik.handleBlur}
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Enter your address"
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="incomeRange"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.incomeRange && formik.errors.incomeRange
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.incomeRange && formik.errors.incomeRange
                    ? formik.errors.incomeRange
                    : "Income Range"}
                </label>
                <input
                  type="text"
                  name="incomeRange"
                  onChange={formik.handleChange}
                  value={formik.values.incomeRange}
                  onBlur={formik.handleBlur}
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Enter your income range"
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="employmentType"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.employmentType &&
                    formik.errors.employmentType
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.employmentType &&
                  formik.errors.employmentType
                    ? formik.errors.employmentType
                    : "Employment Type"}
                </label>
                <input
                  type="text"
                  name="employmentType"
                  onChange={formik.handleChange}
                  value={formik.values.employmentType}
                  onBlur={formik.handleBlur}
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Enter your employment type"
                />
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-5 w-5 text-blue-500 border-2  background-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the Terms and Service.
                  </p>
                </div>
                {formik.touched.terms && formik.errors.terms && (
                  <p className="text-sm font-latoBold text-red-400">
                    {formik.errors.terms}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Verify.
              </button>
            </div>
          </div>
          <div className="relative flex-1">
            <Image
              className=" object-cover rounded-lg"
              fill
              priority
              src={formImage}
              alt="form-learn"
            />
          </div>
        </form>
      </main>
    </m.div>
  );
}
