/* ==========================================================================
   FORM.JS — Rumit Walia Portfolio
   Contact form validation and submission handling
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) initContactForm(form);
});

function initContactForm(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const toast = document.querySelector('.toast');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous errors
    clearErrors(form);

    // Validate
    const isValid = validateForm(form);
    if (!isValid) return;

    // Show loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
    }

    try {
      // Gather form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Construct full name for fallback/logging
      const fullName = `${data.firstName || ''} ${data.lastName || ''}`.trim();

      // Try Formspree or mailto fallback
      const action = form.getAttribute('action');
      
      if (action && action.includes('formspree') && !action.includes('YOUR_FORM_ID')) {
        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
          form.reset();
        } else {
          throw new Error('Failed to send');
        }
      } else {
        // Mailto fallback
        const subject = encodeURIComponent(data.subject || 'Contact from Website');
        const body = encodeURIComponent(
          `Name: ${fullName}\nEmail: ${data.email}\n\n${data.message}`
        );
        window.location.href = `mailto:connect@rumitwalia.in?subject=${subject}&body=${body}`;
        showToast('Opening your email client...', 'info');
        form.reset();
      }
    } catch (error) {
      showToast('Something went wrong. Please try emailing directly at connect@rumitwalia.in', 'error');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message';
      }
    }
  });

  // Real-time validation on blur
  const inputs = form.querySelectorAll('.form-input, .form-textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });

    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        validateField(input);
      }
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const fields = form.querySelectorAll('[required]');

  fields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  const name = field.getAttribute('name');
  let errorMsg = '';

  // Required check
  if (field.hasAttribute('required') && !value) {
    errorMsg = 'This field is required';
  }
  // Email check
  else if (name === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      errorMsg = 'Please enter a valid email address';
    }
  }
  // Message minimum length
  else if (name === 'message' && value && value.length < 10) {
    errorMsg = 'Message should be at least 10 characters';
  }

  if (errorMsg) {
    showFieldError(field, errorMsg);
    return false;
  } else {
    clearFieldError(field);
    return true;
  }
}

function showFieldError(field, message) {
  field.classList.add('error');
  
  // Remove existing error
  const existing = field.parentElement.querySelector('.form-error');
  if (existing) existing.remove();

  const errorEl = document.createElement('span');
  errorEl.className = 'form-error';
  errorEl.textContent = message;
  field.parentElement.appendChild(errorEl);
}

function clearFieldError(field) {
  field.classList.remove('error');
  const errorEl = field.parentElement.querySelector('.form-error');
  if (errorEl) errorEl.remove();
}

function clearErrors(form) {
  form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  form.querySelectorAll('.form-error').forEach(el => el.remove());
}

function showToast(message, type = 'info') {
  // Remove existing toast
  const existing = document.querySelector('.toast.show');
  if (existing) existing.classList.remove('show');

  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.className = `toast toast--${type}`;

  // Trigger show
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto-hide after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}
