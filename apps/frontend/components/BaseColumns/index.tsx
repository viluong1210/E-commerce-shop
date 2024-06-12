import { Button, Card, Col, Modal, Row, Select, Table } from "antd";
import Search from "antd/es/input/Search";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { OptionsType } from "types/index";

type Props = {
  data: any[];
  columns: ColumnsType<any>;
  options?: OptionsType[];
  title: string;
  isSearch?: boolean;
  refesh?: (data: any) => void;
  searchChange?: (data: any) => void;
  clickNew?: () => void;
  queryDelete: (data : any) => any;
  fetchingData: () => void;
};

export default function BaseColumns({
  data,
  columns,
  options,
  title,
  refesh,
  searchChange,
  isSearch = true,
  clickNew,
  fetchingData,
  queryDelete,
}: Props) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const deletAction = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    mutation.mutate(selectedRowKeys);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const mutation = useMutation(queryDelete, {
    onError: () => {
      toast.error("Pls try again!!!");
      setIsModalOpen(false);
    },
    onSuccess: () => {
      toast.success("Delete Success!!!");
      setIsModalOpen(false);
      fetchingData();
    },
  });
  return (
    <>
      <Modal
        title="Confirm Delete"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Do you want to delete it?</p>
      </Modal>
      <Card
        title={title}
        bordered={false}
        extra={
          <Row
            gutter={[8, 8]}
            style={{ width: 600, display: "flex", justifyContent: "end" }}
          >
            {options && (
              <Col span={8}>
                <Select
                  onChange={refesh}
                  style={{ minWidth: 180 }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  options={[{ value: null, label: "All" }, ...options]}
                />
              </Col>
            )}
            {isSearch && (
              <Col span={10}>
                <Search
                  onSearch={(e) =>
                    searchChange ? searchChange(e) : console.log()
                  }
                  placeholder="input search text"
                />
              </Col>
            )}

            <Col span={3}>
              <Button
                onClick={clickNew ? clickNew : () => console.log()}
                type="default"
              >
                New
              </Button>
            </Col>
            <Col span={3}>
              <Button
                disabled={selectedRowKeys.length === 0}
                onClick={deletAction}
                type="default"
              >
                Delete
              </Button>
            </Col>
          </Row>
        }
      >
        <Table
          rowKey="id"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </Card>
    </>
  );
}
