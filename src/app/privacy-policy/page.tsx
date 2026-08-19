import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Ignisis Solutions collects, uses and protects information shared through our website and services.',
}

const sections = [
  {
    id: 'information',
    title: 'Information we collect',
    summary: 'The details we need to respond to enquiries and deliver our work.',
    paragraphs: [
      'When you contact us, we may collect your name, email address, phone number, company details, project requirements and any other information you choose to share. We collect only what is reasonably needed to understand and respond to your request.',
      'Our website may also receive basic technical information such as browser type, device type and pages visited. This helps us keep the experience reliable and improve our services.',
    ],
    bullets: ['Contact and project information you submit', 'Basic website usage and device information', 'Information shared during an active client relationship'],
  },
  {
    id: 'use',
    title: 'How we use information',
    summary: 'We use your information to communicate clearly and improve the work we do.',
    paragraphs: [
      'We use submitted information to answer questions, prepare proposals, communicate about projects and provide requested services. We may also use aggregated, non-identifying information to understand how our website is used.',
      'We do not sell your personal information. We only send marketing communications where we have a lawful basis to do so, and you can ask us to stop at any time.',
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing and security',
    summary: 'Information is shared carefully and protected with reasonable safeguards.',
    paragraphs: [
      'We may use trusted providers for hosting, email delivery, analytics or project operations. These providers receive only the information needed to perform their service and are expected to protect it appropriately.',
      'No online transmission or storage system is completely secure. We take reasonable technical and organizational steps to protect information, but cannot guarantee absolute security.',
    ],
  },
  {
    id: 'rights',
    title: 'Your choices and rights',
    summary: 'You can ask what we hold, request corrections or ask us to remove information where appropriate.',
    paragraphs: [
      'You may contact us to request access to, correction of or deletion of personal information we hold about you. You can also ask questions about how your information is used or withdraw consent where processing is based on consent.',
      'Some information may need to be retained to meet legal, accounting or legitimate business requirements. We will explain any limitation when we respond to your request.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact and updates',
    summary: 'We will keep this policy current as our website and services evolve.',
    paragraphs: [
      'For privacy questions or requests, please use our contact page or email ignisissolutions@gmail.com. We may update this policy from time to time; the latest version will always be published on this page with its updated date.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy at Ignisis"
      title="Your information,"
      highlightedTitle="handled with care."
      intro="We believe good digital work starts with trust. This policy explains what information we collect, why we use it and the choices available to you."
      updated="August 19, 2026"
      sections={sections}
    />
  )
}
