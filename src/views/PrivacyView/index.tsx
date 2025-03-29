import styles from "./PrivacyView.module.css";
const PrivacyView = () => {
    return (
        <div className={`${styles.mainContainer} scrollbar-hidden`}>
            <h2>Effective Date: February 9, 2025</h2>

            <p>
                <strong>markone</strong> ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our LinkedIn lead generation forms and Meta (Facebook) forms. By providing your information, you agree to the terms of this Privacy Policy.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
                We collect personal information that you voluntarily provide to us through our LinkedIn lead generation forms and Meta forms. The information we collect includes:
            </p>
            <ul>
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
                <li>To provide you with information about our products and services.</li>
                <li>To respond to your inquiries and requests.</li>
                <li>To improve our services and customer experience.</li>
                <li>To send promotional and marketing communications that may be of interest to you.</li>
                <li>To comply with legal obligations and protect our legal rights.</li>
            </ul>

            <h3>3. Disclosure of Your Information</h3>
            <p>We do not share your personal information with third parties.</p>

            <h3>4. Data Security</h3>
            <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of your data.
            </p>

            <h3>5. Your Privacy Rights</h3>
            <p>
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict its use. To exercise these rights, please contact us using the information provided below.
            </p>

            <h3>6. Third-Party Links</h3>
            <p>Our LinkedIn and Meta forms do not contain links to any third-party websites or services.</p>

            <h3>7. Children's Privacy</h3>
            <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
            </p>

            <h3>8. Changes to This Privacy Policy</h3>
            <p>
                We may update this Privacy Policy from time to time. When we do, we will post the updated policy on this page and update the effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>

            <h3>9. Contact Us</h3>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>

            <address>
                <p><strong>markone</strong></p>
                <p>Website: <a href="https://feelsafemarkone.com">feelsafemarkone.com</a></p>
                <p>Email: <a href="mailto:contact@feelsafemarkone.com">contact@feelsafemarkone.com</a></p>
            </address>

            <p>By providing your information through our LinkedIn lead generation forms and Meta forms, you consent to this Privacy Policy.</p>
        </div>

    );
}

export default PrivacyView;