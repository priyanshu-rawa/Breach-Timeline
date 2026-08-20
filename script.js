// ============================================================
// DATA – Cyber Attacks (expanded)
// ============================================================
const attacks = [
    // 1980s
    { year: 1988, title: 'Morris Worm', description: 'The first major internet worm, created by Robert Morris. Infected about 10% of all computers connected to the internet.', type: 'Worm', impact: '~6,000 computers, $10M+ in damages' },
    { year: 1989, title: 'AIDS Trojan', description: 'The first ransomware. Distributed via floppy disks, it demanded $189 to unlock files.', type: 'Ransomware', impact: 'First ever ransomware, $189 ransom' },

    // 1990s
    { year: 1999, title: 'Melissa Virus', description: 'The first major email virus. Spread via infected Word documents, causing massive email slowdowns.', type: 'Virus', impact: '$80M in damages, thousands infected' },
    { year: 1999, title: 'Chernobyl Virus', description: 'A destructive virus that overwrote the first megabyte of hard drives, making systems unbootable.', type: 'Virus', impact: 'Millions of computers damaged' },

    // 2000s
    { year: 2000, title: 'MafiaBoy DDoS', description: 'A 16-year-old launched DDoS attacks that took down Yahoo, eBay, CNN, and Amazon.', type: 'DDoS', impact: 'Major websites down for hours, millions in losses' },
    { year: 2001, title: 'Code Red Worm', description: 'Exploited a vulnerability in IIS servers, defacing websites and spreading rapidly.', type: 'Worm', impact: '~360,000 servers infected, $2.6B in damages' },
    { year: 2003, title: 'SQL Slammer', description: 'The fastest-spreading worm in history. Infected 75,000 systems in just 10 minutes.', type: 'Worm', impact: 'Internet slowdowns, $1B+ in damages' },
    { year: 2004, title: 'MyDoom', description: 'The fastest-spreading email worm ever. Caused massive email delays and network congestion.', type: 'Virus', impact: '~$38B in damages, millions infected' },
    { year: 2007, title: 'Operation Aurora', description: 'Chinese hackers infiltrated Google and 30+ companies, stealing source code and IP.', type: 'APT', impact: 'Google China operations disrupted, major IP theft' },
    { year: 2008, title: 'Conficker', description: 'A sophisticated worm that infected millions of Windows systems, forming one of the largest botnets ever.', type: 'Worm', impact: 'Millions infected, $9B+ in cleanup costs' },
    { year: 2010, title: 'Stuxnet', description: 'The first known cyber weapon. Destroyed Iranian nuclear centrifuges, changing cyber warfare forever.', type: 'APT', impact: '1,000+ centrifuges destroyed, $100M+ in damage' },

    // 2010s
    { year: 2011, title: 'Sony PlayStation Hack', description: 'Personal data of 77 million users stolen. The PlayStation Network was down for 23 days.', type: 'Data Breach', impact: '77M accounts exposed, $171M in losses' },
    { year: 2012, title: 'LinkedIn Breach', description: '6.5 million hashed passwords were stolen and leaked online.', type: 'Data Breach', impact: '6.5M passwords exposed, LinkedIn later fined' },
    { year: 2013, title: 'Yahoo Breach', description: 'The largest data breach ever. All 3 billion Yahoo accounts were compromised.', type: 'Data Breach', impact: '3 billion accounts exposed, $350M loss in sale value' },
    { year: 2014, title: 'Sony Pictures Hack', description: 'North Korean hackers leaked unreleased films, emails, and employee data.', type: 'APT', impact: 'Massive data leak, $80M+ in damages' },
    { year: 2015, title: 'OPM Breach', description: '21.5 million US government employees and contractors had their records stolen.', type: 'Data Breach', impact: '21.5M records exposed, largest government breach' },
    { year: 2016, title: 'DNC Email Leak', description: 'Russian hackers leaked Democratic National Committee emails during the US presidential election.', type: 'APT', impact: 'Political upheaval, major election interference' },
    { year: 2017, title: 'WannaCry', description: 'A global ransomware attack that crippled the UK\'s NHS and affected 150+ countries.', type: 'Ransomware', impact: '$4B+ in damages, 230,000+ computers infected' },
    { year: 2017, title: 'NotPetya', description: 'The most destructive cyber attack in history. Cost shipping giant Maersk $300M alone.', type: 'Ransomware', impact: '~$10B total damages worldwide' },
    { year: 2018, title: 'Cambridge Analytica', description: '87 million Facebook users\' data was harvested for political targeting without consent.', type: 'Data Breach', impact: '87M users affected, $5B Facebook fine' },
    { year: 2018, title: 'Marriott Breach', description: '500 million guest records were exposed in one of the largest hotel breaches ever.', type: 'Data Breach', impact: '500M records exposed, $123M fine' },
    { year: 2019, title: 'Capital One Breach', description: 'A former AWS employee stole 106 million customer records from the bank.', type: 'Data Breach', impact: '106M records exposed, $80M fine' },

    // 2020s
    { year: 2020, title: 'SolarWinds', description: 'The largest software supply-chain attack. Russian hackers compromised 18,000+ customers through a backdoor.', type: 'Supply Chain', impact: '18,000+ organizations affected, $100M+ in cleanup' },
    { year: 2021, title: 'Colonial Pipeline Ransomware', description: 'A ransomware attack forced the shutdown of a major US fuel pipeline, causing panic buying.', type: 'Ransomware', impact: 'Fuel supply disrupted, $4.4M ransom paid' },
    { year: 2021, title: 'Log4j Vulnerability', description: 'A critical zero-day vulnerability in a popular logging library that affected millions of systems worldwide.', type: 'Other', impact: 'Millions of systems at risk, unprecedented response' },
    { year: 2022, title: 'Uber Breach', description: 'A teenager gained full access to Uber\'s internal systems and announced it on Twitter.', type: 'Data Breach', impact: 'Internal systems compromised, major reputational damage' },
    { year: 2023, title: 'Clorox Ransomware', description: 'A ransomware attack caused $50+ million in losses and disrupted production for months.', type: 'Ransomware', impact: '$50M+ in losses, production disruptions' },
    { year: 2024, title: 'Change Healthcare Ransomware', description: 'The biggest healthcare hack in US history. Disrupted payments and patient care nationwide.', type: 'Ransomware', impact: '$872M impact, nationwide healthcare disruption' },
    { year: 2025, title: 'Operation ENDGAME', description: 'The largest ever international operation against botnets and cybercriminal infrastructure.', type: 'Other', impact: 'Major botnet takedown, arrests across multiple countries' }
];

// ============================================================
// DOM REFERENCES
// ============================================================
const timeline = document.getElementById('timeline');
const searchInput = document.getElementById('searchInput');
const decadeFilter = document.getElementById('decadeFilter');
const typeFilter = document.getElementById('typeFilter');
const clearBtn = document.getElementById('clearFilters');
const randomBtn = document.getElementById('randomBtn');
const shareBtn = document.getElementById('shareBtn');
const darkToggle = document.getElementById('darkToggle');
const totalAttacksEl = document.getElementById('totalAttacks');
const totalDecadesEl = document.getElementById('totalDecades');
const totalImpactEl = document.getElementById('totalImpact');
const chartBars = document.getElementById('chartBars');

// ============================================================
// RENDER TIMELINE
// ============================================================
function renderTimeline(data) {
    if (data.length === 0) {
        timeline.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No attacks found</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        return;
    }

    timeline.innerHTML = data.map((a, i) => `
        <div class="timeline-item" data-type="${a.type}" style="animation-delay: ${i * 0.04}s">
            <div class="year">${a.year}</div>
            <div class="title">${a.title}</div>
            <div class="description">${a.description}</div>
            <span class="badge">${a.type}</span>
            <div class="impact"><strong>Impact:</strong> ${a.impact}</div>
            <div class="icon-type"><i class="fas fa-${getIconForType(a.type)}"></i></div>
        </div>
    `).join('');
}

function getIconForType(type) {
    const map = {
        'Worm': 'bug',
        'Virus': 'virus',
        'Ransomware': 'lock',
        'Data Breach': 'user-secret',
        'DDoS': 'server',
        'Supply Chain': 'chain',
        'APT': 'user-astronaut',
        'Other': 'exclamation-triangle'
    };
    return map[type] || 'circle';
}

// ============================================================
// FILTERS
// ============================================================
function filterAttacks() {
    const search = searchInput.value.toLowerCase().trim();
    const decade = decadeFilter.value;
    const type = typeFilter.value;

    const filtered = attacks.filter(a => {
        const matchSearch = a.title.toLowerCase().includes(search) ||
                            a.description.toLowerCase().includes(search);
        const matchDecade = decade === 'all' || (a.year >= parseInt(decade) && a.year < parseInt(decade) + 10);
        const matchType = type === 'all' || a.type === type;
        return matchSearch && matchDecade && matchType;
    });

    renderTimeline(filtered);
    updateStats(filtered);
    updateChart(filtered);
}

// ============================================================
// STATS UPDATES
// ============================================================
function updateStats(data) {
    totalAttacksEl.textContent = data.length;

    const decades = new Set(data.map(a => Math.floor(a.year / 10) * 10));
    totalDecadesEl.textContent = decades.size;

    // Estimate total impact (simplified)
    const impactMap = {
        'Worm': 1.5, 'Virus': 2, 'Ransomware': 4, 'Data Breach': 3,
        'DDoS': 1, 'Supply Chain': 5, 'APT': 4, 'Other': 1
    };
    const total = data.reduce((sum, a) => sum + (impactMap[a.type] || 1), 0);
    totalImpactEl.textContent = `$${(total * 0.5).toFixed(1)}B+`;
}

// ============================================================
// CHART – Attacks by Decade
// ============================================================
function updateChart(data) {
    const decades = [1980, 1990, 2000, 2010, 2020];
    const counts = decades.map(d => data.filter(a => a.year >= d && a.year < d + 10).length);
    const maxCount = Math.max(...counts, 1);

    chartBars.innerHTML = decades.map((d, i) => {
        const height = (counts[i] / maxCount) * 100;
        return `
            <div class="bar-wrapper">
                <span class="bar-count">${counts[i]}</span>
                <div class="bar" style="height: ${Math.max(height, 4)}%;"></div>
                <span class="bar-label">${d}s</span>
            </div>
        `;
    }).join('');
}

// ============================================================
// DARK MODE TOGGLE
// ============================================================
let darkMode = true;
darkToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('light-mode', !darkMode);
    darkToggle.innerHTML = darkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    // Save preference
    localStorage.setItem('timeline-dark-mode', darkMode);
});

// ============================================================
// RANDOM ATTACK
// ============================================================
randomBtn.addEventListener('click', () => {
    const filtered = attacks.filter(a => {
        const search = searchInput.value.toLowerCase().trim();
        const decade = decadeFilter.value;
        const type = typeFilter.value;
        const matchSearch = a.title.toLowerCase().includes(search) || a.description.toLowerCase().includes(search);
        const matchDecade = decade === 'all' || (a.year >= parseInt(decade) && a.year < parseInt(decade) + 10);
        const matchType = type === 'all' || a.type === type;
        return matchSearch && matchDecade && matchType;
    });
    if (filtered.length === 0) return;
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    // Scroll to the item with that title
    const items = document.querySelectorAll('.timeline-item');
    for (const item of items) {
        const titleEl = item.querySelector('.title');
        if (titleEl && titleEl.textContent === random.title) {
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            item.style.borderColor = 'var(--accent)';
            setTimeout(() => { item.style.borderColor = ''; }, 2000);
            break;
        }
    }
});

// ============================================================
// SHARE
// ============================================================
shareBtn.addEventListener('click', () => {
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: 'Cyber Attack Timeline',
            text: 'Explore the history of cyber attacks from 1988 to today.',
            url: url
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(url).then(() => {
            const original = shareBtn.innerHTML;
            shareBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => { shareBtn.innerHTML = original; }, 2000);
        }).catch(() => {});
    }
});

// ============================================================
// CLEAR FILTERS
// ============================================================
clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    decadeFilter.value = 'all';
    typeFilter.value = 'all';
    filterAttacks();
});

// ============================================================
// EVENT LISTENERS (debounced)
// ============================================================
let filterTimeout;
const debouncedFilter = () => {
    clearTimeout(filterTimeout);
    filterTimeout = setTimeout(filterAttacks, 150);
};

searchInput.addEventListener('input', debouncedFilter);
decadeFilter.addEventListener('change', filterAttacks);
typeFilter.addEventListener('change', filterAttacks);

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        clearBtn.click();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// ============================================================
// INITIAL LOAD
// ============================================================
// Load saved dark mode preference
const savedDark = localStorage.getItem('timeline-dark-mode');
if (savedDark !== null) {
    darkMode = savedDark === 'true';
    document.body.classList.toggle('light-mode', !darkMode);
    darkToggle.innerHTML = darkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

renderTimeline(attacks);
updateStats(attacks);
updateChart(attacks);

// ============================================================
// GLOW CURSOR
// ============================================================
const cursor = document.createElement('div');
cursor.className = 'glow-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

console.log('Cyber Attack Timeline loaded – enjoy!');