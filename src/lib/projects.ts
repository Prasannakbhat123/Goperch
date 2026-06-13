export interface Project {
  slug: string
  title: string
  shortDescription: string
  industry: string
  clientType: string
  tech: string[]
  coverGradient: string
  overview: string
  problem: string
  solution: string
  architecture: string[]
  developmentProcess: string[]
  keyFeatures: string[]
  challenges: string[]
  metrics: { label: string; value: string }[]
  results: string[]
  nextPhase: string[]
  relatedSlugs: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'enterprise-erp-suite',
    title: 'Enterprise ERP Suite',
    shortDescription:
      'A unified enterprise resource planning platform connecting finance, HR, procurement, and operations.',
    industry: 'Manufacturing',
    clientType: 'Mid-Market Enterprise',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL'],
    coverGradient: 'from-blue-600 via-indigo-600 to-violet-700',
    overview:
      'GoPerch designed and built a comprehensive ERP suite for a manufacturing enterprise struggling with fragmented systems. The platform centralizes operations across departments with real-time visibility and role-based access control.',
    problem:
      'The client relied on disconnected spreadsheets and legacy software, causing data silos, delayed reporting, and manual reconciliation across finance and operations teams.',
    solution:
      'We delivered a modular ERP with integrated dashboards, automated workflows, and a unified data layer — enabling leadership to make decisions from a single source of truth.',
    architecture: [
      'Next.js frontend with server-side rendering for performance',
      'FastAPI microservices with domain-driven module boundaries',
      'PostgreSQL with row-level security and audit logging',
      'Redis caching layer for high-frequency queries',
      'Docker containers orchestrated on AWS ECS',
    ],
    developmentProcess: [
      'Stakeholder workshops across 4 departments',
      'Phased module rollout over 6 months',
      'Weekly sprint demos with executive sponsors',
      'Parallel data migration from legacy systems',
    ],
    keyFeatures: [
      'Unified financial reporting dashboard',
      'Procurement workflow automation',
      'HR & payroll module integration',
      'Real-time inventory sync',
      'Custom role-based permissions',
      'Export-ready compliance reports',
    ],
    challenges: [
      'Migrating 10 years of historical data without downtime',
      'Harmonizing inconsistent data formats across departments',
      'Training 200+ employees on the new platform',
    ],
    metrics: [
      { label: 'Report Generation Time', value: '-85%' },
      { label: 'Data Accuracy', value: '99.7%' },
      { label: 'User Adoption', value: '94%' },
      { label: 'System Uptime', value: '99.9%' },
    ],
    results: [
      'Reduced month-end close from 12 days to 3 days',
      'Eliminated 15+ manual spreadsheet workflows',
      'Achieved full cross-department visibility within 90 days',
    ],
    nextPhase: [
      'AI-powered demand forecasting module',
      'Mobile app for field operations',
      'Advanced analytics with predictive maintenance',
    ],
    relatedSlugs: ['logistics-management-erp', 'smart-inventory-platform'],
  },
  {
    slug: 'smart-inventory-platform',
    title: 'Smart Inventory Platform',
    shortDescription:
      'Real-time inventory tracking with RFID integration and automated reorder intelligence.',
    industry: 'Retail & Distribution',
    clientType: 'Multi-Location Retailer',
    tech: ['React', 'Node.js', 'RFID Integration'],
    coverGradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    overview:
      'A cloud-native inventory management platform that gives retail operators real-time stock visibility across warehouses and storefronts, powered by RFID scanning and predictive reorder algorithms.',
    problem:
      'Stock discrepancies, delayed replenishment, and manual cycle counts were costing the client significant revenue and customer satisfaction across 12 locations.',
    solution:
      'We built an integrated platform combining RFID hardware readers, a real-time sync engine, and intelligent alerting — giving teams instant visibility and automated purchase recommendations.',
    architecture: [
      'React SPA with optimistic UI updates',
      'Node.js event-driven API with WebSocket streams',
      'RFID reader middleware for hardware communication',
      'MongoDB for flexible inventory document storage',
      'Message queue for async stock reconciliation',
    ],
    developmentProcess: [
      'On-site RFID hardware assessment',
      'Pilot deployment at 2 warehouse locations',
      'Iterative UX testing with warehouse staff',
      'Full rollout across all 12 locations',
    ],
    keyFeatures: [
      'Real-time stock level dashboards',
      'RFID bulk scanning workflows',
      'Automated low-stock alerts',
      'Multi-location transfer management',
      'Supplier integration portal',
      'Mobile scanning companion app',
    ],
    challenges: [
      'RFID signal interference in metal-heavy warehouses',
      'Syncing offline scanner data during network outages',
      'Training staff accustomed to paper-based processes',
    ],
    metrics: [
      { label: 'Stock Accuracy', value: '98.5%' },
      { label: 'Cycle Count Time', value: '-72%' },
      { label: 'Stockout Events', value: '-45%' },
      { label: 'Reorder Lead Time', value: '-30%' },
    ],
    results: [
      'Inventory accuracy improved from 82% to 98.5%',
      'Reduced annual shrinkage by $340K',
      'Automated 80% of reorder decisions',
    ],
    nextPhase: [
      'Computer vision shelf monitoring',
      'Integration with POS systems',
      'Demand forecasting with ML models',
    ],
    relatedSlugs: ['enterprise-erp-suite', 'logistics-management-erp'],
  },
  {
    slug: 'trail-camera-monitoring-system',
    title: 'Trail Camera Monitoring System',
    shortDescription:
      'Remote wildlife and property monitoring with cellular-connected trail cameras and cloud dashboards.',
    industry: 'Outdoor & Conservation',
    clientType: 'Property Management Company',
    tech: ['Embedded Systems', 'IoT', 'Cloud Dashboard'],
    coverGradient: 'from-amber-500 via-orange-600 to-red-700',
    overview:
      'An end-to-end monitoring solution combining custom firmware for trail cameras, cellular connectivity, and a cloud dashboard for remote wildlife and property surveillance across vast outdoor areas.',
    problem:
      'The client needed reliable remote monitoring across 50+ acres without WiFi infrastructure, with real-time alerts and historical footage review capabilities.',
    solution:
      'GoPerch engineered custom camera firmware, solar-powered cellular gateways, and a responsive cloud dashboard — delivering 24/7 monitoring with intelligent motion detection and alert routing.',
    architecture: [
      'Embedded C firmware on ARM microcontrollers',
      '4G/LTE cellular modem integration',
      'AWS IoT Core for device management',
      'React cloud dashboard with map visualization',
      'S3 storage with intelligent tiering for footage',
    ],
    developmentProcess: [
      'Field testing across 3 climate zones',
      'Power consumption optimization for solar setups',
      'Firmware OTA update pipeline development',
      'Dashboard beta with conservation team',
    ],
    keyFeatures: [
      'Motion-triggered HD capture',
      'Solar power management system',
      'Real-time cellular upload',
      'Geographic camera map view',
      'AI species classification alerts',
      'Weather-resistant hardware enclosure',
    ],
    challenges: [
      'Minimizing power draw for 30-day battery life',
      'Reliable uploads in low-signal rural areas',
      'Weatherproofing electronics for extreme conditions',
    ],
    metrics: [
      { label: 'Uptime', value: '99.2%' },
      { label: 'False Alert Rate', value: '-60%' },
      { label: 'Battery Life', value: '30+ days' },
      { label: 'Cameras Deployed', value: '48' },
    ],
    results: [
      'Deployed 48 cameras across remote properties',
      'Reduced on-site inspection visits by 65%',
      'Enabled real-time wildlife population tracking',
    ],
    nextPhase: [
      'Edge AI for on-device species recognition',
      'Mesh network for extended coverage',
      'Integration with conservation databases',
    ],
    relatedSlugs: ['ai-business-assistant', 'enterprise-erp-suite'],
  },
  {
    slug: 'ai-business-assistant',
    title: 'AI Business Assistant',
    shortDescription:
      'An intelligent assistant leveraging LLMs and RAG to automate internal knowledge retrieval and reporting.',
    industry: 'Professional Services',
    clientType: 'Consulting Firm',
    tech: ['LLMs', 'Vector Database', 'RAG'],
    coverGradient: 'from-violet-500 via-purple-600 to-fuchsia-700',
    overview:
      'A secure AI-powered assistant that helps teams instantly access institutional knowledge, generate reports, and automate repetitive document workflows using retrieval-augmented generation.',
    problem:
      'Consultants spent hours searching internal documents, past proposals, and client histories — slowing delivery and creating inconsistent outputs across teams.',
    solution:
      'We built a RAG-powered assistant that indexes 50,000+ documents, understands natural language queries, and generates context-aware responses with source citations.',
    architecture: [
      'Next.js chat interface with streaming responses',
      'Python FastAPI backend with LangChain orchestration',
      'Pinecone vector database for semantic search',
      'OpenAI GPT-4 with custom fine-tuned prompts',
      'Document ingestion pipeline with OCR support',
    ],
    developmentProcess: [
      'Knowledge base audit and categorization',
      'Security review for client data isolation',
      'Pilot with 20 power users',
      'Gradual rollout with feedback loops',
    ],
    keyFeatures: [
      'Natural language document search',
      'Automated report generation',
      'Source-cited responses',
      'Role-based knowledge access',
      'Slack & Teams integration',
      'Usage analytics dashboard',
    ],
    challenges: [
      'Ensuring zero data leakage between client projects',
      'Handling diverse document formats (PDF, DOCX, slides)',
      'Maintaining response accuracy for domain-specific queries',
    ],
    metrics: [
      { label: 'Search Time', value: '-90%' },
      { label: 'Report Draft Speed', value: '5x faster' },
      { label: 'User Satisfaction', value: '4.8/5' },
      { label: 'Documents Indexed', value: '50K+' },
    ],
    results: [
      'Reduced average document search from 25 min to 2 min',
      'Automated 40% of first-draft report generation',
      'Improved proposal consistency across 8 practice areas',
    ],
    nextPhase: [
      'Multi-modal input (images, charts)',
      'Automated client briefing generation',
      'Custom model fine-tuning per practice area',
    ],
    relatedSlugs: ['enterprise-erp-suite', 'trail-camera-monitoring-system'],
  },
  {
    slug: 'logistics-management-erp',
    title: 'Logistics Management ERP',
    shortDescription:
      'End-to-end logistics platform managing fleet, routes, shipments, and warehouse operations.',
    industry: 'Logistics & Transportation',
    clientType: 'Regional Logistics Provider',
    tech: ['Next.js', 'FastAPI', 'Docker'],
    coverGradient: 'from-slate-600 via-blue-700 to-indigo-800',
    overview:
      'A purpose-built logistics ERP that unifies fleet management, route optimization, shipment tracking, and warehouse operations for a growing regional logistics provider.',
    problem:
      'Dispatchers juggled multiple tools for routing, tracking, and billing — leading to delayed shipments, billing errors, and poor customer communication.',
    solution:
      'GoPerch delivered an integrated logistics platform with real-time GPS tracking, automated dispatch, digital proof-of-delivery, and unified billing — all in one system.',
    architecture: [
      'Next.js dashboard with real-time map views',
      'FastAPI services with geospatial query support',
      'PostgreSQL with PostGIS for route data',
      'Docker-based deployment on AWS',
      'Twilio integration for customer notifications',
    ],
    developmentProcess: [
      'Ride-along sessions with dispatch team',
      'GPS hardware integration testing',
      'Parallel run with legacy system for 30 days',
      'Phased driver app rollout',
    ],
    keyFeatures: [
      'Real-time fleet GPS tracking',
      'Automated route optimization',
      'Digital proof-of-delivery',
      'Customer shipment portal',
      'Automated invoicing engine',
      'Driver mobile companion app',
    ],
    challenges: [
      'Integrating diverse GPS hardware vendors',
      'Real-time sync across 150+ mobile devices',
      'Migrating 5 years of shipment history',
    ],
    metrics: [
      { label: 'On-Time Delivery', value: '+28%' },
      { label: 'Dispatch Efficiency', value: '+40%' },
      { label: 'Billing Errors', value: '-92%' },
      { label: 'Customer NPS', value: '+35 pts' },
    ],
    results: [
      'On-time delivery rate improved from 78% to 99%',
      'Reduced dispatch planning time by 3 hours daily',
      'Cut billing dispute resolution from 2 weeks to 2 days',
    ],
    nextPhase: [
      'Predictive maintenance for fleet vehicles',
      'Carbon footprint tracking module',
      'API marketplace for third-party integrations',
    ],
    relatedSlugs: ['enterprise-erp-suite', 'smart-inventory-platform'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined)
}
