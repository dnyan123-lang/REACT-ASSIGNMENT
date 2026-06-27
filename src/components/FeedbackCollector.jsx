import React, { useState } from 'react';

function FeedbackCollector() {
  const [feedback, setFeedback] = useState(null);
  const [total, setTotal] = useState(0);

  const handleFeedback = (type) => {
    setFeedback(type);
    setTotal(total + 1);
  };

  const getMessage = () => {
    if (feedback === 'Good') return 'Thank you for your positive feedback!';
    if (feedback === 'Average') return "We'll try to improve.";
    if (feedback === 'Poor') return 'Sorry for the inconvenience.';
    return '';
  };

  return (
    <div className="card">
      <h2>Feedback Collector</h2>

      <div className="button-group">
        <button className="emoji-btn good" onClick={() => handleFeedback('Good')}>
          <span className="emoji">😊</span> Good
        </button>
        <button className="emoji-btn average" onClick={() => handleFeedback('Average')}>
          <span className="emoji">😐</span> Average
        </button>
        <button className="emoji-btn poor" onClick={() => handleFeedback('Poor')}>
          <span className="emoji">😞</span> Poor
        </button>
      </div>

      {feedback && (
        <div className="feedback-display">
          <p className="selected-text">
            <strong>Selected Feedback:</strong> {feedback}
          </p>
          <div className={`bonus-message ${feedback.toLowerCase()}`}>
            {getMessage()}
          </div>
        </div>
      )}

      <div className="total-tracker">
        <strong>Total Feedback Given:</strong> 
        <span className="badge">{total}</span>
      </div>
    </div>
  );
}

export default FeedbackCollector;