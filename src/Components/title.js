import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img alt="iphone 10" src="https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-a1-600x600.jpg" />
                        <div className="caption">
                            <h3>iphone 10</h3>
                            <p>
                                15.000.000 VNĐ
                           </p>
                            <p>
                                <a href="/#" className="btn btn-primary">Action</a>
                                <a href="/#" className="btn btn-default">Action</a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <button type="button" class="btn btn-default">Mua hàng </button>
                

            </div>
        )
    }
}
