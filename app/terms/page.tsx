import Navigation from '../../components/Navigation/page'
import Footer from '../../components/Footer/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Bytebit Media Art',
  description: 'Terms and conditions for using our services',
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
                Terms of <span className="gradient-text">Service</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Last Updated: November 23, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mb-12">
                <p className="text-gray-700 dark:text-gray-300 m-0">
                  Please read these Terms of Service carefully before using our services. By accessing or using our services, you agree to be bound by these terms.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                By accessing and using the services provided by Bytebit Media Art ("we," "us," or "our"), a business entity registered and operating in the Lao People's Democratic Republic (Lao PDR), you accept and agree to be bound by these Terms of Service. These terms constitute a binding contract in accordance with the Contract Law of the Lao PDR. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                2. Services Description
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Bytebit Media Art provides comprehensive digital design and development services including but not limited to:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                2.1 UX/UI Design Services
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>User Experience (UX) design: Creating intuitive and user-friendly website and application structures</li>
                <li>User Interface (UI) design: Designing visual elements including buttons, colors, fonts, and overall aesthetics</li>
                <li>Wireframing and prototyping</li>
                <li>User journey mapping and optimization</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                2.2 Graphics Design Services
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Logo design and brand identity development</li>
                <li>Banner and poster design</li>
                <li>Online advertising materials</li>
                <li>Marketing collateral and promotional graphics</li>
                <li>Brand guideline creation</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                2.3 System Algorithms & Advanced Development
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Custom algorithm development for automation</li>
                <li>Product recommendation systems</li>
                <li>Search and data analysis systems</li>
                <li>Customer behavior analytics</li>
                <li>Performance optimization algorithms</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                2.4 Platforms & Websites Development
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Custom website development tailored to your specific needs</li>
                <li>Template-based websites with customization options</li>
                <li>Custom platform development (e-commerce systems, membership platforms, etc.)</li>
                <li>Responsive and mobile-friendly design</li>
                <li>Content Management System (CMS) integration</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                2.5 SaaS Solutions for Business Management
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Inventory management systems for retail stores</li>
                <li>Restaurant management and table reservation systems</li>
                <li>Warehouse and logistics management systems</li>
                <li>Point of Sale (POS) systems</li>
                <li>Delivery and shipping management systems</li>
                <li>Membership and customer relationship management (CRM)</li>
                <li>Subscription-based services with add-on features</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                3. User Accounts
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                3.1 Account Creation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                To access certain features of our services, including SaaS platforms, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                3.2 Account Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                4. Payment Terms
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                4.1 Fees and Pricing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You agree to pay all fees associated with the services you purchase. Pricing varies based on service type:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li><strong>One-time projects:</strong> Custom websites, design work, and development projects with fixed or milestone-based pricing</li>
                <li><strong>SaaS subscriptions:</strong> Monthly or annual recurring fees for platform access</li>
                <li><strong>Add-on features:</strong> Additional charges for premium features or modules</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                All prices may be quoted in USD or Lao Kip (LAK). Currency conversion, if applicable, shall be conducted at the exchange rate quoted by the Bank of the Lao PDR on the date of payment. We reserve the right to change our pricing at any time with 30 days' notice for subscription services.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                4.2 Payment Methods
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We accept various payment methods including credit cards, PayPal, and bank transfers. For custom development projects, payment is typically required before work begins or according to milestone schedules. For SaaS subscriptions, payment is processed automatically on your billing cycle.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                4.3 Refunds
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Refund policies vary by service type. For custom development projects, deposits are non-refundable once work has commenced. For SaaS subscriptions, refunds may be provided on a case-by-case basis within the first 14 days of initial subscription. Specific refund terms will be outlined in your service agreement.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                4.4 Subscription Cancellation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                SaaS subscriptions may be cancelled at any time. Cancellations take effect at the end of the current billing period. No refunds will be provided for partial subscription periods unless otherwise specified.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                5. Intellectual Property Rights
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                5.1 Ownership of Custom Work
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Upon full payment for custom development projects, you will own the final deliverables created specifically for you. However, we retain ownership of all preliminary designs, concepts, and any pre-existing intellectual property used in the project.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                5.2 SaaS Platform Ownership
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                For SaaS solutions, we retain full ownership of the platform, code, and underlying technology. You are granted a limited, non-exclusive license to use the platform during your active subscription period. You own the data you input into our systems.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                5.3 Portfolio Rights
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We reserve the right to display completed work in our portfolio and marketing materials unless otherwise agreed in writing. For confidential projects, we will obtain your written consent before showcasing the work.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                5.4 Third-Party Materials
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You are responsible for ensuring you have the necessary rights to any third-party materials (images, fonts, content, etc.) you provide for use in your project. We are not liable for any copyright infringement resulting from materials you provide.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                6. Project Timelines and Deliverables
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Project timelines are estimates and may be subject to change based on project scope, client feedback, and unforeseen circumstances. We will make reasonable efforts to meet agreed-upon deadlines, but delays caused by client feedback, approval processes, or insufficient information provision are not our responsibility.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                7. Client Responsibilities
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Provide timely feedback and approvals within the agreed timeframes</li>
                <li>Supply necessary content, materials, and information required for the project</li>
                <li>Respond to communications in a reasonable timeframe (typically within 5 business days)</li>
                <li>Make payments according to agreed schedules</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Ensure proper use of SaaS platforms in accordance with our acceptable use policy</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                8. SaaS-Specific Terms
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                8.1 Service Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We strive to maintain 99.5% uptime for our SaaS platforms, but we do not guarantee uninterrupted access. Scheduled maintenance will be announced in advance when possible.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                8.2 Data Backup and Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We implement industry-standard security measures and perform regular backups of your data in compliance with the Law on Electronic Data Protection of the Lao PDR. We protect personal data, including personal history, financial information, health records, and other sensitive information from unauthorized access, disclosure, or misuse. However, you are encouraged to maintain your own backups of critical data.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                8.3 Data Export
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You have the right to export your data from our SaaS platforms at any time. Upon subscription termination, we will retain your data for 30 days before permanent deletion, unless otherwise agreed.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                8.4 Updates and Modifications
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We may update, modify, or add features to our SaaS platforms without prior notice. Major changes that affect core functionality will be communicated in advance.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                9. Warranties and Disclaimers
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                9.1 Service Warranty
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We warrant that our custom development services will be performed in a professional and workmanlike manner in accordance with industry standards in the Lao PDR. We will correct any defects in our work at no additional charge within the warranty period specified in your project agreement (typically 30-90 days after final delivery and acceptance of deliverables).
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                9.2 Limitation of Warranty
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                The warranty in Section 9.1 does not cover: (a) defects caused by misuse, unauthorized modifications, or failure to follow our instructions; (b) third-party software, content, or services; (c) issues arising from your hardware, internet connection, or operating environment; or (d) force majeure events beyond our reasonable control.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                9.3 Disclaimer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                EXCEPT AS EXPRESSLY PROVIDED IN SECTION 9.1, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, TO THE MAXIMUM EXTENT PERMITTED BY THE LAWS OF THE LAO PDR. WE DISCLAIM ALL IMPLIED WARRANTIES INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE SPECIFIC RESULTS FROM OUR SERVICES, INCLUDING BUT NOT LIMITED TO INCREASED SALES, TRAFFIC, SEARCH ENGINE RANKINGS, OR BUSINESS SUCCESS.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                10. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUES, OR DATA. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                11. Termination
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Services may be terminated under the following conditions in accordance with the Contract Law of the Lao PDR:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>By mutual written agreement between both parties</li>
                <li>For material breach of these terms with 15 days' written notice, allowing the breaching party an opportunity to remedy the breach</li>
                <li>For non-payment with 30 days' written notice</li>
                <li>By either party with written notice as specified in the project agreement or service contract</li>
                <li>Immediate termination for illegal activities, misuse of services, or activities that violate laws and regulations of the Lao PDR</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Upon termination of custom development projects, you will pay for all work completed up to the termination date at the agreed rates. Upon termination of SaaS subscriptions, access will be revoked at the end of the current billing period, unless terminated for breach, in which case access may be revoked immediately.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                12. Confidentiality
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project or service provision, in accordance with applicable laws and regulations of the Lao PDR. Confidential information includes, but is not limited to, business plans, financial data, technical specifications, customer information, and trade secrets. This obligation survives termination of the agreement for a period of three (3) years, or as otherwise required by law.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Confidential information does not include information that: (a) is or becomes publicly available through no breach of this agreement; (b) was rightfully known to the receiving party prior to disclosure; (c) is independently developed without use of the confidential information; or (d) is required to be disclosed by law or court order.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                13. Acceptable Use Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                When using our services, especially SaaS platforms, you agree to comply with all applicable laws and regulations of the Lao PDR and agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Use the services for any illegal purposes or activities that violate the laws of the Lao PDR</li>
                <li>Engage in activities that threaten national security, public order, or social stability</li>
                <li>Distribute content that is harmful to the natural environment or cultural heritage of Laos</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Distribute malware, viruses, or harmful code</li>
                <li>Engage in activities that could damage, disable, or overload our infrastructure</li>
                <li>Resell or redistribute our services without written permission</li>
                <li>Reverse engineer or copy our proprietary technology</li>
                <li>Violate the data privacy rights of others as protected under Lao law</li>
                <li>Engage in fraudulent activities or misrepresent your identity</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                14. Dispute Resolution
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                14.1 Negotiation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Any disputes, controversies, or claims arising from or relating to these Terms of Service or the services provided shall first be attempted to be resolved through good faith negotiations between the parties within thirty (30) days of written notice of the dispute.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                14.2 Mediation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                If the dispute cannot be resolved through negotiation, the parties agree to submit the dispute to mediation in accordance with the Law on Resolution of Economic Disputes of the Lao PDR. Mediation shall be conducted through the Centre for Economic Dispute Resolution (CEDR) or the Office for Economic Dispute Resolution (OEDR) in Vientiane, Lao PDR.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                14.3 Arbitration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                If mediation fails to resolve the dispute within sixty (60) days, either party may refer the dispute to arbitration. The arbitration shall be conducted in accordance with the Law on Resolution of Economic Disputes of the Lao PDR. The parties may agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Domestic arbitration through CEDR or OEDR in Vientiane, Lao PDR; or</li>
                <li>International arbitration through a mutually agreed international arbitration center (such as the Singapore International Arbitration Centre - SIAC) in accordance with their rules</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                The arbitration shall be conducted in English or Lao language as agreed by the parties. The arbitral award shall be final and binding on both parties. Foreign arbitral awards shall be recognized and enforced in accordance with the New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards (1958), to which the Lao PDR is a signatory.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                14.4 Court Jurisdiction
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                If the parties do not agree to arbitration or if the dispute is not suitable for arbitration, the dispute shall be submitted to the People's Court of Vientiane, Lao PDR, which shall have exclusive jurisdiction over the matter.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                15. Governing Law and Compliance
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                15.1 Governing Law
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                These Terms of Service shall be governed by, interpreted, and construed in accordance with the laws and regulations of the Lao People's Democratic Republic, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>The Contract Law of the Lao PDR</li>
                <li>The Law on Enterprises of the Lao PDR</li>
                <li>The Civil Code of the Lao PDR (Law No. 55/NA)</li>
                <li>The Law on Investment Promotion of the Lao PDR</li>
                <li>The Law on Resolution of Economic Disputes of the Lao PDR (Law No. 51/NA)</li>
                <li>The Law on Electronic Data Protection of the Lao PDR</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                15.2 Compliance with Laws
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Both parties agree to comply with all applicable laws, regulations, and government policies of the Lao PDR in the performance of their obligations under these Terms. This includes compliance with tax laws, labor laws, intellectual property laws, and data protection regulations.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                15.3 Language
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                These Terms of Service are provided in English for convenience. In the event of any conflict or inconsistency between the English version and any translation, the English version shall prevail to the extent permitted by Lao law. For official legal purposes, a Lao language version may be prepared and shall be equally binding.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                16. Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We reserve the right to modify, amend, or update these Terms of Service at any time. Material changes will be communicated to you through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Posting the updated Terms on our website with a new "Last Updated" date</li>
                <li>Email notification to active clients and registered users</li>
                <li>In-platform notifications for SaaS users</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Changes will take effect thirty (30) days after notification, unless otherwise specified. Your continued use of our services after the effective date of the modified Terms constitutes your acceptance of the updated Terms. If you do not agree with the modifications, you must discontinue use of our services and may terminate your agreement in accordance with Section 11.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                17. Severability
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable under the laws of the Lao PDR or by a court of competent jurisdiction, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable while preserving the original intent of the parties, or if modification is not possible, it will be eliminated. The remaining provisions of these Terms shall continue in full force and effect.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                18. Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Email:</strong> bytebitmedart@gmail.com</li>
                  <li><strong>Phone:</strong> +856 2029009976</li>
                  <li><strong>Address:</strong> XMR9+64J, Vientiane, Laos</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl mt-12">
                <p className="text-gray-700 dark:text-gray-300 m-0">
                  <strong>Acknowledgment:</strong> By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}