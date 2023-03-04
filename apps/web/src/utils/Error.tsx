import Navbar from "../../components/Navbar";

function Error() {
  return (
    <div className="Error">
      <Navbar />
      <div style={{ marginTop: "200px" }}>
        <h1>Error 404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
}

export default Error;
