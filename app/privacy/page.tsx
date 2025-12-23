import Navigation from '../../components/Navigation/page'
import Footer from '../../components/Footer/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Bytebit Media Art',
  description: 'Our commitment to protecting your privacy and personal data',
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
                Privacy <span className="gradient-text">Policy</span>
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
                  At Bytebit Media Art, we are committed to protecting your privacy and ensuring the security of your personal information in accordance with the Law on Electronic Data Protection No. 25/NA of the Lao People's Democratic Republic. This Privacy Policy explains how we collect, use, disclose, and safeguard your electronic data.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                As a data controller operating in the Lao PDR, we are subject to the Law on Electronic Data Protection No. 25/NA (enacted May 12, 2017) and the Penal Code No. 26/NA (enacted May 17, 2017). This Privacy Policy is designed to inform you about our data practices and your rights under Lao law. The Ministry of Technology and Communications (MTC) oversees compliance and enforcement of data protection in the Lao PDR.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                1. Data Controller Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Bytebit Media Art is the data controller responsible for managing your electronic data. As a data controller, we are individuals, legal entities, or organizations responsible for managing electronic data in compliance with all applicable policies, laws, strategic plans, and the national socio-economic development plan of the Lao PDR.
              </p>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl mb-6">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Business Name:</strong> Bytebit Media Art</li>
                  <li><strong>Email:</strong> bytebitmedart@gmail.com</li>
                  <li><strong>Phone:</strong> +856 2029009976</li>
                  <li><strong>Address:</strong> XMR9+64J, Vientiane, Laos</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                2. Scope and Application
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This Privacy Policy applies to all electronic data collected, processed, stored, and transferred by Bytebit Media Art within the Lao PDR. It covers both domestic and international users who interact with our services, in accordance with the territorial scope of the Law on Electronic Data Protection No. 25/NA.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                3. Classification of Electronic Data
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                In accordance with the Law on Electronic Data Protection No. 25/NA, we classify electronic personal data into two categories:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                3.1 General Data
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                General data refers to information that may be accessed, used, and disclosed upon correct identification of the source by the relevant controller or processor. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Name</li>
                <li>Position or job title</li>
                <li>Business address</li>
                <li>Telephone number</li>
                <li>Email address</li>
                <li>Company name</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                General data may be used for legitimate business purposes provided the source is properly identified and stated.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                3.2 Specific Data (Sensitive Data)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Specific data refers to data that is restricted from access, use, or dissemination without explicit authorization from the data owner. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Customer data and transaction records</li>
                <li>Financial information and payment details</li>
                <li>Personal history and background information</li>
                <li>Health records</li>
                <li>Race, ethnicity, or religion</li>
                <li>Government identification numbers</li>
                <li>Login credentials and passwords</li>
                <li>Biometric data</li>
                <li>Project data and confidential business information</li>
                <li>Official secrets</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                <strong>IMPORTANT:</strong> Collection, use, or dissemination of specific data requires your explicit authorization or permission, unless otherwise required by law.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                4. Information We Collect
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                4.1 Personal Information You Provide
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We collect electronic personal data that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Register for an account on our website or SaaS platforms</li>
                <li>Request our services or request a quote</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Contact us through our website, email, or phone</li>
                <li>Participate in surveys, promotions, or feedback forms</li>
                <li>Enter into service agreements or contracts with us</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                4.2 Automatically Collected Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                When you visit our website or use our services, we automatically collect certain technical information about your device and usage, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>IP address and geolocation data</li>
                <li>Browser type, version, and language settings</li>
                <li>Operating system and device information</li>
                <li>Referring website or source</li>
                <li>Pages viewed, time spent on pages, and navigation paths</li>
                <li>Device identifiers and unique identifiers</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and access times</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                5. Legal Basis and Principles for Data Processing
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We process your electronic data in accordance with the following legal bases and principles under Lao law:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                5.1 Lawful Processing
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li><strong>Explicit Consent:</strong> For specific data, we obtain your explicit authorization before collection, use, or dissemination</li>
                <li><strong>Contractual Necessity:</strong> Processing is necessary for the performance of a contract or service agreement</li>
                <li><strong>Legal Obligation:</strong> Processing is required to comply with laws and regulations of the Lao PDR</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests, provided it does not override your rights</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                5.2 Core Principles
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li><strong>Legality and Transparency:</strong> All data collection and processing has a legitimate basis, and you are informed about how your data will be used</li>
                <li><strong>Purpose Limitation:</strong> Data may only be used for its specified, legitimate purpose and not for unrelated purposes</li>
                <li><strong>Data Minimization:</strong> We collect only the data necessary for the intended purpose</li>
                <li><strong>Data Accuracy:</strong> We maintain accurate and up-to-date data, with mechanisms for you to request corrections</li>
                <li><strong>Storage Limitation:</strong> Personal data is retained only as long as necessary for its intended purpose</li>
                <li><strong>Integrity and Confidentiality:</strong> We implement appropriate security measures to protect your data</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                6. How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We use the electronic data we collect only for specified, legitimate purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Creating and managing your account</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Sending service-related communications and updates</li>
                <li>Sending marketing communications (only with your explicit consent, which you may withdraw at any time)</li>
                <li>Improving our website, platforms, and services based on usage data</li>
                <li>Detecting, preventing, and addressing fraud, security issues, or technical problems</li>
                <li>Complying with legal obligations under the laws of the Lao PDR</li>
                <li>Protecting the national security, stability, and social order of Laos</li>
                <li>Maintaining compliance with treaties and international agreements to which the Lao PDR is a party</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                7. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We do not sell, trade, or rent your personal information to third parties. We maintain strict confidentiality and only share your electronic data in the following limited circumstances:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                7.1 Service Providers and Processors
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We may share your data with trusted third-party service providers who perform services on our behalf (such as hosting providers, payment processors, or analytics services). These service providers are contractually obligated to protect your data and use it only for the purposes we specify.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                7.2 Legal Requirements and Government Authorities
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We may disclose your information when required by law or in response to valid requests by government authorities, law enforcement agencies, or courts in the Lao PDR, including when necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Comply with legal obligations or court orders</li>
                <li>Protect national security or public safety</li>
                <li>Prevent or investigate criminal activities</li>
                <li>Protect our legal rights or the rights of others</li>
                <li>Enforce our Terms of Service</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                7.3 Business Transfers
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                In connection with a merger, acquisition, reorganization, or sale of assets, your personal data may be transferred to the acquiring entity, subject to the same privacy protections outlined in this policy.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                7.4 With Your Consent
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We may share your information with other parties when you explicitly agree to such sharing or authorize us to do so.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                8. Cross-Border Data Transfers
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                In accordance with the Law on Electronic Data Protection No. 25/NA, any transfer of personal or official electronic data outside of the Lao PDR requires:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Explicit consent from the Data Administrator (Ministry of Technology and Communications)</li>
                <li>Verification that the transfer does not contravene the national interests of the Lao PDR</li>
                <li>Adequate safeguards to ensure the receiving country or entity provides appropriate data protection</li>
                <li>Your explicit consent for the cross-border transfer (for specific data)</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We ensure that all international data transfers comply with these requirements and that appropriate technical and legal safeguards are in place to protect your data.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                9. Cookies and Tracking Technologies
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                9.1 Use of Cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device. In accordance with Lao law, we obtain your consent for non-essential cookies.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                9.2 Types of Cookies We Use
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly (no consent required)</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (consent required)</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (consent required)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences (consent required)</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                9.3 Managing Cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You can control and manage cookies through your browser settings. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                10. Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                As a data controller under Lao law, we are obligated to implement appropriate technical and organizational security measures to protect your electronic data. Our security measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Creating and maintaining a secure database system and database backup system</li>
                <li>Implementing secure data transmission using encryption protocols (SSL/TLS)</li>
                <li>Using automatic data searching and data restoring systems</li>
                <li>Restricting access to personal data to authorized personnel only</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection and confidentiality obligations</li>
                <li>Incident response procedures for data breaches</li>
                <li>Physical security measures for servers and data storage facilities</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                While we implement industry-standard security measures and comply with Lao law requirements, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but commit to protecting your data to the best of our abilities and in accordance with legal requirements.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                10.1 Data Breach Notification
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                In the event of a data breach that compromises your personal data, we will notify the relevant authorities (Ministry of Technology and Communications) as required by law and will inform affected individuals in accordance with our legal obligations under the Law on Electronic Data Protection and the Penal Code.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                11. Your Rights and Choices
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Under the Law on Electronic Data Protection No. 25/NA and other applicable laws of the Lao PDR, you have the following rights regarding your personal data:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                11.1 Right to Access
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You have the right to request copies of your personal data that we hold. We will provide this information upon verification of your identity.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                11.2 Right to Rectification (Correction)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You have the right to request correction of any inaccurate or incomplete personal data we hold about you. We will update your information upon verification.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                11.3 Right to Erasure (Deletion)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You have the right to request deletion of your personal data in certain circumstances, such as when the data is no longer necessary for the purposes for which it was collected, or when you withdraw your consent (where consent is the legal basis for processing).
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                11.4 Right to Data Portability
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You have the right to obtain your personal data in a structured, commonly used, and machine-readable format and to transfer that data to another service provider.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                11.5 Right to Object
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You have the right to object to the processing of your personal data for direct marketing purposes or automated decision-making. We will cease processing upon receipt of your objection.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                11.6 Right to Restriction of Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                You have the right to request that we limit the processing of your personal data under specific conditions, such as when you contest the accuracy of the data or object to processing.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                11.7 Right to Withdraw Consent
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Where we rely on your consent as the legal basis for processing (particularly for specific data), you have the right to withdraw your consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                11.8 How to Exercise Your Rights
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                To exercise any of these rights, please contact us using the information provided in Section 16. We will respond to your request within a reasonable timeframe and in accordance with applicable Lao law. We may require verification of your identity before processing your request.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                12. Data Retention
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                In accordance with the principle of storage limitation under Lao law, we retain your personal electronic data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Our retention criteria include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li><strong>Active Accounts:</strong> Data is retained while your account is active and for a reasonable period thereafter</li>
                <li><strong>Service Agreements:</strong> Data related to contracts is retained for the duration of the agreement plus any legally required retention period</li>
                <li><strong>Legal Obligations:</strong> Data required for compliance with tax, accounting, or other legal requirements is retained as mandated by law</li>
                <li><strong>Dispute Resolution:</strong> Data may be retained as necessary for the establishment, exercise, or defense of legal claims</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                After the retention period expires, we securely delete or anonymize your personal data in accordance with our data deletion procedures and Lao law requirements.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                13. Children's Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our services are not directed to individuals under the age of 18 (minors under Lao law). We do not knowingly collect personal electronic data from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information promptly. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                14. Accountability and Compliance
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                As a data controller in the Lao PDR, we maintain accountability for our data processing activities by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Maintaining records of all data processing activities</li>
                <li>Appointing responsible personnel for data protection oversight</li>
                <li>Conducting regular audits and assessments of our data practices</li>
                <li>Providing training to employees on data protection obligations</li>
                <li>Implementing data protection by design and by default</li>
                <li>Conducting Data Protection Impact Assessments (DPIAs) for high-risk processing activities, including profiling and automated decision-making</li>
                <li>Cooperating with the Ministry of Technology and Communications (MTC) as the regulatory authority</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                15. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Posting the updated Privacy Policy on our website with a new "Last Updated" date</li>
                <li>Sending email notifications to registered users for significant changes</li>
                <li>Displaying prominent notices on our website or within our services</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We encourage you to review this Privacy Policy periodically. Your continued use of our services after the effective date of the updated Privacy Policy constitutes your acceptance of the changes. If you do not agree with the updated policy, you should discontinue use of our services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                16. Contact Us and Data Protection Officer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data protection practices, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl mb-6">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Business Name:</strong> Bytebit Media Art</li>
                  <li><strong>Email:</strong> bytebitmedart@gmail.com</li>
                  <li><strong>Phone:</strong> +856 2029009976</li>
                  <li><strong>Address:</strong> XMR9+64J, Vientiane, Laos</li>
                  <li><strong>Response Time:</strong> We will respond to your inquiry within 15 business days</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                17. Complaints and Regulatory Authority
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you believe that we have not complied with this Privacy Policy or applicable data protection laws of the Lao PDR, you have the right to lodge a complaint with:
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                17.1 Internal Complaint Process
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                First, we encourage you to contact us directly using the information provided in Section 16. We are committed to resolving any concerns you may have about our data practices.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                17.2 Regulatory Authority - Ministry of Technology and Communications (MTC)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                If you are not satisfied with our response or wish to report a violation of data protection laws, you may file a complaint with the Ministry of Technology and Communications, which serves as the Data Administrator and regulatory authority for electronic data protection in the Lao PDR.
              </p>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Ministry of Technology and Communications (MTC)</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Lane Xang Avenue, Vientiane Capital, Lao PDR
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                17.3 Penalties for Non-Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We are aware that violations of the Law on Electronic Data Protection No. 25/NA may result in penalties including warnings, fines, suspension of operations, or criminal prosecution under the Penal Code No. 26/NA. We are committed to full compliance with all applicable laws and regulations.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                18. Prohibited Activities
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                In accordance with the Law on Electronic Data Protection and the Penal Code of the Lao PDR, the following activities are strictly prohibited and may result in legal action:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Unauthorized access to electronic data or computer systems</li>
                <li>Illegal modification, deletion, or destruction of electronic data</li>
                <li>Dissemination of specific (sensitive) data without authorization</li>
                <li>Collection or use of personal data for purposes other than those specified and consented to</li>
                <li>Transfer of personal data outside the Lao PDR without proper authorization</li>
                <li>Failure to implement adequate security measures to protect electronic data</li>
                <li>Use of data in ways that threaten national security, public order, or social stability</li>
                <li>Sale or commercial exploitation of personal data without consent</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We do not engage in any of these prohibited activities and expect the same from our users and partners.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                19. Language and Interpretation
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This Privacy Policy is provided in English for your convenience. In the event of any conflict, discrepancy, or inconsistency between the English version and any translation into Lao or other languages, the English version shall prevail to the extent permitted by Lao law. For official legal purposes, a Lao language version may be prepared and shall be equally binding.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                20. Severability
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                If any provision of this Privacy Policy is found to be invalid, illegal, or unenforceable under the laws of the Lao PDR, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable, or if modification is not possible, it will be eliminated.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                21. Entire Agreement
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This Privacy Policy, together with our Terms of Service, constitutes the entire agreement between you and Bytebit Media Art regarding the collection, use, and protection of your personal electronic data.
              </p>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl mt-12">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Important Notice:</strong> This Privacy Policy is governed by and construed in accordance with the Law on Electronic Data Protection No. 25/NA dated May 12, 2017, the Penal Code No. 26/NA dated May 17, 2017, and other applicable laws and regulations of the Lao People's Democratic Republic.
                </p>
                <p className="text-gray-700 dark:text-gray-300 m-0">
                  <strong>Acknowledgment:</strong> By using our services, you acknowledge that you have read, understood, and agree to the collection, use, and disclosure of your information as described in this Privacy Policy.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl mt-6 mb-12">
                <p className="text-gray-700 dark:text-gray-300 m-0">
                  <strong>Your Consent:</strong> By providing your personal information to us and by continuing to use our services, you consent to the collection, use, processing, storage, and disclosure of your personal electronic data in accordance with this Privacy Policy and applicable Lao law. For specific (sensitive) data, we will obtain your explicit consent before collection or use.
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