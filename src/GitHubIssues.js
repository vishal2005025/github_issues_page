// GitHubIssues.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function GitHubIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    
        axios.get("https://api.github.com/repos/saadpasta/react-blog-github/issues")
        .then((res)=>{setIssues(res.data)})
    }, []);

  return (
    <div>
      <h1>GitHub Issues:</h1>
      <ul>
        {issues.map((issue) => (
          <li id="list">
            <a href={issue.html_url}>{issue.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubIssues;
