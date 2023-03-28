import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  return (
    <div className="dark">
      <Component {...pageProps} />
      <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
    </div>
  );
}
