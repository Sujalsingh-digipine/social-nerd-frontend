import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Alert, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: any
  ) => {
    try {
      console.log("Logging in with:", values);
      setAlert({ type: "success", message: "Login successful!" });
      resetForm();
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      setAlert({ type: "error", message: "Something went wrong" });
    } finally {
      setTimeout(() => setAlert(null), 3000);
    }
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        <img
          src="https://picsum.photos/id/1015/900/1200"
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Login</h2>
          </div>

          {alert && (
            <Alert type={alert.type} message={alert.message} showIcon />
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
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
                    name="password"
                    type="password"
                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700"
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                </div>

                <p className="mt-6 text-center text-sm text-gray-500">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-pink-600 hover:text-pink-500"
                  >
                    Register
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
