import React, { Component } from "react";

import Header from "./Header";

// эти данные как-будто получили из бекенда
const menu = [
  {
    link: "/articles",
    label: "Articles"
  },
  {
    link: "/contacts",
    label: "Contacts"
  },
  {
    link: "/posts",
    label: "Posts"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Header items={menu} />
        {/* Хотим данные из бекенда пробросить в Header, 
        для этого указываем атрибут items и туда передаем menu - это просто значения в компаненте */}
      </div>
    );
  }
}

export default App;
