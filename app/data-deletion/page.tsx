import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
    title: "Data Deletion – Zentro Desk",
    description: "Request deletion of your Zentro Desk data.",
}

export default function DataDeletionPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 px-6 py-20">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold text-foreground mb-2">Data Deletion Request</h1>
                    <p className="text-muted-foreground mb-12">Last updated: March 1, 2026</p>

                    <div className="space-y-8 text-muted-foreground leading-relaxed">
                        <p>
                            Zentro Desk is committed to protecting your privacy. If you connected your
                            Facebook, Instagram, or WhatsApp account to Zentro Desk and would like us to
                            delete your data, follow the instructions below.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">What Data We Store</h2>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Your Facebook/Instagram/WhatsApp page access tokens</li>
                                <li>Messages received and sent through our platform</li>
                                <li>Contact profiles created from your conversations</li>
                                <li>Your account and organization information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">How to Request Deletion</h2>
                            <p>You can request deletion of your data in two ways:</p>
                            <div className="mt-4 space-y-4">
                                <div className="rounded-xl border border-border bg-card p-6">
                                    <h3 className="font-semibold text-foreground mb-2">Option 1 — Email Request</h3>
                                    <p className="text-sm">
                                        Send an email to{" "}
                                        <a href="mailto:hello@zentrodesk.com" className="text-primary hover:underline font-semibold">
                                            hello@zentrodesk.com
                                        </a>{" "}
                                        with the subject line <strong className="text-foreground">"Data Deletion Request"</strong> and
                                        include your account email address.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-border bg-card p-6">
                                    <h3 className="font-semibold text-foreground mb-2">Option 2 — In-App Deletion</h3>
                                    <p className="text-sm">
                                        Log in to your Zentro Desk account at{" "}
                                        <a href="https://app.zentrodesk.com" className="text-primary hover:underline">
                                            app.zentrodesk.com
                                        </a>
                                        , go to <strong className="text-foreground">Settings → Organization</strong>, and
                                        delete your organization and all associated data.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">What Happens After Your Request</h2>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>We will confirm receipt of your request within 48 hours</li>
                                <li>All your data will be permanently deleted within 30 days</li>
                                <li>You will receive a confirmation email once deletion is complete</li>
                                <li>Deleted data cannot be recovered</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">Revoking Facebook/Instagram Access</h2>
                            <p>
                                You can also revoke Zentro Desk's access to your Facebook or Instagram account directly
                                from Meta's settings:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>
                                    Facebook:{" "}
                                    <a
                                        href="https://www.facebook.com/settings?tab=applications"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        facebook.com/settings → Apps and Websites
                                    </a>
                                </li>
                                <li>
                                    Instagram:{" "}
                                    <a
                                        href="https://www.instagram.com/accounts/manage_access/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        Instagram → Settings → Apps and Websites
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
                            <p>
                                For any questions about data deletion, contact us at{" "}
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