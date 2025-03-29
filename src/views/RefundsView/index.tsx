import styles from "./RefundsView.module.css"

const RefundsView = () => {
    return (
        <div className={`${styles.mainContainer} scrollbar-hidden`}>
            <h2>Refund and Cancellation Policy</h2>

            <p>At <strong>markone</strong>, we offer marketing subscription services to our clients. Once you've subscribed to our services and made the payment, the subscription fees are non-refundable.</p>

            <p>We understand that circumstances may change, and you might need to cancel your subscription. While we don't offer refunds, you can cancel your subscription at any time, and your access to our services will continue until the end of the current billing cycle.</p>

            <h2>How to Cancel Your Subscription</h2>
            <p>To cancel your subscription, email us at <a href="mailto:contact@feelsafemarkone.com">contact@feelsafemarkone.com</a>, and our team will process your cancellation request.</p>

            <h2>No Partial Refunds</h2>
            <p>Please note that we do not offer partial refunds for partially used subscription periods. Once you've paid for a subscription period, you'll have access to our services for the entire duration of that period, regardless of when you choose to cancel.</p>

            <h2>Future Automatic Renewals</h2>
            <p>Cancelling your subscription prevents future automatic renewals. You won't be billed for any additional subscription periods after successfully canceling your subscription.</p>

            <h2>Technical Issues or Service Disruptions</h2>
            <p>In rare cases of technical issues or service disruptions on our end that significantly impact your ability to use our services, we may consider offering credits or alternative arrangements on a case-by-case basis. These instances will be assessed at the discretion of <strong>markone’s</strong> customer support team.</p>

            <h2>Policy Modifications</h2>
            <p><strong>markone</strong> reserves the right to update or modify this refund and cancellation policy at any time without prior notice. Any changes to the policy will be effective immediately upon posting on our website (<a href="https://feelsafemarkone.com/">https://feelsafemarkone.com/</a>).</p>

            <p>By subscribing to our services, you acknowledge that you have read, understood, and agreed to abide by the terms outlined in this refund and cancellation policy.</p>


        </div>
    );

}
export default RefundsView;