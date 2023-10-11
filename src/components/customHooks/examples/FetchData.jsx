import { useFetchData } from "../../../hooks/useFetchData";
export const FetchData = () => {
  // Custom hook application here:
  const { data, isLoading } = useFetchData(
    "https://jsonplaceholder.typicode.com/todos"
  ); // Use the custom hook
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.slice(0, 5).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
