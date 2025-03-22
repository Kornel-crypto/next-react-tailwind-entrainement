import MonBouton from "../components/MonBouton";
import Message from "../components/Message";
import Prenom from "../components/Bienvenue";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-red-500 underline">
        Hello Tailwind v4
      </h1>
      <p className="mt-4">Tout fonctionne bien.</p>
      <MonBouton /> {/* on utilise le composant ici */}
      <Message texte="Bravo, tu utilises un props" />
      <Message texte="Ceci est un second message dynamiquement" />
      <Prenom texte="Kornel" />
      <Prenom texte="Marjorie" />
    </>
  );
}
