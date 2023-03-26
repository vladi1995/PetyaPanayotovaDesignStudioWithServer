
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from "./contexts/AuthContext";
import { CardProvider } from "./contexts/CardContext";

import Home from "./components/home/Home";
import Header from "./components/common/Header";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import Logout from "./components/auth/Logout/Logout";
import About from "./components/about/About";
import CreateCard from "./components/cards/Create/CreateCard";
import CatalogCards from "./components/cards/Catalog/CatalogCards";
import CardDetails from "./components/cards/Details/CardDetails";
import CardEdit from "./components/cards/Edit/CardEdit";
import CardDelete from "./components/cards/Delete/CardDelete";
import UserProfile from "./components/user/UserInfo/UserProfile";
import Search from './components/features/Search/Search';
import Footer from "./components/common/Footer";

import PrivateGuard from './components/guads/PrivateGuard';
import PrivateGuardLogged from './components/guads/PrivateGuardLogged';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <CardProvider>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/cards/catalog" element={<CatalogCards />} />
            <Route path="/cards/details/:cardId" element={<CardDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user/profile/:userId" element={<UserProfile />} />

            <Route element={<PrivateGuard />}>
              <Route path="/cards/delete/:cardId" element={<CardDelete />} />
              <Route path="/cards/edit/:cardId" element={<CardEdit />} />
              <Route path="/cards/create" element={<CreateCard />} />
              <Route path="/auth/logout" element={<Logout />} />
            </Route>

            <Route element={<PrivateGuardLogged />}>
              <Route path="/auth/register" element={<Register />} />
              <Route path="/auth/login" element={<Login />} />
            </Route>

            <Route path="*" element={<NotFound />} />

          </Routes>
        </CardProvider>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
