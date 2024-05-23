import { Organization } from "src/pages/Main";

const OrganizationCard = ({ name, ticker, image }: Organization) => {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f0f0f0",
        borderRadius: "5px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
        }}
      />
      <div>
        <h2>{name}</h2>
        <p>{ticker}</p>
      </div>
    </div>
  );
};

export default OrganizationCard;
