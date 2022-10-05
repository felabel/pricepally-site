import React from 'react'
import ProductCard from '../products/ProductCard'

const RecommendedTab = ({ data }) => {
  return (
    <div className="tab-pane show recommended-bg" id="recommended" role="tabpanel" aria-labelledby="recommended-tab">
      <h6 className="inner-head mb-3 mt-3">12 Available Deals</h6>
      <div className="">
        <div className="row">
          {
            data.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.product_name}
                price={product.product_price}
                discount={product.product_discount}
                image={product.product_images}
                rate={product.product_rating}
                reviewsCount={product.total_reviews}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}



export default RecommendedTab