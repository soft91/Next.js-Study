const layoutStyle = {
  margin: 20,
  padding: 20
};

const Layout2 = props => (
  <div style={layoutStyle}>
    {props.children}
  </div>
);

export default Layout2;