<template>
    <div class="container">
        <div class="row pt-5">
            <h2 class="contact-heading headings">Contact</h2>
            <p class="pt-5">"Awaiting first contact..."</p>
        </div>

        <div class="row">
            <div class="col">
                <div class="spline-contact">
                    <iframe src='https://my.spline.design/cybermannequin-013efb57449009f300fec795056b9482/' frameborder='0' width='100%' height='100%'></iframe>
                </div>
            </div>
            <div class="col">
                <div class="form-div container pb-5">
                    <form @submit.prevent="submitForm" class="mt-5">
                        <div class="contact-label-div mb-3">
                            <label for="name" class="form-label contact-label">Name</label>
                            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Enter your name" name="name" required>
                            <span v-if="formErrors.name" class="error">{{ formErrors.name }}</span>
                        </div>
                        <div class="contact-label-div mb-3">
                            <label for="email" class="form-label contact-label">Email address</label>
                            <input v-model="formData.email" type="email" class="form-control contact-form" id="email" placeholder="name@example.com" name="email" required>
                            <span v-if="formErrors.email" class="error">{{ formErrors.email }}</span>
                        </div>
                        <div class="contact-label-div mb-3">
                            <label for="message" class="form-label contact-label">Message</label>
                            <textarea v-model="formData.message" class="form-control" id="message" rows="5" placeholder="Enter your message" name="message" required></textarea>
                            <span v-if="formErrors.message" class="error">{{ formErrors.message }}</span>
                        </div>
                        <button type="submit" class="btn custom-submit-button btn-outline-success"><span>Submit</span></button>
                    </form>
                </div>
                <div class="more">
                    <p>Reach out via...</p>
                </div>
                <div class="socials">
                    <a id="profile-link" href="https://github.com/caleb-okkers" target="_blank" class="btn contact-details">
                        <i class="fab fa-github fa-2xl"></i>
                        GitHub
                    </a>
                    <a id="profile-link" href="https://www.linkedin.com/in/caleb-okkers-43b100287" target="_blank" class="btn contact-details">
                        <i class="fab fa-linkedin fa-2xl"></i>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
        <div class="content"></div>
    </div>
</template>

<script>
export default {
    name: "ContactSection",
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            },
            formErrors: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Reset errors
            this.formErrors.name = '';
            this.formErrors.email = '';
            this.formErrors.message = '';

            // Validate name
            if (!this.formData.name.trim()) {
                this.formErrors.name = 'Name is required';
            }

            // Validate email
            if (!this.formData.email.trim()) {
                this.formErrors.email = 'Email is required';
            } else if (!this.isValidEmail(this.formData.email)) {
                this.formErrors.email = 'Invalid email format';
            }

            // Validate message
            if (!this.formData.message.trim()) {
                this.formErrors.message = 'Message is required';
            }

            // Submit form if no errors
            if (!this.formErrors.name && !this.formErrors.email && !this.formErrors.message) {
                this.submitToFormspree();
            }
        },
        isValidEmail(email) {
            // Basic email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        submitToFormspree() {
            const formUrl = 'https://formspree.io/f/mzzpbkpy'; 
            fetch(formUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.formData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                alert('Form submitted successfully!');
                this.clearForm();
            })
            .catch(error => {
                console.error('There was a problem with form submission:', error);
                alert('There was an error submitting the form. Please try again later.');
            });
        },
        clearForm() {
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
        }
    }
};
</script>

<style scoped>
  .contact-heading {
  color: #fff;
  text-shadow: 2px 2px 4px #000, 5px 5px 70px cyan;
}

.contact-video {
    position: fixed;
    width: 30%;
    height: 30%;
    object-fit: cover;
    z-index: -1;
    transform: translateZ(-1px) scale(2);
}

iframe {
    width: 600px;
    height: 600px;
}

.form-div {
    width: 600px;
    height: 450px;
}

@media (max-width:475px) {

    iframe {
        width: 300px;
        height: 300px
    }

    .form-div {
        width: 100% !important;
        margin: 0 12px;
        padding-left: 0px ;
    }

    .spline-contact {
        width: 100% !important;
        padding-right: 12px;
        
    }

    .socials {
        padding-bottom: 1rem;
    }
}

</style>