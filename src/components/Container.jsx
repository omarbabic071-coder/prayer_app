function Container({ children }) {
  let styles = {
    div: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  };
  return <div style={styles.div}>{children}</div>;
}
export default Container;
