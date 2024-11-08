document.addEventListener('DOMContentLoaded', () => {
    const addSubredditBtn = document.getElementById('addSubredditBtn');
    const modal = document.getElementById('modal');
    const subredditInput = document.getElementById('subredditInput');
    const addSubredditConfirm = document.getElementById('addSubredditConfirm');
    const lanes = document.getElementById('lanes');
  
    addSubredditBtn.addEventListener('click', () => {
      modal.classList.add('show');
    });
  
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('show');
      }
    });
  
    addSubredditConfirm.addEventListener('click', async () => {
      const subreddit = subredditInput.value.trim();
      if (subreddit) {
        await addSubredditLane(subreddit);
        modal.classList.remove('show');
        subredditInput.value = '';
      }
    });
  
    async function addSubredditLane(subreddit) {
      const data = await fetchSubredditData(subreddit);
      if (data) {
        const lane = document.createElement('div');
        lane.className = 'lane';
  
        lane.innerHTML = `
          <div class="lane-header">
            <h3>/r/${subreddit}</h3>
            <button onclick="removeLane(this)" class="delete-btn">x</button>
          </div>
          <div class="posts">
            ${data.map(post => `
              <div class="post">
                <span>${post.votes} ↑</span>
                <a href="${post.url}" target="_blank">${post.title}</a>
              </div>
            `).join('')}
          </div>
        `;
        lanes.appendChild(lane);
      } else {
        alert('Subreddit not found or could not fetch data.');
      }
    }
  
    async function fetchSubredditData(subreddit) {
      try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        if (!response.ok) throw new Error('Failed to fetch');
        
        const json = await response.json();
        return json.data.children.map(post => ({
          title: post.data.title,
          votes: post.data.ups,
          url: `https://reddit.com${post.data.permalink}`
        }));
      } catch (error) {
        console.error('Error fetching subreddit data:', error);
        return null;
      }
    }
  });
  
  function removeLane(button) {
    button.closest('.lane').remove();
  }
  