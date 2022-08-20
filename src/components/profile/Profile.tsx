import { FC, useReducer } from 'react';


interface PropfileProps {
  name: string,
  title: string,
  details: string
}

export const Profile: FC<PropfileProps> = ({ name, title, details }) => {
  const [showDetails, setShowDetails] = useReducer((state) => !state, true);

  return (
    <div className="card card-normal bg-base-100 shadow-xl">
      <figure>
        <img
          className="card-image"
          src="http://fakeimg.pl/286x180?font=lobster"
          alt="Card cap"
        />
      </figure>

      <div className="card-body">
        <h5>{name}</h5>
        <p className="card-title">{title}</p>

        <button className="btn" type="button" onClick={() => setShowDetails()}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && (
        <div data-testid="details">
          {details}
        </div>
        )}
      </div>
    </div>
  );
};
