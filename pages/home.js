import CarteProfil from "../components/CarteProfil"git mv pages/index.js pages/home.jsgit mv pages/index.js pages/home.js;

export default function Home() {
  return (
    <>
      <div>
        <carteProfil
          nom="Novajkay"
          age="48"
          description="Dévellopeur en pleine progession sur React et Next.js"
        />
      </div>
    </>
  );
}
