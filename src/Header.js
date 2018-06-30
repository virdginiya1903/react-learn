import React, { Component } from "react";
// для работы с PropTypes нужно установить yarn add prop-types
//PropTypes нужен, чтобы сразу понимать какие типы данных может принимать компанента на вход ,
//чтобы если ей передали неправильные данные  - был warning(ошибка)
import PropTypes from "prop-types"; //подключаем PropTypes
class Header extends Component {
  static propTypes = {
    // чтобы добавить в Header propTypes пишем  static propTypes ={}

    //валидируем типы данных:
    items: PropTypes.array.isRequired,
    //описываем, что в наш компанент должен приходить массив (this.props.items)
    //то пишем:
    //мы хотим, чтобы items всегда были  (PropTypes) типа (array) , хотим ,чтобы были переданы всегда (isRequired)
    //самые популярные проверки типов:
    isLoading: PropTypes.bool, //допустим есть Load внутри компаненты,
    //isLoading передается откуда-то снаружи. Должна быть булегового типа
    submit: PropTypes.func.isRequired, // всегда ожидаем (isRequired), что на вход передается функция  (func)
    title: PropTypes.string.isRequired, //всегда ожидает строку

    //валидируем данные:
    type: PropTypes.oneOf(["news", "photos"]), // мы хотим получить тип (type):
    //тип (PropTypes)  должен именно равняться 'news' или 'photos' (oneOf(["news", "photos"])  )

    //валидируем объекты:

    users: PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number
    }), //используем функцию shape, в которую передаем объект

    //валидируем массив
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
      })
    )
  };

  render() {
    // чтобы работать с данными мы используем this.props
    console.log("items", this.props.items); //выведет в console, что items - является массивом, который пробросили из App
    return (
      <div>
        <h1>Header</h1>
        <div>
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
