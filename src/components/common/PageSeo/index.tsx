import { Helmet } from "react-helmet-async";
// H1: Build a Website That Ranks & Converts! H2: Get More Leads, More Traffic, and More Sales
const PageSeo = ({
    title = "Best Website & SEO Solutions - Rank #1 on Google | Markone",
    description = "Boost your business with Markone’s expert website development and SEO services. Get a high-ranking, lead-generating site today!",
    image = "/images/logotranswhite.png",
    type = "website",
    keywords = "",
    canonicalUrl = "",
    url = "",
}) => {
    return (
        <Helmet>
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {/* Open Graph Meta Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={url} />}
            <meta property="og:description" content={description} />
            {/* twitter meta tags */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@grantham_org_in" />
            <meta property="og:site_name" content="Grantham"></meta>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default PageSeo;
