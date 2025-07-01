import {
  Button,
  Input,
  Upload,
  Form,
  UploadFile,
  message,
  Divider,
  Typography,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

const { Title } = Typography;

const AddPost: React.FC = () => {
  const fileList: UploadFile[] = [
    {
      uid: "-1",
      name: "yyy.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      thumbUrl:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
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

  const handleChange = (info: any) => {
    console.log(info);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow mt-8">
      <Title level={3} className="text-center mb-6">
        Create a New Post
      </Title>

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
            rows={4}
            placeholder="Eg. Driving Car with my friends"
          />
        </Form.Item>

        <Divider orientation="left">Upload Images</Divider>
        <Form.Item>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture"
            defaultFileList={fileList}
            onChange={handleChange}
            maxCount={5}
          >
            <Button type="primary" icon={<UploadOutlined />}>
              Upload Images (max 5)
            </Button>
          </Upload>
        </Form.Item>

        <Divider orientation="left">Upload Video</Divider>
        <Form.Item>
          <Upload
            accept="video/*"
            action="https://jsonplaceholder.typicode.com/posts"
            listType="picture"
            maxCount={1}
            showUploadList={{ showRemoveIcon: true }}
          >
            <Button type="primary" icon={<UploadOutlined />}>
              Upload Video (max 1 min)
            </Button>
          </Upload>
        </Form.Item>

        <Divider />

        <Form.Item className="text-center mt-6">
          <Button type="primary" htmlType="submit" size="large">
            Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPost;
