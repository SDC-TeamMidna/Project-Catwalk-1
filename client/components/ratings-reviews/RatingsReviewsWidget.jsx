// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

import './RatingsReviews.css';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown';
import ReviewList from './ReviewList/ReviewList';

import mockReviewMeta from '../../mock-data/sample-review-meta.json';
import mockReviews from '../../mock-data/sample-reviews.json';

const RatingsReviewsWidget = ({ reviews, reviewMeta, productId }) => (
  <div id="ratings-reviews" className="ratings-reviews">
    <div className="rr-title"><h2>RATINGS & REVIEWS</h2></div>
    <div className="rr-widget-container">
      <RatingBreakdown reviewMeta={reviewMeta} />
      <div className="reviews-list">
        <ReviewList />
      </div>
    </div>
  </div>
);

RatingsReviewsWidget.defaultProps = {
  productId: mockReviews.product,
  reviews: mockReviews.results,
  reviewMeta: mockReviewMeta,
};
// TODO - time permitting figure out how to pass
// prop-types the proper format for your props
RatingsReviewsWidget.propTypes = {
  productId: PropTypes.string,
  reviews: PropTypes.array,
  reviewMeta: PropTypes.object,
};

export default RatingsReviewsWidget;
