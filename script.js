// ============================================================
// DATA – Cyber Attacks (expanded)
// ============================================================
const attacks = [
    // 1980s
    { year: 1988, title: 'Morris Worm', description: 'The first major internet worm, created by Robert Morris. Infected about 10% of all computers connected to the internet.', type: 'Worm', impact: '~6,000 computers, $10M+ in damages', lessons: 'A single self-replicating program brought the early internet to its knees because almost nothing was patched or isolated. Today the same lesson holds: keep systems updated automatically, segment networks so one infected machine cannot flood everything else, and rate-limit unusual outbound connections.' },
    { year: 1989, title: 'AIDS Trojan', description: 'The first ransomware. Distributed via floppy disks, it demanded $189 to unlock files.', type: 'Ransomware', impact: 'First ever ransomware, $189 ransom', lessons: 'It spread through a mailed floppy disk, proving that any new distribution channel can be weaponized. Never run software from unsolicited physical or digital media, and keep offline backups so a locked drive is never a total loss.' },
    // 1990s
    { year: 1999, title: 'Melissa Virus', description: 'The first major email virus. Spread via infected Word documents, causing massive email slowdowns.', type: 'Virus', impact: '$80M in damages, thousands infected', lessons: 'Melissa spread because people trusted attachments from known contacts without a second thought. Disable auto-executing macros in Office documents by default, and treat any unexpected attachment — even from a familiar sender — with suspicion.' },
    { year: 1999, title: 'Chernobyl Virus', description: 'A destructive virus that overwrote the first megabyte of hard drives, making systems unbootable.', type: 'Virus', impact: 'Millions of computers damaged', lessons: 'This virus showed how a tiny piece of code could destroy an entire system with no way to recover data. Regular, tested backups stored separately from the main machine remain the single best defense against destructive malware.' },
    // 2000s
    { year: 2000, title: 'MafiaBoy DDoS', description: 'A 16-year-old launched DDoS attacks that took down Yahoo, eBay, CNN, and Amazon.', type: 'DDoS', impact: 'Major websites down for hours, millions in losses', lessons: 'Even a teenager with basic tools could take major sites offline, showing that scale of target does not equal security. Modern sites rely on DDoS mitigation services, traffic scrubbing, and auto-scaling infrastructure to absorb sudden traffic floods.' },
    { year: 2001, title: 'Code Red Worm', description: 'Exploited a vulnerability in IIS servers, defacing websites and spreading rapidly.', type: 'Worm', impact: '~360,000 servers infected, $2.6B in damages', lessons: 'It exploited a known, unpatched server flaw that had a fix available before the outbreak. Applying security patches promptly, especially on internet-facing servers, remains the cheapest and most effective protection available.' },
    { year: 2003, title: 'SQL Slammer', description: 'The fastest-spreading worm in history. Infected 75,000 systems in just 10 minutes.', type: 'Worm', impact: 'Internet slowdowns, $1B+ in damages', lessons: 'Slammer proved that unpatched database servers exposed directly to the internet are catastrophic risk. Never expose database ports publicly; place them behind firewalls and VPNs, and patch database software as urgently as any other critical system.' },
    { year: 2004, title: 'MyDoom', description: 'The fastest-spreading email worm ever. Caused massive email delays and network congestion.', type: 'Virus', impact: '~$38B in damages, millions infected', lessons: 'MyDoom relied entirely on users opening infected email attachments. Modern email filtering, attachment sandboxing, and basic user training on spotting suspicious emails cut this kind of spread dramatically.' },
    { year: 2007, title: 'Operation Aurora', description: 'Chinese hackers infiltrated Google and 30+ companies, stealing source code and IP.', type: 'APT', impact: 'Google China operations disrupted, major IP theft', lessons: 'This was a targeted, patient intrusion aimed at stealing intellectual property rather than causing visible damage. Companies now rely on zero-trust access models, strict code-repository monitoring, and behavioral anomaly detection to catch slow, quiet intrusions like this.' },
    { year: 2008, title: 'Conficker', description: 'A sophisticated worm that infected millions of Windows systems, forming one of the largest botnets ever.', type: 'Worm', impact: 'Millions infected, $9B+ in cleanup costs', lessons: 'Conficker combined a patched vulnerability with weak passwords and disabled security tools to spread. Strong, unique passwords, prompt patching, and never disabling built-in antivirus or update services close the exact gaps it used.' },
    { year: 2010, title: 'Stuxnet', description: 'The first known cyber weapon. Destroyed Iranian nuclear centrifuges, changing cyber warfare forever.', type: 'APT', impact: '1,000+ centrifuges destroyed, $100M+ in damage', lessons: 'Stuxnet showed that even air-gapped industrial systems can be reached through infected USB drives. Critical infrastructure now requires strict USB/media controls, network segmentation between IT and industrial control systems, and continuous monitoring for unusual equipment behavior.' },
    // 2010s
    { year: 2011, title: 'Sony PlayStation Hack', description: 'Personal data of 77 million users stolen. The PlayStation Network was down for 23 days.', type: 'Data Breach', impact: '77M accounts exposed, $171M in losses', lessons: 'Sensitive user data was stored without adequate encryption, magnifying the damage once attackers got in. Encrypting data at rest, tokenizing payment details, and having a rehearsed incident-response plan reduce both the breach impact and recovery time.' },
    { year: 2012, title: 'LinkedIn Breach', description: '6.5 million hashed passwords were stolen and leaked online.', type: 'Data Breach', impact: '6.5M passwords exposed, LinkedIn later fined', lessons: 'The passwords were hashed but with a weak, unsalted algorithm that was easy to crack. Modern systems must use salted, slow hashing algorithms like bcrypt or Argon2, and users should enable multi-factor authentication so a leaked password alone is not enough.' },
    { year: 2013, title: 'Yahoo Breach', description: 'The largest data breach ever. All 3 billion Yahoo accounts were compromised.', type: 'Data Breach', impact: '3 billion accounts exposed, $350M loss in sale value', lessons: 'The breach went undetected and undisclosed for years, deepening the harm to users. Continuous security monitoring, timely breach disclosure, and using a password manager with unique passwords per site all limit how far a single leak can spread.' },
    { year: 2014, title: 'Sony Pictures Hack', description: 'North Korean hackers leaked unreleased films, emails, and employee data.', type: 'APT', impact: 'Massive data leak, $80M+ in damages', lessons: 'Attackers moved freely through the internal network once inside, exposing everything from emails to unreleased films. Network segmentation, least-privilege access, and encrypting sensitive internal communications limit how much a single compromised account can expose.' },
    { year: 2015, title: 'Ukraine Power Grid Attack', description: 'Russian state-linked hackers remotely switched off substations, cutting power to roughly 230,000 people in the dead of winter. It was the first confirmed blackout ever caused by a cyberattack.', type: 'APT', impact: '~230,000 people left without power for hours', lessons: 'This attack is often overlooked next to bigger-name breaches, but it proved cyberattacks can physically cut off electricity to real people. Utilities now push for air-gapped backup controls, manual override capability, and strict monitoring of remote-access tools used by grid operators.' },
    { year: 2015, title: 'OPM Breach', description: '21.5 million US government employees and contractors had their records stolen.', type: 'Data Breach', impact: '21.5M records exposed, largest government breach', lessons: 'Outdated legacy systems and weak access controls let attackers quietly harvest highly sensitive background-check data. Regularly retiring legacy systems, enforcing multi-factor authentication for all privileged accounts, and auditing access logs are essential for organizations holding sensitive records.' },
    { year: 2016, title: 'Bangladesh Bank Heist', description: 'Hackers linked to North Korea infiltrated the central bank\'s systems and used the SWIFT payment network to attempt to steal nearly $1 billion, succeeding in transferring $81 million before a typo alerted investigators.', type: 'APT', impact: '$81 million stolen, one of the largest bank heists ever', lessons: 'One misspelled word in a fraudulent transfer request stopped what could have been a billion-dollar theft — this attack is far less famous than it should be. Banks now enforce stricter transaction verification, isolate SWIFT terminals from general networks, and require multi-person approval for large transfers.' },
    { year: 2016, title: 'DNC Email Leak', description: 'Russian hackers leaked Democratic National Committee emails during the US presidential election.', type: 'APT', impact: 'Political upheaval, major election interference', lessons: 'A convincing phishing email was enough to compromise high-value accounts. Verifying login-alert emails independently rather than clicking embedded links, and enforcing hardware security keys for sensitive accounts, defeats this kind of targeted phishing.' },
    { year: 2017, title: 'WannaCry', description: 'A global ransomware attack that crippled the UK\'s NHS and affected 150+ countries.', type: 'Ransomware', impact: '$4B+ in damages, 230,000+ computers infected', lessons: 'It spread using a Windows exploit for which a patch had already been released months earlier. Applying security updates promptly, disabling outdated protocols like SMBv1, and maintaining offline backups would have stopped this attack in its tracks.' },
    { year: 2017, title: 'NotPetya', description: 'The most destructive cyber attack in history. Cost shipping giant Maersk $300M alone.', type: 'Ransomware', impact: '~$10B total damages worldwide', lessons: 'It spread through a compromised software update from a trusted accounting vendor, showing supply-chain trust can be exploited. Verifying software update sources, segmenting networks, and maintaining tested offline backups are the core defenses against this style of attack.' },
    { year: 2018, title: 'Cambridge Analytica', description: '87 million Facebook users\' data was harvested for political targeting without consent.', type: 'Data Breach', impact: '87M users affected, $5B Facebook fine', lessons: 'A third-party app was allowed excessive access to friends\' data through loose platform permissions. Regularly reviewing and revoking third-party app permissions, and platforms limiting what data apps can access by default, prevent this kind of silent over-collection.' },
    { year: 2018, title: 'Marriott Breach', description: '500 million guest records were exposed in one of the largest hotel breaches ever.', type: 'Data Breach', impact: '500M records exposed, $123M fine', lessons: 'Attackers had quietly accessed the reservation database for years after a company acquisition, undetected. Thorough security audits during mergers and acquisitions, plus continuous monitoring for unusual database queries, catch intrusions like this far earlier.' },
    { year: 2019, title: 'Baltimore City Ransomware', description: 'The city of Baltimore refused to pay a roughly $76,000 ransom after a RobbinHood ransomware attack froze government systems, only to spend an estimated $18 million recovering email, payments, and property services.', type: 'Ransomware', impact: '$18M+ recovery cost against a $76,000 ransom demand', lessons: 'This is a favorite case study among security professionals because it shows how cheap an attack can be for criminals versus how expensive recovery is for victims. Regularly tested backups, network segmentation, and a rehearsed incident-response plan turn a ransomware attack from a citywide crisis into a manageable inconvenience.' },
    { year: 2019, title: 'Capital One Breach', description: 'A former AWS employee stole 106 million customer records from the bank.', type: 'Data Breach', impact: '106M records exposed, $80M fine', lessons: 'A misconfigured cloud firewall let an insider with prior cloud experience pull data directly from storage. Properly configuring cloud security groups, applying least-privilege access, and auditing cloud storage permissions regularly prevent this exact misconfiguration.' },
    // 2020s
    { year: 2020, title: 'SolarWinds', description: 'The largest software supply-chain attack. Russian hackers compromised 18,000+ customers through a backdoor.', type: 'Supply Chain', impact: '18,000+ organizations affected, $100M+ in cleanup', lessons: 'Malicious code was inserted directly into a trusted software update, infecting every customer who installed it. Software supply-chain verification, signed updates, and monitoring for unusual outbound traffic from trusted applications are now standard defenses.' },
    { year: 2021, title: 'Colonial Pipeline Ransomware', description: 'A ransomware attack forced the shutdown of a major US fuel pipeline, causing panic buying.', type: 'Ransomware', impact: 'Fuel supply disrupted, $4.4M ransom paid', lessons: 'A single compromised password without multi-factor authentication gave attackers a foothold into critical infrastructure. Enforcing multi-factor authentication on every remote access point, especially for critical infrastructure, remains the single biggest lesson here.' },
    { year: 2021, title: 'Log4j Vulnerability', description: 'A critical zero-day vulnerability in a popular logging library that affected millions of systems worldwide.', type: 'Other', impact: 'Millions of systems at risk, unprecedented response', lessons: 'A flaw buried deep in a widely used open-source library affected countless applications that depended on it. Maintaining a software bill of materials, tracking dependencies, and patching third-party libraries quickly are now essential practices for any organization.' },
    { year: 2022, title: 'Uber Breach', description: 'A teenager gained full access to Uber\'s internal systems and announced it on Twitter.', type: 'Data Breach', impact: 'Internal systems compromised, major reputational damage', lessons: 'A social-engineering trick convinced an employee to approve a fraudulent multi-factor login request. Training employees to reject unexpected MFA prompts, using number-matching or hardware keys instead of simple push approvals, closes this exact gap.' },
    { year: 2023, title: 'Clorox Ransomware', description: 'A ransomware attack caused $50+ million in losses and disrupted production for months.', type: 'Ransomware', impact: '$50M+ in losses, production disruptions', lessons: 'Operational technology and business networks were not fully separated, letting the attack disrupt actual manufacturing. Segmenting IT from operational systems and maintaining a tested disaster-recovery plan minimize how far a ransomware infection can spread into physical operations.' },
    { year: 2024, title: 'Change Healthcare Ransomware', description: 'The biggest healthcare hack in US history. Disrupted payments and patient care nationwide.', type: 'Ransomware', impact: '$872M impact, nationwide healthcare disruption', lessons: 'A single set of compromised credentials without multi-factor authentication brought down a system core to national healthcare payments. Given how much of healthcare now depends on a handful of processors, redundancy, MFA everywhere, and regular incident-response drills are non-negotiable.' },
    { year: 2025, title: 'Operation ENDGAME', description: 'The largest ever international operation against botnets and cybercriminal infrastructure.', type: 'Other', impact: 'Major botnet takedown, arrests across multiple countries', lessons: 'This was a rare case of defenders coordinating across countries to dismantle attacker infrastructure at scale. It is a reminder that keeping personal devices free of malware (via updates and reputable antivirus) also starves the botnets that criminal operations depend on.' },
    { year: 2025, title: 'Marks & Spencer Cyberattack', description: 'Attackers used social engineering against the retailer\'s IT service desk to reset credentials and gain entry, then deployed ransomware that crippled online orders, click-and-collect, and contactless payments for weeks.', type: 'Ransomware', impact: 'Roughly £300M profit hit, market value fell over £700M', lessons: 'The breach began not with a technical exploit but with attackers simply talking their way past a help desk employee. Verifying identity through multiple independent channels before any password reset, and training service-desk staff specifically to resist social engineering, closes this gap.' },
    { year: 2025, title: 'Jaguar Land Rover Cyberattack', description: 'A ransomware-style attack forced the UK\'s biggest carmaker to shut down its IT systems and halt production for five weeks, disrupting roughly 5,000 businesses in its supply chain and requiring a government-backed loan to stay afloat.', type: 'Ransomware', impact: '£1.9B total estimated cost, most damaging cyberattack in UK history', lessons: 'A single intrusion cascaded through tens of thousands of supply-chain jobs, showing how deeply manufacturing now depends on IT uptime. Isolating production networks from corporate IT, maintaining offline manufacturing fallback procedures, and carrying cyber insurance all reduce this kind of cascading damage.' },
    { year: 2026, title: 'Foxconn Ransomware Breach', description: 'The Nitrogen ransomware group claimed to have stolen 8 terabytes of data from Foxconn\'s North American factories, including schematics and project files tied to major clients like Apple, Dell, Google, and Nvidia.', type: 'Ransomware', impact: '8TB of sensitive data claimed stolen, major client exposure risk', lessons: 'Because Foxconn manufactures for so many large tech brands, one breach threatened to expose confidential designs from several companies at once. Strict data segregation between different clients\' projects, and requiring contract manufacturers to meet the same security bar as the brands they serve, limits this kind of blast radius.' }
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
// HELPER – Get Icon Class
// ============================================================
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
// RENDER TIMELINE – Dark Tides Style (Fixed)
// ============================================================
function renderTimeline(data) {
    console.log('Rendering timeline with', data.length, 'items'); // Debug log

    if (!data || data.length === 0) {
        timeline.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No attacks found</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        return;
    }

    try {
        let html = data.map((a, i) => {
            // Safe description split
            let desc = a.description || '';
            let sentences = desc.split(/\.\s+/).filter(s => s.length > 0);
            let descriptionHtml = '';
            if (sentences.length > 1) {
                descriptionHtml = `<ul class="description-list">
                    ${sentences.map(s => `<li>${s}.</li>`).join('')}
                </ul>`;
            } else {
                descriptionHtml = `<div class="description">${desc}</div>`;
            }

            return `
                <div class="timeline-item" data-type="${a.type || 'Other'}" style="animation-delay: ${i * 0.04}s">
                    <div class="badge-row">
                        <span class="badge-pill">${a.type || 'Unknown'}</span>
                        <span class="badge-year">${a.year || 'N/A'}</span>
                    </div>
                    <div class="title">${a.title || 'Untitled'}</div>
                    ${descriptionHtml}
                    <div class="impact"><strong>Impact:</strong> ${a.impact || 'Unknown'}</div>
                    <div class="expand-wrapper">
                        <div class="expand-inner">
                            <div class="lessons">
                                <div class="lessons-heading"><i class="fas fa-shield-halved"></i> How to stay protected</div>
                                <p>${a.lessons || ''}</p>
                            </div>
                        </div>
                    </div>
                    <button class="expand-toggle" type="button" aria-expanded="false">
                        <span>Read more</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="icon-type"><i class="fas fa-${getIconForType(a.type)}"></i></div>
                </div>
            `;
        }).join('');

        timeline.innerHTML = html;
    } catch (err) {
        console.error('Error rendering timeline:', err);
        timeline.innerHTML = `<div class="empty-state"><p>Error loading timeline. Check console for details.</p></div>`;
    }
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
    darkToggle.setAttribute('data-tooltip', darkMode ? 'Switch to light mode' : 'Switch to dark mode');
    darkToggle.setAttribute('aria-label', darkMode ? 'Toggle light mode' : 'Toggle dark mode');
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
const savedDark = localStorage.getItem('timeline-dark-mode');
if (savedDark !== null) {
    darkMode = savedDark === 'true';
    document.body.classList.toggle('light-mode', !darkMode);
    darkToggle.innerHTML = darkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    darkToggle.setAttribute('data-tooltip', darkMode ? 'Switch to light mode' : 'Switch to dark mode');
    darkToggle.setAttribute('aria-label', darkMode ? 'Toggle light mode' : 'Toggle dark mode');
}

renderTimeline(attacks);
updateStats(attacks);
updateChart(attacks);

// ============================================================
// (Starfield particle canvas removed – replaced by CSS aurora background)
// ============================================================

// ============================================================
// MOUSE PARALLAX – Hero Section
// ============================================================
const heroContent = document.querySelector('.hero-content');
const heroGlow = document.querySelector('.hero-glow');

document.addEventListener('mousemove', (e) => {
    if (!heroContent || !heroGlow) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    heroContent.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    heroGlow.style.transform = `translate(${x * 0.8}px, ${y * 0.8}px)`;
});

// ============================================================
// SCROLL REVEAL
// ============================================================
const revealElements = document.querySelectorAll('.timeline-item, .stat-item, .chart-container');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// ============================================================
// SMOOTH SCROLL INDICATOR – Hide after first scroll
// ============================================================
const scrollIndicator = document.querySelector('.hero-scroll');
let scrollHidden = false;

window.addEventListener('scroll', () => {
    if (!scrollHidden && window.scrollY > 100) {
        scrollHidden = true;
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.transition = 'opacity 0.6s ease';
        setTimeout(() => {
            scrollIndicator.style.display = 'none';
        }, 600);
    }
});

// ============================================================
// SCROLL PROGRESS BAR
// ============================================================
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
});

// ============================================================
// SEARCH PLACEHOLDER – Show Ctrl+K Hint
// ============================================================
searchInput.placeholder = 'Search attacks... (Ctrl+K)';

console.log('Cyber Attack Timeline loaded – enjoy!');

// ============================================================
// CARD TILT + SPOTLIGHT + CLICK PULSE (native, rAF-throttled)
// ============================================================
(() => {
    let ticking = false;
    let activeCard = null;
    let pointer = { x: 0, y: 0 };

    function applyTilt() {
        ticking = false;
        if (!activeCard) return;
        const rect = activeCard.getBoundingClientRect();
        const px = (pointer.x - rect.left) / rect.width;
        const py = (pointer.y - rect.top) / rect.height;
        const rx = (px - 0.5) * 10;
        const ry = (py - 0.5) * -10;
        activeCard.style.setProperty('--rx', `${rx}deg`);
        activeCard.style.setProperty('--ry', `${ry}deg`);
        activeCard.style.setProperty('--mx', `${px * 100}%`);
        activeCard.style.setProperty('--my', `${py * 100}%`);
    }

    timeline.addEventListener('pointermove', (e) => {
        const card = e.target.closest('.timeline-item');
        if (!card) return;
        activeCard = card;
        if (!card.classList.contains('tilting')) card.classList.add('tilting');
        pointer.x = e.clientX;
        pointer.y = e.clientY;
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(applyTilt);
        }
    });

    timeline.addEventListener('pointerleave', (e) => {
        const card = e.target.closest('.timeline-item');
        if (!card) return;
        card.classList.remove('tilting');
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
        if (activeCard === card) activeCard = null;
    }, true);

    timeline.addEventListener('click', (e) => {
        const card = e.target.closest('.timeline-item');
        if (!card) return;
        card.classList.remove('pulse');
        void card.offsetWidth; // restart animation
        card.classList.add('pulse');

        const toggleBtn = e.target.closest('.expand-toggle');
        const isExpanded = card.classList.contains('expanded');
        if (toggleBtn || !e.target.closest('a, button:not(.expand-toggle)')) {
            card.classList.toggle('expanded', !isExpanded);
            const btn = card.querySelector('.expand-toggle');
            if (btn) btn.setAttribute('aria-expanded', String(!isExpanded));
        }
    });
})();