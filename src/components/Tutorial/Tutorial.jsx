const Tutorial = ({ title, description, videoUrl }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{videoUrl}</p>
    </li>
  );
};

export default Tutorial;
