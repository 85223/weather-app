import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import classes from "./Loading.module.sass";

const antIcon = <LoadingOutlined className={classes.icon} spin />;

const Loading: React.FC = () => <Spin className={classes.container} indicator={antIcon} />;

export default Loading;
