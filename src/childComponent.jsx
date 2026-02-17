import React from 'react';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, type, image, happiness, onFeed, onPlay, onNeglect } = this.props;

    // Determine the color of the happiness bar
    let barColor = '#e74c3c'; // red
    if (happiness >= 70) barColor = '#2ecc71'; // green
    else if (happiness >= 50) barColor = '#f39c12'; // orange
    else if (happiness >= 30) barColor = '#e67e22'; // dark orange

    return (
      <div className={`child-card ${happiness >= 50 ? 'happy' : 'sad'}`}>
        <div className="pet-type-badge">{type}</div>
        <h2>{name}</h2>

        <div className="image-wrapper">
          <img src={image} alt={`${name} the ${type}`} />
        </div>

        {/* Happiness bar */}
        <div className="happiness-bar-container">
          <div className="happiness-bar-label">
            <span>Happiness</span>
            <span>{happiness}%</span>
          </div>
          <div className="happiness-bar-track">
            <div
              className="happiness-bar-fill"
              style={{
                width: `${happiness}%`,
                backgroundColor: barColor,
              }}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="button-group">
          <button className="btn feed-btn" onClick={() => onFeed(id)}>
            Feed
          </button>
          <button className="btn play-btn" onClick={() => onPlay(id)}>
            Play
          </button>
          <button className="btn neglect-btn" onClick={() => onNeglect(id)}>
            Neglect
          </button>
        </div>
      </div>
    );
  }
}

export default ChildComponent;
