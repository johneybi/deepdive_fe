function Card({title, children}) {
  return (
    <>
      <h2>Card Component</h2>
      <h3>{title}</h3>
      <div>
        {children}
    </div>
  </>
  );
}

export default Card;