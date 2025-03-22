export default function CarteProfil(props) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-x1 font-bold mb-2">{props.nom}</h2>
      <p className="text-gray-700">Âge: {props.age}</p>
      <p className="mt-2 text-gray-600">{props.description}</p>
    </div>
  );
}
