import React, { Component } from 'react';
import './App.css';
import Header from './Components/header'; //Header viết hoa chữ H, Components và header là tên folder và files
import Title from './Components/title';

export default class App extends Component {
  
  showInfoProduct(product){
    return <h3>
    id: {product.id}<br/>
    name: {product.name}<br/>
    price: {product.price} VND<br/>
    status:{product.status ?'Active':'pending'}
  </h3>
  }
  
  render() {
    var product={
      name: 'Iphone 10',
      id:1,
      price:16000000,
      status:true,
    }
    var users=[
      {
        id:1,
        name:'Nguyen Van A',
        age:18,
      },
      {
        id:2,
        name:'Nguyen Van B',
        age:35,
      },
      {
        id:3,
        name:'Nguyen Thi C',
        age:28,
      }
    ]
    var element = users.map((user,index)=>{
      return <div key={user.id}>
                <h2>Name: {user.name}</h2>
                <p>Age: {user.age}</p>
              </div>
    });
    return (
      <div>
        <Header /> {/*components được import từ file Components */}
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Title />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Title /> {/*Đặt theo bố cục*/}
          </div>
        </div>
        <div className='ml-30'>
          {this.showInfoProduct(product)}
          <br/>
          <hr/>
          {element}
        </div>
      </div>
    )
  }
}
