function List({children}) {
  return (
    <>
    <h2>List Component</h2>
    <ul style={{ fontSize: "20px"}}>
      {children}
    </ul>
    </>
  )
}

export default List