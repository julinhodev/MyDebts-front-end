const DescriptionLength = (description) => description.length > 20 ? `${description.substr(0, 20)}...` : description;

export default DescriptionLength;