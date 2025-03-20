import "./styles.css";

type BallProps = {
  value: number;
  color?: "red" | "blue";
  onRightClick?: (value: number) => void;
};

const Ball: React.FC<BallProps> = ({ value, color = "blue", onRightClick }) => {
  return (
    <div
      className={`ball ${color}`}
      onContextMenu={(e) => {
        e.preventDefault();
        if (onRightClick) onRightClick(value);
      }}
    >
      {value}
    </div>
  );
};

export default Ball;
