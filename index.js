(() => {
  const namespace = 'kalimat-lang';      
  const key = 'kalimat-2025-may-03.zip'; 
  
  const getUrl = `https://api.countapi.xyz/get/${namespace}/${key}`;
  const hitUrl = `https://api.countapi.xyz/hit/${namespace}/${key}`;
  const btn = document.getElementById('download-btn');
  const countEl = document.getElementById('dl-count');

  // Load current count on page load
  fetch(getUrl).then(r => r.ok ? r.json() : null).then(j => {
    if (j && typeof j.value === 'number') countEl.textContent = j.value;
    else countEl.textContent = '0';
  }).catch(() => { countEl.textContent = '0'; });

  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    // Increment counter
    try{
      const res = await fetch(hitUrl);
      const j = await res.json();
      if (j && typeof j.value === 'number') countEl.textContent = j.value;
    }catch(e){
      // ignore failures
    }
    // Start download / navigate to file
    window.location.href = btn.href;
  });
})();
