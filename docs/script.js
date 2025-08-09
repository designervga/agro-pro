// Form validation and interaction (visual only)
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const form = document.getElementById('waitlist-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const contactInput = document.getElementById('contact');
            const errorMsg = document.getElementById('contact-error');
            const submitBtn = document.getElementById('submit-btn');
            const btnText = document.getElementById('btn-text');
            const loadingSpinner = document.getElementById('loading-spinner');
            
            // Simple validation
            if (!contactInput.value.trim()) {
                e.preventDefault();
                contactInput.classList.add('error');
                errorMsg.style.display = 'block';
                contactInput.focus();
                return;
            }
            
            // Basic email/phone validation
            const value = contactInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^\+\d{1,3}\s?\d{1,3}\s?\d{4,5}-?\d{4}$/;
            
            if (!emailRegex.test(value) && !phoneRegex.test(value)) {
                e.preventDefault();
                contactInput.classList.add('error');
                errorMsg.style.display = 'block';
                errorMsg.textContent = 'Insira um e-mail válido ou WhatsApp com DDI (ex: +55 11 9XXXX-XXXX)';
                contactInput.focus();
                return;
            }
            
            // Remove error state
            contactInput.classList.remove('error');
            errorMsg.style.display = 'none';
            
            // Show loading state
            submitBtn.disabled = true;
            btnText.textContent = 'Processando...';
            loadingSpinner.style.display = 'block';
            
            // For demo purposes, we'll proceed to the thank you page
            // In a real implementation, this would be handled by the backend
        });
    }

    // Remove error state on input
    const contactInput = document.getElementById('contact');
    if (contactInput) {
        contactInput.addEventListener('input', function() {
            this.classList.remove('error');
            const errorMsg = document.getElementById('contact-error');
            if (errorMsg) {
                errorMsg.style.display = 'none';
                errorMsg.textContent = 'Insira um e-mail ou WhatsApp com DDI.';
            }
        });

        // Real-time validation feedback
        contactInput.addEventListener('blur', function() {
            const value = this.value.trim();
            if (value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const phoneRegex = /^\+\d{1,3}\s?\d{1,3}\s?\d{4,5}-?\d{4}$/;
                
                if (emailRegex.test(value) || phoneRegex.test(value)) {
                    this.classList.add('valid');
                    this.classList.remove('error');
                }
            }
        });
    }

    // A/B Testing placeholder (for future implementation)
    const urlParams = new URLSearchParams(window.location.search);
    const variant = urlParams.get('variant') || 'A'; // This would come from URL parameter or random assignment
    
    if (variant === 'B') {
        const headlineA = document.getElementById('headline-a');
        const headlineB = document.getElementById('headline-b');
        if (headlineA && headlineB) {
            headlineA.style.display = 'none';
            headlineB.style.display = 'block';
        }
    }

    // Accessibility improvements
    const focusableElements = document.querySelectorAll('input, button, a[href], [tabindex]:not([tabindex="-1"])');
    
    // Add focus visible class for better focus indicators
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focus-visible');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('focus-visible');
        });
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form analytics placeholder (for future implementation)
    function trackEvent(eventName, eventData) {
        // Placeholder for analytics tracking
        console.log('Analytics Event:', eventName, eventData);
        
        // Future implementation:
        // gtag('event', eventName, eventData);
        // or
        // analytics.track(eventName, eventData);
    }

    // Track form interactions
    if (contactInput) {
        contactInput.addEventListener('focus', () => {
            trackEvent('form_field_focus', { field: 'contact' });
        });
    }

    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            trackEvent('form_submit_attempt', { 
                variant: variant,
                timestamp: new Date().toISOString()
            });
        });
    }

    // Track checkbox interaction
    const communicationsCheckbox = document.getElementById('communications');
    if (communicationsCheckbox) {
        communicationsCheckbox.addEventListener('change', function() {
            trackEvent('communications_consent', { 
                opted_in: this.checked 
            });
        });
    }

    // Intersection Observer for scroll tracking (analytics)
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    trackEvent('section_view', { 
                        section: entry.target.className || entry.target.tagName 
                    });
                }
            });
        }, { threshold: 0.5 });

        // Observe main sections
        document.querySelectorAll('section').forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // Detect and track referrer information
    const referrer = document.referrer;
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');

    if (referrer || utmSource) {
        trackEvent('page_view', {
            referrer: referrer,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            variant: variant
        });
    }
});

// Utility function for future backend integration
function submitWaitlistForm(formData) {
    // Placeholder for actual form submission
    return new Promise((resolve, reject) => {
        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            resolve({ success: true, message: 'Successfully added to waitlist' });
        }, 1000);
    });
}

// Error handling for production
window.addEventListener('error', function(event) {
    console.error('JavaScript Error:', event.error);
    // In production, you might want to send this to an error tracking service
});

// Performance monitoring placeholder
if ('performance' in window) {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
        
        // Track page performance
        trackEvent('page_performance', {
            load_time: loadTime,
            dom_content_loaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
        });
    });
}
