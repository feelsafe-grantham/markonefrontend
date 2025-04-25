import PageSeo from "../../components/common/PageSeo";
import styles from "./Shiping.module.css"
const ShipingAndDeliveryView = () => {
    return (
        <div className={`${styles.mainContainer} scrollbar-hidden`}>
            <PageSeo
                title="Shipping & Delivery Policy | Markone Digital Marketing Services"
                description="Learn how Markone delivers digital marketing services. Our subscription-based solutions are available globally with clear timelines and secure access."
            />

            <h2>Shipping & Delivery Policy</h2>

            <p>At <strong>markone</strong>, we offer digital marketing services through a subscription-based model. As all of our services are digital, <strong>no physical products are shipped or delivered</strong>.</p>

            <h2>Digital Service Delivery</h2>
            <p>Once your subscription is confirmed, you will receive:</p>
            <ul>
                <li>Immediate access to your selected service(s), depending on your plan</li>
                <li>A welcome email with onboarding instructions and access details</li>
                <li>Assigned support from our team within 1–2 business days</li>
            </ul>
            <p>Please ensure that your provided email address is accurate to avoid delivery delays.</p>

            <h2>Turnaround Time</h2>
            <p>Delivery timelines may vary based on the specific service and scope. Typical timeframes include:</p>
            <ul>
                <li>Social Media Management – 3–5 business days</li>
                <li>Paid Ad Campaign Setup – 3–7 business days</li>
                <li>Custom Marketing Strategy – 5–10 business days</li>
                <li>Content Calendar Creation – 3–5 business days</li>
            </ul>
            <p>Your account manager will provide an exact estimate based on your subscription.</p>

            <h2>Accessing Your Services</h2>
            <p>All deliverables and communications are provided through digital channels including:</p>
            <ul>
                <li>Email</li>
                <li>Video conferencing (Zoom, Google Meet)</li>
                <li>Shared cloud storage (Google Drive)</li>
                <li>Client dashboard (if applicable)</li>
            </ul>

            <h2>Service Availability</h2>
            <p>We serve clients globally. However, availability of certain platforms may be restricted based on regional limitations (e.g., Meta Ads or Google Ads access).</p>

            <h2>Access Issues</h2>
            <p>If you experience issues accessing your services or don’t receive onboarding instructions:</p>
            <ul>
                <li>Check your spam or junk folder</li>
                <li>Ensure your inbox isn’t full or blocking messages</li>
                <li>Contact our support team at <a href="mailto:contact@feelsafemarkone.com">contact@feelsafemarkone.com</a></li>
            </ul>

            <h2>Policy Updates</h2>
            <p><strong>markone</strong> reserves the right to update this Shipping and Delivery Policy at any time. Changes will be effective immediately upon posting to our website at <a href="https://feelsafemarkone.com/">https://feelsafemarkone.com/</a>.</p>

            <p>By subscribing to our services, you acknowledge that you have read, understood, and agreed to this Shipping and Delivery Policy.</p>
        </div>

    );
}

export default ShipingAndDeliveryView;