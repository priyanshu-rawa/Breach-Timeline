export type Decade = "1980s" | "1990s" | "2000s" | "2010s" | "2020s";

export type Category =
  | "Worms & Viruses"
  | "Data Breaches"
  | "Ransomware"
  | "Nation-State/APT"
  | "Supply Chain";

export interface Incident {
  id: string;
  year: number;
  /** Display label for the year range, e.g. "2005–07" */
  yearLabel?: string;
  decade: Decade;
  title: string;
  category: Category;
  summary: string;
  impact: string;
  mitreTags: string[];
  /** Direct link to in-depth case study / postmortem on Medium */
  mediumUrl: string;
}

export const DECADES: Decade[] = ["1980s", "1990s", "2000s", "2010s", "2020s"];

export const CATEGORIES: Category[] = [
  "Worms & Viruses",
  "Data Breaches",
  "Ransomware",
  "Nation-State/APT",
  "Supply Chain",
];

export const incidents: Incident[] = [
  // ---------------------------------------------------------------- 1980s
  {
    id: "414s-gang",
    year: 1983,
    decade: "1980s",
    title: "414s Gang intrusions",
    category: "Data Breaches",
    summary:
      "A group of Milwaukee teenagers, named after their area code, used home computers and modems to break into dozens of systems including Los Alamos National Laboratory and Memorial Sloan Kettering Cancer Center. The case drew national attention and helped prompt early U.S. computer crime legislation.",
    impact: "Roughly 60 systems accessed; catalyst for the Computer Fraud and Abuse Act.",
    mitreTags: ["T1078 Valid Accounts", "T1110 Brute Force"],
    mediumUrl: "https://medium.com/search?q=414s+gang+milwaukee+hackers+1983",
  },
  {
    id: "morris-worm",
    year: 1988,
    decade: "1980s",
    title: "Morris Worm",
    category: "Worms & Viruses",
    summary:
      "Written by Cornell graduate student Robert Tappan Morris, the worm exploited flaws in sendmail, fingerd, and weak passwords to spread across Unix systems. A replication bug caused it to reinfect hosts repeatedly, grinding machines to a halt and prompting the creation of the first CERT.",
    impact: "Infected an estimated 10% of the ~60,000 internet-connected hosts; damage estimated at $100K–$10M.",
    mitreTags: ["T1190 Exploit Public-Facing Application", "T1110 Brute Force", "T1021 Remote Services"],
    mediumUrl: "https://medium.com/search?q=Morris+Worm+1988+first+internet+worm+cybersecurity",
  },

  // ---------------------------------------------------------------- 1990s
  {
    id: "citibank-levin",
    year: 1994,
    decade: "1990s",
    title: "Citibank hack / Vladimir Levin",
    category: "Data Breaches",
    summary:
      "Russian programmer Vladimir Levin and accomplices accessed Citibank's cash management system and initiated fraudulent wire transfers from customer accounts to accounts controlled by the group around the world. Most funds were recovered; Levin was extradited and convicted in the U.S.",
    impact: "Approximately $10M transferred (estimated); all but ~$400K recovered.",
    mitreTags: ["T1078 Valid Accounts", "T1657 Financial Theft"],
    mediumUrl: "https://medium.com/search?q=Vladimir+Levin+Citibank+1994+hack",
  },
  {
    id: "mitnick-takedown",
    year: 1995,
    decade: "1990s",
    title: "Kevin Mitnick takedown",
    category: "Data Breaches",
    summary:
      "After years as a fugitive, Kevin Mitnick was arrested in Raleigh, North Carolina, following a pursuit involving security researcher Tsutomu Shimomura and the FBI. Mitnick's intrusions relied heavily on social engineering and IP spoofing against corporate and telecom networks.",
    impact: "Source code and proprietary data stolen from multiple technology and telecom companies; five years in prison.",
    mitreTags: ["T1566 Phishing", "T1598 Phishing for Information", "T1557 Adversary-in-the-Middle"],
    mediumUrl: "https://medium.com/search?q=Kevin+Mitnick+takedown+1995+social+engineering",
  },
  {
    id: "aol-phishing",
    year: 1996,
    decade: "1990s",
    title: "AOL phishing epidemic",
    category: "Data Breaches",
    summary:
      "Attackers impersonated AOL staff via instant messages and email to trick users into revealing passwords and billing information, giving rise to the term 'phishing'. Tools such as AOHell automated the process, mass-generating fake accounts and credential-harvesting messages.",
    impact: "Widespread account takeover; established phishing as a mainstream attack technique.",
    mitreTags: ["T1566 Phishing", "T1598 Phishing for Information"],
    mediumUrl: "https://medium.com/search?q=AOL+phishing+epidemic+1996+history+of+phishing",
  },
  {
    id: "solar-sunrise",
    year: 1998,
    decade: "1990s",
    title: "Solar Sunrise",
    category: "Nation-State/APT",
    summary:
      "A series of intrusions into unclassified U.S. Department of Defense networks exploited a known Solaris vulnerability, occurring as the U.S. prepared for military action in Iraq. Investigators initially suspected a state actor but traced the attacks to two California teenagers and an Israeli hacker.",
    impact: "Hundreds of DoD systems compromised; drove creation of the Joint Task Force–Computer Network Defense.",
    mitreTags: ["T1190 Exploit Public-Facing Application", "T1505 Server Software Component"],
    mediumUrl: "https://medium.com/search?q=Solar+Sunrise+1998+DoD+cyberattack",
  },
  {
    id: "cih-chernobyl",
    year: 1998,
    decade: "1990s",
    title: "CIH / Chernobyl virus",
    category: "Worms & Viruses",
    summary:
      "Written by Taiwanese student Chen Ing-hau, CIH infected Windows 9x executables and carried a destructive payload that triggered on April 26. It overwrote the first megabyte of the hard drive and attempted to flash the system BIOS, rendering many machines unbootable.",
    impact: "Hundreds of thousands of PCs damaged, largely in Asia; estimated damages in the tens of millions of dollars.",
    mitreTags: ["T1485 Data Destruction", "T1495 Firmware Corruption"],
    mediumUrl: "https://medium.com/search?q=CIH+Chernobyl+virus+1998+analysis",
  },
  {
    id: "melissa",
    year: 1999,
    decade: "1990s",
    title: "Melissa virus",
    category: "Worms & Viruses",
    summary:
      "A Word macro virus distributed as an infected document that mailed itself to the first 50 contacts in a victim's Outlook address book. Its rapid spread overwhelmed corporate mail servers, forcing companies including Microsoft to shut down email systems.",
    impact: "Estimated $80M in damages; author David L. Smith sentenced to 20 months in federal prison.",
    mitreTags: ["T1566.001 Spearphishing Attachment", "T1204.002 Malicious File", "T1137 Office Application Startup"],
    mediumUrl: "https://medium.com/search?q=Melissa+virus+1999+macro+worm",
  },

  // ---------------------------------------------------------------- 2000s
  {
    id: "iloveyou",
    year: 2000,
    decade: "2000s",
    title: "ILOVEYOU",
    category: "Worms & Viruses",
    summary:
      "A VBScript worm disguised as a love letter attachment that overwrote files and mailed itself to every Outlook contact. It spread globally within hours, affecting corporations, governments, and the UK Parliament, which shut down its mail system.",
    impact: "Estimated 50M infected machines; estimated $5.5–8.7B in damages and cleanup costs.",
    mitreTags: ["T1566.001 Spearphishing Attachment", "T1204.002 Malicious File", "T1485 Data Destruction"],
    mediumUrl: "https://medium.com/search?q=ILOVEYOU+virus+2000+cyberattack+case+study",
  },
  {
    id: "code-red",
    year: 2001,
    decade: "2000s",
    title: "Code Red",
    category: "Worms & Viruses",
    summary:
      "Code Red exploited a buffer overflow in Microsoft IIS to deface web pages with 'Hacked by Chinese!' and launch a DDoS against the White House website. It spread without any file on disk, residing entirely in memory.",
    impact: "Over 359,000 hosts infected in under 14 hours; estimated $2B+ in damages.",
    mitreTags: ["T1190 Exploit Public-Facing Application", "T1498 Network Denial of Service", "T1491 Defacement"],
    mediumUrl: "https://medium.com/search?q=Code+Red+worm+2001+IIS+buffer+overflow",
  },
  {
    id: "sql-slammer",
    year: 2003,
    decade: "2000s",
    title: "SQL Slammer",
    category: "Worms & Viruses",
    summary:
      "A 376-byte worm that exploited a buffer overflow in Microsoft SQL Server via a single UDP packet. Slammer doubled its infected population every 8.5 seconds, saturating networks and knocking out ATMs, airline systems, and emergency dispatch.",
    impact: "~75,000 servers infected in roughly 10 minutes (widely cited as 37 minutes to peak); estimated $1B+ in damages.",
    mitreTags: ["T1190 Exploit Public-Facing Application", "T1498 Network Denial of Service"],
    mediumUrl: "https://medium.com/search?q=SQL+Slammer+worm+2003+analysis",
  },
  {
    id: "mydoom",
    year: 2004,
    decade: "2000s",
    title: "MyDoom",
    category: "Worms & Viruses",
    summary:
      "MyDoom spread through email attachments and the Kazaa file-sharing network, opening a backdoor on infected machines and launching DDoS attacks on SCO Group and Microsoft. At its peak it accounted for roughly one in every 12 emails sent worldwide.",
    impact: "Fastest-spreading email worm ever recorded; estimated $38B in damages.",
    mitreTags: ["T1566.001 Spearphishing Attachment", "T1498 Network Denial of Service", "T1571 Non-Standard Port"],
    mediumUrl: "https://medium.com/search?q=MyDoom+fastest+email+worm+2004+case+study",
  },
  {
    id: "tjx",
    year: 2005,
    yearLabel: "2005–07",
    decade: "2000s",
    title: "TJX breach",
    category: "Data Breaches",
    summary:
      "Attackers led by Albert Gonzalez breached TJX (parent of T.J. Maxx and Marshalls) through weak WEP wireless encryption at retail stores, then installed sniffers on the payment network. Card data was harvested for roughly 18 months before discovery.",
    impact: "At least 45.7M cards disclosed by TJX, later estimated at 94M; settlements and costs estimated at $250M+.",
    mitreTags: ["T1557 Adversary-in-the-Middle", "T1040 Network Sniffing", "T1005 Data from Local System"],
    mediumUrl: "https://medium.com/search?q=TJX+data+breach+Albert+Gonzalez+case+study",
  },
  {
    id: "conficker",
    year: 2008,
    decade: "2000s",
    title: "Conficker",
    category: "Worms & Viruses",
    summary:
      "Conficker exploited MS08-067 and spread via network shares and USB autorun, building one of the largest botnets ever seen. It used domain-generation algorithms and cryptographic signing to resist takedown, prompting an industry-wide Conficker Working Group.",
    impact: "Estimated 9–15M infected machines across 190 countries, including military and hospital networks.",
    mitreTags: ["T1210 Exploitation of Remote Services", "T1091 Replication Through Removable Media", "T1568.002 Domain Generation Algorithms"],
    mediumUrl: "https://medium.com/search?q=Conficker+worm+botnet+2008+analysis",
  },
  {
    id: "heartland",
    year: 2008,
    decade: "2000s",
    title: "Heartland Payment Systems",
    category: "Data Breaches",
    summary:
      "Attackers used SQL injection to enter Heartland's network, then deployed sniffer malware on the payment processing segment to capture card data in transit. The intrusion went undetected for months at one of the largest U.S. payment processors.",
    impact: "Estimated 130–134M card numbers exposed; costs estimated at $140M+.",
    mitreTags: ["T1190 Exploit Public-Facing Application", "T1040 Network Sniffing", "T1041 Exfiltration Over C2 Channel"],
    mediumUrl: "https://medium.com/search?q=Heartland+Payment+Systems+breach+2008+SQL+injection",
  },
  {
    id: "ghostnet",
    year: 2009,
    decade: "2000s",
    title: "GhostNet",
    category: "Nation-State/APT",
    summary:
      "Researchers at the University of Toronto's Citizen Lab uncovered a cyber-espionage network that had compromised computers in embassies, ministries, and the offices of the Dalai Lama. The gh0st RAT gave operators full control, including covert audio and video capture.",
    impact: "1,295 compromised computers across 103 countries, roughly 30% considered high-value targets.",
    mitreTags: ["T1566.001 Spearphishing Attachment", "T1219 Remote Access Software", "T1123 Audio Capture", "T1125 Video Capture"],
    mediumUrl: "https://medium.com/search?q=GhostNet+cyber+espionage+Citizen+Lab+2009",
  },

  // ---------------------------------------------------------------- 2010s
  {
    id: "stuxnet",
    year: 2010,
    decade: "2010s",
    title: "Stuxnet",
    category: "Nation-State/APT",
    summary:
      "A highly sophisticated worm that targeted Siemens PLCs controlling uranium enrichment centrifuges at Iran's Natanz facility. It used four Windows zero-days and stolen code-signing certificates, subtly altering centrifuge speeds while reporting normal readings to operators.",
    impact: "Reportedly destroyed roughly 1,000 centrifuges; first widely known cyberweapon to cause physical damage.",
    mitreTags: ["T1091 Replication Through Removable Media", "T0831 Manipulation of Control", "T1553.002 Code Signing", "T1068 Exploitation for Privilege Escalation"],
    mediumUrl: "https://medium.com/search?q=Stuxnet+Natanz+centrifuges+industrial+malware+case+study",
  },
  {
    id: "sony-psn",
    year: 2011,
    decade: "2010s",
    title: "Sony PlayStation Network",
    category: "Data Breaches",
    summary:
      "An intrusion into Sony's PlayStation Network and Qriocity services exposed names, addresses, credentials, and possibly card data. Sony took the network offline for 23 days, one of the longest outages of a major consumer service.",
    impact: "~77M accounts compromised; Sony estimated costs of $171M.",
    mitreTags: ["T1190 Exploit Public-Facing Application", "T1005 Data from Local System", "T1567 Exfiltration Over Web Service"],
    mediumUrl: "https://medium.com/search?q=Sony+PlayStation+Network+2011+breach+postmortem",
  },
  {
    id: "rsa-securid",
    year: 2011,
    decade: "2010s",
    title: "RSA SecurID",
    category: "Nation-State/APT",
    summary:
      "Attackers sent a spearphishing email titled '2011 Recruitment Plan' with an Excel attachment exploiting an Adobe Flash zero-day. They pivoted through RSA's network and stole data related to SecurID two-factor tokens, later used in attempted intrusions at defense contractors.",
    impact: "RSA replaced tokens for many customers; estimated $66M in remediation costs.",
    mitreTags: ["T1566.001 Spearphishing Attachment", "T1203 Exploitation for Client Execution", "T1041 Exfiltration Over C2 Channel"],
    mediumUrl: "https://medium.com/search?q=RSA+SecurID+2011+APT+spearphishing+breach",
  },
  {
    id: "target",
    year: 2013,
    decade: "2010s",
    title: "Target",
    category: "Data Breaches",
    summary:
      "Attackers stole credentials from an HVAC vendor, entered Target's network, and deployed memory-scraping malware to point-of-sale systems during the holiday shopping season. Security alerts were generated but not acted upon in time.",
    impact: "40M payment cards and 70M customer records exposed; costs estimated at $200M+ including an $18.5M multistate settlement.",
    mitreTags: ["T1199 Trusted Relationship", "T1078 Valid Accounts", "T1005 Data from Local System", "T1048 Exfiltration Over Alternative Protocol"],
    mediumUrl: "https://medium.com/search?q=Target+2013+data+breach+HVAC+credentials+case+study",
  },
  {
    id: "yahoo",
    year: 2013,
    yearLabel: "2013–14",
    decade: "2010s",
    title: "Yahoo",
    category: "Data Breaches",
    summary:
      "Two separate breaches — a 2014 intrusion attributed by the U.S. DOJ to Russian FSB-linked actors, and a 2013 breach later disclosed to affect every account — exposed names, email addresses, hashed passwords, and security questions. The disclosures cut $350M from Verizon's acquisition price.",
    impact: "All ~3B accounts affected; the largest known data breach by account count.",
    mitreTags: ["T1566 Phishing", "T1606.001 Web Cookies", "T1003 OS Credential Dumping"],
    mediumUrl: "https://medium.com/search?q=Yahoo+data+breach+3+billion+accounts+analysis",
  },
  {
    id: "opm",
    year: 2015,
    decade: "2010s",
    title: "OPM breach",
    category: "Nation-State/APT",
    summary:
      "Attackers, widely attributed to China, compromised the U.S. Office of Personnel Management using credentials from a contractor and exfiltrated background-investigation files, including SF-86 forms and fingerprint records for security clearance holders.",
    impact: "21.5M records exposed, including 5.6M sets of fingerprints.",
    mitreTags: ["T1199 Trusted Relationship", "T1078 Valid Accounts", "T1074 Data Staged", "T1048 Exfiltration Over Alternative Protocol"],
    mediumUrl: "https://medium.com/search?q=OPM+Office+of+Personnel+Management+breach+2015+analysis",
  },
  {
    id: "bangladesh-bank",
    year: 2016,
    decade: "2010s",
    title: "Bangladesh Bank SWIFT heist",
    category: "Nation-State/APT",
    summary:
      "Attackers attributed to North Korea's Lazarus Group compromised Bangladesh Bank's SWIFT terminal and issued fraudulent transfer instructions to the Federal Reserve Bank of New York. Malware tampered with SWIFT's local logging and printer output to delay detection.",
    impact: "$81M stolen (of $951M attempted); most funds laundered through Philippine casinos.",
    mitreTags: ["T1078 Valid Accounts", "T1565 Data Manipulation", "T1070 Indicator Removal", "T1657 Financial Theft"],
    mediumUrl: "https://medium.com/search?q=Bangladesh+Bank+SWIFT+heist+Lazarus+Group+case+study",
  },
  {
    id: "wannacry",
    year: 2017,
    decade: "2010s",
    title: "WannaCry",
    category: "Ransomware",
    summary:
      "A self-propagating ransomware worm that used the leaked NSA exploit EternalBlue against SMBv1. It crippled the UK's NHS, Telefónica, Renault, and others before a researcher registered a kill-switch domain. Attribution points to North Korea's Lazarus Group.",
    impact: "~230,000 systems in 150 countries; estimated damages of $4B.",
    mitreTags: ["T1210 Exploitation of Remote Services", "T1486 Data Encrypted for Impact", "T1490 Inhibit System Recovery"],
    mediumUrl: "https://medium.com/search?q=WannaCry+ransomware+EternalBlue+2017+case+study",
  },
  {
    id: "notpetya",
    year: 2017,
    decade: "2010s",
    title: "NotPetya",
    category: "Nation-State/APT",
    summary:
      "Disguised as ransomware, NotPetya was a destructive wiper delivered through a poisoned update to Ukrainian accounting software M.E.Doc. It spread via EternalBlue and credential theft, halting operations at Maersk, Merck, FedEx TNT, and others. The U.S. and UK attributed it to Russia's GRU.",
    impact: "Estimated ~$10B in global damages; the costliest cyberattack on record.",
    mitreTags: ["T1195.002 Compromise Software Supply Chain", "T1210 Exploitation of Remote Services", "T1003 OS Credential Dumping", "T1561 Disk Wipe"],
    mediumUrl: "https://medium.com/search?q=NotPetya+supply+chain+cyberattack+costliest+malware",
  },
  {
    id: "equifax",
    year: 2017,
    decade: "2010s",
    title: "Equifax",
    category: "Data Breaches",
    summary:
      "Attackers exploited an unpatched Apache Struts vulnerability (CVE-2017-5638) in a consumer dispute portal and moved through Equifax's network for 76 days. Names, Social Security numbers, birth dates, and addresses were exfiltrated. The DOJ later indicted four members of China's PLA.",
    impact: "147M people affected; settlement of up to $700M (estimated).",
    mitreTags: ["T1190 Exploit Public-Facing Application", "T1505.003 Web Shell", "T1560 Archive Collected Data", "T1041 Exfiltration Over C2 Channel"],
    mediumUrl: "https://medium.com/search?q=Equifax+2017+breach+Apache+Struts+case+study",
  },
  {
    id: "marriott",
    year: 2018,
    decade: "2010s",
    title: "Marriott / Starwood",
    category: "Data Breaches",
    summary:
      "Marriott disclosed that attackers had maintained access to Starwood's guest reservation database since 2014, two years before Marriott acquired the chain. Exposed data included passport numbers and encrypted payment card details. Reporting attributed the intrusion to Chinese intelligence.",
    impact: "Up to 383M guest records; UK ICO fine of £18.4M.",
    mitreTags: ["T1078 Valid Accounts", "T1005 Data from Local System", "T1560 Archive Collected Data"],
    mediumUrl: "https://medium.com/search?q=Marriott+Starwood+data+breach+2018+analysis",
  },
  {
    id: "capital-one",
    year: 2019,
    decade: "2010s",
    title: "Capital One",
    category: "Data Breaches",
    summary:
      "A former cloud provider employee exploited a misconfigured web application firewall via server-side request forgery to obtain IAM credentials and download data from Capital One's S3 buckets. The breach highlighted cloud misconfiguration and metadata-service risks.",
    impact: "~106M individuals in the U.S. and Canada affected; $80M OCC penalty and $190M class-action settlement.",
    mitreTags: ["T1190 Exploit Public-Facing Application", "T1552.005 Cloud Instance Metadata API", "T1530 Data from Cloud Storage"],
    mediumUrl: "https://medium.com/search?q=Capital+One+2019+SSRF+cloud+breach+case+study",
  },

  // ---------------------------------------------------------------- 2020s
  {
    id: "solarwinds",
    year: 2020,
    decade: "2020s",
    title: "SolarWinds SUNBURST",
    category: "Supply Chain",
    summary:
      "Attackers attributed to Russia's SVR inserted the SUNBURST backdoor into SolarWinds Orion build systems, shipping it in signed updates to ~18,000 customers. Selected victims, including U.S. federal agencies and major tech firms, were then targeted for follow-on intrusion.",
    impact: "~18,000 organizations received the trojanized update; roughly 100 companies and 9 U.S. agencies actively compromised.",
    mitreTags: ["T1195.002 Compromise Software Supply Chain", "T1553.002 Code Signing", "T1568 Dynamic Resolution", "T1606.002 SAML Tokens"],
    mediumUrl: "https://medium.com/search?q=SolarWinds+SUNBURST+supply+chain+attack+analysis",
  },
  {
    id: "colonial-pipeline",
    year: 2021,
    decade: "2020s",
    title: "Colonial Pipeline",
    category: "Ransomware",
    summary:
      "DarkSide affiliates accessed Colonial Pipeline's network through a legacy VPN account without MFA, deploying ransomware on IT systems. The company shut down its 5,500-mile pipeline as a precaution, triggering fuel shortages across the U.S. East Coast.",
    impact: "$4.4M ransom paid (~$2.3M later recovered by DOJ); largest publicly disclosed cyberattack on U.S. energy infrastructure.",
    mitreTags: ["T1078 Valid Accounts", "T1133 External Remote Services", "T1486 Data Encrypted for Impact", "T1657 Financial Theft"],
    mediumUrl: "https://medium.com/search?q=Colonial+Pipeline+DarkSide+ransomware+2021+case+study",
  },
  {
    id: "log4shell",
    year: 2021,
    decade: "2020s",
    title: "Log4Shell",
    category: "Supply Chain",
    summary:
      "CVE-2021-44228, a remote code execution flaw in the ubiquitous Apache Log4j library, allowed attackers to trigger JNDI lookups with a single crafted string. Exploitation began within hours of disclosure, spanning cryptominers, botnets, ransomware groups, and state actors.",
    impact: "Hundreds of millions of devices potentially affected; CISA called it one of the most serious vulnerabilities ever seen.",
    mitreTags: ["T1190 Exploit Public-Facing Application", "T1203 Exploitation for Client Execution", "T1059 Command and Scripting Interpreter"],
    mediumUrl: "https://medium.com/search?q=Log4Shell+CVE-2021-44228+vulnerability+deep+dive",
  },
  {
    id: "moveit",
    year: 2023,
    decade: "2020s",
    title: "MOVEit breach",
    category: "Supply Chain",
    summary:
      "The Cl0p ransomware group exploited a zero-day SQL injection vulnerability (CVE-2023-34362) in Progress Software's MOVEit Transfer to mass-exfiltrate data from thousands of organizations, including government agencies, universities, and payroll providers.",
    impact: "2,700+ organizations and an estimated 90M+ individuals affected.",
    mitreTags: ["T1190 Exploit Public-Facing Application", "T1505.003 Web Shell", "T1567 Exfiltration Over Web Service", "T1657 Financial Theft"],
    mediumUrl: "https://medium.com/search?q=MOVEit+Transfer+Cl0p+zero-day+vulnerability+2023",
  },
  {
    id: "mgm-resorts",
    year: 2023,
    decade: "2020s",
    title: "MGM Resorts social engineering",
    category: "Ransomware",
    summary:
      "Attackers associated with Scattered Spider impersonated an employee in a call to MGM's IT help desk to reset credentials, then deployed ALPHV/BlackCat ransomware. Slot machines, room keys, and reservation systems across Las Vegas properties were disrupted for days.",
    impact: "Estimated $100M impact to Q3 earnings; ~10 days of operational disruption.",
    mitreTags: ["T1566.004 Spearphishing Voice", "T1078.004 Cloud Accounts", "T1486 Data Encrypted for Impact"],
    mediumUrl: "https://medium.com/search?q=MGM+Resorts+Scattered+Spider+social+engineering+2023",
  },
  {
    id: "change-healthcare",
    year: 2024,
    decade: "2020s",
    title: "Change Healthcare ransomware",
    category: "Ransomware",
    summary:
      "ALPHV/BlackCat affiliates accessed a Citrix portal lacking MFA and deployed ransomware across Change Healthcare, a UnitedHealth subsidiary processing a large share of U.S. medical claims. Pharmacies and providers nationwide were unable to process payments for weeks.",
    impact: "~$22M ransom paid (estimated); ~190M individuals' data affected; UnitedHealth estimated total costs above $2B.",
    mitreTags: ["T1078 Valid Accounts", "T1133 External Remote Services", "T1486 Data Encrypted for Impact", "T1567 Exfiltration Over Web Service"],
    mediumUrl: "https://medium.com/search?q=Change+Healthcare+ransomware+attack+2024+postmortem",
  },
  {
    id: "xz-utils",
    year: 2024,
    decade: "2020s",
    title: "XZ Utils backdoor",
    category: "Supply Chain",
    summary:
      "A maintainer operating as 'Jia Tan' spent roughly two years earning trust in the XZ Utils project before inserting an obfuscated backdoor (CVE-2024-3094) targeting sshd via liblzma. Microsoft engineer Andres Freund discovered it after noticing unusual SSH latency, just before it reached stable Linux distributions.",
    impact: "Caught before wide deployment; considered a near-miss compromise of the global Linux ecosystem.",
    mitreTags: ["T1195.001 Compromise Software Dependencies", "T1027 Obfuscated Files or Information", "T1556 Modify Authentication Process"],
    mediumUrl: "https://medium.com/search?q=XZ+Utils+backdoor+CVE-2024-3094+Andres+Freund+analysis",
  },
];

export const incidentsByDecade = (decade: Decade): Incident[] =>
  incidents.filter((i) => i.decade === decade);
