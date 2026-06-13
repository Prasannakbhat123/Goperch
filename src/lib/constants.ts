export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_STATS = [
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Clients' },
  { value: 99.9, suffix: '%', label: 'System Reliability', decimals: 1 },
  { value: 5, suffix: '+', label: 'Years Combined Expertise' },
] as const

export const COMPANY_STATS = [
  { value: 15, suffix: '+', label: 'Projects Completed' },
  { value: 10, suffix: '+', label: 'Happy Clients' },
  { value: 40, suffix: '+', label: 'ERP Modules Built' },
  { value: 8, suffix: '+', label: 'Hardware Deployments' },
  { value: 5, suffix: '+', label: 'Years of Experience' },
] as const

export const TRUSTED_LOGOS = [
  'Apex Logistics',
  'Northfield Manufacturing',
  'Summit Retail Group',
  'BlueRiver Energy',
  'Horizon AgriTech',
  'Vertex Supply Co.',
  'Pioneer Outdoors',
  'CoreBridge Systems',
] as const

export const TECH_STACK = [
  { name: 'Next.js', color: '#111111' },
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Embedded C', color: '#A8B9CC' },
  { name: 'Raspberry Pi', color: '#C51A4A' },
  { name: 'Arduino', color: '#00979D' },
] as const

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We map your workflows, pain points, and success metrics through stakeholder workshops.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Architecture, timelines, and milestones are defined with clear delivery checkpoints.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'UX flows and interface systems are crafted for clarity, speed, and adoption.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'Agile sprints deliver incremental value with transparent progress reporting.',
  },
  {
    step: '05',
    title: 'Testing',
    description: 'Rigorous QA, performance testing, and security validation before launch.',
  },
  {
    step: '06',
    title: 'Deployment',
    description: 'Zero-downtime releases with monitoring, documentation, and team training.',
  },
  {
    step: '07',
    title: 'Support',
    description: 'Ongoing maintenance, enhancements, and dedicated technical partnership.',
  },
] as const

export const WHY_CHOOSE = [
  {
    title: 'End-to-End Development',
    description: 'From discovery to deployment, we own the full product lifecycle.',
    icon: 'layers',
  },
  {
    title: 'Software + Hardware Expertise',
    description: 'Unified teams building connected software and embedded systems.',
    icon: 'cpu',
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems engineered to grow with your business demands.',
    icon: 'trending-up',
  },
  {
    title: 'Modern Technology Stack',
    description: 'Battle-tested frameworks chosen for performance and longevity.',
    icon: 'code',
  },
  {
    title: 'Dedicated Support',
    description: 'Responsive partnership beyond launch with SLA-backed support.',
    icon: 'headphones',
  },
  {
    title: 'Agile Development Process',
    description: 'Iterative delivery with continuous feedback and transparency.',
    icon: 'refresh-cw',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'How long does ERP development take?',
    answer:
      'Typical ERP projects range from 3–9 months depending on scope, integrations, and module complexity. We deliver in phased releases so you see value early.',
  },
  {
    question: 'Do you build custom solutions?',
    answer:
      'Yes. Every GoPerch engagement is tailored to your workflows, industry requirements, and existing technology landscape — no one-size-fits-all templates.',
  },
  {
    question: 'Can hardware be integrated with software?',
    answer:
      'Absolutely. We specialize in bridging embedded devices, IoT sensors, trail cameras, and RFID systems with cloud dashboards and enterprise software.',
  },
  {
    question: 'Do you provide support after deployment?',
    answer:
      'We offer ongoing maintenance plans, feature enhancements, monitoring, and dedicated support channels to keep your systems running at peak performance.',
  },
  {
    question: 'Can existing systems be upgraded?',
    answer:
      'Yes. We audit legacy systems, plan migration strategies, and modernize infrastructure with minimal disruption to daily operations.',
  },
] as const

export const TESTIMONIALS = [
  {
    quote: 'GoPerch transformed our inventory operations completely.',
    name: 'Sarah Mitchell',
    company: 'Summit Retail Group',
    role: 'Operations Director',
    rating: 5,
    avatar: 'SM',
  },
  {
    quote: 'The ERP system reduced manual work by over 70%.',
    name: 'James Chen',
    company: 'Apex Logistics',
    role: 'CEO',
    rating: 5,
    avatar: 'JC',
  },
  {
    quote: 'Their hardware and software integration was exceptional.',
    name: 'Maria Rodriguez',
    company: 'Pioneer Outdoors',
    role: 'Product Manager',
    rating: 5,
    avatar: 'MR',
  },
] as const

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#contact' },
    { label: 'Blog', href: '#contact' },
    { label: 'Press', href: '#contact' },
  ],
  solutions: [
    { label: 'Custom ERP', href: '#solutions' },
    { label: 'Inventory Systems', href: '#solutions' },
    { label: 'Workflow Automation', href: '#solutions' },
    { label: 'AI Integrations', href: '#solutions' },
    { label: 'IoT & Hardware', href: '#solutions' },
  ],
  projects: [
    { label: 'Enterprise ERP Suite', href: '/projects/enterprise-erp-suite' },
    { label: 'Smart Inventory Platform', href: '/projects/smart-inventory-platform' },
    { label: 'Trail Camera System', href: '/projects/trail-camera-monitoring-system' },
    { label: 'AI Business Assistant', href: '/projects/ai-business-assistant' },
  ],
  resources: [
    { label: 'Case Studies', href: '#projects' },
    { label: 'Documentation', href: '#contact' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'FAQ', href: '#faq' },
  ],
  contact: [
    { label: 'hello@goperch.com', href: 'mailto:hello@goperch.com' },
    { label: '+1 (555) 234-8900', href: 'tel:+15552348900' },
    { label: 'San Francisco, CA', href: '#contact' },
  ],
} as const
