import React from "react";
import Footer from "@/components/footer/Footer";

import { Carousel } from "antd";
const contentStyle = {
  height: "710px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const App = () => (
  <>
    <Carousel effect="fade">
      <div>
        <h3 style={contentStyle}>
          <img
            src="https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            className="h-full w-full"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
          />
        </h3>
      </div>
    </Carousel>
    <Footer />
  </>
);
export default App;
