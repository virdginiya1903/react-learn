import React, { Component } from "react";

class Header extends Component {
  render() {
    // чтобы работать с данными мы используем this.props
    console.log("items", this.props.items); //выведет в console, что items - является массивом, который пробросили из App
    return (
      <div>
        <h1>Header</h1>
        <div>
          {" "}
          {this.props.items.map((item, index) => (
            <a href={item.link} key={index}>
              {item.label}
            </a> //key={index} - уникальный атрибут
          ))}
        </div>
      </div>
    );
  }
}

export default Header;
