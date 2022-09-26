import { Button } from "./components/Button/Button";
import { DownloadApp } from "./components/DownloadApp/DownloadApp";
import { HeaderLogo } from "./components/HeaderLogo/HeaderLogo";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div>
      <HeaderLogo />
      <Main />
      <Button />
      <DownloadApp />
    </div>
  );
}

export default App;
