import React from 'react';
import './cookies-style.css';

const CookiesPolicy = () => {
  // Array of objects containing the cookies policy content
  const cookiesContent = [
    {
      id: 1,
      heading: "Introduction",
      description: "Welcome to INF Healthcare's Cookies Policy. This policy aims to provide you with a clear understanding of how cookies are used on our website, www.infhealthcare.com, to enhance your browsing experience. By using our website, you consent to the use of cookies in accordance with this policy."
    },
    {
      id: 2,
      heading: "What Are Cookies?",
      description: "Cookies are small text files that are stored on your computer or mobile device when you visit a website. These files enable the website to remember your actions and preferences, such as login information, language settings, and other display preferences, over a period."
    },
    {
      id: 3,
      heading: "Types of Cookies We Use",
      description: "Any of the cookies we use fall into the following categories: <ul className=\"cookies-list\"><li>Strictly Necessary Cookies: These cookies are essential for the proper functioning of our website. They enable you to navigate around the site and use its features.</li><li>Performance Cookies: These cookies collect information about how you use our website, such as which pages you visit most often. All information collected is anonymous and is only used to improve the site's performance.</li><li>Functional Cookies: These cookies allow our website to remember choices you make, such as your username or language preference, to provide a more personalized experience.</li><li>Targeting/Advertising Cookies: These cookies are used to deliver advertisements that are more relevant to you and your interests.</li></ul>"
    },
    {
      id: 4,
      heading: "How We Use Cookies",
      description: "We use cookies in the following ways: <ul className=\"cookies-list\"><li>To Enhance User Experience: Cookies help us tailor the website to your personal needs and preferences.</li><li>To Improve Website Performance: We use cookies to analyze user behavior, which helps us improve the functionality and content of the site.</li><li>For Marketing Purposes: Cookies allow us to provide you with targeted advertising and marketing campaigns that are aligned with your interests.</li></ul>"
    },
    {
      id: 5,
      heading: "Third-Party Cookies",
      description: "We may also use third-party cookies from companies that we have a relationship with, such as Google Analytics, to help us gather data on how you interact with our website. These cookies are subject to their respective privacy policies."
    },
    {
      id: 6,
      heading: "Managing Cookies",
      description: "You have the option to manage cookies through your web browser settings. Most browsers allow you to block cookies, delete existing cookies, or warn you before a cookie is stored on your device. Please note that disabling cookies may affect the functionality of our website."
    },
    {
      id: 7,
      heading: "Changes to This Cookies Policy",
      description: "We may update this Cookies Policy from time to time to reflect changes in legal or regulatory obligations or updates in technology. The date of the most recent update will be noted at the top of this policy."
    },
    {
      id: 8,
      heading: "Contact Us",
      description: "If you have any questions or concerns regarding this Cookies Policy, please contact us at: <br/> <b>Email:</b> info@infhealthcare.com <br/> <b>Phone:</b> 888-512-6265 <br/> <b>Address:</b> 600 Broadway, STE 200 #5035, Albany, New York 12207"
    }
  ];

  return (
    <div className="healthcare-section">
      <div className="section-container">
        <div className="content-wrapper">
          {cookiesContent.map((section) => (
            <section key={section.id} className="cookies-section">
              <h2 className="cookies-heading">{section.heading}</h2>
              <div
                className="cookies-description"
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;