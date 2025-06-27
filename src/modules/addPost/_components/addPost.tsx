import { Button, Input, Upload, Form, UploadFile, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddPost: React.FC = () => {
const fileList: UploadFile[] = [
  {
    uid: '0',
    name: 'xxx.png',
    status: 'uploading',
    percent: 33,
  },
  {
    uid: '-1',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'zzz.png',
    status: 'error',
  },
];

  const formik = useFormik({
    initialValues: {
      caption: "",
    },
    validationSchema: Yup.object().shape({
      caption: Yup.string()
        .required("Caption is required")
        .min(3, "Caption must be at least 3 characters"),
    }),
    onSubmit: (values) => {
      console.log(values);
      message.success("Post created successfully!");
    },
  });

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>

      <Form layout="vertical" onFinish={formik.handleSubmit}>
        <Form.Item
          label="Caption"
          validateStatus={
            formik.touched.caption && formik.errors.caption ? "error" : ""
          }
          help={formik.touched.caption && formik.errors.caption}
        >
          <Input.TextArea
            name="caption"
            value={formik.values.caption}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={3}
            placeholder="Eg. Driving Car with my friends"
          />
        </Form.Item>

        <Form.Item label="Upload Images (Max: 5)">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture"
            defaultFileList={fileList}
            maxCount={5}
          >
            <Button type="primary" icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPost;
