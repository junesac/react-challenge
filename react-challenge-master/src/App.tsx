import React, { FunctionComponent } from 'react';
import './App.scss';

const GIT_USER = 'dhh';
const GIT_USER_URL = `https://api.github.com/users/${GIT_USER}/events`;

type AppState = {};

interface Data {
  type: string;
}

const scoreMap = new Map<string, number>();
scoreMap.set('PushEvent', 5);
scoreMap.set('PullRequestReviewCommentEvent', 4);
scoreMap.set('WatchEvent', 3);
scoreMap.set('CreateEvent',2);

const App: FunctionComponent<AppState> = (props) => {

  const getScore = () => {
    fetch(GIT_USER_URL).then(response => response.json())
    .then(response => {
      calculateScore(response); 
    });
  };

  const calculateScore = (data: Data[]) => {
    let score = 0;
    data.forEach((row: Data) => {
      const type = row.type;
      score += scoreMap.get(type) ?? 1;
    });
    document.getElementsByClassName('score')[0].innerHTML = '' + score;
  };

  return (
    <div className="app-container">
      <div className="score">n/a</div>
      <button type="button" className="primary-btn" aria-label="Get Score" onClick={getScore}>
        Get Score
      </button>
    </div>
  );
};

export default App;
