import {
  FaMicrochip,
  FaLaptop,
  FaHdd,
  FaDesktop,
  FaBolt,
  FaTools,
  FaSyncAlt,
  FaShieldAlt,
  FaBuilding,
  FaHandshake,
} from 'react-icons/fa';

export const serviceList = [
  {
    id: 1,
    category: 'repair',
    title: 'Motherboard & Chip-Level Repair',
    desc: 'Precision micro-soldering, short circuit detection, GPU reballing, power IC replacements, and water damage recovery.',
    icon: FaMicrochip,
    price: 'From $25',
    time: '24 - 48 Hours',
    features: [
      'Advanced diagnostic equipment',
      'Original power ICs & capacitors',
      'Ultrasonic board cleaning',
      '90-Day repair warranty'
    ],
    popular: true,
  },
  {
    id: 2,
    category: 'repair',
    title: 'Screen & Display Replacement',
    desc: 'Cracked, flickering, or dim screens replaced with brand-new high-refresh rate gaming displays, 2K/4K Retina, or OLED panels.',
    icon: FaLaptop,
    price: 'From $45',
    time: 'Same-Day (2-4h)',
    features: [
      'Original OEM screen panels',
      'Full brightness & color calibration',
      'Zero dead pixel guarantee',
      '6-Month manufacturer warranty'
    ],
    popular: false,
  },
  {
    id: 3,
    category: 'upgrade',
    title: 'High-Speed NVMe SSD Upgrade',
    desc: 'Revitalize slow laptops and desktops with ultra-fast PCIe Gen 4/5 NVMe SSDs. Includes complete OS & data migration with zero data loss.',
    icon: FaHdd,
    price: 'From $35',
    time: '1 - 2 Hours',
    features: [
      'Crucial, Samsung & Kingston NVMe',
      'Full Windows / macOS cloning',
      'Read speeds up to 7,000MB/s',
      '3-Year SSD hardware warranty'
    ],
    popular: true,
  },
  {
    id: 4,
    category: 'upgrade',
    title: 'Custom Gaming & Workstation Builds',
    desc: 'Tailored PC builds designed for esports gaming, video rendering, 3D modeling, and AI development with clean cable management.',
    icon: FaDesktop,
    price: 'Free Assembly with Parts',
    time: '24 Hours',
    features: [
      'Custom liquid cooling & airflow tuning',
      'Full 24-hour benchmark stress test',
      'RGB synchronization setup',
      '1-to-1 component lifetime support'
    ],
    popular: true,
  },
  {
    id: 5,
    category: 'repair',
    title: 'Battery & Power System Fix',
    desc: 'Rapid battery drain, swollen battery removal, failing charging ports (USB-C / DC jack), and power circuit restorations.',
    icon: FaBolt,
    price: 'From $20',
    time: 'Same Day (1-3h)',
    features: [
      'Certified Grade-A battery cells',
      'Overcharge protection testing',
      'Safe recycling of swollen batteries',
      '6-Month guarantee'
    ],
    popular: false,
  },
  {
    id: 6,
    category: 'upgrade',
    title: 'Deep Thermal Cleaning & Repaste',
    desc: 'Stop overheating, throttling, and loud fans. Complete dust removal from heatsinks and application of premium Arctic / Thermal Grizzly paste.',
    icon: FaTools,
    price: '$15 - $25',
    time: '45 - 90 Mins',
    features: [
      'Up to 15°C temperature reduction',
      'Premium thermal pads & liquid metal',
      'High-velocity blower dust purge',
      'Prolongs laptop lifespan'
    ],
    popular: false,
  },
  {
    id: 7,
    category: 'software',
    title: 'Clean OS Install & Optimization',
    desc: 'Genuine Windows 11 Pro or macOS reinstallation, bloatware removal, driver installation, game optimizer tweaks, and security patching.',
    icon: FaSyncAlt,
    price: '$10 - $20',
    time: '1 - 2 Hours',
    features: [
      'Official Microsoft / Apple images',
      'Updated graphics & chipset drivers',
      'Essential software bundle included',
      'High-performance system tuning'
    ],
    popular: false,
  },
  {
    id: 8,
    category: 'software',
    title: 'Emergency Data Recovery',
    desc: 'Recovery of precious photos, critical office documents, and files from dropped hard drives, formatted cards, and non-booting SSDs.',
    icon: FaShieldAlt,
    price: 'Free Quote / From $30',
    time: '1 - 3 Days',
    features: [
      'Cleanroom level retrieval tools',
      'Strict confidential privacy policy',
      'No recovery, no payment guarantee',
      'Support for NTFS, APFS, and FAT32'
    ],
    popular: false,
  },
  {
    id: 9,
    category: 'business',
    title: 'Corporate Office IT & Maintenance',
    desc: 'Scheduled monthly maintenance contracts, network rack cabling, Wi-Fi 6 mesh setup, NAS storage, and employee workstation fleet upkeep.',
    icon: FaBuilding,
    price: 'Custom Plans',
    time: 'On-site Support',
    features: [
      'Rapid SLA 2-hour response time',
      'Preventative monthly hardware checks',
      'Bulk discount for companies',
      'Official VAT invoices available'
    ],
    popular: false,
  },
  {
    id: 10,
    category: 'trade',
    title: 'Tech Trade-In & Buyback',
    desc: 'Upgrade easily by exchanging your existing laptop, PC, or smartphone for store credit or instant cash at competitive market rates.',
    icon: FaHandshake,
    price: 'Instant Cash Valuation',
    time: '15 - 30 Mins',
    features: [
      'Fair market algorithmic pricing',
      'Complimentary secure data wiping',
      'Trade up to ASUS, ROG, Apple, MSI',
      'Immediate cash payout'
    ],
    popular: false,
  },
];