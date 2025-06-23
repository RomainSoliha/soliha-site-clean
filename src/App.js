import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import './index.css';

function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/assets/logo-soliha.png" alt="SOLIHA Logo" className="h-10" />
        <h1 className="text-2xl font-bold text-[#005A87]">SOLIHA Seine-et-Marne</h1>
      </div>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline text-[#005A87]">Accueil</Link>
        <Link to="/renovation" className="hover:underline text-[#005A87]">Rénovation</Link>
        <Link to="/adapt" className="hover:underline text-[#005A87]">Ma Prime Adapt</Link>
        <Link to="/solibail" className="hover:underline text-[#005A87]">Solibail</Link>
      </nav>
    </header>
  );
}

function Banner({ image, title }) {
  return (
    <div
      className="h-48 bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-black bg-opacity-50 px-6 py-2 rounded-xl">{title}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm p-4 mt-8">
      SOLIHA Seine-et-Marne - 649 avenue de Bir Hakeim, Le Mée-sur-Seine (77350)
    </footer>
  );
}

function Accueil() {
  return (
    <>
      <Banner image="/assets/banner-accueil.jpg" title="Bienvenue chez SOLIHA" />
      <main className="p-8">
        <h2 className="text-xl font-semibold mb-4">Notre mission</h2>
        <p>
          SOLIHA Seine-et-Marne est une association engagée pour l'amélioration de l'habitat,
          la rénovation énergétique, l'adaptation des logements, et l'accompagnement des publics fragiles.
        </p>
      </main>
    </>
  );
}

function Renovation() {
  return (
    <>
      <Banner image="/assets/banner-renovation.jpg" title="Rénovation à Mormant" />
      <main className="p-8">
        <p>
          Nous accompagnons les particuliers dans leur démarche de rénovation énergétique grâce au dispositif
          MaPrimeRénov'. Nos conseillers vous aident à constituer votre dossier, identifier les aides disponibles,
          et suivre vos travaux jusqu'à leur achèvement.
        </p>
      </main>
    </>
  );
}

function Adapt() {
  return (
    <>
      <Banner image="/assets/banner-adapt.jpg" title="Ma Prime Adapt'" />
      <main className="p-8">
        <p>
          Ma Prime Adapt est une aide dédiée à l’adaptation des logements des personnes âgées ou en situation de handicap.
          SOLIHA vous accompagne dans le diagnostic, la définition des travaux nécessaires, et le montage du dossier de financement.
        </p>
      </main>
    </>
  );
}

function Solibail() {
  return (
    <>
      <Banner image="/assets/banner-solibail.jpg" title="Dispositif Solibail" />
      <main className="p-8">
        <p>
          Le dispositif Solibail permet aux propriétaires de louer leur bien à des associations comme SOLIHA,
          qui le sous-louent à des familles en difficulté. Ce dispositif garantit un loyer régulier, une gestion complète,
          et une sécurisation du logement.
        </p>
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/renovation" element={<Renovation />} />
            <Route path="/adapt" element={<Adapt />} />
            <Route path="/solibail" element={<Solibail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
