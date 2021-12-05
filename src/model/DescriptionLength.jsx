const DescriptionLength = (description) => description.length > 30 ? `${description.substr(0, 30)}...` : description;

export default DescriptionLength;