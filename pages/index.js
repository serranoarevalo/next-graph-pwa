import { Switch } from "antd";

const Index = props => (
  <h1>
    This will be where we see featured products
    <Switch defaultChecked onChange={() => console.log("wasuup")} />
  </h1>
);

export default Index;
