"use client";

import Label from "@/components/label";
import { Col, Row } from "antd";
import { useParams } from "next/navigation";
import React from "react";

export default function Detail() {
  const { id } = useParams();
  return (
    <div>
      <Row gutter={12}>
        <Col span={12}>
          <Label title="test " content="test" />
        </Col>
        <Col span={12}>
          <Label title="test " content="test" />
        </Col>
      </Row>
      <Row gutter={12} style={{ marginTop: 12 }}>
        <Col span={12}>
          <Label title="test " content="test" />
        </Col>
        <Col span={12}>
          <Label title="test " content="test" />
        </Col>
      </Row>
    </div>
  );
}
