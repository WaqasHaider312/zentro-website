import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
    title: "Privacy Policy – Zentro Desk",
    description: "Privacy Policy for Zentro Desk customer support CRM platform.",
}

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 px-6 py-20">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-12">Last updated: March 1, 2026</p>

                    <div className="space-y-8 text-muted-foreground leading-relaxed">
                        <p>
                            Zentro Desk ("we", "our", or "us") operates a customer support CRM platform available at{" "}
                            <strong className="text-foreground">zentrodesk.com</strong>. This Privacy Policy explains
                            how we collect, use, and protect information when you use our services.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
                            <p>We collect information you provide directly, including:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Account information (name, email address, password)</li>
                                <li>Organization details (name, website)</li>
                                <li>Messages and conversations managed through our platform</li>
                                <li>Facebook, Instagram, and WhatsApp access tokens when you connect your accounts</li>
                                <li>Customer contact data (name, phone, email) received through connected channels</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">2. How We Use Facebook, Instagram & WhatsApp Data</h2>
                            <p>When you connect a Facebook Page, Instagram account, or WhatsApp Business number to Zentro Desk, we:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Access your messages solely to display them in your support inbox</li>
                                <li>Send messages on your behalf only when you explicitly reply through our platform</li>
                                <li>Store access tokens securely to maintain the connection</li>
                                <li>Never sell or share your Meta platform data with third parties</li>
                                <li>Only request permissions necessary for customer support functionality</li>
                                <li>Delete your platform data upon account termination within 30 days</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">3. Meta Platform Permissions Used</h2>
                            <p>Our application requests the following Meta permissions:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li><strong className="text-foreground">pages_messaging</strong> — To send and receive messages on Facebook Pages</li>
                                <li><strong className="text-foreground">instagram_basic, instagram_manage_messages</strong> — To manage Instagram DMs</li>
                                <li><strong className="text-foreground">whatsapp_business_messaging</strong> — To send and receive WhatsApp messages</li>
                                <li><strong className="text-foreground">whatsapp_business_management</strong> — To manage WhatsApp Business accounts</li>
                                <li><strong className="text-foreground">pages_show_list, business_management</strong> — To list connected pages and accounts</li>
                            </ul>
                            <p className="mt-3">All permissions are used exclusively to provide the customer support inbox functionality.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">4. Data Storage and Security</h2>
                            <p>
                                All data is stored securely using Supabase (PostgreSQL) with row-level security policies.
                                We use HTTPS/TLS for all data transmission. Access tokens are stored encrypted at rest.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">5. Data Retention</h2>
                            <p>
                                We retain your data for as long as your account is active. You may request deletion
                                of your data at any time — we will process all requests within 30 days.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">6. Third-Party Services</h2>
                            <p>
                                We integrate with Meta (Facebook/Instagram/WhatsApp) platforms under their Platform Terms
                                and comply with Meta's Platform Policy regarding data use, storage, and deletion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">7. Data Deletion</h2>
                            <p>
                                To request deletion of your data, visit our{" "}
                                <a href="/data-deletion" className="text-primary hover:underline">Data Deletion page</a>
                                {" "}or email{" "}
                                <a href="mailto:hello@zentrodesk.com" className="text-primary hover:underline">hello@zentrodesk.com</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">8. Contact</h2>
                            <p>
                                For privacy questions:{" "}
                                <a href="mailto:hello@zentrodesk.com" className="text-primary hover:underline">
                                    hello@zentrodesk.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}