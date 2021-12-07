const DescriptionLength = (description) => description.length > 14 ? `${description.substr(0, 14)}...` : description;

export default DescriptionLength;