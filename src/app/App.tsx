import './styles/index.scss';
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const {theme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="contant-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App;