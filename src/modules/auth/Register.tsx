import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Alert } from "antd";
import "antd/dist/reset.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(3).required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

export default function RegisterForm() {
  const [alert, setAlert] = useState<{
    type: "success" | "error" | null;
    message: string;
  } | null>(null);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: any
  ) => {
    try {
      console.log("Form Values", values);
      setAlert({ type: "success", message: "Registration successful!" });
      resetForm();
      setTimeout(() => setAlert(null), 3000);
    } catch (error) {
      console.error("Registration error:", error);
      setAlert({ type: "error", message: "Something went wrong" });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        <img
          src="https://picsum.photos/id/1005/900/1200"
          alt="Cover"
          className="w-full h-lvh object-cover"
        />
      </div>
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
              Register
            </h2>
          </div>

          {alert && (
            <Alert
              type={alert.type as "success" | "error"}
              message={alert.message}
              showIcon
              closable
              onClose={() => setAlert(null)}
            />
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    {isSubmitting ? "Registering..." : "Register"}
                  </button>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Already a member?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-pink-600 hover:text-pink-500"
                  >
                    Sign in
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
