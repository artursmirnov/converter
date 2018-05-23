import PropTypes from 'prop-types';

export default function currencyShape() {
  return PropTypes.shape({
    id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    countries: PropTypes.arrayOf(PropTypes.string).isRequired,
    rate: PropTypes.number
  });
}
