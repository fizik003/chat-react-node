import React from "react";

import { Message } from "components";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="home">
      <Message
        avatar={
          "https://sun2.beltelecom-by-minsk.userapi.com/impf/c856020/v856020444/142390/4iUEN6yAqvI.jpg?size=100x0&quality=96&crop=0,185,475,475&sign=d992e8602cfd01c1efc129e1df7f6426&ava=1"
        }
        text="vsem privet pishu v translite rabotaem"
        date="Sun Dec 06 2020 02:44:34 GMT+0300"
      />
    </section>
  );
};

export default HomePage;
