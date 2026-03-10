// SelectionBox.tsx
import "./SelectionBox.css";

export type Option = "a" | "b";

interface SelectionBoxProps {
  option: Option;
  fighter: string;
  elo: number;
  imageUrl?: string;
  isShown?: boolean;
  selectedOption: Option | null;
  onSelect: (option: Option) => void;
}

export const SelectionBox = ({
  option,
  fighter,
  elo,
  imageUrl,
  isShown,
  selectedOption,
  onSelect,
}: SelectionBoxProps) => {
  const isSelected = option === selectedOption;

  return (
    <div
      className={`selection-panel ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(option)}
      style={
        imageUrl
          ? { backgroundImage: `url(${imageUrl})` }
          : undefined
      }
    >
      <div className="panel-overlay" />

      <div className="panel-content">
        <p className="fighter-name">{fighter}</p>

        {isShown && (
          <div className="elo-reveal">
            <span className="elo-label">ELO</span>
            <span className="elo-value">{elo}</span>
          </div>
        )}

        {!isShown && (
          <p className="panel-hint">Click to pick the winner</p>
        )}
      </div>
    </div>
  );
};
