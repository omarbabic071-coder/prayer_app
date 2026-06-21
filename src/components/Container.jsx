function Container({ children }) {
  let styles = {
    div: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: "100px",
    },
  };
  return <div style={styles.div}>{children}</div>;
}
export default Container;
