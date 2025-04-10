import React from 'react';
import './tc-style.css';

const Tandc = () => {
  // Array of objects containing the terms and conditions content
  const termsContent = [
    {
      id: 1,
      heading: "1. Introduction",
      description: "By accessing or using the services provided by INF Healthcare, you agree to comply with and be bound by these Terms and Conditions. This agreement outlines the legal responsibilities and obligations that govern your use of our services. If you do not agree to these terms, please refrain from using our services. Minors or people under 18 years old are not allowed to use this Website. It is imperative to understand that these terms are binding, and using our services constitutes acceptance of these terms. Please review them carefully to ensure compliance with all provisions."
    },
    {
      id: 2,
      heading: "2. Services Provided",
      description: "INF Healthcare offers a wide range of services including medical billing collections, credentialing services, practice management, EHR server installation & support, and new medical practice startup. Details of each service are available on our website or upon request. These services are designed to cater to the diverse needs of healthcare providers, ensuring efficiency and compliance with industry standards. Our team of professionals is committed to delivering quality services that align with the unique requirements of each client, contributing to their overall success and growth."
    },
    {
      id: 3,
      heading: "3. Intellectual Property Rights",
      description: "Other than the content you own, under these Terms, INF Healthcare and/or its licensors own all the intellectual property rights and materials contained in this Website. Unauthorized use or infringement of our intellectual property rights is strictly prohibited. This includes, but is not limited to, trademarks, copyrights, patents, and other proprietary information. Any violation of these rights may lead to legal action. Users must respect and adhere to these rights, recognizing the creativity, effort, and investment that has gone into the development of these intellectual assets."
    },
    {
      id: 4,
      heading: "4. Restrictions",
      description: "You are specifically restricted from publishing any Website material in any other media; selling, sublicensing, and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material; using this Website in any way that may be damaging or contrary to applicable laws and regulations. These restrictions are in place to protect the integrity and security of the content and services provided by INF Healthcare. Failure to comply with these restrictions may result in termination of access to the Website and potential legal consequences. It is the responsibility of the user to understand and abide by these limitations."
    },
    {
      id: 5,
      heading: "5. Your Content",
      description: "“Your Content” shall mean any audio, video text, images, or other material you choose to display on this Website. By displaying Your Content, you grant INF Healthcare a non-exclusive, worldwide irrevocable, sublicensable license to use, reproduce, adapt, publish, translate, and distribute it in all media. This license enables INF Healthcare to utilize your content for various purposes, including marketing and promotional activities. It is your responsibility to ensure that Your Content complies with all applicable laws and does not infringe any third-party rights."
    },
    {
      id: 6,
      heading: "6. Limitation of Liability",
      description: "In no event shall INF Healthcare be held liable for anything arising out of or in any way connected with your use of this Website, including any indirect, consequential, or special liability. This limitation of liability applies to all potential damages, losses, or injuries that may occur because of using the Website or engaging with INF Healthcare's services. Users must understand that they are using the Website at their own risk, and INF Healthcare will not be responsible for any unforeseen consequences or liabilities."
    },
    {
      id: 7,
      heading: "7. Indemnification",
      description: "You hereby fully indemnify INF Healthcare from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms. This indemnification clause protects INF Healthcare from any legal actions or financial responsibilities that may arise from your actions or omissions in relation to the Website or services. It is a binding commitment that underscores the importance of adhering to the Terms and Conditions, and it places the onus on you to act responsibly and in accordance with the stated provisions."
    },
    {
      id: 8,
      heading: "8. Severability",
      description: "If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein. This means that even if a part of the Terms is deemed unenforceable or illegal, the rest of the agreement will remain in effect. The severability clause ensures that the entire agreement does not become void if a particular section is found to be unlawful, preserving the integrity and enforceability of the remaining terms and conditions."
    },
    {
      id: 9,
      heading: "9. Variation of Terms",
      description: "INF Healthcare is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis. This provision allows INF Healthcare to adapt and modify the Terms to reflect changes in the law, industry practices, or the company's policies. It places a responsibility on the users to stay informed about any changes to the Terms, ensuring that they continue to comply with the updated conditions as they engage with the Website and services."
    },
    {
      id: 10,
      heading: "10. Assignment",
      description: "INF Healthcare is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms. This clause emphasizes the unilateral nature of the assignment rights, allowing INF Healthcare the flexibility to engage in business transactions that may involve transferring obligations or rights under the Terms. On the other hand, users are restricted from transferring their obligations or rights, ensuring that the relationship between INF Healthcare and the user remains consistent and controlled."
    },
    {
      id: 11,
      heading: "11. Governing Law & Jurisdiction",
      description: "These Terms will be governed by and interpreted in accordance with the laws of the United States, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the US for the resolution of any disputes. This clause establishes the legal framework that will be applied to the Terms and any disputes that may arise. By agreeing to these Terms, users acknowledge that any legal matters will be handled according to U.S. law, and within the jurisdiction of U.S. courts, ensuring a consistent legal approach."
    },
    {
      id: 12,
      heading: "12. Credentialing",
      description: "All Individual Providers must be credentialed. Credentialing means applying to preferred provider panels, health maintenance organization panels of insurance companies, and applicable governmental agencies for participating status and acceptance of the payer’s contractual rates. This process ensures that providers meet specific standards and qualifications required by various entities. It is a crucial step in maintaining the integrity and quality of services, reflecting INF Healthcare's commitment to compliance with industry regulations and standards."
    },
    {
      id: 13,
      heading: "13. Hosting and Backups",
      description: "INF Healthcare agrees to host and make available the Licensed Program and Database. Reasonable backup services at a remote location for Provider Content will be provided. This provision outlines INF Healthcare's responsibilities in maintaining the accessibility and security of digital content and data. By offering hosting and backup services, INF Healthcare demonstrates its dedication to safeguarding information and ensuring uninterrupted access to essential resources, contributing to a reliable and efficient user experience."
    },
    {
      id: 14,
      heading: "14. End User Compliance",
      description: "Users must use our services strictly in accordance with these Terms and Conditions. Any unauthorized access or misuse of our services is strictly prohibited. This clause emphasizes the importance of adhering to the agreed-upon terms, underscoring the expectation that users will engage with INF Healthcare's services in a lawful and respectful manner. It serves as a clear reminder that any actions contrary to these Terms may result in penalties or termination of access, reinforcing the seriousness of compliance with the established guidelines."
    },
    {
      id: 15,
      heading: "15. Fees and Expenses",
      description: "All fees and expenses related to our services must be paid in accordance with the payment terms set forth in this Agreement. This clause ensures that all financial obligations are clearly defined and must be met by the users. It emphasizes the importance of timely payments and adherence to the agreed-upon financial terms, contributing to a transparent and accountable relationship between INF Healthcare and its clients."
    },
    {
      id: 16,
      heading: "16. Confidentiality",
      description: "All confidential information must be maintained and protected. Unauthorized access, distribution, copying, or use of confidential information is prohibited. This provision safeguards sensitive information, reflecting INF Healthcare's commitment to privacy and security. It sets clear boundaries for handling confidential data, reinforcing the trust and integrity that are fundamental to the relationship between INF Healthcare and its users."
    },
    {
      id: 17,
      heading: "17. Business Associate Agreement",
      description: "INF Healthcare will enter into a business associate agreement in compliance with relevant laws and regulations. This clause ensures that INF Healthcare's relationships with business associates are governed by formal agreements that align with legal requirements. It underscores the organization's dedication to lawful and ethical business practices."
    },
    {
      id: 18,
      heading: "18. Additional Services",
      description: "Any additional services requested will be subject to separate agreements and fees. This provision allows for flexibility in engaging with INF Healthcare's services, recognizing that users may have unique needs that go beyond the standard offerings. It ensures that any additional services are clearly defined and subject to specific terms, maintaining clarity and transparency."
    },
    {
      id: 19,
      heading: "19. Contact Information",
      description: "For any queries or concerns related to these Terms and Conditions, please contact us at info@infhealthcare.com. This section provides a direct channel for communication, encouraging users to reach out with any questions or issues. It reflects INF Healthcare's commitment to accessibility and responsiveness, fostering an open and supportive relationship with its users."
    }
  ];

  return (
    <div className="healthcare-section">
      <div className="section-container">
        <div className="content-wrapper">
          {termsContent.map((term) => (
            <section key={term.id} className="terms-section">
              <h4 className="terms-heading">{term.heading}</h4>
              <p className="terms-description">{term.description}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tandc;