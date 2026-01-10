import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata = {
  title: "Privacy & Security Policy | Bascone Foundation",
  description:
    "Read the Privacy & Security Policy of Bascone Foundation to understand how we collect, use, share, and protect your personal data.",
}

export default function PrivacySecurityPage() {
  return (
    <div>
        <Navbar/>
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy & Security Policy
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Introduction
            </h2>
            <p>
              This Privacy Policy describes how Bascone Foundation, its
              affiliates, and subsidiaries (collectively "we," "us," or "our")
              collect, use, share, protect, and process your personal data
              through our website{" "}
              <a
                href="https://sampurncare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://sampurncare.com
              </a>{" "}
              (hereinafter referred to as the "Platform").
            </p>
            <p className="mt-2">
              You may browse certain sections of the Platform without
              registering with us. Please note that we do not offer any products
              or services under this Platform outside India, and your personal
              data will primarily be stored and processed in India.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Consent
            </h2>
            <p>
              By visiting this Platform, providing your information, or availing
              any product or service offered on the Platform, you expressly
              agree to be bound by the terms and conditions of this Privacy
              Policy, the Terms of Use, and the applicable service or product
              terms and conditions.
            </p>
            <p className="mt-2">
              You also agree to be governed by the laws of India, including but
              not limited to the laws applicable to data protection and privacy.
              If you do not agree, please do not use or access our Platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Collection of Personal Data
            </h2>
            <p>
              We collect your personal data when you use our Platform, services,
              or otherwise interact with us during the course of our
              relationship. The information we collect includes but is not
              limited to:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, date of birth,
                address, telephone or mobile number, and email ID.
              </li>
              <li>
                <strong>Sensitive Personal Data:</strong> Bank account details,
                credit or debit card information, biometric data (collected
                with your consent).
              </li>
              <li>
                <strong>Transaction Details:</strong> Information related to
                your transactions on the Platform and third-party business
                partner platforms.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Usage of Personal Data
            </h2>
            <p>
              We use personal data to provide the services you request. To the
              extent we use your personal data for marketing, we will provide
              you with the ability to opt out. We use your personal data to:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Assist sellers and business partners in handling and fulfilling orders.</li>
              <li>Enhance customer experience.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Inform you about online and offline offers, products, services, and updates.</li>
              <li>Customize your experience.</li>
              <li>Detect and protect against fraud, errors, and other criminal activities.</li>
              <li>Enforce our terms and conditions.</li>
              <li>Conduct market research, analysis, and surveys.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Sharing of Personal Data
            </h2>
            <p>
              We may share your personal data internally within our group
              entities, affiliates, and subsidiaries to provide you with access
              to services and products offered by them. We may also disclose
              personal data to third parties such as:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Sellers and business partners.</li>
              <li>Third-party service providers (logistics, payment processors, etc.).</li>
              <li>Prepaid payment instrument issuers and third-party reward programs.</li>
            </ul>
            <p className="mt-3">
              These disclosures may be required to provide services, comply with
              legal obligations, enforce agreements, facilitate marketing, and
              prevent or investigate fraud or illegal activities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Security Precautions
            </h2>
            <p>
              We adopt reasonable security practices and procedures to protect
              your personal data from unauthorized access, disclosure, loss, or
              misuse. Once your information is in our possession, we adhere to
              strict security guidelines to protect it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Data Deletion and Retention
            </h2>
            <p>
              You have the option to delete your account by visiting your
              profile and settings on our Platform. This action will result in
              the loss of all information related to your account.
            </p>
            <p className="mt-2">
              We may retain your personal data for a period necessary to fulfill
              the purpose for which it was collected or as required under
              applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Your Rights
            </h2>
            <p>
              You may access, rectify, and update your personal data directly
              through the functionalities provided on the Platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our information practices. We may notify you about
              significant changes as required by applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Additional Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We are not responsible for the privacy practices of third-party websites.</li>
              <li>We may use cookies and tracking technologies.</li>
              <li>You may opt out of marketing communications at any time.</li>
              <li>We may disclose data to government authorities if required by law.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
    <Footer/>
    </div>
  )
}
