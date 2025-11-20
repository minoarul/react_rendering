const Numbers = () => {
  const table = [];

  for (let i = 1; i <= 10; i++) {
    table.push(
      <p key={i}>
        {i} x 2 = {i * 2}
      </p>
    );
  }

  return (
    <div className="numbers-container">
      <h2>Multiplication Table of 2</h2>
      {table}
    </div>
  );
};

export default Numbers;
