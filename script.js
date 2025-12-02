  // Smooth scrolling for navigation
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Scroll to contact function
        function scrollToContact() {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        }

        // Theme toggle function
        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            
            // Save preference
            if (document.body.classList.contains('dark-theme')) {
                alert('Dark theme activated! 🌙');
            } else {
                alert('Light theme activated! ☀️');
            }
        }

        // Form submission handler
        function handleSubmit(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon!`);
            
            // Reset form
            e.target.reset();
        }

        // Add scroll animation
        window.addEventListener('scroll', () => {
            const skills = document.querySelectorAll('.skill-card');
            skills.forEach(skill => {
                const position = skill.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (position < screenPosition) {
                    skill.style.opacity = '1';
                    skill.style.transform = 'translateY(0)';
                }
            });
        });

        // Initialize skill cards with animation
        document.querySelectorAll('.skill-card').forEach(skill => {
            skill.style.opacity = '0';
            skill.style.transform = 'translateY(20px)';
            skill.style.transition = 'all 0.5s ease';
        });