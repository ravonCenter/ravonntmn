function TestCard({ title, value, setIsTest=false, setTestType }) {
  const handleClick = () => {
    setIsTest(true);
    setTestType(value);
  };

  return (
    <div
      onClick={() => handleClick()}
      className="bg-white text-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-90 sm:hover:scale-95 md:hover:scale-100 transition duration-300 cursor-pointer"
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-medium">{title}</h3>
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default TestCard;
