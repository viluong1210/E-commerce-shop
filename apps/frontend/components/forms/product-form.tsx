"use client";

import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "antd/es/form/Form";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  UploadFile,
} from "antd";
import {
  createProducts,
  editProducts,
  getdetailProducts,
} from "@/services/productsService";
import UploadImages from "./UploadImages";
import { storage } from "@/types/firebases/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import { Image, ProductType } from "@/types";

interface ProductFormProps {
  initialData: any | null;
  categories: any;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  categories,
}) => {
  const { id } = useParams();
  const [form] = useForm();
  const router = useRouter();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileUrls, setFileUrls] = useState<Image[]>([]);

  useEffect(() => {
    if (id) {
      // form.setFieldsValue(state);
      getdetailProducts(id).then((data: ProductType) => {
        form.setFieldsValue(data);

        setFileUrls(data.images);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const uploadImages = async (files) => {
    const imgRef = ref(storage, `files/${uuid()}`);

    const imgs = await files.map(async (i: any) =>
      uploadBytes(imgRef, i?.originFileObj).then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      }),
    );

    const listImg = await Promise.all(imgs).then((x) => x);

    return listImg;
  };

  const onFinish = async (values: any) => {
    if (id) {
      const newImages = fileList.filter((i) => i?.originFileObj);
      const oldImages = fileList.filter((i) => !i?.originFileObj);

      const listImg = await uploadImages(newImages);

      const dataForPayLoad = {
        ...values,
        images: [...listImg, ...oldImages.map((i) => i.url)],
      };

      await editProducts({ params: dataForPayLoad, id })
        .then(() => {
          toast.success("Update successfuly");
          router.refresh();
          router.push(`/admin/dashboard/products`);
        })
        .catch((err) => {
          toast.error(JSON.stringify(err));
        });
    } else {
      const listImg = await uploadImages(fileList);

      const dataForPayLoad = { ...values, images: listImg };

      await createProducts(dataForPayLoad)
        .then(() => {
          toast.success("Create successfuly");
          router.refresh();
          router.push(`/admin/dashboard/products`);
        })
        .catch((err) => {
          toast.error(JSON.stringify(err));
        });
    }
  };

  return (
    <>
      <Form
        name="normal_login"
        form={form}
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Product Name"
              rules={[
                { required: true, message: "Please input Product Name!" },
              ]}
            >
              <Input placeholder="Product Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Product Price"
              rules={[
                { required: true, message: "Please input Product Price!" },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0}
                placeholder="Product Price"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Form.Item
              name="category"
              label="Product Category"
              rules={[
                { required: true, message: "Please input Product Category!" },
              ]}
            >
              <Select
                placeholder="Select Category"
                optionFilterProp="children"
                options={categories}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Please input Description of Product!",
                },
              ]}
            >
              <Input.TextArea rows={3} />
            </Form.Item>
          </Col>
        </Row>
        <UploadImages
          fileUrls={fileUrls}
          setFileList={setFileList}
          fileList={fileList}
        />
        <Form.Item style={{ marginTop: 24 }}>
          <Button htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
