import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, Image, Alert, Button } from "antd";
import type { UploadFile, UploadProps, GetProp } from "antd";
import type { RcFile } from "antd/es/upload";
import { useAlert } from "../../../hooks/useAlert";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const EditProfile = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { alert, showAlert, hideAlert } = useAlert();

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    accountStatus: Yup.string().required("Status is required"),
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .min(6, "Password too short")
      .required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Please confirm your password"),
  });

  const uploadButton = (
    <div className="flex flex-col items-center text-gray-500">
      <PlusOutlined />
      <div>Upload</div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center ">Edit Profile</h2>

      <div className="flex justify-center mb-6">
        <Upload
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={() => false}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
      </div>

      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}

      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          showIcon
          className="mb-4"
        />
      )}

      <Formik
        initialValues={{
          username: "",
          accountStatus: "Active",
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("🔥 Form submitted");
          console.log("Submitted:", values);
          showAlert("success", "Profile updated successfully!");
          resetForm();
          setTimeout(() => {
            hideAlert();
            resetForm();
          }, 3000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 gap-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <Field
                name="username"
                placeholder="Eg. john doe"
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Status
              </label>
              <Field
                name="accountStatus"
                as="select"
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </Field>
              <ErrorMessage
                name="accountStatus"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <Field
                  name="currentPassword"
                  type="password"
                  placeholder="******"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                />
                <ErrorMessage
                  name="currentPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <Field
                  name="newPassword"
                  type="password"
                  placeholder="******"
                  className="mtmt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                />
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="******"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <Button
              type="primary"
              disabled={isSubmitting}
              htmlType="submit"
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
