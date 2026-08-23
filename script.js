// ============================================================
// LENIS SMOOTH SCROLL + GSAP SYNC
// ============================================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenisInstance = null;

(() => {
    if (typeof Lenis === 'undefined' || prefersReducedMotion) return;

    lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
    });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        lenisInstance.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenisInstance.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
    } else {
        function raf(time) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }
})();

// ============================================================
// DATA – Cyber Attacks (expanded)
// ============================================================
const attacks = [
    // 1980s
    { year: 1988, title: 'Morris Worm', description: 'The first major internet worm, created by Robert Morris. Infected about 10% of all computers connected to the internet.', story: 'Robert Morris, a Cornell graduate student, wrote it as an experiment to gauge the size of the internet, not to cause harm. A bug in his code made it replicate far more aggressively than intended, and because most machines ran identical, unpatched software, it spread almost everywhere at once. The fallout directly led to the creation of the world\'s first Computer Emergency Response Team.', type: 'Worm', impact: '~6,000 computers, $10M+ in damages', lessons: 'A single self-replicating program brought the early internet to its knees because almost nothing was patched or isolated. Today the same lesson holds: keep systems updated automatically, segment networks so one infected machine cannot flood everything else, and rate-limit unusual outbound connections.' },
    { year: 1989, title: 'AIDS Trojan', description: 'The first ransomware. Distributed via floppy disks, it demanded $189 to unlock files.', story: 'Dr. Joseph Popp mailed 20,000 infected floppy disks disguised as an AIDS research survey to conference attendees worldwide. Once installed, the program silently counted reboots before encrypting file names and demanding payment mailed to a PO box. It was crude by today\'s standards, but it invented the entire ransomware business model still used now.', type: 'Ransomware', impact: 'First ever ransomware, $189 ransom', lessons: 'It spread through a mailed floppy disk, proving that any new distribution channel can be weaponized. Never run software from unsolicited physical or digital media, and keep offline backups so a locked drive is never a total loss.' },
    // 1990s
    { year: 1999, title: 'Melissa Virus', description: 'The first major email virus. Spread via infected Word documents, causing massive email slowdowns.', story: 'David L. Smith built Melissa to spread through Microsoft Word\'s macro feature, hiding inside a document promising passwords to adult websites. Once opened, it silently emailed itself to the first 50 contacts in the victim\'s address book, which is exactly why trust in familiar senders made it spread so fast. Corporate email systems buckled under the sheer volume, forcing many companies offline for days.', type: 'Virus', impact: '$80M in damages, thousands infected', lessons: 'Melissa spread because people trusted attachments from known contacts without a second thought. Disable auto-executing macros in Office documents by default, and treat any unexpected attachment — even from a familiar sender — with suspicion.' },
    { year: 1999, title: 'Chernobyl Virus', description: 'A destructive virus that overwrote the first megabyte of hard drives, making systems unbootable.', story: 'A student built it to prove that antivirus software of the era was inadequate. It hid inside pirated software and games, lying dormant until a trigger date — usually April 26, the anniversary of the Chernobyl disaster — then overwrote critical boot data. Because the payload activated all at once, hundreds of thousands of machines died on the very same day.', type: 'Virus', impact: 'Millions of computers damaged', lessons: 'This virus showed how a tiny piece of code could destroy an entire system with no way to recover data. Regular, tested backups stored separately from the main machine remain the single best defense against destructive malware.' },
    // 2000s
    { year: 2000, title: 'MafiaBoy DDoS', description: 'A 16-year-old launched DDoS attacks that took down Yahoo, eBay, CNN, and Amazon.', story: 'A Montreal teenager wanted bragging rights on hacking forums, so he rented a botnet of already-compromised university servers to flood targets with traffic. Because major commercial sites had never faced serious DDoS attacks before, none of them had defenses ready. His arrest made headlines and pushed companies to finally start investing in DDoS protection.', type: 'DDoS', impact: 'Major websites down for hours, millions in losses', lessons: 'Even a teenager with basic tools could take major sites offline, showing that scale of target does not equal security. Modern sites rely on DDoS mitigation services, traffic scrubbing, and auto-scaling infrastructure to absorb sudden traffic floods.' },
    { year: 2001, title: 'Code Red Worm', description: 'Exploited a vulnerability in IIS servers, defacing websites and spreading rapidly.', story: 'The worm exploited a buffer-overflow bug in Microsoft\'s IIS web server software that had already been patched, but almost nobody had applied the update. It automatically scanned for other vulnerable servers, defaced their websites, and later used infected machines to attack the White House website. It became one of the clearest early lessons that patches only work if they are actually installed.', type: 'Worm', impact: '~360,000 servers infected, $2.6B in damages', lessons: 'It exploited a known, unpatched server flaw that had a fix available before the outbreak. Applying security patches promptly, especially on internet-facing servers, remains the cheapest and most effective protection available.' },
    { year: 2003, title: 'SQL Slammer', description: 'The fastest-spreading worm in history. Infected 75,000 systems in just 10 minutes.', story: 'A single tiny network packet exploiting a known Microsoft SQL Server bug was enough to fully compromise a machine and make it start blasting the same packet at random IP addresses. Because the exploit fit inside one packet, it spread faster than any human could react, doubling its infected population every few seconds. Airline check-in systems, ATMs, and even parts of South Korea\'s internet went down within the hour.', type: 'Worm', impact: 'Internet slowdowns, $1B+ in damages', lessons: 'Slammer proved that unpatched database servers exposed directly to the internet are catastrophic risk. Never expose database ports publicly; place them behind firewalls and VPNs, and patch database software as urgently as any other critical system.' },
    { year: 2004, title: 'MyDoom', description: 'The fastest-spreading email worm ever. Caused massive email delays and network congestion.', story: 'Many researchers believe MyDoom was released as a paid tool for spammers rather than pure vandalism, with infected machines later used to send junk email and launch DDoS attacks. It spread through attachments disguised as bounced messages, tricking people into opening what looked like an error notice. At its peak it was responsible for roughly one in every twelve emails sent worldwide.', type: 'Virus', impact: '~$38B in damages, millions infected', lessons: 'MyDoom relied entirely on users opening infected email attachments. Modern email filtering, attachment sandboxing, and basic user training on spotting suspicious emails cut this kind of spread dramatically.' },
    { year: 2007, title: 'Operation Aurora', description: 'Chinese hackers infiltrated Google and 30+ companies, stealing source code and IP.', story: 'State-linked hackers targeted Google and dozens of other tech and defense companies specifically to steal source code and spy on human rights activists\' email accounts. They got in through a previously unknown flaw in a web browser, delivered via a link sent to a handful of employees. Google\'s decision to publicly disclose the attack, and partially withdraw from China as a result, was almost unheard of for a company at the time.', type: 'APT', impact: 'Google China operations disrupted, major IP theft', lessons: 'This was a targeted, patient intrusion aimed at stealing intellectual property rather than causing visible damage. Companies now rely on zero-trust access models, strict code-repository monitoring, and behavioral anomaly detection to catch slow, quiet intrusions like this.' },
    { year: 2008, title: 'Conficker', description: 'A sophisticated worm that infected millions of Windows systems, forming one of the largest botnets ever.', story: 'Conficker exploited a Windows networking flaw to spread automatically between machines on the same network, then used weak or default admin passwords to jump even further. Its authors built in code to disable Windows Update and antivirus tools on infected machines so victims couldn\'t easily fix themselves. Despite infecting millions of PCs, its true purpose was never fully confirmed, and no one was ever definitively identified as its creator.', type: 'Worm', impact: 'Millions infected, $9B+ in cleanup costs', lessons: 'Conficker combined a patched vulnerability with weak passwords and disabled security tools to spread. Strong, unique passwords, prompt patching, and never disabling built-in antivirus or update services close the exact gaps it used.' },
    { year: 2010, title: 'Stuxnet', description: 'The first known cyber weapon. Destroyed Iranian nuclear centrifuges, changing cyber warfare forever.', story: 'Believed to be a joint state operation, Stuxnet was built specifically to sabotage Iran\'s uranium enrichment program without anyone noticing for as long as possible. It spread through infected USB drives to jump the "air gap" separating the nuclear facility from the internet, then subtly sped up and slowed down centrifuges until they physically tore themselves apart, all while feeding false "everything normal" readings to human operators. The decision to use malware as a physical weapon, rather than airstrikes, marked the start of modern cyberwarfare.', type: 'APT', impact: '1,000+ centrifuges destroyed, $100M+ in damage', lessons: 'Stuxnet showed that even air-gapped industrial systems can be reached through infected USB drives. Critical infrastructure now requires strict USB/media controls, network segmentation between IT and industrial control systems, and continuous monitoring for unusual equipment behavior.' },
    // 2010s
    { year: 2011, title: 'Sony PlayStation Hack', description: 'Personal data of 77 million users stolen. The PlayStation Network was down for 23 days.', story: 'Hackers broke into Sony\'s PlayStation Network largely to embarrass the company after it sued a well-known console hacker, but ended up walking away with tens of millions of users\' personal and card details. Sony\'s decision to stay silent for nearly a week before disclosing the breach drew heavy criticism and regulatory scrutiny. The 23-day network outage remains one of the longest in gaming history.', type: 'Data Breach', impact: '77M accounts exposed, $171M in losses', lessons: 'Sensitive user data was stored without adequate encryption, magnifying the damage once attackers got in. Encrypting data at rest, tokenizing payment details, and having a rehearsed incident-response plan reduce both the breach impact and recovery time.' },
    { year: 2012, title: 'LinkedIn Breach', description: '6.5 million hashed passwords were stolen and leaked online.', story: 'An attacker exfiltrated LinkedIn\'s password database and posted the hashes to a hacking forum, where they were cracked within days because LinkedIn had used an outdated, unsalted hashing method. LinkedIn initially confirmed only 6.5 million leaked passwords; the true number surfaced years later as over 100 million. The delayed, understated disclosure became a textbook example of what not to do after a breach.', type: 'Data Breach', impact: '6.5M passwords exposed, LinkedIn later fined', lessons: 'The passwords were hashed but with a weak, unsalted algorithm that was easy to crack. Modern systems must use salted, slow hashing algorithms like bcrypt or Argon2, and users should enable multi-factor authentication so a leaked password alone is not enough.' },
    { year: 2013, title: 'Yahoo Breach', description: 'The largest data breach ever. All 3 billion Yahoo accounts were compromised.', story: 'State-sponsored hackers compromised Yahoo\'s entire user database through a spear-phishing email sent to a single employee. Yahoo did not publicly disclose the breach for three years, and even then understated its scope before eventually admitting all 3 billion accounts were affected. The breach was revealed during Yahoo\'s acquisition talks with Verizon, cutting $350 million off the final sale price.', type: 'Data Breach', impact: '3 billion accounts exposed, $350M loss in sale value', lessons: 'The breach went undetected and undisclosed for years, deepening the harm to users. Continuous security monitoring, timely breach disclosure, and using a password manager with unique passwords per site all limit how far a single leak can spread.' },
    { year: 2014, title: 'Sony Pictures Hack', description: 'North Korean hackers leaked unreleased films, emails, and employee data.', story: 'State hackers targeted Sony Pictures specifically to punish the studio for producing a comedy film about assassinating their country\'s leader. They wiped data across Sony\'s network and leaked unreleased films, embarrassing executive emails, and employee salary details to pressure the studio into pulling the film. Sony\'s decision to briefly cancel the theatrical release, then reverse course days later, became a landmark case of a cyberattack directly shaping a company\'s business decisions.', type: 'APT', impact: 'Massive data leak, $80M+ in damages', lessons: 'Attackers moved freely through the internal network once inside, exposing everything from emails to unreleased films. Network segmentation, least-privilege access, and encrypting sensitive internal communications limit how much a single compromised account can expose.' },
    { year: 2015, title: 'Ukraine Power Grid Attack', description: 'Russian state-linked hackers remotely switched off substations, cutting power to roughly 230,000 people in the dead of winter. It was the first confirmed blackout ever caused by a cyberattack.', story: 'The attackers spent months quietly inside Ukrainian power company networks before flipping breaker switches remotely during a coordinated, multi-substation attack. They also disabled backup systems and jammed customer service phone lines so operators couldn\'t quickly diagnose or report the outage. It proved, for the first time, that a cyberattack alone could cut off electricity to real homes in winter.', type: 'APT', impact: '~230,000 people left without power for hours', lessons: 'This attack is often overlooked next to bigger-name breaches, but it proved cyberattacks can physically cut off electricity to real people. Utilities now push for air-gapped backup controls, manual override capability, and strict monitoring of remote-access tools used by grid operators.' },
    { year: 2015, title: 'OPM Breach', description: '21.5 million US government employees and contractors had their records stolen.', story: 'State-linked hackers targeted the US Office of Personnel Management specifically to build a database of government employees for future espionage and recruitment targeting. They exploited outdated systems and a lack of multi-factor authentication to sit undetected inside the network for nearly a year, quietly copying background-check files containing fingerprints and security-clearance details. The scale of the breach forced a fundamental rethink of how the US government protects employee data.', type: 'Data Breach', impact: '21.5M records exposed, largest government breach', lessons: 'Outdated legacy systems and weak access controls let attackers quietly harvest highly sensitive background-check data. Regularly retiring legacy systems, enforcing multi-factor authentication for all privileged accounts, and auditing access logs are essential for organizations holding sensitive records.' },
    { year: 2016, title: 'Bangladesh Bank Heist', description: 'Hackers linked to North Korea infiltrated the central bank\'s systems and used the SWIFT payment network to attempt to steal nearly $1 billion, succeeding in transferring $81 million before a typo alerted investigators.', story: 'The hackers spent months inside Bangladesh Bank\'s network studying how it used the SWIFT international payment system before attempting to transfer nearly $1 billion to accounts abroad. Most transfers were blocked, but a single misspelled word in one request was what actually tipped off a routing bank and stopped the rest. The stolen $81 million was laundered through casinos and has never been fully recovered.', type: 'APT', impact: '$81 million stolen, one of the largest bank heists ever', lessons: 'One misspelled word in a fraudulent transfer request stopped what could have been a billion-dollar theft — this attack is far less famous than it should be. Banks now enforce stricter transaction verification, isolate SWIFT terminals from general networks, and require multi-person approval for large transfers.' },
    { year: 2016, title: 'DNC Email Leak', description: 'Russian hackers leaked Democratic National Committee emails during the US presidential election.', story: 'Hackers sent a disguised password-reset email to a senior campaign staffer, who clicked the link and unknowingly handed over his real credentials. From there, attackers spent months quietly copying internal emails before releasing them publicly just before the election. The incident turned a technical phishing attack into one of the most consequential political events of the decade.', type: 'APT', impact: 'Political upheaval, major election interference', lessons: 'A convincing phishing email was enough to compromise high-value accounts. Verifying login-alert emails independently rather than clicking embedded links, and enforcing hardware security keys for sensitive accounts, defeats this kind of targeted phishing.' },
    { year: 2017, title: 'WannaCry', description: 'A global ransomware attack that crippled the UK\'s NHS and affected 150+ countries.', story: 'WannaCry combined ransomware with a leaked government hacking tool, letting it spread automatically between machines on the same network without anyone clicking anything. It hit hospitals, telecoms, and factories in over 150 countries within a single weekend, forcing UK hospitals to turn away patients. A security researcher accidentally found and activated a hidden "kill switch" domain in the code, which is the main reason the outbreak didn\'t spread even further.', type: 'Ransomware', impact: '$4B+ in damages, 230,000+ computers infected', lessons: 'It spread using a Windows exploit for which a patch had already been released months earlier. Applying security updates promptly, disabling outdated protocols like SMBv1, and maintaining offline backups would have stopped this attack in its tracks.' },
    { year: 2017, title: 'NotPetya', description: 'The most destructive cyber attack in history. Cost shipping giant Maersk $300M alone.', story: 'State hackers disguised NotPetya as ransomware, but its real purpose was pure destruction — it was seeded through a hijacked software update and then spread uncontrollably to any connected network worldwide. Companies with no direct connection to the original target were crippled simply because a single infected laptop existed somewhere on their global network. It remains the costliest single cyberattack in history specifically because it was never designed to be undone.', type: 'Ransomware', impact: '~$10B total damages worldwide', lessons: 'It spread through a compromised software update from a trusted accounting vendor, showing supply-chain trust can be exploited. Verifying software update sources, segmenting networks, and maintaining tested offline backups are the core defenses against this style of attack.' },
    { year: 2018, title: 'Cambridge Analytica', description: '87 million Facebook users\' data was harvested for political targeting without consent.', story: 'A researcher built a personality-quiz app that, thanks to loose platform rules at the time, could harvest data not just from people who took the quiz but from all of their friends too. That data was then sold on and used to build psychological profiles for targeted political advertising. The scandal became the defining moment that pushed lawmakers worldwide toward stricter data-privacy regulation.', type: 'Data Breach', impact: '87M users affected, $5B Facebook fine', lessons: 'A third-party app was allowed excessive access to friends\' data through loose platform permissions. Regularly reviewing and revoking third-party app permissions, and platforms limiting what data apps can access by default, prevent this kind of silent over-collection.' },
    { year: 2018, title: 'Marriott Breach', description: '500 million guest records were exposed in one of the largest hotel breaches ever.', story: 'The breach actually began years earlier inside a hotel chain\'s reservation system, before Marriott acquired it and unknowingly inherited the compromised network. Attackers quietly copied guest records including passport numbers for years without detection. Marriott\'s decision to keep running the vulnerable legacy system post-acquisition, rather than fully auditing and replacing it, is widely cited as the core mistake.', type: 'Data Breach', impact: '500M records exposed, $123M fine', lessons: 'Attackers had quietly accessed the reservation database for years after a company acquisition, undetected. Thorough security audits during mergers and acquisitions, plus continuous monitoring for unusual database queries, catch intrusions like this far earlier.' },
    { year: 2019, title: 'Baltimore City Ransomware', description: 'The city of Baltimore refused to pay a roughly $76,000 ransom after a RobbinHood ransomware attack froze government systems, only to spend an estimated $18 million recovering email, payments, and property services.', story: 'Attackers exploited an unpatched Windows vulnerability to lock down virtually every city computer system at once, from email to property tax payments. City officials made the deliberate decision to refuse the ransom on principle, partly following FBI guidance against paying criminals. That decision ended up costing the city roughly $18 million in recovery and lost revenue, a number regularly cited in the ongoing debate over whether ransoms should ever be paid.', type: 'Ransomware', impact: '$18M+ recovery cost against a $76,000 ransom demand', lessons: 'This is a favorite case study among security professionals because it shows how cheap an attack can be for criminals versus how expensive recovery is for victims. Regularly tested backups, network segmentation, and a rehearsed incident-response plan turn a ransomware attack from a citywide crisis into a manageable inconvenience.' },
    { year: 2019, title: 'Capital One Breach', description: 'A former AWS employee stole 106 million customer records from the bank.', story: 'A former cloud employee exploited a misconfigured firewall in Capital One\'s cloud infrastructure that she had inside knowledge of from her previous job. She used the flaw to trick the server into revealing security credentials, then used those to pull data directly from cloud storage. She was caught only after boasting about the hack publicly online, highlighting how even accidental self-disclosure remains a common way attackers get caught.', type: 'Data Breach', impact: '106M records exposed, $80M fine', lessons: 'A misconfigured cloud firewall let an insider with prior cloud experience pull data directly from storage. Properly configuring cloud security groups, applying least-privilege access, and auditing cloud storage permissions regularly prevent this exact misconfiguration.' },
    // 2020s
    { year: 2020, title: 'SolarWinds', description: 'The largest software supply-chain attack. Russian hackers compromised 18,000+ customers through a backdoor.', story: 'State hackers compromised SolarWinds\' software build system and quietly inserted malicious code into a legitimate update for its network-monitoring product. Roughly 18,000 organizations installed the tainted update without any way to know it was compromised, since it was digitally signed and delivered through the company\'s official channel. The attack went undetected for months and forced a fundamental rethink of how much organizations should trust their software supply chain.', type: 'Supply Chain', impact: '18,000+ organizations affected, $100M+ in cleanup', lessons: 'Malicious code was inserted directly into a trusted software update, infecting every customer who installed it. Software supply-chain verification, signed updates, and monitoring for unusual outbound traffic from trusted applications are now standard defenses.' },
    { year: 2021, title: 'Colonial Pipeline Ransomware', description: 'A ransomware attack forced the shutdown of a major US fuel pipeline, causing panic buying.', story: 'A ransomware group got in through a single compromised VPN password that had no multi-factor authentication and appeared to be reused from a previous, unrelated breach. Colonial Pipeline made the decision to proactively shut down the entire pipeline themselves, even though the ransomware had only hit business IT systems, out of caution about it spreading further. That shutdown caused fuel shortages and panic buying across the US East Coast, and the company ultimately paid a $4.4 million ransom, part of which was later recovered.', type: 'Ransomware', impact: 'Fuel supply disrupted, $4.4M ransom paid', lessons: 'A single compromised password without multi-factor authentication gave attackers a foothold into critical infrastructure. Enforcing multi-factor authentication on every remote access point, especially for critical infrastructure, remains the single biggest lesson here.' },
    { year: 2021, title: 'Log4j Vulnerability', description: 'A critical zero-day vulnerability in a popular logging library that affected millions of systems worldwide.', story: 'A researcher discovered that Log4j, a logging tool embedded inside an enormous share of the world\'s Java software, could be tricked into running attacker-supplied code with nothing more than a specially crafted text string. Because Log4j was buried so many layers deep inside other software, many organizations didn\'t even know they were using it, let alone that it needed patching. The scramble to find and fix it became one of the largest coordinated security responses in internet history.', type: 'Other', impact: 'Millions of systems at risk, unprecedented response', lessons: 'A flaw buried deep in a widely used open-source library affected countless applications that depended on it. Maintaining a software bill of materials, tracking dependencies, and patching third-party libraries quickly are now essential practices for any organization.' },
    { year: 2022, title: 'Uber Breach', description: 'A teenager gained full access to Uber\'s internal systems and announced it on Twitter.', story: 'An 18-year-old attacker used social engineering, repeatedly messaging an Uber contractor pretending to be IT support, until the exhausted employee finally approved a multi-factor login request just to make the notifications stop. Once inside, the attacker found admin credentials for critical internal tools left in a shared file and posted screenshots on Uber\'s own internal chat announcing the breach. The incident is now a standard example of how MFA fatigue attacks can bypass even strong technical defenses.', type: 'Data Breach', impact: 'Internal systems compromised, major reputational damage', lessons: 'A social-engineering trick convinced an employee to approve a fraudulent multi-factor login request. Training employees to reject unexpected MFA prompts, using number-matching or hardware keys instead of simple push approvals, closes this exact gap.' },
    { year: 2023, title: 'Clorox Ransomware', description: 'A ransomware attack caused $50+ million in losses and disrupted production for months.', story: 'Attackers used social engineering against Clorox\'s IT help desk to reset an employee\'s credentials and gain a foothold into the network. Because IT and manufacturing systems weren\'t fully separated, the resulting ransomware attack didn\'t just steal data, it forced factories to fall back to slower manual processes, causing real product shortages on store shelves for months. The attack is regularly cited as proof that cyberattacks can now directly disrupt physical, everyday goods.', type: 'Ransomware', impact: '$50M+ in losses, production disruptions', lessons: 'Operational technology and business networks were not fully separated, letting the attack disrupt actual manufacturing. Segmenting IT from operational systems and maintaining a tested disaster-recovery plan minimize how far a ransomware infection can spread into physical operations.' },
    { year: 2024, title: 'Change Healthcare Ransomware', description: 'The biggest healthcare hack in US history. Disrupted payments and patient care nationwide.', story: 'A ransomware group got in through a remote access account that had no multi-factor authentication enabled. Because Change Healthcare processes a huge share of US medical billing and prescriptions, the resulting outage rippled across the entire healthcare system, leaving pharmacies unable to process claims and some patients unable to get medication. The company\'s decision to pay the reported ransom drew heavy criticism, especially after some stolen data leaked anyway.', type: 'Ransomware', impact: '$872M impact, nationwide healthcare disruption', lessons: 'A single set of compromised credentials without multi-factor authentication brought down a system core to national healthcare payments. Given how much of healthcare now depends on a handful of processors, redundancy, MFA everywhere, and regular incident-response drills are non-negotiable.' },
    { year: 2025, title: 'Operation ENDGAME', description: 'The largest ever international operation against botnets and cybercriminal infrastructure.', story: 'Rather than reacting to a single attack, this was a proactive, coordinated law enforcement decision across multiple countries to systematically dismantle the infrastructure ransomware gangs rely on to spread. Investigators seized servers, froze cryptocurrency, and identified operators across the globe in one synchronized operation instead of piecemeal takedowns. It represents a shift toward treating cybercrime infrastructure as a target in its own right, not just individual attacks.', type: 'Other', impact: 'Major botnet takedown, arrests across multiple countries', lessons: 'This was a rare case of defenders coordinating across countries to dismantle attacker infrastructure at scale. It is a reminder that keeping personal devices free of malware (via updates and reputable antivirus) also starves the botnets that criminal operations depend on.' },
    { year: 2025, title: 'Marks & Spencer Cyberattack', description: 'Attackers used social engineering against the retailer\'s IT service desk to reset credentials and gain entry, then deployed ransomware that crippled online orders, click-and-collect, and contactless payments for weeks.', story: 'Attackers called the retailer\'s IT help desk pretending to be a locked-out employee and talked their way into a password reset. That single social-engineering call gave them enough access to eventually deploy ransomware across core systems. The decision to take systems offline to contain the damage meant weeks without online orders, a trade-off between short-term sales loss and preventing a far larger breach.', type: 'Ransomware', impact: 'Roughly £300M profit hit, market value fell over £700M', lessons: 'The breach began not with a technical exploit but with attackers simply talking their way past a help desk employee. Verifying identity through multiple independent channels before any password reset, and training service-desk staff specifically to resist social engineering, closes this gap.' },
    { year: 2025, title: 'Jaguar Land Rover Cyberattack', description: 'A ransomware-style attack forced the UK\'s biggest carmaker to shut down its IT systems and halt production for five weeks, disrupting roughly 5,000 businesses in its supply chain and requiring a government-backed loan to stay afloat.', story: 'A financially motivated criminal group broke into Jaguar Land Rover\'s network, and upon detection, JLR made the drastic decision to proactively shut down its own IT and manufacturing systems worldwide to contain the threat. That decision, while limiting the breach, meant factories couldn\'t build cars for five weeks, since modern car manufacturing is almost entirely computer-coordinated. The scale of the shutdown eventually required a UK government-backed loan just to keep JLR\'s supply chain of smaller businesses from collapsing.', type: 'Ransomware', impact: '£1.9B total estimated cost, most damaging cyberattack in UK history', lessons: 'A single intrusion cascaded through tens of thousands of supply-chain jobs, showing how deeply manufacturing now depends on IT uptime. Isolating production networks from corporate IT, maintaining offline manufacturing fallback procedures, and carrying cyber insurance all reduce this kind of cascading damage.' },
    { year: 2026, title: 'Foxconn Ransomware Breach', description: 'The Nitrogen ransomware group claimed to have stolen 8 terabytes of data from Foxconn\'s North American factories, including schematics and project files tied to major clients like Apple, Dell, Google, and Nvidia.', story: 'The ransomware group claims to have breached Foxconn\'s North American factory networks and stolen terabytes of manufacturing data tied to major clients rather than just Foxconn\'s own information. Because contract manufacturers like Foxconn build products for many different tech companies at once, a single breach risks exposing confidential designs from several unrelated brands simultaneously. The incident is still unfolding, but it highlights how supply-chain manufacturers have become high-value targets precisely because of who they build for.', type: 'Ransomware', impact: '8TB of sensitive data claimed stolen, major client exposure risk', lessons: 'Because Foxconn manufactures for so many large tech brands, one breach threatened to expose confidential designs from several companies at once. Strict data segregation between different clients\' projects, and requiring contract manufacturers to meet the same security bar as the brands they serve, limits this kind of blast radius.' }
];

const faqs = [
    { q: 'Do I need to be "techy" to understand any of this?', a: 'Not at all — that was the whole point of building it this way. Every entry is written in plain language on purpose, no jargon walls. If a term trips you up, that\'s a sign to Google it, not a sign this site isn\'t for you.' },
    { q: 'Why only 32 attacks? What about [insert huge breach here]?', a: 'Honestly, there are hundreds of attacks I could have added. I picked the ones that either changed how the industry thinks about security, or are just genuinely interesting stories to learn from — not an attempt to be exhaustive. If there\'s one you think deserves a spot, I\'m always open to hearing about it.' },
    { q: 'Am I actually a target? I\'m not a bank or a hospital.', a: 'Yes, more than you\'d think. Most attackers aren\'t hunting for one specific "important" victim — they\'re running the same phishing email or credential-stuffing script against millions of random people at once, and taking whoever bites. You don\'t need to be famous to be worth attacking; you just need to be reachable.' },
    { q: 'Does this site track me or sell my data?', a: 'No. There\'s no backend, no analytics script, no account system, and nothing about you leaves your browser. Your search history, filters, and theme preference are stored locally on your own device and nowhere else. I built a cybersecurity site — it would be a little embarrassing if it didn\'t practice what it preaches.' },
    { q: 'I keep hearing "MFA" everywhere. Is it actually that important?', a: 'Genuinely, yes — it\'s the closest thing security has to a cheat code. A stolen password by itself becomes mostly useless if the attacker still needs a code from your phone. Several attacks on this timeline, like Colonial Pipeline, happened specifically because MFA wasn\'t turned on somewhere it should have been.' },
    { q: 'Where do the facts on each attack actually come from?', a: 'I research each incident from publicly reported coverage, then write the summary and "why it happened" story myself, in my own words. Nothing here is copy-pasted from an article — think of it as my own notes, cleaned up and made presentable.' },
    { q: 'I\'m a total beginner — where should I even start learning?', a: 'Start with the oldest attacks on this timeline and read forward. Early incidents like the Morris Worm or Melissa Virus are simple enough to fully understand in a few minutes, and they build the foundation for why later, more complex attacks worked. Then go read the "Helpful tips" section below — half the battle is just habits, not technical skill.' },
    { q: 'What\'s one thing you wish you knew when you started learning this?', a: 'That you don\'t need to understand everything at once. I spent months feeling behind because I didn\'t know every acronym. Turns out most of security is a handful of repeating patterns — phishing, weak passwords, unpatched software, misplaced trust — dressed up differently each time. Once that clicked, everything else got a lot easier to follow.' }
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

// ============================================================
// CUSTOM ANIMATED DROPDOWNS (Decade / Type)
// Syncs with the hidden native <select> so existing filter
// logic (decadeFilter.value / 'change' listeners) keeps working.
// ============================================================
function initCustomSelect(customId, selectEl) {
    const root = document.getElementById(customId);
    if (!root || !selectEl) return;
    const trigger = root.querySelector('.custom-select-trigger');
    const valueEl = trigger.querySelector('.custom-select-value');
    const panel = root.querySelector('.custom-select-panel');

    panel.innerHTML = Array.from(selectEl.options).map(opt => `
        <li class="custom-select-option${opt.selected ? ' selected' : ''}" role="option" data-value="${opt.value}" aria-selected="${opt.selected}">
            <span>${opt.textContent}</span>
            <i class="fas fa-check check-icon"></i>
        </li>
    `).join('');

    function close() {
        root.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
    }
    function open() {
        document.querySelectorAll('.custom-select.open').forEach(el => { if (el !== root) el.classList.remove('open'); });
        root.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
    }

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        root.classList.contains('open') ? close() : open();
    });

    panel.addEventListener('click', (e) => {
        const opt = e.target.closest('.custom-select-option');
        if (!opt) return;
        selectEl.value = opt.dataset.value;
        selectEl.dispatchEvent(new Event('change'));
        valueEl.textContent = opt.querySelector('span').textContent;
        panel.querySelectorAll('.custom-select-option').forEach(o => {
            const isSel = o === opt;
            o.classList.toggle('selected', isSel);
            o.setAttribute('aria-selected', String(isSel));
        });
        close();
    });

    document.addEventListener('click', (e) => {
        if (!root.contains(e.target)) close();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && root.classList.contains('open')) close();
    });

    // Keep custom label in sync if the select's value changes elsewhere (e.g. Clear button)
    selectEl.addEventListener('change', () => {
        const match = Array.from(selectEl.options).find(o => o.value === selectEl.value);
        if (match) valueEl.textContent = match.textContent;
        panel.querySelectorAll('.custom-select-option').forEach(o => {
            const isSel = o.dataset.value === selectEl.value;
            o.classList.toggle('selected', isSel);
            o.setAttribute('aria-selected', String(isSel));
        });
    });
}

initCustomSelect('decadeCustom', decadeFilter);
initCustomSelect('typeCustom', typeFilter);
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
                <div class="timeline-item" data-type="${a.type || 'Other'}" style="--reveal-delay: ${Math.min(i * 0.06, 0.4)}s">
                    <div class="badge-row">
                        <span class="badge-pill">${a.type || 'Unknown'}</span>
                        <span class="badge-year">${a.year || 'N/A'}</span>
                    </div>
                    <div class="title">${a.title || 'Untitled'}</div>
                    ${descriptionHtml}
                    <div class="impact"><strong>Impact:</strong> ${a.impact || 'Unknown'}</div>
                    <div class="expand-wrapper">
                        <div class="expand-inner">
                            <div class="lessons story-block">
                                <div class="lessons-heading"><i class="fas fa-book-open"></i> The story: why, how &amp; what happened</div>
                                <p>${a.story || ''}</p>
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
// FAQ ACCORDION
// ============================================================
function renderFAQ() {
    const faqList = document.getElementById('faqList');
    if (!faqList) return;

    faqList.innerHTML = faqs.map((item, i) => `
        <div class="faq-item reveal" style="--reveal-delay: ${Math.min(i * 0.06, 0.3)}s">
            <button class="faq-question" type="button" aria-expanded="false">
                <span>${item.q}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="expand-wrapper">
                <div class="expand-inner">
                    <p class="faq-answer">${item.a}</p>
                </div>
            </div>
        </div>
    `).join('');

    faqList.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const willOpen = !item.classList.contains('open');
            item.classList.toggle('open', willOpen);
            btn.setAttribute('aria-expanded', String(willOpen));
        });
    });

    faqList.querySelectorAll('.faq-item').forEach(el => {
        el.classList.add('reveal');
        if (revealObserver) revealObserver.observe(el);
    });
}

// ============================================================
// CHART – Attacks by Decade (GSAP-powered, premium motion)
// ============================================================
function updateChart(data) {
    const decades = [1980, 1990, 2000, 2010, 2020];
    const counts = decades.map(d => data.filter(a => a.year >= d && a.year < d + 10).length);
    const maxCount = Math.max(...counts, 1);

    chartBars.innerHTML = decades.map((d, i) => {
        const height = (counts[i] / maxCount) * 100;
        return `
            <div class="bar-wrapper" data-tooltip="${counts[i]} attack${counts[i] === 1 ? '' : 's'} recorded in the ${d}s">
                <span class="bar-count" data-target="${counts[i]}">0</span>
                <div class="bar" data-height="${Math.max(height, 4)}" style="height: 0%;"></div>
                <span class="bar-label">${d}s</span>
            </div>
        `;
    }).join('');

    animateChart();
}

let chartRevealedOnce = false;

function animateChart() {
    const wrappers = chartBars.querySelectorAll('.bar-wrapper');
    if (!wrappers.length) return;

    if (prefersReducedMotion || typeof gsap === 'undefined') {
        wrappers.forEach(w => {
            const bar = w.querySelector('.bar');
            const countEl = w.querySelector('.bar-count');
            bar.style.height = `${bar.dataset.height}%`;
            countEl.textContent = countEl.dataset.target;
        });
        return;
    }

    const run = () => {
        wrappers.forEach((w, i) => {
            const bar = w.querySelector('.bar');
            const countEl = w.querySelector('.bar-count');
            const target = parseInt(countEl.dataset.target, 10);
            const counter = { val: 0 };

            gsap.timeline({ delay: i * 0.1 })
                .to(bar, {
                    height: `${bar.dataset.height}%`,
                    duration: 1.1,
                    ease: 'elastic.out(1, 0.65)',
                }, 0)
                .to(counter, {
                    val: target,
                    duration: 0.9,
                    ease: 'power2.out',
                    onUpdate: () => { countEl.textContent = Math.round(counter.val); },
                }, 0);
        });
    };

    if (chartRevealedOnce || typeof ScrollTrigger === 'undefined') {
        run();
        return;
    }

    ScrollTrigger.create({
        trigger: '#statsChart',
        start: 'top 80%',
        once: true,
        onEnter: () => { chartRevealedOnce = true; run(); },
    });
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

// ============================================================
// ANIMATED SEARCH PLACEHOLDER (typewriter, left-to-right)
// ============================================================
(() => {
    if (prefersReducedMotion) {
        searchInput.placeholder = 'Search attacks... (Ctrl+K)';
        return;
    }
    const phrases = ['Search attacks...', 'Try "ransomware"', 'Try "WannaCry"', 'Try "Stuxnet"', 'Try "2021"', 'Try "data breach"'];
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
        if (document.activeElement === searchInput) {
            setTimeout(tick, 400);
            return;
        }
        const current = phrases[phraseIndex];
        if (!deleting) {
            charIndex++;
            searchInput.placeholder = current.slice(0, charIndex);
            if (charIndex === current.length) {
                deleting = true;
                setTimeout(tick, 1500);
                return;
            }
        } else {
            charIndex--;
            searchInput.placeholder = current.slice(0, charIndex);
            if (charIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }
        setTimeout(tick, deleting ? 35 : 55);
    }
    tick();
})();
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
const revealElements = document.querySelectorAll('.timeline-item, .stat-item, .chart-container, .about-section, .tips-section, .protect-section, .faq-section, .tip-card, .protect-card');
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

renderFAQ();

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
            const willExpand = !isExpanded;
            card.classList.toggle('expanded', willExpand);
            const btn = card.querySelector('.expand-toggle');
            if (btn) {
                btn.setAttribute('aria-expanded', String(willExpand));
                const label = btn.querySelector('span');
                if (label) label.textContent = willExpand ? 'Read less' : 'Read more';
            }
        }
    });
})();

// ============================================================
// CURSOR SPOTLIGHT (decorative only, reusable)
// ============================================================
function initSpotlight(el, mxVar, myVar) {
    if (!el || prefersReducedMotion) return;
    let ticking = false;
    let pointer = { x: 0, y: 0 };

    function apply() {
        ticking = false;
        const rect = el.getBoundingClientRect();
        el.style.setProperty(mxVar, `${((pointer.x - rect.left) / rect.width) * 100}%`);
        el.style.setProperty(myVar, `${((pointer.y - rect.top) / rect.height) * 100}%`);
    }

    el.addEventListener('pointermove', (e) => {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(apply);
        }
    });
}

initSpotlight(document.getElementById('aboutContainer'), '--about-mx', '--about-my');
initSpotlight(document.getElementById('heroStats'), '--stats-mx', '--stats-my');
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        if (lenisInstance) {
            lenisInstance.scrollTo(0, { duration: 1.4 });
        } else {
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
    });
}