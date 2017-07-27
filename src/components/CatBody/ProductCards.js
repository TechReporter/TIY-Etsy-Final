import React, { Component } from 'react';

export default class ProductCards extends Component {
  constructor(props) {
    super(props);
    this.state= {
    feedback_score: '',
    feedbackstar: '',
    starfilled: <img src={'star_full.png'}/>,
  starunfilled: <img src={'star_empty'}/>
  }
}


  render() {
      let productCards = this.props.listingFilter.map((product) => {
        this.setState({feedback_score: product.User.feedback_info.score});
        if (this.state.feedback_score > 89) {
            this.setState({
                feedbackstar: <div>
                        {this.state.starfilled}{this.state.starfilled}{this.state.starfilled}{this.state.starfilled}{this.state.starfilled}
                    </div>
            })
        } else if (this.state.feedback_score  > 69) {
            this.setState({
                feedbackstar: <div>
                        {this.state.starfilled}{this.state.starfilled}{this.state.starfilled}{this.state.starfilled}{this.state.starunfilled}
                    </div>
            })
        } else if (this.state.feedback_score  > 49) {
            this.setState({
                feedbackstar: <div>
                        {this.state.starfilled}{this.state.starfilled}{this.state.starfilled}{this.state.starunfilled}{this.state.starunfilled}
                    </div>
            })
        } else if (this.state.feedback_score  > 29) {
                this.setState({
                    feedbackstar: <div>
                            {this.state.starfilled}{this.state.starfilled}{this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}
                        </div>
                })
            } else if (this.state.feedback_score  > 9) {
                this.setState({
                    feedbackstar: <div>
                            {this.state.starfilled}{this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}
                        </div>
                })
            } else {
                this.setState({
                    feedbackstar: <div>
                            {this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}{this.state.starunfilled}
                        </div>
                })
            }

        return (
          <div className="card col-md-2" key={product.listing_image_id}>
            <img src={product.MainImage.url_170x135} />
              <div>{product.title.substring(0, 36)}...</div>
              <div>{product.Shop.shop_name}</div>
              <div>{this.state.feedbackstar}({product.num_favorers})</div>
              <div>${product.price}</div>
          </div>
        )
      })
    return (
      <div className="row">
        {productCards}
      </div>
    )
  }
}
