import { Space, Typography } from "antd";
import React from "react";

function PokemonDetail({ data }) {
  console.log("data", data);
  return (
    <div
      style={{
        padding: "8px",
        marginBottom: "8px",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Space direction="vertical">
        <Typography.Text style={{ color: "#5a4a9c" }}>
          Id: {data.id}
        </Typography.Text>
        <Typography.Text style={{ color: "#5a4a9c" }}>
          Location: {data.location}
        </Typography.Text>
        <Typography.Text style={{ color: "#5a4a9c" }}>
          Hitpoints : {data.hitpoints}
        </Typography.Text>
      </Space>
    </div>
  );
}

export default PokemonDetail;
