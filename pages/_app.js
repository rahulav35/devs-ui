import Usercontextprovider from "../components/contexts/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Usercontextprovider>
      <Component {...pageProps} />
    </Usercontextprovider>
  );
}

export default MyApp;
