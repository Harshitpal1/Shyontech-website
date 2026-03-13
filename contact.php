<?php
$pageTitle       = 'Contact Us';
$pageDescription = 'Get in touch with Shyontech Software Technology India Pvt. Ltd. — Gwalior, MP. We\'d love to discuss your project or training requirements.';
require_once __DIR__ . '/includes/header.php';
$site = getSiteConfig();
?>

<!-- ── Page Header ─────────────────────────────────────────── -->
<section class="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="badge badge-primary mb-4">Get In Touch</span>
        <h1 class="section-title text-site-text dark:text-white mb-4">Contact Us</h1>
        <p class="body-text text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
        </p>
    </div>
</section>

<!-- ── Contact Section ──────────────────────────────────────── -->
<section class="section bg-background dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-10">

            <!-- Info Column -->
            <div class="lg:col-span-2 space-y-6">
                <!-- Address -->
                <div class="card p-6 reveal">
                    <div class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                        <i class="fas fa-map-marker-alt text-primary text-xl"></i>
                    </div>
                    <h4 class="font-bold text-site-text dark:text-white mb-2">Our Office</h4>
                    <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"><?= htmlspecialchars($site['address']) ?></p>
                </div>
                <!-- Phone -->
                <div class="card p-6 reveal">
                    <div class="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center mb-4">
                        <i class="fas fa-phone text-green-600 text-xl"></i>
                    </div>
                    <h4 class="font-bold text-site-text dark:text-white mb-2">Phone</h4>
                    <a href="tel:<?= htmlspecialchars($site['phone']) ?>"
                       class="text-sm text-primary hover:underline font-medium"><?= htmlspecialchars($site['phone']) ?></a>
                </div>
                <!-- Email -->
                <div class="card p-6 reveal">
                    <div class="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                        <i class="fas fa-envelope text-secondary text-xl"></i>
                    </div>
                    <h4 class="font-bold text-site-text dark:text-white mb-2">Email</h4>
                    <a href="mailto:<?= htmlspecialchars($site['email']) ?>"
                       class="text-sm text-primary hover:underline font-medium"><?= htmlspecialchars($site['email']) ?></a>
                </div>
                <!-- Hours -->
                <div class="card p-6 reveal">
                    <div class="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                        <i class="fas fa-clock text-amber-500 text-xl"></i>
                    </div>
                    <h4 class="font-bold text-site-text dark:text-white mb-2">Business Hours</h4>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Mon – Sat: 9:00 AM – 7:00 PM<br>Sunday: Closed</p>
                </div>
            </div>

            <!-- Form Column -->
            <div class="lg:col-span-3 reveal">
                <div class="card p-8">
                    <h2 class="subheading text-site-text dark:text-white mb-2">Send Us a Message</h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">We'll respond within 24 business hours.</p>

                    <form id="contact-form" novalidate>
                        <div class="grid sm:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label class="form-label" for="c-name">Full Name *</label>
                                <input type="text" id="c-name" name="name" class="form-input" placeholder="John Doe" required autocomplete="name" />
                                <span class="field-error text-xs text-red-500 mt-1 block" data-error="name"></span>
                            </div>
                            <div>
                                <label class="form-label" for="c-email">Email Address *</label>
                                <input type="email" id="c-email" name="email" class="form-input" placeholder="john@example.com" required autocomplete="email" />
                                <span class="field-error text-xs text-red-500 mt-1 block" data-error="email"></span>
                            </div>
                        </div>
                        <div class="grid sm:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label class="form-label" for="c-phone">Phone Number</label>
                                <input type="tel" id="c-phone" name="phone" class="form-input" placeholder="+91 98765 43210" autocomplete="tel" />
                                <span class="field-error text-xs text-red-500 mt-1 block" data-error="phone"></span>
                            </div>
                            <div>
                                <label class="form-label" for="c-subject">Subject *</label>
                                <input type="text" id="c-subject" name="subject" class="form-input" placeholder="Project enquiry" required />
                                <span class="field-error text-xs text-red-500 mt-1 block" data-error="subject"></span>
                            </div>
                        </div>
                        <div class="mb-6">
                            <label class="form-label" for="c-message">Message *</label>
                            <textarea id="c-message" name="message" rows="5" class="form-input resize-none"
                                      placeholder="Tell us about your project or requirement…" required></textarea>
                            <span class="field-error text-xs text-red-500 mt-1 block" data-error="message"></span>
                        </div>
                        <button type="submit" class="btn-primary w-full justify-center">
                            Send Message <i class="fas fa-paper-plane text-sm"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ── Google Maps ──────────────────────────────────────────── -->
<section class="bg-background dark:bg-gray-950 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl overflow-hidden shadow-lg reveal">
            <iframe
                title="Shyontech Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.5!2d78.169!3d26.218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5b4c3b4b0c1%3A0x6a8b7b3e2d5f4a0d!2sGovind%20Puri%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style="border:0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
