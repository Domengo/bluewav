const FeatureCard = ({ title, description }) => {
    return (
        <div className="w-96 h-52 bg-purple-100 shadow-lg rounded-lg border border-gray-300 p-5">
            <div className="text-black text-2xl font-roboto font-bold">{title}</div>
            <div className="text-gray-700 text-lg font-roboto font-light mt-4">
                {description}
            </div>
        </div>
    );
};

export default FeatureCard;