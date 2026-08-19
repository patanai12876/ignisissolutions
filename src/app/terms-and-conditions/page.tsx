import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms that guide projects, communication and use of the Ignisis Solutions website.',
}

const sections = [
  {
    id: 'agreement',
    title: 'Working together',
    summary: 'These terms set the baseline for using our website and engaging our team.',
    paragraphs: [
      'By using this website or engaging Ignisis Solutions for services, you agree to these terms. A specific project may also have a separate proposal, scope of work or agreement; where that document conflicts with these terms, the signed project document will take priority for that project.',
      'We may update these terms when our services or legal obligations change. The current version will be published on this page.',
    ],
  },
  {
    id: 'services',
    title: 'Services and scope',
    summary: 'Every project is shaped around an agreed scope, timeline and set of deliverables.',
    paragraphs: [
      'We provide services such as web development, software development, e-commerce, branding, design, marketing and consultancy. The exact deliverables, milestones, fees and assumptions will be confirmed before work begins.',
      'Requests outside the agreed scope may affect the timeline or fee. We will discuss meaningful changes with you before proceeding.',
    ],
    bullets: ['The client provides accurate content, feedback and access when needed', 'Approvals and feedback should be provided within the agreed timeframes', 'Third-party fees, subscriptions and paid media budgets are separate unless stated otherwise'],
  },
  {
    id: 'payments',
    title: 'Fees and payment',
    summary: 'Clear payment milestones help projects keep moving for everyone involved.',
    paragraphs: [
      'Fees and payment milestones are set out in the relevant proposal or invoice. Unless a project agreement says otherwise, work may begin after the agreed deposit or first payment is received.',
      'Invoices are payable by their stated due date. Delayed payment may pause work and shift delivery dates. Approved third-party costs remain the client responsibility.',
    ],
  },
  {
    id: 'ownership',
    title: 'Ownership and portfolio use',
    summary: 'You receive the agreed final work, while the tools and methods behind it remain ours.',
    paragraphs: [
      'Once all agreed fees are paid, the client receives the rights to the final, client-specific deliverables described in the project agreement. Ignisis retains ownership of pre-existing tools, reusable code, processes, concepts not selected and third-party materials.',
      'Unless confidentiality is agreed in writing, we may show completed work in our portfolio and describe the project in a professional case study. We will respect reasonable launch timing requests.',
    ],
  },
  {
    id: 'limits',
    title: 'Responsibilities and limits',
    summary: 'A practical boundary around third-party platforms, content and service availability.',
    paragraphs: [
      'The client is responsible for having the rights to content, images, trademarks and data supplied to us. We are not responsible for changes, outages or failures caused by third-party platforms, hosting providers, domain registrars, payment gateways or services outside our control.',
      'We aim to deliver reliable, high-quality work, but no website, campaign or software system can guarantee a particular ranking, revenue result or level of business growth. Any liability will be limited to the fees paid for the affected service, to the extent allowed by applicable law.',
    ],
  },
  {
    id: 'contact',
    title: 'Questions and contact',
    summary: 'We prefer to resolve concerns through direct, clear communication.',
    paragraphs: [
      'If you have a question about these terms or a project, please contact us through the contact page or email ignisissolutions@gmail.com. We will work in good faith to understand the issue and find a practical resolution.',
    ],
  },
]

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="The working agreement"
      title="Good work needs"
      highlightedTitle="clear ground rules."
      intro="These terms keep expectations clear from the first conversation to the final handover, so every project can move forward with confidence."
      updated="August 19, 2026"
      sections={sections}
    />
  )
}
