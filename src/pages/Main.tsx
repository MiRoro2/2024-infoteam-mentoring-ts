import { useRef, useState } from "react";
import GetOrganizations from "src/api/logo";
import OrganizationCard from "src/components/OrganizationCard";

// [
//   {
//     "name": "Microsoft",
//     "ticker": "MSFT",
//     "image": "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l11f3242118ff2add5d117cbf216f29ac578f6ba6.png"
//   }
// ]

export interface Organization {
  name: string;
  ticker: string;
  image: string;
}

const Main = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [data, setData] = useState<Organization[] | null>(null);

  const handleSearch = async () => {
    const inputValue = inputRef.current?.value;

    if (!inputValue) return;

    const data = await GetOrganizations({ name: inputValue });
    setData(data);
  };

  // when you use immediate get api call
  // useEffect(() => {
  //   const asyncFunction = async () => {
  //     const inputValue = inputRef.current?.value;

  //     if (!inputValue) return;

  //     const data = await GetOrganizations({ name: inputValue });
  //     setData(data);
  //   };

  //   asyncFunction();
  // }, []);

  return (
    <div>
      <input placeholder="Company name" type="text" ref={inputRef} />
      <button
        onClick={() => {
          handleSearch();
        }}
      >
        GO
      </button>
      {data &&
        (data.length === 0 ? (
          <div>No data found</div>
        ) : (
          data.map((item) => <OrganizationCard key={item.name} {...item} />)
        ))}
    </div>
  );
};

export default Main;
